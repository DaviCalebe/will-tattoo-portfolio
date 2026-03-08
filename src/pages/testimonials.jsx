import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <section className='flex items-center justify-center flex-shrink-0 w-screen h-screen snap-center snap-always pb-10'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="flex items-center bg-black w-11/12 h-10/12 rounded-lg gap-2 p-2">
        <iframe className='w-full h-full' src="https://www.youtube.com/embed/jLFs3GtAldk" title='testimonials' frameborder="0" allowFullScreen></iframe>
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