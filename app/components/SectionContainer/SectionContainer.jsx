import React from "react";
import styles from "@/app/components/SectionContainer/SectionContainer.module.scss";

const SectionContainer = ({ title, children }) => {
  return (
    <section className={styles.sectionContainer}>
      <h3>{title}</h3>
      <h4>In this section</h4>
      {children}
    </section>
  );
};

export default SectionContainer;
