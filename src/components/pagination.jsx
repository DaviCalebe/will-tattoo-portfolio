import { motion, AnimatePresence } from "framer-motion";
import arrow from "../assets/arrow.png";

function Pagination({ containerRef, active, sections }) {
  const scrollToIndex = (index) => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;

    container.scrollTo({
      left: index * width,
      behavior: "smooth",
    });
  };

  return (
    <div className="pointer-events-none fixed bottom-2 z-40 flex w-full h-20 items-center justify-between px-8">

    <div className="w-16 h-16">
      <AnimatePresence mode="wait">
        {active !== 0 && (
          <motion.button
          key="previous"
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0}}
          exit={{ opacity: 0, x: -8 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => scrollToIndex( active - 1)}
          className="pointer-events-auto rounded-full hover:cursor-pointer"
          >
            <img src={arrow} alt="previous section" className="scale-x-[-1]" />
          </motion.button>
          )}
        </AnimatePresence>
    </div>
      
      <div className="flex flex-col items-center w-auto h-full gap-2">
      
        <div className="h-10">
          <AnimatePresence mode="wait">
            {active !== 0 && (
              <motion.span
                key={sections[active]?.title}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="font-audiowide uppercase filter brightness-50 invert text-primary text-4xl"
              >
                {sections[active]?.title}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <div className="pointer-events-auto relative flex gap-3 p-1 rounded-full bg-white/10 backdrop-blur-sm">
          {sections.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => scrollToIndex(i)}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.92 }}
              className="relative w-[18px] h-[18px] rounded-full cursor-pointer"
              aria-label={`Ir para seção ${i + 1}`}
            >
              {active === i && (
                <motion.span
                  layoutId="pagination-pill"
                  className="absolute inset-0 rounded-full bg-white"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}

              <span
                className={`absolute inset-0 rounded-full ${
                  active === i ? "bg-transparent" : "bg-white/40"
                }`}
              />
            </motion.button>
          ))}
        </div>

      </div>

      <div className="w-16 h-16">
        <AnimatePresence mode="wait">
          {active !== sections.length - 1 && (
            <motion.button
              key="next"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8}}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => scrollToIndex( active + 1)}
              className="pointer-events-auto rounded-full hover:cursor-pointer"
            >
              <img src={arrow} alt="next section" className="" />
            </motion.button>
            )}
        </AnimatePresence>
      </div>

    </div>
  );
}

export default Pagination;
