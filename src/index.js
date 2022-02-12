import React from "react";
import ReactDOM from "react-dom";
import "./sass/index.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <header className="header">
      <div className="header__paragraph--box">Search</div>
      <div className="header__paragraph--box">Welcome</div>
      <div className="header__paragraph--box">Whishlist</div>
    </header>
  </BrowserRouter>,
  document.getElementById("root")
);
