import React from "react";
import { features } from "../constants";
import { Button, FeatureCard } from "./";
import "../styles/business.scss";

const Business = () => {
  return (
    <section id="features" className="business section__padding">
      <div className="business__info">
        <h2 className="business__heading">
          You do the business, <br /> we'll handle the money.
        </h2>
        <p className="business__description">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </div>

      <div className="business__features">
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Business;
