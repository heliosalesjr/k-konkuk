import { useState } from 'react'
import { PAGES, TOPICS, TOTAL_SECTIONS, UNITS, pagesOfUnit, stageLabel } from '../course'
import { Speak } from '../components/ui'

/* The course map. Two ways in, because there are two ways you look for something:
   by unit  — "what did we do that week?"
   by topic — "where is the past tense explained?"                                   */

function UnitBlock({ unit }) {
  const pages = pagesOfUnit(unit.id)
  const count = pages.reduce((n, p) => n + p.sections.filter((s) => !['start', 'top'].includes(s.id)).length, 0)
  return (
    <div className={`rounded-[2rem] bg-white/90 p-5 shadow-md ring-2 ${unit.ring} sm:p-6`}>
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <span className={`flex h-10 w-10 items-center justify-center rounded-2xl text-xl font-black text-white ${unit.dot}`}>{unit.n}</span>
        <div className="min-w-0 flex-1">
          <h3 className="font-kr text-3xl leading-tight text-slate-900">
            {unit.icon} {unit.kr}
          </h3>
          <p className="text-sm font-extrabold uppercase tracking-wide text-slate-500">{unit.en}</p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-extrabold text-slate-600">{count} sections</span>
      </div>
      <p className="mb-3 text-sm leading-relaxed text-slate-700">{unit.blurb}</p>
      <div className="grid gap-2 sm:grid-cols-2">
        {pages.map((p) => (
          <a key={p.id} href={p.href} className={`rounded-2xl bg-gradient-to-br ${unit.tone} p-4 shadow-sm transition hover:scale-[1.01]`}>
            <div className="font-kr text-2xl leading-tight text-slate-900">
              {p.icon} {p.kr}
            </div>
            <div className="text-xs font-bold text-slate-700">{p.en}</div>
            <div className="mt-1.5 flex flex-wrap gap-1">
              {p.sections
                .filter((s) => !['start', 'top'].includes(s.id))
                .map((s) => (
                  <span key={s.id} className="rounded-lg bg-white/70 px-1.5 py-0.5 font-kr text-xs text-slate-700">
                    {s.label}
                  </span>
                ))}
            </div>
          </a>
        ))}
      </div>
      <p className="mt-2.5 text-xs font-semibold text-slate-400">from {unit.source}</p>
    </div>
  )
}

// One topic, shown as the ladder it actually is.
function TopicRow({ topic }) {
  const [open, setOpen] = useState(false)
  const stages = topic.stages.map(stageLabel)
  return (
    <div className="rounded-2xl bg-white/90 p-3 shadow-sm ring-1 ring-white">
      <button type="button" onClick={() => setOpen(!open)} className="flex w-full items-center gap-2 text-left">
        <span className="text-xl">{topic.icon}</span>
        <span className="font-kr text-xl text-slate-900">{topic.kr}</span>
        <span className="text-sm font-bold text-slate-500">{topic.en}</span>
        <span className="ml-auto flex items-center gap-1.5">
          {stages.map((st, i) => (
            <span key={i} className={`h-2 w-2 rounded-full ${st.unit.dot}`} title={`${st.unit.kr} · ${st.section.label}`} />
          ))}
          <span className="ml-1 text-xs font-extrabold text-slate-400">{stages.length > 1 ? `${stages.length} steps` : '1 step'}</span>
          <span aria-hidden className="text-slate-400">{open ? '▴' : '▾'}</span>
        </span>
      </button>
      {open && (
        <ol className="animate-pop mt-2.5 space-y-1.5">
          {stages.map((st, i) => (
            <li key={st.href}>
              <a href={st.href} className="flex items-start gap-2 rounded-xl bg-slate-50 p-2.5 transition hover:bg-yellow-50">
                <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-black text-white ${st.unit.dot}`}>
                  {i + 1}
                </span>
                <span className="min-w-0">
                  <span className="font-kr text-lg text-slate-900">{st.section.label}</span>{' '}
                  <span className="text-xs font-bold text-slate-400">· {st.page.kr}</span>
                  <span className="block text-xs leading-snug text-slate-600">{topic.stages[i].adds}</span>
                </span>
              </a>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}

export default function HomeApp() {
  const [q, setQ] = useState('')
  const needle = q.trim().toLowerCase()
  const topics = needle
    ? TOPICS.filter(
        (t) =>
          t.kr.includes(q.trim()) ||
          t.en.toLowerCase().includes(needle) ||
          t.stages.some((s) => s.adds.toLowerCase().includes(needle)),
      )
    : TOPICS

  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-5xl space-y-10 px-4 pb-24 pt-6">
        <header className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-yellow-300 via-rose-300 to-sky-300 p-6 shadow-xl sm:p-10">
          <div className="pointer-events-none absolute -right-6 -top-6 text-[9rem] opacity-20 sm:text-[13rem]">🇰🇷</div>
          <p className="text-sm font-extrabold uppercase tracking-widest text-slate-800/70">건국대학교 · Konkuk University</p>
          <h1 className="mt-2 font-kr text-5xl leading-tight text-slate-900 sm:text-7xl">한국어 1-1</h1>
          <p className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">Korean Regular Course</p>
          <p className="mt-4 max-w-2xl text-base font-semibold text-slate-800 sm:text-lg">
            {UNITS.length} units · {PAGES.length} pages · {TOTAL_SECTIONS} sections. Start at unit 1 and read forward, or use the topic index below to jump
            straight to a subject.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Speak text="한국어 공부를 시작해요" />
            <span className="text-sm font-bold text-slate-800">Tap 🔊 anywhere in the course to hear Korean out loud.</span>
          </div>
        </header>

        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">📚 By unit</h2>
            <p className="text-sm text-slate-600">The order the classes happened in — which is also the order of difficulty.</p>
          </div>
          {UNITS.map((u) => (
            <UnitBlock key={u.id} unit={u} />
          ))}
        </section>

        <section className="space-y-3">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div className="min-w-0">
              <h2 className="text-2xl font-extrabold text-slate-900">🔎 By topic</h2>
              <p className="max-w-2xl text-sm text-slate-600">
                A subject is not taught once and dropped — it comes back, each time with more to it. Open a topic to see its whole ladder and where each step
                lives.
              </p>
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="search a topic…"
              aria-label="Search topics"
              className="w-48 rounded-2xl border-2 border-slate-200 bg-white px-4 py-1.5 text-sm font-semibold shadow-sm focus:border-violet-400 focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap gap-3 rounded-2xl bg-white/70 px-4 py-2 text-xs font-bold text-slate-600">
            {UNITS.map((u) => (
              <span key={u.id} className="flex items-center gap-1.5">
                <span className={`h-2.5 w-2.5 rounded-full ${u.dot}`} /> {u.n} · {u.kr}
              </span>
            ))}
          </div>
          <div className="space-y-2">
            {topics.map((t) => (
              <TopicRow key={t.id} topic={t} />
            ))}
            {!topics.length && <p className="rounded-2xl bg-white/80 p-4 text-center text-sm text-slate-500">No topic matches “{q}”.</p>}
          </div>
        </section>

        <footer className="pt-4 text-center">
          <p className="font-kr text-3xl text-slate-700">화이팅! 💪</p>
          <p className="text-sm text-slate-500">Korean Regular Course · Konkuk University</p>
        </footer>
      </main>
    </div>
  )
}
