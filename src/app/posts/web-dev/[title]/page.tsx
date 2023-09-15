import Article from "@/components/ArticleComponents/Article";
import Header from "@/components/Header";

const page = ({ params }: { params: { title: string } }) => {
  const tags = [
    { name: "首页", url: "/" },
    { name: "文章", url: "/posts" },
  ];
  return import(`@/articles/web_dev/${params.title}.md`).then((res) => {
    return (
      <>
        <Header markdown={res.default} tags={tags}></Header>
        <Article markdown={res.default} />
      </>
    );
  });
};

export default page;
