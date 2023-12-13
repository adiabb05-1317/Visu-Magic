import "./App.css";
import VisuMagic from "./components/VisuMagic";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Generation from "./components/Generation";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prompt" element={<VisuMagic />} />
          <Route path="/generate" element={<Generation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
