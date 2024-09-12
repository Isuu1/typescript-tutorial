"use client";

import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/section-1")}>
      Next section
    </button>
  );
};

export default BackButton;
