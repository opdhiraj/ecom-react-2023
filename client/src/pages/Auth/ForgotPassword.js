import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./../../styles/authStyles.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  //form function

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(name, email, password, phone, address);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
        { email, newPassword, answer }
      );
      console.log("login api line 25 res= ", res);
      if (res && res.data.success) {
        console.log(res.data.success);
        console.log("nagagated to login");
        alert("if con " + res.data.message);
        navigate("/login");
      } else {
        alert("else error", res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert(" Something went wromg");
    }
  };
  return (
    <Layout title={"Forgot Password -Ecommerce App"}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1 className="title">Reset Password</h1>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputAnswer"
              placeholder="Enter your Favourite  sport name"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your Password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Reset
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
