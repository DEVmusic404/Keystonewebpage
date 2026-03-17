import { useState, useRef, useCallback, type ChangeEvent } from 'react'
import {
  Upload,
  Download,
  FileJson,
  Trash2,
  BookOpen,
  GraduationCap,
  Clock,
  Search,
  X,
  CheckCircle,
  AlertCircle,
} from 'lucide-react'
import styles from './AssignmentHub.module.css'

interface Question {
  question: string
  options: string[]
  correct_answer: number
}

interface Assignment {
  id: string
  title: string
  subject: string
  grade_level: string
  topic: string
  questions: Question[]
  reading_passage: string | null
  coding_level: string | null
  coding_exercises: unknown[]
  drag_drop_puzzle: unknown | null
  youtube_url: string | null
  teacher_id: string
  created_at: string
}

interface SharedFile {
  id: string
  fileName: string
  uploadedAt: string
  uploaderName: string
  assignmentCount: number
  subjects: string[]
  gradeLevels: string[]
  assignments: Assignment[]
}

interface UploadedBackup {
  metadata?: {
    app?: string
    version?: string
    export_type?: string
    exported_at?: string
    teacher_id?: string
    teacher_email?: string
  }
  teacher?: {
    first_name?: string
    last_name?: string
  }
  assignments?: Assignment[]
}

const STORAGE_KEY = 'kshs_shared_assignments'

function getSharedFiles(): SharedFile[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

function saveSharedFiles(files: SharedFile[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(files))
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
}

export default function AssignmentHub() {
  const [sharedFiles, setSharedFiles] = useState<SharedFile[]>(getSharedFiles)
  const [searchQuery, setSearchQuery] = useState('')
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const showToast = useCallback((type: 'success' | 'error', message: string) => {
    setToast({ type, message })
    setTimeout(() => setToast(null), 4000)
  }, [])

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.name.endsWith('.json')) {
      showToast('error', 'Please upload a valid .json file from Keystone Homeschool.')
      return
    }

    const reader = new FileReader()
    reader.onload = (event) => {
      try {
        const data: UploadedBackup = JSON.parse(event.target?.result as string)

        if (!data.assignments || !Array.isArray(data.assignments) || data.assignments.length === 0) {
          showToast('error', 'No assignments found in this file.')
          return
        }

        // Validate it looks like a Keystone backup
        const hasValidAssignments = data.assignments.every(
          (a: Assignment) => a.title && a.subject && a.questions
        )
        if (!hasValidAssignments) {
          showToast('error', 'File does not match the Keystone Homeschool format.')
          return
        }

        const subjects = [...new Set(data.assignments.map((a: Assignment) => a.subject))]
        const gradeLevels = [...new Set(data.assignments.map((a: Assignment) => a.grade_level))]
        const uploaderName = data.teacher
          ? `${data.teacher.first_name || ''} ${data.teacher.last_name || ''}`.trim()
          : 'Anonymous'

        const newFile: SharedFile = {
          id: generateId(),
          fileName: file.name,
          uploadedAt: new Date().toISOString(),
          uploaderName,
          assignmentCount: data.assignments.length,
          subjects,
          gradeLevels,
          assignments: data.assignments,
        }

        const updated = [newFile, ...sharedFiles]
        setSharedFiles(updated)
        saveSharedFiles(updated)
        showToast('success', `Uploaded ${data.assignments.length} assignments successfully!`)
      } catch {
        showToast('error', 'Could not parse file. Make sure it\'s a valid Keystone backup JSON.')
      }
    }
    reader.readAsText(file)

    // Reset input so the same file can be re-uploaded
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const handleDownload = (shared: SharedFile) => {
    const exportData = {
      metadata: {
        app: 'KeyStone Homeschool Platform',
        export_type: 'community_shared',
        exported_at: new Date().toISOString(),
        shared_by: shared.uploaderName,
      },
      assignments: shared.assignments,
    }

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `keystone_community_${shared.id}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleDelete = (id: string) => {
    const updated = sharedFiles.filter((f) => f.id !== id)
    setSharedFiles(updated)
    saveSharedFiles(updated)
    showToast('success', 'Assignment pack removed.')
  }

  const filtered = sharedFiles.filter((f) => {
    if (!searchQuery.trim()) return true
    const q = searchQuery.toLowerCase()
    return (
      f.fileName.toLowerCase().includes(q) ||
      f.uploaderName.toLowerCase().includes(q) ||
      f.subjects.some((s) => s.toLowerCase().includes(q)) ||
      f.gradeLevels.some((g) => g.toLowerCase().includes(q)) ||
      f.assignments.some((a) => a.title.toLowerCase().includes(q) || a.topic.toLowerCase().includes(q))
    )
  })

  return (
    <section className={styles['hub-section']}>
      <div className="container">
        <h2 className="section-title">Assignment Sharing Hub</h2>
        <p className="section-subtitle">
          Upload your Keystone Homeschool backup files to share assignments with the
          community, or download packs shared by other families.
        </p>

        {/* Upload Area */}
        <div className={styles['upload-area']}>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            onChange={handleUpload}
            className={styles['file-input']}
            id="assignment-upload"
          />
          <label htmlFor="assignment-upload" className={styles['upload-label']}>
            <div className={styles['upload-icon']}>
              <Upload size={28} />
            </div>
            <h3>Upload Assignments</h3>
            <p>
              Drop your Keystone Homeschool <code>.json</code> backup file here or
              click to browse
            </p>
            <span className={styles['upload-hint']}>
              <FileJson size={14} /> Accepts .json files exported from the Keystone program
            </span>
          </label>
        </div>

        {/* Search */}
        {sharedFiles.length > 0 && (
          <div className={styles['search-bar']}>
            <Search size={18} />
            <input
              type="text"
              placeholder="Search by subject, grade level, topic, or uploader..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className={styles['search-clear']}>
                <X size={16} />
              </button>
            )}
          </div>
        )}

        {/* Shared Files List */}
        {filtered.length > 0 ? (
          <div className={styles['files-grid']}>
            {filtered.map((shared) => (
              <div key={shared.id} className={styles['file-card']}>
                <div className={styles['file-card-header']}>
                  <div className={styles['file-icon']}>
                    <FileJson size={22} />
                  </div>
                  <div className={styles['file-meta']}>
                    <h4>{shared.fileName}</h4>
                    <p>Shared by {shared.uploaderName}</p>
                  </div>
                </div>

                <div className={styles['file-stats']}>
                  <div className={styles['file-stat']}>
                    <BookOpen size={14} />
                    <span>{shared.assignmentCount} assignment{shared.assignmentCount !== 1 ? 's' : ''}</span>
                  </div>
                  <div className={styles['file-stat']}>
                    <GraduationCap size={14} />
                    <span>{shared.gradeLevels.join(', ')}</span>
                  </div>
                  <div className={styles['file-stat']}>
                    <Clock size={14} />
                    <span>{new Date(shared.uploadedAt).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className={styles['file-tags']}>
                  {shared.subjects.map((s) => (
                    <span key={s} className={styles['tag']}>{s}</span>
                  ))}
                </div>

                {/* Assignment preview list */}
                <div className={styles['assignment-list']}>
                  {shared.assignments.slice(0, 4).map((a, i) => (
                    <div key={i} className={styles['assignment-row']}>
                      <span className={styles['assignment-title']}>{a.title}</span>
                      <span className={styles['assignment-detail']}>
                        {a.questions.length} Q&apos;s &middot; {a.grade_level}
                      </span>
                    </div>
                  ))}
                  {shared.assignments.length > 4 && (
                    <div className={styles['assignment-row-more']}>
                      +{shared.assignments.length - 4} more assignments
                    </div>
                  )}
                </div>

                <div className={styles['file-actions']}>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleDownload(shared)}
                  >
                    <Download size={16} /> Download
                  </button>
                  <button
                    className={styles['delete-btn']}
                    onClick={() => handleDelete(shared.id)}
                    title="Remove"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : sharedFiles.length > 0 ? (
          <div className={styles['empty-state']}>
            <Search size={32} />
            <p>No assignments match your search.</p>
          </div>
        ) : (
          <div className={styles['empty-state']}>
            <BookOpen size={32} />
            <p>No assignments shared yet. Be the first to upload!</p>
          </div>
        )}

        {/* Toast notification */}
        {toast && (
          <div className={`${styles.toast} ${styles[`toast-${toast.type}`]}`}>
            {toast.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
            {toast.message}
          </div>
        )}
      </div>
    </section>
  )
}
