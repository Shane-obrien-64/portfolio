import Nav from "../Nav/Nav";
import logo from "../Images/logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Nav />
      <img src={logo} className="header__logo" alt="logo" />
    </header>
  );
};

export default Header;
