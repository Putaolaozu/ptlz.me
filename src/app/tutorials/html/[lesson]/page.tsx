import Article from "@/components/ArticleComponents/Article";
import Header from "@/components/Header";

const Lession = ({ params }: { params: { lesson: string } }) => {
  return import(`@/articles/learn_html/${params.lesson}.md`).then((res) => {
    return (
      <>
        <Header markdown={res.default}></Header>
        <Article markdown={res.default} />
      </>
    );
  });
};

export default Lession;
