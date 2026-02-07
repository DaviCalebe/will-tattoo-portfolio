function Pagination({ containerRef, active, sections }) {
  const scrollToIndex = (index) => {
    const container = containerRef.current
    if (!container) return

    const width = container.clientWidth

    container.scrollTo({
      left: index * width,
      behavior: 'smooth'
    })
  }

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-40">
      {active !== 0 && (
        <span className="font-audiowide uppercase text-primary text-4xl">
          {sections[active]?.title}
        </span>
      )}


      <div className="flex gap-3">
        {sections.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`
              w-3 h-3 rounded-full transition
              ${active === i ? 'bg-white scale-125' : 'bg-white/40'}
            `}
          />
        ))}
      </div>
    </div>
  )
}

export default Pagination
