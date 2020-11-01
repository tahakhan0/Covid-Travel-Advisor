import React from "react";

export default function Navbar({ scrollToFooter }) {
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark"
      style={{ backgroundColor: "#003542" }}
    >
      <a className="navbar-brand" href="#">
        Covid Travel Assistant
      </a>
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-sm-2 ml-auto">
          <li className="nav-item active">
            <a className="nav-link" onClick={scrollToFooter}>
              About this project<span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" onClick={scrollToFooter}>
              Our Data
            </a>
          </li>
          <li className="nav-item ml-2">
            <a
              className="btn btn-light"
              href="https://www.buymeacoffee.com/tahak"
            >
              Support this project
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
