function Hero({ photoSrc }) {
  return (
    <section className="hero hero--landing" id="home">
      <div className="hero__content">
        <p className="hero__eyebrow">Welcome</p>
        <h2>Welcome to Our Wedding Celebration</h2>
        <p className="hero__text">
          A warm digital space to explore the engagement, haldi, wedding morning events, wedding
          evening events, and the important details for our special day.
        </p>
      </div>

      <div className="hero__image-shell">
        <img
          className="hero__image"
          src={photoSrc}
          alt="Wedding couple highlight"
          onError={(event) => {
            event.currentTarget.style.display = 'none'
          }}
        />
      </div>
    </section>
  )
}

export default Hero
