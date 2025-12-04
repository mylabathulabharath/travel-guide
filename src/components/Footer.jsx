import { Mail, Phone, Facebook, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-contact-row">
          <div className="footer-contact-item">
            <Facebook size={18} />
            <span>tourTravel45</span>
          </div>
          <div className="footer-contact-item">
            <Phone size={18} />
            <span>+64 27282323</span>
          </div>
          <div className="footer-contact-item">
            <Globe size={18} />
            <span>Travel45__nz</span>
          </div>
          <div className="footer-contact-item">
            <Mail size={18} />
            <span>Travel45.nz.co</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
