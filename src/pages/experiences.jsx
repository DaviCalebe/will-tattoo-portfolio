import workshop from '../assets/blackwork-workshop.jpeg'
import tattooMachine from '../assets/tattoo-machine.png'
import tattoo from '../assets/tattoo.png'
import gloves from '../assets/gloves.png'
import ink from '../assets/ink.png'
import decalque from '../assets/decalque.png'
import cuidados from '../assets/cuidados.png'
import certificate from '../assets/certificate.webp'

const Experiences = () => {
  return (
    <section id='experiences' className='flex flex-col items-center justify-center flex-shrink-0 gap-10 w-full md:w-screen h-[78rem] md:h-screen snap-center snap-always overflow-hidden'>
        <div className="grid grid-rows-2 justify-center gap-10 xl:gap-0 xl:justify-evenly w-full h-10/12 xl:h-9/12 lg:-mt-10">
            <fieldset className="flex justify-center items-center bg-black border border-primary gap-8 px-8 pb-4">
                <legend className="text-2xl text-center font-audiowide font-bold text-primary">WORKSHOP</legend>
                <div className="flex w-1/2">
                    <img src={workshop} className='rounded-lg w-[290px] h-[270px] [box-shadow:0px_13px_29px_7px_#000000]' alt="workshop" />
                </div>
<div className="grid grid-cols-2 gap-6 text-primary px-2">
    <div className="grid grid-cols-[56px_180px_1fr] items-center gap-4">
        <img src={gloves} className="w-14 h-14" alt="" />

        <h3 className="text-white font-audiowide">
            BIOSEGURANÇA
        </h3>

        <span>
            Voltado para a capacitação de tatuadores em práticas essenciais de higiene,
            esterilização e prevenção de contaminações.
        </span>
    </div>

    <div className="grid grid-cols-[56px_180px_1fr] items-center gap-4">
        <img src={decalque} className="w-14 h-14" alt="" />

        <h3 className="text-white font-audiowide">
            DECALQUE
        </h3>

        <span>
            Aperfeiçoar a aplicação e o posicionamento dos desenhos no corpo,
            proporcionando mais harmonia, precisão e valorização da anatomia.
        </span>
    </div>

    <div className="grid grid-cols-[56px_180px_1fr] items-center gap-4">
        <img src={tattooMachine} className="w-14 h-14" alt="" />

        <h3 className="text-white font-audiowide">
            APLICAÇÃO
        </h3>

        <span>
            Focado no aperfeiçoamento das técnicas de execução, proporcionando mais
            precisão, consistência e qualidade.
        </span>
    </div>

    <div className="grid grid-cols-[56px_180px_1fr] items-center gap-4">
        <img src={cuidados} className="w-14 h-14" alt="" />

        <h3 className="text-white font-audiowide">
            CUIDADOS PÓS TATTOO
        </h3>

        <span>
            Voltado para orientar sobre os procedimentos essenciais de cicatrização e
            manutenção da tatuagem.
        </span>
    </div>
</div>

            </fieldset>

            <div className="flex px-8 gap-20 justify-center items-center">
                <img src={certificate} className='w-64 rounded-sm [box-shadow:0px_13px_29px_7px_#000000]' alt="certificate" />
                <img src={certificate} className='w-64 rounded-sm [box-shadow:0px_13px_29px_7px_#000000]' alt="certificate" />
                <img src={certificate} className='w-64 rounded-sm [box-shadow:0px_13px_29px_7px_#000000]' alt="certificate" />
            </div>
        </div>
    </section>
  )
}

export default Experiences
