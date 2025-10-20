import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.date} href="/">
        {new Date().getFullYear()} Copyright
      </span>
      <a
        className={styles.link}
        href="https://t.me/efremovid"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://t.me/efremovid
      </a>
    </footer>
  );
};
export default Footer;
