import React from 'react'
import profilepic from '../assets/IMG_0891.jpeg'

const Intro = () => {
  return (
    <section className='relative flex items-center justify-center flex-shrink-0 w-screen h-screen snap-center snap-always overflow-hidden'>
      <div className="absolute inset-0 opacity-20 text-primary">
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
      </div>

      <div className="relative">
        <div className="w-[423px] h-[564px] rounded-full overflow-hidden mx-auto my-10 shadow-2xl shadow-red-100">
          <img className='w-full h-full' src={profilepic} alt="will" />
        </div>
        <div className="flex items-center justify-center absolute bottom-1/7 left-1/2 -translate-x-1/2 z-30 bg-secondary w-xl h-20 rounded-3xl">
          <span className="text-[2.5rem] font-audiowide text-primary tracking-widest">
            @WILL_TATUADOR__
          </span>
        </div>
        <div className="flex items-center justify-center absolute bottom-6 left-1/2 -translate-x-1/2 z-20 bg-primary w-lg h-20 rounded-3xl">
          <span className="text-[2.5rem] font-audiowide text-secondary tracking-widest">
            CONHEÇA MAIS
          </span>
        </div>
      </div>
    </section>
  )
}

export default Intro
