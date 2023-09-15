import Article from "@/components/ArticleComponents/Article";
import Header from "@/components/Header";

const Lession = ({ params }: { params: { lesson: string } }) => {
  const tags = [
    { name: "首页", url: "/" },
    { name: "教程", url: "/tutorials" },
    { name: "html", url: `/tutorials/${params.lesson}` },
  ];
  return import(`@/articles/learn_html/${params.lesson}.md`).then((res) => {
    return (
      <>
        <Header markdown={res.default} tags={tags}></Header>
        <Article markdown={res.default} />
      </>
    );
  });
};

export default Lession;
