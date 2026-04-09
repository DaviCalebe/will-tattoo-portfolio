import { motion } from 'framer-motion'
import calendar from '../assets/calendar.png'
import whatsapp from '../assets/whatsapp.png'
import instagram from '../assets/instagram.png'

const Topbar = ({ active }) => {

  const calendarSizes = {
    0: { height: 56, paddingX: 16 },
    1: { height: 44, paddingX: 12 },
    2: { height: 44, paddingX: 12 },
    3: { height: 56, paddingX: 16 },
  }

  const iconSizes = {
    0: { whatsapp: 56, instagram: 56 },
    1: { whatsapp: 44, instagram: 44 },
    2: { whatsapp: 44, instagram: 44 },
    3: { whatsapp: 56, instagram: 56 },
  }

  const cal = calendarSizes[active] ?? calendarSizes[0]
  const sizes = iconSizes[active] ?? iconSizes[0]

  return (
    <div className="pointer-events-none flex justify-center items-center xs:justify-between px-4 md:px-8 fixed top-0 z-40 w-full h-auto bg-transparent">
      <div className="hidden xs:flex gap-4">
{/*           <img src={star} alt="star" className="w-9 h-9" />
          <img src={star} alt="star" className="w-9 h-9" />
          <img src={star} alt="star" className="w-9 h-9" />
          <img src={star} alt="star" className="w-9 h-9" />
          <img src={star} alt="star" className="w-9 h-9" /> */}
      </div>

      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="pointer-events-auto flex items-center justify-evenly gap-4 bg-transparent pt-1 rounded-b-lg"
      >
        <motion.a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center gap-4 bg-white border border-black rounded-full overflow-hidden"
          animate={{
            height: cal.height,
            paddingLeft: cal.paddingX,
            paddingRight: cal.paddingX,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <motion.span
            className="text-black font-audiowide uppercase whitespace-nowrap"
            animate={{ fontSize: cal.height === 56 ? '1.125rem' : '0.875rem' }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            Agende uma sessão
          </motion.span>

          <motion.img
            src={calendar}
            alt="calendar"
            className="filter brightness-0 shrink-0 hover:cursor-pointer"
            animate={{
              width: cal.height === 56 ? 36 : 28,
              height: cal.height === 56 ? 36 : 28,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </motion.a>

        <motion.a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center bg-black border border-white rounded-full"
          animate={{ width: sizes.whatsapp, height: sizes.whatsapp }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <img src={whatsapp} alt="whatsapp" className="filter brightness-50 invert w-1/2 h-1/2 hover:cursor-pointer" />
        </motion.a>

        <motion.a
          href="https://www.instagram.com/menorwill_tatuador"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center bg-black border border-white rounded-full"
          animate={{ width: sizes.instagram, height: sizes.instagram }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <img src={instagram} alt="instagram" className="filter brightness-50 invert w-1/2 h-1/2 hover:cursor-pointer" />
        </motion.a>
      </motion.div>
    </div>
  )
}

export default Topbar