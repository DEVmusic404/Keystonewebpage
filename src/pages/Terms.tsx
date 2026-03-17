import styles from './Policy.module.css'

export default function Terms() {
  return (
    <>
      <section className={styles['policy-hero']}>
        <div className="container">
          <h1>
            Terms of <span>Service</span>
          </h1>
          <p>Last updated: March 17, 2026</p>
        </div>
      </section>

      <section className={styles['policy-section']}>
        <div className={styles['policy-content']}>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By purchasing, downloading, or using Keystone Homeschool ("the Software"),
            you agree to be bound by these Terms of Service. If you do not agree to
            these terms, do not use the Software.
          </p>

          <h2>2. License</h2>
          <p>
            Upon purchase, you are granted a non-exclusive, non-transferable, perpetual
            license to install and use the Software on your personal devices for
            personal, non-commercial homeschool use.
          </p>

          <h2>3. Restrictions</h2>
          <p>You may not:</p>
          <ul>
            <li>Redistribute, resell, or sublicense the Software.</li>
            <li>Reverse-engineer, decompile, or disassemble the Software.</li>
            <li>Use the Software for any unlawful purpose.</li>
            <li>Remove or alter any proprietary notices or labels.</li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            All content, design, and code within the Software remain the intellectual
            property of Keystone Homeschool. Your purchase grants a license to use the
            Software, not ownership of the underlying intellectual property.
          </p>

          <h2>5. Disclaimer of Warranties</h2>
          <p>
            The Software is provided "as is" without warranty of any kind, express or
            implied. We do not guarantee that the Software will be error-free or
            uninterrupted.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            In no event shall Keystone Homeschool be liable for any indirect, incidental,
            special, or consequential damages arising from the use or inability to use
            the Software.
          </p>

          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right to update these Terms of Service at any time. Changes
            will be posted on this page with an updated effective date.
          </p>

          <h2>8. Contact</h2>
          <p>
            If you have questions about these terms, contact us at{' '}
            <a href="mailto:support@keystonehomeschool.com">
              support@keystonehomeschool.com
            </a>.
          </p>
        </div>
      </section>
    </>
  )
}
