import profilepic from '../assets/IMG_0891.jpeg'
import { motion } from 'framer-motion'

const Intro = () => {
  return (
    <section className='relative flex items-center justify-center flex-shrink-0 w-full md:w-screen h-auto md:h-screen py-6 md:py-0 snap-center snap-always overflow-hidden'>
      <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 0.4, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        className="hidden md:block absolute inset-0 opacity-20 text-primary">
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

      <div className="relative w-full my-10 flex flex-col items-center gap-6 md:block">
        <motion.div
          className="w-[60%] sm:w-[70%] max-w-[423px] max-h-[564px] aspect-[423/564] rounded-full overflow-hidden mx-auto shadow-[0_25px_50px_-12px_rgba(254,202,202,0.6)]"
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
          className="
            flex items-center justify-center
            bg-secondary w-[80%] md:w-xl h-20 xs:h-24
            rounded-3xl shadow-[0px_10px_13px_-7px_#000000,_0px_2px_26px_-3px_#000000]
            cursor-pointer

            md:absolute md:bottom-12 md:left-1/2 md:-translate-x-1/2
          "
        >
         <a
          href='https://www.instagram.com/menorwill_tatuador'
          target="_blank"
          rel="noopener noreferrer"
          className="w-full xxs:text-xl xs:text-2xl sm:text-3xl md:text-[2.1rem] font-audiowide text-primary tracking-widest">
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
