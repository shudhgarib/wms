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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

// list start

// db connection creation code start

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "wms",
});

// db connection creation code end
app.get("/", (re, res) => {
  return res.json("from backend side edited");
});

// 2023 donor list code start

app.get("/donor_list_2023", (req, res) => {
  const sql = "SELECT * FROM donor_list_2023";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
// 2023 donor list code end

// 2024 donor list code start

app.get("/donor_list_2024", (req, res) => {
  const sql = "SELECT * FROM donor_list_2024";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// 2024 donor list code end

//  create donor details code start

app.post("/donor_list_2024", (req, res) => {
  const sql =
    "INSERT INTO donor_list_2024 (`name`, `amount`, `place`, `date`) VALUES(?)";
  console.log(req.body);
  const values = [
    req.body.name,
    req.body.amount,
    req.body.place,
    req.body.date,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
//  create donor details code end

// list end

// donor details code start

app.get("/donar-details", (req, res) => {
  const sql1 = "SELECT * FROM donors_details";
  db.query(sql1, (err, data) => {
    if (err) return res.json(err);
    console.log(data, 49);
    return res.json(data);
  });
});

// app.get("/list",(req, res)=>{
//   const query = 'SELECT * FROM '
// })

app.post("/welcome", (req, res) => {
  const {utrno, deposit_proof, amount, bankData} = req.body;
  const {AccNo} = bankData;
  const date = new Date();
  console.log(utrno, deposit_proof, amount, AccNo, date);
  const sql1 =
    "INSERT INTO donors_details (`utrno`,`deposit_proof`,`amount`,`date`, `accno`) VALUES (?)";
  const values = [utrno, deposit_proof, amount, date.toISOString(), AccNo];
  db.query(sql1, [values], (err, data) => {
    if (err) return res.json("ERROR");
    return res.json(data);
  });
});

// donor details code end

// admin code start

app.post("/admin", (req, res) => {
  const sql2 = "SELECT * FROM admin WHERE adminname = ? AND password = ? ";
  db.query(sql2, [req.body.email, req.body.password], (err, data) => {
    if (err) return res.json("Error");
    if (data.length > 0) {
      return res.json({user: "Login Successfully"});
    } else {
      return res.json({user: "No Record"});
    }
  });
});

// admin code end

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

app.listen(8081, () => {
  console.log("server is running on port 8081");
});
