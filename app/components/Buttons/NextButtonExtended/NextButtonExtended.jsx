"use client";

import { useRouter } from "next/navigation";
import React from "react";

import styles from "@/app/components/Buttons/NextButtonExtended/NextButtonExtended.module.scss";

//Icons
import { FaArrowRight } from "react-icons/fa6";

const NextButtonExtended = ({ sectionId, nextSectionTitle }) => {
  //Use router to change URL for next section on button click
  const router = useRouter();

  return (
    <button
      className={`flex-center ${styles.nextButtonExtended}`}
      onClick={() => router.push(`/section-${sectionId}`)}
    >
      <div className={styles.nextButtonExtended__nav}>
        Next section
        <FaArrowRight />
      </div>

      {nextSectionTitle}
    </button>
  );
};

export default NextButtonExtended;
