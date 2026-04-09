import { useEffect, useRef } from "react";

export function useHorizontalScroll(ref) {
  const currentPage = useRef(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const stageElement = ref.current;
    if (!stageElement) return;

    const isDesktop = () => window.innerWidth >= 768;
    const totalPages = () => Math.round(stageElement.scrollWidth / window.innerWidth);

    const goToPage = (page) => {
      const total = totalPages();
      currentPage.current = (page + total) % total;

      stageElement.scrollTo({
        left: currentPage.current * window.innerWidth,
        behavior: "smooth",
      });

      isScrolling.current = true;
      setTimeout(() => { isScrolling.current = false; }, 800);
    };

    const handleWheel = (event) => {
      if (!isDesktop()) return;

      const verticalScrollArea = event.target.closest("[data-vertical-scroll]");

      if (verticalScrollArea) {
        const isAtTop = verticalScrollArea.scrollTop <= 0;
        const isAtBottom =
          verticalScrollArea.scrollTop + verticalScrollArea.clientHeight >=
          verticalScrollArea.scrollHeight - 1;

        const isScrollingUp = event.deltaY < 0;
        const isScrollingDown = event.deltaY > 0;

        if (!(isAtTop && isScrollingUp) && !(isAtBottom && isScrollingDown)) {
          event.preventDefault();
          verticalScrollArea.scrollBy({
            top: event.deltaY * 3,
            behavior: "smooth",
          });
          return;
        }
      }

      event.preventDefault();
      if (isScrolling.current) return;

      const direction = event.deltaY > 0 ? 1 : -1;
      goToPage(currentPage.current + direction);
    };

    const handleKeyDown = (event) => {
      if (!isDesktop()) return;
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
      if (isScrolling.current) return;

      event.preventDefault();
      const direction = event.key === "ArrowRight" ? 1 : -1;
      goToPage(currentPage.current + direction);
    };

    stageElement.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      stageElement.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [ref]);
}