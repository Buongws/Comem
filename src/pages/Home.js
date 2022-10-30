import React from "react";
import {
  Contact,
  FeaturedProducts,
  Service,
  ShipCod,
  Sliders,
  HomeResource,
} from "../components/HomePage/indexHomePage";
const Home = () => {
  return (
    <main>
      <Sliders />
      <ShipCod />
      <FeaturedProducts />
      <Service />
      <HomeResource />
      <Contact />
    </main>
  );
};

export default Home;
