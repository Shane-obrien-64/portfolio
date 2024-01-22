import resume from "../utils/resume.pdf";
import "./Resume.css";

const Resume = () => {
  return (
    <section className="resume app__section">
      <object
        className="resume__file"
        data={resume}
        type="application/pdf"
      ></object>
    </section>
  );
};

export default Resume;
