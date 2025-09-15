// src/pages/Contact.js
import React from "react";

function Contact() {
  return (
    <div className="page contact">
      <h2>Contact Us 📬</h2>
      <p>
        Have questions, ideas, or want to collaborate with Eco Play Studios?  
        We’d love to hear from you!
      </p>

      <form className="contact-form">
        <label>
          Name:
          <input type="text" placeholder="Your name" />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Your email" />
        </label>
        <label>
          Message:
          <textarea placeholder="Write your message here..." />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
