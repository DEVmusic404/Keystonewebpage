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
  Languages,
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
  'English & Spanish Language Support',
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
  {
    icon: <Languages size={20} />,
    title: 'English & Spanish',
    desc: 'Switch the entire program between English and Spanish anytime with one click.',
  },
]

export default function Buy() {
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
          <p className={styles['platform-note']}>
            Available for <strong>Windows</strong> &amp; <strong>Linux</strong>
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

              <div className={styles['pricing-buttons']}>
                <a
                  href="https://apps.microsoft.com/store/detail/9P9HRS797J64?cid=DevShareMCLPCS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles['platform-btn']} ${styles['platform-windows']}`}
                >
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                  </svg>
                  <div>
                    <span className={styles['btn-sub']}>Download from the</span>
                    <span className={styles['btn-main']}>Microsoft Store</span>
                  </div>
                </a>

                <a
                  href="#"
                  className={`${styles['platform-btn']} ${styles['platform-linux']}`}
                >
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                    <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 0 0-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.368 1.884 1.43.868.07 1.883-.36 2.505-.867.626-.533.852-1.266.573-1.733-.27-.468-.927-.467-1.573-.267a3.56 3.56 0 0 1-.59.134c-.735.07-1.37-.07-1.856-.534-.279-.267-.42-.6-.436-.934a3.23 3.23 0 0 0 .879-.4c1.153-.867 2.013-2.001 2.627-3.269a9.99 9.99 0 0 0 .768-2.22c.023-.13.046-.265.064-.395a.84.84 0 0 0 .088-.26c0-.197-.093-.4-.233-.535a.86.86 0 0 0-.597-.2h-.001a.86.86 0 0 0-.597.2c-.009.009-.009.009-.018.018a6.965 6.965 0 0 1-.12-1.153 10.3 10.3 0 0 0-.252-2.335c-.229-.934-.625-1.767-1.277-2.335-.711-.6-1.298-.867-1.824-.901-.527-.035-1.003.134-1.44.468-.439.329-.836.794-1.197 1.269-.116.133-.225.27-.339.4-.394-.6-.878-1.069-1.478-1.335-.599-.268-1.272-.335-2.047-.268ZM9.66 11.937a.843.843 0 0 1 .54.199c.197.133.36.333.462.534a.84.84 0 0 1-.805 1.2.832.832 0 0 1-.54-.2.87.87 0 0 1-.327-.534.84.84 0 0 1 .67-1.2Zm4.597.2a.843.843 0 0 1 .737.4c.128.197.163.468.1.734a.84.84 0 0 1-.464.534.84.84 0 0 1-.67 0 .843.843 0 0 1-.464-.534.87.87 0 0 1 .098-.734.84.84 0 0 1 .663-.401Z" />
                  </svg>
                  <div>
                    <span className={styles['btn-sub']}>Download for</span>
                    <span className={styles['btn-main']}>Linux</span>
                  </div>
                </a>
              </div>

              <p className={styles['pricing-guarantee']}>
                <Lock size={14} />
                Secure download &bull; One-time purchase
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
              <p>Windows 10/11 (64-bit) or Linux</p>
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
