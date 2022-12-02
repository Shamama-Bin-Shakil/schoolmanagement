import React, { useState } from "react";
import Navbar from "./Navbar";

export default function Contact() {
  const [detail, setDetail] = useState({
    name: "",
    email: "",
    message: "",
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
    const response = await fetch("http://localhost:8080/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: detail.name,
        email: detail.email,
        message: detail.message,
      }),
    });
    const result = await response.json();
    console.log(result);
  };
  return (
    <>
      <Navbar />
      {/* <!-- Contact Form --> */}
      <div className="contact-page">
        <div className="contact-form">
          <form className="userFrom" onSubmit={FormSubmit} autoComplete="off">
            <h1>Contact Us</h1>
            <input
              type="text"
              name="name"
              value={detail.name}
              onChange={EventHandle}
              placeholder="Username"
              required
            />
            <input
              type="email"
              name="email"
              value={detail.email}
              onChange={EventHandle}
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Message"
              onChange={EventHandle}
              value={detail.message}
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
