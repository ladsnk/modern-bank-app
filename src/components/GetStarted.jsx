import React from "react";
import { arrowUp } from "../assets";
import "../styles/get-started.scss";

const GetStarted = () => {
  return (
    <a>
      <div className="get-started bg-blue-gradient">
        <div className="get-started__bg">
          <div className="get-started__get">
            <p className="text-gradient">Get</p>
            <img src={arrowUp} alt="arrow" className="get-started__arrow-img" />
          </div>
          <p className="get-started__started text-gradient">Started</p>
        </div>
      </div>
    </a>
  );
};

export default GetStarted;
