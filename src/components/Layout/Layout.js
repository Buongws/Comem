import React from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Routers from "../../routers/Routers";
import Sidebar from "../Header/Sidebar";
import PageHero from "../Hero/PageHero";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Layout = () => {
  return (
    <>
      <ToastContainer />
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
