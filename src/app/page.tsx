import ArticleCard from "@/components/ArticleCard";
import articlesInfo from "@/articles/articlesInfo.json";

export default function Home() {
  return (
    <>
      <section className="flex flex-col gap-4 justify-center max-w-[1100px] mx-auto">
        {articlesInfo.map((articleInfo) => {
          return <ArticleCard article={articleInfo}></ArticleCard>;
        })}
      </section>
    </>
  );
}
