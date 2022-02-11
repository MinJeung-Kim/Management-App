import React, { memo } from "react";
import styles from "./header.module.css";

const Header = memo(({ onLogout }) => (
  <header className={styles.header}>
    <nav className={styles.path}>
      <ol className={styles.box}>
        <li className={styles.first}>Pages</li>
        <li className={styles.second}>Dashboard</li>
      </ol>
      <h6 className={styles.pathtitle}>Dashboard</h6>
    </nav>
    {onLogout && (
      <div className={styles.icons}>
        <p>
          <i className="fas fa-sign-out-alt" onClick={onLogout}></i>
          <span>Logout</span>
        </p>
        <i className="fas fa-cog"></i>
        <i className="fas fa-bell"></i>
      </div>
    )}
  </header>
));

export default Header;
