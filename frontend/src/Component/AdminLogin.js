import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

export default function AdminLogin() {
  const host = "http://localhost:8080"
  const navigate = useNavigate();
  const [detail, setDetail] = useState({
    email: "",
    password: "",
  });

  if (localStorage.getItem("auth-token")) {
    navigate("/admin/index");
  }

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
    const response = await fetch(`${host}/api/adminauth`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: detail.email, password: detail.password }),
    });
    const json = await response.json();
    if (json.status === "success") {
      localStorage.setItem("auth-token", json.data);
      navigate("/admin/index");
    }
  };
  return (
    <div className="admin-login-container">
      {localStorage.getItem("auth-token") && <Navigate to="/admin/index" />}
      <form onSubmit={FormSubmit} className="admin-login userFrom">
        <h1>Admin Login</h1>
        <input
          type="email"
          name="email"
          value={detail.email}
          onChange={EventHandle}
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          value={detail.password}
          onChange={EventHandle}
          placeholder="password"
        />
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
