import Image from "next/image";
import Link from "next/link";
import React from "react";

type ArticleCardProps = {
  title: string;
  description: string;
  date: string;
  imgURL: string;
  words: number;
  readTime: number;
  postURL: string;
};

const ArticleCard = ({ article }: { article: ArticleCardProps }) => {
  return (
    <article className="rounded-lg overflow-hidden max-w-xl mx-auto my-4 shadow-md hover:shadow-md dark:hover:shadow-slate-600 transition-all border-2 border-slate-700">
      <Link href={article.postURL}>
        <div className="h-44 overflow-hidden">
          <Image src={article.imgURL} alt={article.title} width={576} height={100} className="object-cover" />
        </div>
        <div className="px-6">
          <hgroup className="my-4 px-2">
            <h1 className="text-xl font-bold mb-2">{article.title}</h1>
            <p className="font-light">{article.description}</p>
          </hgroup>
          <p className="flex justify-between items-center px-4 dark:text-slate-300 text-sm font-extralight mb-4">
            <time dateTime={article.date}>📅{article.date}</time>
            <span>
              ⏰共{article.words}字，约需花费{article.readTime}分钟阅读
            </span>
          </p>
        </div>
      </Link>
    </article>
  );
};

export default ArticleCard;
