function Lightbox({ photo, onClose }) {
  if (!photo) {
    return null
  }

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={photo.title}>
      <button className="lightbox__backdrop" type="button" onClick={onClose} aria-label="Close" />
      <div className="lightbox__content">
        <button className="lightbox__close" type="button" onClick={onClose} aria-label="Close">
          Close
        </button>
        <img
          src={photo.src}
          alt={photo.title}
          onError={(event) => {
            event.currentTarget.style.display = 'none'
          }}
        />
        <div className="lightbox__fallback" aria-hidden="true">
          <span>{photo.title}</span>
        </div>
        <p>{photo.title}</p>
      </div>
    </div>
  )
}

export default Lightbox
