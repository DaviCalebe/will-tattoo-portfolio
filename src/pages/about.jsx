import pin from '../assets/location-pin.png'
import studio from '../assets/studio.png'
import { motion } from 'framer-motion'
import { useState } from 'react'

const About = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className='flex flex-col items-center justify-center flex-shrink-0 w-full md:w-screen h-auto md:h-screen snap-center snap-always overflow-hidden pb-15'>
     <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-5 items-center justify-center">

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center justify-center m-5 md:gap-10 w-full h-full max-w-[800px]">
        <div className="flex">
          <img src={pin} alt="" className='h-16 md:h-20' />
          <div className="flex flex-col text-center items-center justify-center">
            <h2 className='text-3xl md:text-4xl font-semibold text-primary'>Estúdio</h2>
            <a href='https://maps.app.goo.gl/ceN68woL7LWXWDEt6' target="_blank" rel="noopener noreferrer" className='text-2xl md:text-3xl text-primary hover:text-blue-200 hover:underline'>R. Jean Emile Favre, 559 - Ipsep</a>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <img src={studio} className='min-w-[350px] w-3/4' alt="" />
          <img src={studio} className='hidden xl:block min-w-[350px] w-3/4' alt="" />
        </div>
      </motion.div>  

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center justify-center m-5 gap-5">
        <div
          onClick={() => setOpen(!open)}
          className="group relative text-base w-[350px] h-[400px] rounded-[10px] border-2 border-primary overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.2)] transition-transform duration-500 ease-[cubic-bezier(0.215,0.61,0.355,1)] hover:-translate-y-2.5">
          <div className="bg-black w-full h-full p-5">
            <p className='text-primary text-justify'>
              {/* COMEÇO DA PARTE 1 */}
              Minha arte vai além da estética. Cada tatuagem é criada a partir de uma escuta cuidadosa, respeito absoluto à individualidade do cliente e um padrão rigoroso de qualidade e excelência.

Trabalho com a mentalidade de que tatuar é assumir responsabilidade sobre histórias, {/* FINAL DA PARTE 1 */}
{/* COMEÇO DA PARTE 3 */}
 Por isso, cada projeto nasce com intenção, significado e precisão técnica. Tatuar, para mim, é um compromisso com o alto nível, com o crescimento constante e com a evolução artística e pessoal. É um amor lapidado por disciplina, estudo e visão.
Arte com propósito. Técnica com consciência. Mentalidade elevada. {/* FINAL DA PARTE 3 */}

            </p>
            
          </div>
          <div className={`flex flex-col items-center absolute bottom-0 left-0 w-full h-[51%] px-5 bg-primary transition-transform duration-500 ease-[cubic-bezier(0.215,0.61,0.355,1)]
          ${open ? "-translate-y-full" : "translate-y-0 md:group-hover:-translate-y-full"}`}>
            <p className="text-justify leading-[1.5] mb-2">{/* COMEÇO DA PARTE 2 */} símbolos e decisões que acompanham uma pessoa por toda a vida.

Não sigo tendências vazias. Crio obras alinhadas à essência de quem procura mais do que uma tatuagem — procura identidade, motivação e verdade.
{/* FINAL DA PARTE 2 */}
</p>
            <button className="inline-block py-2.5 px-5 bg-black text-primary no-underline rounded">LER MAIS</button>
          </div>
        </div>
        <div className="relative flex items-center justify-center p-5">
          <p className='absolute top-0 z-40 text-white text-xl -rotate-2'>Transforme sua pele em arte!</p>
          <motion.a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.04, pointerEvents: "auto" }}
            whileTap={{ scale: 0.96 }}
            className='bg-secondary text-center text-white text-xl p-5 rounded-lg shadow-[0_0_30px_rgba(255,255,255,0.9)] cursor-pointer'>
            Orçamento sem compromisso
          </motion.a>
        </div>
      </motion.div>
     </div>


    </section>
  )
}

export default About
