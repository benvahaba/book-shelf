import React from "react";
import "./welcome-page.scss";
import "../../sass/_base.scss";
import "../../sass/background--library.scss";
import UserNameForm from "../UserNameForm/UserNameFrom";

function WelcomePage(props) {
  return (
    <div className="welcome-page  background--library ">
      <div className="container--bubble">
        <UserNameForm></UserNameForm>
      </div>
    </div>
  );
}

export default WelcomePage;
