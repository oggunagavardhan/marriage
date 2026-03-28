import HighlightsCarousel from './HighlightsCarousel'

function GallerySection({ section, onOpen }) {
  return (
    <section className="content-section" id={section.id}>
      <div className="section-copy">
        <h2>{section.title}</h2>
      </div>

      {section.featuredPhoto ? (
        <button className="featured-photo" type="button" onClick={() => onOpen(section.featuredPhoto)}>
          <img
            src={section.featuredPhoto.src}
            alt={section.featuredPhoto.title}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = 'none'
            }}
          />
          <div className="featured-photo__fallback" aria-hidden="true" />
        </button>
      ) : null}

      {section.carouselPhotos ? (
        <HighlightsCarousel
          photos={section.carouselPhotos}
          onOpen={onOpen}
          eyebrow={`${section.title} Photos`}
          title={`${section.title} Highlights`}
        />
      ) : null}

      <div className="gallery-grid gallery-grid--simple">
        {section.photos.map((photo, index) => (
          <button
            key={photo.id}
            className={`gallery-card gallery-card--${(index % 4) + 1}`}
            type="button"
            onClick={() => onOpen(photo)}
          >
            <img
              src={photo.src}
              alt={photo.title}
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = 'none'
              }}
            />
            <div className="gallery-card__fallback" aria-hidden="true" />
          </button>
        ))}
      </div>
    </section>
  )
}

export default GallerySection
