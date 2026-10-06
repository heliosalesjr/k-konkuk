import { useState } from 'react'
import { Card, Section } from '../components/ui'
import OrderPuzzle from '../components/OrderPuzzle'
import { makeQuiz } from '../lib/quiz'

function Result({ results, onRestart }) {
  const score = results.filter((r) => r.correct).length
  const total = results.length
  const pct = score / total
  const msg = pct === 1 ? ['🏆', 'PERFECT! 완벽해요!'] : pct >= 0.8 ? ['🌟', 'Great job! 잘했어요!'] : pct >= 0.5 ? ['👍', 'Good start! Keep going!'] : ['💪', "Let's review and try again!"]
  const missed = results.filter((r) => !r.correct)
  return (
    <div className="animate-pop space-y-6 text-center">
      <div className="text-7xl">{msg[0]}</div>
      <p className="text-2xl font-extrabold text-slate-900">{msg[1]}</p>
      <p className="font-kr text-6xl text-violet-700">
        {score} / {total}
      </p>
      {missed.length > 0 && (
        <div className="space-y-3 text-left">
          <p className="text-center text-sm font-extrabold uppercase tracking-wide text-slate-500">Review these</p>
          {missed.map((r, i) => (
            <div key={i} className="rounded-2xl bg-rose-50 p-4 ring-1 ring-rose-200">
              <p className="font-kr text-2xl text-slate-900">{r.q.kr || r.q.parts.map((p) => p.base + (p.particle || '')).join(' ')}</p>
              <p className="text-sm text-slate-700">{r.q.explain}</p>
            </div>
          ))}
        </div>
      )}
      <button type="button" onClick={onRestart} className="rounded-full bg-violet-600 px-8 py-3 text-lg font-extrabold text-white shadow-lg transition hover:bg-violet-700 active:scale-95">
        🔄 New quiz
      </button>
    </div>
  )
}

function Question({ q, onDone }) {
  const [picked, setPicked] = useState(null)
  const [orderDone, setOrderDone] = useState(null)
  const answered = picked !== null || orderDone !== null
  const wasCorrect = q.type === 'choice' ? picked === q.answer : orderDone

  return (
    <div className="space-y-5">
      <p className="text-center text-sm font-extrabold uppercase tracking-wide text-slate-500">{q.title}</p>

      {q.type === 'choice' ? (
        <>
          {q.fact && <p className="rounded-2xl bg-yellow-50 p-3 text-center font-kr text-3xl ring-1 ring-yellow-200">{q.fact}</p>}
          <div className="text-center">
            <p className="font-kr text-4xl leading-snug text-slate-900 sm:text-5xl">{q.kr}</p>
            <p className="mt-1 text-sm font-semibold text-slate-500">{q.en}</p>
          </div>
          <div className={`grid gap-3 ${q.options.length === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
            {q.options.map((o, i) => {
              const state = picked === null ? 'bg-white hover:bg-yellow-100' : i === q.answer ? 'bg-emerald-200 ring-4 ring-emerald-400' : i === picked ? 'bg-rose-200 ring-4 ring-rose-300' : 'bg-white opacity-50'
              return (
                <button key={o} type="button" disabled={picked !== null} onClick={() => { setPicked(i); onDone(q, i === q.answer) }} className={`rounded-2xl px-4 py-4 font-kr text-3xl shadow transition active:scale-[0.98] sm:text-4xl ${state}`}>
                  {o}
                </button>
              )
            })}
          </div>
        </>
      ) : (
        <OrderPuzzle
          parts={q.parts}
          en={q.en}
          onResult={(ok) => {
            setOrderDone(ok)
            onDone(q, ok)
          }}
        />
      )}

      {answered && (
        <div className={`animate-pop rounded-2xl p-4 ${wasCorrect ? 'bg-emerald-50 ring-1 ring-emerald-300' : 'bg-rose-50 ring-1 ring-rose-300'}`}>
          <p className="text-lg font-extrabold">{wasCorrect ? '✅ Correct!' : '❌ Not this time'}</p>
          <p className="text-sm text-slate-700">{q.explain}</p>
        </div>
      )}
    </div>
  )
}

export default function Quiz() {
  const [quiz, setQuiz] = useState(null)
  const [i, setI] = useState(0)
  const [results, setResults] = useState([])
  const [current, setCurrent] = useState(null)

  const start = () => {
    setQuiz(makeQuiz(10))
    setI(0)
    setResults([])
    setCurrent(null)
  }
  const record = (q, correct) => setCurrent({ q, correct })
  const next = () => {
    setResults([...results, current])
    setCurrent(null)
    setI(i + 1)
  }

  const finished = quiz && i >= quiz.length

  return (
    <Section id="quiz" icon="📝" kr="퀴즈" title="Test yourself — 10 mixed questions" tone="emerald" tag="Everything from this block">
      <Card className="mx-auto max-w-3xl">
        {!quiz && (
          <div className="space-y-5 text-center">
            <div className="text-7xl">🎯</div>
            <p className="text-lg text-slate-700">
              Every round is different: 이에요/예요, 은/는, 이/가 아니에요, building sentences, word order and yes/no answers.
            </p>
            <button type="button" onClick={start} className="rounded-full bg-emerald-500 px-10 py-4 text-xl font-extrabold text-white shadow-lg transition hover:bg-emerald-600 active:scale-95">
              ▶ Start the quiz
            </button>
          </div>
        )}

        {quiz && !finished && (
          <div className="space-y-5">
            <div className="flex items-center gap-1.5" aria-label={`Question ${i + 1} of ${quiz.length}`}>
              {quiz.map((_, n) => (
                <div key={n} className={`h-3 flex-1 rounded-full ${n < i ? (results[n]?.correct ? 'bg-emerald-400' : 'bg-rose-400') : n === i ? 'bg-violet-500' : 'bg-slate-200'}`} />
              ))}
            </div>
            <p className="text-right text-sm font-bold text-slate-500">
              {i + 1} / {quiz.length}
            </p>
            <Question key={i} q={quiz[i]} onDone={record} />
            {current && (
              <div className="text-center">
                <button type="button" onClick={next} className="rounded-full bg-violet-600 px-8 py-3 text-lg font-extrabold text-white shadow-lg transition hover:bg-violet-700 active:scale-95">
                  {i + 1 === quiz.length ? 'See my score 🎉' : 'Next →'}
                </button>
              </div>
            )}
          </div>
        )}

        {finished && <Result results={results} onRestart={start} />}
      </Card>
    </Section>
  )
}
