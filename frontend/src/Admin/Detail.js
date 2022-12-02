import React, { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import TopSideBar from "./Component/TopSideBar";
import StudentsContext from "./context/Context";

export default function Detail() {
  const { id } = useParams();
  const context = useContext(StudentsContext);
  const { onDelete, getDataSingle, data } = context;



  useEffect(() => {
    getDataSingle(id);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="admin-header">
        <TopSideBar />
        <div className="main-content">
          <div className="content">
            <div className="container-profile">
              <h2>Student Profile</h2>
              <p>
                <b> ID:</b> {data._id}
              </p>
              <p>
                <b> Name:</b> {data.name}
              </p>
              <p>
                <b> Email:</b> {data.email}
              </p>
              <p>
                <b> Gender:</b> {data.gender}
              </p>
              <p>
                <b> Birth of Date:</b> {data.birth_date}
              </p>
              <p>
                <button className="btn btn-delete" onClick={()=> onDelete(data._id)}>Delete</button>
                <button className="btn btn-info">Update</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
