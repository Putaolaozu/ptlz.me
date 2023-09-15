import Article from "@/components/ArticleComponents/Article";
import Header from "@/components/Header";

const page = () => {
  const tags = [
    { name: "首页", url: "/" },
    { name: "教程", url: "/tutorials" },
    { name: "初来乍到", url: "/tutorials/html" },
  ];
  return import("@/articles/how_to_start/how_to_start.md").then((res) => {
    return (
      <>
        <Header markdown={res.default} tags={tags}></Header>
        <Article markdown={res.default} />
      </>
    );
  });
};

export default page;
