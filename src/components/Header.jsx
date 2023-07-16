import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./Header.css";
import Signup from "./Signup.jsx";
import Home from "./Home";
function Header() {
  return (
    <>
      <nav>
        <span to="/Home">
          <h2>FoodWEB</h2>
        </span>

        <div className="listLinks">
          <ul>
            <li>
              <span to="/Signup">Burger</span>
            </li>
            <li>
              <span to="/Signup">Cold Drinks</span>
            </li>
            <li>
              <span to="/Signup">Sweets</span>
            </li>
          </ul>
        </div>
        <div className="orderNowButton">
          <button>Order Now</button>
        </div>
      </nav>
      {/* <Routes>
        <Route path="/Signup" Component={Signup} />
        <Route path="/Home" Component={Home} />
      </Routes> */}
    </>
  );
}

export default Header;
