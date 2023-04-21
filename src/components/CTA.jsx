import React from "react";
import { Button } from "./";
import "../styles/cta.scss";

const CTA = () => {
  return (
    <section className="cta section__margin bg-black-gradient-2 box-shadow">
      <div className="cta__text">
        <h2 className="cta__heading">Let's try our service now!</h2>
        <p className="cta__description">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <div className="cta__button">
        <Button />
      </div>
    </section>
  );
};

export default CTA;
