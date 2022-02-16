import "page_number.scss";
import React from "react";

function PageNumber(props) {
  return (
    <div
      className="page_number"
      key={props.PageIterator}
      onClick={() => props.pagePressedHandler(PageIterator)}
    >
      {props.PageIterator}
    </div>
  );
}

export default PageNumber;
