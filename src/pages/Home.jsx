import "./Home.css";
import women1 from "../assets/hometop.png";
import women2 from "../assets/homebottom.png";
import wind1 from "../assets/wind1.png";
import wind2 from "../assets/wind2.png";
import circle from "../assets/homeanime.gif";
import { homes } from "../utils/home.js";
const Home = ({ homeRef }) => {
  return (
    <section ref={homeRef}>
      <div className="home-container">
        <div className="img-group">
          <img src={wind1} alt="wind" className="wind1" />
          <img src={wind2} alt="wind" className="wind2" />
        </div>
        <div className="home-contain">
          <div className="home-left">
            <div className="home-title">
              Start your new journey with{" "}
              <span className="title-highlight">Breathe Matters</span>
            </div>
            <p>
              Elevating well-being through innovative solutions, where every
              breath unfolds a path to tranquility and vibrant living
            </p>
            <div className="home-groups">
              <button>Join Us</button>
              {homes?.map((home) => (
                <div className="home-awards" key={home?.id}>
                  <img src={home?.img} alt="trustworthy" className="awards" />
                  <p>{home?.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="home-right">
            <img src={circle} alt="circle" className="circle" />
            <div className="img-grp">
              <img src={women1} alt="women1" className="homew1" />
              <img src={women2} alt="women2" className="homew2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
