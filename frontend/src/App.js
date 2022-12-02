import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./Component/Index";
import Contact from "./Component/Contact";
import Login from "./Component/Login";
import Sign from "./Component/Sign";
import Otp from "./Component/Otp";
import ForgetPassword from "./Component/Forget_password";
import ChangePassword from "./Component/Change_password";
import AdminIndex from "./Admin/AdminIndex";
import HandleState from "./Admin/context/HandleState";
import Detail from "./Admin/Detail";
import Error from "./Error";
import AddStudent from "./Admin/Component/AddStudent";
import AdminProfile from "./Admin/Component/AdminProfile";
import "./css/style.css";
import AdminLogin from "./Component/AdminLogin";
import StudentDashboard from "./StudentComponent/StudentDashboard";
import StudentFees from "./Admin/Component/StudentFees";
import StudentSingleFee from "./Admin/Component/StudentSingleFee";
import StudentFeeSection from "./StudentComponent/StudentFeeSection";

export default function App() {
  return (
    <>
      <HandleState>
        <Routes>
          {/* Websites Route */}
          <Route path="/" element={<Index />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sign" element={<Sign />}></Route>
          <Route path="/otp" element={<Otp />}></Route>
          <Route path="/forget_password" element={<ForgetPassword />}></Route>
          <Route path="/change_password" element={<ChangePassword />}></Route>

          {/* Students Route */}
          <Route
            path="/student/dashboard"
            element={<StudentDashboard />}
          ></Route>
          <Route
            path="/student/studentfees"
            element={<StudentFeeSection />}
          ></Route>

          {/* Admin Route */}
          <Route path="/admin/index" element={<AdminIndex />}></Route>
          <Route path="/admin/addstudent" element={<AddStudent />}></Route>
          <Route path="/admin/adminprofile" element={<AdminProfile />}></Route>
          <Route path="/adminlogin" element={<AdminLogin />}></Route>
          <Route path="/admin/detail/:id" element={<Detail />}></Route>
          <Route path="/admin/studentfee" element={<StudentFees />}></Route>
          <Route
            path="/admin/studentsinglefee/:id"
            element={<StudentSingleFee />}
          ></Route>

          <Route path="*" element={<Error />}></Route>
        </Routes>
      </HandleState>
    </>
  );
}
