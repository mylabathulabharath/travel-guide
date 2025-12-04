import { Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div>
            <h3 className="footer-title">Travel.NZ</h3>
            <p className="footer-text">
              Your gateway to unforgettable adventures in New Zealand. Discover
              the beauty, culture, and excitement that awaits you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-list">
              <li className="footer-list-item">
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li className="footer-list-item">
                <Link to="/tour" className="footer-link">
                  Tour
                </Link>
              </li>
              <li className="footer-list-item">
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li className="footer-list-item">
                <Link to="/contact" className="footer-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="footer-title">Contact Us</h3>
            <ul className="footer-list">
              <li className="footer-contact-item">
                <Mail size={18} />
                <a href="mailto:info@travel.nz" className="footer-link">
                  info@travel.nz
                </a>
              </li>
              <li className="footer-contact-item">
                <Phone size={18} />
                <a href="tel:+64123456789" className="footer-link">
                  +64 123 456 789
                </a>
              </li>
              <li className="footer-social">
                <a href="#" className="footer-link">
                  <Facebook size={20} />
                </a>
                <a href="#" className="footer-link">
                  <Twitter size={20} />
                </a>
                <a href="#" className="footer-link">
                  <Instagram size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider">
          <p>&copy; 2024 Travel.NZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
