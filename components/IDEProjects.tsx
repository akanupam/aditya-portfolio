'use client'

import { useState } from 'react'
import Link from 'next/link'
import { portfolioData } from '../data/portfolio'

type Project = (typeof portfolioData.projects)[number]

/* ── helpers ─────────────────────────────────────────────── */

function getIcon(p: Project): string {
  if (p.type === 'AI/ML') return '🐍'
  if (p.type === 'Mobile App') return '📱'
  return '🌐'
}

function toFileName(p: Project): string {
  return (
    p.title
      .toLowerCase()
      .replace(/[–—]/g, '-')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .split(/[\s-]+/)
      .filter(Boolean)
      .slice(0, 2)
      .join('-')
  )
}

type EditorLine = { text: string; cls?: string }

function buildLines(p: Project): EditorLine[] {
  const lines: EditorLine[] = []
  const push = (text: string, cls?: string) => lines.push({ text, cls })

  push(`# ${p.title}`, 'ide-h1')
  push('')
  push(`  type     =  "${p.type}"`, 'ide-meta')
  push(
    `  featured =  ${p.featured ? 'True   # ★ pinned' : 'False'}`,
    'ide-meta'
  )
  push(`  stack    =  [${p.tags.map(t => `"${t}"`).join(', ')}]`, 'ide-meta')
  push('')
  push('"""', 'ide-comment')

  // Word-wrap description at ~60 chars
  const words = p.desc.split(' ')
  let cur = ''
  for (const word of words) {
    const next = cur ? `${cur} ${word}` : word
    if (next.length > 60 && cur) {
      push(cur, 'ide-comment')
      cur = word
    } else {
      cur = next
    }
  }
  if (cur) push(cur, 'ide-comment')

  push('"""', 'ide-comment')
  push('')
  push('REPO = (', 'ide-keyword')
  push(`    "${p.github}"`, 'ide-string')
  push(')', 'ide-keyword')
  push('')
  return lines
}

/* ── component ───────────────────────────────────────────── */

export default function IDEProjects() {
  const { projects } = portfolioData
  const [activeIdx, setActiveIdx] = useState(0)
  const [openTabs, setOpenTabs] = useState<number[]>([0])
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const openFile = (idx: number) => {
    setActiveIdx(idx)
    if (!openTabs.includes(idx)) setOpenTabs(prev => [...prev, idx])
    setSidebarOpen(false)
  }

  const closeTab = (e: React.MouseEvent, idx: number) => {
    e.stopPropagation()
    const next = openTabs.filter(t => t !== idx)
    if (next.length === 0) return // never close last tab
    setOpenTabs(next)
    if (activeIdx === idx) setActiveIdx(next[next.length - 1])
  }

  const lines = buildLines(projects[activeIdx])

  return (
    <div className="ide-wrapper">
      {/* ── Tab bar ──────────────────────────────────────── */}
      <div className="ide-tabbar">
        <button
          className="ide-sidebar-toggle"
          onClick={() => setSidebarOpen(s => !s)}
          aria-label="Toggle file explorer"
          title="Toggle Explorer"
        >
          ☰
        </button>
        {openTabs.map(tabIdx => (
          <div
            key={tabIdx}
            className={`ide-tab ${activeIdx === tabIdx ? 'ide-tab-active' : ''}`}
            onClick={() => setActiveIdx(tabIdx)}
          >
            <span className="ide-tab-icon">{getIcon(projects[tabIdx])}</span>
            <span className="ide-tab-name">{toFileName(projects[tabIdx])}</span>
            <span
              className="ide-tab-close"
              onClick={e => closeTab(e, tabIdx)}
              role="button"
              tabIndex={0}
              aria-label={`Close ${toFileName(projects[tabIdx])}`}
              onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && closeTab(e as any, tabIdx)}
            >
              ×
            </span>
          </div>
        ))}
      </div>

      {/* ── Main body ────────────────────────────────────── */}
      <div className="ide-body">
        {sidebarOpen && (
          <div
            className="ide-sidebar-backdrop"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        {/* Sidebar */}
        <aside className={`ide-sidebar${sidebarOpen ? ' ide-sidebar-open' : ''}`}>
          <div className="ide-sidebar-title">EXPLORER</div>
          <div className="ide-sidebar-group-label">▼ PROJECTS</div>
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`ide-file-row ${activeIdx === idx ? 'ide-file-active' : ''}`}
              onClick={() => openFile(idx)}
              role="button"
              tabIndex={0}
              aria-label={`Open ${toFileName(project)}`}
              onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && openFile(idx)}
            >
              <span className="ide-file-icon">{getIcon(project)}</span>
              <span className="ide-file-name">{toFileName(project)}</span>
              {project.featured && (
                <span className="ide-featured-dot" title="Featured" />
              )}
            </div>
          ))}
        </aside>

        {/* Editor pane */}
        <div className="ide-editor-pane">
          {/* Breadcrumb */}
          <div className="ide-breadcrumb">
            projects &rsaquo; {toFileName(projects[activeIdx])}
          </div>

          {/* Code lines */}
          <div className="ide-code">
            {lines.map((line, i) => (
              <div key={i} className="ide-code-line">
                <span className="ide-line-num">{i + 1}</span>
                <span className={`ide-line-text ${line.cls ?? ''}`}>
                  {line.text}
                </span>
              </div>
            ))}
          </div>

          {/* GitHub CTA inside editor */}
          <div className="ide-editor-footer">
            <a
              href={projects[activeIdx].github}
              target="_blank"
              rel="noopener noreferrer"
              className="ide-gh-link"
            >
              ↗ Open on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* ── Status bar ───────────────────────────────────── */}
      <div className="ide-statusbar">
        <span className="ide-status-item ide-status-branch">⎇ main</span>
        <span className="ide-status-item ide-status-count">{projects.length} files</span>
        <span className="ide-status-item ide-status-encoding">UTF-8</span>
        <Link href="/projects" className="ide-status-viewall">
          view all projects →
        </Link>
      </div>
    </div>
  )
}
