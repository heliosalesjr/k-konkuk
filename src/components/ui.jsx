import { speak } from '../lib/korean'

// One colour per job in the sentence — the same colours are used everywhere in the app.
export const ROLES = {
  subj: { en: 'Subject', kr: '주어', box: 'bg-rose-100 border-rose-300 text-rose-950', tag: 'bg-rose-600', mark: 'text-rose-700' },
  obj: { en: 'Object', kr: '목적어', box: 'bg-emerald-100 border-emerald-300 text-emerald-950', tag: 'bg-emerald-600', mark: 'text-emerald-700' },
  pred: { en: 'Predicate', kr: '서술어', box: 'bg-violet-100 border-violet-300 text-violet-950', tag: 'bg-violet-600', mark: 'text-violet-700' },
  time: { en: 'Time', kr: '', box: 'bg-sky-100 border-sky-300 text-sky-950', tag: 'bg-sky-600', mark: 'text-sky-700' },
  place: { en: 'Place', kr: '', box: 'bg-amber-100 border-amber-300 text-amber-950', tag: 'bg-amber-700', mark: 'text-amber-800' },
  info: { en: 'Key info', kr: '', box: 'bg-yellow-100 border-yellow-300 text-yellow-950', tag: 'bg-yellow-700', mark: 'text-yellow-800' },
  plain: { en: '', kr: '', box: 'bg-white border-slate-200 text-slate-900', tag: 'bg-slate-600', mark: 'text-slate-700' },
}

const SIZES = { sm: 'text-xl px-2.5 py-1', md: 'text-3xl px-3 py-1.5', lg: 'text-4xl sm:text-5xl px-3.5 py-2' }

export function RoleTag({ role }) {
  const r = ROLES[role]
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-extrabold text-white ${r.tag}`}>
      {r.kr && <span className="font-kr font-normal">{r.kr}</span>}
      {r.en}
    </span>
  )
}

// A word (+ optional particle, shown in a white pill) coloured by its role.
export function Block({ role = 'subj', base, particle, gloss, size = 'lg', tag = false }) {
  const r = ROLES[role]
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className={`whitespace-nowrap rounded-2xl border-2 font-kr leading-tight shadow-sm ${SIZES[size]} ${r.box}`}>
        {base}
        {particle && <span className={`ml-0.5 rounded-lg bg-white px-1.5 font-black shadow-sm ${r.mark}`}>{particle}</span>}
      </div>
      {gloss && <div className="max-w-[9.5rem] text-center text-xs font-semibold leading-snug text-slate-600 sm:text-sm">{gloss}</div>}
      {tag && <RoleTag role={role} />}
    </div>
  )
}

export function Sentence({ parts, size = 'lg', tags = false }) {
  return (
    <div className="flex flex-wrap items-start justify-center gap-x-2 gap-y-4 sm:gap-x-3">
      {parts.map((p, i) => (
        <Block key={i} size={size} tag={tags} {...p} />
      ))}
    </div>
  )
}

export function Speak({ text, className = '' }) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation()
        speak(text)
      }}
      aria-label={`Listen: ${text}`}
      title="Listen"
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-lg shadow ring-1 ring-slate-200 transition hover:scale-110 hover:bg-yellow-100 active:scale-95 ${className}`}
    >
      🔊
    </button>
  )
}

const TONES = {
  amber: 'from-amber-300 to-yellow-100',
  rose: 'from-rose-300 to-pink-100',
  sky: 'from-sky-300 to-cyan-100',
  emerald: 'from-emerald-300 to-lime-100',
  violet: 'from-violet-300 to-fuchsia-100',
  orange: 'from-orange-300 to-amber-100',
}

export function Section({ id, icon, kr, title, tone = 'amber', tag, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <header className={`mb-6 flex flex-wrap items-center gap-4 rounded-[2rem] bg-gradient-to-r ${TONES[tone]} p-5 shadow-md sm:p-7`}>
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-white/80 text-4xl shadow-inner sm:h-20 sm:w-20 sm:text-5xl">{icon}</div>
        <div className="min-w-0 flex-1">
          <h2 className="font-kr text-4xl leading-tight text-slate-900 sm:text-6xl">{kr}</h2>
          <p className="text-lg font-extrabold text-slate-800 sm:text-2xl">{title}</p>
        </div>
        {tag && <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-slate-700 shadow-sm">📘 {tag}</span>}
      </header>
      <div className="space-y-6">{children}</div>
    </section>
  )
}

export function Card({ className = '', children }) {
  return <div className={`rounded-3xl border border-white bg-white/90 p-5 shadow-sm sm:p-7 ${className}`}>{children}</div>
}

export function H3({ children, sub }) {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-extrabold text-slate-900 sm:text-2xl">{children}</h3>
      {sub && <p className="text-sm text-slate-600 sm:text-base">{sub}</p>}
    </div>
  )
}

const CALLOUTS = {
  tip: { icon: '💡', cls: 'border-yellow-300 bg-yellow-50' },
  note: { icon: '📌', cls: 'border-sky-300 bg-sky-50' },
  warn: { icon: '⚠️', cls: 'border-rose-300 bg-rose-50' },
  rule: { icon: '✅', cls: 'border-emerald-300 bg-emerald-50' },
}

export function Callout({ kind = 'tip', title, children }) {
  const c = CALLOUTS[kind]
  return (
    <div className={`flex gap-3 rounded-2xl border-2 p-4 ${c.cls}`}>
      <div className="text-2xl">{c.icon}</div>
      <div className="min-w-0 space-y-1 text-sm leading-relaxed text-slate-800 sm:text-base">
        {title && <p className="font-extrabold text-slate-900">{title}</p>}
        {children}
      </div>
    </div>
  )
}

// Korean sentence + English meaning + listen button.
export function Line({ kr, en, big = false }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
      <Speak text={kr} />
      <div className="min-w-0">
        <div className={`font-kr leading-snug text-slate-900 ${big ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>{kr}</div>
        {en && <div className="text-sm font-semibold text-slate-600">{en}</div>}
      </div>
    </div>
  )
}

// A word with its last syllable highlighted (that's the one that decides the particle).
export function Word({ text, className = '' }) {
  const chars = [...text]
  const last = chars.pop()
  return (
    <span className={`font-kr ${className}`}>
      {chars.join('')}
      <span className="rounded-md bg-yellow-200 px-0.5">{last}</span>
    </span>
  )
}
