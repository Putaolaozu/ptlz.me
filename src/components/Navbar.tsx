import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-transparent sticky top-0 w-full max-w-[1100px] mx-auto z-20 sm:px-8 px-4">
      <header className="sm:h-14 h-10 flex justify-between items-center overflow-hidden">
        <div className="flex items-baseline">
          <Link href="/" className="text-indigo-400 sm:text-xl text-lg sm:pr-8 pr-4">
            <span>葡萄</span>
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
        <div className="flex gap-2"></div>
      </header>
    </div>
  );
};

export default Navbar;
