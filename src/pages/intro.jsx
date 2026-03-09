import profilepic from '../assets/IMG_0891.jpeg'
import { motion } from 'framer-motion'

const Intro = () => {
  return (
    <section className='relative flex items-center justify-center flex-shrink-0 w-screen h-screen snap-center snap-always overflow-hidden'>
      <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 0.4, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 opacity-20 text-primary">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="text-[7vw] font-semibold tracking-widest break-all"
          >
            {Array.from({ length: 6 }).map((_, j) => (
              <span key={j} className='font-audiowide'>ESPECIALISTA EM REALISMO </span>
            ))}
          </div>
        ))}
      </motion.div>

      <div className="relative">
        <motion.div
          className="w-[423px] h-[564px] rounded-full overflow-hidden mx-auto my-10 shadow-2xl shadow-red-100"
          initial={{ opacity: 0, x: 40, scale: 0.92 }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { duration: 0.6, ease: "easeOut" },
            x: { duration: 0.6, ease: "easeOut" },
            scale: { duration: 0.6, ease: "easeOut" },
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <img className="w-full h-full object-cover" src={profilepic} alt="will" />
        </motion.div>
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.04, pointerEvents: "auto" }}
          whileTap={{ scale: 0.96 }}
          className="flex items-center justify-center absolute bottom-12 left-1/2 -translate-x-1/2 z-40 bg-secondary w-xl h-24 rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.9)] cursor-pointer"
        >
         <a
          href='https://www.instagram.com/menorwill_tatuador'
          target="_blank"
          rel="noopener noreferrer"
          className="text-[2.1rem] font-audiowide text-primary tracking-widest">
            @MENORWILL_TATUADOR
          </a>
        </motion.button>
{/*         <div className="flex items-center justify-center absolute bottom-6 left-1/2 -translate-x-1/2 z-20 bg-primary w-lg h-20 rounded-3xl">
          <span className="text-[2.5rem] font-audiowide text-secondary tracking-widest">
            CONHEÇA MAIS
          </span>
        </div> */}
      </div>
    </section>
  )
}

export default Intro
