import { useRef, useEffect } from 'react'
import contactImage from '../assets/images/contact.jpeg'
import './Contact.css'

// Simple TikTok icon (lucide doesn't have one)
function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
    </svg>
  )
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.988 14.684c-.272-.136-1.61-.797-1.86-.89-.25-.093-.43-.136-.61.136-.18.272-.7.89-.86 1.07-.16.18-.32.2-.59.068-.272-.136-1.15-.423-2.19-1.35-.81-.723-1.36-1.61-1.52-1.88-.16-.272-.017-.42.12-.556.123-.123.272-.32.41-.48.136-.16.18-.272.272-.453.09-.18.045-.34-.023-.48-.068-.136-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.136 0-.34.045-.52.272-.18.272-.68.66-.68 1.61s.7 1.87.8 2c.09.136 1.38 2.1 3.35 2.94.47.2.84.32 1.13.41.47.15.9.13 1.24.08.38-.056 1.23-.5 1.4-.99.18-.49.18-.91.13-.99-.045-.09-.2-.136-.47-.272z" />
      <path d="M20.52 3.48A11.92 11.92 0 0 0 12 0C5.373 0 0 5.373 0 12c0 2.11.55 4.17 1.6 5.98L0 24l6.24-1.62A11.92 11.92 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.21-3.48-8.52zm-8.52 19.2c-1.87 0-3.7-.51-5.29-1.48l-.38-.23-3.7.96.99-3.6-.25-.37a10.8 10.8 0 0 1-1.6-5.9c0-6 4.89-10.88 10.88-10.88 2.91 0 5.65 1.13 7.7 3.18a10.8 10.8 0 0 1 3.18 7.7c0 6-4.89 10.88-10.88 10.88z" />
    </svg>
  );
}

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container contact__inner">

        {/* Left column — info */}
        <div className="contact__info reveal">
          <p className="section-label">Get In Touch</p>
          <h2 className="contact__heading">
            Let's Build<br />
            <span className="contact__heading-serif">Something Bold</span>
          </h2>
          <span className="gold-line" />
          <p className="contact__body">
            Ready to elevate your brand? Whether it's fashion, digital strategy, or creative
            direction — Trendix is here to make your vision a reality.
          </p>

          <div className="contact__details">
            <div className="contact__detail-row">
              <span className="contact__detail-label">Email</span>
              <a href="mailto:trendixcreative@gmail.com" className="contact__detail-value">
                trendixcreative@gmail.com
              </a>
            </div>
            <div className="contact__detail-row">
              <span className="contact__detail-label">Number</span>
              <span className="contact__detail-value">+263 71 631 5942</span>
            </div>
            <div className="contact__detail-row">
              <span className="contact__detail-label">Harare Zimbabwe</span>
              <span className="contact__detail-value">Trendix Design Africa</span>
            </div>
          </div>

          {/* Social icons */}
          <div className="contact__socials">
            <a href="https://www.instagram.com/trendixpodcast" target="_blank" rel="noopener noreferrer" className="contact__social-btn" aria-label="Instagram">
              <InstagramIcon size={18} />
            </a>
            <a href="https://www.facebook.com/share/1BGCQL5BH2/" target="_blank" rel="noopener noreferrer" className="contact__social-btn" aria-label="Facebook">
              <FacebookIcon size={18} />
            </a>
            <a href="https://whatsapp.com/channel/0029VbAX2Wv0Vyc7uDT5fI0Q" target="_blank" rel="noopener noreferrer" className="contact__social-btn" aria-label="WhatsApp">
              <WhatsAppIcon size={18} />
            </a>
            <a href="https://tiktok.com/@skitkwatrendix" target="_blank" rel="noopener noreferrer" className="contact__social-btn" aria-label="TikTok">
              <TikTokIcon size={18} />
            </a>
          </div>
        </div>

        {/* Right column — image */}
        <div className="contact__image-wrap reveal">
          <img 
            src={contactImage}
            alt="Trendix Creative" 
            className="contact__image"
          />
        </div>

      </div>
    </section>
  )
}
