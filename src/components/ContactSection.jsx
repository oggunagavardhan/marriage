function ContactSection({ contactDetails }) {
  return (
    <section className="content-section" id="contact">
      <div className="section-copy">
        <p className="section-copy__eyebrow">Contact</p>
        <h2>Contact Information</h2>
      </div>

      <div className="contact-grid">
        <a className="contact-card" href={`tel:${contactDetails.phone1.replace(/\s+/g, '')}`}>
          <span>Phone Number 1</span>
          <strong>{contactDetails.phone1}</strong>
        </a>
        <a className="contact-card" href={`tel:${contactDetails.phone2.replace(/\s+/g, '')}`}>
          <span>Phone Number 2</span>
          <strong>{contactDetails.phone2}</strong>
        </a>
        <a className="contact-card" href={`mailto:${contactDetails.email}`}>
          <span>Email ID</span>
          <strong>{contactDetails.email}</strong>
        </a>
      </div>
    </section>
  )
}

export default ContactSection
