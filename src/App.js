import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import NotFound from "./pages/NotFound";
import About from "./pages/About";
import User from "./pages/User";
import { GithubProvider } from "./hooks/GithubContext";

function App() {
  return (
    <GithubProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:login" element={<User />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </GithubProvider>
  );
}

export default App;
