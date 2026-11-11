import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "motion/react";

function Background() {
  const canvasRef = useRef(null);
  const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 600);
  const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 400);

  // Smooth, critically damped Motion physics spring for cursor illumination
  const springX = useSpring(mouseX, { stiffness: 90, damping: 26, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 26, mass: 0.6 });

  // Reactive radial mask that illuminates the dot grid around the cursor
  const lightMask = useMotionTemplate`radial-gradient(480px circle at ${springX}px ${springY}px, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.12) 50%, transparent 80%)`;

  useEffect(() => {
    const handlePointerMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [mouseX, mouseY]);

  // Conway's Game of Life Mathematical Cellular Automaton Simulation (Monochrome)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const cellSize = 16;
    let cols = Math.ceil(width / cellSize);
    let rows = Math.ceil(height / cellSize);
    let totalCells = cols * rows;

    let grid = new Uint8Array(totalCells);
    let nextGrid = new Uint8Array(totalCells);
    let cellAge = new Float32Array(totalCells);

    const spawnGlider = (startCol, startRow) => {
      const pattern = [
        [0, 1],
        [1, 2],
        [2, 0],
        [2, 1],
        [2, 2],
      ];
      pattern.forEach(([dr, dc]) => {
        const r = (startRow + dr + rows) % rows;
        const c = (startCol + dc + cols) % cols;
        const idx = r * cols + c;
        grid[idx] = 1;
        cellAge[idx] = 1.0;
      });
    };

    const spawnPulsar = (startCol, startRow) => {
      const beacon = [
        [0, 0], [0, 1], [1, 0],
        [2, 3], [3, 2], [3, 3],
      ];
      beacon.forEach(([dr, dc]) => {
        const r = (startRow + dr + rows) % rows;
        const c = (startCol + dc + cols) % cols;
        const idx = r * cols + c;
        grid[idx] = 1;
        cellAge[idx] = 1.0;
      });
    };

    const spawnAcorn = (startCol, startRow) => {
      const acorn = [
        [0, 1],
        [1, 3],
        [2, 0], [2, 1], [2, 4], [2, 5], [2, 6],
      ];
      acorn.forEach(([dr, dc]) => {
        const r = (startRow + dr + rows) % rows;
        const c = (startCol + dc + cols) % cols;
        const idx = r * cols + c;
        grid[idx] = 1;
        cellAge[idx] = 1.0;
      });
    };

    const seedRandomLife = () => {
      for (let i = 0; i < totalCells; i++) {
        if (Math.random() < 0.08) {
          grid[i] = 1;
          cellAge[i] = 1.0;
        } else {
          grid[i] = 0;
          cellAge[i] = 0;
        }
      }
      spawnGlider(4, 4);
      spawnGlider(Math.floor(cols * 0.4), 6);
      spawnAcorn(Math.floor(cols * 0.7), Math.floor(rows * 0.35));
      spawnPulsar(Math.floor(cols * 0.25), Math.floor(rows * 0.55));
    };

    seedRandomLife();

    const injectLifeAt = (x, y, radius = 2) => {
      const centerCol = Math.floor(x / cellSize);
      const centerRow = Math.floor(y / cellSize);
      for (let dr = -radius; dr <= radius; dr++) {
        for (let dc = -radius; dc <= radius; dc++) {
          if (Math.random() > 0.4) {
            const r = (centerRow + dr + rows) % rows;
            const c = (centerCol + dc + cols) % cols;
            const idx = r * cols + c;
            grid[idx] = 1;
            cellAge[idx] = 1.0;
          }
        }
      }
    };

    let lastPointerX = 0;
    let lastPointerY = 0;
    const handlePointer = (e) => {
      const dist = Math.hypot(e.clientX - lastPointerX, e.clientY - lastPointerY);
      if (dist > 28) {
        lastPointerX = e.clientX;
        lastPointerY = e.clientY;
        injectLifeAt(e.clientX, e.clientY, 1);
      }
    };

    const handleClick = (e) => {
      injectLifeAt(e.clientX, e.clientY, 3);
      spawnGlider(Math.floor(e.clientX / cellSize), Math.floor(e.clientY / cellSize));
    };

    window.addEventListener("pointermove", handlePointer, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      cols = Math.ceil(width / cellSize);
      rows = Math.ceil(height / cellSize);
      totalCells = cols * rows;
      grid = new Uint8Array(totalCells);
      nextGrid = new Uint8Array(totalCells);
      cellAge = new Float32Array(totalCells);
      seedRandomLife();
    };

    window.addEventListener("resize", handleResize);

    let lastTick = 0;
    const tickInterval = 95;

    const render = (now) => {
      if (now - lastTick > tickInterval) {
        lastTick = now;
        let activeCount = 0;

        for (let r = 0; r < rows; r++) {
          const rPrev = (r - 1 + rows) % rows;
          const rNext = (r + 1) % rows;
          const rOff = r * cols;
          const rPrevOff = rPrev * cols;
          const rNextOff = rNext * cols;

          for (let c = 0; c < cols; c++) {
            const cPrev = (c - 1 + cols) % cols;
            const cNext = (c + 1) % cols;

            const neighbors =
              grid[rPrevOff + cPrev] +
              grid[rPrevOff + c] +
              grid[rPrevOff + cNext] +
              grid[rOff + cPrev] +
              grid[rOff + cNext] +
              grid[rNextOff + cPrev] +
              grid[rNextOff + c] +
              grid[rNextOff + cNext];

            const idx = rOff + c;
            const isAlive = grid[idx];

            if (isAlive) {
              if (neighbors === 2 || neighbors === 3) {
                nextGrid[idx] = 1;
                cellAge[idx] = Math.min(1.0, cellAge[idx] + 0.15);
                activeCount++;
              } else {
                nextGrid[idx] = 0;
                cellAge[idx] *= 0.82;
              }
            } else {
              if (neighbors === 3) {
                nextGrid[idx] = 1;
                cellAge[idx] = 0.95;
                activeCount++;
              } else {
                nextGrid[idx] = 0;
                cellAge[idx] *= 0.82;
              }
            }
          }
        }

        const temp = grid;
        grid = nextGrid;
        nextGrid = temp;

        if (activeCount < 22) {
          spawnGlider(Math.floor(Math.random() * (cols - 8)), Math.floor(Math.random() * (rows - 8)));
          spawnAcorn(Math.floor(Math.random() * (cols - 8)), Math.floor(Math.random() * (rows - 8)));
        }
      } else {
        for (let i = 0; i < totalCells; i++) {
          if (!grid[i] && cellAge[i] > 0.01) {
            cellAge[i] *= 0.96;
          }
        }
      }

      ctx.clearRect(0, 0, width, height);

      // Pure Monochrome Black & White Cellular Rendering
      for (let r = 0; r < rows; r++) {
        const rOff = r * cols;
        for (let c = 0; c < cols; c++) {
          const idx = rOff + c;
          const age = cellAge[idx];
          if (age > 0.02) {
            const x = c * cellSize;
            const y = r * cellSize;
            const isLive = grid[idx];

            ctx.fillStyle = isLive
              ? `rgba(255, 255, 255, ${age * 0.24})`
              : `rgba(255, 255, 255, ${age * 0.06})`;

            ctx.fillRect(x + 1, y + 1, cellSize - 2, cellSize - 2);

            if (isLive && age > 0.5) {
              ctx.fillStyle = `rgba(255, 255, 255, ${age * 0.72})`;
              ctx.fillRect(x + Math.floor(cellSize / 2) - 1, y + Math.floor(cellSize / 2) - 1, 2, 2);
            }
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("pointermove", handlePointer);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="ambient-background-root" aria-hidden="true">
      <div className="bg-canvas-base" />

      <canvas
        ref={canvasRef}
        className="conway-life-canvas"
      />

      <motion.div
        className="minimalist-dot-grid interactive-light-grid"
        style={{
          WebkitMaskImage: lightMask,
          maskImage: lightMask,
        }}
      />

      <div className="minimalist-dot-grid base-grid" />
      <div className="ambient-vignette" />
    </div>
  );
}

export default Background;
