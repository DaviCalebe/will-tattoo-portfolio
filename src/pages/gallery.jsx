import Masonry from 'react-masonry-css'
import GLightbox from 'glightbox'
import "glightbox/dist/css/glightbox.min.css"
import tattoo1 from "../assets/tattoos/t-arm-angel.webp"
import tattoo2 from "../assets/tattoos/t-arm-eagle.webp"
import tattoo3 from "../assets/tattoos/t-arm-jesus.webp"
import tattoo4 from "../assets/tattoos/t-arm-lion.webp"
import tattoo5 from "../assets/tattoos/t-arm-samurai.webp"
import tattoo6 from "../assets/tattoos/t-arm-woman.webp"
import tattoo7 from "../assets/tattoos/t-back-ounce.webp"
import tattoo8 from "../assets/tattoos/t-leg-medusa.webp"
import tattoo9 from "../assets/tattoos/t-leg-scorpion.webp"
import tattoo10 from "../assets/tattoos/t-arm-tiger.webp"
import tattoo11 from "../assets/tattoos/t-arm-eagle-2.webp"
import tattoo12 from "../assets/tattoos/t-back-lion.webp"
import tattoo13 from "../assets/tattoos/t-chest-angels.webp"
import tattoo14 from "../assets/tattoos/t-leg-elephant.webp"
import tattoo15 from "../assets/tattoos/t-leg-tfcisthis.webp"
import tattoo16 from "../assets/tattoos/t-rib-tiger.webp"
import tattoo17 from "../assets/tattoos/t-arm-viking.webp"
import tattoo18 from "../assets/tattoos/t-arm-shelby.webp"
import tattoo19 from "../assets/tattoos/t-arm-dragon.webp"
import tattoo20 from "../assets/tattoos/t-arm-angel-2.webp"
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useBreakpoint } from '../hooks/useBreakpoint'

const tattoos = [
  tattoo11, tattoo14, tattoo18, tattoo7, tattoo15,
  tattoo20, tattoo6, tattoo13, tattoo1, tattoo17,
  tattoo8, tattoo10, tattoo3, tattoo5, tattoo19,
  tattoo12, tattoo2, tattoo9, tattoo4, tattoo16
]

const Gallery = () => {
  const isMobile = !useBreakpoint().md;
  const lightboxRef = useRef(null);

  useEffect(() => {
    lightboxRef.current?.destroy();

    lightboxRef.current = GLightbox({
      elements: tattoos.map((img, i) => ({
        href: img,
        type: "image",
      })),
    });

    return () => {
      lightboxRef.current?.destroy();
      lightboxRef.current = null;
    };
  }, []);

  return (
    <section id='gallery' className='flex flex-col items-center justify-center flex-shrink-0 w-screen gap-10 h-[140rem] md:h-screen snap-center snap-always overflow-hidden md:pb-10'>
      
      {isMobile && <h1 id='gallery' className="font-audiowide tracking-wide text-5xl w-full text-start p-4 text-black bg-primary">GALERIA</h1>}
      
      <div data-vertical-scroll className="grid w-11/12 h-auto md:h-10/12 md:overflow-hidden overflow-y-auto md:scrollbar md:scrollbar-thumb-primary md:scrollbar-thumb-rounded-full md:scrollbar-track-transparent rounded-lg p-2">
        <Masonry
          breakpointCols={{
            default: 5,
            1068: 4,
            768:3,
            420: 2
          }}
          className='my-masonry-grid'
          columnClassName='my-masonry-grid_column'
        >
          {tattoos.map((img, i) => (
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i}
            >
              <img
                src={img}
                alt={`Tattoo ${i + 1}`}
                className='rounded-lg mb-4 w-full'
              />
            </motion.a>
          ))}
        </Masonry>
      </div>
    </section>
  )
}

export default Gallery
