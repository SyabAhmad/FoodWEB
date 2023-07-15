import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./Signup.css";
import Login from "./Login.jsx";
function Signup() {
  const Submition = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={Submition}>
        <h2>Sign Up</h2>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email Address" />
          <label htmlFor="password">Password</label>
          <input type="email" id="password" placeholder="Password" />
        </div>
        <button type="submit">Sign Up</button>
        <Link to={"/Login"}>Already have an Account...</Link>
      </form>

      <Routes>
        <Route path="/Login" Component={Login} />
      </Routes>
    </>
  );
}

export default Signup;
