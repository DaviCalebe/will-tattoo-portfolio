import pin from '../assets/location-pin.png'
import studio from '../assets/studio.png'
import studio2 from '../assets/studio.webp'
import vector from '../assets/vector 2.png'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useIsMdUp } from '../hooks/useIsMdUp'

const About = () => {
  const isMobile = !useIsMdUp();

  return (
    <section className='relative flex flex-col items-center justify-center flex-shrink-0 gap-10 w-full md:w-screen h-[78rem] md:h-screen snap-center snap-always overflow-hidden pb-15'>
      
      {isMobile && <h1 id='about' className="font-audiowide text-4xl text-black bg-primary w-full text-start p-5">SOBRE</h1>}
      <img src={vector} alt="" className='absolute top-0 right-0 -z-10 w-4/6 h-screen'/>
{/*       <div className="absolute bottom-0 right-0 w-2/5 h-2/3 [clip-path:ellipse(100%_100%_at_100%_100%)]">
        
        <div className="absolute inset-0 bg-black/30" />
      </div> */}

      <div className="relative w-full h-full max-h-10/12 my-10 grid grid-cols-3 items-center justify-center gap-6 p-4">

        <div className="row-span-2 flex items-center justify-center h-full">
          <img src={studio} alt="studio" className='w-[544px] h-[full]' />
        </div>

        <div className="flex">
          <img src={pin} alt="" className='h-16 md:h-20' />
          <div className="flex flex-col text-white text-start items-center justify-center">
            <h2 className='text-3xl md:text-4xl w-full font-semibold  text-start'>Estúdio</h2>
            <a href='https://maps.app.goo.gl/ceN68woL7LWXWDEt6' target="_blank" rel="noopener noreferrer" className='text-2xl md:text-3xl  hover:text-blue-200 hover:underline'>R. Jean Emile Favre, 559 - Ipsep</a>
          </div>
        </div>

        <div className="flex justify-center items-center h-20 text-white text-8xl font-audiowide tracking-widest">BIO</div>
        
        <div className="col-span-2 h-40 p-10 text-white text-end">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque est purus, placerat posuere nulla vestibulum quis. Morbi dictum sollicitudin elit, et volutpat sem tempus a. Proin nec eleifend justo, eget mollis eros. Fusce vehicula leo ac velit facilisis interdum. Fusce porta orci metus, consectetur imperdiet justo ullamcorper dignissim. Nam quis odio id ex varius accumsan eget non mi. In vestibulum placerat iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt sapien ac leo viverra, quis venenatis ligula fringilla. Nulla fermentum pharetra ultrices. Aliquam at tellus consectetur, tincidunt quam non, varius justo. Praesent gravida viverra interdum. Morbi tincidunt molestie ultrices. Integer vitae iaculis mi. Praesent finibus a orci ut hendrerit. Pellentesque facilisis consequat lobortis. Quisque lorem urna, venenatis id enim elementum, dignissim eleifend tellus. Donec hendrerit fringilla ipsum.
        </div>
        
        {/*         <fieldset className="col-span-1 flex flex-col gap-5 w-full h-full border border-white rounded-2xl bg-black p-10">
          <legend className="ml-auto mr-auto px-2 text-white text-4xl font-audiowide tracking-widest">
            BIO
          </legend>
          <span className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque est purus, placerat posuere nulla vestibulum quis. Morbi dictum sollicitudin elit, et volutpat sem tempus a. Proin nec eleifend justo, eget mollis eros. Fusce vehicula leo ac velit facilisis interdum. Fusce porta orci metus, consectetur imperdiet justo ullamcorper dignissim. Nam quis odio id ex varius accumsan eget non mi. In vestibulum placerat iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt sapien ac leo viverra, quis venenatis ligula fringilla.

Nulla fermentum pharetra ultrices. Aliquam at tellus consectetur, tincidunt quam non, varius justo. Praesent gravida viverra interdum. Morbi tincidunt molestie ultrices. Integer vitae iaculis mi. Praesent finibus a orci ut hendrerit. Pellentesque facilisis consequat lobortis. Quisque lorem urna, venenatis id enim elementum, dignissim eleifend tellus. Donec hendrerit fringilla ipsum.</span>
        <a href="" className='bg-secondary text-center text-white text-xl p-4 rounded-lg cursor-pointer'>Transforme sua pele em arte!</a>
        </fieldset>

 */}

      </div>


    </section>
  )
}

export default About
