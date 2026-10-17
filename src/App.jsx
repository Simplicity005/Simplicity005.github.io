import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./components/layouts/Background";
import FluidCursor from "./components/ui/FluidCursor";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Background />
      <FluidCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
