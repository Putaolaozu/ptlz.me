import Article from "@/components/ArticleComponents/Article";
import Header from "@/components/Header";
import debounce_and_throttle from "@/articles/web_dev/debounce_and_throttle.md";

const page = () => {
  const tags = [
    { name: "首页", url: "/" },
    { name: "文章", url: "/posts" },
    { name: "防抖和限流", url: "/posts/web-dev/debounce_and_throttle" },
  ];

  return (
    <>
      <Header markdown={debounce_and_throttle} tags={tags}></Header>
      <Article markdown={debounce_and_throttle} />
    </>
  );
};

export default page;
