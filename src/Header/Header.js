import Nav from "../Nav/Nav";
import logo from "../Images/logo.svg";
import "./Header.css";

const Header = ({ goToMain, goToProjects, goToResume }) => {
  return (
    <header className="header">
      <Nav
        goToMain={goToMain}
        goToProjects={goToProjects}
        goToResume={goToResume}
      />
      <img onClick={goToMain} src={logo} className="header__logo" alt="logo" />
    </header>
  );
};

export default Header;
