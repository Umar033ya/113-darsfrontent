import React from "react";
import "./section4.css";
function Section4() {
  return (
    <>
      <div className="section-wrapper">
        <div className="stats">
          <div className="stat-box">
            <h1>100%</h1>
            <p>Organic Products</p>
          </div>

          <div className="stat-box">
            <h1>2M+</h1>
            <p>Yearly Sales</p>
          </div>

          <div className="stat-box">
            <h1>1.9M+</h1>
            <p>Happy Customer</p>
          </div>
        </div>

        <div className="main-section">
          <div className="left">
            <h1 className="title">
              The Perfect Beauty <br /> Of You
            </h1>

            <p className="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <p className="text">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>

            <button className="shop-btn">Shop Now</button>
          </div>

          <div className="right">
            <img
              src="/mnt/data/88088bbb-6249-4958-b24c-c58a8804e160.png"
              alt="Cosmetic"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section4;
