import { useState } from 'react'
import { Callout, Card, H3, Line, Section } from '../../components/ui'
import { DATE_NOTE, READING, READING_LONG, READING_TIPS } from '../review'

function LongItem({ it }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-3xl bg-slate-50 p-4">
      <div className="mb-1.5 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-slate-400">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 text-slate-600">{it.n}</span>
        the text
      </div>
      <p className="text-sm leading-relaxed text-slate-700 sm:text-base">{it.text}</p>
      {open ? (
        <div className="animate-pop mt-3 space-y-2">
          <div className="rounded-2xl bg-emerald-50 p-3 ring-1 ring-emerald-200">
            <p className="text-xs font-extrabold uppercase tracking-wide text-emerald-700">the answer</p>
            <p className="font-kr text-2xl leading-snug text-slate-900">{it.answer}</p>
            <p className="text-sm font-semibold text-slate-600">{it.answerEn}</p>
          </div>
          <p className="border-l-2 border-violet-200 pl-3 text-sm leading-relaxed text-slate-700">🔍 {it.why}</p>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-3 rounded-full bg-white px-4 py-1.5 text-sm font-extrabold text-slate-700 shadow-sm transition hover:bg-yellow-100"
        >
          Show the answer →
        </button>
      )}
    </div>
  )
}

export default function Reading() {
  return (
    <Section id="reading" icon="📖" kr="읽기" title="Reading questions — three strategies" tone="emerald" tag="총복습 74–81 · page 10">
      <Card>
        <H3 sub="The reading section is not about understanding every word. It is about knowing where to look.">The three strategies</H3>
        <div className="grid gap-3 sm:grid-cols-3">
          {READING_TIPS.map((t) => (
            <div key={t.title} className="rounded-3xl bg-emerald-50 p-4 ring-2 ring-emerald-200">
              <div className="text-3xl">{t.icon}</div>
              <p className="mt-1 text-lg font-extrabold text-slate-900">{t.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-700">{t.body}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <H3 sub="Short exchanges, questions 74–76. Each answer has to match the SHAPE of the question, not just its meaning.">
          Pick the reply · 74–76
        </H3>
        <div className="space-y-3">
          {READING.map((r) => (
            <div key={r.n} className="rounded-3xl bg-slate-50 p-4">
              <div className="mb-1 flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 text-[11px] font-extrabold text-slate-600">{r.n}</div>
              <Line kr={r.q} en={r.qEn} />
              <div className="mt-2">
                <Line kr={`→ ${r.a}`} en={r.aEn} />
              </div>
              <p className="mt-2 border-l-2 border-emerald-300 pl-3 text-sm leading-relaxed text-slate-700">🔍 {r.why}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <H3 sub="The longer texts, questions 77–81. Read the summary, decide your answer, then open it.">The long texts · 77–81</H3>
        <div className="space-y-3">
          {READING_LONG.map((it) => (
            <LongItem key={it.n} it={it} />
          ))}
        </div>
      </Card>

      <Card>
        <H3 sub="Dates and months use Sino-Korean numbers, and exactly two of them are read irregularly.">📅 The two irregular months</H3>
        <div className="grid gap-3 sm:grid-cols-2">
          {DATE_NOTE.map((d) => (
            <div key={d.kr} className="rounded-3xl bg-rose-50 p-4 ring-2 ring-rose-200">
              <div className="flex items-center gap-3">
                <span className="font-kr text-4xl text-rose-900">{d.kr}</span>
                <span className="font-kr text-2xl text-slate-400 line-through decoration-rose-500 decoration-2">{d.wrong}</span>
              </div>
              <p className="mt-1 text-sm font-semibold text-slate-700">{d.en}</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Callout kind="note" title="Reading a full date">
            <p>
              <span className="font-kr text-lg">10월 2일 토요일 오후 2시</span> → <span className="font-kr text-lg">시월 이 일 토요일 오후 두 시</span>. Month and
              day are Sino (시월 이 일), but the hour is native (두 시).
            </p>
          </Callout>
        </div>
      </Card>
    </Section>
  )
}
