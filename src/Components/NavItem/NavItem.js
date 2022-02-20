import "./nav_item.scss";

import React from "react";

function NavItem(props) {
  const classes = ["nav_item"];
  classes.push(props.classes);
  return <div className={classes.join(" ")}>{props.children}</div>;
}

export default NavItem;
