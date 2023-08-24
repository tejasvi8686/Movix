import React from "react";
import "./style.scss";

import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending.jsx/Trending";

HeroBanner;

const Home = () => {
  return (
    <div className="homepage">
      <HeroBanner />
      <Trending />
    </div>
  );
};

export default Home;
