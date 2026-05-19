import '../styles/Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">

        <div className="footer__brand">
          <span className="footer__logo-main">TRENDIX</span>
          <span className="footer__logo-sub">LaCouture · Trendix Designs Africa</span>
          <p className="footer__slogan">Power in Creativity</p>
        </div>

        <div className="footer__copy">
          <span>© {year} Trendix · Tendai W Masanga. All rights reserved.</span>
          <span className="footer__credit">Built by Nature · NexionAI</span>
        </div>

      </div>
    </footer>
  )
}
