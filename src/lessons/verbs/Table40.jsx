import { useState } from 'react'
import { Callout, Card, H3, Section, Speak, Word } from '../../components/ui'
import { Hidden, Tabs } from '../drills'
import { GROUPS, VERBS40 } from '../verbs40'

const TAB_ITEMS = [{ id: 'all', kr: '전체', en: 'All 40' }, ...GROUPS.map((g) => ({ id: g.id, kr: g.kr, en: g.range }))]

function Row({ v, cover }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <tr className="align-top">
        <td className="rounded-l-2xl bg-slate-50 p-2.5">
          <button type="button" onClick={() => setOpen(!open)} className="text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-black text-slate-400">{v.n}</span>
              <Word text={v.kr} className="text-2xl text-slate-900" />
              {v.irr && <span className="rounded bg-amber-200 px-1 font-kr text-[11px] text-amber-900">{v.irr}</span>}
              {v.sp && <span className="rounded bg-violet-200 px-1 text-[10px] font-black text-violet-900">★</span>}
            </div>
            <div className="text-xs font-semibold text-slate-500">{v.en}</div>
            <div className="mt-0.5 text-[11px] font-bold text-violet-600">{open ? '▴ hide sentences' : '▾ sentences'}</div>
          </button>
        </td>
        <td className="bg-violet-50 p-2.5 text-center">
          <div className="flex items-center justify-center gap-1">
            <span className="font-kr text-2xl text-violet-900">{v.pres}</span>
            <Speak text={v.pres} className="h-7 w-7 text-sm" />
          </div>
        </td>
        <td className="bg-rose-50 p-2.5 text-center font-kr text-2xl text-rose-900">
          {cover ? <Hidden text={v.past} cls="bg-rose-100 text-rose-900" /> : v.past}
        </td>
        <td className="rounded-r-2xl bg-sky-50 p-2.5 text-center font-kr text-2xl text-sky-900">
          {cover ? <Hidden text={v.fut} cls="bg-sky-100 text-sky-900" /> : v.fut}
        </td>
      </tr>
      {open && (
        <tr>
          <td colSpan={4} className="rounded-2xl bg-white px-2.5 pb-3">
            <div className="animate-pop grid gap-1.5 sm:grid-cols-3">
              {['pres', 'past', 'fut'].map((k) => (
                <div key={k} className="flex items-start gap-1.5 rounded-xl bg-slate-50 p-2">
                  <Speak text={v.ex[k][0]} className="h-7 w-7 text-sm" />
                  <div className="min-w-0">
                    <p className="font-kr text-lg leading-snug text-slate-900">{v.ex[k][0]}</p>
                    <p className="text-[11px] font-semibold text-slate-500">{v.ex[k][1]}</p>
                  </div>
                </div>
              ))}
            </div>
            {v.note && <p className="mt-1.5 text-xs font-bold text-amber-800">⚠️ {v.note}</p>}
          </td>
        </tr>
      )}
    </>
  )
}

export default function Table40() {
  const [tab, setTab] = useState('all')
  const [cover, setCover] = useState(false)
  const rows = tab === 'all' ? VERBS40 : VERBS40.filter((v) => v.g === tab)

  return (
    <Section id="table40" icon="📚" kr="동사 40개" title="All forty verbs, three tenses each" tone="emerald" tag="40 verbos · pages 2–6">
      <Card>
        <H3 sub="Tap a verb to open its three example sentences. The handout's study tip: hide the past and future columns and conjugate them yourself first.">
          The table
        </H3>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <Tabs items={TAB_ITEMS} value={tab} onChange={setTab} />
          <button
            type="button"
            onClick={() => setCover(!cover)}
            aria-pressed={cover}
            className={`rounded-full px-4 py-1.5 text-sm font-extrabold shadow-sm transition ${cover ? 'bg-emerald-600 text-white' : 'bg-white text-slate-700 hover:bg-yellow-100'}`}
          >
            {cover ? '🙈 quiz mode on' : '👀 quiz mode off'}
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[32rem] border-separate border-spacing-y-1.5 text-left">
            <thead>
              <tr className="text-xs font-extrabold uppercase tracking-wide text-slate-500">
                <th className="p-2">Verb</th>
                <th className="p-2 text-center text-violet-700">현재 present</th>
                <th className="p-2 text-center text-rose-700">과거 past</th>
                <th className="p-2 text-center text-sky-700">미래 future</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((v) => (
                <Row key={v.kr} v={v} cover={cover} />
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-xs font-semibold text-slate-500">
          <span className="rounded bg-amber-200 px-1 font-kr text-amber-900">ㄷ ㄹ</span> = irregular family ·{' '}
          <span className="rounded bg-violet-200 px-1 font-black text-violet-900">★</span> = has its own honorific word (see{' '}
          <a href="honorifics.html" className="underline decoration-2 underline-offset-2 hover:text-violet-800">
            존댓말
          </a>
          )
        </p>
      </Card>

      <Card>
        <H3 sub="Four verbs on this list look like each other but behave differently. Read these twice.">⚠️ The four traps</H3>
        <div className="grid gap-3 sm:grid-cols-2">
          <Callout kind="warn" title="받다 · 닫다 end in ㄷ but are REGULAR">
            <p className="font-kr text-lg">받다 → 받아요, 받을 거예요</p>
            <p className="font-kr text-lg">닫다 → 닫아요, 닫을 거예요</p>
            <p className="mt-1 text-xs">Only 듣다, 걷다 and 묻다 change their ㄷ.</p>
          </Callout>
          <Callout kind="warn" title="살 거예요 — buy or live?">
            <p className="font-kr text-lg">사다 (buy) → 살 거예요</p>
            <p className="font-kr text-lg">살다 (live) → 살 거예요</p>
            <p className="mt-1 text-xs">Identical. 사세요 and 삽니다 too. Only the context tells you which.</p>
          </Callout>
          <Callout kind="note" title="좋아하다 takes 을/를">
            <p className="font-kr text-lg">저는 케이팝<span className="text-blue-700">을</span> 좋아해요. ✅</p>
            <p className="font-kr text-lg">사과<span className="text-blue-700">가</span> 좋아요. ✅ (좋다 is an adjective)</p>
            <p className="mt-1 text-xs">사과를 좋아요 is the classic exam mistake.</p>
          </Callout>
          <Callout kind="note" title="끝나다 has no honorific">
            <p className="font-kr text-lg">수업이 한 시에 끝납니다.</p>
            <p className="mt-1 text-xs">The subject is the class, not a person — so no -(으)시-.</p>
          </Callout>
        </div>
      </Card>
    </Section>
  )
}
