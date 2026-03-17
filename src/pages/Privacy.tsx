import styles from './Policy.module.css'

export default function Privacy() {
  return (
    <>
      <section className={styles['policy-hero']}>
        <div className="container">
          <h1>
            Privacy <span>Policy</span>
          </h1>
          <p>Last updated: March 17, 2026</p>
        </div>
      </section>

      <section className={styles['policy-section']}>
        <div className={styles['policy-content']}>
          <h2>1. Information We Collect</h2>
          <p>
            When you purchase Keystone Homeschool, we collect the information
            necessary to process your transaction, including your name, email
            address, and payment details. Payment processing is handled securely
            by our payment processor — we do not store your payment card information.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process your purchase and deliver the Software.</li>
            <li>Send purchase confirmations and download links.</li>
            <li>Provide customer support when you contact us.</li>
            <li>Send product updates or important notices (you can opt out at any time).</li>
          </ul>

          <h2>3. Data Storage</h2>
          <p>
            Keystone Homeschool is a desktop application. All student data,
            grades, assignments, and reports are stored locally on your device.
            We do not collect, transmit, or have access to any of your
            homeschool data.
          </p>

          <h2>4. Third-Party Services</h2>
          <p>
            We use a third-party payment processor to handle payments. Their privacy policy
            governs how your payment information is handled. We do not sell,
            rent, or share your personal information with any other third
            parties.
          </p>

          <h2>5. Cookies</h2>
          <p>
            Our website may use essential cookies to enable basic functionality.
            We do not use tracking or advertising cookies.
          </p>

          <h2>6. Children's Privacy</h2>
          <p>
            Our website and purchase process are intended for parents and
            guardians. We do not knowingly collect personal information from
            children under 13.
          </p>

          <h2>7. Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your
            personal information at any time by contacting us.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated effective date.
          </p>

          <h2>9. Contact</h2>
          <p>
            If you have questions about this policy, contact us at{' '}
            <a href="mailto:support@keystonehomeschool.com">
              support@keystonehomeschool.com
            </a>.
          </p>
        </div>
      </section>
    </>
  )
}
