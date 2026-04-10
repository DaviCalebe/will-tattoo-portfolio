import profilepic from '../assets/profilepic.JPG'
import { motion } from 'framer-motion'

const Intro = () => {
  return (
    <section className='relative flex items-center justify-center flex-shrink-0 w-full md:w-screen h-[50rem] md:h-screen py-6 md:py-0 snap-center snap-always overflow-hidden'>

      <div className="absolute inset-0 md:w-1/2 h-full md:[clip-path:ellipse(90%_100%_at_0%_50%)]">
        <img src={profilepic} alt="Will" className='hidden md:block w-full h-full object-cover' />
        <div className="hidden md:block absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black from-1% to-transparent to-40%" />
      </div>

      <div className="relative w-full h-full max-h-10/12 my-10 flex flex-col items-center gap-6 md:block">
              <div className="flex md:hidden w-full h-full justify-center items-center">
        <h1 className="font-audiowide text-primary text-center text-9xl">WILL</h1>
      </div>
        <span className='hidden md:block absolute top-25 right-0 font-audiowide text-md text-white p-8'>ROLE A TELA ↑↓ OU USE AS TECLAS ←→</span>
        
        <div className='absolute bottom-0 right-0 hidden md:flex flex-col gap-4 font-audiowide uppercase md:text-5xl lg:text-7xl text-right text-white p-8'>
          <a href="#gallery" className='group flex items-center justify-end gap-2 text-[#aaa] hover:text-white [-webkit-text-stroke:2px_#fff]'>
            <span className='opacity-0 group-hover:opacity-100 text-white md:text-4xl lg:text-6xl transition-opacity'>{'>'}</span>
            GALERIA
          </a>
          <a href="#testimonials" className='group flex items-center justify-end gap-2 text-[#aaa] hover:text-white [-webkit-text-stroke:2px_#fff]'>
            <span className='opacity-0 group-hover:opacity-100 text-white md:text-4xl lg:text-6xl transition-opacity'>{'>'}</span>
            FEEDBACKS
          </a>
          <a href="#about" className='group flex items-center justify-end gap-2 text-[#aaa] hover:text-white [-webkit-text-stroke:2px_#fff]'>
            <span className='opacity-0 group-hover:opacity-100 text-white md:text-4xl lg:text-6xl transition-opacity'>{'>'}</span>
            SOBRE
          </a>
        </div>
        
      </div>
    </section>
  )
}

export default Intro
