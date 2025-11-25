import React from "react";
import "./section3.css";
import logo1 from "./Frame (15).png";
import logo2 from "./pump-bottle-02 1.png";
import logo3 from "./jar-15 1.png";

function Section3() {
  return (
    <div className="section3">
      <div className="section3-parent">
        <div className="section3-next">
          <h3>Our Porular Product</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
        </div>
        <div className="section3-n-text">
          <p>
            <a href="#">Discover Our Products</a>
            <img src={logo1} alt="" />
          </p>
        </div>
      </div>
     <div className="section3-parent-card">
     <div className="section3-parent2">
        <div className="sect3-card">
          <img src={logo2} alt="rasm" />
          <h3>Cosmetic products</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
      <div className="sect3-card-button">
      <div className="sect3-card-b">
         <button>Buy Now</button>
         <button>Add To Cart</button>
         </div>
       
      </div>
        </div>
      </div>

      <div className="section3-parent2">
        <div className="sect3-card">
          <img src={logo3} alt="rasm" />
          <h3>Cosmetic products</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
      <div className="sect3-card-button">
      <div className="sect3-card-b">
         <button>Buy Now</button>
         <button>Add To Cart</button>
         </div>
        
      </div>
        </div>
      </div>
     </div>
    </div>



  );
}

export default Section3;
