import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footers from "../Footer/Footer";
import Footer from "../Footer/Footer";

const Admin = () => {
  return (
    <div className="mx-auto px-6">
      <Header/>
      <div className="min-h-[calc(100vh-200px)]">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Admin;
