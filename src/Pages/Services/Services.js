import React from "react";
import { useState, useEffect } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  console.log(services);
  useEffect(() => {
    fetch("serviceData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="service">
      <h1 className="text-center text-primary">this is services pages</h1>
      <div className="row">
        {services.map((service) => (
          <Service service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
