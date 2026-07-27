import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

const AnimatedStars = ({ src, size, delay }) => {
  const controls = useAnimationControls();

  useEffect(() => {
    async function play() {
      // Animação inicial + tamanho
      await controls.start({
        rotate: 0,
        opacity: 1,
        scale: 1,
        width: size.width,
        height: size.height,
        transition: {
          duration: 0.6,
          delay,
          ease: [0.22, 1, 0.36, 1],
        },
      });

      // Cintilação contínua
      controls.start({
        filter: [
          "brightness(1)",
          "brightness(2.2)",
          "brightness(1)",
        ],
        transition: {
          duration: 3 + Math.random() * 1.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      });
    }

    play();
  }, [controls, delay, size.width, size.height]);

  return (
    <motion.img
      src={src}
      alt="star"
      className="drop-shadow-[5px_2px_3px_rgba(0,0,0,0.5)]"
      initial={{
        rotate: 180,
        opacity: 0,
        scale: 0.6,
        width: size.width,
        height: size.height,
      }}
      animate={controls}
    />
  );
};

export default AnimatedStars;