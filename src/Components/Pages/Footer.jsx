// Footer.js
import styles from "./Footer.module.css";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        {/* left elements */}
        <div class={styles.left}>
          <p style={{textAlign: "left"}}>
            <strong>Quick Links</strong>
            <br />
            <a href="#">Home</a>
            <br />
            <a href="#">Donation</a>
            <br />
            <a href="#">Reservation</a>
            <br />
            <a href="#">Contact Us</a>
          </p>
        </div>

        {/* center elements */}

        <div class={styles.center}>
          <p className={styles.centered_paragraph}>
            © 2024 biharipoojapath.com. All Rights Reserved. <br />
            Designed by Mr. Rajan Patel. <br />
            <a href="/cancellation">Cancellation and Refund</a> <br />
            <a href="/shipping">Shipping and Delivery</a> <br />
            <a href="/terms">Terms & Conditions</a> <br />
            <a href="/privacy">Privacy & Policy</a>
          </p>
        </div>
        {/* right elements */}
        <div class={styles.right}>
          <strong>Quick Links</strong>
          <br />
          <a href="#">WhatsApp</a>
          <br />
          <a href="#">InstaGram</a>
          <br />
          <a href="#">FaceBook</a>
          <br />
          <a href="#">Twitter</a>
        </div>

        <p className={styles.footer_wrap}>
          We are a worship website that provides donation and reservation
          services for devotees.
          <br /> We aim to make your worship experience easy and convenient.
        </p>
      </footer>
    </>
  );
};

export default Footer;
