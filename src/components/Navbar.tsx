import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-transparent sticky top-0 w-full max-w-[1100px] mx-auto z-20 sm:px-8 px-4">
      <header className="sm:h-14 h-10 flex justify-between items-center overflow-hidden">
        <div className="flex items-baseline">
          <Link href="/" className="text-indigo-400 sm:text-xl text-lg sm:pr-8 pr-4">
            <span>葡萄</span>
            <span className="inline-block translate-y-1 scale-75">🍇</span>
            <span>老祖</span>
          </Link>
          <nav className="">
            <ul className="flex justify-between items-center max-w-6xl sm:text-lg sm:gap-5 gap-2">
              <li>
                <Link href="/posts">文章</Link>
              </li>
              <li>
                <Link href="/about">关于我</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-2">
          <Link href="/rss/feed.xml" className="hover:opacity-100 opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              <path
                className="dark:fill-slate-200 fill-slate-900"
                d="M0 64C0 46.3 14.3 32 32 32c229.8 0 416 186.2 416 416c0 17.7-14.3 32-32 32s-32-14.3-32-32C384 253.6 226.4 96 32 96C14.3 96 0 81.7 0 64zM0 416a64 64 0 1 1 128 0A64 64 0 1 1 0 416zM32 160c159.1 0 288 128.9 288 288c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-123.7-100.3-224-224-224c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
              />
            </svg>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
