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

      <div className="flex flex-col justify-center gap-10 xl:gap-0 xl:justify-evenly w-full h-10/12 xl:h-9/12 lg:-mt-10">
      
        <div className="grid md:grid-cols-2 items-stretch h-10/12 md:h-8/12 xl:h-9/12 px-8 gap-6">
          <div className="flex flex-col gap-2 h-full">
            <DropdownButton index={1} activeIndex={activeIndex} setActiveIndex={setActiveIndex} title="QUEM É MENOR?">
              <div className="text-justify">
                <span className='text-sm text-white'>
                  O Menor Will é especialista em tatuagens de realismo preto e cinza, oferecendo trabalhos exclusivos com alto nível de detalhamento. Cada projeto é planejado de forma personalizada, respeitando a estrutura corporal e garantindo equilíbrio, profundidade e acabamento impecável.
                </span>
              </div>
            </DropdownButton>

            <DropdownButton index={2} activeIndex={activeIndex} setActiveIndex={setActiveIndex} title="POR QUE REALISMO?">
              <div className="text-justify">
                <span className='text-sm text-white'>
                  É a escolha ideal para quem busca uma arte rica em detalhes, profundidade e impacto visual, capaz de transformar referências, memórias e sentimentos em obras únicas. Especializado em realismo preto e cinza, Menor Will desenvolve projetos personalizados com alto nível de técnica e acabamento, destacando a precisão e a fidelidade aos traços.
                </span>
              </div>
            </DropdownButton>

            <DropdownButton index={3} activeIndex={activeIndex} setActiveIndex={setActiveIndex} title="COMO AGENDAR?">
              <div className="text-justify">
                <span className='text-sm text-white'>
                  Os agendamentos são confirmados mediante o pagamento de 50% do valor do procedimento, garantindo a reserva do horário escolhido. O atendimento é realizado por horário marcado, proporcionando pontualidade e uma experiência personalizada. As reservas podem ser feitas via WhatsApp ou pelo link de agendamento.
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
                <motion.div
                  className="flex justify-center items-center gap-2 w-full h-full bg-black text-primary"
                  whileHover={{ backgroundColor: '#111' }}
                >
                  <img src={pin} alt="pin" className='w-12 h-12' />
                  <span className='text-xl'>
                    Ver no mapa
                  </span>
                </motion.div>
              </MapModal>
            </div>
          </div>
          
        </div>

        <div className="relative flex justify-self-center place-self-center overflow-hidden w-3/6 rounded-full">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 w-[100%] h-full 
              bg-gradient-to-r from-transparent via-white/10 to-transparent 
              blur-sm shine rounded-full" />
          </div>

          <button className="w-full text-primary font-audiowide font-bold uppercase text-3xl rounded-full bg-black hover:bg-[#111] p-6 cursor-pointer inset-shadow-sm inset-shadow-primary">
            Transforme sua pele em arte!
          </button>
        </div>
      </div>

    </section>
  )
}

export default About