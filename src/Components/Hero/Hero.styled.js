import styled from "styled-components";

const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* flex: 1; */
  @media screen and (max-width: 900px) {
    order: 2;
  }
  @media screen and (max-width: 900px) {
    order: 2;
  }
  @media screen and (max-width: 850px) {
    width: 100%;
    align-items: center;
  }

  & .hero__content {
    & h2 {
      font-size: 1.4rem;
      display: flex;
      align-items: center;

      gap: 2rem;
      font-family: var(--font);
      letter-spacing: 5px;
      color: var(--dark-grayish-blue);
      margin-bottom: 2rem;
      @media screen and (max-width: 900px) {
        justify-content: center;
      }
      & span {
        background-color: var(--very-dark-blue);
        color: var(--light-grayish-blue);
        padding: 0.3rem 0.7rem;
        border-radius: 100px;
        font-size: 1.2rem;
        font-family: var(--font-2);
        letter-spacing: 1px;
      }
    }
    & h1 {
      font-family: var(--font-2);
      font-size: 6rem;
      letter-spacing: 4px;
      width: 20ch;
      margin-bottom: 3rem;
      @media screen and (max-width: 900px) {
        font-size: 5rem;
      }
    }

    & p {
      font-size: 2rem;
      color: var(--dark-grayish-blue);
      letter-spacing: 1.3px;
      word-spacing: 2px;
      width: 35ch;
      font-family: var(--font);
      margin-bottom: 8rem;
      @media screen and (max-width: 800px) {
        font-size: 1.8rem;
      }
    }
  }
  & .hero__btn-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    gap: 3rem;

    & .btn-hero {
      background-color: var(--red);
      padding: 2rem 6rem;
      border-radius: 5px;
      color: var(--light-grayish-blue);
      font-family: var(--font-2);
      font-size: 1.8rem;
      letter-spacing: 1.3px;
      transition: all 0.2s;
      @media screen and (max-width: 700px) {
        padding: 2rem 4rem;
      }

      &:hover,
      &:focus {
        filter: brightness(1.4);
        transform: translateY(-2px);
        box-shadow: 0 0 10px var(--red);
      }
      &:active {
        filter: brightness(0.8);
        transform: translateY(1px);
        box-shadow: 0 0 3px var(--red);
      }
    }
    & span {
      font-size: 1.8rem;
      font-family: var(--font-2);
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 3px;
      color: var(--grayish-blue);
      @media screen and (max-width: 800px) {
        letter-spacing: 2px;
      }
    }
  }
`;

export default HeroWrapper;
