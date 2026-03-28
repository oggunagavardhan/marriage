function LocationSection({ location }) {
  return (
    <section className="content-section" id="location">
      <div className="section-copy">
        <p className="section-copy__eyebrow">Location</p>
        <h2>{location.title}</h2>
        <p>{location.subtitle}</p>
        <p>{location.address}</p>
      </div>

      <div className="location-card">
        <iframe
          title="Wedding location map"
          src={location.mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  )
}

export default LocationSection
