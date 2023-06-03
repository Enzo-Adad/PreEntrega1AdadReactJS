import React from "react";
import "./Header.css";

// Imagen
import img from "./logo.png";

const Header = (props) => {
  return (
    <div className="Header">
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <img src={img} alt="logo-coder" />
    </div>
  );
};

export default Header;
