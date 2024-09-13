"use client";

import { useRouter } from "next/navigation";
import React from "react";

//Icons
import { FaArrowRight } from "react-icons/fa6";

const BackButton = ({ sectionId }) => {
  //Use router to change URL for next section on button click
  const router = useRouter();

  return (
    <button
      className="flex-center"
      onClick={() => router.push(`/section-${sectionId}`)}
    >
      Next section
      <FaArrowRight />
    </button>
  );
};

export default BackButton;
