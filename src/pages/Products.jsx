import { useState, useEffect } from "react";
import product1 from "../assets/Property1.png";
import product2 from "../assets/Property2.png";
import product3 from "../assets/Property3.png";
import product4 from "../assets/Property4.png";
import logo from "../assets/Breathe_Logo.png";
import { products } from "../utils/products";
import "./Product.css";
const Products = ({ productsRef }) => {
  const images = [product1, product2, product3, product4];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <section ref={productsRef}>
      <div className="title">
        <div className="main-title">Our Products</div>
        <div className="sub-title">
          Where wellness meets innovation in every inhale and exhale
        </div>
      </div>
      <div className="img-container">
        <img src={images[currentIndex]} alt="products" />
      </div>
      <div className="prod-contain">
        <div className="prod-title">
          The CapnoTrainer
          <span style={{ fontSize: "30px", verticalAlign: "middle" }}>
            &reg;
          </span>{" "}
          Go
        </div>
        <div className="prod-subtitle">
          This instrument is a combination of hardware and software system that
          provides users with training and learning tools for personalized
          breathing education based on the principles of behavioral analysis
          through the presentation of both live and recorded physiology. There
          are five versions of the CapnoTrainer{" "}
          <span
            style={{
              fontSize: "20px",
              verticalAlign: "middle",
            }}
          >
            &reg;
          </span>{" "}
          GO
        </div>
        <div className="prod-cardcontain">
          {products?.map((product) => (
            <div className="prod-card" key={product?.id}>
              <img src={logo} alt="prod-logo" className="prodlogo" />
              <div className="prod-cardbody">
                <div className="card-header">
                  <p className="card-title">{product?.title}</p>
                  <p className="card-category">{product?.category}</p>
                  {product?.subCategory && (
                    <p className="card-subcategory">{product?.subCategory}</p>
                  )}
                </div>
                <div className="card-footer">
                  <p className="card-offer">{product?.offer}</p>
                  <p className="card-price">{product?.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
