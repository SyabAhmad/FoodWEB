import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./Login.css";
function Login() {
  const Submition = () => {};
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
        <Link to={"/Signup"}>
          <span>Already have an Account...</span>
        </Link>
      </form>

      <Routes>
        <Route path="/Signup" Component={Signup} />
      </Routes>
    </>
  );
}

export default Login;
