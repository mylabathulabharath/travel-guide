import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Home, Globe, Info, Phone } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'HOME', icon: Home },
    { path: '/tour', label: 'TOUR', icon: Globe },
    { path: '/about', label: 'ABOUT US', icon: Info },
    { path: '/contact', label: 'CONTACT', icon: Phone },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-inner">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="navbar-logo-container">
              <div className="navbar-logo-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 7H5C3.9 7 3 7.9 3 9V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V9C21 7.9 20.1 7 19 7ZM19 19H5V9H19V19Z" fill="#8B4513"/>
                  <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" fill="#8B4513"/>
                  <path d="M12 11C13.1046 11 14 11.8954 14 13C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13C10 11.8954 10.8954 11 12 11Z" fill="#8B4513"/>
                  <path d="M7 5H17V7H7V5Z" fill="#8B4513"/>
                </svg>
              </div>
              <div className="navbar-logo-text">TRAVEL.NZ</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-menu">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link 
                  key={item.path} 
                  to={item.path}
                  className={cn(
                    'navbar-menu-item',
                    isActive(item.path) && 'navbar-menu-item-active'
                  )}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <button
            className="navbar-mobile-btn md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="navbar-menu-mobile">
          <div className="navbar-menu-mobile-content">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'navbar-link',
                    isActive(item.path) && 'navbar-link-active'
                  )}
                >
                  <Icon size={18} className="mr-2" />
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
