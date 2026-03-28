import { useState } from 'react'

function EventImageCard({ item, onOpen }) {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0)
  const activePhoto = item.photos[activePhotoIndex]

  const showPrevious = () => {
    setActivePhotoIndex((current) => (current - 1 + item.photos.length) % item.photos.length)
  }

  const showNext = () => {
    setActivePhotoIndex((current) => (current + 1) % item.photos.length)
  }

  return (
    <article className="event-stack__item">
      <h3 className="event-stack__title">{item.title}</h3>
      <div className="event-image-wrap">
        <button
          className="event-image-wrap__nav event-image-wrap__nav--prev"
          type="button"
          aria-label={`Previous image for ${item.title}`}
          onClick={showPrevious}
        >
          &lt;
        </button>

        <button className="event-carousel__image" type="button" onClick={() => onOpen(activePhoto)}>
          <img
            src={activePhoto.src}
            alt={activePhoto.title}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = 'none'
            }}
          />
          <div className="event-carousel__fallback" aria-hidden="true">
            <span>{item.title}</span>
          </div>
        </button>

        <button
          className="event-image-wrap__nav event-image-wrap__nav--next"
          type="button"
          aria-label={`Next image for ${item.title}`}
          onClick={showNext}
        >
          &gt;
        </button>
      </div>
    </article>
  )
}

function EventSection({ id, title, items, onOpen }) {
  return (
    <section className="content-section" id={id}>
      <div className="section-copy">
        <h2>{title}</h2>
      </div>

      <div className="event-stack">
        {items.map((item) => (
          <EventImageCard key={item.id} item={item} onOpen={onOpen} />
        ))}
      </div>
    </section>
  )
}

export default EventSection
