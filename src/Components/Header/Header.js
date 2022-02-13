import React from "react";
import "./header.scss";
import "../../sass/_base.scss";
import NavItem from "../NavItem/NavItem";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavItem styles="nav--current">
        <Link className="nav--link" to={"/"}>
          Welcome
        </Link>
      </NavItem>

      <NavItem>
        <Link className="nav--link" to={"/search"}>
          Search
        </Link>
      </NavItem>

      <NavItem>
        <Link className="nav--link" to={"/wishlist"}>
          Whishlist
        </Link>
      </NavItem>
    </div>
  );
};

export default Header;
