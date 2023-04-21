import React from "react";
import { apple, bill, google } from "../assets";
import "../styles/billing.scss";

const Billing = () => {
  return (
    <section id="product" className="billing section__padding">
      <div className="billing__img-wrapper">
        <img src={bill} alt="billing" className="billing__img" />
      </div>

      <div className="billing__text-wrapper">
        <h2 className="billing__heading">
          Easily control your <br /> billing & invoicing.
        </h2>
        <p className="billing__description">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="billing__apps">
          <img src={apple} alt="apple store" className="billing__apple-store" />
          <img
            src={google}
            alt="google play"
            className="billing__google-play"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
