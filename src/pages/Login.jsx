import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";

import { loginUser } from "../services/auth";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await loginUser(formData);

      login(response.user, response.access_token);

      alert("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      alert(error.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">

      <form
        className="login-form"
        onSubmit={handleSubmit}
      >

        <h1>Login</h1>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          disabled={loading}
        >
          <FaSignInAlt />

          {loading ? "Please Wait..." : "Login"}
        </button>

        <p>
          Don't have an account?{" "}
          <Link to="/register">
            Register Here
          </Link>
        </p>

      </form>

    </div>
  );
};

export default Login;