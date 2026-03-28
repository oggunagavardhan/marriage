import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ConfettiOverlay from './components/ConfettiOverlay'
import HighlightsCarousel from './components/HighlightsCarousel'
import GallerySection from './components/GallerySection'
import EventSection from './components/EventSection'
import LocationSection from './components/LocationSection'
import ContactSection from './components/ContactSection'
import Lightbox from './components/Lightbox'
import Footer from './components/Footer'
import {
  contactDetails,
  eveningEvents,
  gallerySections,
  highlightPhotos,
  location,
  morningEvents,
  navItems,
} from './data/weddingData'

function App() {
  const [showCelebration, setShowCelebration] = useState(true)
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [activeSection, setActiveSection] = useState('home')
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [showLogoutPrompt, setShowLogoutPrompt] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setShowCelebration(false), 4200)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedPhoto(null)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const activeGallery = gallerySections.find((section) => section.id === activeSection)

  const renderSection = () => {
    if (activeSection === 'home') {
      return (
        <div className="content-stack">
          <Hero photoSrc={highlightPhotos[0].src} />
          <section className="content-section content-section--compact">
            <HighlightsCarousel photos={highlightPhotos} onOpen={setSelectedPhoto} />
          </section>
        </div>
      )
    }

    if (activeGallery) {
      return <GallerySection section={activeGallery} onOpen={setSelectedPhoto} />
    }

    if (activeSection === 'morning-events') {
      return (
        <EventSection
          id="morning-events"
          title={morningEvents.title}
          items={morningEvents.items}
          onOpen={setSelectedPhoto}
        />
      )
    }

    if (activeSection === 'evening-events') {
      return (
        <EventSection
          id="evening-events"
          title={eveningEvents.title}
          items={eveningEvents.items}
          onOpen={setSelectedPhoto}
        />
      )
    }

    if (activeSection === 'location') {
      return <LocationSection location={location} />
    }

    if (activeSection === 'contact') {
      return <ContactSection contactDetails={contactDetails} />
    }

    return null
  }

  if (!isLoggedIn) {
    return (
      <div className="page-shell page-shell--home">
        <div className="login-screen">
          <div className="login-screen__card">
            <p className="section-copy__eyebrow">Wedding Gallery</p>
            <h1>{showThankYou ? 'Thank You' : 'Logged Out'}</h1>
            <p>
              {showThankYou
                ? 'Thank you for visiting this wedding website.'
                : 'Please click below to enter the wedding website again.'}
            </p>
            <button
              className="button button--primary"
              type="button"
              onClick={() => {
                setIsLoggedIn(true)
                setActiveSection('home')
                setShowThankYou(false)
              }}
            >
              Login Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`page-shell ${activeSection === 'home' ? 'page-shell--home' : ''}`}>
      {showCelebration ? <ConfettiOverlay /> : null}

      <Navbar
        items={navItems}
        activeSection={activeSection}
        onSelect={setActiveSection}
        onLogout={() => setShowLogoutPrompt(true)}
      />

      <main className="main-panel main-panel--topnav">
        <div className="main-panel__inner">{renderSection()}</div>
      </main>

      {activeSection === 'home' ? (
        <div className="post-footer-info">
          <div className="post-footer-info__inner">
            <LocationSection location={location} />
            <ContactSection contactDetails={contactDetails} />
          </div>
        </div>
      ) : null}

      {!['engagement', 'morning-events', 'evening-events', 'location', 'contact'].includes(activeSection) ? (
        <Footer />
      ) : null}

      {showLogoutPrompt ? (
        <div className="logout-modal">
          <button
            className="logout-modal__backdrop"
            type="button"
            aria-label="Close logout message"
            onClick={() => setShowLogoutPrompt(false)}
          />
          <div className="logout-modal__card">
            <h2>Leave this website?</h2>
            <div className="logout-modal__actions">
              <button
                className="button button--primary"
                type="button"
                onClick={() => {
                  setSelectedPhoto(null)
                  setActiveSection('home')
                  setIsLoggedIn(false)
                  setShowThankYou(true)
                  setShowLogoutPrompt(false)
                }}
              >
                Yes
              </button>
              <button
                className="button button--secondary"
                type="button"
                onClick={() => setShowLogoutPrompt(false)}
              >
                Keep
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <Lightbox photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
    </div>
  )
}

export default App
