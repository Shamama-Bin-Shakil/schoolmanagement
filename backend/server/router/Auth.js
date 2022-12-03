const express = require("express");
const route = express.Router();
const bcryptjs = require("bcryptjs");
const nodemailer = require("nodemailer");
const otp = require("otp-generator");
const User = require("../model/User");
const jwt = require("jsonwebtoken");
const userData = require("../middleware/userData");
const SECRET_KEY = process.env.SECRET_KEY;
const password = process.env.PASS;
const accEmail = process.env.EMAIL;

//Route -> (0) REGISTER Account
route.get("/", (req, res) => {
  res.json({
    msg: "welcome to node app"
  })
})

//Route -> (1) REGISTER Account
route.post("/api/register", async (req, res) => {
  try {
    const { name, email, password, gender, birth_date } = req.body;
    const salt = await bcryptjs.genSalt(10);
    const hash = await bcryptjs.hash(password, salt);

    const check = await User.findOne({ email });
    if (check) {
      return res.json({ msg: "Email is already exist", status: "error" });
    }

    // Data analyze
    const data = new User({
      name,
      email,
      password: hash,
      gender,
      birth_date,
      otp: "",
    });
    // Data Save
    const result = await data.save();
    if (!result) {
      return res.json({ msg: "Something went wrong ", status: "error" });
    }
    return res.json({ msg: "Account Create Successfully", status: "success" });
  } catch (error) {
    res.status(404).send("not ok :(");
  }
});

//Route -> (2) LOGIN Account
route.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkExist = await User.findOne({ email });
    // Exist Email
    if (!checkExist) {
      return res.json({ msg: "Invalid Credential", status: "error" });
    }
    // Check Password
    const checkPassword = await bcryptjs.compare(password, checkExist.password);
    if (!checkPassword) {
      return res.json({ msg: "Invalid Credential", status: "error" });
    }
    const payload = {
      id: checkExist.id,
    };
    const userData = jwt.sign(payload, SECRET_KEY);

    return res.json({ data: userData, msg: "Logged", status: "success" });
  } catch (error) {
    console.log(error);
  }
});

//Route -> (3) FORGET Account
route.post("/api/forget", async (req, res) => {
  try {
    const { email } = req.body;
    const otpsend = otp.generate(8, {
      upperCaseAlphabets: false,
      specialChars: false,
      lowerCaseAlphabets: false,
    });
    const result = await User.findOneAndUpdate(email, {
      $set: { otp: otpsend },
    });

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: accEmail, // generated ethereal user
        pass: password, // generated ethereal password
      },
    });

    let mail = {
      from: accEmail, // sender address
      to: email, // list of receivers
      subject: "Verification Code For Password Forget ✔", // Subject line
      text: "Verification Code For Password Forget ✔", // plain text body
      html: `<b>${otpsend}</b>`, // html body
    };

    transporter.sendMail(mail, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log(info);
        return res.json({ msg: "Email Send Successfully", status: "success" });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

//Route -> (4) OTP SEND -> Account
route.post("/api/otp", async (req, res) => {
  try {
    const { otp } = req.body;
    const checkValidOTP = await User.findOne({ otp }).count();
    // Check OTP Valid
    if (checkValidOTP == 0) {
      return res.json({ msg: "OTP is not match", status: "error" });
    }
    // if (result) {
    res.json({ msg: "Verified", status: "success" });
    // }
  } catch (error) {
    console.log(error);
  }
});

//Route -> (5) USER DATA -> Account
route.post("/api/studentfetch", userData, async (req, res) => {
  const id = req.user;
  const data = await User.findById(id).select("-password");
  res.json({ data, msg: "Send Admin Data", status: "success" });
});

//Route -> (6) Forget Change Password -> Account
route.post("/api/forgetchangepassword", async (req, res) => {
  const { email, new_password, conf_password } = req.body;

  const salt = await bcryptjs.genSalt(10);
  const hash = await bcryptjs.hash(new_password, salt);
  try {
    const userPass = await User.findOneAndUpdate(
      email,
      { $set: { password: hash, otp: "" } },
      { new: true }
    );
    if (!userPass) {
      res.json({ msg: "Password has not been Updates", status: "error" });
    }
    res.json({ msg: "Password has been Updates", status: "success" });
  } catch (error) {
    console.log(error);
  }
});

//Route -> (7) Delete User -> Account
route.get("/api/studentdelete/:id", async (req, res) => {
  const id = req.params.id;
  const data = await User.findByIdAndDelete(id);
  res.json({ data, status: "success" });
});

//Route -> (7) Update User -> Account
route.put("/api/studentupdate/:id", async (req, res) => {
  const { name, gender, birth_date} = req.body;
  const id = req.params.id;
  const updateData = {
    name: name,
    gender: gender,
    birth_date: birth_date
  };
  const data = await User.findByIdAndUpdate(
    id,
    { $set: updateData },
    { new: true }
  );
  res.json({ data, status: "success" });
});

module.exports = route;
