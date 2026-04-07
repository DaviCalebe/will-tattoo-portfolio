import pin from '../assets/location-pin.png'
import studio from '../assets/studio.png'
import vector from '../assets/Vector2.png'
import { useIsMdUp } from '../hooks/useIsMdUp'

const About = () => {
  const isMobile = !useIsMdUp();

  return (
    <section id='about' className='relative flex flex-col items-center justify-center flex-shrink-0 gap-10 w-full md:w-screen h-[78rem] md:h-screen snap-center snap-always overflow-hidden'>
      
      {isMobile && <h1 id='about' className="font-audiowide text-4xl text-black bg-primary w-full text-start p-5">SOBRE</h1>}
      <img src={vector} alt="" className='absolute top-0 right-0 -z-10 w-4/6 h-screen'/>
{/*       <div className="absolute bottom-0 right-0 w-2/5 h-2/3 [clip-path:ellipse(100%_100%_at_100%_100%)]">
        
        <div className="absolute inset-0 bg-black/30" />
      </div> */}

      <div className="relative w-full h-full max-h-10/12 my-10 grid grid-cols-3 items-center justify-center gap-6 p-8">

        <div className="col-span-1 flex items-center justify-center h-full">
          <img src={studio} alt="studio" className='w-[544px] h-[full]' />
        </div>

        <div className="col-span-2 flex flex-col justify-evenly w-full h-full">
          <div className="text-white text-end h-full">
            <div className="bg-transparent w-4/6 h-9/12 float-left
              [shape-outside:polygon(0%_0%,90%_0%,80%_50%,60%_65%,0%_90%)]
              [clip-path:polygon(0%_0%,90%_0%,80%_50%,60%_65%,0%_90%)]"
            >

            <div className="flex justify-start items-center pt-10">
              <img src={pin} alt="pin" className='h-16 md:h-20' />
              <div className="flex flex-col text-white text-start items-center justify-center">
                <h2 className='text-3xl md:text-4xl w-full font-semibold  text-start'>Estúdio</h2>
                <a href='https://maps.app.goo.gl/ceN68woL7LWXWDEt6' target="_blank" rel="noopener noreferrer" className='text-2xl md:text-3xl  hover:text-blue-200 hover:underline'>R. Jean Emile Favre, 559 - Ipsep</a>
              </div>
            </div>

            </div>

            <div className="flex w-auto h-auto justify-end">
              <h1 className="flex h-20 text-white text-5xl font-audiowide tracking-widest">BIO</h1>
            </div>

            <div className="leading-loose">
              <span className=''>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque est purus, placerat posuere nulla vestibulum quis. Morbi dictum sollicitudin elit, et volutpat sem tempus a. Proin nec eleifend justo, eget mollis eros. Fusce vehicula leo ac velit facilisis interdum. Fusce porta orci metus, consectetur imperdiet justo ullamcorper dignissim. Nam quis odio id ex varius accumsan eget non mi. In vestibulum placerat iaculis. Fusce porta orci metus, consectetur imperdiet justo ullamcorper dignissim. Nam quis odio id ex varius accumsan eget non mi. In vestibulum placerat iaculis.Fusce porta orci metus, consectetur imperdiet justo ullamcorper dignissim. Nam quis odio id ex varius accumsan eget non mi. In vestibulum placerat iaculis.Fusce porta orci metus, consectetur imperdiet justo ullamcorper dignissim. Nam quis odio id ex varius accumsan eget non mi. In vestibulum placerat.
              </span>
              <h2 className='text-3xl text-white'>Arte com propósito. Técnica com consciência. Mentalidade elevada.</h2>

            </div>
          </div>

{/*           <a href="" className='flex self-end bg-primary text-3xl rounded-lg p-4 hover:bg-neutral-700'>Transforme sua pele em arte!</a>
 */}        </div>


      </div>


    </section>
  )
}

export default About
