import { motion } from 'framer-motion'
import star from '../assets/star-fulfilled.png'
import calendar from '../assets/calendar.png'
import whatsapp from '../assets/whatsapp.png'
import instagram from '../assets/instagram.png'

const Topbar = () => {
  return (
      <div className="pointer-events-none flex justify-center items-center xs:justify-between px-4 md:px-16 fixed top-0 z-40 w-full h-16 bg-transparent">
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
          className="pointer-events-auto flex items-center justify-evenly bg-transparent w-52 h-10 rounded-b-lg">
            <a href="" target='_blank' rel="noopener noreferrer" className='flex justify-center items-center bg-black border border-white w-14 h-14 rounded-full'>
              <img src={calendar} alt="calendar" className="filter brightness-50 invert w-7 h-7 hover:cursor-pointer" />
            </a>
            <a href="" target='_blank' rel="noopener noreferrer" className='flex justify-center items-center bg-black border border-white w-14 h-14 rounded-full'>
              <img src={whatsapp} alt="whatsapp" className="filter brightness-50 invert w-7 h-7 hover:cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/menorwill_tatuador" target='_blank' rel="noopener noreferrer" className='flex justify-center items-center bg-black border border-white w-14 h-14 rounded-full'>
              <img src={instagram} alt="instagram" className="filter brightness-50 invert w-7 h-7 hover:cursor-pointer" />
            </a>
        </motion.div>
      </div>
  )
}

export default Topbar