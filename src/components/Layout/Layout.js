import React from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Routers from "../../routers/Routers";
import Sidebar from "../Header/Sidebar";
import PageHero from "../Hero/PageHero";

const Layout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
