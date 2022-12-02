import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Change_password() {
  let Navigate = useNavigate();

  if(!localStorage.getItem("userAuthEmail")) {
    Navigate("/login");
  }

  const [detail, setDetail] = useState({
    new_password: "",
    conf_password: "",
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
    if (detail.new_password !== detail.conf_password) {
     return alert("Password do not match");
    }
    const response = await fetch(
      "http://localhost:8080/api/forgetchangepassword",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: localStorage.getItem("userAuthEmail"),
          new_password: detail.new_password,
          conf_password: detail.conf_password,
        }),
      }
    );
    const result = await response.json();
    console.log(result);
    if (result) {
      localStorage.removeItem("userAuthEmail");
      Navigate("/");
    }
  };

  return (
    <>
      <Navbar />
      {/* <!-- Forget Password Form --> */}
      <div className="login-page">
        <div className="login-form">
          <form className="userFrom" onSubmit={FormSubmit} autoComplete="off">
            <h1>Change Password</h1>
            <input
              type="text"
              name="new_password"
              value={detail.email}
              onChange={EventHandle}
              placeholder="New Password"
            />
            <input
              type="text"
              name="conf_password"
              value={detail.email}
              onChange={EventHandle}
              placeholder="Confirm Password"
            />
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
