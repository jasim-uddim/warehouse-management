import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const WorkerService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <section id="service">
        <h1 className="text-center text-primary my-3">Our worker service</h1>
        <div className="row">
          {services.slice(6, 9).map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </section>
      <section id="online">
        <h1 className="text-center text-primary my-3">Our online service</h1>
        <div className="row">
          {services.slice(9, 12).map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WorkerService;
