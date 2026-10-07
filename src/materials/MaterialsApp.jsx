import { useEffect, useState } from 'react'
import Present from './Present'
import Past from './Past'
import Adverbs from './Adverbs'
import Writing from './Writing'

const NAV = [
  { id: 'top', label: '🏠 Início' },
  { id: 'present', label: '🕒 현재' },
  { id: 'past', label: '⏪ 과거' },
  { id: 'adverbs', label: '🔸 부사' },
  { id: 'writing', label: '✍️ 쓰기' },
]

function Nav() {
  const [active, setActive] = useState('top')
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-30% 0px -60% 0px' },
    )
    NAV.forEach((n) => {
      const el = document.getElementById(n.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <nav className="sticky top-0 z-30 border-b border-white/60 bg-amber-50/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl gap-2 overflow-x-auto px-4 py-3">
        {NAV.map((n) => (
          <a
            key={n.id}
            href={`#${n.id}`}
            className={`shrink-0 rounded-full px-4 py-1.5 font-kr text-lg shadow-sm transition ${active === n.id ? 'bg-violet-600 text-white' : 'bg-white text-slate-700 hover:bg-yellow-100'}`}
          >
            {n.label}
          </a>
        ))}
        <a href="index.html" className="shrink-0 rounded-full bg-white px-4 py-1.5 text-lg font-bold text-slate-700 shadow-sm hover:bg-yellow-100">
          ← Course
        </a>
      </div>
    </nav>
  )
}

export default function MaterialsApp() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="mx-auto max-w-5xl space-y-16 px-4 pb-24 pt-6 sm:space-y-20">
        <header id="top" className="scroll-mt-24 rounded-[2.5rem] bg-gradient-to-br from-emerald-300 via-sky-300 to-violet-300 p-6 shadow-xl sm:p-10">
          <p className="text-sm font-extrabold uppercase tracking-widest text-slate-800/70">건국 한국어 1-1 · Materials · 2nd batch</p>
          <h1 className="mt-2 font-kr text-6xl leading-tight text-slate-900 sm:text-8xl">문법 정리</h1>
          <p className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">Present · Past · Adverbs · Writing</p>
          <p className="mt-4 max-w-2xl text-base font-semibold text-slate-800 sm:text-lg">
            Verbs and adjectives as the book teaches them (어휘 1–2, 문법 및 표현 1–4), with the worksheet and handout rules. Tap 🔊 to hear any Korean.
          </p>
        </header>
        <Present />
        <Past />
        <Adverbs />
        <Writing />
        <footer className="pt-8 text-center">
          <p className="font-kr text-3xl text-slate-700">수고했어요! 🎉</p>
          <p className="text-sm text-slate-500">Great work — Korean Regular Course · Konkuk University</p>
        </footer>
      </main>
    </div>
  )
}
