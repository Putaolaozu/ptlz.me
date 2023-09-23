import { ReactNode } from "react";

const HeadingLink = ({ children }: { children: ReactNode }) => {
  return (
    <a href={`#${children?.toString()}` || ""} className="p-1 opacity-80 hover:opacity-100">
      {children}
    </a>
  );
};

export default HeadingLink;
