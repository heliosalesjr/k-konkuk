import { useState } from 'react'
import { Callout, Card, H3, Line, Section } from '../../components/ui'
import { GapList } from '../drills'
import { CONNECTORS, CONNECTOR_ANSWERS } from '../review'

const TONE = {
  rose: 'bg-rose-50 ring-rose-200 text-rose-900',
  amber: 'bg-amber-50 ring-amber-200 text-amber-900',
  sky: 'bg-sky-50 ring-sky-200 text-sky-900',
  emerald: 'bg-emerald-50 ring-emerald-200 text-emerald-900',
  violet: 'bg-violet-50 ring-violet-200 text-violet-900',
  orange: 'bg-orange-50 ring-orange-200 text-orange-900',
}

// What kind of sentence comes SECOND? That is what decides between -아서 and -(으)니까.
const SECOND = [
  {
    id: 'fact',
    label: '그냥 사실',
    en: 'just a fact',
    ex: '-아요 / -었어요',
    pick: '-아/어서',
    colour: 'bg-rose-600',
    kr: '배가 아파서 못 먹었어요.',
    krEn: "My stomach hurt, so I couldn't eat.",
    note: 'A plain statement follows → -아서 is fine. (-(으)니까 would also be understood, but the exam wants -아서 here.)',
  },
  {
    id: 'request',
    label: '부탁 · 명령',
    en: 'a request',
    ex: '-세요',
    pick: '-(으)니까',
    colour: 'bg-sky-600',
    kr: '추우니까 문을 닫으세요.',
    krEn: "It's cold, so please close the door.",
    note: 'A request follows → it MUST be -(으)니까. 추워서 문을 닫으세요 is wrong.',
  },
  {
    id: 'suggest',
    label: '제안',
    en: 'a suggestion',
    ex: '-(으)ㄹ까요? · -ㅂ시다',
    pick: '-(으)니까',
    colour: 'bg-sky-600',
    kr: '시험이 끝났으니까 영화 보러 갈까요?',
    krEn: 'The exam is over, so shall we go to the cinema?',
    note: 'A suggestion follows → -(으)니까. And notice 끝났으니까: -니까 accepts the past tense.',
  },
]

function Chooser() {
  const [id, setId] = useState('request')
  const s = SECOND.find((x) => x.id === id)
  return (
    <div className="space-y-4">
      <p className="text-center text-sm font-bold text-slate-600">What comes in the SECOND half of the sentence?</p>
      <div className="grid gap-2 sm:grid-cols-3">
        {SECOND.map((x) => (
          <button
            key={x.id}
            type="button"
            onClick={() => setId(x.id)}
            className={`rounded-3xl p-3 text-center shadow-sm transition ${id === x.id ? `${x.colour} text-white` : 'bg-white text-slate-800 hover:bg-yellow-50'}`}
          >
            <p className="font-kr text-2xl">{x.label}</p>
            <p className={`text-xs font-bold ${id === x.id ? 'text-white/80' : 'text-slate-500'}`}>{x.en}</p>
            <p className={`mt-1 font-kr text-base ${id === x.id ? 'text-white' : 'text-slate-500'}`}>{x.ex}</p>
          </button>
        ))}
      </div>
      <div className="animate-pop rounded-3xl bg-gradient-to-br from-yellow-50 to-amber-50 p-5 ring-2 ring-amber-200">
        <p className="text-center text-xs font-extrabold uppercase tracking-wide text-amber-700">so you use</p>
        <p className="text-center font-kr text-5xl text-slate-900">{s.pick}</p>
        <div className="mt-3">
          <Line kr={s.kr} en={s.krEn} big />
        </div>
        <p className="mt-3 rounded-2xl bg-white/80 p-3 text-sm leading-relaxed text-slate-700">{s.note}</p>
      </div>
    </div>
  )
}

export default function Connectors() {
  return (
    <Section id="connectors" icon="🔗" kr="연결어미" title="Joining two sentences" tone="sky" tag="총복습 59–64 · page 8">
      <Card>
        <H3 sub="A connector glues two halves together. The exam almost always tests the same pair: -아서 against -(으)니까.">The six connectors</H3>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {CONNECTORS.map((c, i) => (
            <div key={`${c.kr}-${i}`} className={`rounded-3xl p-4 ring-2 ${TONE[c.tone]}`}>
              <p className="font-kr text-2xl">{c.kr}</p>
              <p className="text-xs font-extrabold uppercase tracking-wide opacity-75">{c.use}</p>
              <p className="mt-1.5 font-kr text-xl text-slate-900">{c.ex}</p>
              <p className="text-xs font-semibold text-slate-500">{c.exEn}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <H3 sub="There is one question that settles it every time, and it is not about the first half of the sentence.">🏆 The golden rule</H3>
        <div className="rounded-3xl bg-slate-900 p-5 text-center">
          <p className="text-sm font-extrabold uppercase tracking-widest text-slate-400">if the second half is a request or a suggestion</p>
          <p className="mt-2 font-kr text-5xl text-white sm:text-6xl">-(으)니까</p>
          <p className="mt-2 text-sm font-bold text-slate-300">
            never <span className="font-kr text-lg line-through decoration-rose-400 decoration-2">-아서</span>
          </p>
        </div>
        <div className="mt-4">
          <Chooser />
        </div>
      </Card>

      <Card>
        <H3 sub="A second difference between the two, and the one people forget in the exam.">⏪ Only -(으)니까 takes the past tense</H3>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-3xl bg-rose-50 p-4 ring-2 ring-rose-200">
            <p className="font-kr text-2xl text-rose-900">-아/어서</p>
            <p className="mt-2 text-sm font-bold text-slate-700">No tense marker before it, ever.</p>
            <p className="mt-2 font-kr text-xl text-slate-900">시험이 끝나서 기분이 좋아요. ✅</p>
            <p className="font-kr text-xl text-slate-400 line-through decoration-rose-500">시험이 끝났어서…</p>
          </div>
          <div className="rounded-3xl bg-sky-50 p-4 ring-2 ring-sky-200">
            <p className="font-kr text-2xl text-sky-900">-(으)니까</p>
            <p className="mt-2 text-sm font-bold text-slate-700">The past is allowed.</p>
            <p className="mt-2 font-kr text-xl text-slate-900">시험이 끝났으니까 갈까요? ✅</p>
            <p className="font-kr text-xl text-slate-900">추우니까 닫으세요. ✅</p>
          </div>
        </div>
      </Card>

      <Card>
        <H3 sub="-아서 has a second job that has nothing to do with reasons: two actions one after the other, in the same place.">
          The other -아/어서 · sequence
        </H3>
        <div className="space-y-2">
          <Line kr="저는 도서관에 가서 공부해요." en="I go to the library and study there." />
          <Line kr="집에 가서 손을 씻어요." en="I go home and wash my hands." />
          <Line kr="백화점에 가서 운동화랑 치마를 샀어요." en="I went to the department store and bought trainers and a skirt." />
        </div>
        <div className="mt-3">
          <Callout kind="tip" title="How to tell the two apart">
            <p>
              If the first half is a <b>reason</b> (배가 아파서) it is the "because" one. If it is a <b>place you moved to</b> (도서관에 가서) it is the sequence
              one — "and there".
            </p>
          </Callout>
        </div>
      </Card>

      <Card>
        <H3 sub="Questions 59–64 of the review. The other speaker's line is shown first, because that is where the clue is.">
          From the exam · fill the gap
        </H3>
        <div className="space-y-3">
          {CONNECTOR_ANSWERS.map((c) => (
            <div key={c.n} className="rounded-3xl bg-slate-50 p-4">
              {c.q && (
                <div className="mb-2">
                  <Line kr={`가: ${c.q}`} en={c.qEn} />
                </div>
              )}
              <GapList items={[{ n: c.n, kr: c.q ? `나: ${c.kr}` : c.kr, en: c.en, why: c.why }]} />
            </div>
          ))}
        </div>
      </Card>
    </Section>
  )
}
