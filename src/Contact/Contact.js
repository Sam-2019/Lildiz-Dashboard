import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact_wrapper">
      <div className="contact_header">
        <div className="contact_header_image">Pic</div>

        <div className="contact_header_profile">
          <div className="contact_header_profile_name">Kate Lariscy Branch</div>

          <div className="contact_header_profile_company">Meteor Inc.</div>
        </div>
      </div>

      <div className="contact_body">
        <div className="contact_body_item">919/475-3202</div>
        <div className="contact_body_item">kaye.branch@meteor.com</div>

        <div className="contact_body_button">Open Profile</div>
      </div>
    </div>
  );
};

export default Contact;
