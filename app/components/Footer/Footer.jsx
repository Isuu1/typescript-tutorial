import React from "react";
import styles from "@/app/components/Footer/Footer.module.scss";

//Icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.footer__copyright}>
        Jakub Babelek. All rights reserved. &copy;
      </p>
      <div className={styles.footer__socials}>
        Author socials
        <Link href="https://github.com/Isuu1">
          <FaGithub className={styles.footer__socials__icon} />
        </Link>
        <Link href="https://www.linkedin.com/in/jakub-babelek/">
          <FaLinkedin className={styles.footer__socials__icon} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
