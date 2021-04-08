import React from "react";
import Phone from "../Components/phone";
import At from "../Components/at";
import "./contact.css";

let size = 17;

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="contact_header">

        <div className="contact_header_image">
  
     
          <img
            src="https://ubuntufest.org/wp-content/uploads/2017/12/500x500-Profile-Image-Ubuntu-Fest-2018-Mark-Amaru-Pinkham.jpg"
            alt="user"
            className="user_image"
          />
        </div>

        <div className="margin-spacer-right" />

        <div className="contact_header_profile">
          <div className="contact_header_profile_name">Kate Lariscy Branch</div>

          <div className="contact_header_profile_company">Meteor Inc.</div>
        </div>
      </div>

      <div className="body">
        <div className="body_item colored">
          <Phone width={size} height={size} color="#ff2f00" />

          <div className="margin-spacer-right" />

          <div className="body_text">919/475-3202</div>
        </div>

        <div className="body_item colored">
          <At width={size} height={size} color="#ff2f00" />

          <div className="margin-spacer-right" />

          <div className="body_text ">kaye.branch@meteor.com</div>
        </div>

        <div className="margin-spacer-bottom" />

        <div className="body_button">Open Profile</div>
      </div>
    </div>
  );
};

export default Contact;
