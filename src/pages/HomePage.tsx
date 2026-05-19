import Hero           from '../components/Hero'
import About          from '../components/About'
import Projects       from '../components/Projects'
import Services       from '../components/Services'
import GalleryPreview from '../components/GalleryPreview'
import Contact        from '../components/Contact'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Services />
      <GalleryPreview />
      <Contact />
    </main>
  )
}
