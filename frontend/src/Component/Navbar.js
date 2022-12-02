import React from "react";
import { Link } from "react-router-dom";
// import "../App.css";
export default function Navbar() {
  return (
    <>
      <div className="navbar" id="navbar">
        <div className="brand">
          <Link to="/">
            <h2 style={{ color: "dodgerblue" }}>LoGo</h2>
          </Link>
        </div>
        <div className="menu">
          {localStorage.getItem("token") && (
            <Link to="/student/dashboard">
              <li style={{ color: "black" }}>Dashboard</li>
            </Link>
          )}

          <Link to="/">
            <li style={{ color: "black" }}>Home</li>
          </Link>
          <Link to="/service">
            <li style={{ color: "black" }}>Service</li>
          </Link>
          <Link to="/contact">
            <li style={{ color: "black" }}>Contact</li>
          </Link>
          <Link to="/about">
            <li style={{ color: "black" }}>About</li>
          </Link>
        </div>

        {!localStorage.getItem("token") && (
          <div className="account">
            <Link to="/sign">
              <button type="button" className="btn btn-primary">
                Sign
              </button>
            </Link>
            <Link to="/login">
              <button type="button" className="btn btn-secondary">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
