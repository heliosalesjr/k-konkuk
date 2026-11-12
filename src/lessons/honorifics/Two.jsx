import { useState } from 'react'
import { Block, Callout, Card, H3, Line, Section, Speak } from '../../components/ui'
import { FORM_GRID } from '../verbs40'

// Two dials, four results. Pick who the subject is and how formal you are being.
const SUBJECTS = [
  { id: 'me', kr: '저는', en: 'I (no respect needed — it is me)', hon: false },
  { id: 'dad', kr: '아버지께서', en: 'my father (someone I respect)', hon: true },
]
const STYLES = [
  { id: 'yo', kr: '-요', en: 'polite (everyday talk)' },
  { id: 'nida', kr: '-습니다', en: 'formal (presentation, exam, announcement)' },
]

const MATRIX = {
  'me-yo': { kr: '저는 학교에 가요.', en: 'I go to school.', note: 'Everyday polite. No -시- anywhere, because the subject is me.' },
  'me-nida': { kr: '저는 학교에 갑니다.', en: 'I go to school.', note: 'Formal. Still no -시-: you never honour yourself.' },
  'dad-yo': { kr: '아버지께서 학교에 가세요.', en: 'My father goes to school.', note: '께서 for the subject + -세요 on the verb. Polite style.' },
  'dad-nida': { kr: '아버지께서 학교에 가십니다.', en: 'My father goes to school.', note: 'Both at once: honorific -시- AND formal -ㅂ니다 → 가십니다.' },
}

function Matrix() {
  const [subj, setSubj] = useState('me')
  const [style, setStyle] = useState('yo')
  const out = MATRIX[`${subj}-${style}`]
  const honOn = SUBJECTS.find((s) => s.id === subj).hon

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl bg-rose-50 p-4 ring-2 ring-rose-200">
          <p className="text-xs font-extrabold uppercase tracking-wide text-rose-700">1 · who is the subject?</p>
          <div className="mt-2 space-y-2">
            {SUBJECTS.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSubj(s.id)}
                className={`w-full rounded-2xl px-3 py-2 text-left shadow-sm transition ${subj === s.id ? 'bg-rose-600 text-white' : 'bg-white text-slate-800 hover:bg-yellow-100'}`}
              >
                <span className="font-kr text-2xl">{s.kr}</span>
                <span className="ml-2 text-xs font-bold opacity-80">{s.en}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-3xl bg-sky-50 p-4 ring-2 ring-sky-200">
          <p className="text-xs font-extrabold uppercase tracking-wide text-sky-700">2 · how formal are you being?</p>
          <div className="mt-2 space-y-2">
            {STYLES.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setStyle(s.id)}
                className={`w-full rounded-2xl px-3 py-2 text-left shadow-sm transition ${style === s.id ? 'bg-sky-600 text-white' : 'bg-white text-slate-800 hover:bg-yellow-100'}`}
              >
                <span className="font-kr text-2xl">{s.kr}</span>
                <span className="ml-2 text-xs font-bold opacity-80">{s.en}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="animate-pop rounded-3xl bg-gradient-to-br from-violet-50 to-fuchsia-50 p-5 ring-2 ring-violet-200">
        <div className="flex items-center justify-center gap-3">
          <Speak text={out.kr} />
          <p className="font-kr text-3xl leading-snug text-slate-900 sm:text-5xl">{out.kr}</p>
        </div>
        <p className="mt-1 text-center text-sm font-semibold text-slate-600">{out.en}</p>
        <p className="mt-3 rounded-2xl bg-white/80 p-3 text-center text-sm leading-relaxed text-slate-700">{out.note}</p>
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          <span className={`rounded-full px-3 py-1 text-xs font-extrabold ${honOn ? 'bg-rose-600 text-white' : 'bg-white text-slate-400'}`}>
            존댓말 honorific {honOn ? 'ON' : 'OFF'}
          </span>
          <span className={`rounded-full px-3 py-1 text-xs font-extrabold ${style === 'nida' ? 'bg-sky-600 text-white' : 'bg-white text-slate-400'}`}>
            -습니다 formal {style === 'nida' ? 'ON' : 'OFF'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Two() {
  return (
    <Section id="two" icon="🤝" kr="두 가지" title="Formal and honorific are NOT the same thing" tone="violet" tag="40 verbos · page 7">
      <Card>
        <H3 sub="This is the one idea that makes the whole chapter easy. They are two separate switches, and you can turn each one on or off independently.">
          Two switches
        </H3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-sky-50 p-5 ring-2 ring-sky-200">
            <div className="text-4xl">📢</div>
            <p className="mt-1 font-kr text-3xl text-sky-950">-습니다</p>
            <p className="text-sm font-extrabold uppercase tracking-wide text-sky-700">formal style</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Changes the <b>tone of your voice</b> — it depends on <b>who you are speaking TO</b>. Use it in a presentation, in the exam, in a public
              announcement.
            </p>
            <p className="mt-2 font-kr text-xl text-sky-900">저는 학생입니다.</p>
          </div>
          <div className="rounded-3xl bg-rose-50 p-5 ring-2 ring-rose-200">
            <div className="text-4xl">👑</div>
            <p className="mt-1 font-kr text-3xl text-rose-950">-(으)시-</p>
            <p className="text-sm font-extrabold uppercase tracking-wide text-rose-700">honorific</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Shows <b>respect for the person you are speaking ABOUT</b> — your parents, grandparents, your teacher. Nothing to do with how formal you
              sound.
            </p>
            <p className="mt-2 font-kr text-xl text-rose-900">아버지께서 가세요.</p>
          </div>
        </div>
        <div className="mt-4">
          <Callout kind="warn" title="The rule you must never break">
            <p>
              <b>Never use an honorific about yourself.</b> <span className="font-kr text-lg">저는 빵을 드셨어요</span> is wrong — it is{' '}
              <span className="font-kr text-lg">저는 빵을 먹었어요</span>. You can be as formal as you like about yourself, but you can never honour yourself.
            </p>
          </Callout>
        </div>
      </Card>

      <Card>
        <H3 sub="Turn each switch on and off and watch the same sentence change.">🎛️ Try both switches</H3>
        <Matrix />
      </Card>

      <Card>
        <H3 sub="The five shapes you need. The last row is both switches on at the same time.">All the shapes in one table</H3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[32rem] border-separate border-spacing-y-2 text-left">
            <thead>
              <tr className="text-xs font-extrabold uppercase tracking-wide text-slate-500">
                <th className="p-2">Shape</th>
                <th className="p-2 text-center text-violet-700">현재</th>
                <th className="p-2 text-center text-rose-700">과거</th>
                <th className="p-2 text-center text-sky-700">미래</th>
              </tr>
            </thead>
            <tbody>
              {FORM_GRID.map((r) => (
                <tr key={r.form}>
                  <td className="rounded-l-2xl bg-slate-50 p-2.5">
                    <div className="text-sm font-extrabold text-slate-800">{r.form}</div>
                    <div className="font-kr text-xl text-slate-500">{r.kr}</div>
                  </td>
                  <td className="bg-violet-50 p-2.5 text-center font-kr text-2xl text-violet-900">{r.pres}</td>
                  <td className="bg-rose-50 p-2.5 text-center font-kr text-2xl text-rose-900">{r.past}</td>
                  <td className="rounded-r-2xl bg-sky-50 p-2.5 text-center font-kr text-2xl text-sky-900">{r.fut}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card>
        <H3 sub="In the formal style, a question swaps -니다 for -니까?. Everything else stays the same.">Formal questions</H3>
        <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
          <Block role="plain" base="갑니다" gloss="statement" size="md" />
          <span className="text-3xl font-black text-slate-400">→</span>
          <Block role="pred" base="갑니까?" gloss="question" size="md" />
        </div>
        <div className="grid gap-2 sm:grid-cols-3">
          <Line kr="갑니까?" en="Are you going?" />
          <Line kr="먹었습니까?" en="Did you eat?" />
          <Line kr="가십니까?" en="Is he/she going? (honorific + formal)" />
        </div>
      </Card>
    </Section>
  )
}
