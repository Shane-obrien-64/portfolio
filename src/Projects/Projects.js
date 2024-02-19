import wtwr from "../Images/wtwr.svg";
import inDex from "../Images/inDex.svg";
import aroundtheUS from "../Images/aroundtheUS.svg";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects app__section">
      <ul className="projects__list">
        <li className="projects__item">
          <div className="projects__item-container">
            <h2 className="projects__item-title">WTWR</h2>
            <img src={wtwr} className="projects__item-logo" />
          </div>
        </li>
        <li className="projects__item">
          <div className="projects__item-container">
            <h2 className="projects__item-title">inDex</h2>
            <img src={inDex} className="projects__item-logo" />
          </div>
        </li>
        <li className="projects__item">
          <div className="projects__item-container">
            <h2 className="projects__item-title">Around the US</h2>
            <img src={aroundtheUS} className="projects__item-logo" />
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
