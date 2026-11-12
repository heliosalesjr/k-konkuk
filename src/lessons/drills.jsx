import { useMemo, useState } from 'react'
import { Speak } from '../components/ui'
import { shuffle } from '../lib/korean'

/* Interactive pieces shared by the five 3차 lesson pages. */

/* ── Multiple choice. items: { kr, en, options, answer, why } ───────────────── */
export function PickDrill({ prompt, items, big = false }) {
  const deck = useMemo(() => shuffle(items), [items])
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState(null)
  const [score, setScore] = useState({ right: 0, total: 0 })

  const q = deck[i % deck.length]
  const options = useMemo(() => shuffle(q.options), [q])

  const choose = (o) => {
    if (picked) return
    setPicked(o)
    setScore((s) => ({ right: s.right + (o === q.answer ? 1 : 0), total: s.total + 1 }))
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3 text-sm font-bold text-slate-500">
        <span>{prompt}</span>
        <span className="shrink-0 rounded-full bg-white px-3 py-1 shadow-sm">
          ✓ {score.right} / {score.total}
        </span>
      </div>

      <div className="rounded-3xl bg-white p-4 text-center shadow-sm ring-1 ring-slate-100 sm:p-6">
        <p className={`font-kr leading-snug text-slate-900 ${big ? 'text-4xl sm:text-5xl' : 'text-2xl sm:text-3xl'}`}>{q.kr}</p>
        {q.en && <p className="mt-1.5 text-sm font-semibold text-slate-600">{q.en}</p>}
      </div>

      <div className="flex flex-wrap justify-center gap-2.5">
        {options.map((o) => {
          const state = !picked
            ? 'bg-white hover:bg-yellow-100'
            : o === q.answer
              ? 'bg-emerald-200 ring-4 ring-emerald-400'
              : o === picked
                ? 'bg-rose-200 ring-4 ring-rose-300'
                : 'bg-white opacity-45'
          return (
            <button key={o} type="button" onClick={() => choose(o)} className={`rounded-2xl px-4 py-2.5 font-kr text-2xl shadow transition active:scale-95 ${state}`}>
              {o}
            </button>
          )
        })}
      </div>

      {picked && (
        <div className="animate-pop space-y-2 rounded-2xl bg-white p-4 text-center shadow-sm">
          <p className={`text-lg font-extrabold ${picked === q.answer ? 'text-emerald-700' : 'text-rose-700'}`}>
            {picked === q.answer ? '🎉 맞아요!' : `🤔 The answer is ${q.answer}`}
          </p>
          {q.why && <p className="text-sm leading-relaxed text-slate-700">{q.why}</p>}
          <button
            type="button"
            onClick={() => {
              setPicked(null)
              setI(i + 1)
            }}
            className="rounded-full bg-violet-500 px-5 py-1.5 font-bold text-white shadow hover:bg-violet-600"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  )
}

/* ── Answer list. Every (bracketed) part of `kr` becomes a tap-to-reveal gap. ── */
function Gap({ text }) {
  const [open, setOpen] = useState(false)
  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      className={`mx-0.5 rounded-lg px-2 align-baseline font-kr shadow-sm transition ${
        open ? 'bg-emerald-200 text-emerald-950 ring-1 ring-emerald-400' : 'bg-slate-200 text-slate-400 hover:bg-yellow-200'
      }`}
      title={open ? 'Hide' : 'Show the answer'}
    >
      {open ? text : '＿＿＿'}
    </button>
  )
}

export function GapList({ items, numbered = true }) {
  return (
    <ol className="space-y-2">
      {items.map((it) => {
        const chunks = it.kr.split(/\(([^)]*)\)/)
        const plain = it.kr.replace(/[()]/g, '').replace(/^[\uac00-\ud7a3]:\s*/, '')
        return (
          <li key={it.n} className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-start gap-2.5">
              {numbered && (
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-extrabold text-slate-500">{it.n}</span>
              )}
              <Speak text={plain} className="mt-0.5" />
              <div className="min-w-0 flex-1">
                <p className="font-kr text-2xl leading-relaxed text-slate-900 sm:text-3xl">
                  {chunks.map((c, k) => (k % 2 === 1 ? <Gap key={k} text={c} /> : <span key={k}>{c}</span>))}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-slate-600">{it.en}</p>
                {it.why && <p className="mt-1.5 border-l-2 border-violet-200 pl-2.5 text-sm leading-relaxed text-slate-700">{it.why}</p>}
                {it.note && <p className="mt-1 text-xs font-semibold text-slate-500">ℹ️ {it.note}</p>}
              </div>
            </div>
          </li>
        )
      })}
    </ol>
  )
}

/* ── Spot the mistake. items: { n, bad, good, span, en, why } ───────────────── */
const clean = (s) => s.replace(/[.?!,]/g, '')

function ErrorRow({ it }) {
  const [picked, setPicked] = useState(null)
  const tokens = it.bad.split(' ')
  const wrong = it.span.split(' ').map(clean)
  const isWrong = (t) => wrong.includes(clean(t))

  return (
    <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
      <div className="mb-2 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-slate-400">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-500">{it.n}</span>
        {picked ? 'the fix' : 'tap the part that is wrong'}
      </div>
      <div className="flex flex-wrap items-center gap-1.5">
        {tokens.map((t, k) => {
          const bad = isWrong(t)
          const state = !picked
            ? 'bg-slate-50 hover:bg-yellow-100'
            : bad
              ? 'bg-rose-100 text-rose-900 line-through decoration-rose-500 decoration-2 ring-2 ring-rose-300'
              : 'bg-slate-50 opacity-60'
          return (
            <button key={k} type="button" disabled={!!picked} onClick={() => setPicked(t)} className={`rounded-xl px-2 py-1 font-kr text-2xl transition active:scale-95 ${state}`}>
              {t}
            </button>
          )
        })}
      </div>
      {picked && (
        <div className="animate-pop mt-3 space-y-1.5">
          <p className={`text-sm font-extrabold ${isWrong(picked) ? 'text-emerald-700' : 'text-rose-700'}`}>
            {isWrong(picked) ? '🎯 You found it!' : `Not that one — the problem was ${it.span}.`}
          </p>
          <div className="flex items-start gap-2 rounded-2xl bg-emerald-50 p-3 ring-1 ring-emerald-200">
            <Speak text={it.good} />
            <div className="min-w-0">
              <p className="font-kr text-2xl leading-snug text-emerald-950 sm:text-3xl">{it.good}</p>
              <p className="text-sm font-semibold text-slate-600">{it.en}</p>
            </div>
          </div>
          <p className="border-l-2 border-violet-200 pl-2.5 text-sm leading-relaxed text-slate-700">{it.why}</p>
        </div>
      )}
      {!picked && <p className="mt-2 text-xs font-semibold text-slate-400">{it.en}</p>}
    </div>
  )
}

export function ErrorSpot({ items }) {
  return (
    <div className="space-y-3">
      {items.map((it) => (
        <ErrorRow key={it.n} it={it} />
      ))}
    </div>
  )
}

/* ── Sino-Korean number reader (money). Blocks of 만, and no 일 in front of a unit. ── */
const SINO_D = ['', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구']
const UNITS = ['', '십', '백', '천']

function readBlock(n) {
  let out = ''
  const digits = [...String(n)].map(Number)
  const len = digits.length
  digits.forEach((v, idx) => {
    if (!v) return
    const place = len - 1 - idx
    out += place === 0 ? SINO_D[v] : (v === 1 ? '' : SINO_D[v]) + UNITS[place]
  })
  return out
}

export function readSino(n) {
  if (n === 0) return '영'
  const parts = []
  const eok = Math.floor(n / 100000000)
  const man = Math.floor((n % 100000000) / 10000)
  const rest = n % 10000
  if (eok) parts.push((eok === 1 ? '' : readBlock(eok)) + '억')
  if (man) parts.push((man === 1 ? '' : readBlock(man)) + '만')
  if (rest) parts.push(readBlock(rest))
  return parts.join(' ')
}

export function MoneyMachine({ presets = [1000, 15000, 70300, 52090] }) {
  const [raw, setRaw] = useState('52090')
  const n = Number(raw.replace(/[^0-9]/g, '')) || 0
  const capped = Math.min(n, 99999999)
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <input
          inputMode="numeric"
          value={raw}
          onChange={(e) => setRaw(e.target.value.replace(/[^0-9]/g, '').slice(0, 8))}
          aria-label="Amount in won"
          className="w-44 rounded-2xl border-2 border-slate-200 bg-white px-4 py-2 text-right text-3xl font-black text-slate-900 shadow-sm focus:border-violet-400 focus:outline-none"
        />
        <span className="font-kr text-3xl text-slate-500">원</span>
      </div>
      <div className="rounded-3xl bg-gradient-to-br from-emerald-50 to-lime-50 p-5 text-center ring-2 ring-emerald-200">
        <p className="text-xs font-extrabold uppercase tracking-wide text-emerald-700">{capped.toLocaleString('en-US')}원</p>
        <div className="mt-1 flex items-center justify-center gap-3">
          <p className="font-kr text-4xl leading-snug text-slate-900 sm:text-5xl">{readSino(capped)} 원</p>
          <Speak text={`${readSino(capped)} 원`} />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {presets.map((p) => (
          <button key={p} type="button" onClick={() => setRaw(String(p))} className="rounded-full bg-white px-3.5 py-1.5 text-sm font-extrabold text-slate-700 shadow-sm transition hover:bg-yellow-100">
            {p.toLocaleString('en-US')}원
          </button>
        ))}
      </div>
    </div>
  )
}

/* ── Tab strip used to filter long tables. ─────────────────────────────────── */
export function Tabs({ items, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((it) => (
        <button
          key={it.id}
          type="button"
          onClick={() => onChange(it.id)}
          className={`rounded-full px-4 py-1.5 font-kr text-lg shadow-sm transition ${
            value === it.id ? 'bg-violet-600 text-white' : 'bg-white text-slate-700 hover:bg-yellow-100'
          }`}
        >
          {it.kr} {it.en && <span className="font-sans text-xs font-bold opacity-75">{it.en}</span>}
        </button>
      ))}
    </div>
  )
}

/* ── A cell you can hide to test yourself. ─────────────────────────────────── */
export function Hidden({ text, cls = '' }) {
  const [open, setOpen] = useState(false)
  return (
    <button type="button" onClick={() => setOpen(!open)} className={`w-full rounded-xl px-1 py-0.5 font-kr transition ${open ? cls : 'bg-slate-100 text-slate-300 hover:bg-yellow-100'}`}>
      {open ? text : '＿＿'}
    </button>
  )
}
