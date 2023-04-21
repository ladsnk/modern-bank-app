import React from "react";
import { quotes } from "../assets";
import "../styles/feedback-card.scss";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="feedback-card">
      <img src={quotes} alt="double quotes" className="feedback-card__quotes" />
      <p className="feedback-card__content">{content}</p>

      <div className="feedback-card__info">
        <img src={img} alt={name} className="feedback-card__img" />
        <div>
          <h4 className="feedback-card__name">{name}</h4>
          <p className="feedback-card__title">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
