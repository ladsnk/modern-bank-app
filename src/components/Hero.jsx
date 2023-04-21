import React from "react";
import { discount, robot } from "../assets";
import { GetStarted } from "./";
import "../styles/hero.scss";

const Hero = () => {
  return (
    <section className="hero ">
      <div className="hero__text-wrapper">
        <div className="hero__ad bg-discount-gradient">
          <img src={discount} alt="discount" />
          <p className="hero__ad-text">
            <span>20%</span> Discount for <span>1 Month</span> Account
          </p>
        </div>

        <div className="hero__slogan">
          <h1 className="hero__heading">
            The Next <br /> <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div>
            <GetStarted />
          </div>
        </div>
        <h1 className="hero__heading hero__heading_payment">Payment Method.</h1>
        <p className="hero__description">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. <br /> We examine annual percentage
          rates, annual fees.
        </p>
      </div>
      <div className="hero__img-wrapper">
        <img src={robot} alt="billing" />

        {/* gradient start */}
        <div className="hero__gradient hero__gradient_pink"></div>
        <div className="hero__gradient hero__gradient_white"></div>
        <div className="hero__gradient hero__gradient_blue"></div>
        {/* gradient end */}
      </div>

      <div className="hero__mobile">
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
