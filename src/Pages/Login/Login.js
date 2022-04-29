import React from "react";
import "./Login.css";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(name, email, password);
  };
  return (
    <div>
      <h1 className="text-center text-primary">Please Login</h1>
      <form onSubmit={handleLogin}>
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
    </div>
  );
};

export default Login;
