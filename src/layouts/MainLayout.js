import React from "react";
import MainNavBar from "./MainNavBar";
import MainBody from "./MainBody";
import { BrowserRouter as Router } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Router>
        <div>
          <MainNavBar />
          <MainBody />
        </div>
      </Router>
    </>
  );
}
