// Footer.js
import styles from "./Footer.module.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.main}>
      <div className={styles.footer_container}>
        <p className={styles.footer_heading_text}>About Us</p>
        <p>
          We are a worship website that provides donation and reservation
          services for devotees. We aim to make your worship experience easy and
          convenient.
        </p>
        <div className="footer_nav">
          <p className={styles.footer_heading_text}>Quick Links</p>
          <a href="/">Home</a>
          <span>|</span>
          <a href="/donation">Donation</a>
          <span>|</span>
          <a href="/reservation">Reservation</a>
          <span>|</span>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
      <div className="footer_social_links">
        <p className={styles.footer_heading_text}>Follow Us</p>
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-instagram"></a>
        <a href="#" class="fa fa-linkedin"></a>
        <a href="#" class="fa fa-youtube"></a>
        <a href="#" class="fa fa-pinterest"></a>
      </div>
      <div className="footer_info">
        <p>© {currentYear} biharipoojapath.com. All Rights Reserved.</p>
        <p>Designed by Mr. Rajan Patel.</p>
        <div className={styles.footer_wrap}>
          <a href="/cancellation">Cancellation and Refund</a> |{" "}
          <a href="/shipping">Shipping and Delivery</a> |{" "}
          <a href="/terms">Terms & Conditions</a> |{" "}
          <a href="/privacy">Privacy & Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
