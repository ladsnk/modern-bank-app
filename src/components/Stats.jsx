import React from "react";
import { stats } from "../constants";
import "../styles/stats.scss";
const Stats = () => {
  return (
    <div className="stats section__padding">
      {stats.map((stat) => (
        <div key={stat.id} className="stats__container">
          <h4 className="stats__value">{stat.value}</h4>
          <p className="stats__title text-gradient">{stat.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
