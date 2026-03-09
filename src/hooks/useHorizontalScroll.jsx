import { useEffect } from "react";

export function useHorizontalScroll(ref) {
  useEffect(() => {
    const stageElement = ref.current;
    if (!stageElement) return;

    const handleWheel = (event) => {
      // Looks for a parent marked as vertical scroll area
      const verticalScrollArea = event.target.closest("[data-vertical-scroll]");

      if (verticalScrollArea) {
        const isAtTop = verticalScrollArea.scrollTop <= 0;
        const isAtBottom =
          verticalScrollArea.scrollTop + verticalScrollArea.clientHeight >=
          verticalScrollArea.scrollHeight - 1;

        const isScrollingUp = event.deltaY < 0;
        const isScrollingDown = event.deltaY > 0;

        // If vertical scrolling is still possible, consume wheel here
        if (!(isAtTop && isScrollingUp) && !(isAtBottom && isScrollingDown)) {
          event.preventDefault();
          verticalScrollArea.scrollBy({
          top: event.deltaY * 3,
          behavior: "smooth",
          });
          return;
        }
      }

      // Fallback: page horizontal scroll
      event.preventDefault();
      stageElement.scrollBy({
        left: event.deltaY,
        behavior: "auto",
      });
    };

    stageElement.addEventListener("wheel", handleWheel, { passive: false });
    return () => stageElement.removeEventListener("wheel", handleWheel);
  }, [ref]);
}
