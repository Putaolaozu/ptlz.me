import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Header = ({ markdown, tags }: { markdown: string; tags: { name: string; url: string }[] }) => {
  return (
    <header className="dark:from-slate-800 dark:to-slate-800 bg-gradient-to-t from-sky-200 to-sky-100 relative">
      <div className="absolute sm:-top-14 sm:h-14 -top-10 h-10 dark:bg-slate-800 bg-[#D9F0FD] w-full"></div>
      <div className="sticky -top-1 sm:h-16 h-11 dark:bg-slate-800 bg-[#D9F0FD] w-full z-10"></div>
      <hgroup className="pt-2 pb-9 px-8 max-w-[1100px] mx-auto">
        <nav className="flex items-center dark:text-gray-300 sm:text-lg ">
          {tags.map((tag, index) => {
            if (index === tags.length - 1) {
              return (
                <Link href="/" className="opacity-80 hover:opacity-100 " key={tag.url}>
                  {tag.name}
                </Link>
              );
            } else {
              return (
                <>
                  <Link href="/" className="opacity-80 hover:opacity-100 " key={tag.url}>
                    {tag.name}
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
                </>
              );
            }
          })}
        </nav>
        <ReactMarkdown allowedElements={["h1"]} className="article-heading">
          {markdown}
        </ReactMarkdown>
      </hgroup>
      <svg viewBox="0 0 679 92" className="dark:fill-[#0E1723] fill-blue-300 -mt-16">
        <path d="M678.9 92.8467C621.9 65 615 75 587.9 43C561.304 30.5649 544.534 2.67258 517.9 3.8147e-06C474.9 3.69549e-06 498.3 34.6552 434.9 43C390.189 43 288.9 68 251.9 59C198.9 59 169.9 20 138.9 49C75.3251 78.7245 58.9 46 0.899967 92.8466L339.9 92.8467H678.9Z" />
      </svg>
    </header>
  );
};

export default Header;
