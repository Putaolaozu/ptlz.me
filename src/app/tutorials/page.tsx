"use client";
import Link from "next/link";
import anime from "animejs/lib/anime.es.js";
import { useEffect } from "react";

const Tutorials = () => {
  useEffect(() => {
    anime({
      targets: ".heading2",
      rotate: "1turn",
      duration: 800,
    });
  }, []);

  return (
    <section className="mx-auto w-full max-w-[1100px] px-4 sm:px-8">
      <h1 className="sm:text-3xl text-2xl sm:my-4 my-2">web 前端教程</h1>
      <div className="border-l-2 pl-2 ml-2">
        <p className="subtitle">
          我在自己学习web知识的时候，遇到了不少困难，在此尽力把自己的所学记录下来，把一些知识，顺带自己的学习方法分享给大家。
        </p>
        <p className="subtitle">如有错漏还请海涵，欢迎联系！</p>
      </div>
      <h2 className="heading2">初来乍到</h2>
      <ul className="content-list">
        <li>
          <Link href="tutorials/html/html-basic">从「!DOCTYPE html」说起</Link>
        </li>
      </ul>
    </section>
  );
};

export default Tutorials;
