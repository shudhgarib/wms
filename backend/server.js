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

app.post("/welcome", (req, res) => {
  const {utrno, deposit_proof, amount, bankData} = req.body;
  const {AccNo} = bankData;
  const date = new Date();
  console.log(utrno, deposit_proof, amount, AccNo, date);
  const sql =
    "INSERT INTO donors_details (`utrno`,`deposit_proof`,`amount`,`date`, `accno`) VALUES (?)";
  const values = [utrno, deposit_proof, amount, date.toISOString(), AccNo];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json("ERROR");
    return res.json(data);
  });
});

// // donors details code start
app.get("/donors", (req, res) => {
  const sql = `
    SELECT  t1.name, t1.address, t2.amount, t2.date, t2.utrno, t2.accno, t2.deposit_proof
    FROM users AS t1
    JOIN donors_details AS t2 ON t1.id = t2.donor_id
  `;
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error fetching data:", err);
      res.status(500).send("Error fetching data");
      return;
    }
    res.json(data);
  });
});

// donors details code end

// place reservation code start

app.get("/place-reservation", (req, res) => {
  const sql = `
    SELECT  t1.name, t1.mobno,  t2.date, t2.no_of_candidates
    FROM users AS t1
    JOIN reserve_place AS t2 ON t1.id = t2.reserve_id
  `;
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error fetching data:", err);
      res.status(500).send("Error fetching data");
      return;
    }
    res.json(data);
  });
});

app.post("/reserve-place", (req, res) => {
  const sql = "INSERT INTO reserve_place (`no_of_candidates`) VALUES (?)";
  const values = [req.body.candidate];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});
// place reservation code end

// admin code start

app.post("/admin", (req, res) => {
  const sql = "SELECT * FROM admin WHERE adminname = ? AND password = ? ";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
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
