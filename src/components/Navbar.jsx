import { useState } from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = ({ homeRef, productsRef, aboutRef, queriesRef }) => {
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behaviour: "smooth" });
  };
  const [open, setOpen] = useState(true);
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className={`navlinks ${open ? "open" : ""}`}>
        <li onClick={() => scrollToSection(homeRef)}>Home</li>
        <li onClick={() => scrollToSection(productsRef)}>products</li>
        <li onClick={() => scrollToSection(aboutRef)}>about</li>
        <li onClick={() => scrollToSection(queriesRef)}>queries</li>
        <li>Contact</li>
      </ul>
      <div className="menu" onClick={() => setOpen(!open)}>
        {open ? (
          <i className="fa-solid fa-bars"></i>
        ) : (
          <i className="fa-solid fa-xmark"></i>
        )}
      </div>
    </div>
  );
};

export default Navbar;
