import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./components/layouts/Background"; // Update this path to where your Background component is saved
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      {/* Background is placed outside Routes so it persists across all pages */}
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* You can add your future <Route path="/projects" element={<Projects />} /> here later! */}
      </Routes>
    </Router>
  );
}

export default App;
