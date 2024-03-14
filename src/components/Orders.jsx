import React, { useState } from "react";
import Modal from "react-modal";
import initialOrders from "./orderData";
import "./Orders.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const statusOptions = ["Pending", "Shipped", "Delivered"];

function Orders() {
  const [orders, setOrders] = useState(initialOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isViewModalOpen, setViewModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleDeleteOrder = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== orderId)
    );
  };

  const handleViewOrder = (orderId) => {
    const order = orders.find((o) => o.id === orderId);
    setSelectedOrder(order);
    setViewModalOpen(true);
  };

  const handleEditOrder = (orderId) => {
    const order = orders.find((o) => o.id === orderId);
    setSelectedOrder(order);
    setEditModalOpen(true);
  };

  const handleUpdateStatus = (newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === selectedOrder.id ? { ...order, status: newStatus } : order
      )
    );
    setEditModalOpen(false);
  };

  const handleCancelEdit = () => {
    setEditModalOpen(false);
  };

  return (
    <div className="container">
      <h2>
        Orders Management <ShoppingCartOutlinedIcon />
      </h2>

      <Modal
        isOpen={isViewModalOpen}
        onRequestClose={() => setViewModalOpen(false)}
        contentLabel="View Order Modal"
        className="modal"
      >
        <h3>Order Details</h3>
        {selectedOrder && (
          <div>
            <p>Order ID: {selectedOrder.id}</p>
            <p>Customer Name: {selectedOrder.customerName}</p>
            <p>Order Date: {selectedOrder.orderDate}</p>
            <p>Status: {selectedOrder.status}</p>
          </div>
        )}
        <button onClick={() => setViewModalOpen(false)}>Close</button>
      </Modal>
      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={() => setEditModalOpen(false)}
        contentLabel="Edit Order Modal"
        className="modal"
      >
        <h3>Edit Order</h3>
        {selectedOrder && (
          <div>
            <p>Order ID: {selectedOrder.id}</p>
            <p>Customer Name: {selectedOrder.customerName}</p>
            <p>Order Date: {selectedOrder.orderDate}</p>
            <label>Status:</label>
            <select
              value={selectedOrder.status}
              onChange={(e) => handleUpdateStatus(e.target.value)}
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className="form-buttons">
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      </Modal>

      <table>
        <thead>
          <tr>
            <th>
              Order ID <FormatListBulletedOutlinedIcon />
            </th>
            <th>
              Customer Name <PersonOutlineOutlinedIcon />
            </th>
            <th>
              Order Date <DateRangeOutlinedIcon />
            </th>
            <th>
              Status <HelpCenterOutlinedIcon />{" "}
            </th>
            <th>
              Action <EditNoteOutlinedIcon />
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>{order.status}</td>
              <td>
                <button
                  className="view-button"
                  onClick={() => handleViewOrder(order.id)}
                >
                  <VisibilityOutlinedIcon />
                </button>
                <button
                  className="edit-button"
                  onClick={() => handleEditOrder(order.id)}
                >
                  <ModeEditOutlineOutlinedIcon />
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteOrder(order.id)}
                >
                  <DeleteOutlinedIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
