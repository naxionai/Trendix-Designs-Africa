import { useEffect, useRef } from 'react'
import { Zap, Award, ShoppingBag, Star } from 'lucide-react'
import '../styles/Services.css'

const PILLARS = [
  {
    icon: Zap,
    title: 'Trendy',
    desc: 'Always on point with the latest styles. We stay ahead of the curve so you do too.',
  },
  {
    icon: Award,
    title: 'Quality',
    desc: 'Premium fabrics and designs built to last. Every piece is crafted with intention.',
  },
  {
    icon: ShoppingBag,
    title: 'Comfort',
    desc: 'Designed for your everyday. Style should never come at the cost of how you feel.',
  },
  {
    icon: Star,
    title: 'You',
    desc: 'Express your style. Own your vibe. Trendix is a platform built around your identity.',
  },
]

const SERVICES = [
  { label: 'Fashion Design', detail: 'Apparel & Streetwear' },
  { label: 'Brand Identity', detail: 'Visual & Digital' },
  { label: 'Content Marketing', detail: 'Social & Digital Campaigns' },
  { label: 'Community Building', detail: 'Leadership & Impact' },
  { label: 'Creative Direction', detail: 'Editorial & Photography' },
  { label: 'Digital Presence', detail: 'Web & Social Media' },
]

export default function Services() {
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
    <section id="services" className="services" ref={sectionRef}>
      <div className="container">

        {/* Section header */}
        <div className="services__header reveal">
          <p className="section-label">What Drives Us</p>
          <h2 className="services__heading">
            Be Bold. Be You. <span className="services__heading-gold">Be Trendix.</span>
          </h2>
        </div>

        {/* Four pillars */}
        <div className="services__pillars">
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              className="pillar reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="pillar__icon-wrap">
                <p.icon size={22} className="pillar__icon" />
              </div>
              <h3 className="pillar__title">{p.title}</h3>
              <p className="pillar__desc">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Services list */}
        <div className="services__list reveal">
          <p className="section-label" style={{ marginBottom: 28 }}>Our Services</p>
          <div className="services__items">
            {SERVICES.map((svc, i) => (
              <div key={svc.label} className="services__item">
                <span className="services__item-num">0{i + 1}</span>
                <div className="services__item-body">
                  <span className="services__item-label">{svc.label}</span>
                  <span className="services__item-detail">{svc.detail}</span>
                </div>
                <div className="services__item-line" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
