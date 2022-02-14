import React from "react";
import "./resault_container.scss";

const ResaultContainer = (props) => {
  return <div className="results_container">{props.children}</div>;
};

export default ResaultContainer;
