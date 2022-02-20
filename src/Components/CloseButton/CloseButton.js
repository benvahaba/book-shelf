import React from "react";
import "./close_button.scss";

function CloseButton(props) {
  return (
    <div
      className="close"
      id={props.id}
      onClick={(e) => {
        props.close(e);
      }}
    ></div>
  );
}

export default CloseButton;
