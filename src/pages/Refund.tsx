import styles from './Policy.module.css'

export default function Refund() {
  return (
    <>
      <section className={styles['policy-hero']}>
        <div className="container">
          <h1>
            Refund <span>Policy</span>
          </h1>
          <p>Last updated: March 17, 2026</p>
        </div>
      </section>

      <section className={styles['policy-section']}>
        <div className={styles['policy-content']}>
          <h2>Digital Product Policy</h2>
          <p>
            Keystone Homeschool is a digital software product delivered
            electronically. Because the Software can be downloaded and used
            immediately after purchase, all sales are final.
          </p>

          <h2>When We May Issue a Refund</h2>
          <p>
            We want every customer to be satisfied. We may consider a refund in
            the following situations:
          </p>
          <ul>
            <li>You were charged multiple times for the same purchase.</li>
            <li>
              The Software does not function as described and we are unable to
              resolve the issue through support.
            </li>
          </ul>

          <h2>How to Request a Refund</h2>
          <p>
            To request a refund, please contact us at{' '}
            <a href="mailto:support@keystonehomeschool.com">
              support@keystonehomeschool.com
            </a>{' '}
            within 14 days of your purchase. Include your order number and a
            description of the issue. We will review your request and respond
            within 3–5 business days.
          </p>

          <h2>Refund Processing</h2>
          <p>
            Approved refunds will be processed through Lemon Squeezy and
            returned to the original payment method. Processing times may vary
            depending on your payment provider.
          </p>

          <h2>Contact</h2>
          <p>
            If you have any questions about this policy, contact us at{' '}
            <a href="mailto:support@keystonehomeschool.com">
              support@keystonehomeschool.com
            </a>.
          </p>
        </div>
      </section>
    </>
  )
}
