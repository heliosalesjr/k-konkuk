import { useState } from 'react'
import { Card, H3, Line, Section, Speak } from '../../components/ui'
import { GRAMMAR_BOX, GRAMMAR_QA } from '../review'

function BoxGrid() {
  const [open, setOpen] = useState(GRAMMAR_BOX[0].kr)
  return (
    <div className="grid gap-2 sm:grid-cols-3">
      {GRAMMAR_BOX.map((g) => {
        const on = open === g.kr
        return (
          <button
            key={g.kr}
            type="button"
            onClick={() => setOpen(g.kr)}
            className={`rounded-3xl p-4 text-left shadow-sm ring-2 transition ${on ? 'bg-amber-50 ring-amber-300' : 'bg-white ring-white hover:bg-yellow-50'}`}
          >
            <div className="text-2xl">{g.icon}</div>
            <p className="mt-0.5 font-kr text-2xl leading-tight text-slate-900">{g.kr}</p>
            <p className="text-xs font-extrabold uppercase tracking-wide text-slate-500">{g.use}</p>
            {on && (
              <div className="animate-pop mt-2 rounded-2xl bg-white/90 p-2.5">
                <p className="font-kr text-xl leading-snug text-amber-900">{g.ex}</p>
                <p className="text-xs font-semibold text-slate-500">{g.exEn}</p>
              </div>
            )}
          </button>
        )
      })}
    </div>
  )
}

function QA({ qa }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-3xl bg-slate-50 p-4">
      <div className="mb-1 flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 text-[11px] font-extrabold text-slate-600">{qa.n}</span>
        <span className="rounded-full bg-amber-200 px-2.5 py-0.5 font-kr text-sm text-amber-900">{qa.tag}</span>
      </div>
      <Line kr={`가: ${qa.q}`} en={qa.qEn} />
      <div className="mt-2">
        {open ? (
          <Line kr={`나: ${qa.a}`} en={qa.aEn} />
        ) : (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="w-full rounded-2xl border-2 border-dashed border-slate-300 bg-white p-3 text-left font-kr text-2xl text-slate-400 transition hover:border-violet-400 hover:bg-yellow-50"
          >
            나: ＿＿＿＿＿ <span className="font-sans text-xs font-bold">tap to see the answer</span>
          </button>
        )}
      </div>
      {open && <p className="animate-pop mt-2 border-l-2 border-amber-300 pl-3 text-sm leading-relaxed text-slate-700">🔍 {qa.why}</p>}
      {open && (
        <div className="mt-2 flex justify-end">
          <Speak text={`${qa.q} ${qa.a}`} />
        </div>
      )}
    </div>
  )
}

export default function Box() {
  return (
    <Section id="box" icon="🧰" kr="문법 상자" title="The nine grammar points of the semester" tone="amber" tag="총복습 50–58 · pages 6–7">
      <Card>
        <H3 sub="These nine endings are the toolbox the whole second half of the paper is built from. Tap each one to see it in use.">
          The toolbox
        </H3>
        <BoxGrid />
      </Card>

      <Card>
        <H3 sub="Every question hides a clue in the OTHER line: a request, a promise, a permission. Read both lines before you choose. Tap to reveal each answer.">
          From the exam · questions 51–58
        </H3>
        <div className="space-y-3">
          {GRAMMAR_QA.map((qa) => (
            <QA key={qa.n} qa={qa} />
          ))}
        </div>
      </Card>

      <Card>
        <H3 sub="Four pairs that look alike and mean very different things.">⚠️ The look-alikes</H3>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-3xl bg-rose-50 p-4 ring-2 ring-rose-200">
            <p className="font-kr text-2xl text-rose-900">-(으)ㄹ게요 vs -(으)ㄹ 거예요</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              <span className="font-kr text-lg">-(으)ㄹ게요</span> is a <b>promise I make</b>, so it is always about ME. To ask or talk about someone else, use{' '}
              <span className="font-kr text-lg">-(으)ㄹ 거예요</span>.
            </p>
            <p className="mt-2 font-kr text-lg text-slate-900">제가 전화할게요. ✅</p>
            <p className="font-kr text-lg text-slate-900">누가 케이크를 준비할 거예요? ✅</p>
            <p className="font-kr text-lg text-slate-400 line-through decoration-rose-500">누가 준비할게요?</p>
          </div>
          <div className="rounded-3xl bg-sky-50 p-4 ring-2 ring-sky-200">
            <p className="font-kr text-2xl text-sky-900">-아/어 주세요 vs -아/어 보세요</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              <span className="font-kr text-lg">주세요</span> asks someone to <b>do something for me</b>. <span className="font-kr text-lg">보세요</span>{' '}
              <b>recommends</b> that they try it.
            </p>
            <p className="mt-2 font-kr text-lg text-slate-900">문을 닫아 주세요. (do it for me)</p>
            <p className="font-kr text-lg text-slate-900">한번 가 보세요. (give it a go)</p>
          </div>
          <div className="rounded-3xl bg-emerald-50 p-4 ring-2 ring-emerald-200">
            <p className="font-kr text-2xl text-emerald-900">-아/어도 돼요? vs -(으)면 안 돼요</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              The question asks permission; the refusal is always the other one. They come as a pair in the exam.
            </p>
            <p className="mt-2 font-kr text-lg text-slate-900">여기에서 사진을 찍어도 돼요?</p>
            <p className="font-kr text-lg text-slate-900">아니요, 찍으면 안 돼요.</p>
          </div>
          <div className="rounded-3xl bg-violet-50 p-4 ring-2 ring-violet-200">
            <p className="font-kr text-2xl text-violet-900">-아/어 봤다 vs -(으)ㄹ 수 있다</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              <span className="font-kr text-lg">봤다</span> = I have <b>tried</b> it (experience). <span className="font-kr text-lg">수 있다</span> = I <b>can</b> do
              it (ability).
            </p>
            <p className="mt-2 font-kr text-lg text-slate-900">비빔밥을 먹어 봤어요. (tried it)</p>
            <p className="font-kr text-lg text-slate-900">수영을 할 수 있어요. (can do it)</p>
          </div>
        </div>
      </Card>
    </Section>
  )
}
