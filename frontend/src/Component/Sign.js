import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";

export default function Sign() {
  const host = "http://localhost:8080"
  const navigate = useNavigate();
  const [detail, setDetail] = useState({
    name: "",
    email: "",
    password: "",
    conf_password: "",
    birth_date: "",
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
  const options = [
    { value: "Male", text: "Male" },
    { value: "Female", text: "Female" },
  ];

  const [selected, setSelected] = useState(options[0].value);

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const FormSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({name: detail.name, email: detail.email, password: detail.password, gender: selected, birth_date: detail.birth_date}),
    });
    const result = await response.json();
    if(result.status === "success") {
      navigate("/login");
    }
  };

  return (
    <>
      {/* <!-- Sign Form --> */}
      <Navbar />
      <div className="sign-page">
        <div className="sign-form">
          <form className="userFrom" onSubmit={FormSubmit} autoComplete="off">
            <h1>Create New Account</h1>
            <input
              type="text"
              value={detail.name}
              onChange={EventHandle}
              name="name"
              placeholder="Username"
            />
            <input
              type="email"
              onChange={EventHandle}
              value={detail.email}
              name="email"
              placeholder="Email"
            />
            <input
              type="password"
              onChange={EventHandle}
              name="password"
              value={detail.password}
              placeholder="Password"
            />
            <input
              type="password"
              className=""
              placeholder="Confirm Password"
              name="conf_password"
              onChange={EventHandle}
              value={detail.conf_password}
            />

            <select onChange={handleChange} value={selected}>
              {options.map((option) => (
                <option key={option.value} value={option.value}>{option.text}</option>
              ))}
            </select>

            <input
              type="date"
              value={detail.birth_date}
              onChange={EventHandle}
              name="birth_date"
              placeholder="Birth Of Date"
            />
            <button className="btn btn-primary">Register</button>
            <br />
            <p>
              <Link  to="/login">
                Already Account? Login
              </Link>
            </p>
          </form>

          <div className="right-side">
            <button className="custome-btn">
              <ion-icon name="logo-facebook"></ion-icon>
              <span>Facebook Account</span>
            </button>
            <button className="custome-btn">
              <ion-icon name="logo-google"></ion-icon>
              <span>Google Account</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
