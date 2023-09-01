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
    <article className="article-card">
      <Link href={article.postURL}>
        <div className="h-24 sm:h-44 overflow-hidden">
          <Image src={article.imgURL} alt={article.title} width={576} height={100} className="object-cover" />
        </div>
        <div className="px-6">
          <hgroup className="my-4 px-2">
            <h1 className="sm:text-xl text-lg font-bold mb-2">{article.title}</h1>
            <p className="font-light text-sm sm:text-base">{article.description}</p>
          </hgroup>
          <p className="flex flex-col sm:flex-row sm:justify-between sm:items-center items-start gap-2 px-4 dark:text-slate-300 text-sm font-extralight pb-4">
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
