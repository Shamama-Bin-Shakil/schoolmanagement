import React, { useContext, useEffect } from "react";
import StudentsSidebar from "./StudentsSidebar";
import StudentsContext from "../Admin/context/Context";
import { Navigate } from "react-router-dom";

export default function StudentDashboard() {
  const context = useContext(StudentsContext);
  const { studentDetail, stdDetail } = context;

 

  useEffect(() => {
    studentDetail();
  }, []);

  return (
    <>
      <div className="student-header">
        <StudentsSidebar />
        <div className="main-content">
          <div className="content">
            <div className="container-profile">
              <h2>Student Profile</h2>
              <p>
                <b> ID:</b> {stdDetail._id}
              </p>
              <p>
                <b> Name:</b> {stdDetail.name}
              </p>
              <p>
                <b> Email:</b> {stdDetail.email}
              </p>
              <p>
                <b> Gender:</b> {stdDetail.gender}
              </p>
              <p>
                <b> Date of Birth:</b> {stdDetail.birth_date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
