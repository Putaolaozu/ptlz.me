import articleInfo from "@/articles/articlesInfo.json";
import Link from "next/link";

const Posts = () => {
  return (
    <main className="max-w-[1100px] mx-auto sm:px-8 px-4">
      <section>
        <h2 className="heading2">瞎聊</h2>
      </section>
      <section>
        <h2 className="heading2">教程</h2>
        <ul className="content-list">
          {articleInfo.map((article) => {
            return (
              <li>
                <Link href={article.postURL}>{article.title}</Link>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default Posts;
