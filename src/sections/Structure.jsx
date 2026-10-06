import { useState } from 'react'
import { Block, Callout, Card, H3, Line, ROLES, RoleTag, Section, Sentence, Speak } from '../components/ui'
import OrderPuzzle from '../components/OrderPuzzle'
import { ORDER_SENTENCES } from '../data/content'

// English vs Korean, with the same colours so you can SEE the words move.
function GrowingSentence() {
  const [time, setTime] = useState(false)
  const [place, setPlace] = useState(false)

  const korean = [
    { role: 'subj', base: '다니엘', particle: '이', gloss: 'Daniel' },
    ...(time ? [{ role: 'time', base: '주말', particle: '에', gloss: 'on the weekend' }] : []),
    ...(place ? [{ role: 'place', base: '집', particle: '에서', gloss: 'at home' }] : []),
    { role: 'obj', base: '밥', particle: '을', gloss: 'a meal' },
    { role: 'pred', base: '먹어요', gloss: 'eats' },
  ]
  const english = [
    { role: 'subj', base: 'Daniel' },
    { role: 'pred', base: 'eats' },
    { role: 'obj', base: 'a meal' },
    ...(place ? [{ role: 'place', base: 'at home' }] : []),
    ...(time ? [{ role: 'time', base: 'on the weekend' }] : []),
  ]
  const kr = korean.map((p) => p.base + (p.particle || '')).join(' ')
  const toggle = 'rounded-full px-4 py-2 text-sm font-extrabold shadow-sm transition active:scale-95 sm:text-base'

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap justify-center gap-2">
        <button type="button" onClick={() => setPlace(!place)} className={`${toggle} ${place ? 'bg-amber-500 text-white' : 'bg-white text-amber-800 ring-2 ring-amber-300'}`}>
          {place ? '✓' : '+'} Add a place
        </button>
        <button type="button" onClick={() => setTime(!time)} className={`${toggle} ${time ? 'bg-sky-500 text-white' : 'bg-white text-sky-800 ring-2 ring-sky-300'}`}>
          {time ? '✓' : '+'} Add a time
        </button>
      </div>

      <div className="rounded-3xl bg-slate-50 p-4">
        <p className="mb-3 text-center text-sm font-extrabold uppercase tracking-wide text-slate-500">🇺🇸 English</p>
        <Sentence parts={english} size="sm" />
      </div>

      <div className="text-center text-4xl text-slate-300">⬇</div>

      <div className="rounded-3xl bg-yellow-50 p-4 ring-2 ring-yellow-200">
        <p className="mb-3 text-center text-sm font-extrabold uppercase tracking-wide text-slate-600">🇰🇷 Korean</p>
        <Sentence parts={korean} size="lg" />
        <div className="mt-4 flex items-center justify-center gap-3">
          <Speak text={kr} />
          <span className="font-kr text-2xl text-slate-800 sm:text-3xl">{kr}.</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-bold text-slate-700">
        <RoleTag role="subj" />
        <span>→</span>
        <span className={time ? '' : 'opacity-30'}>
          <RoleTag role="time" />
        </span>
        <span>→</span>
        <span className={place ? '' : 'opacity-30'}>
          <RoleTag role="place" />
        </span>
        <span>→</span>
        <RoleTag role="obj" />
        <span>→</span>
        <RoleTag role="pred" />
        <span className="rounded-full bg-violet-600 px-2 py-0.5 text-xs text-white">🔒 always last</span>
      </div>
    </div>
  )
}

const PARTICLES = [
  { p: '이 / 가', role: 'subj', en: 'subject marker', ex: { base: '밍', particle: '이' }, exEn: 'Ming (does something)' },
  { p: '은 / 는', role: 'subj', en: 'topic marker — “as for …”', ex: { base: '알리', particle: '는' }, exEn: 'As for Ali…' },
  { p: '을 / 를', role: 'obj', en: 'object marker', ex: { base: '사과', particle: '를' }, exEn: 'the apple (receives the action)' },
  { p: '에', role: 'time', en: 'time · destination', ex: { base: '주말', particle: '에' }, exEn: 'on the weekend  ·  학교에 = to school' },
  { p: '에서', role: 'place', en: 'place where you do something', ex: { base: '집', particle: '에서' }, exEn: 'at home' },
]

export default function Structure() {
  const [idx, setIdx] = useState(0)
  const current = ORDER_SENTENCES[idx]

  return (
    <Section id="structure" icon="🧱" kr="문장의 기본 구조" title="Basic structure of a Korean sentence" tone="amber" tag="한국어 문장의 기본 구조 · pp. 92–93">
      <Card>
        <H3 sub="English puts the verb in the middle. Korean puts it at the very end.">1 · Watch the words move</H3>
        <GrowingSentence />
        <div className="mt-5">
          <Callout kind="rule" title="The golden rule">
            <p>
              In Korean the <b>verb (서술어) always comes last</b>. The other pieces are built in front of it. For now we follow the book&apos;s order:{' '}
              <b>Subject → Time → Place → Object → Verb</b>.
            </p>
          </Callout>
        </div>
      </Card>

      <Card>
        <H3 sub="Every sentence needs a subject (주어) and a predicate (서술어).">2 · Pattern A: Subject + Predicate</H3>
        <div className="space-y-6">
          {[
            { s: { base: '건우', particle: '가', gloss: 'Geonu' }, p: { base: '자요', gloss: 'sleeps' }, en: 'Geonu sleeps.', kind: 'Verb (동사)' },
            { s: { base: '하루나', particle: '가', gloss: 'Haruna' }, p: { base: '예뻐요', gloss: 'is pretty' }, en: 'Haruna is pretty.', kind: 'Adjective (형용사)' },
            { s: { base: '루카스', particle: '는', gloss: 'Lucas' }, p: { base: '학생', particle: '이에요', gloss: 'is a student' }, en: 'Lucas is a student.', kind: 'Noun + 이다 (to be)' },
          ].map((row) => (
            <div key={row.en} className="rounded-3xl bg-slate-50 p-4">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <span className={`rounded-full px-3 py-1 text-xs font-extrabold bg-violet-100 text-violet-900`}>Predicate = {row.kind}</span>
                <Speak text={row.s.base + row.s.particle + ' ' + row.p.base + (row.p.particle || '')} />
              </div>
              <Sentence
                parts={[
                  { role: 'subj', ...row.s },
                  { role: 'pred', ...row.p },
                ]}
                tags
              />
              <p className="mt-3 text-center text-sm font-semibold text-slate-600">“{row.en}”</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-600">
          The subject is a noun + <b>이/가</b> or <b>은/는</b>. The predicate can be a verb, an adjective, or a noun + <span className="font-kr text-base">이다</span> (“to be”) — that last one is what we use to say who we are!
        </p>
      </Card>

      <Card>
        <H3 sub="Some verbs need something to act on: an object (목적어), marked by 을/를.">3 · Pattern B: Subject + Object + Predicate</H3>
        <div className="flex flex-wrap items-end justify-center gap-4 sm:gap-8">
          {[
            { icon: '👦', role: 'subj', base: '밍', particle: '이', gloss: 'Ming' },
            { icon: '🍎', role: 'obj', base: '사과', particle: '를', gloss: 'an apple' },
            { icon: '😋', role: 'pred', base: '먹어요', gloss: 'eats' },
          ].map(({ icon, ...b }, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="text-6xl sm:text-7xl">{icon}</div>
              <Block {...b} tag />
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <Line kr="밍이 사과를 먹어요." en="Ming eats an apple." />
        </div>
      </Card>

      <Card>
        <H3 sub="Tiny words glued to the end of nouns. They tell you the job of each word.">4 · Particles (조사) — the labels</H3>
        <div className="mb-5 flex flex-wrap justify-center gap-3">
          <Line kr="밍이 사과를 먹어요." en="Ming eats an apple." />
          <Line kr="알리는 학교에 가요." en="Ali goes to school." />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {PARTICLES.map((row) => (
            <div key={row.p} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
              <div className={`min-w-[5.5rem] rounded-xl border-2 bg-white py-1.5 text-center font-kr text-2xl ${ROLES[row.role].box}`}>{row.p}</div>
              <div className="min-w-0">
                <div className="text-sm font-extrabold text-slate-800">{row.en}</div>
                <div className="text-sm text-slate-600">
                  <span className="font-kr text-lg text-slate-900">
                    {row.ex.base}
                    <b className={ROLES[row.role].mark}>{row.ex.particle}</b>
                  </span>{' '}
                  · {row.exEn}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <H3 sub="Korean uses spaces between words. Missing or wrong spaces can change the whole meaning!">5 · Spacing (띄어쓰기) matters</H3>
        <p className="mb-4 text-center font-kr text-3xl text-slate-500 sm:text-4xl">아버지가방에들어가신다</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-orange-50 p-4 text-center ring-2 ring-orange-200">
            <div className="text-6xl">🧳</div>
            <p className="mt-2 font-kr text-2xl text-slate-900 sm:text-3xl">아버지 가방에 들어가신다.</p>
            <p className="mt-1 text-sm font-bold text-slate-700">Father goes INTO THE BAG. 😱</p>
            <Speak text="아버지 가방에 들어가신다" className="mt-2" />
          </div>
          <div className="rounded-3xl bg-emerald-50 p-4 text-center ring-2 ring-emerald-200">
            <div className="text-6xl">🚪</div>
            <p className="mt-2 font-kr text-2xl text-slate-900 sm:text-3xl">아버지가 방에 들어가신다.</p>
            <p className="mt-1 text-sm font-bold text-slate-700">Father goes INTO THE ROOM. 😌</p>
            <Speak text="아버지가 방에 들어가신다" className="mt-2" />
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-600">
          Same letters, different spaces: <span className="font-kr text-base">아버지 가방에</span> (father, bag) vs <span className="font-kr text-base">아버지가 방에</span> (father<b>가</b>, room). A particle always stays glued to its noun, and the space comes <b>after</b> it.
        </p>
      </Card>

      <Card className="bg-gradient-to-br from-yellow-50 to-rose-50">
        <H3 sub="Tap the words in the correct order. Colours appear when you get it right!">6 · Your turn: build the sentence</H3>
        <OrderPuzzle key={idx} parts={current.parts} en={current.en} />
        <div className="mt-5 flex items-center justify-center gap-3">
          <button type="button" onClick={() => setIdx((idx + ORDER_SENTENCES.length - 1) % ORDER_SENTENCES.length)} className="rounded-full bg-white px-4 py-1.5 font-bold text-slate-700 shadow hover:bg-slate-100">
            ← Back
          </button>
          <span className="text-sm font-bold text-slate-500">
            {idx + 1} / {ORDER_SENTENCES.length}
          </span>
          <button type="button" onClick={() => setIdx((idx + 1) % ORDER_SENTENCES.length)} className="rounded-full bg-amber-400 px-4 py-1.5 font-bold text-slate-900 shadow hover:bg-amber-500">
            Next sentence →
          </button>
        </div>
      </Card>
    </Section>
  )
}
