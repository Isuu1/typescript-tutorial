"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

//Icons
import { FaArrowLeft } from "react-icons/fa6";

const BackButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <button
      className="flex-center"
      onClick={() =>
        pathname === "/section-1" ? router.push("/") : router.back()
      }
    >
      <FaArrowLeft />
      {pathname === "/section-1"
        ? "Back to home"
        : "Previous section"}
    </button>
  );
};

export default BackButton;
