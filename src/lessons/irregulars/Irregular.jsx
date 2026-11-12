import { useState } from 'react'
import { Callout, Card, H3, Section, Speak } from '../../components/ui'
import { GapList } from '../drills'
import { IRREGULARS, IRREGULAR_ANSWERS } from '../review'

// The same verb with four different endings. Only the vowel-initial endings trigger a change
// — except ㄹ, which drops in front of ㄴ, ㅂ and ㅅ instead.
const ENDINGS = [
  { id: 'a', label: '-아/어요', kind: 'vowel' },
  { id: 'ni', label: '-(으)니까', kind: 'vowel' },
  { id: 'go', label: '-고', kind: 'cons' },
  { id: 'nida', label: '-습니다', kind: 'cons' },
]

const GRID = [
  { verb: '걷다', en: 'to walk', fam: 'ㄷ', forms: { a: '걸어요', ni: '걸으니까', go: '걷고', nida: '걷습니다' }, changed: ['a', 'ni'] },
  { verb: '뜨겁다', en: 'to be hot', fam: 'ㅂ', forms: { a: '뜨거워요', ni: '뜨거우니까', go: '뜨겁고', nida: '뜨겁습니다' }, changed: ['a', 'ni'] },
  { verb: '바쁘다', en: 'to be busy', fam: 'ㅡ', forms: { a: '바빠요', ni: '바쁘니까', go: '바쁘고', nida: '바쁩니다' }, changed: ['a'] },
  { verb: '멀다', en: 'to be far', fam: 'ㄹ', forms: { a: '멀어요', ni: '머니까', go: '멀고', nida: '멉니다' }, changed: ['ni', 'nida'] },
  { verb: '닫다', en: 'to close · REGULAR', fam: '—', forms: { a: '닫아요', ni: '닫으니까', go: '닫고', nida: '닫습니다' }, changed: [] },
]

function EndingGrid() {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap justify-center gap-2 text-xs font-extrabold">
        <span className="rounded-full bg-rose-100 px-3 py-1 text-rose-800">🔴 the stem changed</span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">⚪ nothing changed</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[34rem] border-separate border-spacing-y-1.5 text-center">
          <thead>
            <tr className="text-xs font-extrabold uppercase tracking-wide text-slate-500">
              <th className="p-2 text-left">Verb</th>
              {ENDINGS.map((e) => (
                <th key={e.id} className={`p-2 font-kr text-base ${e.kind === 'vowel' ? 'text-rose-700' : 'text-slate-500'}`}>
                  {e.label}
                  <div className="font-sans text-[10px] normal-case">{e.kind === 'vowel' ? 'starts with a vowel' : 'starts with a consonant'}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {GRID.map((r) => (
              <tr key={r.verb}>
                <td className="rounded-l-2xl bg-slate-50 p-2.5 text-left">
                  <span className="font-kr text-2xl text-slate-900">{r.verb}</span>
                  {r.fam !== '—' && <span className="ml-1.5 rounded bg-amber-200 px-1 font-kr text-[11px] text-amber-900">{r.fam}</span>}
                  <div className="text-xs font-semibold text-slate-500">{r.en}</div>
                </td>
                {ENDINGS.map((e) => {
                  const hit = r.changed.includes(e.id)
                  return (
                    <td key={e.id} className={`p-2.5 font-kr text-2xl ${hit ? 'bg-rose-100 text-rose-900 ring-2 ring-rose-300' : 'bg-slate-50 text-slate-700'} ${e.id === 'nida' ? 'rounded-r-2xl' : ''}`}>
                      {r.forms[e.id]}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Callout kind="rule" title="Read the table as one sentence">
        <p>
          ㄷ, ㅂ and ㅡ only change <b>when the ending starts with a vowel</b>. ㄹ does the opposite: it survives in front of a vowel and <b>drops</b> in front of
          ㄴ, ㅂ and ㅅ. And 닫다 never changes at all — it only looks dangerous.
        </p>
      </Callout>
    </div>
  )
}

const FAM_TONE = {
  sky: 'bg-sky-50 ring-sky-200 text-sky-900',
  rose: 'bg-rose-50 ring-rose-200 text-rose-900',
  emerald: 'bg-emerald-50 ring-emerald-200 text-emerald-900',
  violet: 'bg-violet-50 ring-violet-200 text-violet-900',
}

function Families() {
  const [open, setOpen] = useState(IRREGULARS[0].id)
  const f = IRREGULARS.find((x) => x.id === open)
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {IRREGULARS.map((x) => (
          <button
            key={x.id}
            type="button"
            onClick={() => setOpen(x.id)}
            className={`rounded-full px-4 py-2 font-kr text-xl shadow-sm transition ${open === x.id ? 'bg-slate-900 text-white' : 'bg-white text-slate-800 hover:bg-yellow-100'}`}
          >
            {x.kr}
          </button>
        ))}
      </div>
      <div className={`animate-pop rounded-3xl p-5 ring-2 ${FAM_TONE[f.tone]}`}>
        <p className="font-kr text-4xl">{f.kr}</p>
        <p className="mt-1 text-lg font-extrabold text-slate-800">{f.what}</p>
        <p className="text-sm font-semibold text-slate-600">happens {f.when}</p>
        <div className="mt-3 space-y-1.5">
          {f.ex.map(([base, form, en]) => (
            <div key={base} className="flex items-center gap-2 rounded-2xl bg-white/80 p-2.5">
              <span className="font-kr text-2xl text-slate-500">{base}</span>
              <span className="text-xl font-black text-slate-300">→</span>
              <span className="font-kr text-2xl text-slate-900">{form}</span>
              <span className="ml-auto text-xs font-semibold text-slate-500">{en}</span>
              <Speak text={form} className="h-7 w-7 text-sm" />
            </div>
          ))}
        </div>
        <p className="mt-3 rounded-2xl bg-white/90 p-3 text-sm font-bold text-amber-900">⚠️ {f.trap}</p>
      </div>
    </div>
  )
}

export default function Irregular() {
  return (
    <Section id="irregular" icon="⚡" kr="불규칙" title="The four families that change shape" tone="rose" tag="총복습 30–39 · page 4">
      <Card>
        <H3 sub="Most verbs just take the ending. Four groups rearrange themselves first. The good news: each one does exactly one thing, always.">
          The four families
        </H3>
        <Families />
      </Card>

      <Card>
        <H3 sub="This is the single most useful table on the page. The ending decides whether anything happens at all.">⏱️ When do they change?</H3>
        <EndingGrid />
      </Card>

      <Card>
        <H3 sub="Two verbs end in ㄷ and are completely regular. The exam uses them to catch people who over-apply the rule.">
          ⚠️ The ㄷ verbs that are NOT irregular
        </H3>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-3xl bg-emerald-50 p-4 ring-2 ring-emerald-200">
            <p className="font-kr text-3xl text-emerald-900">닫다 · 받다</p>
            <p className="mt-1 text-sm font-extrabold text-slate-700">REGULAR — nothing changes</p>
            <p className="mt-2 font-kr text-xl text-slate-900">닫아요 · 닫으니까 · 닫을 거예요</p>
            <p className="font-kr text-xl text-slate-900">받아요 · 받으면 · 받을 거예요</p>
          </div>
          <div className="rounded-3xl bg-rose-50 p-4 ring-2 ring-rose-200">
            <p className="font-kr text-3xl text-rose-900">듣다 · 걷다 · 묻다</p>
            <p className="mt-1 text-sm font-extrabold text-slate-700">IRREGULAR — ㄷ becomes ㄹ</p>
            <p className="mt-2 font-kr text-xl text-slate-900">들어요 · 들으니까 · 들을 거예요</p>
            <p className="font-kr text-xl text-slate-900">걸어요 · 걸으면 · 걸을 거예요</p>
          </div>
        </div>
      </Card>

      <Card>
        <H3 sub="Questions 30–39 of the review. The dictionary form is shown, so you can check your reasoning as well as your answer.">
          From the exam · fill the gap
        </H3>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {IRREGULAR_ANSWERS.map((a) => (
            <span key={a.n} className="rounded-full bg-white px-2.5 py-1 text-xs font-bold text-slate-600 shadow-sm">
              {a.n}. <span className="font-kr text-base">{a.base}</span>
            </span>
          ))}
        </div>
        <GapList items={IRREGULAR_ANSWERS} />
      </Card>
    </Section>
  )
}
