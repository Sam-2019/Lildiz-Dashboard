import React from "react";
import "./appointment.css";

const Appointment = () => {
  return (
    <div className="appointment_wrapper">
      <div className="appointment_header">
        <div className="appointment_name ">Name</div>

        <div className="appointment_chevonRight">Icon</div>
      </div>

      <div className="appointment_body">
        <div className="appointment_item">Name</div>

        <div className="appointment_item">Icon</div>

        <div className="appointment_item">Icon</div>
      </div>
    </div>
  );
};

export default Appointment;
