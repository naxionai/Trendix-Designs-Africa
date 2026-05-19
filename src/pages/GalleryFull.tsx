import { useEffect, useState } from 'react'
import '../styles/gallery-full.css'

export default function GalleryFull() {
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    // Glob images from project root Service Images folder
    const modules = import.meta.glob('/Service Images/*.{png,jpg,jpeg,webp,gif}', { query: '?url', import: 'default' })
    const keys = Object.keys(modules)
    Promise.all(keys.map(k => modules[k]() as Promise<string>))
      .then(urls => setImages(urls))
      .catch(() => setImages([]))
  }, [])

  return (
    <main id="gallery-full" className="gallery-full container">
      <h1 className="gallery-full__title">Gallery</h1><br />
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
