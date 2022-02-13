import React from "react";
import "./nav--item.scss";
import "../../sass/_base.scss";

const NavItem = (props) => {
  let classes = "nav--item";
  if (props.styles) {
    classes += " " + props.styles;
  }

  return <div className={classes}>{props.children}</div>;
};

export default NavItem;
