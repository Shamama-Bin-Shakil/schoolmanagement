import React from "react";
import { useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
export default function TopSideBar() {
  const navigate = useNavigate();
  const ref = useRef();

  // Logout Functionality
  const Logout = () => {
    localStorage.removeItem("auth-token");
    navigate("/adminlogin");
  };

  const ProfileDetail = () => {
    ref.current.classList.toggle("activeDetail");
  };
  return (
    <>
      {!localStorage.getItem("auth-token") && <Navigate to="/adminlogin" />}
      {/* <!-- Navbar --> */}
      <div className="navbar">
        <div className="brand">
          <h3>Admin Panel</h3>
        </div>
        <div onClick={ProfileDetail} className="profile">
          <div className="profile-logo">
            <img src={require("../img/teacher5.jpg")} alt="" />
          </div>
        </div>
        <div ref={ref} className="profile-detail-content">
          <p>rohishamama@gmail.com</p>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            
            to="/admin/index"
          >
            <p>
              <span>
                <ion-icon name="people-outline"></ion-icon>
              </span>
              Students
            </p>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            
            to="/admin/addstudent"
          >
            <p>
              <span>
                <ion-icon name="person-add-outline"></ion-icon>
              </span>
              Add Student
            </p>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            
            to="/admin/adminprofile"
          >
            <p>
              <span>
                <ion-icon name="person-circle-outline"></ion-icon>
              </span>
              Profile
            </p>
          </Link>
          <p onClick={Logout}>
            <span>
              <ion-icon name="log-out-outline"></ion-icon>
            </span>
            Logout
          </p>
        </div>
      </div>

      {/* <!-- left-side bar --> */}
      <div className="left-side">
        <div className="content">
          <div className="profile-img">
            <img src={require("../img/teacher5.jpg")} alt="" />
          </div>
          <div className="text">
            <Link  to="/admin/index">
              <p>Student</p>
            </Link>
            <Link  to="/admin/studentfee">
              <p>Student Fee</p>
            </Link>
            <Link  to="/admin/adminprofile">
              <p>Profile</p>
            </Link>
            <p onClick={Logout}>Logout</p>
          </div>
        </div>
      </div>
    </>
  );
}
