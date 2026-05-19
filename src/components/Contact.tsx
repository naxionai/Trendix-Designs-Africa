import { useState, useRef, useEffect } from 'react'
import { Send } from 'lucide-react'
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

type FormState = { name: string; email: string; subject: string; message: string }

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [form, setForm]         = useState<FormState>({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    // In production: wire to your backend / emailjs / formspree
    if (form.name && form.email && form.message) {
      setSubmitted(true)
    }
  }

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
              <a href="mailto:hello@trendix.com" className="contact__detail-value">
                hello@trendix.com
              </a>
            </div>
            <div className="contact__detail-row">
              <span className="contact__detail-label">Website</span>
              <span className="contact__detail-value">www.trendix.com</span>
            </div>
            <div className="contact__detail-row">
              <span className="contact__detail-label">Follow</span>
              <span className="contact__detail-value">@Trendix.Official</span>
            </div>
          </div>

          {/* Social icons */}
          <div className="contact__socials">
            <a href="https://instagram.com/trendix.official" target="_blank" rel="noreferrer" className="contact__social-btn" aria-label="Instagram">
              <InstagramIcon size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="contact__social-btn" aria-label="Facebook">
              <FacebookIcon size={18} />
            </a>
            <a href="https://tiktok.com/@trendix.official" target="_blank" rel="noreferrer" className="contact__social-btn" aria-label="TikTok">
              <TikTokIcon size={18} />
            </a>
          </div>
        </div>

        {/* Right column — form */}
        <div className="contact__form-wrap reveal">
          {submitted ? (
            <div className="contact__success">
              <span className="contact__success-icon">✦</span>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. We'll be in touch soon.</p>
            </div>
          ) : (
            <div className="contact__form">
              <div className="contact__form-row">
                <div className="contact__field">
                  <label className="contact__label">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="contact__input"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact__field">
                  <label className="contact__label">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    className="contact__input"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="contact__field">
                <label className="contact__label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  className="contact__input"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="contact__field">
                <label className="contact__label">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  className="contact__textarea"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button className="contact__submit" onClick={handleSubmit}>
                <Send size={16} />
                Send Message
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
