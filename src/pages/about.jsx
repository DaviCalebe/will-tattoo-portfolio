import pin from '../assets/location-pin.png'
import studio from '../assets/studio.png'
import arrow from '../assets/arrow-dropdown.png'
import { useBreakpoint } from '../hooks/useBreakpoint'
import { motion } from "framer-motion";
import DropdownButton from '../components/dropdown-button';
import { useState } from 'react';

const About = () => {
  
  const isMobile = !useBreakpoint().md;
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section id='about' className='flex flex-col items-center justify-center flex-shrink-0 gap-10 w-full md:w-screen h-[78rem] md:h-screen snap-center snap-always overflow-hidden'>

      {isMobile && <h1 id='about' className="font-audiowide tracking-wide text-5xl w-full text-start p-4 text-black bg-primary">SOBRE</h1>}

      <div className="flex flex-col justify-evenly w-full h-9/12">
      
        <div className="grid grid-cols-2 items-center justify-center gap-6">
          <div className="flex flex-col gap-2 h-full max-h-full pl-8">
            <DropdownButton index={1} activeIndex={activeIndex} setActiveIndex={setActiveIndex} title="POR QUE REALISMO?">
              <div className="text-justify">
                <span className='text-sm text-white'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque est purus, placerat posuere nulla vestibulum quis. Morbi dictum sollicitudin elit, et volutpat sem tempus a. Proin nec eleifend justo, eget mollis eros. Fusce vehicula leo ac velit facilisis interdum. Fusce porta orci metus, consectetur imperdiet justo ullamcorper dignissim. 
                </span>
              </div>
            </DropdownButton>

            <DropdownButton index={2} activeIndex={activeIndex} setActiveIndex={setActiveIndex} title="PREENCHIMENTO">
              <div className="text-justify">
                <span className='text-sm text-white'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque est purus, placerat posuere nulla vestibulum quis. Morbi dictum sollicitudin elit, et volutpat sem tempus a. Proin nec eleifend justo, eget mollis eros. Fusce vehicula leo ac velit facilisis interdum. Fusce porta orci metus, consectetur imperdiet justo ullamcorper dignissim. 
                </span>
              </div>
            </DropdownButton>

            <DropdownButton index={3} activeIndex={activeIndex} setActiveIndex={setActiveIndex} title="BIOGRAFIA">
              <div className="text-justify">
                <span className='text-sm text-white'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque est purus, placerat posuere nulla vestibulum quis. Morbi dictum sollicitudin elit, et volutpat sem tempus a. Proin nec eleifend justo, eget mollis eros. Fusce vehicula leo ac velit facilisis interdum. Fusce porta orci metus, consectetur imperdiet justo ullamcorper dignissim. 
                </span>
              </div>
            </DropdownButton>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">

            <div className="w-2/5 h-2/5">
              <img src={studio} alt="studio" className="w-full h-full object-cover"/>
            </div>
            
            <div className="flex">
              <img src={pin} alt="pin" className='h-14'/>
              <div className="flex flex-col text-white text-start items-center justify-center">
                <h2 className='text-2xl w-full font-semibold  text-start'>Estúdio</h2>
                <a href='https://maps.app.goo.gl/ceN68woL7LWXWDEt6' target="_blank" rel="noopener noreferrer" className='text-xl hover:text-blue-200 hover:underline'>R. Jean Emile Favre, 559</a>
              </div>
            </div>

          </div>
          
        </div>

        <div className="relative overflow-hidden w-full">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 w-[100%] h-full 
              bg-gradient-to-r from-transparent via-white/10 to-transparent 
              blur-sm shine" />
          </div>

          <button className="w-full text-white text-3xl bg-[#1A1A1A] p-6 cursor-pointer">
            Transforme sua pele em arte!
          </button>
        </div>
      </div>



    </section>
  )
}

export default About


