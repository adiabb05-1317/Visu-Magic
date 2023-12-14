import "./App.css";
import VisuMagic from "./components/VisuMagic";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
<<<<<<< HEAD
import Generation from "./components/Generation";
=======
import LoginAuth from "./components/Login";
>>>>>>> 13050fd (added firebase)
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<HomePage />} />
          <Route path="/prompt" element={<VisuMagic />} />
          <Route path="/generate" element={<Generation />} />
=======
          <Route path="/" element={<HomePage/>} />
          <Route path="/prompt" element={<VisuMagic/>} />
          <Route path="/Login" element={<LoginAuth/>} />
>>>>>>> 13050fd (added firebase)
        </Routes>
      </div>
    </Router>
  );
}

export default App;
