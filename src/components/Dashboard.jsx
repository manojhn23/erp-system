import React from "react";
import { Link } from "react-router-dom";
import initialOrders from "./orderData";
import initialProducts from "./productData";
import "./Dashboard.css";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import DoubleArrowOutlinedIcon from "@mui/icons-material/DoubleArrowOutlined";

function Dashboard() {
  const totalProducts = initialProducts.length;
  const totalOrders = initialOrders.length;

  return (
    <div className="dashboard-container">
      <h2>
        Dashboard <SpaceDashboardIcon />
      </h2>
      <div className="dashboard-summary wide">
        <div className="dashboard-metric">
          <h3>
            Total Products <Inventory2OutlinedIcon />
          </h3>
          <p>{totalProducts}</p>
          <Link to="/products">
            <button>
              <DoubleArrowOutlinedIcon />
            </button>
          </Link>
        </div>
        <div className="dashboard-metric">
          <h3>
            Total Orders <ShoppingCartOutlinedIcon />
          </h3>
          <p>{totalOrders}</p>
          <Link to="/orders">
            <button>
              <DoubleArrowOutlinedIcon />
            </button>
          </Link>
        </div>
        <div className="dashboard-metric">
          <h3>
            View Calender <CalendarMonthOutlinedIcon />
          </h3>
          <p>{totalOrders + totalProducts}</p>
          <Link to="/calendar">
            <button>
              <DoubleArrowOutlinedIcon />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
