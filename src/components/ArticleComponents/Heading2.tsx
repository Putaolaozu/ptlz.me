import React, { ReactNode } from "react";

const Heading2 = ({ children }: { children: ReactNode }) => {
  return (
    <h2 id={`${children}`} className="heading2">
      <a href={`#${children}`}>{children}</a>
    </h2>
  );
};

export default Heading2;
