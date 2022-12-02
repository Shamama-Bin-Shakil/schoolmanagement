import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Component/Navbar";
export default function Error() {
  const navigate = useNavigate();
  const rollBack = () => {
    navigate(-1)
  }
  return (
    <div>
      <Navbar />
      <div className="error-page">
        <h1>404 PAGE NOT FOUND!</h1>
        <h3 onClick={rollBack}>Go Back</h3>
      </div>
    </div>
  );
}
