import cardData from "../utils/const";
import "./Projects.css";

const Projects = ({ handleSelectedCard }) => {
  const handleCardClick = (card) => {
    handleSelectedCard(card);
  };
  return (
    <section className="projects app__section">
      <ul className="projects__list">
        {cardData.map((card, index) => (
          <li key={index} className="projects__card">
            <div className="projects__card-container">
              <h2 className="projects__card-title">{card.title}</h2>
              <img
                src={card.logoSrc}
                className="projects__card-logo"
                alt={`${card.title} Logo`}
              />
            </div>
            <img
              className="projects__image"
              src={card.imgSrc}
              onClick={() => handleCardClick(card)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
