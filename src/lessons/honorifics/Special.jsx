import { useState } from 'react'
import { Callout, Card, H3, Section, Speak } from '../../components/ui'
import { HUMBLE, SPECIAL_HON } from '../verbs40'

// The same verb, pointing in two directions: the respected person acts, or I act towards them.
const DIRECTIONS = [
  {
    verb: '주다',
    en: 'to give',
    up: ['선생님께서 책을 주셨어요.', 'The teacher gave me a book.'],
    down: ['어머니께 선물을 드렸어요.', 'I gave my mother a present.'],
    word: '드리다',
  },
  {
    verb: '말하다',
    en: 'to say, to speak',
    up: ['선생님께서 말씀하셨어요.', 'The teacher spoke.'],
    down: ['선생님께 말씀드렸어요.', 'I spoke to the teacher.'],
    word: '말씀드리다',
  },
  {
    verb: '물어보다',
    en: 'to ask',
    up: ['선생님께서 제 이름을 물어보셨어요.', 'The teacher asked my name.'],
    down: ['선생님께 여쭤봤어요.', 'I asked the teacher.'],
    word: '여쭤보다',
  },
  {
    verb: '만나다',
    en: 'to meet',
    up: ['선생님께서 학생들을 만나셨어요.', 'The teacher met the students.'],
    down: ['선생님을 뵈었어요.', 'I met the teacher.'],
    word: '뵙다',
  },
  {
    verb: '전화하다',
    en: 'to call',
    up: ['어머니께서 저에게 전화하셨어요.', 'My mother called me.'],
    down: ['할머니께 전화드렸어요.', 'I called my grandmother.'],
    word: '전화드리다',
  },
]

function Direction() {
  const [who, setWho] = useState('up')
  const up = who === 'up'
  return (
    <div className="space-y-4">
      <div className="grid gap-2 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => setWho('up')}
          className={`rounded-3xl p-4 text-left shadow-sm transition ${up ? 'bg-rose-600 text-white' : 'bg-white text-slate-800 hover:bg-yellow-50'}`}
        >
          <div className="text-3xl">👑</div>
          <p className="mt-1 font-kr text-2xl">그분이 하세요</p>
          <p className={`text-sm font-bold ${up ? 'text-rose-100' : 'text-slate-600'}`}>The respected person DOES the action</p>
          <p className={`mt-1 font-kr text-lg ${up ? 'text-white' : 'text-rose-700'}`}>께서 + -(으)시-</p>
        </button>
        <button
          type="button"
          onClick={() => setWho('down')}
          className={`rounded-3xl p-4 text-left shadow-sm transition ${!up ? 'bg-emerald-600 text-white' : 'bg-white text-slate-800 hover:bg-yellow-50'}`}
        >
          <div className="text-3xl">🙏</div>
          <p className="mt-1 font-kr text-2xl">제가 해요</p>
          <p className={`text-sm font-bold ${!up ? 'text-emerald-100' : 'text-slate-600'}`}>I do it, they RECEIVE the action</p>
          <p className={`mt-1 font-kr text-lg ${!up ? 'text-white' : 'text-emerald-700'}`}>께 + humble verb</p>
        </button>
      </div>

      <div className="space-y-2">
        {DIRECTIONS.map((d) => {
          const [kr, en] = up ? d.up : d.down
          return (
            <div key={d.verb} className={`animate-pop rounded-2xl p-3 ring-1 ${up ? 'bg-rose-50 ring-rose-200' : 'bg-emerald-50 ring-emerald-200'}`}>
              <div className="flex items-center gap-2">
                <span className="rounded-lg bg-white px-2 py-0.5 font-kr text-lg text-slate-700 shadow-sm">{d.verb}</span>
                <span className="text-xs font-bold text-slate-500">{d.en}</span>
                {!up && <span className="ml-auto rounded-full bg-emerald-600 px-2 py-0.5 font-kr text-sm text-white">{d.word}</span>}
              </div>
              <div className="mt-1.5 flex items-start gap-2">
                <Speak text={kr} />
                <div className="min-w-0">
                  <p className="font-kr text-2xl leading-snug text-slate-900 sm:text-3xl">{kr}</p>
                  <p className="text-sm font-semibold text-slate-600">{en}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function Special() {
  return (
    <Section id="special" icon="⭐" kr="특별한 동사" title="Verbs that change their word completely" tone="orange" tag="40 verbos · pages 7–8">
      <Card>
        <H3 sub="Four verbs do not take -(으)시-. They become a different word altogether. These are the ones the exam always asks about.">
          Honorific words · the respected person acts
        </H3>
        <div className="grid gap-2 sm:grid-cols-2">
          {SPECIAL_HON.map((s) => (
            <div key={s.plain} className="rounded-3xl bg-rose-50 p-4 ring-1 ring-rose-200">
              <div className="flex items-center gap-2">
                <span className="font-kr text-xl text-slate-600">{s.plain}</span>
                <span className="text-xl font-black text-slate-300">→</span>
                <span className="font-kr text-3xl text-rose-900">{s.hon}</span>
              </div>
              <div className="mt-2 flex items-start gap-2">
                <Speak text={s.ex} />
                <div className="min-w-0">
                  <p className="font-kr text-xl leading-snug text-slate-900">{s.ex}</p>
                  <p className="text-xs font-semibold text-slate-500">{s.en}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Callout kind="note" title="계시다 only means &quot;to be in a place&quot;">
            <p>
              <span className="font-kr text-lg">어머니께서 집에 계세요.</span> ✅ (she IS at home) · For possession you keep 있다:{' '}
              <span className="font-kr text-lg">시간이 있으세요?</span> (do you have time?)
            </p>
          </Callout>
        </div>
      </Card>

      <Card>
        <H3 sub="The mirror image: when I am the one acting and the respected person is on the receiving end, I lower MYSELF instead of raising them.">
          Humble words · I act towards them
        </H3>
        <div className="grid gap-2 sm:grid-cols-2">
          {HUMBLE.map((h) => (
            <div key={h.plain} className="rounded-3xl bg-emerald-50 p-4 ring-1 ring-emerald-200">
              <div className="flex items-center gap-2">
                <span className="font-kr text-xl text-slate-600">{h.plain}</span>
                <span className="text-xl font-black text-slate-300">→</span>
                <span className="font-kr text-3xl text-emerald-900">{h.hum}</span>
              </div>
              <div className="mt-2 flex items-start gap-2">
                <Speak text={h.ex} />
                <div className="min-w-0">
                  <p className="font-kr text-xl leading-snug text-slate-900">{h.ex}</p>
                  <p className="text-xs font-semibold text-slate-500">{h.en}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Callout kind="rule" title="With a humble verb, 에게 becomes 께">
            <p>
              <span className="font-kr text-lg">친구<span className="text-blue-700">에게</span> 줬어요</span> → <span className="font-kr text-lg">어머니<span className="text-blue-700">께</span> 드렸어요</span>. The particle moves
              to the respected person, because they are the one receiving.
            </p>
          </Callout>
        </div>
      </Card>

      <Card>
        <H3 sub="Switch the direction and watch the same five verbs change shape. This is the whole chapter in one button.">🎛️ Which direction?</H3>
        <Direction />
      </Card>

      <Card>
        <H3 sub="The handout's own exam tip, on the last page.">🏁 How to answer in the exam</H3>
        <div className="space-y-3">
          <div className="flex gap-3 rounded-3xl bg-slate-50 p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-black text-white">1</div>
            <p className="text-sm leading-relaxed text-slate-800 sm:text-base">
              <b>Find the subject first.</b> Who is doing the action in this sentence?
            </p>
          </div>
          <div className="flex gap-3 rounded-3xl bg-rose-50 p-4 ring-1 ring-rose-200">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-600 text-sm font-black text-white">2</div>
            <p className="text-sm leading-relaxed text-slate-800 sm:text-base">
              If it is <b>someone you respect</b> → <span className="font-kr text-lg">께서</span> + <span className="font-kr text-lg">-(으)시-</span>, and swap the
              verb if it has a special word (드시다, 주무시다, 계시다, 말씀하시다).
            </p>
          </div>
          <div className="flex gap-3 rounded-3xl bg-emerald-50 p-4 ring-1 ring-emerald-200">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-black text-white">3</div>
            <p className="text-sm leading-relaxed text-slate-800 sm:text-base">
              If it is <b>you</b>, and they only receive the action → <span className="font-kr text-lg">께</span> + a humble verb (드리다, 여쭤보다, 말씀드리다).
            </p>
          </div>
          <div className="flex gap-3 rounded-3xl bg-amber-50 p-4 ring-1 ring-amber-200">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-600 text-sm font-black text-white">4</div>
            <p className="text-sm leading-relaxed text-slate-800 sm:text-base">
              If the subject is a <b>thing</b> (수업, 시험, 방학) → no honorific at all. <span className="font-kr text-lg">수업이 한 시에 끝납니다.</span>
            </p>
          </div>
        </div>
      </Card>
    </Section>
  )
}
