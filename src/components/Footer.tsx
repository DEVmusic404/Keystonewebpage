import { Link } from 'react-router-dom'
import { Mail, MapPin, Facebook } from 'lucide-react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-grid']}>
        <div className={styles['footer-brand']}>
          <h3>Keystone <span>Homeschool</span></h3>
          <p>
            The AI-powered homeschool system that puts parents in control.
            One purchase. Unlimited potential.
          </p>
        </div>

        <div className={styles['footer-col']}>
          <h4>Navigate</h4>
          <Link to="/">Home</Link>
          <Link to="/community">Community</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/buy">Get the Program</Link>
        </div>

        <div className={styles['footer-col']}>
          <h4>Product</h4>
          <Link to="/buy">Features</Link>
          <Link to="/buy">Pricing</Link>
          <Link to="/community">Resources</Link>
        </div>

        <div className={styles['footer-col']}>
          <h4>Legal</h4>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/refund">Refund Policy</Link>
        </div>

        <div className={styles['footer-col']}>
          <h4>Contact</h4>
          <a href="mailto:contact@keystonehomeschool.com">
            <Mail size={14} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
            contact@keystonehomeschool.com
          </a>
          <p style={{ color: 'var(--silver-dark)', fontSize: '0.95rem', padding: '6px 0' }}>
            <MapPin size={14} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
            United States
          </p>
        </div>
      </div>

      <div className={styles['footer-bottom']}>
        <p>&copy; {new Date().getFullYear()} Keystone Homeschool. All rights reserved.</p>
        <div className={styles['footer-socials']}>
          <a
            href="https://www.facebook.com/profile.php?id=61580581059086"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
