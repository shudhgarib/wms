import React, {useState} from "react";
import styles from "./Donate.module.css";
export const Donate = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [action, setAction] = useState("Login");
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <form
        action=""
        method="post"
        className={styles.form}
        style={{fontFamily: "Poppins"}}>
        <div className={styles.border}>
          <h3
            style={{
              color: "white",
            }}>
            {action}
            <hr
              style={{
                borderTop: "5px dotted #4CCD99",
                opacity: "0.6",
              }}
            />
          </h3>
          <div className="Inputs">
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
          </div>
          <div className="Inputs">
            {/*start registration code */}
            {action === "Register" ? (
              <div className={styles.input_box}>
                <input
                  type="text"
                  name="fName"
                  className="form-control"
                  id="fName"
                  placeholder="Enter First Name"
                  required
                />
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="Inputs">
            {action === "Register" ? (
              <div className={styles.input_box}>
                <input
                  type="text"
                  name="lName"
                  className="form-control"
                  id="lName"
                  placeholder="Last Name"
                  required
                />
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="Inputs">
            {action === "Register" ? (
              <div className={styles.input_box}>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Email"
                  required
                />
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="Inputs">
            {action === "Register" ? (
              <div className={styles.input_box}>
                <input
                  type="number"
                  name="Phone"
                  className="form-control"
                  id="Phone"
                  placeholder="Enter Phone Number"
                  required
                  style={{}}
                />
              </div>
            ) : (
              <div></div>
            )}
          </div>{" "}
          <div className="Inputs">
            {action === "Register" ? (
              <div className={styles.input_box}>
                <input
                  type="text"
                  name="details"
                  className="form-control"
                  id="details"
                  placeholder="Address"
                  required
                />
              </div>
            ) : (
              <div></div>
            )}
          </div>
          {/*end registration code */}
          {/*start forgot code */}
          <div className="Inputs">
            {action === "Forgot" ? (
              <div className={styles.input_box}>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Registered Email..."
                  required
                />
              </div>
            ) : (
              <div></div>
            )}
          </div>
          {/*end forgot code */}
          <div className="Inputs">
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
          </div>
          <div className="Inputs">
            {action === "Register" ? (
              <div></div>
            ) : (
              <div
                className={styles.forgot_password}
                onClick={() => {
                  setAction("Forgot");
                }}>
                Forgot password?
              </div>
            )}
          </div>
          <div className={styles.submit_container}>
            <div
              className={
                action === "Login"
                  ? `${styles.submit} && ${styles.gray}`
                  : `${styles.submit}`
              }
              onClick={() => {
                setAction("Register");
              }}>
              Register
            </div>
            <div
              className={
                action === "Register"
                  ? `${styles.submit} &&  ${styles.gray}`
                  : `${styles.submit}`
              }
              onClick={() => {
                setAction("Login");
              }}>
              Login
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Donate;
