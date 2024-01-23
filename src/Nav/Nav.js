import "./Nav.css";

const Nav = ({ goToMain, goToProjects, goToResume }) => {
  return (
    <nav className="nav">
      <button onClick={goToMain} className="nav__link">
        About
      </button>
      <button onClick={goToProjects} className="nav__link">
        Projects
      </button>
      <button onClick={goToResume} className="nav__link">
        Resume
      </button>
    </nav>
  );
};

export default Nav;
