import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./Login.css";
import Signup from "./Signup.jsx";
const Login = () => {
  const Submition = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form method="" onSubmit={Submition}>
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email Address" />
          <label htmlFor="password">Password</label>
          <input type="email" id="password" placeholder="Password" />
        </div>
        <button type="submit">Login</button>
        <Link to={"/Signup"}>Already have an Account...</Link>
      </form>

      <Routes>
        <Route path="/Signup" Component={Signup} />
      </Routes>
    </>
  );
};

export default Login;
