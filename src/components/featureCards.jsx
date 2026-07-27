import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, text, className = '' }) => {
  const isLeft = className.includes("col-start-1");

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -40 : 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ amount: 0.4 }}
      transition={{
        duration: 5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative overflow-hidden rounded-lg min-h-[200px] bg-black border border-primary/60 before:absolute before:inset-0 before:bg-black/40 ${className}`}
    >
      <div className="relative z-10 h-full grid place-items-center text-center p-3 gap-2">
        <img src={icon} className="w-12 h-12" alt="" />
        <h3 className="text-white font-audiowide text-sm">{title}</h3>
        <span className="text-sm">{text}</span>
      </div>
    </motion.div>
  );
};

export default FeatureCard;