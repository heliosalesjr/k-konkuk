import { useState } from 'react'
import { Callout, Card, H3, Section, Speak } from '../components/ui'
import { analyze, attach, particleFor } from '../lib/korean'

const PRESETS = ['사람', '이지현', '뭐', '알리', '학생', '가수', '박주원', '하루나', '선생님', '요리사']

const ROWS = [
  { kind: 'copula', label: '이에요 / 예요', hint: 'is · am · are', color: 'bg-violet-200 text-violet-900' },
  { kind: 'topic', label: '은 / 는', hint: 'topic — “as for …”', color: 'bg-rose-200 text-rose-900' },
  { kind: 'subject', label: '이 / 가', hint: 'subject marker', color: 'bg-rose-200 text-rose-900' },
  { kind: 'object', label: '을 / 를', hint: 'object marker', color: 'bg-emerald-200 text-emerald-900' },
  { kind: 'neg', label: '이/가 아니에요', hint: 'is not', color: 'bg-orange-200 text-orange-900' },
]

function SyllableParts({ a }) {
  const piece = (label, value, cls) => (
    <div className={`flex items-center gap-3 rounded-2xl px-4 py-2 ${cls}`}>
      <span className="w-28 text-xs font-extrabold uppercase tracking-wide opacity-70">{label}</span>
      <span className="font-kr text-3xl">{value}</span>
    </div>
  )
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
      <div className={`flex h-32 w-32 items-center justify-center rounded-3xl border-4 font-kr text-8xl shadow ${a.hasBatchim ? 'border-rose-400 bg-rose-50' : 'border-sky-400 bg-sky-50'}`}>{a.syllable}</div>
      <div className="space-y-2">
        {piece('Starts with', a.cho, 'bg-yellow-100 text-yellow-900')}
        {piece('Vowel', a.jung, 'bg-sky-100 text-sky-900')}
        {piece('받침 (bottom)', a.hasBatchim ? a.jong : '— nothing —', a.hasBatchim ? 'bg-rose-200 text-rose-900' : 'bg-slate-100 text-slate-500')}
      </div>
    </div>
  )
}

export default function Batchim() {
  const [word, setWord] = useState('사람')
  const [withSsi, setWithSsi] = useState(false)
  const target = withSsi ? `${word.trim()} 씨` : word.trim()
  const a = analyze(target)

  return (
    <Section id="batchim" icon="🔍" kr="받침" title="The 받침 detector — the secret behind every particle" tone="orange" tag="Key idea for 문법 및 표현 1–3">
      <Card>
        <H3 sub="A Korean syllable is a little block. The consonant at the bottom is the 받침 (final consonant).">What is 받침?</H3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-rose-50 p-4 text-center ring-2 ring-rose-200">
            <p className="text-sm font-extrabold uppercase text-rose-700">받침 O — has a bottom consonant</p>
            <p className="mt-2 font-kr text-6xl text-slate-900">
              사<span className="rounded-xl bg-rose-300 px-1">람</span>
            </p>
            <p className="mt-1 text-sm text-slate-700">
              <span className="font-kr text-lg">람</span> = ㄹ + ㅏ + <b className="text-rose-700">ㅁ</b> ← at the bottom
            </p>
          </div>
          <div className="rounded-3xl bg-sky-50 p-4 text-center ring-2 ring-sky-200">
            <p className="text-sm font-extrabold uppercase text-sky-700">받침 X — nothing at the bottom</p>
            <p className="mt-2 font-kr text-6xl text-slate-900">
              알<span className="rounded-xl bg-sky-300 px-1">리</span>
            </p>
            <p className="mt-1 text-sm text-slate-700">
              <span className="font-kr text-lg">리</span> = ㄹ + ㅣ ← nothing at the bottom
            </p>
          </div>
        </div>
        <div className="mt-4 space-y-3">
          <Callout kind="rule" title="Only the LAST syllable counts">
            <p>
              Look at the very last block of the word. <span className="font-kr text-lg">이지현</span> → last block is <span className="font-kr text-lg">현</span> (ends with ㄴ) → 받침 O.
            </p>
          </Callout>
          <Callout kind="tip" title="ㅇ at the bottom counts!">
            <p>
              <span className="font-kr text-lg">밍</span> ends with ㅇ (ng) → 받침 O. But the silent ㅇ at the <i>start</i> of a block (like in <span className="font-kr text-lg">아</span>) is just a placeholder, not a 받침.
            </p>
          </Callout>
        </div>
      </Card>

      <Card className="bg-gradient-to-br from-yellow-50 to-orange-50">
        <H3 sub="Type any Korean word (or tap one) and see which particle it needs.">🔬 Try the detector</H3>
        <div className="flex flex-wrap items-center gap-3">
          <input
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder="한글로 쓰세요"
            className="w-full max-w-xs rounded-2xl border-2 border-orange-300 bg-white px-4 py-3 font-kr text-3xl shadow-inner outline-none focus:ring-4 focus:ring-orange-200"
            aria-label="Type a Korean word"
          />
          <label className="flex cursor-pointer items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold shadow-sm">
            <input type="checkbox" checked={withSsi} onChange={(e) => setWithSsi(e.target.checked)} className="h-4 w-4 accent-orange-500" />
            add <span className="font-kr text-lg">씨</span> (Mr./Ms.)
          </label>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button key={p} type="button" onClick={() => setWord(p)} className="rounded-full bg-white px-3 py-1 font-kr text-xl shadow-sm ring-1 ring-orange-200 transition hover:bg-orange-100 active:scale-95">
              {p}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {!a ? (
            <p className="rounded-2xl bg-white p-4 text-center text-slate-500">Type a Korean word to begin ✨ (the last character must be Hangul)</p>
          ) : (
            <div className="space-y-6">
              <div className="flex flex-col items-center gap-2">
                <p className="text-sm font-bold text-slate-600">
                  Last syllable of <span className="font-kr text-xl text-slate-900">{target}</span>:
                </p>
                <SyllableParts a={a} />
                <p className={`mt-1 rounded-full px-4 py-1 text-lg font-extrabold ${a.hasBatchim ? 'bg-rose-200 text-rose-900' : 'bg-sky-200 text-sky-900'}`}>{a.hasBatchim ? '받침 O ✔' : '받침 X ✘'}</p>
              </div>
              <div className="space-y-2">
                {ROWS.map((r) => {
                  const p = particleFor(target, r.kind)
                  const full = attach(target, r.kind)
                  return (
                    <div key={r.kind} className="flex flex-wrap items-center gap-3 rounded-2xl bg-white p-3 shadow-sm">
                      <div className="w-36 shrink-0">
                        <div className="font-kr text-xl text-slate-900">{r.label}</div>
                        <div className="text-xs text-slate-500">{r.hint}</div>
                      </div>
                      <span className="text-2xl text-slate-300">→</span>
                      <div className="font-kr text-3xl text-slate-900 sm:text-4xl">
                        {target}
                        <span className={`ml-0.5 rounded-lg px-1.5 font-black ${r.color}`}>{p}</span>
                      </div>
                      <Speak text={full} className="ml-auto" />
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </Card>

      <Card>
        <H3>📋 Cheat sheet</H3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[28rem] border-separate border-spacing-y-2 text-center">
            <thead>
              <tr className="text-sm font-extrabold text-slate-600">
                <th className="p-2"></th>
                <th className="rounded-l-2xl bg-rose-100 p-2 text-rose-900">받침 O</th>
                <th className="rounded-r-2xl bg-sky-100 p-2 text-sky-900">받침 X</th>
              </tr>
            </thead>
            <tbody className="font-kr text-2xl sm:text-3xl">
              {[
                ['is / am / are', '이에요', '예요'],
                ['topic (as for…)', '은', '는'],
                ['subject', '이', '가'],
                ['object', '을', '를'],
                ['is not', '이 아니에요', '가 아니에요'],
              ].map(([en, o, x]) => (
                <tr key={en}>
                  <td className="pr-3 text-left font-sans text-sm font-bold text-slate-600">{en}</td>
                  <td className="rounded-l-2xl bg-rose-50 p-2">{o}</td>
                  <td className="rounded-r-2xl bg-sky-50 p-2">{x}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-slate-600">
          Memory trick for 이/가, 은/는, 을/를: after a <b>consonant</b> (받침 O) use the one that starts with a <b>vowel sound</b> (<span className="font-kr text-base">이, 은, 을</span>); after a <b>vowel</b> (받침 X) use the one that starts with a <b>consonant</b> (<span className="font-kr text-base">가, 는, 를</span>). Consonant + vowel, vowel + consonant — they link up smoothly!
        </p>
      </Card>
    </Section>
  )
}
