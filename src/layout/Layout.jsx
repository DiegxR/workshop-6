import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";

function Layout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Layout;
