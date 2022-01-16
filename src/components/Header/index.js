import React from "react";
import "../../styles/header.css";
import logo from "../../icons/pawprint.png";
const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="" /> Random animals
      </div>
      {/* <input className="header__search" placeholder="Find an animal" /> */}
    </div>
  );
};

export default Header;
