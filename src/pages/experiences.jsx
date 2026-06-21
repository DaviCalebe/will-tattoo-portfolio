import workshop from '../assets/blackwork-workshop.webp'
import tattooMachine from '../assets/tattoo-machine.png'
import gloves from '../assets/gloves.png'
import certificate from '../assets/certificate.webp'

const Experiences = () => {
  return (
    <section id='experiences' className='flex flex-col items-center justify-center flex-shrink-0 gap-10 w-full md:w-screen h-[78rem] md:h-screen snap-center snap-always overflow-hidden'>
<div className="w-full h-10/12 xl:h-9/12 lg:-mt-10">
    <div className="flex flex-col items-center justify-center h-full px-8">
        {/* Imagem do topo */}
        <img
            src={certificate}
            className="w-50 lg:w-90 rounded-sm [box-shadow:0px_13px_29px_7px_#000000]"
            alt="certificate"
        />

        {/* Imagens da base */}
        <div className="flex gap-10 lg:gap-120 justify-center items-center">
            <img
                src={certificate}
                className="w-50 lg:w-90 rounded-sm [box-shadow:0px_13px_29px_7px_#000000]"
                alt="certificate"
            />
            <img
                src={certificate}
                className="w-50 lg:w-90 rounded-sm [box-shadow:0px_13px_29px_7px_#000000]"
                alt="certificate"
            />
        </div>
    </div>
</div>
    </section>
  )
}

export default Experiences
