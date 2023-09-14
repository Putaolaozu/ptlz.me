import ArticleCard from "@/components/ArticleComponents/ArticleCard";
import articlesInfo from "@/articles/articlesInfo.json";

export default function Home() {
  return (
    <>
      <div className="sticky top-0 sm:h-16 h-12 w-full z-10 bg-inherit"></div>
      <section className="flex flex-col gap-4 justify-center max-w-[1100px] mx-auto px-2">
        {articlesInfo.map((articleInfo, index) => {
          return <ArticleCard article={articleInfo} key={index}></ArticleCard>;
        })}
      </section>
    </>
  );
}
