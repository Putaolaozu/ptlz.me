"use client";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Heading from "../HeadingLink";
import hljs from "@/highlight.min";
import remarkGfm from "remark-gfm";

const Article = ({ markdown }: { markdown: string }) => {
  // Highlight JS, highlighting the code in <pre><code></code></pre>
  useEffect(() => {
    hljs.highlightAll();
  }, [markdown]);

  useEffect(() => {
    const h2List = document.querySelectorAll(".article h2");
    h2List.forEach((h2) => {
      const text = h2.innerHTML;
      h2.setAttribute("id", text);
    });
  }, [markdown]);
  return (
    <>
      <div className="sticky -top-1 sm:h-16 h-11 w-full z-10 bg-inherit"></div>
      <main className="max-w-[1100px] mx-auto mb-4">
        <div className="flex justify-center flex-row-reverse items-start flex-wrap w-full mx-auto px-8">
          <aside className="article-aside">
            <h2 className="text-lg font-medium">主要内容</h2>
            <ReactMarkdown components={{ h2: Heading }} allowedElements={["h2"]} className="flex flex-col gap-4 mt-3">
              {markdown}
            </ReactMarkdown>
          </aside>
          <article className="sm:basis-[736px] w-full article">
            <ReactMarkdown disallowedElements={["h1"]} remarkPlugins={[remarkGfm]}>
              {markdown}
            </ReactMarkdown>
          </article>
        </div>
      </main>
    </>
  );
};

export default Article;
