import React from "react";
import "./Layout.scss";
import Navbar from "../navbar/Navbar";

const Layout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="app-wrapper">
      <div className="top-background" />
      <div className="content">
        {children}
        <Navbar />
      </div>
    </div>
  );
};

export default Layout;
