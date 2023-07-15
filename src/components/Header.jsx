import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./Header.css";
import Signup from "./Signup.jsx";
import Home from "./Home";
function Header() {
  return (
    <>
      <nav>
        <Link to="/Home">
          <h2>FoodWEB</h2>
        </Link>

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
        <div className="orderNowButton">
          <button>Order Now</button>
        </div>
      </nav>
      <Routes>
        <Route path="/Signup" Component={Signup} />
        <Route path="/Home" Component={Home} />
      </Routes>
    </>
  );
}

export default Header;
