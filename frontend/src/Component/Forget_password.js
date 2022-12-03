import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Forget_password() {
  const host = "http://localhost:8080"
  let Navigate = useNavigate();
  const [detail, setDetail] = useState({
    email: "",
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
    const response = await fetch(`${host}/api/forget`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: detail.email,
      }),
    });
    const result = await response.json();
    console.log(result);
    if (result) {
      if(result.status === "success") {
        Navigate("/otp");
      }
    }
  };

  return (
    <>
      <Navbar />
      {/* <!-- Forget Password Form --> */}
      <div className="login-page">
        <div className="login-form">
          <form className="userFrom" onSubmit={FormSubmit} autoComplete="off">
            <h1>Send Email</h1>
            <input
              type="email"
              name="email"
              value={detail.email}
              onChange={EventHandle}
              placeholder="Email"
            />
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
