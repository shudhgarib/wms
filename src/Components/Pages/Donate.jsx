import React, {useState} from "react";
import styles from "./Donate.module.css";
import {Link} from "react-router-dom";

export const Donate = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <form action="" method="post" className={styles.form}>
        <div className={styles.border}>
          <h3>
            Login Form
            <hr
              style={{
                borderTop: "5px dotted darkviolet",
              }}
            />
          </h3>

          <div className={styles.input_box}>
            <input
              type="text"
              name="username"
              className="form-control"
              id="username"
              placeholder="Username"
              required
            />
          </div>

          <div className={styles.input_box}>
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
              required
            />
            <img
              className={styles.eyeicon}
              src={
                passwordVisible
                  ? "../assets/images/sun.webp"
                  : "../assets/images/sun-close-eye.png"
              }
              id="eyeicon"
              onClick={togglePasswordVisibility}
              alt="Toggle Password Visibility"
            />
          </div>

          <div className={styles.forgot}>
            <a href="/forgot">
              <p style={{textAlign: "left", marginLeft: "20px"}}>
                Forgot password?
              </p>
            </a>
          </div>
          <button type="submit" className={styles.btn}>
            LOGIN
          </button>
          <div className={styles.member}>
            <p>
              Don't have an account? <Link to="/Register">Register Now</Link>
            </p>
          </div>
        </div>
      </form>
    </>
  );
};

export default Donate;
