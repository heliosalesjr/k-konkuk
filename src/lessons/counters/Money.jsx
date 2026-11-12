import { Callout, Card, H3, Line, Section, Speak } from '../../components/ui'
import { MoneyMachine } from '../drills'
import { MONEY_ANSWERS, MONEY_BLOCKS, SINO } from '../review'

export default function Money() {
  return (
    <Section id="money" icon="💰" kr="돈" title="Money — the other number system" tone="amber" tag="총복습 9–10 · page 2">
      <Card>
        <H3 sub="Counting things uses native numbers. Money uses the OTHER set: the Sino-Korean numbers.">Two number systems</H3>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-3xl bg-emerald-50 p-4 ring-2 ring-emerald-200">
            <p className="text-sm font-extrabold uppercase tracking-wide text-emerald-700">native · for counting things</p>
            <p className="mt-1 font-kr text-2xl text-slate-900">하나 · 둘 · 셋 · 넷 · 다섯</p>
            <p className="mt-1 font-kr text-xl text-emerald-900">사과 세 개, 스무 살, 한 시</p>
          </div>
          <div className="rounded-3xl bg-amber-50 p-4 ring-2 ring-amber-200">
            <p className="text-sm font-extrabold uppercase tracking-wide text-amber-700">sino · for money, dates, minutes</p>
            <p className="mt-1 font-kr text-2xl text-slate-900">일 · 이 · 삼 · 사 · 오</p>
            <p className="mt-1 font-kr text-xl text-amber-900">삼천 원, 시월 이 일, 사십 분</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {SINO.slice(1).map((s, i) => (
            <div key={s} className="rounded-2xl bg-white px-3 py-2 text-center shadow-sm ring-1 ring-slate-200">
              <div className="text-xs font-black text-slate-400">{i + 1}</div>
              <div className="font-kr text-2xl text-slate-900">{s}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <H3 sub="Read a price in blocks, from the biggest down. Each block has its own word.">The four blocks</H3>
        <div className="grid gap-2 sm:grid-cols-4">
          {MONEY_BLOCKS.map((b) => (
            <div key={b.kr} className="rounded-3xl bg-amber-50 p-4 text-center ring-2 ring-amber-200">
              <p className="font-kr text-4xl text-amber-900">{b.kr}</p>
              <p className="mt-1 text-sm font-extrabold text-slate-600">{b.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <Callout kind="warn" title="Never say 일 in front of a block">
            <p>
              10,000 = <span className="font-kr text-lg">만</span>, not <span className="font-kr text-lg line-through decoration-rose-500">일만</span>.
              Same for 천, 백, 십.
            </p>
          </Callout>
          <Callout kind="rule" title="Zeros simply disappear">
            <p>
              52,090 = 5만 + 2천 + <s>0백</s> + 9십 + <s>0</s> → <span className="font-kr text-lg">오만 이천구십</span>
            </p>
          </Callout>
        </div>
      </Card>

      <Card>
        <H3 sub="Type any amount and read it out loud. Then check yourself with 🔊.">🎛️ The price reader</H3>
        <MoneyMachine />
      </Card>

      <Card>
        <H3 sub="Questions 9–10 of the review, broken down.">From the exam</H3>
        <div className="space-y-3">
          {MONEY_ANSWERS.map((m) => (
            <div key={m.n} className="rounded-3xl bg-slate-50 p-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-200 text-xs font-extrabold text-slate-600">{m.n}</span>
                <span className="text-2xl font-black text-slate-900">{m.digits}</span>
                <span className="text-2xl font-black text-slate-300">→</span>
                <span className="font-kr text-3xl text-amber-900">{m.kr}</span>
                <Speak text={m.kr} />
              </div>
              <p className="mt-2 text-sm font-semibold text-slate-600">{m.steps}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <H3 sub="One shopping expression you will need in every exam.">Asking the price</H3>
        <div className="space-y-2">
          <Line kr="사과가 한 개에 얼마예요?" en="How much is one apple?" />
          <Line kr="사과가 1개에 얼마입니까?" en="How much is one apple? (formal)" />
        </div>
        <div className="mt-3">
          <Callout kind="tip" title="Price per unit takes 에">
            <p>
              <span className="font-kr text-lg">한 개<span className="text-blue-700">에</span></span> = per one piece. The same 에 you use for a clock time.
            </p>
          </Callout>
        </div>
      </Card>
    </Section>
  )
}
