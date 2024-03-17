import Header from "../Header/Header";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
import Footer from "../Footer/Footer";
import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);

  const goToMain = () => {
    navigate("/");
  };
  const goToProjects = () => {
    navigate("/projects");
  };
  const goToResume = () => {
    navigate("/resume");
  };
  return (
    <div className="app">
      <Header
        goToMain={goToMain}
        goToProjects={goToProjects}
        goToResume={goToResume}
      />
      <Routes>
        <Route path="*" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
