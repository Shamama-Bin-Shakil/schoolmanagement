import React, { useState } from "react";
import TopSideBar from "./Component/TopSideBar";
import StudentsData from "./Component/StudentsData";
import "./css/style.css";

export default function AdminIndex() {
  
  return (
    <>
      {/* <!-- Alert Message --> */}

      <div className="alert" id="alert-error">
        <div className="alert-content">
          <div className="alert-img">
            <img
              src={require("./img/alert/image_processing20200108-11051-3zkuew.gif")}
              alt=""
            />
          </div>
          <div className="alert-text">
            <h1>Oops!</h1>
            <p id="error">Something Went Wrong</p>
            <button id="error-btn" className="alert-btn">
              Cancel
            </button>
          </div>
        </div>
      </div>

      <div className="alert" id="alert-success">
        <div className="alert-content">
          <div className="alert-img">
            <img src={require("./img/alert/ezgif-5-0fe0dcba3a.gif")} alt="" />
          </div>
          <div className="alert-text">
            <h1>Oops!</h1>
            <p id="success">Something Went Wrong</p>
            <button id="error-btn" className="alert-btn">
              Cancel
            </button>
          </div>
        </div>
      </div>

      <div className="admin-header">
        <TopSideBar />

        <StudentsData />
      </div>
    </>
  );
}
