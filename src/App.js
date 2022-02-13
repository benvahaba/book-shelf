import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import userNameContext from "./hooks/context/userNameContext";

//components
import Header from "./Components/Header/Header";
import WelcomePage from "./Components/Welcome/WelcomePage";
import SearchPage from "./Components/SearchPage/SearchPage";
import WhishlistPage from "./Components/WishlistPage/WishlistPage";
//scss
import "./sass/index.scss";

function App() {
  const [userName, setUserName] = useState("");

  return (
    <BrowserRouter>
      <Header />
      <userNameContext.Provider value={[userName, setUserName]}>
        <Routes>
          <Route path="/" exact element={<WelcomePage></WelcomePage>} />
          <Route path="/search" exact element={<SearchPage></SearchPage>} />
          <Route
            path="/wishlist"
            exact
            element={<WhishlistPage></WhishlistPage>}
          />
        </Routes>
      </userNameContext.Provider>
    </BrowserRouter>
  );
}

export default App;
