import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Otp() {
  const host = "http://localhost:8080"
  let Navigate = useNavigate();
  const [detail, setDetail] = useState({
    otp: "",
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
    const response = await fetch(`${host}/api/otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        otp: detail.otp,
      }),
    });
    const result = await response.json();
    console.log(result);
    if (result) {
      if(result.status === "success"){
        localStorage.setItem("userAuthEmail", detail.otp)
        Navigate("/change_password");
      }
    }
  };

  return (
    <>
      <Navbar />
      {/* <!-- OTP Form --> */}
            <div className="login-page">
            <div className="login-form">
                <form className="userFrom" onSubmit={FormSubmit} autoComplete="off">
                    <h1>OTP</h1>
                        <input type="text" onChange={EventHandle} name="otp" value={detail.otp} placeholder="Otp" />
                        <button className="btn btn-primary">Send</button>
                </form>
            </div>
        </div>
    </>
  );
}
