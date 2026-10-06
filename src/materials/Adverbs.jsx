import { useState } from 'react'
import { Block, Callout, Card, H3, Line, Section, Sentence, Speak, Word } from '../components/ui'
import { ADVERBS, TIME_PHRASES } from './data'

// Tap a word to see it used in a sentence from the book, and hear it.
function AdverbGrid() {
  const [open, setOpen] = useState(ADVERBS[0].kr)
  const current = ADVERBS.find((a) => a.kr === open)
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {ADVERBS.map((a) => (
          <button
            key={a.kr}
            type="button"
            onClick={() => setOpen(a.kr)}
            className={`rounded-full px-4 py-2 font-kr text-xl shadow-sm transition ${open === a.kr ? 'bg-violet-600 text-white' : 'bg-white text-slate-800 hover:bg-yellow-100'}`}
          >
            {a.kr} <span className="font-sans text-xs font-bold opacity-80">{a.en}</span>
          </button>
        ))}
      </div>
      <div className="rounded-3xl bg-yellow-50 p-4 ring-2 ring-yellow-200">
        <p className="text-sm font-bold text-slate-600">
          {current.kr} = {current.en}
        </p>
        <div className="mt-2">
          <Line kr={current.example} en={current.exampleEn} big />
        </div>
      </div>
    </div>
  )
}

export default function Adverbs() {
  return (
    <Section id="adverbs" icon="🔸" kr="부사" title="Adverbs — when, how often, with whom, and not" tone="emerald" tag="문법 및 표현 4 · 연습 · 워크북 70–71쪽">
      <Card>
        <H3 sub="In this course, adverbs are the small words that tell you when, how often or with whom. They come before the verb.">The idea</H3>
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          <Block role="time" base="어제" gloss="when (yesterday)" size="md" />
          <span className="text-4xl font-black text-slate-400">+</span>
          <Block role="subj" base="저는" gloss="subject" size="md" />
          <span className="text-4xl font-black text-slate-400">+</span>
          <Block role="pred" base="공부했어요" gloss="verb" size="md" />
        </div>
        <Callout kind="tip" title="Adverb first, then the verb">
          <p>
            <span className="font-kr text-lg">저는 <b>어제</b> 공부했어요.</span> · <span className="font-kr text-lg">저는 <b>오늘</b> 친구를 만나요.</span> · <span className="font-kr text-lg">저는 <b>보통</b> 혼자 먹어요.</span>
          </p>
        </Callout>
      </Card>

      <Card>
        <H3 sub="Tap a word to see it in a sentence and hear it.">Words from the book</H3>
        <AdverbGrid />
      </Card>

      <Card>
        <H3 sub="Time words with 에 for a specific time. Use them with the past tense (see 과거 시제).">Time phrases</H3>
        <div className="grid gap-2 sm:grid-cols-2">
          {TIME_PHRASES.map((t) => (
            <div key={t.kr} className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 p-3">
              <div className="min-w-0">
                <span className="font-kr text-2xl text-slate-900">{t.kr}에</span>
                <div className="text-xs font-semibold text-slate-500">{t.en}</div>
              </div>
              <Speak text={t.kr} />
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <H3 sub="안 goes right before the verb. There is a second way too: -지 않다 (below).">안 — not</H3>
        <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
          <Block role="plain" base="안" gloss="not" size="md" />
          <span className="text-4xl font-black text-slate-400">+</span>
          <Block role="pred" base="먹어요" gloss="verb" size="md" />
        </div>
        <div className="space-y-2">
          <Line kr="저는 빵을 안 먹어요." en="I don't eat bread." />
          <Line kr="저는 오늘 친구를 안 만나요. 공부해요." en="I'm not meeting a friend today. I study." />
          <Line kr="아니요, 빵을 안 먹어요." en="No, I don't eat bread." />
          <Line kr="아니요, 물을 안 마셔요." en="No, I'm not drinking water." />
        </div>
        <div className="mt-5 rounded-3xl bg-slate-50 p-4">
          <p className="mb-2 text-sm font-extrabold text-slate-700">Nouns with 하다: noun + 을/를 + 안 + 해요</p>
          <Sentence
            size="md"
            parts={[
              { role: 'obj', base: '숙제', particle: '를', gloss: 'homework' },
              { role: 'pred', base: '안 해요.', gloss: "don't do" },
            ]}
          />
          <div className="mt-3 space-y-2">
            <Line kr="저는 숙제를 안 해요." en="I don't do homework." />
            <Line kr="저는 운동을 안 해요." en="I don't exercise." />
          </div>
        </div>
        <div className="mt-4">
          <Callout kind="warn" title="Don't do this">
            <p>
              The handout crosses out <span className="font-kr text-lg">안 운동하다</span>. Use <span className="font-kr text-lg">운동을 안 해요</span> (noun + 을/를 + 안 + 해요).
            </p>
          </Callout>
        </div>
      </Card>

      <Card>
        <H3 sub="Another way to say not. Put it on the verb stem, then 않아요 (or 않았어요 in the past).">-지 않다 — not (from 문법 및 표현 4)</H3>
        <div className="space-y-2">
          <Line kr="가: 커피를 마셔요?" en="Do you drink coffee?" />
          <Line kr="나: 아니요, 커피를 마시지 않아요." en="No, I don't drink coffee." />
          <Line kr="가: 어제 커피를 마셨어요?" en="Did you drink coffee yesterday?" />
          <Line kr="나: 아니요, 어제 커피를 마시지 않았어요." en="No, I didn't drink coffee yesterday." />
          <Line kr="가: 매일 청소해요?" en="Do you clean every day?" />
          <Line kr="나: 아니요, 매일 청소하지 않아요." en="No, I don't clean every day." />
          <Line kr="가: 어제 바빴어요?" en="Were you busy yesterday?" />
          <Line kr="나: 아니요, 바쁘지 않았어요." en="No, I wasn't busy." />
        </div>
        <p className="mt-3 text-xs text-slate-500">
          Both 안 and -지 않다 mean the same thing in these examples. The book shows both, so learn both.
        </p>
      </Card>

      <Card>
        <H3 sub="Adverbs stay before the verb, whatever the tense.">Adverb + tense</H3>
        <div className="grid gap-2 sm:grid-cols-2">
          <Line kr="지금 빵을 먹어요." en="I'm eating bread now. (present)" />
          <Line kr="어제 빵을 먹었어요." en="I ate bread yesterday. (past)" />
          <Line kr="보통 혼자 먹어요." en="I usually eat alone. (present)" />
          <Line kr="지난 주말에 혼자 먹었어요." en="I ate alone last weekend. (past, extra example)" />
        </div>
      </Card>
    </Section>
  )
}
