import { useState } from 'react'
import { Block, Callout, Card, H3, Section, Sentence, Speak } from '../../components/ui'
import OrderPuzzle from '../../components/OrderPuzzle'
import { ORDER_ANSWERS } from '../review'

function Puzzle({ item }) {
  const [why, setWhy] = useState(false)
  return (
    <div className="rounded-3xl bg-slate-50 p-4">
      <div className="mb-2 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-slate-400">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 text-slate-600">{item.n}</span>
        put the pieces in order
      </div>
      {item.context && (
        <div className="mb-3 rounded-2xl bg-white p-3 ring-1 ring-slate-200">
          <p className="font-kr text-xl leading-snug text-slate-700">{item.context}</p>
          <p className="text-xs font-semibold text-slate-500">{item.contextEn}</p>
        </div>
      )}
      <OrderPuzzle parts={item.parts} en={item.en} />
      <div className="mt-3">
        {why ? (
          <div className="animate-pop space-y-2">
            <div className="flex items-start gap-2 rounded-2xl bg-white p-3 shadow-sm">
              <Speak text={item.kr} />
              <div className="min-w-0">
                <p className="font-kr text-2xl leading-snug text-slate-900 sm:text-3xl">{item.kr}</p>
                <p className="text-sm font-semibold text-slate-600">{item.en}</p>
              </div>
            </div>
            <p className="border-l-2 border-violet-200 pl-3 text-sm leading-relaxed text-slate-700">🔍 {item.why}</p>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setWhy(true)}
            className="rounded-full bg-white px-4 py-1.5 text-sm font-extrabold text-slate-700 shadow-sm transition hover:bg-yellow-100"
          >
            Show the answer and why →
          </button>
        )}
      </div>
    </div>
  )
}

export default function Order() {
  return (
    <Section id="order" icon="🧩" kr="어순" title="Building a long sentence from scratch" tone="violet" tag="총복습 47–50 · page 6">
      <Card>
        <H3 sub="A Korean sentence always runs in the same direction, and the verb is always at the very end.">The skeleton</H3>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <Block role="subj" base="주어" gloss="subject" size="md" />
          <span className="text-2xl font-black text-slate-300">→</span>
          <Block role="time" base="시간" gloss="when" size="md" />
          <span className="text-2xl font-black text-slate-300">→</span>
          <Block role="place" base="장소" gloss="where" size="md" />
          <span className="text-2xl font-black text-slate-300">→</span>
          <Block role="obj" base="목적어" gloss="object" size="md" />
          <span className="text-2xl font-black text-slate-300">→</span>
          <Block role="pred" base="서술어" gloss="VERB — last!" size="md" />
        </div>
        <div className="mt-5 space-y-3">
          <div className="flex gap-3 rounded-3xl bg-slate-50 p-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-black text-white">1</div>
            <p className="text-sm leading-relaxed text-slate-800 sm:text-base">
              Find the <b>subject</b> — the piece with 은/는 or 이/가 (저는, 학생들이).
            </p>
          </div>
          <div className="flex gap-3 rounded-3xl bg-slate-50 p-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-black text-white">2</div>
            <p className="text-sm leading-relaxed text-slate-800 sm:text-base">
              Find the <b>final verb</b> — the piece ending in 습니다 or 요. That goes last, no matter what.
            </p>
          </div>
          <div className="flex gap-3 rounded-3xl bg-slate-50 p-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-black text-white">3</div>
            <p className="text-sm leading-relaxed text-slate-800 sm:text-base">
              Fit everything else in the middle, with the <b>reason</b> (-아서 / -해서) before the <b>result</b>.
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <H3 sub="Questions 47–50 of the review. Tap the pieces in order — the colours tell you the job of each one.">
          From the exam · 순서대로 쓰세요
        </H3>
        <div className="space-y-4">
          {ORDER_ANSWERS.map((o) => (
            <Puzzle key={o.n} item={o} />
          ))}
        </div>
      </Card>

      <Card>
        <H3 sub="Two adjectives in front of one noun is the shape question 47 is really testing.">The adjective chain</H3>
        <div className="rounded-3xl bg-slate-50 p-4">
          <Sentence
            size="md"
            parts={[
              { role: 'info', base: '친절하고', gloss: 'kind AND (-고)' },
              { role: 'info', base: '재미있는', gloss: 'fun (modifier form)' },
              { role: 'obj', base: '친구', particle: '를', gloss: 'friends' },
              { role: 'pred', base: '사귀고 싶습니다.', gloss: 'want to make' },
            ]}
          />
        </div>
        <div className="mt-3">
          <Callout kind="rule" title="Only the last adjective changes shape">
            <p>
              <span className="font-kr text-lg">친절하고 재미있는</span> — the first one just takes -고. Full details on the{' '}
              <a href="irregulars.html#modifier" className="font-bold underline decoration-2 underline-offset-2 hover:text-violet-800">
                관형형
              </a>{' '}
              page.
            </p>
          </Callout>
        </div>
      </Card>
    </Section>
  )
}
