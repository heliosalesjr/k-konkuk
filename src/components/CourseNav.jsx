import { useEffect, useState } from 'react'
import { PAGES, UNITS, pageOf, pagesOfUnit, unitOf } from '../course'

/* The same navigation on every page of the course, so that moving around never changes
   the shape of the frame you are moving inside.

   Row 1 — where you are (unit › page) and a 🗺️ button that opens the whole map.
   Row 2 — the sections of the page you are on.                                      */

function MapPanel({ current, onClose }) {
  return (
    <div className="max-h-[60vh] overflow-y-auto border-t border-white/60 bg-white/95 px-4 py-4 shadow-inner">
      <div className="mx-auto max-w-5xl space-y-4">
        {UNITS.map((u) => (
          <div key={u.id}>
            <div className="mb-1.5 flex items-center gap-2">
              <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-black text-white ${u.dot}`}>{u.n}</span>
              <span className="font-kr text-xl text-slate-900">{u.kr}</span>
              <span className="text-xs font-extrabold uppercase tracking-wide text-slate-400">{u.en}</span>
            </div>
            <div className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
              {pagesOfUnit(u.id).map((p) => {
                const here = p.id === current
                return (
                  <a
                    key={p.id}
                    href={here ? undefined : p.href}
                    aria-current={here ? 'page' : undefined}
                    onClick={here ? onClose : undefined}
                    className={`rounded-2xl px-3 py-2 transition ${here ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-800 hover:bg-yellow-100'}`}
                  >
                    <div className="font-kr text-lg leading-tight">
                      {p.icon} {p.kr}
                    </div>
                    <div className={`text-[11px] font-bold ${here ? 'text-slate-300' : 'text-slate-500'}`}>
                      {here ? 'you are here' : p.en}
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        ))}
        <a href="index.html" className="block rounded-2xl bg-violet-100 px-3 py-2 text-center text-sm font-extrabold text-violet-900 transition hover:bg-violet-200">
          🗺️ Course map · topic index
        </a>
      </div>
    </div>
  )
}

export default function CourseNav({ page }) {
  const p = pageOf(page)
  const u = unitOf(page)
  const sections = p.sections
  const [open, setOpen] = useState(false)
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
      <div className="mx-auto flex max-w-5xl items-center gap-2 px-4 pb-1.5 pt-2.5">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className={`shrink-0 rounded-full px-3 py-1 text-sm font-extrabold shadow-sm transition ${open ? 'bg-slate-900 text-white' : 'bg-white text-slate-700 hover:bg-yellow-100'}`}
        >
          🗺️ {open ? 'close' : 'map'}
        </button>
        {/* breadcrumb: unit › page — the one thing that tells you where you are */}
        <div className="flex min-w-0 items-center gap-1.5 overflow-x-auto">
          <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-black text-white ${u.dot}`}>{u.n}</span>
          <span className="shrink-0 font-kr text-base text-slate-500">{u.kr}</span>
          <span aria-hidden className="shrink-0 text-slate-300">›</span>
          <span className="shrink-0 font-kr text-lg text-slate-900">{p.kr}</span>
        </div>
      </div>

      {open && <MapPanel current={page} onClose={() => setOpen(false)} />}

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

/* Where to go when the page is finished — the course has one reading order. */
export function CourseFooter({ page }) {
  const i = PAGES.findIndex((x) => x.id === page)
  const prev = PAGES[i - 1]
  const next = PAGES[i + 1]
  return (
    <footer className="space-y-5 pt-4">
      <div className="grid gap-3 sm:grid-cols-2">
        {prev ? (
          <a href={prev.href} className="rounded-[2rem] bg-white/90 p-4 shadow-sm ring-2 ring-white transition hover:bg-yellow-50">
            <div className="text-xs font-extrabold uppercase tracking-wide text-slate-400">← previous · {unitOf(prev.id).en}</div>
            <div className="font-kr text-2xl text-slate-900">
              {prev.icon} {prev.kr}
            </div>
          </a>
        ) : (
          <span />
        )}
        {next ? (
          <a href={next.href} className="rounded-[2rem] bg-white/90 p-4 text-right shadow-sm ring-2 ring-white transition hover:bg-yellow-50">
            <div className="text-xs font-extrabold uppercase tracking-wide text-slate-400">next → · {unitOf(next.id).en}</div>
            <div className="font-kr text-2xl text-slate-900">
              {next.kr} {next.icon}
            </div>
          </a>
        ) : (
          <a href="index.html" className="rounded-[2rem] bg-white/90 p-4 text-right shadow-sm ring-2 ring-white transition hover:bg-yellow-50">
            <div className="text-xs font-extrabold uppercase tracking-wide text-slate-400">that was the last page</div>
            <div className="font-kr text-2xl text-slate-900">🗺️ 전체 보기</div>
          </a>
        )}
      </div>
      <div className="text-center">
        <p className="font-kr text-3xl text-slate-700">수고했어요! 🎉</p>
        <p className="text-sm text-slate-500">Korean Regular Course · Konkuk University</p>
      </div>
    </footer>
  )
}
