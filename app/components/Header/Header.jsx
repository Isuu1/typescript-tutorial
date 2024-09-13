import React from "react";
import styles from "@/app/components/Header/Header.module.scss";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          className={styles.header__logo}
          src="/images/typescript-icon.svg"
          fill
          alt=""
        />
      </Link>
      <h1>Typescript Tutorial for newbies by Jakub B.</h1>
    </header>
  );
};

export default Header;
