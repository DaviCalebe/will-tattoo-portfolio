import { useEffect } from "react";

export function useHorizontalScroll(ref) {
  
  useEffect(() => {
    const stageElement = ref.current;
    if (!stageElement) return;

    const handleWheel = (event) => {
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
      stageElement.scrollBy({
        left: event.deltaY,
        behavior: "auto",
      });
    };

const handleKeyDown = (event) => {

  if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return

  event.preventDefault()

  const direction = event.key === "ArrowRight" ? 1 : -1

  stageElement.scrollBy({
    left: window.innerWidth * direction,
    behavior: "smooth",
  })
}

    stageElement.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      stageElement.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [ref]);
}