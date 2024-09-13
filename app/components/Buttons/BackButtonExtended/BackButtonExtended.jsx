"use client";

import { useRouter } from "next/navigation";
import React from "react";

import styles from "@/app/components/Buttons/BackButtonExtended/BackButtonExtended.module.scss";

//Icons
import { FaArrowLeft } from "react-icons/fa6";

const BackButtonExtended = ({ sectionId, previousSectionTitle }) => {
  //Use router to change URL for next section on button click
  const router = useRouter();

  return (
    <button
      className={`flex-center ${styles.backButtonExtended}`}
      onClick={() => router.push(`/section-${sectionId}`)}
    >
      <div className={styles.backButtonExtended__nav}>
        <FaArrowLeft />
        Previous section
      </div>

      {previousSectionTitle}
    </button>
  );
};

export default BackButtonExtended;
