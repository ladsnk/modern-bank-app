import React from "react";
import { feedback } from "../constants";
import { FeedbackCard } from "./";
import "../styles/testimonials.scss";

const Testimonials = () => {
  return (
    <section className="testimonials section__padding">
      <div className="testimonials__intro">
        <h1 className="testimonials__heading">
          What people are <br /> saying about us
        </h1>
        <p className="testimonials__description">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <div className="testimonials__feedback">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
