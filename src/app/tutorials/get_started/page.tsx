import Article from "@/components/ArticleComponents/Article";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://blog.ptlz.me"),
  title: "如何开始学习 web 前端开发? 我的学习方法和路线分享",
  description: "讲讲怎么学习前端开发，分享一些我自己觉得不错的学习方法和素材",
  openGraph: {
    images: "/articles/how_to_start.png",
  },
};

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
