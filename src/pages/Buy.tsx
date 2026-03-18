import { useEffect } from 'react'
import {
  CheckCircle,
  Brain,
  Users,
  BarChart3,
  ClipboardCheck,
  Download,
  Shield,
  Infinity,
  Lock,
  Zap,
  ArrowRight,
  ShieldCheck,
  Monitor,
  Cpu,
  MemoryStick,
  HardDrive,
} from 'lucide-react'
import styles from './Buy.module.css'

const features = [
  'AI-Powered Assignment Builder',
  'Teacher Portal & Student Portal',
  'Full Grade Tracking System',
  'Progress Reports & Report Cards',
  'Export & Import Resources',
  'Unlimited Students — No Per-Seat Cost',
  'Full Editor Control Over All Content',
  'Lifetime Access — No Subscriptions',
]

const included = [
  {
    icon: <Brain size={20} />,
    title: 'AI Assignment Engine',
    desc: 'Generate custom assignments, quizzes, and reading materials powered by LLM technology.',
  },
  {
    icon: <Users size={20} />,
    title: 'Dual Portal System',
    desc: 'Separate teacher and student interfaces for seamless classroom management.',
  },
  {
    icon: <BarChart3 size={20} />,
    title: 'Grade Book & Analytics',
    desc: 'Automatic grade tracking with clear performance insights for every student.',
  },
  {
    icon: <ClipboardCheck size={20} />,
    title: 'Report Generation',
    desc: 'Create professional report cards and progress reports with a single click.',
  },
  {
    icon: <Download size={20} />,
    title: 'Export & Import',
    desc: 'Share and receive assignments and materials with other Keystone families.',
  },
  {
    icon: <Shield size={20} />,
    title: 'Complete Control',
    desc: 'Edit every AI-generated piece. You decide exactly what your students learn.',
  },
]

export default function Buy() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.lemonsqueezy.com/lemon.js'
    script.defer = true
    document.head.appendChild(script)
    return () => { script.remove() }
  }, [])

  return (
    <>
      <section className={styles['buy-hero']}>
        <div className="container">
          <h1>
            Get <span>Keystone Homeschool</span>
          </h1>
          <p>
            One purchase. Full access. No monthly fees. Everything you need
            to power your homeschool with AI.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className={styles['pricing-section']}>
        <div className="container">
          <div className={styles['pricing-wrapper']}>
            <div className={styles['pricing-card']}>
              <div className={styles['pricing-badge']}>Lifetime Access</div>
              <h2 className={styles['pricing-name']}>
                Keystone Homeschool Program
              </h2>
              <p className={styles['pricing-tagline']}>
                The complete AI-powered homeschool system
              </p>

              <div className={styles['pricing-price']}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>29.99</span>
              </div>
              <p className={styles['pricing-note']}>
                One-time payment &bull; No monthly fees ever
              </p>

              <div className={styles['pricing-divider']} />

              <div className={styles['pricing-features']}>
                {features.map((f, i) => (
                  <div key={i} className={styles['pricing-feature']}>
                    <CheckCircle size={18} />
                    {f}
                  </div>
                ))}
              </div>

              <a
                href="https://keystonehs.lemonsqueezy.com/checkout/buy/3a266a3a-1d33-4845-84ad-8c80736a425e?embed=1"
                className={`btn btn-primary ${styles['pricing-cta']} lemonsqueezy-button`}
              >
                Buy Now <ArrowRight size={18} />
              </a>

              <p className={styles['pricing-guarantee']}>
                <Lock size={14} />
                Secure checkout powered by Lemon Squeezy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className={styles['requirements-section']}>
        <div className="container">
          <h2 className="section-title">Minimum Requirements</h2>
          <p className="section-subtitle">
            Make sure your computer meets these minimum specs before purchasing.
          </p>
          <div className={styles['requirements-grid']}>
            <div className={styles['requirement-card']}>
              <div className={styles['requirement-icon']}>
                <Monitor size={28} />
              </div>
              <h3>Operating System</h3>
              <p>Windows 10/11 (64-bit)</p>
            </div>
            <div className={styles['requirement-card']}>
              <div className={styles['requirement-icon']}>
                <Cpu size={28} />
              </div>
              <h3>Processor</h3>
              <p>4+ cores (quad-core)</p>
            </div>
            <div className={styles['requirement-card']}>
              <div className={styles['requirement-icon']}>
                <MemoryStick size={28} />
              </div>
              <h3>Memory</h3>
              <p>4 GB RAM minimum</p>
            </div>
            <div className={styles['requirement-card']}>
              <div className={styles['requirement-icon']}>
                <HardDrive size={28} />
              </div>
              <h3>Storage</h3>
              <p>~1.5 GB free disk space</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className={styles['included-section']}>
        <div className="container">
          <h2 className="section-title">What's Included</h2>
          <p className="section-subtitle">
            Everything you need to run a world-class homeschool — all in one
            package.
          </p>

          <div className={styles['included-grid']}>
            {included.map((item, i) => (
              <div key={i} className={styles['included-card']}>
                <div className={styles['included-icon']}>{item.icon}</div>
                <div className={styles['included-text']}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className={styles['trust-section']}>
        <div className="container">
          <div className={styles['trust-row']}>
            <div className={styles['trust-item']}>
              <ShieldCheck size={20} />
              Secure Payment
            </div>
            <div className={styles['trust-item']}>
              <Infinity size={20} />
              Unlimited Students
            </div>
            <div className={styles['trust-item']}>
              <Zap size={20} />
              Instant Access
            </div>
            <div className={styles['trust-item']}>
              <Lock size={20} />
              One-Time Purchase
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
