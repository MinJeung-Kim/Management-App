import React, { memo } from "react";
import styles from "./footer.module.css";

const Footer = memo(() => (
  <footer className={styles.footer}>
    <p className={styles.title}>
      © 2022, made with 🧡by{" "}
      <a href="https://github.com/MinJeung-Kim/Management-App" target="_blank">
        KimMinJeung
      </a>
      &nbsp;for a better web.
    </p>
  </footer>
));

export default Footer;
