import React, { useState } from "react";
import { BiLogIn } from "react-icons/bi";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../authSlice/authSlice";

const LoginPage = () => {
  const initialValues = { email: "", password: "" };
  const [formValues, setformValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  function handleChange(e) {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
    // console.log([name], value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setFormErrors(validate(formValues));
    loginRequest(formValues);
  }

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };
  const dispatch = useDispatch(setUser);

  async function loginRequest(formdata) {
    const { data } = await axios.post("/api/user/login", formdata);
    console.log(data);
    dispatch(setUser(data));
  }

  return (
    <div>
      <div className="register-page">
        <Navbar />
        <div className="rigester-container">
          <h1>
            <BiLogIn /> Login
          </h1>
          <span>Login to this application</span>
          {/* //Form */}
          <form onSubmit={handleSubmit}>
            <div className="register-form">
              <input
                className="email"
                type="text"
                placeholder="Email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
              <p className="error">{formErrors.email}</p>
              <input
                className="password"
                type="password"
                placeholder="Password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />
              <p className="error">{formErrors.password}</p>
              <button type="submit">Login</button>
            </div>
          </form>
          <span>
            Don't have an account?{" "}
            <Link to="/register">
              <span className="lgn-rgtr">Register</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
