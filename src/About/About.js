import Contact from "../Contact/Contact";
import "./About.css";

const About = () => {
  return (
    <section className="about app__section">
      <div className="about__intro">
        <p className="about__intro-text">Hi, im</p>
        <h1 className="about__title">Shane O'Brien</h1>
        <Contact />
      </div>

      <p className="about__text">
        A dedicated
        <span className="about__text-em"> Full-Stack Web Developer</span> based
        in Orlando, FL, I bring a background in digital marketing and sound
        engineering to my current technical journey. I seamlessly blend these
        diverse experiences for a holistic approach to web development.
      </p>
      <p className="about__text">
        Embarking on my coding journey in 2022, I've been on an exciting quest
        to explore the vast realms of technology. With a specialization in React
        and Node, my primary focus is on frontend development. I am committed to
        creating elegant code and solving intricate problems in this dynamic and
        ever-evolving landscape.
      </p>
      {/* add some cool stuff here to expand the page */}
    </section>
  );
};

export default About;
