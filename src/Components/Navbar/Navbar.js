import React from "react";

import Wrapper from "./Navbar.styled";
import logo from "../../assets/images/logo.svg";
import iconOpen from "../../assets/images/icon-hamburger.svg";
import iconClose from "../../assets/images/icon-close.svg";

const Navbar = ({ showMenu, toggleMenu }) => {
  return (
    <Wrapper>
      <img src={logo} alt="logo" className="navbar__logo" />
      <ul className="navbar__list">
        <li>
          <a href="/">product</a>
        </li>
        <li>
          <a href="/">features</a>
        </li>
        <li>
          <a href="/">pricing</a>
        </li>
        <li className="button">
          <button className="btn btn-nav">login</button>
        </li>
      </ul>
      <button className="btn menu-btn" onClick={toggleMenu}>
        <img src={showMenu ? iconClose : iconOpen} alt="menu button" />
      </button>
    </Wrapper>
  );
};

export default Navbar;
