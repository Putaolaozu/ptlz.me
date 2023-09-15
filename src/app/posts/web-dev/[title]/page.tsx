import Article from "@/components/ArticleComponents/Article";
import Header from "@/components/Header";

const page = ({ params }: { params: { title: string } }) => {
  return import(`@/articles/web_dev/${params.title}.md`).then((res) => {
    return (
      <>
        <Header markdown={res.default}></Header>
        <Article markdown={res.default} />
      </>
    );
  });
};

export default page;
