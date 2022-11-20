import React from "react";
import Wrapper from "./Hero.styled";

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero__content">
        <h2>
          <span>New</span>Monograph Dashboard
        </h2>
        <h1>Powerful insights into your team</h1>
        <p>Project planning and time tracking for agile teams</p>
      </div>
      <div className="hero__btn-container">
        <button className="btn btn-hero">Schedule a demo</button>
        <span>to see a live preview</span>
      </div>
    </Wrapper>
  );
};

export default Hero;
