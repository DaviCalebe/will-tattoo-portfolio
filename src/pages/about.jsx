import React from 'react'
import pin from '../assets/location-pin.png'
import studio from '../assets/studio.png'

const About = () => {
  return (
    <section className='flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen snap-center snap-always overflow-hidden pb-15'>
     <div className="grid grid-cols-2 items-center justify-center">

      <div className="flex flex-col items-center justify-center">
        <div className="flex">
          <img src={pin} alt="" />
          <div className="flex flex-col text-center">
            <h2 className='text-4xl font-semibold text-primary'>Estúdio</h2>
            <h3 className='text-3xl text-primary'>R. Jean Emile Favre, 559 - Ipsep</h3>
          </div>
        </div>
          <img src={studio} className='w-[400px] h-[400px]' alt="" />
      </div>  

            <div className="flex flex-col items-center justify-center">
        <div className="group relative w-[350px] h-[400px] m-5 rounded-[10px] border-2 border-primary overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.2)] transition-transform duration-500 ease-[cubic-bezier(0.215,0.61,0.355,1)] hover:-translate-y-2.5">
          <div className="bg-black w-full h-full p-5">
            <p className='text-primary'>  
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
          </div>
          <div className="flex flex-col items-center absolute bottom-0 left-0 w-full h-[51%] px-5 bg-primary transition-transform duration-500 ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:-translate-y-full">
            <p className="text-base leading-[1.5] mb-2">consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className="inline-block py-2.5 px-5 bg-black text-primary no-underline rounded">LER MAIS</button>
          </div>
        </div>
        <div className="relative flex items-center justify-center p-5">
          <p className='absolute top-0 text-white text-xl -rotate-2'>Transforme sua pele em arte!</p>
          <button className='bg-secondary text-center text-white text-xl p-5 rounded-lg'>Orçamento sem compromisso</button>
        </div>
      </div>
     </div>


    </section>
  )
}

export default About
