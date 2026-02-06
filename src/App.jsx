import Intro from './pages/intro'
import Gallery from './pages/gallery'
import Testimonials from './pages/testimonials'
import About from './pages/about'
import Topbar from './components/topbar'
import background from './assets/background.jpg'
import { useRef } from "react"
import { useHorizontalScroll } from './hooks/useHorizontalScroll'

function App() {
  const stageRef = useRef(null)
  useHorizontalScroll(stageRef)

  return (
    <div className='relative min-h-screen overflow-hidden'>
      <Topbar />
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
