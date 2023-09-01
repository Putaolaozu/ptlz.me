import Article from "@/components/ArticleComponents/Article";
import Header from "@/components/Header";

const page = () => {
  return import("@/articles/how_to_start/how_to_start.md").then((res) => {
    return (
      <>
        <Header markdown={res.default}></Header>
        <Article markdown={res.default} />
      </>
    );
  });
};

export default page;
