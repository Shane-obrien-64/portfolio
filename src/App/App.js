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
  const [activeModal, setActiveModal] = useState(true);

  const goToMain = () => {
    navigate("/");
  };
  const goToProjects = () => {
    navigate("/projects");
  };
  const goToResume = () => {
    navigate("/resume");
  };
  const closeModal = () => {
    setActiveModal(false);
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
      {activeModal === true && (
        <div className="modal" onClick={closeModal}>
          <div className="modal__container">
            <h2 className="modal__title">Title</h2>
            <p className="modal__text">
              about content here dsd grgh yutioeru vdjhrwe ferslhfeh hjlfhes
              fesh h efs f fdsakjkfds rew rnfds kjas aaa bbb wwewqr kdfdsf dfsa
              r e qw fdsfg nmngtmopj kljyt oupiyt gfd csa
            </p>
            <img
              className="modal__img"
              src={
                "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg"
              }
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
