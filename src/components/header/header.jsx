import React, { memo } from "react";
import styles from "./header.module.css";

const Header = memo(({ onLogout, menu }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.path}>
        <ol className={styles.box}>
          <li className={styles.first}>Home</li>
          <li className={styles.second}>{menu}</li>
        </ol>
        <h6 className={styles.pathtitle}>{menu}</h6>
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
  );
});

export default Header;
