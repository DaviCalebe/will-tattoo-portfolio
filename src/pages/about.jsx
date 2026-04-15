import pin from '../assets/location-pin.png'
import studio from '../assets/studio.png'
import vector from '../assets/Vector2.png'
import { useBreakpoint } from '../hooks/useBreakpoint'
import { motion } from "framer-motion";

const About = () => {
  
  const isMobile = !useBreakpoint().md;

  return (
    <section id='about' className='flex flex-col items-center justify-center flex-shrink-0 gap-10 w-full md:w-screen h-[78rem] md:h-screen snap-center snap-always overflow-hidden'>
      
      {isMobile && <h1 id='about' className="font-audiowide tracking-wide text-5xl w-full text-start p-4 text-black bg-primary">SOBRE</h1>}


      <fieldset className="flex flex-col gap-4 w-full max-w-10/12 h-full max-h-9/12 px-8 py-2 bg-black border border-primary rounded-lg">
        <legend className="text-white text-3xl font-audiowide tracking-widest">BIO</legend>
          <div className="flex gap-4">
            <div className="text-white flex-1">

              <div className="leading-loose text-justify">
                <span className='text-lg'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque est purus, placerat posuere nulla vestibulum quis. Morbi dictum sollicitudin elit, et volutpat sem tempus a. Proin nec eleifend justo, eget mollis eros. Fusce vehicula leo ac velit facilisis interdum. Fusce porta orci metus, consectetur imperdiet justo ullamcorper dignissim. Nam quis odio id ex varius accumsan eget non mi. In vestibulum placerat iaculis. Fusce porta orci metus, consectetur imperdiet justo ullamcorper dignissim. Nam quis odio id ex varius accumsan eget non mi. In vestibulum placerat iaculis.Fusce porta orci metus, consectetur imperdiet justo ullamcorper dignissim. Nam quis odio id ex varius accumsan eget non mi. Fusce porta orci metus, consectetur imperdiet justo ullamcorper dignissim. Nam quis odio id ex varius accumsan eget non mi.  In vestibulum placerat iaculis.Fusce porta orci metus, consectetur imperdiet justo ullamcorper dignissim. Nam quis odio id ex varius accumsan eget non mi. In vestibulum placerat.
                </span>

              </div>
            </div>

            <div className="w-[280px] h-[280px] perspective-1000 group">
              <motion.div
                className="relative w-full h-full"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: 0 }}
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden">
                  <img src={studio} alt="studio" className="w-full h-full object-cover" />
                </div>

                <div
                  className="absolute w-full h-full backface-hidden flex items-center justify-center rounded-xl"
                  style={{ transform: "rotateY(180deg)" }}
                >
                  <div className="flex justify-center items-center w-60 h-60 bg-primary rounded-[105px] rotate-45">
                    <div className="flex justify-start items-center -rotate-45">
                      <img src={pin} alt="pin" className='h-16' />
                      <div className="flex flex-col text-white text-start items-center justify-center">
                        <h2 className='text-3xl w-full font-semibold  text-start'>Estúdio</h2>
                        <a href='https://maps.app.goo.gl/ceN68woL7LWXWDEt6' target="_blank" rel="noopener noreferrer" className='text-2xl hover:text-blue-200 hover:underline'>R. Jean Emile Favre, 559 - Ipsep</a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className='text-[28px] text-white'>Arte com propósito. Técnica com consciência. Mentalidade elevada.</h2>

            <button className='w-2/3 text-white text-3xl bg-primary p-4 rounded-lg cursor-pointer hover:bg-gray-600'>
              Transforme sua pele em arte!
            </button>

          </div>

      </fieldset>


    </section>
  )
}

export default About


