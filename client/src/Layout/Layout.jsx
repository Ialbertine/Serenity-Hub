import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import PreFooter from "../Components/PreFooter";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <>
      <div className="">
        <Header />
        <Outlet />
        <div className="bg-[#043e35]">
        <PreFooter />
        <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
