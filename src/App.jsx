import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* You can add your future <Route path="/projects" element={<Projects />} /> here later! */}
      </Routes>
    </Router>
  );
}

export default App;
