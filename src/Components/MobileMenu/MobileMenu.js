import React from "react";
import Wrapper from "./MobileMenu.styled";

const MobileMenu = ({ showMenu }) => {
  return (
    <Wrapper className={showMenu ? "show-menu" : null}>
      <nav className="menu__nav">
        <ul className="menu__list">
          <li>
            <a href="/">product</a>
          </li>
          <li>
            <a href="/">features</a>
          </li>
          <li>
            <a href="/">pricing</a>
          </li>
          <li>
            <button className="btn btn-nav btn-nav-menu">login</button>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default MobileMenu;
