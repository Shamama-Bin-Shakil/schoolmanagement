import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StudentsContext from "../context/Context";
import TopSideBar from "./TopSideBar";

export default function StudentsData() {
  const Navigate = useNavigate();
  const context = useContext(StudentsContext);
  const { students, getData } = context;

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {/* <!-- Main Section --> */}
      <div className="admin-header">
        <TopSideBar />

        <div className="main-content">
          <div className="content">
            <div className="container">
              <div className="data-container-heading">
                <h1>Students Fees</h1>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Sno</th>
                    <th>Student Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Birth Of Date</th>
                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((element, index) => {
                    return (
                      <tr key={element._id}>
                        <td>{index}</td>
                        <td>{element.name}</td>
                        <td>{element.email}</td>
                        <td>{element.gender}</td>
                        <td>{element.birth_date}</td>
                        <td>
                          <button
                            onClick={() =>
                              Navigate(`/admin/studentsinglefee/${element._id}`)
                            }
                            className="btn btn-info"
                            id="detail"
                          >
                            Fees
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
