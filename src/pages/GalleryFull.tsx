import { useEffect, useState } from 'react'
import '../styles/gallery-full.css'

export default function GalleryFull() {
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    // Glob images from project root Service Images folder
    const modules = import.meta.glob('/Service Images/*.{png,jpg,jpeg,webp,gif}', { as: 'url' })
    const keys = Object.keys(modules)
    Promise.all(keys.map(k => modules[k]() as Promise<string>))
      .then(urls => setImages(urls))
      .catch(() => setImages([]))
  }, [])

  const goToContact = () => { window.location.hash = '#contact' }

  return (
    <main className="gallery-full container">
      <div className="gallery-full__header">
        <button className="gallery-full__title-button">Full Gallery</button>
        <button className="gallery-full__cta" onClick={goToContact}>Get In Touch</button>
      </div>
      {images.length === 0 ? (
        <p className="gallery-full__empty">No images found in Service Images.</p>
      ) : (
        <div className="gallery-full__grid">
          {images.map((src, i) => (
            <div key={i} className="gallery-full__item">
              <img src={src} alt={`Gallery ${i + 1}`} />
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
