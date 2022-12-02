import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link, Navigate, useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const [detail, setDetail] = useState({
    email: "",
    password: "",
  });

  const EventHandle = (e) => {
    const { value, name } = e.target;
    setDetail((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const FormSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: detail.email, password: detail.password }),
    });
    const result = await response.json();
    console.log(result);
    if (result.status === "success") {
      localStorage.setItem("token", result.data);
      navigate("/student/dashboard");
    }
  };

  return (
    <>
      {localStorage.getItem("token") && <Navigate to="/student/dashboard" />}

      <Navbar />
      <div className="login-page">
        <div className="login-form">
          <form className="userFrom" onSubmit={FormSubmit} autoComplete="off">
            <h1>Login Now</h1>
            <input
              type="email"
              onChange={EventHandle}
              name="email"
              value={detail.email}
              placeholder="Email"
            />
            <input
              type="password"
              onChange={EventHandle}
              name="password"
              value={detail.password}
              placeholder="Password"
            />
            <button className="btn btn-primary">Login</button>
            <br />
            <p>
              <Link to="/forget_password">Forget Password?</Link>
            </p>
            <br />
            <hr />
            <br />
            <p>
              <Link to="/sign">No Account? Sign</Link>
            </p>
          </form>
          <div className="right-side">
            <h3>Your Are Login And Enjoy Journey Your Learning Path</h3>
          </div>
        </div>
      </div>
    </>
  );
}
