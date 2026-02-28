import Masonry from 'react-masonry-css'
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

const Gallery = () => {
  return (
    <section className='flex items-center justify-center flex-shrink-0 w-screen h-screen snap-center snap-always overflow-hidden pb-10'>
      <div className="grid w-11/12 h-10/12 overflow-hidden overflow-y-auto scrollbar scrollbar-thumb-primary scrollbar-thumb-rounded-full scrollbar-track-transparent rounded-lg p-2">
        <Masonry breakpointCols={5}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
        >
          <img className="rounded-lg" src={tattoo1} alt="Tattoo 1" />
          <img className="rounded-lg" src={tattoo2} alt="Tattoo 2" />
          <img className="rounded-lg" src={tattoo3} alt="Tattoo 3" />
          <img className="rounded-lg" src={tattoo4} alt="Tattoo 4" />
          <img className="rounded-lg" src={tattoo5} alt="Tattoo 5" />
          <img className="rounded-lg" src={tattoo6} alt="Tattoo 6" />
          <img className="rounded-lg" src={tattoo7} alt="Tattoo 7" />
          <img className="rounded-lg" src={tattoo8} alt="Tattoo 8" />
          <img className="rounded-lg" src={tattoo9} alt="Tattoo 9" />
          <img className="rounded-lg" src={tattoo10} alt="Tattoo 10" />
          <img className="rounded-lg" src={tattoo11} alt="Tattoo 11" />
          <img className="rounded-lg" src={tattoo12} alt="Tattoo 12" />
          <img className="rounded-lg" src={tattoo13} alt="Tattoo 13" />
          <img className="rounded-lg" src={tattoo14} alt="Tattoo 14" />
          <img className="rounded-lg" src={tattoo15} alt="Tattoo 15" />
          <img className="rounded-lg" src={tattoo16} alt="Tattoo 16" />
          <img className="rounded-lg" src={tattoo17} alt="Tattoo 17" />
          <img className="rounded-lg" src={tattoo18} alt="Tattoo 18" />
          <img className="rounded-lg" src={tattoo19} alt="Tattoo 19" />
          <img className="rounded-lg" src={tattoo20} alt="Tattoo 20" />

        </Masonry>
      </div>
    </section>
  )
}

export default Gallery
