import { useState } from 'react'
import { Section } from '../components/ui'
import { COUNTRIES, JOBS, PEOPLE, COUNTRY, SENTENCE_WORDS } from '../data/content'
import { speak } from '../lib/korean'

const TABS = ['🌏 Countries', '💼 Jobs', '🧑‍🤝‍🧑 Characters', '💬 Useful words']

function Tile({ big, kr, en, sub, tone }) {
  return (
    <button type="button" onClick={() => speak(kr)} className={`flex flex-col items-center gap-1 rounded-3xl border-2 p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg active:scale-95 ${tone}`}>
      {big && <span className="text-5xl">{big}</span>}
      <span className="font-kr text-3xl leading-tight text-slate-900 sm:text-4xl">{kr}</span>
      <span className="text-sm font-bold text-slate-700">{en}</span>
      {sub && <span className="text-xs font-semibold text-slate-500">{sub}</span>}
    </button>
  )
}

export default function Vocab() {
  const [tab, setTab] = useState(0)
  return (
    <Section id="words" icon="📚" kr="단어장" title="Word bank for this block" tone="orange" tag="Vocabulary from the pages">
      <div className="flex flex-wrap gap-2">
        {TABS.map((t, i) => (
          <button key={t} type="button" onClick={() => setTab(i)} className={`rounded-full px-5 py-2 text-base font-extrabold shadow-sm transition ${tab === i ? 'bg-orange-500 text-white' : 'bg-white text-slate-700 hover:bg-orange-100'}`}>
            {t}
          </button>
        ))}
      </div>
      <p className="text-sm text-slate-600">Tap any card to hear it. Add “사람” after a country to say the nationality: <span className="font-kr text-lg">일본 사람</span> = a Japanese person.</p>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {tab === 0 && COUNTRIES.map((c) => <Tile key={c.kr} big={c.flag} kr={c.kr} en={c.en} tone="border-sky-200 bg-sky-50" />)}
        {tab === 1 && JOBS.map((j) => <Tile key={j.kr} big={j.icon} kr={j.kr} en={j.en} tone="border-amber-200 bg-amber-50" />)}
        {tab === 2 &&
          PEOPLE.map((p) => (
            <Tile key={p.kr} big={COUNTRY[p.country].flag} kr={p.kr} en={p.en} sub={`${p.country} 사람 · ${COUNTRY[p.country].en}`} tone="border-rose-200 bg-rose-50" />
          ))}
        {tab === 3 && SENTENCE_WORDS.map((w) => <Tile key={w.kr} kr={w.kr} en={w.en} tone="border-emerald-200 bg-emerald-50" />)}
      </div>
    </Section>
  )
}
