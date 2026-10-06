import { Block, Callout, Card, H3, Line, Section, Sentence, Word } from '../components/ui'
import MiniDrill from '../components/MiniDrill'
import { analyze } from '../lib/korean'

const TABLE = [
  { noun: '크리스틴', result: '크리스틴은', with: true },
  { noun: '박주원', result: '박주원은', with: true },
  { noun: '저', result: '저는', with: false },
  { noun: '하루나', result: '하루나는', with: false },
]

const DRILL_WORDS = ['크리스틴', '박주원', '저', '하루나', '다니엘', '케이트', '루카스', '알리', '자함 씨', '엠마', '바타르', '최건우']

export default function Topic() {
  return (
    <Section id="eunneun" icon="🌍" kr="은 / 는" title="“As for …” — talk about who is from where" tone="sky" tag="문법 및 표현 2 · workbook pp. 26–27">
      <Card>
        <H3 sub="은/는 goes after a noun to say “this is what I'm talking about”.">The idea</H3>
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          <Block role="subj" base="Noun" gloss="the topic" size="md" />
          <span className="text-4xl font-black text-slate-400">+</span>
          <Block role="subj" base="은 / 는" gloss="as for …" size="md" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[26rem] border-separate border-spacing-y-2 text-center">
            <tbody>
              {TABLE.map((r) => {
                const a = analyze(r.noun)
                return (
                  <tr key={r.noun}>
                    <td className={`rounded-l-2xl p-3 text-sm font-extrabold ${r.with ? 'bg-rose-100 text-rose-900' : 'bg-sky-100 text-sky-900'}`}>{r.with ? '받침 O' : '받침 X'}</td>
                    <td className="bg-slate-50 p-3">
                      <Word text={r.noun} className="text-3xl" />
                      <div className="text-xs font-bold text-slate-500">
                        {a.syllable} → {a.hasBatchim ? a.jong : 'nothing'}
                      </div>
                    </td>
                    <td className="bg-slate-50 p-3 text-2xl font-black text-slate-400">+ {r.with ? '은' : '는'}</td>
                    <td className="rounded-r-2xl bg-slate-50 p-3 font-kr text-3xl text-slate-900">
                      {r.noun}
                      <b className="rounded-lg bg-rose-200 px-1 text-rose-900">{r.with ? '은' : '는'}</b>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Card>

      <Card>
        <H3 sub="Person + 은/는 → Country + 사람 → 이에요/예요">The introduction formula</H3>
        <div className="rounded-3xl bg-slate-50 p-4">
          <Sentence
            tags
            parts={[
              { role: 'subj', base: '루카스', particle: '는', gloss: 'As for Lucas' },
              { role: 'info', base: '브라질', gloss: 'Brazil' },
              { role: 'pred', base: '사람', particle: '이에요', gloss: 'person + is' },
            ]}
          />
        </div>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          <Line kr="루카스는 어느 나라 사람이에요?" en="Which country is Lucas from?" />
          <Line kr="저는 브라질 사람이에요." en="I'm from Brazil." />
        </div>
        <p className="mt-4 text-sm text-slate-600">
          Word by word: <span className="font-kr text-base">어느</span> which · <span className="font-kr text-base">나라</span> country · <span className="font-kr text-base">사람</span> person. So <span className="font-kr text-base">브라질 사람</span> literally means “Brazil person” = a Brazilian.
        </p>
      </Card>

      <Card>
        <H3 sub="Three little words from the book that make introductions polite.">Handy words for introductions</H3>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { kr: '저', en: 'I / me (polite)', ex: '저는 하루나예요.', exEn: "I'm Haruna." },
            { kr: '이 사람', en: 'this person', ex: '이 사람은 최건우예요.', exEn: 'This person is Choi Geonu.' },
            { kr: 'N(이름) 씨', en: 'Mr. / Ms. (name)', ex: '하루나 씨는 일본 사람이에요.', exEn: 'Haruna is from Japan.' },
          ].map((w) => (
            <div key={w.kr} className="rounded-3xl bg-sky-50 p-4 text-center ring-2 ring-sky-200">
              <div className="font-kr text-4xl text-slate-900">{w.kr}</div>
              <div className="text-sm font-extrabold text-sky-800">{w.en}</div>
              <div className="mt-3 rounded-2xl bg-white p-2">
                <div className="font-kr text-xl text-slate-900">{w.ex}</div>
                <div className="text-xs font-semibold text-slate-500">{w.exEn}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Callout kind="tip" title="Use 씨 for other people, never for yourself">
            <p>
              Add <span className="font-kr text-lg">씨</span> after someone else&apos;s name to be polite. When you talk about yourself, just say <span className="font-kr text-lg">저는</span> + your name — no 씨.
            </p>
          </Callout>
        </div>
      </Card>

      <Card>
        <H3 sub="From the book: 1 person + 1 country → 1 full sentence.">Example conversations</H3>
        <div className="space-y-3">
          <Line kr="장자함은 어느 나라 사람이에요?" en="Which country are you from, Zhang Zihan?" />
          <Line kr="저는 중국 사람이에요." en="I'm from China." />
          <Line kr="다니엘은 스웨덴 사람이에요?" en="Is Daniel from Sweden?" />
          <Line kr="네, 다니엘은 스웨덴 사람이에요." en="Yes, Daniel is from Sweden." />
        </div>
      </Card>

      <Card className="bg-gradient-to-br from-sky-50 to-rose-50">
        <H3 sub="Which one: 은 or 는?">⚡ Quick practice</H3>
        <MiniDrill kind="topic" words={DRILL_WORDS} />
      </Card>
    </Section>
  )
}
