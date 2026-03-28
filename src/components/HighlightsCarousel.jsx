import { useEffect, useState } from 'react'

function HighlightsCarousel({
  photos,
  onOpen,
  eyebrow = 'Highlight Photos',
  title = 'Featured wedding moments',
}) {
  const [activeIndex, setActiveIndex] = useState(0)

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + photos.length) % photos.length)
  }

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % photos.length)
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      showNext()
    }, 4000)

    return () => window.clearInterval(timer)
  }, [photos.length])

  const activePhoto = photos[activeIndex]

  return (
    <section className="highlights highlights--featured">
      <div className="section-copy">
        <p className="section-copy__eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>

      <div className="highlight-stage-wrap">
        <button
          className="highlight-stage__nav highlight-stage__nav--prev"
          type="button"
          aria-label="Previous highlight"
          onClick={showPrevious}
        >
          &lt;
        </button>

        <button className="highlight-stage" type="button" onClick={() => onOpen(activePhoto)}>
          <img src={activePhoto.src} alt={activePhoto.title} loading="lazy" />
          <div className="highlight-stage__fallback" aria-hidden="true">
            <span>{activePhoto.title}</span>
          </div>
          <div className="highlight-stage__overlay">
            <strong>{activePhoto.title}</strong>
            <span>Auto-playing highlight preview</span>
          </div>
        </button>

        <button
          className="highlight-stage__nav highlight-stage__nav--next"
          type="button"
          aria-label="Next highlight"
          onClick={showNext}
        >
          &gt;
        </button>
      </div>

      <div className="highlight-dots" aria-label="Highlight progress">
        {photos.map((photo, index) => (
          <button
            key={photo.id}
            className={`highlight-dots__dot ${index === activeIndex ? 'is-active' : ''}`}
            type="button"
            aria-label={`Show ${photo.title}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default HighlightsCarousel
