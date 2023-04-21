import React from "react";
import "../styles/feature-card.scss";

const FeatureCard = ({ icon, title, content }) => (
  <div className="feature-card">
    <div className="feature-card__icon-wrapper">
      <img src={icon} alt="icon" className="feature-card__icon" />
    </div>

    <div className="feature-card__text-wrapper">
      <h4 className="feature-card__title">{title}</h4>
      <p className="feature-card__content">{content}</p>
    </div>
  </div>
);

export default FeatureCard;
