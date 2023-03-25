import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Builder from "../components/Builder/Builder";
import Receipt from "../components/Receipt/Receipt";
import Layout from "../layout/Layout";

const RouterDom = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Builder />} />
          <Route path="/receipt" element={<Receipt />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterDom;
