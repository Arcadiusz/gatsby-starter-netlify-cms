import React from "react";
import { Link } from "gatsby";

function Nav() {
  return (
    <nav
      className="nav"
      style={{
        display: "flex",
        justifyContent: "flex-end",
        gap: "50px",
        fontFamily: "arial",
        color: "#fff",
      }}
    >
      <div className="nav__item">
        <Link to="/about/" exact activeStyle={{ color: "red" }}>
          About
        </Link>
      </div>
      <div className="nav__item">
        <Link to="/services/" activeStyle={{ color: "red" }}>
          Services
        </Link>
      </div>
      <div className="nav__item">
        <Link to="/page3/" activeStyle={{ color: "red" }}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
export default Nav;
