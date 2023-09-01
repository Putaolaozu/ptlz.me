import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Header = ({ markdown }: { markdown: string }) => {
  return (
    <header className="dark:from-slate-800 dark:to-slate-800 bg-gradient-to-t from-sky-200 to-sky-100 relative">
      <div className="absolute sm:-top-14 sm:h-14 -top-10 h-10 dark:bg-slate-800 bg-[#D9F0FD] w-full"></div>
      <div className="sticky top-0 sm:h-16 h-10 dark:bg-slate-800 bg-[#D9F0FD] w-full z-10"></div>
      <hgroup className="pt-2 pb-9 px-8 max-w-[1100px] mx-auto">
        <nav className="flex items-center dark:text-gray-300 sm:text-lg ">
          <Link href="/" className="opacity-80 hover:opacity-100 dark:text-gray-300">
            首页
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>

          <Link href="/tutorials" className="opacity-80 hover:opacity-100">
            教程
          </Link>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>

          <Link href="/tutorials/html" className="opacity-80 hover:opacity-100">
            初来乍到
          </Link>
        </nav>
        <ReactMarkdown
          allowedElements={["h1"]}
          className="mt-6 mb-4 font-medium lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
          {markdown}
        </ReactMarkdown>
      </hgroup>
      <svg viewBox="0 0 1440 74" className="dark:fill-[#0e141a] fill-blue-300">
        <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
      </svg>
    </header>
  );
};

export default Header;
