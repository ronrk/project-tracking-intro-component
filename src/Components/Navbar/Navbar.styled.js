import styled from "styled-components";

const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--main-padding);

  & .navbar__list {
    display: flex;
    gap: 6rem;
    font-size: 1.8rem;
    flex: 1;
    justify-content: flex-end;
    @media screen and (max-width: 1200px) {
      gap: 5rem;
    }
    @media screen and (max-width: 850px) {
      gap: 3rem;
    }
    @media screen and (max-width: 750px) {
      display: none;
    }
    & .button {
      width: 10%;

      display: flex;
      align-items: center;
      justify-content: space-between;

      &::before {
        content: "";
        display: block;
        position: relative;
        height: 0.5rem;
        width: 0.5rem;
        border-radius: 50%;
        background-color: var(--grayish-blue);
      }
    }
  }
  & .menu-btn {
    display: none;

    @media screen and (max-width: 750px) {
      display: flex;
      align-items: center;
    }
  }
`;

export default NavbarWrapper;
