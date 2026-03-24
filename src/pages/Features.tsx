import { Link } from 'react-router-dom'
import {
  Sparkles,
  Scale,
  Share2,
  Trophy,
  ClipboardList,
  PenTool,
  BookOpen,
  CalendarDays,
  MessageCircle,
  Palette,
  Monitor,
  Wifi,
  Download,
  RefreshCw,
  ArrowRight,
  CheckCircle,
  Edit3,
  Printer,
  Users,
  Star,
  Bot,
  Languages,
} from 'lucide-react'
import styles from './Features.module.css'

const highlights = [
  {
    icon: <Sparkles size={28} />,
    title: 'AI Assignment Generator',
    desc: 'Generate complete assignments with reading material in seconds. Parents have full control — edit every question, every answer, every piece of text. Use it as-is or as a starting template.',
  },
  {
    icon: <Scale size={28} />,
    title: 'Weighted Grading',
    desc: 'Weight grades differently depending on what matters most to your family. Prioritize tests over homework, or balance everything equally — it\u2019s entirely up to you.',
  },
  {
    icon: <Trophy size={28} />,
    title: 'Reward System',
    desc: 'Motivate students with a fun reward system. Parents fill it with anything they want — movie night, game night, a day off school, or any creative prize to keep students working toward something exciting.',
  },
  {
    icon: <ClipboardList size={28} />,
    title: 'Grade Tracking & Report Cards',
    desc: 'Easily track all grades in one place. Generate and print professional report cards whenever you need them — perfect for records and co-ops.',
  },
  {
    icon: <PenTool size={28} />,
    title: 'Writing Assignments',
    desc: 'Assign writing prompts and students submit their work directly. Teachers can grade submissions and leave detailed comments — all within the program.',
  },
  {
    icon: <BookOpen size={28} />,
    title: 'Weekly Spelling Words',
    desc: 'Set up weekly spelling word lists with the option to include definitions. A simple, structured way to build vocabulary week by week.',
  },
  {
    icon: <CalendarDays size={28} />,
    title: 'Lesson Planner',
    desc: 'Plan out an entire week of topics to cover and teach. The AI can help generate lesson plans so you can stay organized and on track.',
  },
  {
    icon: <Share2 size={28} />,
    title: 'Export & Share',
    desc: 'Export assignments and tests to share with other Keystone families. Move your entire classroom to a new device with a single backup file — students, assignments, grades, and all.',
  },  {
    icon: <Languages size={28} />,
    title: 'English & Spanish',
    desc: 'Switch the entire program between English and Spanish with one click. Toggle back and forth anytime \u2014 perfect for bilingual families or Spanish-speaking households.',
  },]

const dashboardFeatures = [
  { icon: <Palette size={14} />, text: '8 color themes — Ocean Blue, Royal Purple, Forest Green, and more' },
  { icon: <Monitor size={14} />, text: '3 display modes — Light, Dark, and Mid' },
  { icon: <Star size={14} />, text: '3 layout options — Classic Sidebar, Compact Icons, or Top Navigation' },
  { icon: <CheckCircle size={14} />, text: 'Toggle dashboard widgets on or off to show only what you need' },
]

export default function Features() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles['hero-content']}>
          <h1>
            Everything You Need to <span>Homeschool</span>
          </h1>
          <p>
            Keystone Homeschool is a complete, AI-powered teaching system that
            gives parents full control. From generating assignments to tracking
            grades, rewarding students, and connecting devices — it&rsquo;s all
            built in.
          </p>
          <Link to="/buy" className="btn btn-primary">
            Get Keystone — $29.99 <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className={styles.section}>
        <div className={styles['content-wide']}>
          <h2 className={styles['section-title']}>
            Powerful Features, <span>Simple to Use</span>
          </h2>
          <p className={styles['section-subtitle']}>
            Everything is designed to save you time and give you complete
            control over your child&rsquo;s education.
          </p>
          <div className={styles['features-grid']}>
            {highlights.map((f, i) => (
              <div key={i} className={styles['feature-card']}>
                <div className={styles['feature-icon']}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Parent Control */}
      <section className={`${styles.section} ${styles.alt}`}>
        <div className={styles.content}>
          <div className={styles['detail-block']}>
            <div className={styles['detail-icon']}>
              <Edit3 size={32} />
            </div>
            <div>
              <h2>Full Parent Control Over Assignments</h2>
              <p>
                When the AI generates an assignment, you&rsquo;re not locked
                into anything. Every piece of the assignment is fully
                editable — the reading material, each question, every answer
                option, and the correct answer itself.
              </p>
              <p>
                Use the generator to create a perfect assignment, or treat it
                as a starting template and customize everything it produces.
                You decide what your students learn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Network */}
      <section className={styles.section}>
        <div className={styles.content}>
          <div className={styles['detail-block']}>
            <div className={styles['detail-icon']}>
              <Wifi size={32} />
            </div>
            <div>
              <h2>Students Connect from Any Device</h2>
              <p>
                Keystone runs on your computer and creates a local network
                that students can connect to from any device — a tablet,
                laptop, or phone. Just share the stable network address and
                students open it in their browser.
              </p>
              <p>
                No accounts, no cloud services, no subscriptions. Students
                see their assignments, complete their work, and submit it —
                all on your home network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Customization */}
      <section className={`${styles.section} ${styles.alt}`}>
        <div className={styles.content}>
          <div className={styles['detail-block']}>
            <div className={styles['detail-icon']}>
              <Palette size={32} />
            </div>
            <div>
              <h2>Make It Yours — Full Dashboard Customization</h2>
              <p>
                Personalize the entire look and feel of Keystone. Choose from
                preset themes, switch layouts, and toggle widgets to build the
                dashboard that works best for you.
              </p>
              <ul className={styles['check-list']}>
                {dashboardFeatures.map((f, i) => (
                  <li key={i}>
                    {f.icon}
                    {f.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Export & Backup */}
      <section className={styles.section}>
        <div className={styles.content}>
          <div className={styles['detail-block']}>
            <div className={styles['detail-icon']}>
              <Download size={32} />
            </div>
            <div>
              <h2>Export, Backup &amp; Move</h2>
              <p>
                Your data is always yours. Export everything — teacher
                profiles, students, assignments, grades, folders, tests,
                writing assignments, lesson plans, rewards, and more — as a
                single backup file.
              </p>
              <div className={styles['export-options']}>
                <div className={styles['export-item']}>
                  <CheckCircle size={16} />
                  <div>
                    <strong>Export Everything</strong>
                    <span>Full backup of all data</span>
                  </div>
                </div>
                <div className={styles['export-item']}>
                  <CheckCircle size={16} />
                  <div>
                    <strong>Teacher &amp; Student Info</strong>
                    <span>Profiles and grades only</span>
                  </div>
                </div>
                <div className={styles['export-item']}>
                  <CheckCircle size={16} />
                  <div>
                    <strong>Assignments Only</strong>
                    <span>Assignments and folders</span>
                  </div>
                </div>
                <div className={styles['export-item']}>
                  <CheckCircle size={16} />
                  <div>
                    <strong>Tests Only</strong>
                    <span>Tests and their questions</span>
                  </div>
                </div>
              </div>
              <p>
                Import that backup file on any Keystone installation to move
                your entire classroom to a new device, or share assignments
                and tests with other Keystone families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Help Chat & AI Chat */}
      <section className={`${styles.section} ${styles.alt}`}>
        <div className={styles.content}>
          <div className={styles['detail-block']}>
            <div className={styles['detail-icon']}>
              <Languages size={32} />
            </div>
            <div>
              <h2>English &amp; Spanish — Switch Anytime</h2>
              <p>
                Keystone Homeschool supports both <strong>English</strong> and{' '}
                <strong>Spanish</strong>. Switch the entire interface between
                languages with a single click inside the program. Menus,
                buttons, labels, and navigation all update instantly.
              </p>
              <p>
                Toggle back and forth whenever you want — there&rsquo;s no
                lock-in. Whether your family speaks Spanish at home, you&rsquo;re
                teaching in a bilingual household, or you simply prefer
                Spanish, Keystone adapts to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Help Chat & AI Chat */}
      <section className={`${styles.section} ${styles.alt}`}>
        <div className={styles.content}>
          <div className={styles['detail-block']}>
            <div className={styles['detail-icon']}>
              <MessageCircle size={32} />
            </div>
            <div>
              <h2>Built-in Help &amp; AI Chat</h2>
              <p>
                Need help? The <strong>Keystone Help Chat</strong> covers
                common questions and how-tos right inside the program. No
                searching the web for answers.
              </p>
              <p>
                Switch to <strong>Chat Mode</strong> and talk directly to your
                local AI model. Brainstorm lesson ideas, get curriculum
                suggestions, or ask questions — all running privately on your
                computer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Updates */}
      <section className={styles.section}>
        <div className={styles.content}>
          <div className={styles['detail-block']}>
            <div className={styles['detail-icon']}>
              <RefreshCw size={32} />
            </div>
            <div>
              <h2>Easy Software Updates</h2>
              <p>
                Keystone checks for updates with one click. When a new version
                is available, download and install it directly from the
                settings page — no reinstalling, no hassle. You&rsquo;re
                always on the latest version.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles['cta-inner']}>
          <h2>Ready to Take Control of Your Homeschool?</h2>
          <p>
            One purchase. No subscriptions. No cloud fees. Just a powerful
            teaching system that runs on your computer.
          </p>
          <div className={styles['cta-buttons']}>
            <Link to="/buy" className="btn btn-primary">
              Get Keystone — $29.99 <ArrowRight size={16} />
            </Link>
            <Link to="/setup" className={styles['cta-secondary']}>
              View AI Setup Guide <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
