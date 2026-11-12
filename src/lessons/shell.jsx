import { CourseContext } from '../components/course-ctx'
import CourseNav, { CourseFooter } from '../components/CourseNav'
import { pageOf, unitOf } from '../course'

const HERO_TONES = {
  verbs: 'from-sky-300 via-cyan-200 to-emerald-300',
  honorifics: 'from-violet-300 via-fuchsia-200 to-sky-300',
  counters: 'from-emerald-300 via-lime-200 to-amber-300',
  irregulars: 'from-rose-300 via-orange-200 to-amber-300',
  grammar: 'from-amber-300 via-yellow-200 to-rose-300',
}

// Shared frame for the five review pages. The navigation, the section list and the
// prev/next links all come from src/course.js, so this page never disagrees with the map.
export function LessonShell({ id, kr, title, source, intro, children }) {
  const page = pageOf(id)
  const unit = unitOf(id)
  const sections = page.sections.filter((s) => !['start', 'top'].includes(s.id))

  return (
    <CourseContext.Provider value={id}>
      <div className="min-h-screen">
        <CourseNav page={id} />
        <main className="mx-auto max-w-5xl space-y-16 px-4 pb-24 pt-6 sm:space-y-20">
          <header id="top" className={`scroll-mt-32 rounded-[2.5rem] bg-gradient-to-br ${HERO_TONES[id]} p-6 shadow-xl sm:p-10`}>
            <p className="text-sm font-extrabold uppercase tracking-widest text-slate-800/70">
              유닛 {unit.n} · {unit.kr} · {source}
            </p>
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

          <CourseFooter page={id} />
        </main>
      </div>
    </CourseContext.Provider>
  )
}
