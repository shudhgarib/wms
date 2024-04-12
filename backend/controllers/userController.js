const {validationResult, Result} = require("express-validator");
const bcrypt = require("bcryptjs");

const db = require("../config/dbConnection");

require("randomstring");
const sendMail = require("../helpers/sendMail");

const jwt = require("jsonwebtoken");
const {JWT_SECRET} = process.env;

const register = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }

  db.query(
    `SELECT * FROM users WHERE LOWER(email) = LOWER(${db.escape(
      req.body.email
    )});`,
    (err, result) => {
      if (result && length) {
        return res.status(409).send({
          msg: "user allready exist!",
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).send({
              msg: err,
            });
          } else {
            db.query(
              `INSERT INTO users (name , email , password ,image) VALUES ('${
                req.body.name
              }',${db.escape(req.body.email)},${db.escape(hash)},'images/${
                req.file.filename
              }');`,
              (err, result) => {
                if (err) {
                  return res.status(500).send({
                    msg: err,
                  });
                }

                let mailSubject = "Mail Verification";
                const randomToken = Randomstring.generate();
                let content =
                  "<p>Hi " +
                  req.body.name +
                  ', Please <a href="http://127.0.0.1:8081/mail-verification?token=' +
                  randomToken +
                  '"> Verify </a> Your Mail.';
                sendMail(req.body.email, mailSubject, content);

                db.query(
                  "UPDATE users set token=? where email=?",
                  [randomToken, req.body.email],
                  function (error, result, fields) {
                    if (error) {
                      return res.status(500).send({
                        msg: err,
                      });
                    }
                  }
                );
                return res.status(200).send({
                  msg: "the user has been registered with us!",
                });
              }
            );
          }
        });
      }
    }
  );
};

const verifyMail = (req, res) => {
  var token = req.query.token;
  db.query(
    "SELECT * FROM users where token=? limit 1",
    token,
    function (error, result, fields) {
      if (error) {
        console.log(error.message);
      }
      if (result.length > 0) {
        db.query(`
     UPDATE users SET token = null, is_verified = 1 WHERE id = '${result[0].id}'
     `);
        return res.render("mailverification", {
          message: "Mail verified successfully!",
        });
      } else {
        return res.render("404");
      }
    }
  );
};

const login = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }

  db.query(
    `SELECT * FROM users WHERE email = ${db.escape(req.body.email)};`,
    (err, result) => {
      if (err) {
        return res.status(400).send({
          msg: err,
        });
      }
      if (!result.length) {
        return res.status(401).send({
          msg: "Email or Password is incorrect!",
        });
      }
      bcrypt.compare(
        req.body.password,
        result[0]["password"],
        (bErr, bResult) => {
          if (bErr) {
            return res.status(400).send({
              msg: bErr,
            });
          }
          if (bResult) {
            const token = jwt.sign(
              {id: result[0]["id"], is_admin: result[0]["is_admin"]},
              JWT_SECRET,
              {expiresIn: "1h"}
            );
            db.query(
              `UPDATE users SET last_login = now() WHERE id = '${result[0]["id"]}'`
            );
            return res.status(200).send({
              msg: "Logged in!",
              token,
              user: result[0],
            });
          }
          return res.status(401).send({
            msg: "Email or Password is incorrect!",
          });
        }
      );
    }
  );
};

module.exports = {
  register,
  verifyMail,
  login,
};
