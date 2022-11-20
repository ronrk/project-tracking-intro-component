import styled from "styled-components";

const MobileMenuWrapper = styled.div`
  position: absolute;
  display: none;
  background-color: var(--light-grayish-blue);
  box-shadow: 0 0 9px var(--very-dark-blue);
  left: 50%;
  top: 10rem;
  width: 80%;
  transform: translateX(-50%);
  /* height: 45vh; */
  z-index: 30;

  & .menu__nav {
    margin-top: 3rem;
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    padding: 2rem 7rem;

    & .menu__list {
      width: 100%;
      text-align: center;
      display: flex;
      flex: 1;
      flex-direction: column;
      gap: 3rem;
      font-size: 3rem;

      & .btn-nav-menu {
        font-size: 3rem;
        color: var(--grayish-blue);
        margin: 5rem 0;
        position: relative;
        width: 100%;

        &::before {
          position: absolute;
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background-color: var(--grayish-blue);
          top: -5rem;
        }

        &:hover {
          color: var(--very-dark-blue);
        }
      }
    }
  }

  &.show-menu {
    display: block;
  }
`;

export default MobileMenuWrapper;
