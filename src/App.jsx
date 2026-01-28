import Intro from './components/intro'
import Gallery from './components/gallery'
import Testimonials from './components/testimonials'
import About from './components/about'
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
    <main
      ref={stageRef}
      id="stage"
      className="
        h-screen w-screen
        flex flex-row
        overflow-x-scroll overflow-y-hidden
        snap-x snap-mandatory
      "
    >
      <Intro />
      <Gallery />
      <Testimonials />
      <About />
    </main>
  )
}


export default App
