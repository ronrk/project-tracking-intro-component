import styled from "styled-components";

const ImageSectionWrapper = styled.section`
  /* position: relative; */

  width: 30vw;
  @media screen and (max-width: 900px) {
    width: 150%;
    margin-bottom: 6rem;
  }
  & .section__img {
    /* position: absolute; */
    display: block;
    transform: translate(-2vw, 9vw);
    @media screen and (max-width: 900px) {
      transform: translate(0);
      width: 100%;
      max-height: 50vh;
    }
  }
`;

export default ImageSectionWrapper;
