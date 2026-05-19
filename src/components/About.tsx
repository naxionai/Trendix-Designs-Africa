import { useEffect, useRef } from 'react'
import autumnImg from '../assets/images/lacouture-autumn.jpg'
import './About.css'

const STATS = [
  { value: '3+',   label: 'Years in Fashion' },
  { value: '500+', label: 'Pieces Created' },
  { value: '12+',  label: 'Collections' },
  { value: '4K+',  label: 'Community' },
]

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container about__inner">

        {/* Image column */}
        <div className="about__image-col reveal">
          <div className="about__img-frame">
            <img src={autumnImg} alt="Trendix LaCouture Autumn/Winter 2024" />
            <div className="about__img-badge">
              <span className="about__img-badge-text">Autumn / Winter</span>
              <span className="about__img-badge-year">2024</span>
            </div>
          </div>
        </div>

        {/* Text column */}
        <div className="about__text-col">
          <p className="section-label reveal">About Trendix</p>

          <h2 className="about__heading reveal">
            <span>Power in</span>
            <span className="about__heading-serif"> Creativity</span>
          </h2>

          <span className="gold-line reveal" />

          <p className="about__body reveal">
            Trendix is the creative vision of <strong>Tendai W Masanga</strong> — a dynamic,
            visionary young leader driven by passion and purpose. Known for his energy,
            authenticity, and natural charisma, Tendai brings ideas to life through innovation
            and bold thinking.
          </p>

          <p className="about__body reveal">
            With a deep passion for design, leadership, and community impact, Trendix
            continuously seeks new ways to inspire, create, and influence positive change.
            Every piece reflects a blend of creativity, dedication, and forward-thinking
            that resonates with modern audiences.
          </p>

          {/* Stats row */}
          <div className="about__stats reveal">
            {STATS.map(stat => (
              <div key={stat.label} className="about__stat">
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Full-width marquee */}
      <div className="about__marquee">
        <div className="about__marquee-track">
          {['Strategy', 'Creativity', 'Results', 'That\'s Trendix', 'Strategy', 'Creativity', 'Results', 'That\'s Trendix'].map((word, i) => (
            <span key={i} className="about__marquee-word">
              {word} <span className="about__marquee-dot">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
