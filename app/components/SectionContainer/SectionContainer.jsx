"use client";

import React, { useState } from "react";
import styles from "@/app/components/SectionContainer/SectionContainer.module.scss";
import Link from "next/link";

const SectionContainer = ({ title, sectionId, children }) => {
  const [isSectionCompleted, setIsSectionCompleted] = useState(false);

  return (
    <section className={styles.sectionContainer}>
      {isSectionCompleted && (
        <div className={styles.sectionCompletedOverlay}>
          <h2>You completed this section</h2>
        </div>
      )}
      <div>
        <Link href={`/section-${sectionId}`}>
          <h3 className={styles.sectionContainer__title}>{title}</h3>
          <h4>In this section</h4>
          {children}
        </Link>
      </div>
      <button
        className={styles.sectionContainer__button}
        onClick={() => setIsSectionCompleted(!isSectionCompleted)}
      >
        {isSectionCompleted
          ? "Mark as not completed"
          : "Mark as completed"}
      </button>
    </section>
  );
};

export default SectionContainer;
