import { motion, AnimatePresence } from "framer-motion";

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
    <div className="pointer-events-none fixed bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-40">
      <AnimatePresence mode="wait">
        {active !== 0 && (
          <motion.span
            key={sections[active]?.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="font-audiowide uppercase text-primary text-4xl"
          >
            {sections[active]?.title}
          </motion.span>
        )}
      </AnimatePresence>

      <div className="pointer-events-auto relative flex gap-3 p-1 rounded-full bg-white/10 backdrop-blur-sm">
        {sections.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => scrollToIndex(i)}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.92 }}
            className="relative w-3 h-3 rounded-full cursor-pointer"
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
  );
}

export default Pagination;
