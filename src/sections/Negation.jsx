import { useState } from 'react'
import { Block, Callout, Card, H3, Line, Section, Sentence, Word } from '../components/ui'
import MiniDrill from '../components/MiniDrill'
import { COUNTRY, PEOPLE } from '../data/content'
import { analyze, attach } from '../lib/korean'

const DRILL_WORDS = ['학생', '회사원', '가수', '요리사', '의사', '선생님', '주부', '경찰']

// Pick a person and see the yes / no answers for a true and a false question.
function YesNoDemo() {
  const [who, setWho] = useState('루카스')
  const [truth, setTruth] = useState(true)
  const person = PEOPLE.find((p) => p.kr === who)
  const real = COUNTRY[person.country]
  const wrongKr = person.country === '일본' ? '미국' : '일본'
  const asked = truth ? real : COUNTRY[wrongKr]
  const name = attach(person.kr, 'topic')

  const question = `${name} ${asked.kr} 사람이에요?`
  const answer = truth
    ? `네, ${name} ${asked.kr} 사람이에요.`
    : `아니요, ${name} ${asked.kr} 사람이 아니에요. ${real.kr} 사람이에요.`

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <label className="text-sm font-bold text-slate-600" htmlFor="who">
          Pick a person:
        </label>
        <select id="who" value={who} onChange={(e) => setWho(e.target.value)} className="rounded-2xl border-2 border-rose-300 bg-white px-3 py-2 font-kr text-xl shadow-sm">
          {PEOPLE.map((p) => (
            <option key={p.kr} value={p.kr}>
              {p.kr} — {p.en}
            </option>
          ))}
        </select>
        <div className="flex rounded-full bg-white p-1 shadow-sm ring-1 ring-slate-200">
          <button type="button" onClick={() => setTruth(true)} className={`rounded-full px-4 py-1.5 text-sm font-extrabold ${truth ? 'bg-emerald-500 text-white' : 'text-slate-600'}`}>
            The question is TRUE
          </button>
          <button type="button" onClick={() => setTruth(false)} className={`rounded-full px-4 py-1.5 text-sm font-extrabold ${!truth ? 'bg-rose-500 text-white' : 'text-slate-600'}`}>
            The question is FALSE
          </button>
        </div>
      </div>

      <div className="rounded-3xl bg-yellow-50 p-4 text-center ring-2 ring-yellow-200">
        <p className="text-sm font-bold text-slate-600">Fact:</p>
        <p className="text-5xl">{real.flag}</p>
        <p className="font-kr text-2xl text-slate-900">
          {person.kr} = {real.kr} 사람 <span className="font-sans text-sm text-slate-500">({person.en}, {real.en})</span>
        </p>
      </div>

      <div className="space-y-2">
        <Line kr={question} en={`Q: Is ${person.en} from ${asked.en}?`} big />
        <div className={`rounded-3xl p-1 ${truth ? 'bg-emerald-200' : 'bg-rose-200'}`}>
          <Line kr={answer} en={truth ? 'Yes!' : `No — ${person.en} is not from ${asked.en}. ${person.en} is from ${real.en}.`} big />
        </div>
      </div>
    </div>
  )
}

export default function Negation() {
  return (
    <Section id="anieyo" icon="🚫" kr="이/가 아니에요" title="“I am NOT …” — say what you are not" tone="rose" tag="문법 및 표현 3">
      <Card>
        <H3 sub="Put it after a noun to say the subject is NOT that thing.">The idea</H3>
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          <Block role="plain" base="Noun" gloss="student, singer…" size="md" />
          <span className="text-4xl font-black text-slate-400">+</span>
          <Block role="pred" base="이 / 가" gloss="then a space" size="md" />
          <Block role="pred" base="아니에요" gloss="is not" size="md" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[28rem] border-separate border-spacing-y-2 text-center">
            <tbody>
              {[
                { with: true, nouns: ['학생', '회사원'] },
                { with: false, nouns: ['가수', '요리사'] },
              ].map((g) =>
                g.nouns.map((n, i) => {
                  const a = analyze(n)
                  return (
                    <tr key={n}>
                      {i === 0 && (
                        <td rowSpan={2} className={`rounded-l-2xl p-3 text-sm font-extrabold ${g.with ? 'bg-rose-100 text-rose-900' : 'bg-sky-100 text-sky-900'}`}>
                          {g.with ? '받침 O' : '받침 X'}
                          <div className="mt-1 font-kr text-2xl">+ {g.with ? '이' : '가'}</div>
                        </td>
                      )}
                      <td className="bg-slate-50 p-3">
                        <Word text={n} className="text-3xl" />
                        <div className="text-xs font-bold text-slate-500">
                          {a.syllable} → {a.hasBatchim ? a.jong : 'nothing'}
                        </div>
                      </td>
                      <td className="rounded-r-2xl bg-slate-50 p-3 font-kr text-3xl text-slate-900">
                        {n}
                        <b className="rounded-lg bg-orange-200 px-1 text-orange-900">{g.with ? '이' : '가'}</b> 아니에요
                      </td>
                    </tr>
                  )
                }),
              )}
            </tbody>
          </table>
        </div>
        <div className="mt-4 space-y-3">
          <Callout kind="warn" title="Watch the space!">
            <p>
              <span className="font-kr text-lg">학생<b>이에요</b></span> (is a student) has <b>no space</b>. <span className="font-kr text-lg">학생<b>이 아니에요</b></span> (is NOT a student) has a space before 아니에요, because 이/가 is a particle and 아니에요 is its own word.
            </p>
          </Callout>
          <Callout kind="note" title="Same 이/가 as before">
            <p>This is the same subject-marking 이/가 you met in the sentence-structure section — but here it labels the noun that we are denying.</p>
          </Callout>
        </div>
      </Card>

      <Card>
        <H3 sub="First deny it, then say what you really are.">From the book: “I'm not …, I'm …”</H3>
        <div className="rounded-3xl bg-slate-50 p-4">
          <Sentence
            size="md"
            parts={[
              { role: 'subj', base: '저', particle: '는', gloss: 'I' },
              { role: 'info', base: '학생', particle: '이', gloss: 'student' },
              { role: 'pred', base: '아니에요.', gloss: 'am not' },
              { role: 'info', base: '회사원', particle: '이에요.', gloss: "an office worker (I am)" },
            ]}
          />
          <div className="mt-4">
            <Line kr="저는 학생이 아니에요. 회사원이에요." en="I'm not a student. I'm an office worker." />
          </div>
        </div>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          <Line kr="이 사람은 의사가 아니에요. 선생님이에요." en="This person is not a doctor. They're a teacher." />
          <Line kr="이 사람은 주부가 아니에요. 의사예요." en="This person is not a homemaker. They're a doctor." />
          <Line kr="이 사람은 경찰이 아니에요. 학생이에요." en="This person is not a police officer. They're a student." />
        </div>
        <p className="mt-3 text-xs text-slate-500">
          (Check each one: 의사 → 사 no 받침 → 가 · 주부 → 부 no 받침 → 가 · 경찰 → 찰 has ㄹ → 이)
        </p>
      </Card>

      <Card className="bg-gradient-to-br from-rose-50 to-yellow-50">
        <H3 sub="네 = yes, 아니요 = no. See how the answer changes when the question is true or false.">Answering yes/no questions</H3>
        <YesNoDemo />
      </Card>

      <Card className="bg-gradient-to-br from-rose-50 to-violet-50">
        <H3 sub="Which one: 이 or 가?">⚡ Quick practice</H3>
        <MiniDrill kind="neg" words={DRILL_WORDS} />
      </Card>
    </Section>
  )
}
