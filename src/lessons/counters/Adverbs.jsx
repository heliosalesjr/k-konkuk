import { useState } from 'react'
import { Block, Callout, Card, H3, Line, Section } from '../../components/ui'
import { GapList } from '../drills'
import { ADVERBS3, ADVERB_ANSWERS } from '../review'

// Tap a word to see its exam clue and the sentence it lives in.
function AdverbGrid() {
  const [open, setOpen] = useState(ADVERBS3[0].kr)
  const a = ADVERBS3.find((x) => x.kr === open)
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {ADVERBS3.map((x) => (
          <button
            key={x.kr}
            type="button"
            onClick={() => setOpen(x.kr)}
            className={`rounded-full px-4 py-2 font-kr text-xl shadow-sm transition ${open === x.kr ? 'bg-violet-600 text-white' : 'bg-white text-slate-800 hover:bg-yellow-100'}`}
          >
            {x.kr} <span className="font-sans text-xs font-bold opacity-80">{x.en}</span>
          </button>
        ))}
      </div>
      <div className="animate-pop rounded-3xl bg-yellow-50 p-4 ring-2 ring-yellow-200">
        <div className="flex flex-wrap items-baseline gap-2">
          <span className="font-kr text-3xl text-slate-900">{a.kr}</span>
          <span className="text-sm font-bold text-slate-600">= {a.en}</span>
        </div>
        <p className="mt-1.5 rounded-xl bg-white/80 px-3 py-1.5 text-sm font-semibold text-slate-700">
          🔍 the clue in the sentence: <span className="font-kr text-lg text-violet-800">{a.clue}</span>
        </p>
        <div className="mt-2">
          <Line kr={a.ex} en={a.exEn} big />
        </div>
      </div>
    </div>
  )
}

export default function Adverbs() {
  return (
    <Section id="adverbs" icon="🔸" kr="부사" title="Adverbs — how, when and how much" tone="violet" tag="총복습 11–20 · page 2">
      <Card>
        <H3 sub="An adverb says how, when or how much something happens. In Korean it always sits before the verb.">Where they go</H3>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          <Block role="subj" base="학생들이" gloss="subject" size="md" />
          <Block role="place" base="도서관에서" gloss="place" size="md" />
          <Block role="info" base="열심히" gloss="the adverb" size="md" />
          <Block role="pred" base="공부합니다." gloss="verb" size="md" />
        </div>
        <div className="mt-4">
          <Callout kind="tip" title="The exam trick is finding the clue">
            <p>
              The sentence always hides a clue that only one adverb fits: a time word, a piece of advice, a comparison, a negative. Learn each adverb{' '}
              <b>together with its clue</b>, not on its own.
            </p>
          </Callout>
        </div>
      </Card>

      <Card>
        <H3 sub="Ten adverbs, each with the clue that gives it away. Tap one.">The ten words</H3>
        <AdverbGrid />
      </Card>

      <Card>
        <H3 sub="These two are the pair the exam loves to swap. They both mean something like 'not now'.">⚠️ 아직 vs 이따가</H3>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-3xl bg-rose-50 p-4 ring-2 ring-rose-200">
            <p className="font-kr text-3xl text-rose-900">아직</p>
            <p className="text-sm font-extrabold text-slate-700">still / not yet — looks BACKWARDS</p>
            <p className="mt-2 text-sm text-slate-700">
              Always pairs with a negative: <span className="font-kr text-lg">안 ~</span> or <span className="font-kr text-lg">못 ~</span>.
            </p>
            <p className="mt-2 font-kr text-xl text-slate-900">아직 한강 공원에 안 가 봤어요.</p>
          </div>
          <div className="rounded-3xl bg-sky-50 p-4 ring-2 ring-sky-200">
            <p className="font-kr text-3xl text-sky-900">이따가</p>
            <p className="text-sm font-extrabold text-slate-700">in a bit — looks FORWARDS</p>
            <p className="mt-2 text-sm text-slate-700">
              Near future, still today. Pairs with <span className="font-kr text-lg">-(으)ㄹ게요</span> and reasons like{' '}
              <span className="font-kr text-lg">바쁘니까</span>.
            </p>
            <p className="mt-2 font-kr text-xl text-slate-900">지금은 바쁘니까 이따가 전화할게요.</p>
          </div>
        </div>
      </Card>

      <Card>
        <H3 sub="Questions 11–20 of the review. Tap a gap to check your answer.">From the exam · fill the gap</H3>
        <GapList items={ADVERB_ANSWERS} />
      </Card>
    </Section>
  )
}
