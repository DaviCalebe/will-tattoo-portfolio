import React from 'react'
import Masonry from 'react-masonry-css'
import tattoo1 from "../assets/image 2.png"
import tattoo2 from "../assets/image 3.png"
import tattoo3 from "../assets/image 4.png"
import tattoo4 from "../assets/image 5.png"
import tattoo7 from "../assets/image 8.png"
import tattoo10 from "../assets/image 19.png"

const Gallery = () => {
  return (
    <section className='flex items-center justify-center flex-shrink-0 w-screen h-screen snap-center snap-always overflow-hidden'>
      <div className="grid bg-stone-950 w-11/12 h-9/12 overflow-hidden overflow-y-auto scrollbar scrollbar-w-10 scrollbar-thumb-secondary scrollbar-thumb-rounded-full scrollbar-track-primary rounded-lg p-2">
        <Masonry breakpointCols={5}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
        >
          <img src={tattoo1} alt="Tattoo 1" />
          <img src={tattoo2} alt="Tattoo 2" />
          <img src={tattoo3} alt="Tattoo 3" />
          <img src={tattoo4} alt="Tattoo 4" />
          <img src={tattoo7} alt="Tattoo 7" />
          <img src={tattoo10} alt="Tattoo 10" />
                    <img src={tattoo1} alt="Tattoo 1" />
          <img src={tattoo2} alt="Tattoo 2" />
          <img src={tattoo3} alt="Tattoo 3" />
          <img src={tattoo4} alt="Tattoo 4" />
          <img src={tattoo7} alt="Tattoo 7" />
          <img src={tattoo10} alt="Tattoo 10" />
                    <img src={tattoo1} alt="Tattoo 1" />
          <img src={tattoo2} alt="Tattoo 2" />
          <img src={tattoo3} alt="Tattoo 3" />
          <img src={tattoo4} alt="Tattoo 4" />
          <img src={tattoo7} alt="Tattoo 7" />
          <img src={tattoo10} alt="Tattoo 10" />
                    <img src={tattoo1} alt="Tattoo 1" />
          <img src={tattoo2} alt="Tattoo 2" />
          <img src={tattoo3} alt="Tattoo 3" />
          <img src={tattoo4} alt="Tattoo 4" />
          <img src={tattoo7} alt="Tattoo 7" />
          <img src={tattoo10} alt="Tattoo 10" />
        </Masonry>
      </div>
    </section>
  )
}

export default Gallery
