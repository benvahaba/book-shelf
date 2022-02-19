import "./dialog_box.scss";
import React from "react";

function DialogBox(props) {
  return (
    <div
      id={props.id}
      onClick={(e) => {
        props.close(e);
      }}
      className="dialog--back_ground"
    >
      {props.children}
    </div>
  );
}

export default DialogBox;
