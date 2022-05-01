import React from "react";
import Banner from "../../Banner/Banner";
import Services from "../../Services/Services";
import WorkerService from "../../WorkerService/WorkerService";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <WorkerService></WorkerService>
    </div>
  );
};

export default Home;
