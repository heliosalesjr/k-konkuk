import { useMemo, useState } from 'react'
import { KINDS, attach, explain, particleFor, shuffle } from '../lib/korean'

// Quick "which ending?" practice. kind: 'copula' | 'topic' | 'neg'
const PROMPTS = {
  copula: 'noun + ?   (이에요 or 예요)',
  topic: 'noun + ?   (은 or 는)',
  neg: 'noun + ?   (이 or 가) 아니에요',
}

export default function MiniDrill({ kind, words }) {
  const deck = useMemo(() => shuffle(words), [words])
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState(null)
  const [score, setScore] = useState({ right: 0, total: 0 })

  const word = deck[i % deck.length]
  const options = KINDS[kind].pair
  const answer = particleFor(word, kind)
  const shortOf = (o) => (kind === 'neg' ? o.split(' ')[0] : o)

  const choose = (o) => {
    if (picked) return
    setPicked(o)
    setScore((s) => ({ right: s.right + (o === answer ? 1 : 0), total: s.total + 1 }))
  }
  const next = () => {
    setPicked(null)
    setI(i + 1)
  }

  return (
    <div className="space-y-4 text-center">
      <div className="flex items-center justify-between text-sm font-bold text-slate-500">
        <span>{PROMPTS[kind]}</span>
        <span className="rounded-full bg-white px-3 py-1 shadow-sm">
          ✓ {score.right} / {score.total}
        </span>
      </div>
      <div className="font-kr text-6xl text-slate-900 sm:text-7xl">{word}</div>
      <div className="flex justify-center gap-3">
        {options.map((o) => {
          const state = !picked ? 'bg-white hover:bg-yellow-100' : o === answer ? 'bg-emerald-200 ring-4 ring-emerald-400' : o === picked ? 'bg-rose-200 ring-4 ring-rose-300' : 'bg-white opacity-50'
          return (
            <button key={o} type="button" onClick={() => choose(o)} className={`rounded-2xl px-5 py-3 font-kr text-2xl shadow transition active:scale-95 sm:text-3xl ${state}`}>
              {shortOf(o)}
            </button>
          )
        })}
      </div>
      {picked && (
        <div className="animate-pop space-y-2 rounded-2xl bg-white p-4 shadow-sm">
          <p className="font-kr text-3xl text-slate-900">{attach(word, kind)}</p>
          <p className="text-sm text-slate-600">{explain(word, kind)}</p>
          <button type="button" onClick={next} className="rounded-full bg-violet-500 px-5 py-1.5 font-bold text-white shadow hover:bg-violet-600">
            Next →
          </button>
        </div>
      )}
    </div>
  )
}
