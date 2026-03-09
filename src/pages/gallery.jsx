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

const tattoos = [
  tattoo1, tattoo2, tattoo3,
  tattoo4, tattoo5, tattoo6,
  tattoo7, tattoo8, tattoo9,
  tattoo10, tattoo11, tattoo12,
  tattoo13, tattoo14, tattoo15,
  tattoo16, tattoo17, tattoo18,
  tattoo19, tattoo20,
]

const Gallery = () => {
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
    <section className='flex items-center justify-center flex-shrink-0 w-screen h-screen snap-center snap-always overflow-hidden pb-10'>
      <div data-vertical-scroll className="grid w-11/12 h-10/12 overflow-hidden overflow-y-auto scrollbar scrollbar-thumb-primary scrollbar-thumb-rounded-full scrollbar-track-transparent rounded-lg p-2">
        <Masonry breakpointCols={5}
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
              href={img}
              onClick={(e) => {
                e.preventDefault();
                lightboxRef.current?.openAt(i);
              }}
            >
              <img src={img} alt={`Tattoo ${i + 1}`} className='rounded-lg mb-4' />
            </motion.a>
          ))}
        </Masonry>
      </div>
    </section>
  )
}

export default Gallery
