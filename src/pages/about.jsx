import pin from '../assets/pin.png'
import studio from '../assets/studio.webp'
import arrow from '../assets/arrow-dropdown.png'
import { useBreakpoint } from '../hooks/useBreakpoint'
import { motion } from "framer-motion";
import DropdownButton from '../components/dropdown-button';
import { useState } from 'react';
import MapModal from '../components/map-modal';

const About = () => {
  
  const isMobile = !useBreakpoint().md;
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section id='about' className='flex flex-col items-center justify-center flex-shrink-0 gap-10 w-full md:w-screen h-[78rem] md:h-screen snap-center snap-always overflow-hidden'>

      {isMobile && <h1 id='about' className="font-audiowide tracking-wide text-5xl w-full text-start p-4 text-black bg-primary">SOBRE</h1>}

      <div className="flex flex-col justify-evenly w-full h-9/12">
      
        <div className="grid grid-cols-2 items-stretch gap-6">
          <div className="flex flex-col gap-2 h-full pl-8">
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

          <div className="p-2 pt-0">
            <div className="grid grid-cols-2 w-full h-full rounded-tl-3xl rounded-3xl bg-black border border-primary overflow-hidden">
              <img 
                src={studio} 
                alt="studio" 
                className="w-full h-full object-cover opacity-90"
              />

              <MapModal>
                <div className="flex justify-center items-center gap-2 w-full h-full bg-black text-primary">
                  <img src={pin} alt="pin" className='w-12 h-12' />
                  <span className='text-xl'>
                    Ver no mapa
                  </span>
                </div>
              </MapModal>
            </div>
          </div>
          
        </div>

        <div className="relative overflow-hidden w-full">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 w-[100%] h-full 
              bg-gradient-to-r from-transparent via-white/30 to-transparent 
              blur-sm " />
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