import { Helmet } from 'react-helmet-async'
import { ExternalLink } from 'lucide-react'
import styles from './Onboarding.module.css'

const videos = [
  {
    id: 'Z5yr0cRxrE4',
    title: 'Onboarding Video 1',
    desc: 'Get started with your initial setup and learn the basics of navigating Keystone Homeschool.',
  },
  {
    id: 'rjEU4d0WM_Q',
    title: 'Onboarding Video 2',
    desc: 'Learn how to create your first classroom, add students, and configure your subjects.',
  },
  {
    id: 'dYQHRNtYfh0',
    title: 'Onboarding Video 3',
    desc: 'Discover how to generate AI-powered assignments, grade work, and track student progress.',
  },
  {
    id: 'Iv5MqfVbJTE',
    title: 'Onboarding Video 4',
    desc: 'Explore advanced features like report cards, the reward system, and exporting data.',
  },
]

const channelUrl = 'https://www.youtube.com/@KeystoneHomeschool'

export default function Onboarding() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Keystone Homeschool Onboarding Videos',
    description:
      'Step-by-step video guides to help new users set up and use Keystone Homeschool.',
    numberOfItems: videos.length,
    itemListElement: videos.map((v, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'VideoObject',
        name: v.title,
        description: v.desc,
        thumbnailUrl: `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`,
        uploadDate: '2026-01-01',
        contentUrl: `https://youtu.be/${v.id}`,
        embedUrl: `https://www.youtube.com/embed/${v.id}`,
        publisher: {
          '@type': 'Organization',
          name: 'Keystone Homeschool',
          url: 'https://keystonehomeschool.com',
          sameAs: [channelUrl],
        },
      },
    })),
  }

  return (
    <>
      <Helmet>
        <title>Onboarding — Keystone Homeschool</title>
        <meta
          name="description"
          content="Watch step-by-step onboarding videos to learn how to set up and use Keystone Homeschool. Get your classroom running in minutes."
        />
        <link rel="canonical" href="https://keystonehomeschool.com/onboarding" />
        <meta property="og:title" content="Onboarding — Keystone Homeschool" />
        <meta
          property="og:description"
          content="Step-by-step video guides to help you set up and master Keystone Homeschool."
        />
        <meta property="og:url" content="https://keystonehomeschool.com/onboarding" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles['hero-content']}>
          <h1>
            Getting Started with <span>Keystone</span>
          </h1>
          <p>
            Welcome to the onboarding hub! These videos walk you through
            everything you need to know — from your first login to building
            assignments and tracking grades. Follow along at your own pace and
            you&rsquo;ll be up and running in no time.
          </p>
        </div>
      </section>

      {/* Videos */}
      <section className={styles.section}>
        <div className={styles.content}>
          <h2 className={styles['section-title']}>
            Step-by-Step <span>Video Guides</span>
          </h2>
          <p className={styles['section-subtitle']}>
            Each video covers a key part of the setup process. Watch them in
            order for the best experience, or jump to the topic you need help
            with.
          </p>

          <div className={styles['video-grid']}>
            {videos.map((v) => (
              <div key={v.id} className={styles['video-card']}>
                <div className={styles['video-wrapper']}>
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div className={styles['video-info']}>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles['channel-cta']}>
            <p>Want more tutorials and updates?</p>
            <a
              href={channelUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe on YouTube <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
