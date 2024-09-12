"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <button onClick={() => router.back()}>
      {pathname === "/section-1"
        ? "Back to home"
        : "Previous section"}
    </button>
  );
};

export default BackButton;
