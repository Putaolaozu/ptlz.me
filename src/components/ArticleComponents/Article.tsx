"use client";

import ReactMarkdown from "react-markdown";
import Heading from "../HeadingLink";
import remarkGfm from "remark-gfm";
import Code from "./Code";
import Heading2 from "./Heading2";
import { useScroll } from "@/hooks/useScroll";

const Article = ({ markdown }: { markdown: string }) => {
  useScroll({
    linksSelector: ".article-aside a",
    headersSelector: ".article h2",
    className: "link-active",
  });

  return (
    <>
      <div className="sticky -top-1 sm:h-16 h-11 w-full z-10 bg-inherit"></div>
      <main className="max-w-[1100px] mx-auto mb-4">
        <div className="flex justify-center flex-row-reverse items-start flex-wrap w-full mx-auto px-8">
          <aside className="article-aside">
            <h2 className="text-lg font-medium">主要内容</h2>

            <ReactMarkdown
              components={{ h2: Heading }}
              allowedElements={["h2"]}
              className="flex flex-col mt-3 text-blue-900 dark:text-sky-100">
              {markdown}
            </ReactMarkdown>
          </aside>
          <article className="sm:basis-[736px] w-full article">
            <ReactMarkdown
              disallowedElements={["h1"]}
              components={{ pre: Code, h2: Heading2 }}
              remarkPlugins={[remarkGfm]}>
              {markdown}
            </ReactMarkdown>
          </article>
        </div>
      </main>
    </>
  );
};

export default Article;
