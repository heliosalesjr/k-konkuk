import { useEffect, useState } from 'react'
import Writing from './Writing'
import Exercises from './Exercises'

const NAV = [
  { id: 'top', label: '🏠 Início' },
  { id: 'writing', label: '✍️ 쓰기' },
  { id: 'practice', label: '📝 연습' },
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
        <a href="materials.html" className="shrink-0 rounded-full bg-white px-4 py-1.5 text-lg font-bold text-slate-700 shadow-sm hover:bg-yellow-100">
          ← 문법
        </a>
        <a href="index.html" className="shrink-0 rounded-full bg-white px-4 py-1.5 text-lg font-bold text-slate-700 shadow-sm hover:bg-yellow-100">
          ← Course
        </a>
      </div>
    </nav>
  )
}

export default function ExercisesApp() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="mx-auto max-w-5xl space-y-16 px-4 pb-24 pt-6 sm:space-y-20">
        <header id="top" className="scroll-mt-24 rounded-[2.5rem] bg-gradient-to-br from-rose-300 via-amber-200 to-violet-300 p-6 shadow-xl sm:p-10">
          <p className="text-sm font-extrabold uppercase tracking-widest text-slate-800/70">건국 한국어 1-1 · Writing &amp; Practice</p>
          <h1 className="mt-2 font-kr text-6xl leading-tight text-slate-900 sm:text-8xl">쓰기 · 연습</h1>
          <p className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">The two worksheets, plus three more to practise</p>
          <p className="mt-4 max-w-2xl text-base font-semibold text-slate-800 sm:text-lg">
            First the two 쓰기 texts sentence by sentence, then three extra prompts built from the same toolbox. The grammar behind all of it lives on the{' '}
            <a href="materials.html" className="underline decoration-2 underline-offset-2 hover:text-violet-800">
              문법 정리
            </a>{' '}
            page. Tap 🔊 to hear any Korean.
          </p>
        </header>
        <Writing />
        <Exercises />
        <footer className="pt-8 text-center">
          <p className="font-kr text-3xl text-slate-700">수고했어요! 🎉</p>
          <p className="text-sm text-slate-500">Great work — Korean Regular Course · Konkuk University</p>
        </footer>
      </main>
    </div>
  )
}
