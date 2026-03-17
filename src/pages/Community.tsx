import { Link } from 'react-router-dom'
import {
  Users,
  MessageCircle,
  Share2,
  BookOpen,
  Heart,
  Lightbulb,
  Globe,
  Handshake,
  ArrowRight,
  Facebook,
} from 'lucide-react'
import styles from './Community.module.css'

export default function Community() {
  return (
    <>
      <section className={styles['community-hero']}>
        <div className="container">
          <h1>
            Join the <span>Keystone</span> Community
          </h1>
          <p>
            Connect with homeschool families, share resources, exchange ideas,
            and grow together. You're never alone on this journey.
          </p>
        </div>
      </section>

      {/* Facebook Community Banner */}
      <section className={styles['fb-banner']}>
        <div className="container">
          <div className={styles['fb-banner-inner']}>
            <div className={styles['fb-banner-icon']}>
              <Facebook size={40} />
            </div>
            <div className={styles['fb-banner-text']}>
              <h2>Join Us on Facebook</h2>
              <p>
                Connect with other Keystone families, share ideas, ask questions,
                and be part of our growing homeschool community.
              </p>
            </div>
            <a
              href="https://www.facebook.com/profile.php?id=61580581059086"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-primary btn-large ${styles['fb-banner-btn']}`}
            >
              Join the Community <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Why Community */}
      <section className={styles['why-community']}>
        <div className="container">
          <h2 className="section-title">Better Together</h2>
          <p className="section-subtitle">
            Homeschooling doesn't have to be a solo effort. Our community brings
            families together to share, support, and inspire.
          </p>

          <div className={styles['community-features-grid']}>
            <div className={styles['community-feature-card']}>
              <div className={styles['community-feature-icon']}>
                <Share2 size={28} />
              </div>
              <h3>Share Resources</h3>
              <p>
                Export and import assignments, lesson plans, and reading
                materials directly through the Keystone platform.
              </p>
            </div>

            <div className={styles['community-feature-card']}>
              <div className={styles['community-feature-icon']}>
                <MessageCircle size={28} />
              </div>
              <h3>Discussion & Support</h3>
              <p>
                Connect with other homeschool families, ask questions, share tips,
                and get advice from experienced parents.
              </p>
            </div>

            <div className={styles['community-feature-card']}>
              <div className={styles['community-feature-icon']}>
                <Lightbulb size={28} />
              </div>
              <h3>Curriculum Ideas</h3>
              <p>
                Discover new teaching approaches, subject ideas, and creative
                ways to use the AI tools in your homeschool.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className={styles.highlights}>
        <div className="container">
          <h2 className="section-title">What Makes Our Community Special</h2>
          <p className="section-subtitle">
            A supportive space built around the shared goal of giving children
            the best education possible.
          </p>

          <div className={styles['highlights-grid']}>
            <div className={styles['highlight-card']}>
              <div className={styles['highlight-icon']}>
                <BookOpen size={22} />
              </div>
              <div className={styles['highlight-text']}>
                <h3>Resource Library</h3>
                <p>
                  Access shared assignments and materials from other Keystone
                  families. Import them directly into your program.
                </p>
              </div>
            </div>

            <div className={styles['highlight-card']}>
              <div className={styles['highlight-icon']}>
                <Handshake size={22} />
              </div>
              <div className={styles['highlight-text']}>
                <h3>Co-op Friendly</h3>
                <p>
                  Perfect for homeschool co-ops. Share lesson plans across your
                  group so everyone stays aligned.
                </p>
              </div>
            </div>

            <div className={styles['highlight-card']}>
              <div className={styles['highlight-icon']}>
                <Heart size={22} />
              </div>
              <div className={styles['highlight-text']}>
                <h3>Parent-First Design</h3>
                <p>
                  This community is built by parents, for parents. Every feature
                  and discussion focuses on what matters most.
                </p>
              </div>
            </div>

            <div className={styles['highlight-card']}>
              <div className={styles['highlight-icon']}>
                <Globe size={22} />
              </div>
              <div className={styles['highlight-text']}>
                <h3>Growing Network</h3>
                <p>
                  Help us grow a network of homeschool families.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles['community-cta']}>
        <div className="container">
          <h2>Ready to Connect?</h2>
          <p>
            Get the Keystone program and unlock access to our growing community
            of homeschool families.
          </p>
          <div className={styles['cta-buttons']}>
            <Link to="/buy" className="btn btn-primary btn-large">
              Get Started <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn btn-secondary btn-large">
              Ask Us Anything
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
