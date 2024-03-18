import React from "react";
// import styles from "./Reserve.module.css";

export const Reserve = () => {
  return (
    <>
      <form action="" method="post" className={styles.form}>
        <div className={styles.border}>
          <h3>Login Here</h3>
          <div className={styles.input_box}>
            <input
              type="text"
              name="username"
              className="form-control"
              id="username"
              placeholder="Username"
            />
          </div>

          <div className={styles.input_box}>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>

          <div className="forgot">
            <a href="/forgot">
              <p style={{textAlign: "left", marginLeft: "10px"}}>
                Forgot password?
              </p>
            </a>
          </div>
          <button type="submit" className={styles.btn}>
            LOGIN
          </button>
          <div className={styles.member}>
            <p>
              Don't have an account?{" "}
              <a href="/register">
                <span>Register now</span>
              </a>
            </p>
          </div>
        </div>
      </form>
    </>
  );
};

export default Reserve;
