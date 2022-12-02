const express = require("express");
const route = express.Router();
const Fees = require("../model/Fees");

route.post("/api/fee/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email, month, date, fees } = req.body;
    // Data analyze

    const data = new Fees({
      userid: id,
      name,
      email,
      fees,
      month,
      date,
    });
    // Data Save
    const result = await data.save();
    if (!result) {
      return res.json({ msg: "Something went wrong ", status: "error" });
    }
    return res.json({
      data: result,
      msg: "Message Send Successfully",
      status: "success",
    });
  } catch (error) {
    res.status(404).send("not ok :(");
  }
});

route.get("/api/feefetch/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Fees.find({ userid: id });

    res.json({ data });
  } catch (error) {
    res.status(404).send("not ok :(");
  }
});

module.exports = route;
