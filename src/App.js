import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import userNameContext from "./hooks/context/userNameContext";

//components
import NavBar from "./Components/NavBar/NavBar";
import WelcomePage from "./Components/Welcome/WelcomePage";
import SearchPage from "./Components/SearchPage/SearchPage";
import WhishlistPage from "./Components/WishlistPage/WishlistPage";
//scss
import "./sass/index.scss";

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

  return (
    <BrowserRouter>
      <userNameContext.Provider value={[userName, setUserName]}>
        {isValidUser(userName) ? (
          <>
            <NavBar />
            <Routes>
              <Route path="/search" exact element={<SearchPage></SearchPage>} />
              <Route
                path="/wishlist"
                exact
                element={<WhishlistPage></WhishlistPage>}
              />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/" exact element={<WelcomePage>fk</WelcomePage>} />{" "}
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
