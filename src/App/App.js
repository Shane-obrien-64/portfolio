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
  const [activeModal, setActiveModal] = useState(false);

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
    setSelectedCard(card);
    setActiveModal(true);
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
        <Route
          path="/projects"
          element={<Projects handleSelectedCard={handleSelectedCard} />}
        />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
      {activeModal === true && (
        <Modal closeModal={closeModal} selectedCard={selectedCard} />
      )}
    </div>
  );
}

export default App;
