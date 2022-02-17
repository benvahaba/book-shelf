import "./page_number.scss";
import React from "react";

function PageNumber(props) {
  const initClases = "page_number";
  const pressedClass = "page_pressed";
  return (
    <div
      onClick={() => props.pagePressedHandler(props.pageIterator)}
      className={
        props.pressedPageNum === props.pageIterator
          ? initClases + " " + pressedClass
          : initClases
      }
    >
      {props.pageIterator}
    </div>
  );
}

export default PageNumber;
