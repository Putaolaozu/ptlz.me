"use client";
import Article from "@/components/Article";
import Header from "@/components/Header";
import { useEffect, useState } from "react";

const Lession = ({ params }: { params: { lesson: string } }) => {
  const [post, setPost] = useState("");
  useEffect(() => {
    import(`@/articles/learn_html/${params.lesson}.md`).then((res) => setPost(res.default));
  }, []);

  return (
    <>
      <Header markdown={post}></Header>
      <Article markdown={post} />
    </>
  );
};

export default Lession;
