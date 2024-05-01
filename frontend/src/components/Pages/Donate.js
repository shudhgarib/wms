import React, {useState, useEffect} from "react";
import styles from "./Donate.module.css";
export const Donate = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [action, setAction] = useState("Login");
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  // make states for maintaining value of each input tag
  const [username, setUsername] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      // alert("You are already logged in");
      window.location.href = "/welcome";
    }
  }, []);

  // make a function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // make a fetch request to the server
    fetch("http://localhost:8081/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        fName,
        lName,
        email,
        phone,
        details,
        password,
        action,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // check if the response is successful
        if (data.success) {
          // redirect the user to the dashboard
          window.location.href = "/Welcome";
          // add the token to cookies
          localStorage.setItem("token", data.token);
        } else {
          if (data.msg === "the user has been registered with us!") {
            setAction("Login");
            alert("User Registered Successfully, Please Login");
          }
          // show an error message
          alert(data.msg);
        }
      });
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // make a fetch request to the server
    fetch("http://localhost:8081/api/forget-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // check if the response is successful
        if (data.success) {
          // redirect the user to the dashboard
          alert("Password reset link has been sent to your email");
        } else {
          // show an error message
          alert(data.message);
        }
      });
  };

  return (
    <>
      <div
        action=""
        method="post"
        className={styles.form}
        style={{fontFamily: "Poppins"}}>
        <div
          className={styles.border}
          style={{
            overflow: "hidden",
          }}>
          <h3
            className="animate__animated animate__flipInX"
            style={{
              color: "white",
              overflow: "hidden",
            }}>
            {action}
            <hr
              style={{
                borderTop: "5px dotted #4CCD99",
                opacity: "0.6",
              }}
            />
          </h3>
          {action === "Register" && (
            <div className="Inputs">
              <div className={styles.input_box}>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  id="username"
                  placeholder="user name"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
          )}
          <div className="Inputs">
            {/*start registration code */}
            <input
              type="text"
              name="action"
              value={action}
              style={{
                display: "none",
              }}
            />
            {action === "Register" ? (
              <div className={styles.input_box}>
                <input
                  type="text"
                  name="fName"
                  className="form-control"
                  id="fName"
                  placeholder="Enter First Name"
                  required
                  onChange={(e) => setFName(e.target.value)}
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
                  onChange={(e) => setLName(e.target.value)}
                />
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="Inputs">
            {action === "Register" ||
            action === "Login" ||
            action === "Forgot Password" ? (
              <div className={styles.input_box}>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPhone(e.target.value)}
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
                  type="file"
                  name="imageUpload"
                  className="form-control"
                  id="imageUpload"
                  placeholder="Upload image"
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
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            ) : (
              <div></div>
            )}
          </div>
          {/*end forgot code */}
          {action !== "Forgot" && (
            <div className="Inputs">
              <div className={styles.input_box}>
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
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
          )}
          <div
            className="Inputs"
            style={{
              overflow: "hidden",
            }}>
            {action === "Register" ? (
              <div></div>
            ) : (
              action !== "Forgot" && (
                <div
                  className={`${
                    styles.forgot_password
                  } ${"animate__animated animate__slideInLeft"}`}
                  onClick={() => {
                    setAction("Forgot");
                  }}>
                  Forgot password?
                </div>
              )
            )}
            {action === "Forgot" && (
              <button
                type="submit"
                className={`${styles.submit}`}
                style={{
                  marginLeft: "15px",
                  marginTop: "10px",
                }}
                onClick={(e) => {
                  handleForgotPassword(e);
                }}>
                Submit
              </button>
            )}
          </div>
          <div
            className={`${
              styles.submit_container
            } ${"animate__animated animate__slideInUp"}`}>
            <button
              type="submit"
              className={
                action === "Login"
                  ? `${styles.submit} && ${styles.gray}`
                  : `${styles.submit}`
              }
              onClick={(e) => {
                action === "Register" ? handleSubmit(e) : setAction("Register");
              }}>
              Register
            </button>
            <button
              type="submit"
              className={
                action === "Register"
                  ? `${styles.submit} &&  ${styles.gray}`
                  : `${styles.submit}`
              }
              onClick={(e) => {
                action === "Login" ? handleSubmit(e) : setAction("Login");
              }}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donate;
