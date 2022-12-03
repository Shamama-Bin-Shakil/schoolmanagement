const express = require("express");
const cors = require("cors");
const morgan  = require("morgan");
const path  = require("path");
const connectDB = require("./server/db/db");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

// Connection DB
connectDB();

// Use Cors
app.use(cors());

// Use logger create
app.use(morgan("dev"));

// Use middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use Public Folder
app.use(express.static(path.join(__dirname, "./public")));

// Router Auth

app.get("/", (req, res) => {
  res.json({
    message: "everything's is fine"
  })
});

// app.use("/", require("./server/router/Auth"));
// // Router Contact
// app.use("/", require("./server/router/Contact"));
// // Route Admin
// app.use("/", require("./server/router/Admin"));
// // Route Fees
// app.use("/", require("./server/router/Fees"));


app.listen(port, () =>
  console.log("> Server is up and running on port http://localhost:" + port)
);
