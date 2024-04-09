// Footer.jsx
import {Link} from "react-router-dom";
import React from "react";
import styles from "./Footer.module.css"; // Import CSS modules for styling

function Footer() {
  return (
    <footer
      className={styles.footer}
      style={{bottom: 0, fontFamily: "Poppins"}}>
      <div className={styles.footerContent}>
        <p>&copy; 2024 biharipoojapath.com. All Rights Reserved.</p>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <Link to="./Pages/About">About</Link>
            </li>
            <li>
              <Link to="./Pages/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
