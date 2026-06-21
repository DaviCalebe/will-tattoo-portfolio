import workshop from '../assets/blackwork-workshop.jpeg'
import tattooMachine from '../assets/tattoo-machine.png'
import gloves from '../assets/gloves.png'
import stencil from '../assets/stencil.png'
import aftercare from '../assets/aftercare.png'

const Workshop = () => {
  return (
    <section id='workshop' className='flex flex-col items-center justify-center flex-shrink-0 gap-10 w-full md:w-screen h-[78rem] md:h-screen snap-center snap-always overflow-hidden'>
<div className="w-full h-10/12 xl:h-9/12 lg:-mt-10 px-8">
            <legend className="text-3xl text-center font-audiowide font-bold brightness-50 invert text-primary">
                WORKSHOP PRETO E CINZA
            </legend>
    <div className="grid grid-cols-[1fr_1.8fr_1fr] grid-rows-3 p-8 pt-0 gap-6 h-full text-primary">

        {/* Topo esquerdo */}
        <div className="col-start-1 row-start-1 justify-self-start self-start relative overflow-hidden rounded-lg min-h-[200px] max-w-xs bg-black/50 border border-primary/20 before:absolute before:inset-0 before:bg-black/40">
            <div className="relative z-10 h-full grid place-items-center text-center p-3 gap-2">
                <img src={gloves} className="w-12 h-12" alt="" />
                <h3 className="text-white font-audiowide text-sm">BIOSEGURANÇA</h3>
                <span className="text-sm">
                    Voltado para a capacitação de tatuadores em práticas essenciais de higiene, esterilização e prevenção de contaminações.
                </span>
            </div>
        </div>

        {/* Topo direito */}
        <div className="col-start-3 row-start-1 justify-self-end self-start relative overflow-hidden rounded-lg min-h-[200px] max-w-xs bg-black/50 border border-primary/20 before:absolute before:inset-0 before:bg-black/40">
            <div className="relative z-10 h-full grid place-items-center text-center p-3 gap-2">
                <img src={stencil} className="w-12 h-12" alt="" />
                <h3 className="text-white font-audiowide text-sm">DECALQUE</h3>
                <span className="text-sm">
                    Aperfeiçoar a aplicação e o posicionamento dos desenhos no corpo, proporcionando mais harmonia, precisão e valorização da anatomia em cada projeto.
                </span>
            </div>
        </div>

        {/* Legenda + foto — coluna e linha centrais, agora com mais espaço */}
        <div className="col-start-2 row-start-1 row-span-3 flex flex-col items-center justify-center gap-3">

            <img
                src={workshop}
                className="rounded-lg w-[100%] h-[100%] object-cover [box-shadow:0px_13px_29px_7px_#000000]"
                alt="workshop"
            />
        </div>

        {/* Inferior esquerdo */}
        <div className="col-start-1 row-start-3 justify-self-start self-end relative overflow-hidden rounded-lg min-h-[200px] max-w-xs bg-black/50 border border-primary/20 before:absolute before:inset-0 before:bg-black/40">
            <div className="relative z-10 h-full grid place-items-center text-center p-3 gap-2">
                <img src={tattooMachine} className="w-12 h-12" alt="" />
                <h3 className="text-white font-audiowide text-sm">APLICAÇÃO</h3>
                <span className="text-sm">
                    Focado no aperfeiçoamento das técnicas de execução, proporcionando mais precisão, consistência e qualidade em cada etapa do procedimento.
                </span>
            </div>
        </div>

        {/* Inferior direito */}
        <div className="col-start-3 row-start-3 justify-self-end self-end relative overflow-hidden rounded-lg min-h-[200px] max-w-xs bg-black/50 border border-primary/20 before:absolute before:inset-0 before:bg-black/40">
            <div className="relative z-10 h-full grid place-items-center text-center p-3 gap-2">
                <img src={aftercare} className="w-12 h-12" alt="" />
                <h3 className="text-white font-audiowide text-sm">CUIDADOS PÓS TATTOO</h3>
                <span className="text-sm">
                    Voltado para orientar sobre os procedimentos essenciais de cicatrização e manutenção, garantindo uma recuperação adequada e a preservação da qualidade e beleza da tatuagem.
                </span>
            </div>
        </div>

    </div>
</div>
    </section>
  )
}

export default Workshop
