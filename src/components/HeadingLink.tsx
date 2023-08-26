"use client";

import { ReactNode } from "react";

const HeadingLink = ({ children }: { children: ReactNode }) => {
  return (
    <a href={`#${children?.toString()}` || ""} className="opacity-80 hover:opacity-100 text-blue-900 dark:text-sky-100">
      {children}
    </a>
  );
};

export default HeadingLink;
