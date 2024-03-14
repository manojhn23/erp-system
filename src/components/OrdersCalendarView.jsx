import React, { useState } from "react";
import Calendar from "react-calendar";
import Modal from "react-modal";
import initialOrders from "./orderData";
import "./OrdersCalendarView.css";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

function OrdersCalendarView() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const ordersOnSelectedDate = initialOrders.filter(
      (order) =>
        new Date(order.orderDate).toDateString() === date.toDateString()
    );
    setSelectedOrders(ordersOnSelectedDate);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="container">
      <h2>
        Calendar <CalendarMonthOutlinedIcon />
      </h2>
      <div className="calendar-container">
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Orders Calendar Modal"
        className="modal"
      >
        <h3>Orders on {selectedDate.toDateString()}</h3>
        <div>
          {selectedOrders.map((order) => (
            <div key={order.id}>
              <p>Order ID: {order.id}</p>
              <p>Customer Name: {order.customerName}</p>
              <p>Status: {order.status}</p>
              <hr />
            </div>
          ))}
        </div>
        <button onClick={handleModalClose}>Close</button>
      </Modal>
    </div>
  );
}

export default OrdersCalendarView;
