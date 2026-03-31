import { useState, useEffect } from 'react'
import styles from './LaunchBanner.module.css'

const LAUNCH = new Date('2026-05-01T00:00:00').getTime()

function getTimeLeft() {
  const diff = LAUNCH - Date.now()
  if (diff <= 0) return null
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

export default function LaunchBanner() {
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!time) return null

  return (
    <div className={styles.banner}>
      <div className={styles.inner}>
        <span className={styles.label}>🚀 Official Launch Day —</span>
        <div className={styles.countdown}>
          <div className={styles.unit}>
            <span className={styles.num}>{String(time.days).padStart(2, '0')}</span>
            <span className={styles.tag}>Days</span>
          </div>
          <span className={styles.sep}>:</span>
          <div className={styles.unit}>
            <span className={styles.num}>{String(time.hours).padStart(2, '0')}</span>
            <span className={styles.tag}>Hrs</span>
          </div>
          <span className={styles.sep}>:</span>
          <div className={styles.unit}>
            <span className={styles.num}>{String(time.minutes).padStart(2, '0')}</span>
            <span className={styles.tag}>Min</span>
          </div>
          <span className={styles.sep}>:</span>
          <div className={styles.unit}>
            <span className={styles.num}>{String(time.seconds).padStart(2, '0')}</span>
            <span className={styles.tag}>Sec</span>
          </div>
        </div>
        <span className={styles.date}>May 1, 2026</span>
      </div>
    </div>
  )
}
