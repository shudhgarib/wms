import React, {useState, useEffect} from "react";
import styles from "./Donate.module.css";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export const Donate = ({login}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [action, setAction] = useState("Login");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const {data} = await axios.post("http://localhost:8081/api/login", {
        email: email,
        password: password,
      });
      if (data) {
        localStorage.setItem("token", data.token);
        navigate(`/welcome`);
      }
    } catch (error) {
      alert("user or password is wrong.");
      console.error(error);
    }
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  // make states for maintaining value of each input tag
  const [username, setUsername] = useState("");
  const [fName, setFName] = useState("");
  const [Address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // Error state for each field
  const [usernameError, setUsernameError] = useState("");
  const [fNameError, setFNameError] = useState("");
  const [AddressError, setAddressError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      alert("You are already logged in");
      window.location.href = "/welcome";
    }
  }, []);

  // make a function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form before submission
    if (validateForm()) {
      // make a fetch request to the server
      fetch("http://localhost:8081/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          fName,
          Address,
          email,
          phone,
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
          } else {
            if (data.msg === "the user has been registered with us!") {
              setAction("Login");
              alert("User Registered Successfully, Please Login");
              setEmail("");
              setPassword("");
            }
            // show an error message
            alert(data.msg);
          }
        });
    }
  };

  // Validation function for all fields
  const validateForm = () => {
    let isValid = true;

    // Common validation for all fields (trimming whitespace and checking empty values)
    //username validation code start
    if (username.trim() === "") {
      setUsernameError("Username is required");
      isValid = false;
    } else if (username.trim().length < 3) {
      setUsernameError("Username must be at least 3 characters long");
      isValid = false;
    } else if (!/^[a-zA-Z0-9_]+$/.test(username.trim())) {
      setUsernameError(
        "Username can only contain letters, numbers, and underscores"
      );
      isValid = false;
    } else {
      setUsernameError("");
    }
    //username validation code end
    //first name validation code start
    if (fName.trim() === "") {
      setFNameError("Full Name is required");
      isValid = false;
    } else if (fName.trim().length < 2) {
      setFNameError("Full Name must be at least 2 characters long");
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(fName.trim())) {
      setFNameError(
        "Full Name must contain only alphabetic characters and spaces"
      );
      isValid = false;
    } else if (fName.trim().split(" ").length - 1 >= 3) {
      setFNameError("Full Name must contain less than 2 spaces");
      isValid = false;
    } else {
      setFNameError("");
    }

    //first name validation code end
    //last name validation code start
    if (Address.trim() === "") {
      setAddressError("Address is required");
      isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(Address.trim())) {
      setAddressError("Address must contain only alphabetic characters");
      isValid = false;
    } else if (Address.trim().length < 2) {
      setAddressError("Address must be at least 2 characters long");
      isValid = false;
    } else {
      setAddressError("");
    }

    //last name validation code end
    //email validation code start

    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    } else {
      setEmailError("");
    }

    //email validation code end
    //phone validation code start
    if (phone.trim() === "") {
      setPhoneError("Phone number is required");
      isValid = false;
    } else if (!/^\d{10}$/.test(phone.trim())) {
      setPhoneError(
        "Invalid phone number format. It should be 10 digits without spaces or special characters."
      );
      isValid = false;
    } else if (!/^[6-9]\d{9}$/.test(phone.trim())) {
      setPhoneError("Phone number should start with 6, 7, 8, or 9.");
      isValid = false;
    } else {
      setPhoneError("");
    }
    //phone validation code end
    //password validation code start
    if (password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      isValid = false;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)) {
      setPasswordError(
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      );
    } else {
      setPasswordError("");
    }
    //password validation code end

    return isValid;
  };

  // Email format validation
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Phone format validation
  const validatePhone = (phone) => {
    const re = /^\d{10}$/;
    return re.test(phone);
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
          {/*Heading code start */}
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
          {/*Heading code end */}
          {/*start registration code */}
          {/* Username input */}
          {action === "Register" && (
            <div className="Inputs">
              <div className={styles.input_box}>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  id="username"
                  placeholder="user name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <div className={styles.error}>{usernameError}</div>
              </div>
            </div>
          )}
          {/* Full Name input */}
          <div className="Inputs">
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
                  placeholder="Enter Full Name"
                  value={fName}
                  onChange={(e) => setFName(e.target.value)}
                />
                <div className={styles.error}>{fNameError}</div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          {/* Address input */}
          <div className="Inputs">
            {action === "Register" ? (
              <div className={styles.input_box}>
                <input
                  type="text"
                  name="Address"
                  className="form-control"
                  id="Address"
                  placeholder="Enter Your Address"
                  value={Address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <div className={styles.error}>{AddressError}</div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          {/* Email input */}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className={styles.error}>{emailError}</div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          {/* Phone input */}
          <div className="Inputs">
            {action === "Register" ? (
              <div className={styles.input_box}>
                <input
                  type="tel"
                  name="Phone"
                  className="form-control"
                  id="Phone"
                  placeholder="Enter Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <div className={styles.error}>{phoneError}</div>
              </div>
            ) : (
              <div></div>
            )}
          </div>{" "}
          {/*end registration code */}
          {/*start forgot code */}
          {/* Forgot input */}
          <div className="Inputs">
            {action === "Forgot" ? (
              <div className={styles.input_box}>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Registered Email..."
                  value={email}
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
                  value={password}
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
              <div className={styles.error}>{passwordError}</div>
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
                action === "Login" ? handleLogin(e) : setAction("Login");
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
