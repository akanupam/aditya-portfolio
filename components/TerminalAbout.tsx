'use client'

import { useEffect, useRef, useState, KeyboardEvent } from 'react'

/* ── types ─────────────────────────────────────────────────────── */

type LineKind = 'cmd' | 'out' | 'err' | 'gap' | 'sys'
type TLine = { kind: LineKind; text: string }

/* ── boot sequence (auto-typed on scroll-in) ───────────────────── */

type Step = { command: string; outputs: string[]; delay: number }

const BOOT: Step[] = [
  {
    command: 'whoami',
    outputs: [
      'aditya   —   ai engineer & full-stack developer',
      'status   :   actively building  |  india',
    ],
    delay: 380,
  },
  {
    command: 'cat bio.txt',
    outputs: [
      'I taught a computer to understand where Indian words break.',
      'I build end-to-end: datasets → models → APIs → interfaces.',
      'Currently deep in agentic systems & modular ML frameworks.',
    ],
    delay: 500,
  },
  {
    command: 'cat education.txt',
    outputs: [
      'degree  :  B.Tech — Computer Science & Engineering',
      'school  :  Lovely Professional University',
      'year    :  2027  (expected)',
    ],
    delay: 400,
  },
  {
    command: 'echo $OPEN_TO',
    outputs: ['collaborations in AI  ·  NLP  ·  agentic systems  ·  research'],
    delay: 260,
  },
]

/* ── interactive command registry ──────────────────────────────── */

type CmdFn = (args: string[]) => string[]

const COMMANDS: Record<string, CmdFn> = {
  help: () => [
    'available commands:',
    '  whoami          — who is aditya',
    '  cat bio.txt     — extended background',
    '  cat education.txt',
    '  ls ./interests/ — what I nerd about',
    '  ls ./projects/  — what I have shipped',
    '  cat <project>   — details on a project',
    '  skills          — technology stack',
    '  contact         — ways to reach me',
    '  echo $OPEN_TO   — what I am looking for',
    '  clear           — clear screen',
    '  history         — command history',
    '  man aditya      — full manual page',
  ],

  whoami: () => [
    'aditya   —   ai engineer & full-stack developer',
    'status   :   actively building  |  india',
  ],

  'cat bio.txt': () => [
    'I taught a computer to understand where Indian words break.',
    'I build end-to-end: datasets → models → APIs → interfaces.',
    'I like the whole stack — experiments, training, deployment.',
    'Currently deep in agentic systems & modular ML frameworks.',
  ],

  'cat education.txt': () => [
    'degree  :  B.Tech — Computer Science & Engineering',
    'school  :  Lovely Professional University, Punjab',
    'year    :  2027  (expected)',
  ],

  'ls ./interests/': () => [
    'agentic-systems/     speech-processing/   computer-vision/',
    'deep-learning/       nlp/                 devops-and-cloud/',
    'web-development/     mobile-apps/',
  ],

  'ls ./projects/': () => [
    'college-hub.dart          ← peer-to-peer academic sharing app',
    'rag-query-resolver.py     ← document knowledge base via RAG',
    'indian-scripts.py         ← hyphenation & syllabification NLP',
    'custom-tool-agent.py      ← agentic workflow framework',
    'tavily-search-agent.py    ← autonomous web research agent',
    'itweet-django.py          ← social media web app',
    'jharkhand-planner.js      ← trip itinerary planner',
    'agentic-joking-bot.py     ← LLM-powered developer jokes',
    'pytorch-journey/          ← deep learning experiments',
  ],

  'cat college-hub.dart': () => [
    '# College Hub — Peer-to-Peer Academic Sharing App',
    'stack    :  Flutter · Supabase · Material 3',
    'type     :  Mobile App  ★ featured',
    '"""',
    'Cross-platform mobile app enabling students to share',
    'study materials and access internship/job opportunities.',
    '"""',
    'repo     :  https://github.com/akanupam/lms',
  ],

  'cat rag-query-resolver.py': () => [
    '# RAG-Powered Query Resolver',
    'stack    :  Python · LangChain · Gemini API',
    'type     :  AI/ML  ★ featured',
    '"""',
    'Transforms static text files into a conversational knowledge',
    'base using RAG architecture. Query your own documents.',
    '"""',
    'repo     :  https://github.com/akanupam/RAG-based-Query-Resolver',
  ],

  'cat indian-scripts.py': () => [
    '# Hyphenification & Syllabification of Indian Scripts',
    'stack    :  Python · Linguistics · NLP · Unicode',
    'type     :  AI/ML  ★ featured',
    '"""',
    'Linguistic processing tool for Indian scripts — breaks words',
    'into hyphenation points and syllabic units algorithmically.',
    '"""',
    'repo     :  https://github.com/akanupam/hyphenification-and-syllabification-of-indian-scripts',
  ],

  'cat custom-tool-agent.py': () => [
    '# Custom Tool Agent',
    'stack    :  Python · Agents · Automation',
    '"""',
    'Demonstrates automated tooling, intelligent task execution',
    'and modular agentic workflows.',
    '"""',
    'repo     :  https://github.com/akanupam/Custom-tool-agent',
  ],

  'cat tavily-search-agent.py': () => [
    '# Tavily Search Agent',
    'stack    :  Python · Agents · APIs',
    '"""',
    'Autonomous search agent integrating the Tavily API for',
    'intelligent web search, summarization, and research.',
    '"""',
    'repo     :  https://github.com/akanupam/tavily-search-agent',
  ],

  'cat pytorch-journey': () => [
    '# PyTorch Journey',
    'stack    :  Python · PyTorch · Deep Learning',
    '"""',
    'Collection of deep learning experiments: model training,',
    'optimization techniques, and PyTorch fundamentals.',
    '"""',
    'repo     :  https://github.com/akanupam/PyTorch-journey',
  ],

  skills: () => [
    'core_languages     :  Python  C++  Java  JavaScript  TypeScript',
    'ai_ml             :  PyTorch  LangChain  RAG  Agentic Workflows',
    'frontend          :  React  Next.js  HTML/CSS  Responsive Design',
    'backend           :  Django  FastAPI  Node.js  REST APIs',
    'mobile            :  Flutter  Material Design',
    'databases         :  PostgreSQL  MongoDB  Supabase  SQLModel',
    'devops            :  Docker  CI/CD  Linux  Git',
    'emerging          :  Agentic Architectures  LLM Workflows',
  ],

  contact: () => [
    'email     :  aditanupam@gmail.com',
    'github    :  https://github.com/akanupam',
    'linkedin  :  https://www.linkedin.com/in/aditanupam/',
  ],

  'echo $open_to': () => [
    'collaborations in AI  ·  NLP  ·  agentic systems  ·  research',
  ],

  'echo $OPEN_TO': () => [
    'collaborations in AI  ·  NLP  ·  agentic systems  ·  research',
  ],

  'man aditya': () => [
    'ADITYA(1)                  User Manual                  ADITYA(1)',
    '',
    'NAME',
    '       aditya — AI engineer, full-stack developer, builder',
    '',
    'SYNOPSIS',
    '       aditya [--build | --research | --collaborate] <project>',
    '',
    'DESCRIPTION',
    '       Aditya is a final-year CS undergrad who builds AI systems',
    '       end-to-end. Specialises in NLP for Indian languages, RAG',
    '       pipelines, agentic frameworks, and production ML stacks.',
    '',
    'OPTIONS',
    '       --build        Ships working prototypes fast',
    '       --research     Digs into papers until it makes sense',
    '       --collaborate  Open to interesting problems',
    '',
    'BUGS',
    '       Occasionally ships at 2am. Coffee dependent.',
    '',
    'SEE ALSO',
    '       github(1), linkedin(1), email(1)',
  ],
}

/* resolve a raw input string to a command fn key */
function resolveCmd(raw: string): CmdFn | null {
  const trimmed = raw.trim()
  // exact match first
  if (COMMANDS[trimmed]) return COMMANDS[trimmed]
  // case-insensitive fallback
  const lower = trimmed.toLowerCase()
  for (const key of Object.keys(COMMANDS)) {
    if (key.toLowerCase() === lower) return COMMANDS[key]
  }
  return null
}

/* ── component ─────────────────────────────────────────────────── */

export default function TerminalAbout() {
  const [lines, setLines] = useState<TLine[]>([])
  const [inputVal, setInputVal] = useState('')
  const [cmdHistory, setCmdHistory] = useState<string[]>([])
  const [histIdx, setHistIdx] = useState(-1)
  const [phase, setPhase] = useState<'idle' | 'booting' | 'ready'>('idle')

  // boot-sequence state
  const [bootStep, setBootStep] = useState(0)
  const [bootChar, setBootChar] = useState(0)

  const wrapperRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  /* scroll the terminal body — NOT scrollIntoView which hijacks the page */
  useEffect(() => {
    const el = bodyRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [lines, bootChar, phase])

  /* trigger boot on scroll-in */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && phase === 'idle') {
          setPhase('booting')
        }
      },
      { threshold: 0.2 }
    )
    if (wrapperRef.current) observer.observe(wrapperRef.current)
    return () => observer.disconnect()
  }, [phase])

  /* typewriter engine — runs during 'booting' phase */
  useEffect(() => {
    if (phase !== 'booting') return
    if (bootStep >= BOOT.length) {
      setPhase('ready')
      // hint to user
      setLines(prev => [
        ...prev,
        { kind: 'sys', text: '─── interactive shell ready — type  help  to explore ───' },
        { kind: 'gap', text: '' },
      ])
      return
    }

    const step = BOOT[bootStep]

    if (bootChar < step.command.length) {
      const t = setTimeout(
        () => setBootChar(c => c + 1),
        45 + Math.random() * 45
      )
      return () => clearTimeout(t)
    }

    // command fully typed — commit it + outputs, advance
    const t = setTimeout(() => {
      setLines(prev => [
        ...prev,
        { kind: 'cmd', text: step.command },
        ...step.outputs.map(o => ({ kind: 'out' as LineKind, text: o })),
        { kind: 'gap', text: '' },
      ])
      setBootChar(0)
      setBootStep(s => s + 1)
    }, step.delay)
    return () => clearTimeout(t)
  }, [phase, bootStep, bootChar])

  /* focus input when user clicks anywhere in the terminal */
  const focusInput = () => inputRef.current?.focus()

  /* handle Enter */
  const handleSubmit = () => {
    const raw = inputVal.trim()
    if (!raw) return

    const newHistory = [raw, ...cmdHistory].slice(0, 50)
    setCmdHistory(newHistory)
    setHistIdx(-1)

    // echo the command
    const nextLines: TLine[] = [{ kind: 'cmd', text: raw }]

    if (raw === 'clear') {
      setLines([])
      setInputVal('')
      return
    }

    if (raw === 'history') {
      nextLines.push(
        ...newHistory.map((h, i) => ({
          kind: 'out' as LineKind,
          text: `  ${String(i + 1).padStart(3)}  ${h}`,
        }))
      )
    } else {
      const fn = resolveCmd(raw)
      if (fn) {
        nextLines.push(
          ...fn([]).map(o => ({ kind: 'out' as LineKind, text: o }))
        )
      } else {
        nextLines.push({
          kind: 'err',
          text: `zsh: command not found: ${raw}  (try  help)`,
        })
      }
    }

    nextLines.push({ kind: 'gap', text: '' })
    setLines(prev => [...prev, ...nextLines])
    setInputVal('')
  }

  /* arrow-key history navigation + Enter + Tab autocomplete */
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit()
      return
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(histIdx + 1, cmdHistory.length - 1)
      setHistIdx(next)
      setInputVal(cmdHistory[next] ?? '')
      return
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = histIdx - 1
      if (next < 0) { setHistIdx(-1); setInputVal(''); return }
      setHistIdx(next)
      setInputVal(cmdHistory[next] ?? '')
      return
    }

    if (e.key === 'Tab') {
      e.preventDefault()
      const val = inputVal.toLowerCase().trim()
      if (!val) return
      const all = Object.keys(COMMANDS)
      const match = all.find(k => k.toLowerCase().startsWith(val))
      if (match) setInputVal(match)
      return
    }
  }

  const isBooting = phase === 'booting' && bootStep < BOOT.length

  return (
    <div className="terminal-wrapper" ref={wrapperRef} onClick={focusInput}>
      {/* macOS chrome */}
      <div className="terminal-chrome">
        <div className="terminal-dots">
          <span className="t-dot t-red" />
          <span className="t-dot t-yellow" />
          <span className="t-dot t-green" />
        </div>
        <span className="terminal-title-bar">aditya@portfolio: ~</span>
        <span className="terminal-shell-tag">zsh</span>
      </div>

      {/* Output body */}
      <div className="terminal-body" ref={bodyRef}>
        {lines.map((line, i) => {
          if (line.kind === 'gap') return <div key={i} className="t-gap" />
          if (line.kind === 'sys')
            return <div key={i} className="t-line t-sys">{line.text}</div>
          return (
            <div key={i} className={`t-line t-${line.kind}`}>
              {line.kind === 'cmd' && <span className="t-prompt">❯&nbsp;</span>}
              {(line.kind === 'out' || line.kind === 'err') && (
                <span className="t-indent" />
              )}
              <span
                className={
                  line.kind === 'cmd'
                    ? 't-cmd-text'
                    : line.kind === 'err'
                    ? 't-err-text'
                    : 't-out-text'
                }
              >
                {line.text}
              </span>
            </div>
          )
        })}

        {/* Boot typewriter line */}
        {isBooting && (
          <div className="t-line t-cmd">
            <span className="t-prompt">❯&nbsp;</span>
            <span className="t-cmd-text">
              {BOOT[bootStep].command.substring(0, bootChar)}
              <span className="t-cursor">█</span>
            </span>
          </div>
        )}

        {/* Interactive input line — shown after boot */}
        {phase === 'ready' && (
          <div className="t-line t-cmd t-input-line">
            <span className="t-prompt">❯&nbsp;</span>
            <input
              ref={inputRef}
              className="t-input"
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
              aria-label="terminal input"
              placeholder=""
            />
          </div>
        )}

      </div>
    </div>
  )
}

