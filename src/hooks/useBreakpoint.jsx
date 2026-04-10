import { useEffect, useState } from "react";

const queries = {
  sm:  "(min-width: 640px)",
  md:  "(min-width: 768px)",
  lg:  "(min-width: 1024px)",
  xl:  "(min-width: 1280px)",
  xxl: "(min-width: 1536px)",
};

export function useBreakpoint() {
  const [matches, setMatches] = useState({
    sm:  false,
    md:  false,
    lg:  false,
    xl:  false,
    xxl: false,
  });

  useEffect(() => {
    const mediaQueries = Object.entries(queries).map(([key, query]) => {
      const mq = window.matchMedia(query);

      const handler = (e) =>
        setMatches((prev) => ({ ...prev, [key]: e.matches }));

      setMatches((prev) => ({ ...prev, [key]: mq.matches }));
      mq.addEventListener("change", handler);

      return { mq, handler };
    });

    return () => {
      mediaQueries.forEach(({ mq, handler }) =>
        mq.removeEventListener("change", handler)
      );
    };
  }, []);

  return matches;
}