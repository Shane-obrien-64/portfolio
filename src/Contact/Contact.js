import gitHubImg from "../Images/github-mark-white.svg";
import linkedinImg from "../Images/linkedin_icon.svg";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <a className="contact__link" href="https://github.com/Shane-obrien-64">
        <img className="contact__link-img" src={gitHubImg} alt="github logo" />
      </a>
      <a
        className="contact__link"
        href="https://www.linkedin.com/in/shane-o-brien-0192a6275/"
      >
        <img
          className="contact__link-img"
          src={linkedinImg}
          alt="linkedin logo"
        />
      </a>
    </div>
  );
};

export default Contact;
