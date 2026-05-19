import './styles/globals.css'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import GalleryFull from './pages/GalleryFull'

export default function App() {
  const [route, setRoute] = useState<string>(window.location.hash || '#home')

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash || '#home')
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const renderPage = () => {
    if (route === '#gallery-full') return <GalleryFull />
    return <HomePage />
  }

  return (
    <>
      <Navbar />
      {renderPage()}
      <Footer />
    </>
  )
}
