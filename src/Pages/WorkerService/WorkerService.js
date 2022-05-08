import React, { useEffect, useState } from "react";
import ExtraPage from "../ExtraPage/ExtraPage";

const WorkerService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://limitless-taiga-20909.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <section id="service">
        <h1 className="text-center text-primary my-3">Our worker service</h1>
        <div className="row">
          {services.slice(6, 9).map((service) => (
            <ExtraPage key={service._id} service={service}></ExtraPage>
          ))}
        </div>
      </section>
      <section id="online">
        <h1 className="text-center text-primary my-3">Our online service</h1>
        <div className="row">
          {services.slice(9, 12).map((service) => (
            <ExtraPage key={service._id} service={service}></ExtraPage>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WorkerService;
