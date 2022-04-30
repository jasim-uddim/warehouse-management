import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let errorElement;

  const formSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);

    if (error) {
      errorElement = <p className="text-danger">error:{error?.message}</p>;
    }

    if (user) {
      navigate(from, { replace: true });
    }
  };
  return (
    <div>
      <h1 className="text-center text-primary">Please Login</h1>
      <form onSubmit={formSubmit}>
        <input type="text" name="name" id="" placeholder="name" />
        <input type="email" name="email" id="" required placeholder="email" />
        <input
          type="password"
          name="password"
          id=""
          required
          placeholder="password"
        />
        <input type="submit" value="Login" />
      </form>
      {errorElement}
    </div>
  );
};

export default Login;
