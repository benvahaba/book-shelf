import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import userNameContext from "./hooks/context/userNameContext";

//components

import WelcomePage from "./Components/Welcome/WelcomePage";
import SearchPage from "./Components/SearchPage/SearchPage";
import Header from "./Components/Header/Header";

//scss
import "./sass/index.scss";
import NavItem from "./Components/NavItem/NavItem";
import WishlistPage from "./Components/WishlistPage/WishlistPage";

function App() {
  const [userName, setUserName] = useState("");
  function isValidUser(uName) {
    //TODO add validations here
    let validUser = false;
    if (uName.trim().length > 0) {
      validUser = true;
    }
    return validUser;
  }
  const navItemClasses = ["font__color--primary"];

  return (
    <BrowserRouter>
      <userNameContext.Provider value={[userName, setUserName]}>
        {isValidUser(userName) ? (
          <>
            <Header>
              <NavItem classes={navItemClasses}>
                <Link className="nav_link font__color--primary" to={"/search"}>
                  search
                </Link>
              </NavItem>
              <NavItem classes={navItemClasses}>
                <Link
                  className="nav_link font__color--primary"
                  to={"/wishlist"}
                >
                  WishList
                </Link>
              </NavItem>
            </Header>
            <Routes>
              <Route path="/search" exact element={<SearchPage></SearchPage>} />
              <Route
                path="/wishlist"
                exact
                element={<WishlistPage></WishlistPage>}
              ></Route>
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/" exact element={<WelcomePage></WelcomePage>} />
          </Routes>
        )}
      </userNameContext.Provider>
    </BrowserRouter>
  );
}

export default App;

// isValidUser(userName) ?(

//   ) :({" "}
//   <Routes>
//     <Route path="/" exact element={<WelcomePage>fk</WelcomePage>} />{" "}
//   </Routes>
//   );
