import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Search,
  BookMarked,
  Library as LibraryIcon,
  Lamp,
  Sparkles,
  Headphones,
  Music,
  Brain,
  Bot,
} from 'lucide-react'
import styles from './Library.module.css'

interface Album {
  id: string
  title: string
  subject: string
  playlistId: string
  thumbnail: string
  icon: string
}

const albums: Album[] = [
  {
    id: 'power-of-words',
    title: 'The Power Of Words',
    subject: 'English',
    playlistId: 'OLAK5uy_nS3PXCaxvu69abAFOsKogaEkEBmemx_ME',
    thumbnail: 'https://i.ytimg.com/vi/QrTVLvyBXXc/hqdefault.jpg',
    icon: '\u{1F4D6}',
  },
  {
    id: 'english',
    title: 'English',
    subject: 'English',
    playlistId: 'OLAK5uy_kx_lCcverig4oCsG58bsqVUd4O4G-FcFQ',
    thumbnail: 'https://i.ytimg.com/vi/E5eD96L0tlg/hqdefault.jpg',
    icon: '\u{1F4DD}',
  },
  {
    id: 'mastering-fractions',
    title: 'Piece by Piece: Mastering Fractions',
    subject: 'Math',
    playlistId: 'OLAK5uy_kGSojAzc1iei7gmCcYxzd1_BKBipeI5Rw',
    thumbnail: 'https://i.ytimg.com/vi/VP9Rwr2JpG8/hqdefault.jpg',
    icon: '\u{1F9EE}',
  },
  {
    id: 'pemdas',
    title: 'P.E.M.D.A.S. (Order of Operations)',
    subject: 'Math',
    playlistId: 'OLAK5uy_kraDBx1FYMCi2LyPxJiJ8FUpPosMEJKEs',
    thumbnail: 'https://i.ytimg.com/vi/4XhMacY_cFc/hqdefault.jpg',
    icon: '\u{2795}',
  },
  {
    id: 'pre-algebra',
    title: 'LEVEL UP Pre-Algebra',
    subject: 'Math',
    playlistId: 'OLAK5uy_nYcH2fS6DFQ5yM00CEpg4GguTQXK4BvAA',
    thumbnail: 'https://i.ytimg.com/vi/24O3pNLArqI/hqdefault.jpg',
    icon: '\u{1F4CA}',
  },
  {
    id: 'anatomy-unlocked',
    title: 'Anatomy Unlocked',
    subject: 'Science',
    playlistId: 'OLAK5uy_mS9S4Vtyateh21kZ82jUYG_tU9Xx5VIF0',
    thumbnail: 'https://i.ytimg.com/vi/AtCAXhtTHdI/hqdefault.jpg',
    icon: '\u{1F9EC}',
  },
  {
    id: 'electricity-magnetism',
    title: 'Electricity & Magnetism',
    subject: 'Science',
    playlistId: 'OLAK5uy_nMLnZAV1Kq52XUOmOIMd48NHqm1683Egs',
    thumbnail: 'https://i.ytimg.com/vi/YfW9WzzGTS8/hqdefault.jpg',
    icon: '\u{26A1}',
  },
  {
    id: 'geography',
    title: 'Worldwide Wired: Geography in Motion',
    subject: 'Geography',
    playlistId: 'OLAK5uy_mI0kfXPaqNEXtD9--yiQhGP52ICohFSFc',
    thumbnail: 'https://i.ytimg.com/vi/eRRDtFBIGKY/hqdefault.jpg',
    icon: '\u{1F30D}',
  },
  {
    id: 'shaped-by-world',
    title: 'Shaped by the World',
    subject: 'Geography',
    playlistId: 'OLAK5uy_ndMawq8nNVK850ZXJWPHU-4ltaAQqleJE',
    thumbnail: 'https://i.ytimg.com/vi/npbixo8gxLg/hqdefault.jpg',
    icon: '\u{1F5FA}',
  },
  {
    id: 'write-structure',
    title: 'The Write Structure',
    subject: 'English',
    playlistId: 'OLAK5uy_ltAw6piTJ8C_vGROEmp6E7G4_CdIoJUDY',
    thumbnail: 'https://i.ytimg.com/vi/FA0oe4eUhM8/hqdefault.jpg',
    icon: '\u{270D}',
  },
  {
    id: 'taxation-theft',
    title: 'Taxation = Theft',
    subject: 'Restricted Reading',
    playlistId: 'OLAK5uy_kWd_VIG3JinwIosQrom_JslLugRLbQ26g',
    thumbnail: 'https://i.ytimg.com/vi/-48qooRTkGA/hqdefault.jpg',
    icon: '\u{1F4B0}',
  },
]

const subjects = ['All', 'English', 'Math', 'Science', 'Geography', 'Restricted Reading']

const subjectColors: Record<string, string> = {
  English: '#2563eb',
  Math: '#2563eb',
  Science: '#2563eb',
  Geography: '#2563eb',
  'Restricted Reading': '#2563eb',
}

/* Generate floating dust particles once */
function DustParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 12}s`,
        duration: `${10 + Math.random() * 14}s`,
        size: `${2 + Math.random() * 3}px`,
        opacity: 0.15 + Math.random() * 0.25,
      })),
    [],
  )
  return (
    <div className={styles.dust} aria-hidden>
      {particles.map((p) => (
        <span
          key={p.id}
          className={styles.mote}
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  )
}

export default function Library() {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null)
  const [activeSubject, setActiveSubject] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [isBookOpening, setIsBookOpening] = useState(false)
  const [isPageTurning, setIsPageTurning] = useState<'next' | 'prev' | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const readerRef = useRef<HTMLDivElement>(null)

  /* ---- YouTube postMessage control ---- */
  const sendCommand = useCallback((func: string) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func, args: [] }),
      'https://www.youtube.com'
    )
  }, [])

  useEffect(() => {
    const handle = (e: MessageEvent) => {
      if (e.origin !== 'https://www.youtube.com') return
      try {
        const data = JSON.parse(e.data)
        if (data.event === 'onStateChange') setIsPlaying(data.info === 1)
      } catch { /* ignore non-json */ }
    }
    window.addEventListener('message', handle)
    return () => window.removeEventListener('message', handle)
  }, [])

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return
    const onLoad = () => {
      iframe.contentWindow?.postMessage(
        JSON.stringify({ event: 'listening' }),
        'https://www.youtube.com'
      )
    }
    iframe.addEventListener('load', onLoad)
    return () => iframe.removeEventListener('load', onLoad)
  }, [selectedAlbum])

  /* ---- Handlers ---- */
  const handleSelectAlbum = useCallback(
    (album: Album) => {
      if (selectedAlbum?.id === album.id) return
      setIsBookOpening(true)
      setTimeout(() => {
        setSelectedAlbum(album)
        setIsPlaying(true)
        setTimeout(() => setIsBookOpening(false), 600)
      }, 400)
      setTimeout(() => {
        readerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 500)
    },
    [selectedAlbum],
  )

  const handleNext = useCallback(() => {
    setIsPageTurning('next')
    setTimeout(() => {
      sendCommand('nextVideo')
      setIsPageTurning(null)
    }, 1100)
  }, [sendCommand])

  const handlePrev = useCallback(() => {
    setIsPageTurning('prev')
    setTimeout(() => {
      sendCommand('previousVideo')
      setIsPageTurning(null)
    }, 1100)
  }, [sendCommand])

  const handlePlayPause = useCallback(() => {
    if (isPlaying) sendCommand('pauseVideo')
    else sendCommand('playVideo')
    setIsPlaying((p) => !p)
  }, [isPlaying, sendCommand])

  /* ---- Filtering ---- */
  const filteredAlbums = albums.filter((a) => {
    const matchSubject = activeSubject === 'All' || a.subject === activeSubject
    const matchSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchSubject && matchSearch
  })

  /* Group albums by subject for shelf rows */
  const groupedBySubject = useMemo(() => {
    const groups: Record<string, Album[]> = {}
    filteredAlbums.forEach((a) => {
      ;(groups[a.subject] ??= []).push(a)
    })
    return Object.entries(groups)
  }, [filteredAlbums])

  const leftGroups = useMemo(() => groupedBySubject.filter((_, i) => i % 2 === 0), [groupedBySubject])
  const rightGroups = useMemo(() => groupedBySubject.filter((_, i) => i % 2 === 1), [groupedBySubject])

  /* Render a bookshelf section (reused for left & right) */
  const renderShelfSection = (subject: string, items: Album[]) => (
    <div key={subject} className={styles['shelf-section']}>
      <div className={styles['shelf-label']} style={{ borderLeftColor: subjectColors[subject] }}>
        <span className={styles['label-dot']} style={{ background: subjectColors[subject] }} />
        {subject}
      </div>
      <div className={styles['shelf-row']}>
        <div className={styles['shelf-books']}>
          {items.map((album) => (
            <button
              key={album.id}
              className={`${styles.book} ${selectedAlbum?.id === album.id ? styles['book-selected'] : ''}`}
              onClick={() => handleSelectAlbum(album)}
              title={album.title}
            >
              <div className={styles.spine}>
                <img src={album.thumbnail} alt={album.title} className={styles['spine-img']} loading="lazy" />
                <div className={styles['spine-overlay']}>
                  <span className={styles['spine-subject']} style={{ background: subjectColors[album.subject] }}>
                    {album.subject}
                  </span>
                  <span className={styles['spine-title']}>{album.title}</span>
                </div>
                <div className={styles['spine-edge']} style={{ background: subjectColors[album.subject] }} />
              </div>
              <div className={styles.cover}>
                <img src={album.thumbnail} alt={album.title} loading="lazy" />
                <div className={styles['cover-overlay']}>
                  <span className={styles['cover-badge']} style={{ color: subjectColors[album.subject] }}>{album.subject}</span>
                  <span className={styles['cover-title']}>{album.title}</span>
                  <span className={styles['cover-action']}><BookOpen size={14} /> Open</span>
                </div>
              </div>
            </button>
          ))}
        </div>
        <div className={styles['shelf-board']} />
        <div className={styles['shelf-shadow']} />
      </div>
    </div>
  )

  return (
    <div className={styles.page}>
      <DustParticles />

      <div className={styles.grain} />
      <div className={styles['ambient-top']} />
      <div className={styles['ambient-left']} />
      <div className={styles['ambient-right']} />
      <div className={styles['ambient-warm']} />

      {/* ===== Hero ===== */}
      <section className={styles.hero}>
        <div className={styles['hero-vignette']} />
        <div className="container">
          <div className={styles['hero-badge']}>
            <Sparkles size={14} />
            Learning Through Music
          </div>
          <h1>
            The Music <span>Library</span>
          </h1>
          <p>
            Step inside our digital library&nbsp;&mdash; pull a textbook from the shelf,
            open it up, and learn any subject through music.
          </p>
        </div>
      </section>

      {/* ===== Library Room ===== */}
      <section className={styles.room}>
        <div className="container">
          <div className={styles.catalog}>
            <div className={styles['catalog-left']}>
              <LibraryIcon size={18} />
              <h2>Card Catalog</h2>
            </div>
            <div className={styles.filters}>
              {subjects.map((s) => (
                <button
                  key={s}
                  className={`${styles['filter-chip']} ${activeSubject === s ? styles.active : ''}`}
                  onClick={() => setActiveSubject(s)}
                  style={
                    activeSubject === s && s !== 'All'
                      ? { background: subjectColors[s] + '22', borderColor: subjectColors[s] + '66', color: subjectColors[s] }
                      : undefined
                  }
                >
                  {s}
                </button>
              ))}
            </div>
            <div className={styles['search-box']}>
              <Search size={16} />
              <input
                type="text"
                placeholder="Search the collection…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Full-width: Left Shelf | Center Display | Right Shelf */}
        <div className={styles.layout}>
          {/* ---- Left Bookshelf ---- */}
          <aside className={styles['shelf-panel']}>
            <div className={styles['shelf-wall']} />
            {leftGroups.length === 0 && (
              <p className={styles['no-results']}>No textbooks found.</p>
            )}
            {leftGroups.map(([subject, items]) => renderShelfSection(subject, items))}
          </aside>

          {/* ---- Center Display ---- */}
          <main className={styles.center}>
            {/* Header / video banner above the table */}
            <div className={styles['center-header']}>
              <video
                className={styles['header-video']}
                src="/Library.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            {/* Library Table */}
            <div className={styles['library-table']} ref={readerRef}>
              {/* Desk lamp */}
              <div className={styles['table-lamp-wrap']}>
                <Lamp size={24} />
                <div className={styles['lamp-cone']} />
              </div>

              <div className={styles['table-surface']}>
                {/* Main content area */}
                <div className={styles['table-content']}>
                  {!selectedAlbum ? (
                    <div className={styles.placeholder}>
                      <div className={styles['placeholder-book']}>
                        <BookOpen size={56} strokeWidth={1} />
                      </div>
                      <h3>Pull a book from the shelf</h3>
                      <p>Click any textbook to open it here on your reading table</p>
                    </div>
                  ) : (
                    <div className={`${styles['open-book']} ${isBookOpening ? styles.opening : ''}`}>
                      {isBookOpening && (
                        <div className={styles['cover-flip']}>
                          <div className={styles['flip-front']}>
                            <img src={selectedAlbum.thumbnail} alt="" />
                          </div>
                          <div className={styles['flip-back']} />
                        </div>
                      )}

                      {/* Page turn overlay — sits above the entire book */}
                      {isPageTurning && (
                        <div className={`${styles['page-turn']} ${isPageTurning === 'next' ? styles['turn-next'] : styles['turn-prev']}`}>
                          <div className={styles['turn-sheet']}>
                            <div className={styles['turn-sheet-inner']} />
                          </div>
                        </div>
                      )}

                      {/* Left page — info */}
                      <div className={styles['page-left']}>
                        <div className={styles['page-texture']} />
                        <div className={styles['page-content']}>
                          <BookMarked size={20} className={styles['page-icon']} style={{ color: subjectColors[selectedAlbum.subject] }} />
                          <span className={styles['now-label']}>Now Reading</span>
                          <h3 className={styles['reading-title']}>{selectedAlbum.title}</h3>
                          <div
                            className={styles['subject-tag']}
                            style={{
                              background: subjectColors[selectedAlbum.subject] + '18',
                              color: subjectColors[selectedAlbum.subject],
                              borderColor: subjectColors[selectedAlbum.subject] + '44',
                            }}
                          >
                            {selectedAlbum.icon} {selectedAlbum.subject}
                          </div>
                          <div className={styles['page-decoration']}>
                            <div className={styles['deco-line']} style={{ background: subjectColors[selectedAlbum.subject] + '33' }} />
                            <div className={styles['deco-line']} style={{ background: subjectColors[selectedAlbum.subject] + '22' }} />
                            <div className={styles['deco-line']} style={{ background: subjectColors[selectedAlbum.subject] + '11' }} />
                          </div>
                        </div>
                      </div>

                      <div className={styles.binding} />

                      {/* Right page — player */}
                      <div className={styles['page-right']}>
                        <div className={styles['page-texture']} />
                        <div className={styles['player-area']}>
                          <iframe
                            ref={iframeRef}
                            key={selectedAlbum.playlistId}
                            src={`https://www.youtube.com/embed/videoseries?list=${selectedAlbum.playlistId}&enablejsapi=1&autoplay=1&modestbranding=1&rel=0&origin=${encodeURIComponent(window.location.origin)}`}
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            className={styles['yt-player']}
                            title={selectedAlbum.title}
                          />
                        </div>
                      </div>

                      {/* Controls */}
                      <div className={styles.controls}>
                        <button className={styles['ctrl-btn']} onClick={handlePrev} title="Previous Track">
                          <ChevronLeft size={20} />
                          <span>Prev Page</span>
                        </button>
                        <button className={`${styles['ctrl-btn']} ${styles['ctrl-play']}`} onClick={handlePlayPause} title={isPlaying ? 'Pause' : 'Play'}>
                          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                        </button>
                        <button className={styles['ctrl-btn']} onClick={handleNext} title="Next Track">
                          <span>Next Page</span>
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Headphones on the table */}
                <div className={styles.headphones}>
                  <Headphones size={44} strokeWidth={1.5} />
                  <div className={styles['hp-cord']} />
                </div>
              </div>

              {/* Table front edge */}
              <div className={styles['table-edge']} />
            </div>
          </main>

          {/* ---- Right Bookshelf ---- */}
          <aside className={styles['shelf-panel']}>
            <div className={styles['shelf-wall']} />
            {rightGroups.length === 0 && leftGroups.length === 0 && (
              <p className={styles['no-results']}>No textbooks found.</p>
            )}
            {rightGroups.map(([subject, items]) => renderShelfSection(subject, items))}
          </aside>
        </div>
      </section>

      {/* ===== Building Notice ===== */}
      <p className={styles['building-notice']}>
        Still building our library, we are&hellip; much more to come, there is.
      </p>

      {/* ===== About Section ===== */}
      <section className={styles.about}>
        <div className="container">
          <div className={styles['hero-stats']}>
            <div className={styles.stat}>
              <strong>{albums.length}</strong>
              <span>Textbooks</span>
            </div>
            <div className={styles['stat-divider']} />
            <div className={styles.stat}>
              <strong>{subjects.length - 1}</strong>
              <span>Subjects</span>
            </div>
            <div className={styles['stat-divider']} />
            <div className={styles.stat}>
              <strong>&infin;</strong>
              <span>Replays</span>
            </div>
          </div>
          <div className={styles['about-grid']}>
            {/* Albums = Textbooks */}
            <div className={styles['about-card']}>
              <div className={styles['about-icon']} style={{ background: 'rgba(37, 99, 235, 0.1)', color: 'var(--blue-400)' }}>
                <Music size={24} />
              </div>
              <h3>Albums Are Textbooks&nbsp;&mdash; Set to Music</h3>
              <p>
                Every album in our library is built like a textbook chapter. Each track
                covers a specific lesson&nbsp;&mdash; definitions, formulas, key
                concepts&nbsp;&mdash; and wraps them in a beat you actually want to
                replay. Think of it as studying, except the notes stick because they
                come with a melody. It&rsquo;s a fun, low-pressure way to
                reinforce what you&rsquo;re learning or discover a topic for the first
                time.
              </p>
            </div>

            {/* Neural Priming / Memory */}
            <div className={styles['about-card']}>
              <div className={styles['about-icon']} style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e' }}>
                <Brain size={24} />
              </div>
              <h3>Why Music Makes It Stick</h3>
              <p>
                Music does more than set a vibe&nbsp;&mdash; it actually primes your
                brain for learning. Research shows that syncing information to a rhythm
                lights up the prefrontal cortex, the region responsible for focus and
                critical thinking. Tracks in the 60&ndash;70&nbsp;BPM range help your
                brain categorize and store new material more efficiently. The result?
                Key ideas get anchored to the melody, making them far easier to
                recall later. It&rsquo;s the same reason you never forget the lyrics
                to your favorite song.
              </p>
            </div>

            {/* AI-Powered Creation */}
            <div className={styles['about-card']}>
              <div className={styles['about-icon']} style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
                <Bot size={24} />
              </div>
              <h3>Powered by AI, Made for You</h3>
              <p>
                Behind every track is a workflow driven by multiple AI models. We use
                LLMs to research each topic, organize the material into clear lesson
                structures, and then craft lyrics that teach while they
                entertain. From there, AI-assisted music production brings it all
                together&nbsp;&mdash; generating instrumentals, mixing, and polishing
                each song. This lets us keep quality and consistency high across
                every subject while having as much fun as possible with the learning
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
