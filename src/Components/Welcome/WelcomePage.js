import React from "react";
import "./welcome-page.scss";
import "../../sass/_base.scss";
import UserNameForm from "../UserNameForm/UserNameFrom";

function WelcomePage(props) {
  return (
    <div className="welcome-page page-container">
      <UserNameForm></UserNameForm>
    </div>
  );
}

export default WelcomePage;
