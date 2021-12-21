import React, { useState } from "react";
import { FaUserShield } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { setUser } from "../authSlice/authSlice";
const RegisterPage = () => {
  const initialValues = { name: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormErrors(validate(formValues));
    registerRequest(formValues);
  }

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "name is required!";
    }
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

  async function registerRequest(formdata) {
    try {
      const { data } = await axios.post("/api/user/register", formdata);

      dispatch(setUser(data));
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="register-page">
      <Navbar />
      <div className="rigester-container">
        <h1>
          <FaUserShield /> Register
        </h1>
        <span>Join me and my friends on this great application</span>
        {/* //Form */}
        <form onSubmit={handleSubmit}>
          <div className="register-form">
            <input
              className="name"
              type="text"
              placeholder="Name"
              value={formValues.name}
              name="name"
              onChange={handleChange}
            />
            <p className="error">{formErrors.name}</p>
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
            <button type="submit">Register</button>
          </div>
        </form>
        <span>
          Already have an account?{" "}
          <Link to="/login">
            <span className="rgtr-lgn">Login</span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default RegisterPage;
