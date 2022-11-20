import React from "react";
import Wrapper from "./ImageSection.styled";
import illustrationImg from "../../assets/images/illustration-devices.svg";

const ImageSection = () => {
  return (
    <Wrapper>
      <img src={illustrationImg} alt="illustration" className="section__img" />
    </Wrapper>
  );
};

export default ImageSection;
