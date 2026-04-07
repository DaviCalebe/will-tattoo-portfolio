import { motion } from 'framer-motion'
import { useIsMdUp } from '../hooks/useIsMdUp'

const Testimonials = () => {
  const isMobile = !useIsMdUp();

  return (
    <section id='testimonials' className='flex flex-col gap-10 items-center justify-center flex-shrink-0 w-screen h-screen snap-center snap-always pb-10'>
      {isMobile && <h1 id='testimonials' className="font-audiowide text-4xl text-black bg-primary w-full text-start p-5">DEPOIMENTOS</h1>}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="flex items-center bg-black w-11/12 h-10/12 rounded-lg gap-2 p-2">
        <iframe className='w-full h-full' src="https://www.youtube.com/embed/ob3ktDxAjWI" title='testimonials' allowFullScreen></iframe>
{/*         <div className="flex flex-col">
          <h1 className='text-2xl text-white'>Ver Transcrição</h1>
          <p className='text-primary'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis quibusdam minus quos quam sapiente, quo quia eum, harum atque reprehenderit ducimus at, et blanditiis esse corporis qui similique! Fuga, consequuntur?
          </p>
        </div> */}
      </motion.div>
    </section>
  )
}

export default Testimonials