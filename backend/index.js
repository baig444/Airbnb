const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser")
const connectDB = require("./config/db");
const router = require("./routes/routes");
const cookieParser = require('cookie-parser');
require("dotenv").config();

const app = express()

app.use(cors({ origin: "http://localhost:5174", credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/uploads', express.static('uploads'));


// connect db

connectDB();

app.get("/", (req, res) => {
    res.send("Welcome to NightSuites Backend");
  });

  app.use("/api", router);
app.listen(9000, () => console.log("Server Started at PORT 9000"));