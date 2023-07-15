import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import "./Header.css";
import Signup from "./Signup.jsx";
function Header() {
  return (
    <>
      <Router>
        <nav>
          <div className="logo">
            <li>
              <Link to="/Home">
                <h2>FoodWEB</h2>
              </Link>
            </li>
          </div>
          <div className="listLinks">
            <ul>
              <li>
                <Link to="/Signup">Burger</Link>
              </li>
              <li>
                <Link to="/Signup">Cold Drinks</Link>
              </li>
              <li>
                <Link to="/Signup">Sweets</Link>
              </li>
            </ul>
          </div>
          <div className="orderNowButton"></div>
        </nav>
        <Routes>
          <Route path="/Signup" Component={Signup} />
          <Route path="/" Component={Header} />
        </Routes>
      </Router>
    </>
  );
}

export default Header;
