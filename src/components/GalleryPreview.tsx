import { ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'
import autumnImg  from '../assets/images/lacouture-autumn.jpg'
import freeImg    from '../assets/images/lacouture-freespirit.jpg'
import fashionImg from '../assets/images/trendix-fashion.jpg'
import brandImg   from '../assets/images/trendix-brand.jpg'
import './GalleryPreview.css'

const IMAGES = [
  { src: autumnImg,  label: 'Autumn / Winter 2024', span: 'tall' },
  { src: freeImg,    label: 'Free Spirit',           span: 'normal' },
  { src: fashionImg, label: 'Style That Speaks',     span: 'normal' },
  { src: brandImg,   label: 'Brand Identity',        span: 'wide' },
]

export default function GalleryPreview() {
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
    <section id="gallery" className="gallery-preview" ref={sectionRef}>
      <div className="container">

        <div className="gallery-preview__header reveal">
          <div>
            <p className="section-label">Media Gallery</p>
            <h2 className="gallery-preview__heading">
              Visual <span className="gallery-preview__heading-serif">Diary</span>
            </h2>
          </div>
          <a href="#gallery-full" className="gallery-preview__link">
            View Full Gallery <ArrowRight size={16} />
          </a>
        </div>

        <div className="gallery-preview__grid">
          {IMAGES.map((img, i) => (
            <div
              key={img.label}
              className={`gallery-preview__item gallery-preview__item--${img.span} reveal`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <img src={img.src} alt={img.label} />
              <div className="gallery-preview__caption">
                <span>{img.label}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
