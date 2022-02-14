import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./user_name_from.scss";
import userNameContext from "../../hooks/context/userNameContext";

const UserNameForm = () => {
  const [userName, setUserName] = useContext(userNameContext);
  const [uName, setUName] = useState("");
  let navigate = useNavigate();

  function onSubmitHandler(e) {
    e.preventDefault();
    if (uName.trim().length > 0) {
      setUserName(uName);
      navigate("/search");
    } else {
      alert("please enter a valid name");
    }
  }
  function onNameChangeHandler(e) {
    setUName(e.target.value);
  }

  useEffect(() => {
    if (userName.length > 0) {
    }
  }, [userName]);

  return userName.length === 0 ? (
    <form
      className="form--user-name"
      onSubmit={(e) => {
        onSubmitHandler(e);
      }}
    >
      <h2 className="y_spacing_one_em color__text--primary">
        please insert your name
      </h2>

      <input
        id="useNameInput"
        className="imput--text"
        type={"text"}
        value={uName}
        onChange={(e) => {
          onNameChangeHandler(e);
        }}
      ></input>
      <input className="imput--submit" type={"submit"}></input>
    </form>
  ) : (
    <h2 className="y_spacing_one_em">Hi {userName}</h2>
  );
};

export default UserNameForm;
