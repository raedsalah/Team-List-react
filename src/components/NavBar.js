import React from "react";

const NavBar = props => (
  <nav className="navbar navbar-light bg-light">
    <span className="navbar-brand mb-0 h1">{props.Title}</span>
  </nav>
);

export default NavBar;
