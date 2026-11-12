import { useEffect, useState } from 'react'

// The five pages of the 3rd batch. Every page shows this same list, so you can always
// jump to another lesson without going back to the course home.
export const LESSONS = [
  { id: 'verbs', href: 'verbs.html', icon: '🧪', kr: '동사 활용', en: 'Verb conjugation', sub: 'Present · past · future · 40 verbs' },
  { id: 'honorifics', href: 'honorifics.html', icon: '🙇', kr: '존댓말', en: 'Formal & honorific', sub: '-습니다 · -(으)시- · humble verbs' },
  { id: 'counters', href: 'counters.html', icon: '🔢', kr: '수 · 부사 · 조사', en: 'Counters, adverbs & particles', sub: 'Counting, money, 조사 복습' },
  { id: 'irregulars', href: 'irregulars.html', icon: '⚡', kr: '불규칙 · 관형형', en: 'Irregulars & adjectives', sub: 'ㄷ ㅂ ㅡ ㄹ · adjective + noun' },
  { id: 'grammar', href: 'grammar.html', icon: '🧰', kr: '문법 · 연결어미', en: 'Grammar box & connectors', sub: '-아서 vs -(으)니까 · exam tips' },
]

const HERO_TONES = {
  verbs: 'from-sky-300 via-cyan-200 to-emerald-300',
  honorifics: 'from-violet-300 via-fuchsia-200 to-sky-300',
  counters: 'from-emerald-300 via-lime-200 to-amber-300',
  irregulars: 'from-rose-300 via-orange-200 to-amber-300',
  grammar: 'from-amber-300 via-yellow-200 to-rose-300',
}

// Row 1: the five lessons. Row 2: the sections inside the page you are on.
function Nav({ current, sections }) {
  const [active, setActive] = useState(sections[0]?.id)
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-30% 0px -60% 0px' },
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [sections])

  return (
    <nav className="sticky top-0 z-30 border-b border-white/60 bg-amber-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl gap-2 overflow-x-auto px-4 pb-1.5 pt-2.5">
        {LESSONS.map((l) => (
          <a
            key={l.id}
            href={l.href}
            aria-current={l.id === current ? 'page' : undefined}
            className={`shrink-0 rounded-full px-3.5 py-1 font-kr text-base shadow-sm transition ${
              l.id === current ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 hover:bg-yellow-100'
            }`}
          >
            {l.icon} {l.kr}
          </a>
        ))}
        <a href="index.html" className="shrink-0 rounded-full bg-white px-3.5 py-1 text-base font-bold text-slate-600 shadow-sm hover:bg-yellow-100">
          ← Course
        </a>
      </div>
      <div className="mx-auto flex max-w-5xl gap-2 overflow-x-auto px-4 pb-2.5 pt-0.5">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`shrink-0 rounded-full px-4 py-1.5 font-kr text-lg shadow-sm transition ${
              active === s.id ? 'bg-violet-600 text-white' : 'bg-white text-slate-700 hover:bg-yellow-100'
            }`}
          >
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

// The page header: which handout this page comes from, and what it covers.
export function LessonShell({ id, kr, title, source, intro, sections, children }) {
  const lesson = LESSONS.find((l) => l.id === id)
  const others = LESSONS.filter((l) => l.id !== id)
  return (
    <div className="min-h-screen">
      <Nav current={id} sections={sections} />
      <main className="mx-auto max-w-5xl space-y-16 px-4 pb-24 pt-6 sm:space-y-20">
        <header id="top" className={`scroll-mt-32 rounded-[2.5rem] bg-gradient-to-br ${HERO_TONES[id]} p-6 shadow-xl sm:p-10`}>
          <p className="text-sm font-extrabold uppercase tracking-widest text-slate-800/70">건국 한국어 1-1 · 3차 복습 · {source}</p>
          <h1 className="mt-2 font-kr text-6xl leading-tight text-slate-900 sm:text-8xl">{kr}</h1>
          <p className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">{title}</p>
          <p className="mt-4 max-w-2xl text-base font-semibold text-slate-800 sm:text-lg">{intro}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="rounded-full bg-white/75 px-3 py-1 font-kr text-base text-slate-800 shadow-sm transition hover:bg-white">
                {s.label}
              </a>
            ))}
          </div>
        </header>

        {children}

        <section className="space-y-4">
          <h2 className="text-center text-xl font-extrabold text-slate-700">Keep going 👉</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {others.map((l) => (
              <a key={l.id} href={l.href} className="rounded-[2rem] bg-white/90 p-5 shadow-md ring-2 ring-white transition hover:scale-[1.01] hover:bg-yellow-50">
                <div className="text-xs font-extrabold uppercase tracking-wide text-slate-500">{l.en}</div>
                <div className="font-kr text-3xl text-slate-900">
                  {l.icon} {l.kr}
                </div>
                <div className="text-sm font-semibold text-slate-600">{l.sub} →</div>
              </a>
            ))}
          </div>
        </section>

        <footer className="pt-4 text-center">
          <p className="font-kr text-3xl text-slate-700">수고했어요! 🎉</p>
          <p className="text-sm text-slate-500">
            {lesson.en} — Korean Regular Course · Konkuk University
          </p>
        </footer>
      </main>
    </div>
  )
}
