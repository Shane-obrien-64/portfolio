import Header from "../Header/Header";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";
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
  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setActiveModal(false);
    }
  };
  const handleSelectedCard = (card) => {
    setActiveModal(true);
    setSelectedCard(card);
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
        <Modal
          closeModal={closeModal}
          // handleSelectedCard={handleSelectedCard}
        />
      )}
    </div>
  );
}

export default App;
