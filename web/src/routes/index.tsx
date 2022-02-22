import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart";

import Dashboard from "../pages/Dashboard";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/cart" element={<Cart />} />
  </Routes>
);

export default AppRoutes;
