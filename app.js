const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(bodyParser.json());
app.use("/api", indexRouter);
const mongoURI = process.env.MONGODB_URI_PROD;

mongoose.connect(mongoURI).then(() => console.log("mongoose connected"));

app.listen(3000, () => console.log("server on 3000"));
