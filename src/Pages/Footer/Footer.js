import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div>
      <h1 className="text-center mt-5">copyright@ {year}</h1>
    </div>
  );
};

export default Footer;
