import Masonry from 'react-masonry-css'
import GLightbox from 'glightbox'
import "glightbox/dist/css/glightbox.min.css"
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useBreakpoint } from '../hooks/useBreakpoint'
import starFulfilled from '../assets/black-star-fulfilled.png'
import starOutlined from '../assets/black-star-outlined.png'
import video from "../assets/coringa-arlequina2.mp4"

const Gallery = ({ galleryPage }) => {
  const videos = Array.from({ length: 10 }, () => video);
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    if (!refs.current[active]) return;

    refs.current.forEach((video, i) => {
      if (!video) return;

      if (i === active) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [active]);

  const handleEnded = () => {
    setActive((prev) => (prev + 1) % videos.length);
  };

  const visible = Array.from({ length: 5 }, (_, i) =>
    (active + i - 2 + videos.length) % videos.length
  );

  const [currentPage, setCurrentPage] = useState(0);

  const isMobile = !useBreakpoint().md;
  const lightboxRef = useRef(null);

  return (
    <section id='gallery' className='scroll-mt-18 md:scroll-mt-0 flex flex-col items-center md:justify-center flex-shrink-0 w-screen gap-10 min-h-screen md:h-screen snap-center snap-always overflow-hidden md:pb-10'>
      
      {isMobile &&
      
        <div className="flex justify-between w-full p-4 text-black bg-primary">
            <h1 className="font-audiowide tracking-wide text-5xl">
              GALERIA
            </h1>
            <div className="flex justify-center items-center gap-2">
              <img src={starFulfilled} className='w-10 h-10' alt="Star" />
              <img src={starOutlined} className='w-10 h-10' alt="Star" />
              <img src={starOutlined} className='w-10 h-10' alt="Star" />
            </div>
        </div>
      }
      
      <div className="grid w-11/12 h-auto md:h-10/12 md:overflow-hidden overflow-y-auto md:scrollbar md:scrollbar-thumb-primary md:scrollbar-thumb-rounded-full md:scrollbar-track-transparent rounded-lg p-2">



    <div className="flex justify-center items-center gap-6 h-full overflow-hidden">
      {visible.map((index, position) => {
        const isCenter = position === 2;
        const distance = Math.abs(position - 2);

        return (
          <div
            key={index}
            className={`
              relative overflow-hidden rounded-md transition-all duration-700 ease-in-out
              aspect-[305/600]
              ${
                isCenter
                  ? "w-[clamp(180px,22vw,305px)] z-20 shadow-2xl"
                  : distance === 1
                  ? "w-[clamp(140px,19vw,240px)]"
                  : "w-[clamp(100px,15vw,200px)]"
              }
            `}
          >
            <video
              ref={(el) => (refs.current[index] = el)}
              muted
              playsInline
              preload="metadata"
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
              onEnded={isCenter ? handleEnded : undefined}
              className="w-full h-full object-cover"
            >
              <source src={videos[index]} type="video/mp4" />
            </video>

            {/* Overlay */}
            {!isCenter && (
              <div
                className={`
                  absolute inset-0 pointer-events-none transition-all duration-700
                  ${
                    distance === 1
                      ? "bg-black/40"
                      : "bg-black/70"
                  }
                `}
              />
            )}
          </div>
        );
      })}
    </div>
  );
      </div>
    </section>
  )
}

export default Gallery