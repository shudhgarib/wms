const {validationResult, Result, body} = require("express-validator");
const bcrypt = require("bcryptjs");
const Randomstring = require('crypto');

const db = require("../config/dbConnection");

require("randomstring");
const sendMail = require("../helpers/sendMail");

function generate_token(length){
  //edit the token allowed characters
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
  var b = [];  
  for (var i=0; i<length; i++) {
      var j = (Math.random() * (a.length-1)).toFixed(0);
      b[i] = a[j];
  }
  return b.join("");
}

const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const register = (req, res) => {
  if(req.body.action === "Register"){
    db.query(
      `SELECT * FROM users WHERE LOWER(email) = LOWER(${db.escape(
        req.body.email
      )});`,
      (err, result) => {
        if (result.length > 0) {
          return res.status(409).send({
            msg: "user already exist!",
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
                  req.body.fname + " " + req.body.lname
                }',${db.escape(req.body.email)},${db.escape(hash)},'images/empty');`,
                (err, result) => {
                  if (err) {
                    return res.status(500).send({
                      msg: err,
                    });
                  }

                  let mailSubject = "Mail Verification";
                  const randomToken = generate_token(32)
                  let content =
                    "<p>Hi " +
                    req.body.name +
                    ', Please <a href="http://127.0.0.1:8081/mail-verification?token=' +
                    randomToken +
                    '"> Verify </a> Your Mail.';
                  // sendMail(req.body.email, mailSubject, content);

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
  }else{
    login(req,res);
  }
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
  // const errors = validationResult(req);

  // if (!errors.isEmpty()) {
  //   return res.status(400).json({errors: errors.array()});
  // }

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
              {id: result[0]["email"], is_admin: result[0]["is_admin"]},
              JWT_SECRET,
              {expiresIn: "1h"}
            );
            db.query(
              `UPDATE users SET last_login = now() WHERE email = '${result[0]["email"]}'`
            );
            return res.status(200).send({
              msg: "Logged in!",
              token,
              user: result[0],
              success: true,
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
const getUser = (req, res) => {
  const authToken = req.headers.authorization.split(" ")[1];
  const decode = jwt.verify(authToken, JWT_SECRET);

  db.query(
    "SELECT * FROM users WHERE id=?",
    decode.id,
    function (error, result, fields) {
      if (error) throw error;
      return res
        .status(200)
        .send({success: true, data: result[0], message: "Fetch Successfully!"});
    }
  );
};

const forgetPassword = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }
  var email = req.body.email;
  db.query(
    "SELECT * FROM users WHERE email=? limit 1",
    email,
    function (error, result, fields) {
      if (error) {
        return res.status(400).json({message: error});
      }
      if (result.length > 0) {
        let mailSubject = "Forget Password";
        const randomString = randomstring.generate();
        let content =
          "<p>Hi, " +
          result[0].name +
          '\
        Please <a href="http://127.0.0.1:8081/api/reset-password?token=' +
          randomString +
          '">click Here</a>to Reset your Password</p>\
        ';
        sendMail(email, mailSubject, content);

        db.query(
          `DELETE FROM password_resets WHERE email =(${db.escape(
            result[0].email
          )}`
        );

        db.query(
          `INSERT INTO password_resets (email,token) VALUES(${db.escape(
            result[0].email
          )},'${randomString}')`
        );

        return res.status(200).send({
          message: "Mail Sent Successfully for Reset Password!",
        });
      }

      return res.status(401).send({
        message: "Email doesn't exists!",
      });
    }
  );
};

const resetPasswordLoad = (req, res) => {
  try {
    var token = req.query.token;
    if (token == undefined) {
      res.render("404");
    }

    db.query(
      `SELECT * FROM password_resets where token=? limit 1`,
      token,
      function (error, result, fields) {
        if (error) {
          console.log(error);
        }
        if (result !== undefined && result.length > 0) {
          db.query(
            "SELECT * FROM users WHERE email=? limit 1",
            result[0].email,
            function (error, result, fields) {
              if (error) {
                console.log(error);
              }
              res.render("reset-password", {user: result[0]});
            }
          );
        } else {
          res.render("404");
        }
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};

const resetPassword = (req, res) => {
  if (req.body.password != req.body.confirm_password) {
    res.render("reset-password", {
      error_message: "password  not matching!",
      user: {id: req.body.user_id, email: req.body.email},
    });
  }
  bcrypt.hash(req.body.confirm_password, 10, (err, hash) => {
    if (err) {
      console.log(err);
    }
    db.query(`DELETE FROM password_resets WHERE email = '${req.body.email}'`);

    db.query(
      `UPDATE users SET passwor= '${hash}' WHERE id = '${req.body.user_id}'`
    );
    return res.render("message", {message: "password reset successfully!"});
  });
};

const updateProfile = (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }
    const token = req.headers.authorization.split(" ")[1];
    const decode = jwt.verify(token, JWT_SECRET);
    var sql = "",
      data;
    if (req.file != undefined) {
      sql = `UPDATE users SET name = ?, email = ? , image = ? where id = ? `;
      data = [
        req.body.name,
        req.body.email,
        "images/" + req.file.filename,
        decode.id,
      ];
    } else {
      sql = `UPDATE users SET name = ?, email = ?  where id = ? `;
      data = [req.body.name, req.body.email, decode.id];
    }
    db.query(sql, data, function (error, result, fields) {
      if (error) {
        res.status(400).send({
          msg: error,
        });
      }
      res.status(200).send({
        msg: "Profile Updated Successfully!",
      });
    });
  } catch (error) {
    return res.status(400).json({msg: error.message});
  }
};

module.exports = {
  register,
  verifyMail,
  login,
  getUser,
  forgetPassword,
  resetPasswordLoad,
  resetPassword,
  updateProfile,
};
