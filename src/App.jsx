import Intro from './components/intro'
import Gallery from './components/gallery'
import Testimonials from './components/testimonials'
import About from './components/about'
import background from './assets/background.jpg'
import star from './assets/star.png'
import calendar from './assets/calendar.png'
import whatsapp from './assets/whatsapp.png'
import instagram from './assets/instagram.png'
import { useEffect, useRef } from "react"

function App() {
  const stageRef = useRef(null)

  useEffect(() => {
    const el = stageRef.current

    const onWheel = (e) => {
      e.preventDefault()
      el.scrollBy({
        left: e.deltaY,
        behavior: "auto",
      })
    }

    el.addEventListener("wheel", onWheel, { passive: false })

    return () => el.removeEventListener("wheel", onWheel)
  }, [])

  return (
    <div className='relative min-h-screen overflow-hidden'>
      <div className="flex justify-between px-16 fixed top-0 w-full h-10 bg-transparent">
        <div className="flex gap-4">
          <img src={star} alt="star" className="w-9 h-9" />
          <img src={star} alt="star" className="w-9 h-9" />
          <img src={star} alt="star" className="w-9 h-9" />
          <img src={star} alt="star" className="w-9 h-9" />
          <img src={star} alt="star" className="w-9 h-9" />
        </div>

        <div className="flex items-center justify-evenly bg-primary w-52 h-10 rounded-b-lg">
          <img src={calendar} alt="calendar" className="w-8 h-8" />
          <img src={whatsapp} alt="whatsapp" className="w-8 h-8" />
          <img src={instagram} alt="instagram" className="w-8 h-8" />
        </div>

      </div>

      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${background})`}}
      />    
      <main
        ref={stageRef}
        id="stage"
        className="
          h-screen w-screen
          flex flex-row
          overflow-x-scroll overflow-y-hidden
          scroll-smooth
          snap-x snap-mandatory
        "
      >
        <Intro />
        <Gallery />
        <Testimonials />
        <About />
      </main>
    </div>
  )
}


export default App
