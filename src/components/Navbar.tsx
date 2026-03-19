import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import styles from './Navbar.module.css'
import logo from '../assets/Keystone LOGO.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const isActive = (path: string) => location.pathname === path ? styles.active : ''

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles['navbar-inner']}>
          <Link to="/" className={styles['navbar-logo']}>
            <img src={logo} alt="Keystone Homeschool" className={styles['logo-img']} />
            Keystone <span className={styles['logo-accent']}>Homeschool</span>
          </Link>

          <div className={`${styles['navbar-links']} ${menuOpen ? styles.open : ''}`}>
            {menuOpen && (
              <button className={styles['mobile-close']} onClick={() => setMenuOpen(false)}>
                <X size={24} />
              </button>
            )}
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/features" className={isActive('/features')}>Features</Link>
            <Link to="/community" className={isActive('/community')}>Community</Link>
            <Link to="/contact" className={isActive('/contact')}>Contact</Link>
            <Link to="/setup" className={isActive('/setup')}>AI Setup</Link>
            <Link to="/buy" className={`btn btn-primary ${styles['navbar-cta']}`}>
              Get Started
            </Link>
          </div>

          <button className={styles['navbar-mobile-toggle']} onClick={() => setMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {menuOpen && <div className={styles['mobile-overlay']} onClick={() => setMenuOpen(false)} />}
    </>
  )
}
