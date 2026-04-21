import arrow from '../assets/arrow-dropdown.png'
import { motion } from "framer-motion";

function DropdownButton({ index, activeIndex, setActiveIndex, title, children }) {
  const isOpen = activeIndex === index

  return (
    <motion.div
      className='flex flex-col w-96 p-4 bg-black border border-white rounded-3xl overflow-hidden cursor-pointer'
      onClick={() => setActiveIndex(isOpen ? null : index)}
    >
      <div className="flex w-full items-center justify-between">
        <h3 className="text-white text-3xl font-audiowide tracking-widest">
          {title}
        </h3>
        <motion.img
            src={arrow}
            alt="arrow"
            className='w-6 h-6'
            animate={{ rotate: isOpen ? 180 : 0}}
            transition={{ duration: 0.3 }}
        />
      </div>

      <motion.div
        initial={false}
        animate={{
          maxHeight: isOpen ? 200 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="text-justify mt-3 text-sm text-white">
          {children}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default DropdownButton