import "./header.scss";
import "../../sass/_base.scss";
import React from "react";
function Header(props) {
  const classes = ["header"];

  if (typeof props.classes !== "undefined") classes.push(...props.classes);

  return <div className={classes.join(" ")}>{props.children}</div>;
}

export default Header;
