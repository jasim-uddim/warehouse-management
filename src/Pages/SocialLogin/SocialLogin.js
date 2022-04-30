import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import google from "../../banner/google (1).png";
import Loading from "../Loading/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const handleSignInWithGoogle = () => {
    signInWithGoogle();
  };

  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
    );
  }
  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate("/");
  }
  return (
    <div>
      <div className="d-flex d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="px-2 mt-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50 "></div>
      </div>
      {errorElement}
      <Link className="d-block text-center my-3 " to="/home">
        <button
          onClick={handleSignInWithGoogle}
          className="bg-info p-2 w-50 text-center border-0 rounded"
        >
          <img src={google} alt="" />
          <span className="ps-2">Google</span>
        </button>
      </Link>
      <Link className="d-block text-center my-2 " to="/home"></Link>
    </div>
  );
};

export default SocialLogin;
