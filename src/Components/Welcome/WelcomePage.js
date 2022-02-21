import React from "react";
import "./welcome-page.scss";
import "../../sass/base/_base.scss";
import UserNameForm from "../UserNameForm/UserNameFrom";

function WelcomePage(props) {
  return (
    <div className="welcome-page background__color--white ">
      <div className="container--bubble">
        <UserNameForm></UserNameForm>
      </div>
    </div>
  );
}

export default WelcomePage;
