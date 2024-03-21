import React from "react";
import Styles from "./Register.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Register = () => {
  return (
    <>
      <form action="" method="post" className={Styles.register}>
        <div className="row justify-content-start form-row">
          <h3>
            Register Form
            <hr
              style={{
                borderTop: "5px dotted darkviolet",
              }}
            />
          </h3>
          <div className="form-group col-md-6">
            <label for="first_name">
              First Name<sup>*</sup>
            </label>
            <input
              type="text"
              className="form-control"
              name="first_name"
              id="first_name"
              placeholder="Enter first name"
              value=""
            />
            <p className="error-message"></p>
          </div>
          <div className="form-group col-md-6">
            <label for="last_name">
              Last Name<sup>*</sup>
            </label>
            <input
              type="text"
              className="form-control"
              name="last_name"
              id="last_name"
              placeholder="Enter last name"
              value=""
            />
            <p className="error-message"></p>
          </div>
          <div className="form-group col-md-6">
            <label for="email">
              Email<sup>*</sup>
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Enter email"
              value=""
            />
            <p className="error-message"></p>
          </div>

          <div className="form-group col-md-6">
            <label for="phone_no">
              Phone No<sup>*</sup>
            </label>
            <input
              type="number"
              className="form-control"
              name="phone_no"
              id="phone_no"
              placeholder="Enter phone number"
              value=""
            />
            <p className="error-message"></p>
          </div>
          <div className="form-group col-md-6">
            <label for="username">
              Username<sup>*</sup>
            </label>
            <input
              type="text"
              className="form-control"
              name="username"
              id="username"
              placeholder="Enter username"
              value=""
            />
            <p className="error-message"></p>
          </div>
          <div className="form-group col-md-6">
            <label for="password">
              Password<sup>*</sup>
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              placeholder="Enter password"
              value=""
            />
            <p className="error-message"></p>
          </div>
        </div>
        <div className="form-group">
          <label for="address">
            Address<sup>*</sup>
          </label>
          <input
            type="text"
            className="form-control"
            name="address"
            id="address"
            placeholder="Address"
            value=""
          />
          <p className="error-message"></p>
        </div>

        <span>
          <div className={Styles.button_style}>
            <div className="form-button">
              <button
                style={{backgroundColor: "blueviolet"}}
                type="submit"
                className="btn btn-success mb-2 ">
                <b>Create an account</b>
              </button>
              <div className={Styles.option}>
                <a href="/Donate">
                  <p
                    style={{
                      textAlign: "right",
                      color: "blueviolet",
                      fontWeight: "bold",
                      marginTop: "-35px",
                      marginRight: "15px",
                    }}>
                    or Login
                  </p>
                </a>
              </div>
            </div>
          </div>
        </span>
      </form>
    </>
  );
};

export default Register;
