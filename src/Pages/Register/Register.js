import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [createUserWithEmailAndPassword, user, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  let from = location.state?.from?.pathname || "/";

  let errorElement;

  const formSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
    navigate("/home");

    if (error) {
      errorElement = <p className="text-danger">error:{error?.message}</p>;
    }

    if (user) {
      navigate(from, { replace: true });
    }
  };
  return (
    <div className="form-container">
      <h1 className="text-center text-primary">Please Register</h1>
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
        <input type="submit" value="Register" />
      </form>
      {errorElement}
      <p>
        Already have an account ?{" "}
        <Link
          to="/login"
          className="text-primary pe-auto text-decoration-none "
        >
          Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
