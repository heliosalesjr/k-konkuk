import { useState } from 'react'
import { Card, H3, Section, Speak, Word } from '../../components/ui'
import { Hidden, Tabs } from '../drills'
import { GROUPS, VERBS40 } from '../verbs40'

const TAB_ITEMS = [{ id: 'all', kr: '전체', en: 'All 40' }, ...GROUPS.map((g) => ({ id: g.id, kr: g.kr, en: g.range }))]
const TENSE_LABEL = ['현재', '과거', '미래']

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
              {v.sp && <span className="rounded bg-violet-200 px-1 text-[10px] font-black text-violet-900">★</span>}
              {v.hum && <span className="rounded bg-emerald-200 px-1 text-[10px] font-black text-emerald-900">🙏</span>}
            </div>
            <div className="text-xs font-semibold text-slate-500">{v.en}</div>
            <div className="mt-0.5 text-[11px] font-bold text-violet-600">{open ? '▴ hide' : '▾ example'}</div>
          </button>
        </td>
        <td className="bg-sky-50 p-2.5">
          <div className="space-y-0.5 text-center font-kr text-xl text-sky-900">
            {v.fml.map((f, i) => (
              <div key={i}>{cover ? <Hidden text={f} cls="bg-sky-100 text-sky-900" /> : f}</div>
            ))}
          </div>
        </td>
        <td className="rounded-r-2xl bg-rose-50 p-2.5">
          {v.hon ? (
            <div className="space-y-0.5 text-center font-kr text-xl text-rose-900">
              {v.hon.map((h, i) => (
                <div key={i}>{cover ? <Hidden text={h} cls="bg-rose-100 text-rose-900" /> : h}</div>
              ))}
            </div>
          ) : (
            <div className="text-center text-sm font-bold text-slate-400">— no honorific</div>
          )}
        </td>
      </tr>
      {open && (
        <tr>
          <td colSpan={3} className="rounded-2xl bg-white px-2.5 pb-3">
            <div className="animate-pop flex items-start gap-2 rounded-xl bg-rose-50 p-2.5">
              <Speak text={v.honEx[0]} />
              <div className="min-w-0">
                <p className="font-kr text-xl leading-snug text-slate-900 sm:text-2xl">{v.honEx[0]}</p>
                <p className="text-xs font-semibold text-slate-500">{v.honEx[1]}</p>
              </div>
            </div>
            {v.note && <p className="mt-1.5 text-xs font-bold text-amber-800">⚠️ {v.note}</p>}
          </td>
        </tr>
      )}
    </>
  )
}

export default function TableHon() {
  const [tab, setTab] = useState('all')
  const [cover, setCover] = useState(false)
  const rows = tab === 'all' ? VERBS40 : VERBS40.filter((v) => v.g === tab)

  return (
    <Section id="tablehon" icon="📋" kr="40개 존댓말 표" title="All forty verbs, formal and honorific" tone="emerald" tag="40 verbos · pages 8–12">
      <Card>
        <H3 sub={`Each cell lists the three tenses in order: ${TENSE_LABEL.join(' · ')}. Tap a verb to see a sentence with a respected subject.`}>
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
                <th className="p-2 text-center text-sky-700">formal -습니다</th>
                <th className="p-2 text-center text-rose-700">honorific -(으)시-</th>
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
          <span className="rounded bg-violet-200 px-1 text-[10px] font-black text-violet-900">★</span> = the honorific is a different word ·{' '}
          <span className="rounded bg-emerald-200 px-1 text-[10px] font-black text-emerald-900">🙏</span> = has a humble form for when I am the one acting
        </p>
      </Card>
    </Section>
  )
}
