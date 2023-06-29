import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <h1>Contact Us</h1>
      <div className="ContactUs">
        <div className="left-section">
          <div className="first-left">
            <h2>Corporate Office</h2>
            <p>
              A-821, TTC Industrial Area, Mahape, Navi Mumbai - 400710
              Maharashtra, India
            </p>
            <p>
              Phone: +91 22 3371-4300 Toll free: 1800 120 1447 Email:
              info@diasys.in
            </p>
          </div>
          <div className="second-left">
            <h2>Regional Office</h2>
            <p>
              DiaSys Diagnostics India Pvt Ltd, Diagnostics Division, 229, FIE,
              Patparganj Industrial Area, New Delhi - 110092,India
            </p>
            <p>Phone : 011-43010416</p>
            <p>
              DiaSys Diagnostics India Pvt Ltd, Gate No. 18, Agarpara Jute Mills
              Ltd., 88F, B.T. Road, Ground Floor, Kamarhati, Kolkata – 700058,
              India
            </p>
            <p>Phone : +91 9330007065</p>
          </div>
        </div>
        <div className="contact-form">
          <h2>
            Have a question about a product, our company, or just want to chat?
            Email us!
          </h2>
          <p>
            We will be glad to assist you with any questions and encourage you
            to share your ideas and improvements with us.
          </p>
          <div className="form-group">
            <div className="form">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4"></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
