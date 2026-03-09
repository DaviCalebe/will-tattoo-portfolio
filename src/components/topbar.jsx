import { motion } from 'framer-motion'
import star from '../assets/star.png'
import calendar from '../assets/calendar.png'
import whatsapp from '../assets/whatsapp.png'
import instagram from '../assets/instagram.png'

const Topbar = () => {
  return (
      <div className="pointer-events-none flex justify-between px-16 fixed top-0 z-40 w-full h-10 bg-transparent">
        <div className="flex gap-4">
          <img src={star} alt="star" className="w-9 h-9" />
          <img src={star} alt="star" className="w-9 h-9" />
          <img src={star} alt="star" className="w-9 h-9" />
          <img src={star} alt="star" className="w-9 h-9" />
          <img src={star} alt="star" className="w-9 h-9" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="pointer-events-auto flex items-center justify-evenly bg-transparent w-52 h-10 rounded-b-lg">
            <a href="" target='_blank' rel="noopener noreferrer">
              <img src={calendar} alt="calendar" className="w-8 h-8 hover:cursor-pointer" />
            </a>
            <a href="" target='_blank' rel="noopener noreferrer">
              <img src={whatsapp} alt="whatsapp" className="w-8 h-8 hover:cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/menorwill_tatuador" target='_blank' rel="noopener noreferrer">
              <img src={instagram} alt="instagram" className="w-8 h-8 hover:cursor-pointer" />
            </a>
        </motion.div>
      </div>
  )
}

export default Topbar