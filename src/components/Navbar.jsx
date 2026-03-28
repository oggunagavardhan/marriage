import { useEffect, useState } from 'react'

function Navbar({ items, activeSection, onSelect, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header className="topbar">
        <button
          className={`topbar__toggle ${menuOpen ? 'is-open' : ''}`}
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>

        <button className="topbar__brand" type="button" onClick={() => onSelect('home')}>
          <span className="topbar__brand-mark">N</span>
          <span>Wedding Celebration</span>
        </button>

        <nav className="topbar__nav" aria-label="Wedding sections">
          {items.map((item) => (
            <button
              key={item.id}
              className={`topbar__link ${activeSection === item.id ? 'is-active' : ''}`}
              type="button"
              onClick={() => onSelect(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button className="topbar__link topbar__link--logout" type="button" onClick={onLogout}>
            Logout
          </button>
        </nav>
      </header>

      <div className={`mobile-drawer ${menuOpen ? 'is-open' : ''}`}>
        <div className="mobile-drawer__panel">
          {items.map((item) => (
            <button
              key={item.id}
              className={`mobile-drawer__link ${activeSection === item.id ? 'is-active' : ''}`}
              type="button"
              onClick={() => {
                onSelect(item.id)
                setMenuOpen(false)
              }}
            >
              {item.label}
            </button>
          ))}
          <button
            className="mobile-drawer__link topbar__link--logout"
            type="button"
            onClick={() => {
              onLogout()
              setMenuOpen(false)
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {menuOpen ? (
        <button
          className="mobile-drawer__backdrop"
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
    </>
  )
}

export default Navbar
