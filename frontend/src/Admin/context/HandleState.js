import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import context from "./Context";
const HandleState = (props) => {
  const host = "http://localhost:8080"

  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [admin, setAdmin] = useState([]);
  const [stdDetail, setStdDetail] = useState([]);
  const [stdFee, setStdFee] = useState([]);
  const [data, setData] = useState({});


  const getData = async () => {
    const response = await fetch(`${host}/api/totalstudents`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    setStudents(json.data);
  };

  const onDelete = async (id) => {
    let url = `${host}/api/studentdelete/${id}`;
    const response = await fetch(url, {
      method: "GET",
      headers: { "content-type": "application/json" },
    });
    const result = await response.json();
    if (result.data) {
      navigate("/admin/index");
    }

    setStudents((preValue) =>
      preValue.filter((students) => {
        return students._id !== id;
      })
    );
  };

  // Admin Detail
  const adminDetail = async () => {
    let url = `${host}/api/adminfetch`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
    });
    const result = await response.json();
    if (result.data) {
      setAdmin(result.data);
    }
  };

  const studentDetail = async () => {
    let url = `${host}/api/studentfetch`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const result = await response.json();
    if (result.data) {
      setStdDetail(result.data);
    }
  };

  const studentFeeDetail = async (id) => {
    let url = `${host}/api/feefetch/${id}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (result.data) {
      setStdFee(result.data);
    }
  };

  const studentFeeAdd = async ({userid, name, email, fees, month, date}) => {
    const fee = {
      userid: userid,
      name: name,
      email: email,
      fees: fees,
      month: month,
      date: date,
    };
    let url = `${host}/api/fee/${userid}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fee),
    });
    const result = await response.json();
    if (result.data) {
      setStdFee(stdFee.concat(fee));
    }
  };

  const getDataSingle = async (id) => {
    const url = `${host}/api/studentdetail/${id}`;
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    setData(result.data);
  };

  return (
    <context.Provider
      value={{
        students,
        getData,
        onDelete,
        admin,
        adminDetail,
        stdDetail,
        studentDetail,
        studentFeeDetail,
        stdFee,
        studentFeeAdd,
        getDataSingle,
        data
      }}
    >
      {props.children}
    </context.Provider>
  );
};

export default HandleState;
