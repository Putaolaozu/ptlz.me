import { useEffect } from "react";

export const useScroll = ({
  linksSelector,
  headersSelector,
  className,
}: {
  linksSelector: string;
  headersSelector: string;
  className: string;
}) => {
  useEffect(() => {
    const asideLinks = document.querySelectorAll(linksSelector);
    const links = document.querySelectorAll(headersSelector) as NodeListOf<HTMLElement>;

    function setActiveLink() {
      let index = links.length;

      while (--index && window.scrollY + window.innerHeight - 100 < links[index].offsetTop) {}

      asideLinks.forEach((link) => link.classList.remove(className));
      asideLinks[index].classList.add(className);
    }

    setActiveLink();
    window.addEventListener("scroll", setActiveLink);
  }, []);
};
