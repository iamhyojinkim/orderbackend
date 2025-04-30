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

mongoose
  .connect(mongoURI)
  .then(() => console.log("mongoose connected", mongoURI))
  .catch((err) => console.log("MongoDB 연결 실패:", err));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`서버가 ${port}번 포트에서 실행 중`);
});
