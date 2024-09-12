import React from "react";
import styles from "@/app/components/SectionContainer/SectionContainer.module.scss";
import Link from "next/link";

const SectionContainer = ({ title, section, children }) => {
  return (
    <section className={styles.sectionContainer}>
      <Link href={`/section-${section}`}>
        <h3 className={styles.sectionContainer__title}>{title}</h3>
        <h4>In this section</h4>
        {children}
      </Link>
      <button className={styles.sectionContainer__button}>
        Mark as completed
      </button>
      <input type="checkbox" />
    </section>
  );
};

export default SectionContainer;
