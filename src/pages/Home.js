import React from "react";
import {
  Contact,
  FeaturedProducts,
  Service,
  ShipCod,
  Sliders,
} from "../components/HomePage/indexHomePage";
const Home = () => {
  return (
    <main>
      <Sliders />
      <ShipCod />
      <FeaturedProducts />
      <Service />
      <Contact />
    </main>
  );
};

export default Home;
