import logo from "../assets/logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-upper">
        <div className="footer-brand">
          <img src={logo} alt="logo" />
          <p>
            Join us on a journey towards a healthier, balanced life - where each
            inhale and exhale contributes to your overall sense of wellness
          </p>
        </div>
        <div className="footer-site">
          <h4 className="footer-title">site map</h4>
          <ul className="footer-links">
            <li>Home</li>
            <li>Products</li>
            <li>Queries</li>
            <li>About</li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4 className="footer-title">contact</h4>
          <ul className="footer-links">
            <li>Phone</li>
            <li>Email</li>
            <li>Location</li>
          </ul>
        </div>
        <div className="footer-touch">
          <h4 className="footer-title">stay on touch</h4>
          <ul className="footer-social">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-square-x-twitter"></i>
            <i className="fa-brands fa-discord"></i>
          </ul>
        </div>
      </div>
      <div className="footer-lower">
        <p>@2024 BreatheMatters all rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
