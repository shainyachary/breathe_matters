import aboutimg from "../assets/about.gif";
import "./About.css";
const About = ({ aboutRef }) => {
  return (
    <section ref={aboutRef}>
      <div className="title">
        <div className="main-title">About</div>
        <div className="sub-title">
          A sanctuary of wellness where every breath counts
        </div>
      </div>
      <div className="about-content">
        <div className="about-left">
          <p>
            "At BreatheMatters, we believe in the transformative power of
            conscious breathing. Dedicated to enhancing your respiratory
            well-being, we craft innovative products designed to bring
            tranquility and vitality into every breath. Join us in the journey
            towards a healthier, balanced life - where each inhale and exhale
            contributes to your overall sense of wellness. Breathe freely, live
            fully with BreatheMatters "
          </p>
          <div className="about-social">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-square-x-twitter"></i>
            <i className="fa-brands fa-discord"></i>
          </div>
        </div>
        <div className="about-right">
          <img src={aboutimg} alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
