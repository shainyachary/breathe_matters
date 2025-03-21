import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Queries from "./pages/Queries";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useRef } from "react";

const App = () => {
  const homeRef = useRef();
  const productsRef = useRef();
  const aboutRef = useRef();
  const queriesRef = useRef();

  return (
    <>
      <Navbar
        homeRef={homeRef}
        productsRef={productsRef}
        aboutRef={aboutRef}
        queriesRef={queriesRef}
      />
      <div className="container">
        <Home homeRef={homeRef} />
        <Products productsRef={productsRef} />
        <About aboutRef={aboutRef} />
        <Queries queriesRef={queriesRef} />
      </div>
      <Footer />
    </>
  );
};

export default App;
