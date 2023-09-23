"use client";
import hljs from "@/highlight.min";
import { ReactNode, useEffect } from "react";

const Code = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return <pre className="my-2">{children}</pre>;
};

export default Code;
