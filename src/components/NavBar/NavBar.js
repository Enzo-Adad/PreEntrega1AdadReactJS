import React from "react";

import CardWidget from "../CardWidget/CardWidget";

const NavBar = () => {
  return (
    <nav
      style={{
        backgroundColor: "black",
        height: "10vh",
      }}
    >
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <li style={{ color: "white", listStyle: "none" }}>
          <a href="https://www.google.com">Inicio</a>
        </li>
        <li style={{ color: "white", listStyle: "none" }}>
          <a href="https://www.google.com">About</a>
        </li>
        <li style={{ color: "white", listStyle: "none" }}>
          <a href="https://www.google.com">Contact</a>
        </li>
        <li>
          <CardWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
