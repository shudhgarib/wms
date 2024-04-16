require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
require("./config/dbConnection");

const userRouter = require("./routes/userRoute");
const webRouter = require("./routes/webRoute");

const app = express();

app.use(express.json());

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

// list start

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "wms",
});

app.get("/", (re, res) => {
  return res.json("from backend side");
});

app.get("/donor_list", (req, res) => {
  const sql = "SELECT * FROM donor_list";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
// list end

app.use("/api", userRouter);
app.use("/", webRouter);

// error handling start
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    message: err.message,
  });
});

// app.listen(8081, () => {
//   console.log("server is running on port 8081");
// });

var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("Hello World!");
    console.log("server is running on port 8081");
  })
  .listen(8081);
