import { useState } from 'react'
import { Block, Callout, Card, H3, Section, Speak } from '../../components/ui'
import { GapList } from '../drills'
import { MODIFIERS, MODIFIER_ANSWERS, MODIFIER_PRACTICE } from '../review'

const NOUNS = [
  { kr: '음식', en: 'food' },
  { kr: '방', en: 'room' },
  { kr: '친구', en: 'friend' },
  { kr: '머리', en: 'hair' },
  { kr: '옷', en: 'clothes' },
  { kr: '식당', en: 'restaurant' },
]

const RULE_TONE = {
  'no 받침': 'bg-sky-100 text-sky-900',
  'with 받침': 'bg-emerald-100 text-emerald-900',
  'ㄹ stem': 'bg-violet-100 text-violet-900',
  'ㅂ irregular': 'bg-rose-100 text-rose-900',
  '있다 / 없다': 'bg-amber-100 text-amber-900',
  하다: 'bg-orange-100 text-orange-900',
}

// Pick an adjective and a noun; the adjective changes shape in front of the noun.
function ModifierBuilder() {
  const [adj, setAdj] = useState(MODIFIER_PRACTICE[4])
  const [noun, setNoun] = useState(NOUNS[0])
  const phrase = `${adj.mod} ${noun.kr}`

  return (
    <div className="space-y-4">
      <div>
        <p className="mb-1.5 text-xs font-extrabold uppercase tracking-wide text-slate-500">1 · the adjective</p>
        <div className="flex flex-wrap gap-1.5">
          {MODIFIER_PRACTICE.map((a) => (
            <button
              key={a.base}
              type="button"
              onClick={() => setAdj(a)}
              className={`rounded-full px-3 py-1 font-kr text-lg shadow-sm transition ${a.base === adj.base ? 'bg-slate-900 text-white' : 'bg-white text-slate-700 hover:bg-yellow-100'}`}
            >
              {a.base}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-1.5 text-xs font-extrabold uppercase tracking-wide text-slate-500">2 · the noun</p>
        <div className="flex flex-wrap gap-1.5">
          {NOUNS.map((nn) => (
            <button
              key={nn.kr}
              type="button"
              onClick={() => setNoun(nn)}
              className={`rounded-full px-3 py-1 font-kr text-lg shadow-sm transition ${nn.kr === noun.kr ? 'bg-violet-600 text-white' : 'bg-white text-slate-700 hover:bg-yellow-100'}`}
            >
              {nn.kr}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-3xl bg-gradient-to-br from-rose-50 to-amber-50 p-5 ring-2 ring-rose-200">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <Block role="plain" base={adj.base} gloss={adj.en} size="md" />
          <span className="text-3xl font-black text-slate-400">→</span>
          <Block role="info" base={adj.mod} gloss="modifier form" size="md" />
          <span className="text-3xl font-black text-slate-400">+</span>
          <Block role="obj" base={noun.kr} gloss={noun.en} size="md" />
        </div>
        <div className="mt-4 flex items-center justify-center gap-3">
          <p className="font-kr text-3xl text-slate-900 sm:text-5xl">{phrase}</p>
          <Speak text={phrase} />
        </div>
        <p className="mt-2 text-center">
          <span className={`rounded-full px-3 py-1 font-kr text-base ${RULE_TONE[adj.rule]}`}>{adj.rule}</span>
        </p>
      </div>
    </div>
  )
}

export default function Modifier() {
  return (
    <Section id="modifier" icon="🎨" kr="관형형" title="Putting an adjective in front of a noun" tone="violet" tag="총복습 40–46 · page 5">
      <Card>
        <H3 sub="An adjective used on its own ends in -아/어요. The moment you put it in FRONT of a noun it changes shape.">Two different jobs</H3>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-3xl bg-slate-50 p-4">
            <p className="text-xs font-extrabold uppercase tracking-wide text-slate-500">after the noun — describing</p>
            <p className="mt-1 font-kr text-3xl text-slate-900">음식이 매워요.</p>
            <p className="text-sm font-semibold text-slate-600">The food is spicy.</p>
          </div>
          <div className="rounded-3xl bg-violet-50 p-4 ring-2 ring-violet-200">
            <p className="text-xs font-extrabold uppercase tracking-wide text-violet-700">before the noun — modifying</p>
            <p className="mt-1 font-kr text-3xl text-violet-950">매운 음식</p>
            <p className="text-sm font-semibold text-slate-600">spicy food</p>
          </div>
        </div>
      </Card>

      <Card>
        <H3 sub="Six rules cover every adjective in the course. The last two are the ones people forget.">The six rules</H3>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {MODIFIERS.map((m) => (
            <div key={m.rule} className={`rounded-3xl p-4 ring-2 ${RULE_TONE[m.rule].replace('text-', 'ring-').replace('100', '200')} ${RULE_TONE[m.rule]}`}>
              <p className="text-sm font-extrabold uppercase tracking-wide opacity-80">{m.rule}</p>
              <p className="mt-0.5 font-kr text-2xl">{m.end}</p>
              <p className="mt-1.5 font-kr text-2xl text-slate-900">
                {m.ex[0]} <span className="font-black text-slate-400">→</span> {m.ex[1]}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <Callout kind="warn" title="있다 / 없다 words take -는, never -은">
            <p>
              <span className="font-kr text-lg line-through decoration-rose-500 decoration-2">맛없은 음식</span> →{' '}
              <span className="font-kr text-lg">맛없는 음식</span>
            </p>
            <p className="mt-1 text-xs">Also 재미있는, 맛있는, 멋있는, 재미없는.</p>
          </Callout>
          <Callout kind="tip" title="하다 adjectives take -한">
            <p>
              <span className="font-kr text-lg">깨끗하다 → 깨끗한 방</span> · <span className="font-kr text-lg">친절하다 → 친절한 친구</span>
            </p>
          </Callout>
        </div>
      </Card>

      <Card>
        <H3 sub="Pick any adjective and any noun. Watch which rule fires.">🎛️ Build a noun phrase</H3>
        <ModifierBuilder />
      </Card>

      <Card>
        <H3 sub="When two adjectives describe the same noun, -고 joins them — and only the LAST one takes the modifier form.">
          Two adjectives, one noun
        </H3>
        <div className="space-y-3">
          <div className="rounded-3xl bg-slate-50 p-4">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <Block role="info" base="싸고" gloss="cheap AND… (-고)" size="md" />
              <Block role="info" base="맛있는" gloss="tasty (modifier form)" size="md" />
              <Block role="obj" base="식당" gloss="restaurant" size="md" />
            </div>
            <p className="mt-3 text-center font-kr text-3xl text-slate-900">학교 근처에 싸고 맛있는 식당이 있습니까?</p>
            <p className="text-center text-sm font-semibold text-slate-600">Is there a cheap and tasty restaurant near the school?</p>
          </div>
          <Callout kind="rule" title="Only the last one changes">
            <p>
              <span className="font-kr text-lg">친절하고 재미있는 친구</span> — 친절하다 just takes -고, and only 재미있다 becomes 재미있는. Never{' '}
              <span className="font-kr text-lg line-through decoration-rose-500">친절한고</span>.
            </p>
          </Callout>
        </div>
      </Card>

      <Card>
        <H3 sub="Questions 40–46 of the review. The dictionary form is listed first, so you can work it out yourself.">From the exam · fill the gap</H3>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {MODIFIER_ANSWERS.map((a) => (
            <span key={a.n} className="rounded-full bg-white px-2.5 py-1 text-xs font-bold text-slate-600 shadow-sm">
              {a.n}. <span className="font-kr text-base">{a.base}</span>
            </span>
          ))}
        </div>
        <GapList items={MODIFIER_ANSWERS} />
      </Card>
    </Section>
  )
}
