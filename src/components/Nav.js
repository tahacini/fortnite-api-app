import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="button-wrapper">
        <div className="button-inner">
          <Link to={"/"}>
            <p>Home</p>
          </Link>
        </div>
      </div>
      <div className="button-wrapper">
        <div className="button-inner">
          <Link to={"newitems"}>
            <p>New Items</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
