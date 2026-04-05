import profilepic from '../assets/profilepic.jpg'
import { motion } from 'framer-motion'

const Intro = () => {
  return (
    <section className='relative flex items-center justify-center flex-shrink-0 w-full md:w-screen h-[50rem] md:h-screen py-6 md:py-0 snap-center snap-always overflow-hidden'>

        <div className="absolute inset-0 w-1/2 h-full [clip-path:ellipse(90%_100%_at_0%_50%)]">
          <img src={profilepic} alt="Will" className='w-full h-full object-cover' />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      <div className="relative w-full h-full max-h-10/12 my-10 flex flex-col items-center gap-6 md:block">
        <span className='absolute top-25 right-0 font-audiowide text-white p-8'>ROLE A TELA ↑↓ OU USE AS TECLAS ←→</span>
        <div className='absolute bottom-0 right-0 flex flex-col gap-4 font-audiowide uppercase text-7xl text-right text-white p-8'>
          <a href="">
            GALERIA
          </a>
          <a href="">
            FEEDBACKS
          </a>
          <a href="">
            SOBRE
          </a>
        </div>
      </div>
    </section>
  )
}

export default Intro
