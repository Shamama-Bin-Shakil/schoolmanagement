const express = require("express");
const route = express.Router();
const Contact = require("../model/Contact");

//Route -> (1) REGISTER Account
route.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      // Data analyze
      const data = new Contact({
        name,
        email,
        message,
      });
      // Data Save
      const result = await data.save();
      if (!result) {
        return res.json({ msg: "Something went wrong ", status: "error" });
      }
      return res.json({ msg: "Message Send Successfully", status: "success" });
    } catch (error) {
      res.status(404).send("not ok :(");
    }
  });

module.exports = route;

