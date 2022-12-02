import React, { useContext, useEffect } from "react";
import { useRef } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import StudentsContext from "../Admin/context/Context";
import "../css/student.css";

export default function TopSideBar() {
  const context = useContext(StudentsContext);
  const { studentDetail, stdDetail } = context;

  useEffect(() => {
    studentDetail();
    // eslint-disable-next-line
  }, []);

  const navigate = useNavigate();
  const ref = useRef();

  // Logout Functionality
  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const ProfileDetail = () => {
    ref.current.classList.toggle("activeDetail");
  };
  return (
    <>
      {/* <!-- Navbar --> */}
      {!localStorage.getItem("token") && <Navigate to="/login" />}
      <div className="navbar">
        <div className="brand">
          <h3>Student Panel</h3>
        </div>
        <div onClick={ProfileDetail} className="profile">
          <div className="profile-logo">
            <img src={require("../img/teacher5.jpg")} alt="" />
          </div>
        </div>
        <div ref={ref} className="profile-detail-content">
          <p>{stdDetail.email}</p>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/student/dashboard"
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
            <Link to="/student/studentfees">
              <p>Student Fee</p>
            </Link>
            <Link to="/student/dashboard">
              <p>Profile</p>
            </Link>
            <p onClick={Logout}>Logout</p>
          </div>
        </div>
      </div>
    </>
  );
}
