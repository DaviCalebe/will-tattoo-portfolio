import workshop from '../assets/blackwork-workshop.jpeg'
import tattooMachine from '../assets/tattoo-machine.png'
import tattoo from '../assets/tattoo.png'
import gloves from '../assets/gloves.png'
import ink from '../assets/ink.png'

const Experiences = () => {
  return (
    <section id='experiences' className='flex flex-col items-center justify-center flex-shrink-0 gap-10 w-full md:w-screen h-[78rem] md:h-screen snap-center snap-always overflow-hidden'>
        <div className="grid grid-rows-2 justify-center gap-10 xl:gap-0 xl:justify-evenly w-full h-10/12 xl:h-9/12 lg:-mt-10">
            <fieldset className="flex justify-center items-center bg-black border border-primary gap-8 px-8 pb-4">
                <legend className="text-2xl text-center font-audiowide font-bold text-primary">WORKSHOP</legend>
                <div className="flex w-1/2">
                    <img src={workshop} className='rounded-lg w-80 h-72' alt="workshop" />
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-y-6 text-primary">
                    <div className="flex justify-center items-center gap-2">
                        <img src={tattooMachine} className="w-14 h-14" alt="" />
                        <span>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum magnam dignissimos a molestiae earum. Laborum odio sunt, totam temporibus excepturi accusamus quo eveniet repellat.
                        </span>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <img src={tattoo} className="w-14 h-14" alt="" />
                        <span>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum magnam dignissimos a molestiae earum. Laborum odio sunt, totam temporibus excepturi accusamus quo eveniet repellat.
                        </span>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <img src={gloves} className="w-14 h-14" alt="" />
                        <span>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum magnam dignissimos a molestiae earum. Laborum odio sunt, totam temporibus excepturi accusamus quo eveniet repellat.
                        </span>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <img src={ink} className="w-14 h-14" alt="" />
                        <span>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum magnam dignissimos a molestiae earum. Laborum odio sunt, totam temporibus excepturi accusamus quo eveniet repellat.
                        </span>
                    </div>
                </div>

            </fieldset>

            <div className="flex">

            </div>
        </div>
    </section>
  )
}

export default Experiences
