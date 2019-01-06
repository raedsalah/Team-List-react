import React from "react";

const NavBar = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/">
      {props.Title}
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="https://github.com/raedsalah">
            <span className="badge badge-warning">
              Raed Salah <i className="fab fa-github" />
            </span>
          </a>
        </li>
        <li className="nav-item active">
          <a
            className="nav-link"
            href="https://github.com/raedsalah/Team-List-react"
          >
            <span className="badge badge-warning">
              Git Repo <i className="fas fa-code-branch" />
            </span>
          </a>
        </li>
      </ul>
      <span className="navbar-text">
        A simple React Component for rendering a team list
      </span>
    </div>
  </nav>
);

export default NavBar;
