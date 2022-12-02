import React, { useContext, useEffect } from "react";
import TopSideBar from "./TopSideBar";
import StudentsContext from "../context/Context";

export default function AdminProfile() {
  const context = useContext(StudentsContext);
  const { adminDetail, admin } = context;

  useEffect(() => {
    adminDetail();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="admin-header">
        <TopSideBar />

        <div className="main-content">
          <div className="content">
            <div className="container-profile">
              <h2>Admin Profile</h2>
              <p>
                <b> ID:</b> {admin._id}
              </p>
              <p>
                <b> Name:</b> {admin.name}
              </p>
              <p>
                <b> Email:</b> {admin.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
