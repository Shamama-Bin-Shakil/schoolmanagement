import React, { useContext, useEffect } from "react";
import StudentsSidebar from "./StudentsSidebar";
import StudentsContext from "../Admin/context/Context";

export default function StudentDashboard() {
  const context = useContext(StudentsContext);
  const { studentDetail, stdDetail, stdFee, studentFeeDetail } = context;

  let id = stdDetail._id;

  useEffect(() => {
    studentDetail();
    studentFeeDetail(id);
    // eslint-disable-next-line
  }, []);

  let sno = 1;

  return (
    <>
      <div className="student-header">
        <StudentsSidebar />
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
                    <th>Std.Name</th>
                    <th>Email</th>
                    <th>Month</th>
                    <th>Fees</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {stdFee.map((element) => {
                    return (
                      <tr key={element._id}>
                        <td>{sno++}</td>
                        <td>{element.name}</td>
                        <td>{element.email}</td>
                        <td>{element.month}</td>
                        <td>{element.fees}</td>
                        <td>{element.date}</td>
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
