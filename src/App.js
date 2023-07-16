import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Routes path="/" element={Home} />
        <Routes path="/" element={About} />
        <Routes path="/|*" element={NotFound} />
      </Routes>
    </Router>
  );
}

export default App;
