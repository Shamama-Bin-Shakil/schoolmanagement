import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import StudentsContext from "../context/Context";
import TopSideBar from "./TopSideBar";

export default function StudentsData() {
  const context = useContext(StudentsContext);
  const { id } = useParams();
  const { stdFee, studentFeeDetail, studentFeeAdd, getDataSingle, data } =
    context;
  const ref = useRef("");
  console.log(id)
  useEffect(() => {
    getDataSingle(id);
    studentFeeDetail(id);
    // eslint-disable-next-line
  }, []);

  const modalHandle = () => {
    ref.current.classList.toggle("active");
  };
  const options = [
    { value: "January", text: "January" },
    { value: "February", text: "February" },
    { value: "March", text: "March" },
    { value: "April", text: "April" },
    { value: "May", text: "May" },
    { value: "June", text: "June" },
    { value: "July", text: "July" },
    { value: "August", text: "August" },
    { value: "September", text: "September" },
    { value: "October", text: "October" },
    { value: "November", text: "November" },
    { value: "December", text: "December" },
  ];

  const [selected, setSelected] = useState(options[0].value);
  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const [detail, setDetail] = useState({
    fees: "",
    month: selected,
    date: "",
  });

  const EventHandle = (e) => {
    const { value, name } = e.target;
    setDetail((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const FormSubmit = () => {
    studentFeeAdd({
      userid: data.userid,
      name: data.name,
      email: data.email,
      fees: detail.fees,
      month: detail.month,
      date: detail.date,
    });
  };

  let sno = 1;
  return (
    <>
      <div className="admin-header">
        <div className="modal" id="modal-fees" ref={ref}>
          <div className="modal-setting">
            <header>
              <h5>Students Payment</h5>
              <div
                className="modal-close"
                id="modal-fees-close"
                onClick={modalHandle}
              >
                +
              </div>
            </header>
            <section>
              <form>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={EventHandle}
                  value={data.name}
                />

                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={EventHandle}
                  value={data.email}
                />
                <select onChange={handleChange} value={selected}>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>

                <input
                  type="number"
                  placeholder="Fees"
                  name="fees"
                  onChange={EventHandle}
                  value={detail.fees}
                />

                <input
                  type="date"
                  value={detail.date}
                  onChange={EventHandle}
                  name="date"
                  placeholder="Date"
                />
              </form>
            </section>
            <footer>
              <div className="form-control">
                <button type="button" onClick={FormSubmit} id="fee-pay">
                  Pay
                </button>
              </div>
            </footer>
          </div>
        </div>

        {/* <!-- Main Section --> */}
        <TopSideBar />

        <div className="main-content">
          <div className="content">
            <div className="container">
              <div className="data-container-heading">
                <h1>Students Fees</h1>
                <button className="button btn-primary" onClick={modalHandle}>
                  Fee Payment
                </button>
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
