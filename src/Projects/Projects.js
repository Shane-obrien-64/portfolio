import wtwrLogo from "../Images/wtwr.svg";
import inDexLogo from "../Images/inDex.svg";
import aroundtheUSLogo from "../Images/aroundtheUS.svg";
import wtwrSS from "../Images/wtwr_sc.png";
import atusSS from "../Images/atus_sc.png";
import indexSS from "../Images/index_sc.png";
import "./Projects.css";

const Projects = ({ handleSelectedCard }) => {
  const cardData = [
    {
      title: "WTWR",
      logoSrc: wtwrLogo,
      imgSrc: wtwrSS,
      text: "Seamlessly blending fashion and forecast, WTWR helps users dress appropriately for the weather by curating outfits from their wardrobe. Its frontend, built with React.js, ensures a user-friendly experience, while the robust backend, powered by MongoDB and Express.js, delivers accurate recommendations.",
    },
    {
      title: "inDex",
      logoSrc: inDexLogo,
      imgSrc: indexSS,
      text: "Showcasing a fusion of creativity and functionality, InDex is a dynamic single-page application proficiently crafted with React.js and CSS3. Demonstrating expertise in API integration, it elegantly displays data from third-party sources while employing adaptive design principles for an optimized user experience.",
    },

    {
      title: "Around the US",
      logoSrc: aroundtheUSLogo,
      imgSrc: atusSS,
      text: "Offering a vibrant platform reminiscent of Instagram, this web app invites users to share their photographic adventures across America. Mastering fundamental web development techniques, its frontend boasts responsive design and seamless integration of third-party APIs, showcasing foundational skills in JavaScript, CSS3, and HTML5.",
    },
  ];
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
