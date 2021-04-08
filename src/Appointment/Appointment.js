import React from "react";
import ArrowRight from "../Components/arrow-right";
import Calender from "../Components/calender";
import Clock from "../Components/clock";
import Location from "../Components/location";
import "./appointment.css";

let size = 17;

const Appointment = () => {
  return (
    <div className="wrapper">
      <div className="header">

        <div className="header_text ">Moon 263-2</div>
        <ArrowRight width={size} height={size} />

      </div>

      <div className="body">
        <div className="body_item">
          <Calender width={size} height={size} />
          <div className="margin-spacer-right" />

          <div className="body_text"> April 4, 2019</div>
        </div>

        <div className="body_item">
          <Clock width={size} height={size} />
          <div className="margin-spacer-right" />

          <div className="body_text"> 6:00 am - 6:30 am</div>
        </div>

        <div className="body_item">
          <Location width={size} height={size} color="#ff2f00" />
          <div className="margin-spacer-right" />

          <div className="body_text   colored"> Capilla St 103</div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
