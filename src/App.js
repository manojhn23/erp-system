import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Orders from "./components/Orders";
import OrdersCalendarView from "./components/OrdersCalendarView";
import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

function App() {
  return (
    <Router>
      <div>
        <ResponsiveAppBar />
      </div>
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/calendar" element={<OrdersCalendarView />} />
      </Routes>
    </Router>
  );
}

export default App;
