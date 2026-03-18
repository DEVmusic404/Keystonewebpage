import { Link } from 'react-router-dom'
import {
  BookOpen,
  Brain,
  Users,
  Shield,
  Download,
  GraduationCap,
  BarChart3,
  ClipboardCheck,
  ArrowRight,
  CheckCircle,
  Infinity,
  DollarSign,
  Share2,
  Monitor,
  Cpu,
  MemoryStick,
  HardDrive,
} from 'lucide-react'
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className={styles.hero}>
        <div className={styles['hero-content']}>
          <div className={styles['hero-text']}>
            <div className={styles['hero-badge']}>
              <span className={styles.dot} />
              AI-Powered Homeschool System
            </div>
            <h1>
              Homeschooling,{' '}
              <span className={styles['gradient-text']}>Reimagined</span> with AI
            </h1>
            <p className={styles['hero-description']}>
              Keystone Homeschool gives parents complete control with an intelligent
              LLM-powered platform. Create assignments, track grades, generate report
              cards — all in one purchase, no monthly fees.
            </p>
            <div className={styles['hero-buttons']}>
              <Link to="/buy" className="btn btn-primary btn-large">
                Get the Program <ArrowRight size={18} />
              </Link>
              <Link to="/community" className="btn btn-secondary btn-large">
                Join the Community
              </Link>
            </div>

            <div className={styles['hero-stats']}>
              <div className={styles['hero-stat']}>
                <h4>$0</h4>
                <p>Monthly Fees</p>
              </div>
              <div className={styles['hero-stat']}>
                <h4>&infin;</h4>
                <p>Students Per License</p>
              </div>
              <div className={styles['hero-stat']}>
                <h4>100%</h4>
                <p>Parent Control</p>
              </div>
            </div>
          </div>

          <div className={styles['hero-visual']}>
            <div className={styles['hero-card']}>
              <div className={styles['hero-card-header']}>
                <span className={styles['hero-card-dot']} />
                <span className={styles['hero-card-dot']} />
                <span className={styles['hero-card-dot']} />
              </div>
              <div className={styles['hero-card-body']}>
                <div className={styles['hero-card-row']}>
                  <div className={`${styles['hero-card-row-icon']} ${styles.blue}`}>
                    <Brain size={18} />
                  </div>
                  <div className={styles['hero-card-row-text']}>
                    <h5>AI Assignment Builder</h5>
                    <p>Generate custom lessons in seconds</p>
                  </div>
                </div>
                <div className={styles['hero-card-row']}>
                  <div className={`${styles['hero-card-row-icon']} ${styles.green}`}>
                    <BarChart3 size={18} />
                  </div>
                  <div className={styles['hero-card-row-text']}>
                    <h5>Grade Tracking</h5>
                    <p>Automated progress monitoring</p>
                  </div>
                </div>
                <div className={styles['hero-card-row']}>
                  <div className={`${styles['hero-card-row-icon']} ${styles.purple}`}>
                    <ClipboardCheck size={18} />
                  </div>
                  <div className={styles['hero-card-row-text']}>
                    <h5>Report Cards</h5>
                    <p>Professional reports with one click</p>
                  </div>
                </div>
                <div className={styles['hero-card-row']}>
                  <div className={`${styles['hero-card-row-icon']} ${styles.amber}`}>
                    <Share2 size={18} />
                  </div>
                  <div className={styles['hero-card-row-text']}>
                    <h5>Export & Import</h5>
                    <p>Share materials with other families</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles['floating-badge']} ${styles['top-right']}`}>
              <CheckCircle size={16} color="#22c55e" />
              One-Time Purchase
            </div>
            <div className={`${styles['floating-badge']} ${styles['bottom-left']}`}>
              <Infinity size={16} color="#3b82f6" />
              Unlimited Students
            </div>
          </div>
        </div>
      </section>

      {/* ===== Features ===== */}
      <section className={`${styles.features} section`}>
        <div className="container">
          <h2 className="section-title">Everything You Need to Teach</h2>
          <p className="section-subtitle">
            A full-stop homeschool system powered by AI — designed to make your
            teaching life easier while giving students the best experience.
          </p>

          <div className={styles['features-grid']}>
            <div className={styles['feature-card']}>
              <div className={styles['feature-icon']}>
                <Brain size={24} />
              </div>
              <h3>AI-Powered Assignments</h3>
              <p>
                Create fully customized assignments using our LLM engine. Set the
                subject, difficulty, and style — the AI handles the rest. Edit
                every detail along the way.
              </p>
            </div>

            <div className={styles['feature-card']}>
              <div className={styles['feature-icon']}>
                <Users size={24} />
              </div>
              <h3>Teacher & Student Portals</h3>
              <p>
                Dedicated portals for teachers and students. Assign work, view
                submissions, track progress — all from an intuitive dashboard.
              </p>
            </div>

            <div className={styles['feature-card']}>
              <div className={styles['feature-icon']}>
                <BarChart3 size={24} />
              </div>
              <h3>Grade Tracking</h3>
              <p>
                Automatic grade recording and calculation. See each student's
                performance at a glance with clear, organized grade books.
              </p>
            </div>

            <div className={styles['feature-card']}>
              <div className={styles['feature-icon']}>
                <ClipboardCheck size={24} />
              </div>
              <h3>Report Cards & Progress Reports</h3>
              <p>
                Generate professional progress reports and report cards with a
                single click. Perfect for documentation and record-keeping.
              </p>
            </div>

            <div className={styles['feature-card']}>
              <div className={styles['feature-icon']}>
                <Download size={24} />
              </div>
              <h3>Export & Import</h3>
              <p>
                Share assignments and reading materials with other families via
                simple export and import. Build a library of shared resources.
              </p>
            </div>

            <div className={styles['feature-card']}>
              <div className={styles['feature-icon']}>
                <Shield size={24} />
              </div>
              <h3>Full Teacher Control</h3>
              <p>
                Every AI-generated piece is fully editable. You decide what your
                students learn. The AI is a tool — you are the teacher.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Value Props ===== */}
      <section className={`${styles['value-props']} section`}>
        <div className="container">
          <h2 className="section-title">Why Families Choose Keystone</h2>
          <p className="section-subtitle">
            No subscriptions. No hidden costs. Just a powerful system designed
            to put parents first.
          </p>
          <div className={styles['value-grid']}>
            <div className={styles['value-card']}>
              <div className={styles['value-number']}>
                <DollarSign size={40} style={{ display: 'inline' }} />
              </div>
              <h3>One-Time Purchase</h3>
              <p>
                Buy once and own it forever. No monthly fees, no annual
                renewals, no surprise charges.
              </p>
            </div>
            <div className={styles['value-card']}>
              <div className={styles['value-number']}>&infin;</div>
              <h3>Unlimited Students</h3>
              <p>
                Add as many students as you need — whether you have 1 child or 10.
                No per-seat pricing.
              </p>
            </div>
            <div className={styles['value-card']}>
              <div className={styles['value-number']}>
                <Brain size={40} style={{ display: 'inline' }} />
              </div>
              <h3>LLM-Powered</h3>
              <p>
                Harness cutting-edge AI to generate assignments, quizzes, and
                reading materials tailored to your curriculum.
              </p>
            </div>
            <div className={styles['value-card']}>
              <div className={styles['value-number']}>
                <Share2 size={40} style={{ display: 'inline' }} />
              </div>
              <h3>Share & Collaborate</h3>
              <p>
                Export assignments and import materials from other families. Build
                a homeschool community together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== How It Works ===== */}
      <section className={`${styles['how-it-works']} section`}>
        <div className="container">
          <h2 className="section-title">Get Started in 3 Steps</h2>
          <p className="section-subtitle">
            From purchase to your first lesson in minutes — it's that simple.
          </p>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles['step-number']}>1</div>
              <h3>Purchase the Program</h3>
              <p>
                One-time purchase gives you lifetime access. No subscriptions,
                no hidden costs.
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles['step-number']}>2</div>
              <h3>Set Up Your Classroom</h3>
              <p>
                Add your students, configure subjects, and customize your
                teaching dashboard.
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles['step-number']}>3</div>
              <h3>Start Teaching</h3>
              <p>
                Use the AI to generate assignments, track grades, and create
                reports — all from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== System Requirements ===== */}
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

      {/* ===== Video Promo ===== */}
      <section className={styles['video-section']}>
        <div className="container">
          <h2 className="section-title">See Keystone in Action</h2>
          <p className="section-subtitle">
            Watch how Keystone Homeschool makes teaching easier, smarter, and
            more effective.
          </p>
          <div className={styles['video-wrapper']}>
            <iframe
              src="https://www.youtube.com/embed/kT8kEnkz3Iw?si=8wSv6Oe47exx5RNQ"
              title="Keystone Homeschool Promo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ===== Pricing Banner ===== */}
      <section className={styles['pricing-banner']}>
        <div className="container">
          <div className={styles['pricing-banner-content']}>
            <div className={styles['pricing-banner-text']}>
              <span className={styles['pricing-banner-label']}>one-time purchase</span>
              <h2>Get Everything for Just</h2>
              <p>No subscriptions. No hidden fees. Pay once, own it forever.</p>
            </div>
            <div className={styles['pricing-banner-price']}>
              <span className={styles['pricing-banner-currency']}>$</span>
              <span className={styles['pricing-banner-amount']}>29.99</span>
            </div>
            <Link to="/buy" className="btn btn-primary btn-large">
              Buy Now <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className={styles['cta-section']}>
        <div className="container">
          <div className={styles['cta-content']}>
            <h2>
              Ready to Transform Your{' '}
              <span>Homeschool?</span>
            </h2>
            <div className={styles['cta-buttons']}>
              <Link to="/buy" className="btn btn-primary btn-large">
                Get the Program <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-large">
                Have Questions? Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
