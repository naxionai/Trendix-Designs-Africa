import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import '../styles/Navbar.css'

const NAV_LINKS = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Gallery',  href: '#gallery' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    // navigate via hash so App renders the target page if needed
    if (window.location.hash !== href) window.location.hash = href
    // try scrolling after navigation / mount (short delay)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 150)
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <a className="navbar__logo" onClick={() => handleNavClick('#home')}>
          <span className="navbar__logo-main">TRENDIX</span>
          <span className="navbar__logo-sub">LaCouture</span>
        </a>

        {/* Desktop links */}
        <ul className="navbar__links">
          {NAV_LINKS.map(link => (
            <li key={link.label}>
              <button
                className="navbar__link"
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          className="navbar__cta"
          onClick={() => handleNavClick('#contact')}
        >
          Get In Touch
        </a>

        {/* Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {NAV_LINKS.map(link => (
          <button
            key={link.label}
            className="navbar__mobile-link"
            onClick={() => handleNavClick(link.href)}
          >
            {link.label}
          </button>
        ))}
        <button
          className="navbar__mobile-cta"
          onClick={() => handleNavClick('#contact')}
        >
          Get In Touch
        </button>
      </div>
    </nav>
  )
}
