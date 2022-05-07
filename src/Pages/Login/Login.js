import React, { useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, error1] = useSendPasswordResetEmail(auth);

  let errorElement;

  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("send your email");
    } else {
      alert("please provide your email");
    }
  };

  const formSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);

    if (error || error1) {
      errorElement = (
        <p className="text-danger">
          error:{error?.message} {error1?.message}
        </p>
      );
    }

    if (user) {
      navigate(from, { replace: true });
    }
  };
  return (
    <div className="form-container">
      <h1 className="text-center text-primary">Please Login</h1>
      <form onSubmit={formSubmit}>
        <input
          type="email"
          name="email"
          id=""
          required
          placeholder="email"
          onBlur={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          name="password"
          id=""
          required
          placeholder="password"
          onBlur={(event) => setPassword(event.target.value)}
        />
        <input type="submit" value="Login" />
      </form>
      {errorElement}
      <p>
        Inventory service ?{" "}
        <Link
          to="/register"
          className="text-primary pe-auto text-decoration-none "
        >
          Register
        </Link>
      </p>
      <p>
        forget password?{" "}
        <button
          onClick={resetPassword}
          className="text-primary pe-auto text-decoration-none border-0"
        >
          Reset password
        </button>
      </p>
      <Toaster position="top-right" reverseOrder={false} />
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
