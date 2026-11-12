import { useState } from 'react'
import { Block, Callout, Card, H3, Section, Speak } from '../../components/ui'
import { GapList } from '../drills'
import { COUNTERS, COUNTER_ANSWERS, NATIVE_SAME, NATIVE_SHIFT } from '../review'

const NATIVE = ['한', '두', '세', '네', '다섯', '여섯', '일곱', '여덟', '아홉', '열']

const THINGS = [
  { kr: '사과', en: 'apple', c: '개' },
  { kr: '친구', en: 'friend', c: '명' },
  { kr: '고양이', en: 'cat', c: '마리' },
  { kr: '책', en: 'book', c: '권' },
  { kr: '카드', en: 'card', c: '장' },
  { kr: '컴퓨터', en: 'computer', c: '대' },
  { kr: '커피', en: 'coffee', c: '잔' },
  { kr: '맥주', en: 'beer', c: '병' },
  { kr: '주스', en: 'juice', c: '캔' },
]

// Pick a thing and a number; the phrase builds itself in the book's order.
function CounterBuilder() {
  const [thing, setThing] = useState(THINGS[0])
  const [n, setN] = useState(3)
  const phrase = `${thing.kr} ${NATIVE[n - 1]} ${thing.c}`

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-1.5">
        {THINGS.map((t) => (
          <button
            key={t.kr}
            type="button"
            onClick={() => setThing(t)}
            className={`rounded-full px-3 py-1 font-kr text-lg shadow-sm transition ${t.kr === thing.kr ? 'bg-slate-900 text-white' : 'bg-white text-slate-700 hover:bg-yellow-100'}`}
          >
            {t.kr}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {NATIVE.map((num, i) => (
          <button
            key={num}
            type="button"
            onClick={() => setN(i + 1)}
            className={`rounded-full px-3 py-1 font-kr text-lg shadow-sm transition ${i + 1 === n ? 'bg-violet-600 text-white' : 'bg-white text-slate-700 hover:bg-yellow-100'}`}
          >
            {num}
          </button>
        ))}
      </div>

      <div className="rounded-3xl bg-gradient-to-br from-emerald-50 to-lime-50 p-5 ring-2 ring-emerald-200">
        <div className="flex flex-wrap items-end justify-center gap-2 sm:gap-3">
          <Block role="obj" base={thing.kr} gloss="1 · the thing" size="md" />
          <Block role="info" base={NATIVE[n - 1]} gloss="2 · native number" size="md" />
          <Block role="pred" base={thing.c} gloss="3 · its counter" size="md" />
        </div>
        <div className="mt-4 flex items-center justify-center gap-3">
          <p className="font-kr text-3xl text-slate-900 sm:text-4xl">{phrase}</p>
          <Speak text={phrase} />
        </div>
        <p className="mt-1 text-center text-sm font-semibold text-slate-600">
          {n} {thing.en}
          {n > 1 ? 's' : ''}
        </p>
      </div>
    </div>
  )
}

export default function Counters() {
  return (
    <Section id="counters" icon="🔢" kr="단위 명사" title="Counting things — number + counter" tone="emerald" tag="총복습 1–8 · page 1">
      <Card>
        <H3 sub="Korean never counts with a bare number. Every kind of thing has its own counter word, and the order is always the same.">The order</H3>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          <Block role="obj" base="사과" gloss="the thing" size="md" />
          <span className="text-3xl font-black text-slate-400">+</span>
          <Block role="info" base="여덟" gloss="native number" size="md" />
          <span className="text-3xl font-black text-slate-400">+</span>
          <Block role="pred" base="개" gloss="the counter" size="md" />
        </div>
        <p className="mt-4 text-center font-kr text-3xl text-slate-900">사과 여덟 개 주세요.</p>
        <p className="text-center text-sm font-semibold text-slate-600">Eight apples, please.</p>
      </Card>

      <Card>
        <H3 sub="Five native numbers change shape in front of a counter. These five are the whole difficulty.">⚠️ Numbers that change shape</H3>
        <div className="grid gap-2 sm:grid-cols-5">
          {NATIVE_SHIFT.map(([full, short]) => (
            <div key={full} className="rounded-2xl bg-rose-50 p-3 text-center ring-2 ring-rose-200">
              <p className="font-kr text-2xl text-slate-500 line-through decoration-rose-400">{full}</p>
              <p className="text-lg font-black text-slate-300">↓</p>
              <p className="font-kr text-3xl text-rose-900">{short}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-3xl bg-emerald-50 p-4 ring-1 ring-emerald-200">
          <p className="text-sm font-extrabold text-emerald-800">All the others stay exactly as they are:</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {NATIVE_SAME.map((n) => (
              <span key={n} className="rounded-xl bg-white px-2.5 py-1 font-kr text-2xl text-slate-900 shadow-sm">
                {n}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <Callout kind="tip" title="Age uses the same rule">
            <p>
              <span className="font-kr text-lg">나이가 어떻게 되세요?</span> → <span className="font-kr text-lg">스무 살이에요.</span> Age takes native numbers +{' '}
              <span className="font-kr text-lg">살</span>, so 스물 becomes 스무.
            </p>
          </Callout>
        </div>
      </Card>

      <Card>
        <H3 sub="The nine counters from the handout. Learn them with the thing, not on their own.">The counters</H3>
        <div className="grid gap-2 sm:grid-cols-3">
          {COUNTERS.map((c) => (
            <div key={c.kr} className="rounded-2xl bg-slate-50 p-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{c.icon}</span>
                <span className="font-kr text-3xl text-emerald-900">{c.kr}</span>
              </div>
              <p className="mt-0.5 text-xs font-semibold text-slate-500">{c.en}</p>
              <div className="mt-1.5 flex items-center gap-1.5">
                <span className="font-kr text-xl text-slate-900">{c.ex}</span>
                <Speak text={c.ex} className="h-7 w-7 text-sm" />
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <H3 sub="Pick a thing and a number. Notice how 하나 becomes 한 and 셋 becomes 세 the moment a counter appears.">🎛️ Build a counting phrase</H3>
        <CounterBuilder />
      </Card>

      <Card>
        <H3 sub="Questions 1–8 of the review. Tap a gap to check it.">From the exam · fill the gap</H3>
        <GapList items={COUNTER_ANSWERS} />
        <div className="mt-4">
          <Callout kind="note" title="On question 8 — both ways are fine">
            <p>
              <span className="font-kr text-lg">맥주 한 병하고 주스 한 캔</span> and <span className="font-kr text-lg">맥주 한 캔, 주스 한 병</span> both exist. Beer
              and juice come in bottles AND in cans, so either counter is correct.
            </p>
          </Callout>
        </div>
      </Card>
    </Section>
  )
}
