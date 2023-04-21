import React from "react";
import { card } from "../assets";
import { Button } from "./";
import "../styles/card-deal.scss";

const CardDeal = () => {
  return (
    <section className="card-deal section__padding">
      <div className="card-deal__text-wrapper">
        <h2 className="card-deal__heading">
          Find a better card deal <br /> in few easy steps.
        </h2>
        <p className="card-deal__description">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>

        <Button />
      </div>

      <div className="card-deal__img-wrapper">
        <img src={card} alt="card" className="card-deal__img" />
      </div>
    </section>
  );
};

export default CardDeal;
