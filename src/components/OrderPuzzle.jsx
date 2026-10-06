import { useEffect, useMemo, useRef, useState } from 'react'
import { Sentence, Speak } from './ui'
import { shuffle } from '../lib/korean'

// "Tap the words in the right order." parts = the sentence in correct order:
// [{ base, particle, gloss, role }]
export default function OrderPuzzle({ parts, en, onResult }) {
  const text = (p) => p.base + (p.particle || '')
  const order = useMemo(() => {
    let s = shuffle(parts.map((_, i) => i))
    // make sure the puzzle doesn't start already solved
    while (parts.length > 1 && s.every((v, i) => v === i)) s = shuffle(s)
    return s
  }, [parts])
  const [placed, setPlaced] = useState([])
  const reported = useRef(false)

  const done = placed.length === parts.length
  const correct = done && placed.every((v, i) => v === i)
  const verbNotLast = done && !correct && parts[placed[placed.length - 1]]?.role !== 'pred'

  useEffect(() => {
    if (done && !reported.current) {
      reported.current = true
      onResult?.(correct)
    }
  }, [done, correct, onResult])

  const tray = order.filter((i) => !placed.includes(i))
  const chip =
    'rounded-2xl border-2 bg-white px-3 py-2 font-kr text-2xl shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:scale-95 sm:text-3xl'

  return (
    <div className="space-y-4">
      <p className="text-center text-base font-bold text-slate-700 sm:text-lg">
        Say it in English: <span className="text-violet-700">“{en}”</span> — now build it in Korean 👇
      </p>

      <div
        className={`flex min-h-[4.5rem] flex-wrap items-center gap-2 rounded-3xl border-2 border-dashed p-3 ${
          done ? (correct ? 'border-emerald-400 bg-emerald-50' : 'border-rose-300 bg-rose-50') : 'border-slate-300 bg-slate-50'
        }`}
      >
        {placed.length === 0 && <span className="px-2 text-slate-400">Tap the words below, in order…</span>}
        {placed.map((i, n) => (
          <button
            key={i}
            type="button"
            disabled={correct}
            onClick={() => setPlaced(placed.filter((v) => v !== i))}
            className={`${chip} border-slate-300`}
            title="Tap to take it back"
          >
            <span className="mr-1.5 text-xs font-extrabold text-slate-400">{n + 1}</span>
            {text(parts[i])}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {tray.map((i) => (
          <button key={i} type="button" onClick={() => setPlaced([...placed, i])} className={`${chip} border-yellow-300`}>
            {text(parts[i])}
          </button>
        ))}
      </div>

      {done && correct && (
        <div className="animate-pop space-y-3 rounded-3xl bg-emerald-50 p-4 text-center">
          <p className="text-lg font-extrabold text-emerald-800">🎉 Perfect! Look at the colours:</p>
          <Sentence parts={parts} size="md" tags />
          <div className="flex justify-center">
            <Speak text={parts.map(text).join(' ')} />
          </div>
        </div>
      )}
      {done && !correct && (
        <div className="animate-shake space-y-2 rounded-3xl bg-rose-50 p-4 text-center">
          <p className="text-lg font-extrabold text-rose-800">Not quite 🤔</p>
          <p className="text-sm text-slate-700">
            {verbNotLast ? 'Remember: the verb (서술어) always goes LAST.' : 'Book order: Subject → Time → Place → Object → Verb.'}
          </p>
          <button type="button" onClick={() => setPlaced([])} className="rounded-full bg-rose-500 px-4 py-1.5 font-bold text-white shadow hover:bg-rose-600">
            Try again
          </button>
        </div>
      )}
      {!done && placed.length > 0 && (
        <div className="text-center">
          <button type="button" onClick={() => setPlaced([])} className="text-sm font-bold text-slate-500 underline">
            Start over
          </button>
        </div>
      )}
    </div>
  )
}
