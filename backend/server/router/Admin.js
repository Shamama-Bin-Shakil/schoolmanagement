const express = require("express");
const Admin = require("../model/Admin");
const route = express.Router();
const User = require("../model/User");
const bcryptjs = require("bcryptjs");
const userData = require("../middleware/userData");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

route.get("/api/totalstudents", async (req, res) => {
  const data = await User.find();
  res.json({ data, status: "success" });
});

route.get("/api/studentdetail/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const data = await User.findById(id);
  res.json({ data, status: "success" });
});

route.post("/api/adminauth", async (req, res) => {
  const { email, password } = req.body;

  const check = await Admin.findOne({ email });
  if (!check) {
    return res.json({ msg: "Invalid Credential", status: "error" });
  }
  const passwordCheck = await bcryptjs.compare(password, check.password);
  if (!passwordCheck) {
    return res.json({ msg: "Invalid Credential", status: "error" });
  }

  const payload = {
    id: check.id,
  };
  const userData = jwt.sign(payload, SECRET_KEY);

  return res.json({ data: userData, msg: "Logged", status: "success" });
});

route.post("/api/adminfetch", userData, async (req, res) => {
  const id = req.user;
  const data = await Admin.findById(id).select("-password");
  res.json({ data, msg: "Send Admin Data", status: "success" });
});

// Admin Create Account
// route.post("/api/admincreateaccount", async (req, res) => {
//   const { name, email, password } = req.body;
//   const salt = await bcryptjs.genSalt(10);
//   const hash = await bcryptjs.hash(password, salt);

//   const data = new Admin({
//     name,
//     email,
//     password: hash,
//   });
//   const result = await data.save();
//   res.json({ result });
// });

module.exports = route;
