import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import fashionImg from '../assets/images/trendix-fashion.jpg'
import brandImg    from '../assets/images/trendix-brand.jpg'
import autumnImg   from '../assets/images/lacouture-autumn.jpg'
import freeImg     from '../assets/images/lacouture-freespirit.jpg'
import './Projects.css'

const PROJECTS = [
  {
    id: '01',
    category: 'Fashion',
    title: 'LaCouture Collection',
    subtitle: 'Autumn / Winter 2024',
    desc: 'Contemporary designs crafted for comfort, quality and confidence. Premium fabrics, built to last.',
    tags: ['Apparel', 'Streetwear', 'Limited Edition'],
    image: autumnImg,
    wide: true,
  },
  {
    id: '02',
    category: 'Editorial',
    title: 'Free Spirit',
    subtitle: 'Special Edition · July 2025',
    desc: 'A celebration of individuality in its purest form. Unapologetic. Raw. Timeless.',
    tags: ['Photography', 'Editorial', 'Branding'],
    image: freeImg,
    wide: false,
  },
  {
    id: '03',
    category: 'Brand',
    title: 'Trendix Designs Africa',
    subtitle: 'Content & Social Marketing',
    desc: 'Strategy, creativity, results. Content marketing, social media, and digital campaigns that make your brand stand out.',
    tags: ['Marketing', 'Design', 'Strategy'],
    image: brandImg,
    wide: false,
  },
  {
    id: '04',
    category: 'Lifestyle',
    title: 'Style That Speaks',
    subtitle: 'Fashion for Today',
    desc: 'Designed for tomorrow. Trendy, quality-first pieces for the modern audience who leads, not follows.',
    tags: ['Lifestyle', 'Fashion', 'Community'],
    image: fashionImg,
    wide: true,
  },
]

export default function Projects() {
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
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">

        <div className="projects__header reveal">
          <p className="section-label">Projects & Collections</p>
          <h2 className="projects__heading">
            What We <span className="projects__heading-serif">Create</span>
          </h2>
          <p className="projects__sub">
            From fashion collections to digital campaigns — creative work that moves culture forward.
          </p>
        </div>

        <div className="projects__grid">
          {PROJECTS.map((project, i) => (
            <article
              key={project.id}
              className={`project-card reveal ${project.wide ? 'project-card--wide' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div className="project-card__img">
                <img src={project.image} alt={project.title} />
                <div className="project-card__img-overlay" />
              </div>

              {/* Content */}
              <div className="project-card__content">
                <div className="project-card__top">
                  <span className="project-card__id">{project.id}</span>
                  <span className="project-card__category">{project.category}</span>
                </div>

                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__subtitle">{project.subtitle}</p>
                <p className="project-card__desc">{project.desc}</p>

                <div className="project-card__tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-card__tag">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <button className="project-card__arrow" aria-label={`View ${project.title}`}>
                <ArrowUpRight size={18} />
              </button>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
