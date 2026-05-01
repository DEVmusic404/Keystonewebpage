import styles from './About.module.css'
import profilePhoto from '../assets/MCE.png'

export default function About() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className={styles.aboutHero}>
        <div className="container">
          <div className={styles.heroLabel}>About Us</div>
          <h1>
            Built by a{' '}
            <span className={styles.gradientText}>Homeschool Family</span>
            <br />
            for Homeschool Families
          </h1>
          <p>
            Get to know the developer and CEO behind Keystone Homeschool and
            why this platform exists.
          </p>
        </div>
      </section>

      {/* ===== Profile + Bio ===== */}
      <section className={styles.aboutSection}>
        <div className="container">
          <div className={styles.profileGrid}>

            {/* — Left: Profile Card — */}
            <aside className={styles.profileCard}>
              <div className={styles.photoPlaceholder}>
                <img src={profilePhoto} alt="Matthew Elliott" />
              </div>

              <h2 className={styles.profileName}>Matthew Elliott</h2>
              <p className={styles.profileTitle}>Developer &amp; CEO · Keystone Homeschool</p>

              <div className={styles.profileDivider} />

              <div className={styles.profileStat}>
                <span className={styles.profileStatLabel}>Role</span>
                <span className={styles.profileStatValue}>Founder, Developer &amp; CEO</span>
              </div>
              <div className={styles.profileStat}>
                <span className={styles.profileStatLabel}>Education</span>
                <span className={styles.profileStatValue}>Software Development</span>
              </div>
              <div className={styles.profileStat}>
                <span className={styles.profileStatLabel}>Location</span>
                <span className={styles.profileStatValue}>United States</span>
              </div>
              <div className={styles.profileStat}>
                <span className={styles.profileStatLabel}>Contact</span>
                <span className={styles.profileStatValue}>contact@keystonehomeschool.com</span>
              </div>
            </aside>

            {/* — Right: Bio — */}
            <div className={styles.bioContent}>

              {/* Stats Row */}
              <div className={styles.highlightGrid}>
                <div className={styles.highlightCard}>
                  <div className={styles.highlightValue}>5+</div>
                  <div className={styles.highlightLabel}>Years Homeschooling</div>
                </div>
                <div className={styles.highlightCard}>
                  <div className={styles.highlightValue}>$200+</div>
                  <div className={styles.highlightLabel}>Spent Per Year Before Keystone</div>
                </div>
                <div className={styles.highlightCard}>
                  <div className={styles.highlightValue}>$0</div>
                  <div className={styles.highlightLabel}>Monthly Fees with Keystone</div>
                </div>
              </div>

              {/* Our Story */}
              <div className={styles.bioSection}>
                <h2>Our Story</h2>
                <p>
                  We are a homeschool family ourselves. For over five years we
                  were constantly buying new workbooks, tests, and reading
                  materials spending $150-$200 or more every single year. We tried
                  various online platforms hoping to cut costs, but they either
                  didn't solve the problem or ended up costing us even more.
                </p>
              </div>

              {/* Why I Built This */}
              <div className={styles.bioSection}>
                <h2>Why I Built Keystone</h2>
                <p>
                  With a background in software development, I decided to put
                  my skills to work for our own family first. I built the
                  initial version of Keystone Homeschool to reduce the mountain
                  of printed papers and to finally have a clean, simple way to
                  track each of our kids' grades and progress all in one
                  place.
                </p>
                <p>
                  What started as a solution for our household quickly grew into
                  something I knew other families needed too. We expanded and
                  polished the platform with one goal in mind: make it
                  something any homeschool family could buy{' '}
                  <strong style={{ color: 'var(--gray-200)' }}>once</strong> and
                  use for as long as they need, with no limits on the number of
                  children and no recurring monthly fees.
                </p>
              </div>

              {/* What Makes Us Different */}
              <div className={styles.bioSection}>
                <h2>What Sets Us Apart</h2>
                <p>
                  Keystone Homeschool isn't built by a corporate team chasing
                  subscriptions it's built by a parent who lived the same
                  frustrations you have. Every feature in this program was
                  designed with real homeschool families in mind because we{' '}
                  <em>are</em> one.
                </p>
                <p>
                  We believe great educational software shouldn't drain your
                  wallet year after year. One purchase, unlimited students,
                  unlimited time.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ===== Mission ===== */}
      <section className={styles.missionSection}>
        <div className="container">
          <div className={styles.missionInner}>
            <span className={styles.sectionLabel}>Our Mission</span>
            <h2>Empowering Families to Homeschool with Confidence</h2>
            <p className={styles.missionQuote}>
              "Every family deserves access to powerful homeschool tools — without
              the endless monthly bill."
            </p>
            <p>
              At Keystone Homeschool, our mission is simple: give homeschool
              parents an AI-powered platform that saves time, cuts costs, and
              brings order to the beautiful chaos of teaching at home. No
              subscriptions. No limits. Just a tool that works for your family,
              on your schedule.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
