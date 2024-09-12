import React from "react";
import styles from "@/app/components/Header/Header.module.scss";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        className={styles.header__logo}
        src="/images/typescript-icon.svg"
        fill
        alt=""
      />
      <h1>Typescript Tutorial for newbies by Jakub B.</h1>
    </header>
  );
};

export default Header;
