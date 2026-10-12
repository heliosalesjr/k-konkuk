import { useEffect, useState } from 'react'
import Hero from './sections/Hero'
import Greetings from './sections/Greetings'
import Structure from './sections/Structure'
import Batchim from './sections/Batchim'
import Copula from './sections/Copula'
import Topic from './sections/Topic'
import Negation from './sections/Negation'
import Speaking from './sections/Speaking'
import Vocab from './sections/Vocab'
import Quiz from './sections/Quiz'

const NAV = [
  { id: 'start', label: '🏠 Start' },
  { id: 'greetings', label: '👋 인사' },
  { id: 'structure', label: '🧱 Word order' },
  { id: 'batchim', label: '🔍 받침' },
  { id: 'ieyo', label: '🙋 이에요/예요' },
  { id: 'eunneun', label: '🌍 은/는' },
  { id: 'anieyo', label: '🚫 아니에요' },
  { id: 'speak', label: '🎤 말하기' },
  { id: 'words', label: '📚 Words' },
  { id: 'quiz', label: '📝 Quiz' },
]

function Nav() {
  const [active, setActive] = useState('start')
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
        <a href="materials.html" className="shrink-0 rounded-full bg-white px-4 py-1.5 font-kr text-lg text-slate-700 shadow-sm hover:bg-yellow-100">
          📘 문법 정리 →
        </a>
        <a href="exercises.html" className="shrink-0 rounded-full bg-white px-4 py-1.5 font-kr text-lg text-slate-700 shadow-sm hover:bg-yellow-100">
          ✍️ 쓰기 · 연습 →
        </a>
        <a href="exercises.html#talking" className="shrink-0 rounded-full bg-sky-600 px-4 py-1.5 font-kr text-lg text-white shadow-sm hover:bg-sky-700">
          🗣️ 질문 25 →
        </a>
      </div>
    </nav>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="mx-auto max-w-5xl space-y-16 px-4 pb-24 pt-6 sm:space-y-20">
        <Hero />
        <Greetings />
        <Structure />
        <Batchim />
        <Copula />
        <Topic />
        <Negation />
        <Speaking />
        <Vocab />
        <Quiz />
        <footer className="pt-8 text-center">
          <p className="font-kr text-3xl text-slate-700">수고했어요! 🎉</p>
          <p className="text-sm text-slate-500">Great work — Korean Regular Course · Konkuk University</p>
        </footer>
      </main>
    </div>
  )
}
