import { useEffect, useRef } from 'react'
import { ArrowDown } from 'lucide-react'
import heroImg from '../assets/images/lacouture-freespirit.jpg'
import '../styles/Hero.css'

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Subtle parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return
      const offset = window.scrollY * 0.35
      scrollRef.current.style.transform = `translateY(${offset}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      {/* Background image with parallax */}
      <div className="hero__bg-wrap">
        <div className="hero__bg" ref={scrollRef}>
          <img src={heroImg} alt="Trendix LaCouture — Free Spirit" />
        </div>
        <div className="hero__overlay" />
      </div>

      {/* Top bar */}
      <div className="hero__topbar container">
        <span className="hero__edition">Special Edition · July 2025</span>
        <span className="hero__tagline">Style That Speaks. You That Lead.</span>
      </div>

      {/* Main content */}
      <div className="hero__content container">
        <div className="hero__left">
          <p className="section-label">Trendix LaCouture</p>

          <h1 className="hero__headline">
            <span className="hero__headline-big">FREE</span>
            <span className="hero__headline-serif"> Spirit</span>
          </h1>

          <p className="hero__sub">
            Unapologetic. Raw. Timeless.<br />
            A celebration of individuality in its purest form.
          </p>

          <div className="hero__actions">
            <button
              className="hero__btn hero__btn--gold"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Collection
            </button>
            <button
              className="hero__btn hero__btn--outline"
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Story
            </button>
          </div>
        </div>

        {/* Side labels — magazine style */}
        <div className="hero__side-labels">
          <span className="hero__side-word">FREE</span>
          <span className="hero__side-word">SPIRIT</span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="hero__bottom container">
        <p className="hero__quote">
          "Fashion is Art. You are the Canvas."
          <span className="hero__quote-season"> — Autumn / Winter 2024</span>
        </p>
        <button className="hero__scroll-btn" onClick={scrollToAbout} aria-label="Scroll down">
          <ArrowDown size={18} />
        </button>
      </div>
    </section>
  )
}
