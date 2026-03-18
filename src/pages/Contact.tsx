import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Clock, ChevronDown, Send } from 'lucide-react'
import styles from './Contact.module.css'

const faqs = [
  {
    q: 'Do I need technical skills to use Keystone Homeschool?',
    a: 'Not at all! Keystone Homeschool is designed for parents of all technical backgrounds. The interface is intuitive, and our AI does the heavy lifting — you just guide it.',
  },
  {
    q: 'Is it really a one-time purchase?',
    a: 'Yes! You buy the program once and own it forever. There are no monthly fees, no annual renewals, and no per-student charges.',
  },
  {
    q: 'Can I use it for multiple children?',
    a: 'Absolutely. Add as many students as you need at no extra cost. Each student gets their own profile and progress tracking.',
  },
  {
    q: 'How does the AI assignment builder work?',
    a: 'You select the subject, topic, and difficulty level, and our LLM generates a complete assignment. You can review, edit, and customize every part before assigning it to students.',
  },
  {
    q: 'Can I share assignments with other families?',
    a: 'Yes! The export and import features let you share assignments, reading materials, and lesson plans with other Keystone Homeschool users.',
  },
]

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className={styles['contact-hero']}>
        <div className="container">
          <h1>Get in Touch</h1>
          <p>
            Have questions about Keystone Homeschool? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className={styles['contact-section']}>
        <div className="container">
          <div className={styles['contact-grid']}>
            <div className={styles['contact-info']}>
              <div>
                <h2>Let's Talk</h2>
                <p>
                  Whether you have questions about the program, need support,
                  or want to learn more — reach out and we'll get back to you
                  as soon as possible.
                </p>
              </div>

              <div className={styles['contact-item']}>
                <div className={styles['contact-item-icon']}>
                  <Mail size={20} />
                </div>
                <div className={styles['contact-item-text']}>
                  <h4>Email Us</h4>
                  <p>contact@keystonehomeschool.com</p>
                </div>
              </div>

              <div className={styles['contact-item']}>
                <div className={styles['contact-item-icon']}>
                  <MapPin size={20} />
                </div>
                <div className={styles['contact-item-text']}>
                  <h4>Location</h4>
                  <p>United States</p>
                </div>
              </div>

              <div className={styles['contact-item']}>
                <div className={styles['contact-item-icon']}>
                  <Clock size={20} />
                </div>
                <div className={styles['contact-item-text']}>
                  <h4>Response Time</h4>
                  <p>We typically respond within 24-48 hours</p>
                </div>
              </div>
            </div>

            <form className={styles['contact-form']} onSubmit={handleSubmit}>
              {submitted ? (
                <div className={styles['form-success']}>
                  ✓ Thank you! We'll be in touch soon.
                </div>
              ) : (
                <>
                  <div className={styles['form-group']}>
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className={styles['form-group']}>
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div className={styles['form-group']}>
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  <div className={styles['form-group']}>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      placeholder="Tell us how we can help..."
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className={`btn btn-primary ${styles['form-submit']}`}
                  >
                    Send Message <Send size={16} />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles['faq-section']}>
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Quick answers to common questions about Keystone Homeschool.
          </p>

          <div className={styles['faq-list']}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`${styles['faq-item']} ${openFaq === i ? styles.open : ''}`}
              >
                <button
                  className={styles['faq-question']}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  <ChevronDown size={18} />
                </button>
                {openFaq === i && (
                  <div className={styles['faq-answer']}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
