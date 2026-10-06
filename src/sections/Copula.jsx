import { Block, Callout, Card, H3, Line, Section, Sentence, Word } from '../components/ui'
import MiniDrill from '../components/MiniDrill'
import { analyze } from '../lib/korean'

const EXAMPLES = [
  { noun: '사람', en: 'person', with: true },
  { noun: '이지현', en: 'Lee Jihyeon (a name)', with: true },
  { noun: '뭐', en: 'what', with: false },
  { noun: '알리', en: 'Ali (a name)', with: false },
]

const DRILL_WORDS = ['사람', '학생', '알리', '이지현', '뭐', '의사', '선생님', '하루나', '회사원', '조세핀', '바타르', '요리사']

export default function Copula() {
  return (
    <Section id="ieyo" icon="🙋" kr="이에요 / 예요" title="“I am … / It is …” — say what you are" tone="violet" tag="문법 및 표현 1 · workbook pp. 24–25">
      <Card>
        <H3 sub="Attach it to a noun and the noun becomes a full sentence ending (a predicate).">The idea</H3>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          <Block role="plain" base="Noun" gloss="person, name, job, country…" size="md" />
          <span className="text-4xl font-black text-slate-400">+</span>
          <Block role="pred" base="이에요 / 예요" gloss="is · am · are" size="md" />
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-rose-50 p-4 ring-2 ring-rose-200">
            <p className="text-center text-sm font-extrabold text-rose-800">받침 O → + 이에요</p>
            <div className="mt-3 space-y-2">
              {EXAMPLES.filter((e) => e.with).map((e) => (
                <div key={e.noun} className="flex items-center justify-between gap-2 rounded-2xl bg-white p-3">
                  <div>
                    <Word text={e.noun} className="text-3xl" />
                    <span className="ml-2 text-xs font-bold text-slate-500">{analyze(e.noun).syllable} → {analyze(e.noun).jong}</span>
                  </div>
                  <span className="text-slate-300">→</span>
                  <span className="font-kr text-3xl text-slate-900">
                    {e.noun}
                    <b className="rounded-lg bg-violet-200 px-1 text-violet-900">이에요</b>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-sky-50 p-4 ring-2 ring-sky-200">
            <p className="text-center text-sm font-extrabold text-sky-800">받침 X → + 예요</p>
            <div className="mt-3 space-y-2">
              {EXAMPLES.filter((e) => !e.with).map((e) => (
                <div key={e.noun} className="flex items-center justify-between gap-2 rounded-2xl bg-white p-3">
                  <div>
                    <Word text={e.noun} className="text-3xl" />
                    <span className="ml-2 text-xs font-bold text-slate-500">{analyze(e.noun).syllable} → nothing</span>
                  </div>
                  <span className="text-slate-300">→</span>
                  <span className="font-kr text-3xl text-slate-900">
                    {e.noun}
                    <b className="rounded-lg bg-violet-200 px-1 text-violet-900">예요</b>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-600">
          Spot the difference: unlike what we&apos;ll see with 이/가 아니에요, <b>there is no space</b> between the noun and 이에요/예요.
        </p>
      </Card>

      <Card>
        <H3 sub="The question and the answer look the same — only your voice changes!">Question ↗ vs. answer ↘</H3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-sky-50 p-5 text-center ring-2 ring-sky-200">
            <div className="text-5xl text-sky-500">↗</div>
            <p className="font-kr text-3xl text-slate-900 sm:text-4xl">한국 사람이에요?</p>
            <p className="mt-1 text-sm font-bold text-slate-600">Question: voice goes UP at the end</p>
          </div>
          <div className="rounded-3xl bg-emerald-50 p-5 text-center ring-2 ring-emerald-200">
            <div className="text-5xl text-emerald-500">↘</div>
            <p className="font-kr text-3xl text-slate-900 sm:text-4xl">네, 한국 사람이에요.</p>
            <p className="mt-1 text-sm font-bold text-slate-600">Answer: voice goes DOWN at the end</p>
          </div>
        </div>
      </Card>

      <Card>
        <H3 sub="The answer copies the pattern of the question — just swap the question word!">Two questions you will use every day</H3>
        <div className="space-y-6">
          <div className="rounded-3xl bg-slate-50 p-4">
            <p className="mb-3 text-center text-sm font-extrabold text-slate-500">1 · Which country are you from?</p>
            <div className="space-y-3">
              <Sentence
                size="md"
                parts={[
                  { role: 'info', base: '어느', gloss: 'which' },
                  { role: 'info', base: '나라', gloss: 'country' },
                  { role: 'pred', base: '사람', particle: '이에요?', gloss: 'person + are (?)' },
                ]}
              />
              <div className="text-center text-2xl text-slate-300">⬇ swap “어느 나라” → the country</div>
              <Sentence
                size="md"
                parts={[
                  { role: 'info', base: '한국', gloss: 'Korea' },
                  { role: 'pred', base: '사람', particle: '이에요.', gloss: 'person + am' },
                ]}
              />
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <Line kr="어느 나라 사람이에요?" en="Which country are you from?" />
              <Line kr="한국 사람이에요." en="I'm from Korea." />
            </div>
          </div>

          <div className="rounded-3xl bg-slate-50 p-4">
            <p className="mb-3 text-center text-sm font-extrabold text-slate-500">2 · What&apos;s your name?</p>
            <div className="space-y-3">
              <Sentence
                size="md"
                parts={[
                  { role: 'subj', base: '이름', particle: '이', gloss: 'name' },
                  { role: 'pred', base: '뭐', particle: '예요?', gloss: 'what + is (?)' },
                ]}
              />
              <div className="text-center text-2xl text-slate-300">⬇ swap “뭐” → your name</div>
              <Sentence size="md" parts={[{ role: 'pred', base: '조세핀', particle: '이에요.', gloss: 'Josephine + am' }]} />
              <p className="text-center text-xs font-semibold text-slate-500">(the subject “my name” is understood, so it is left out)</p>
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <Line kr="이름이 뭐예요?" en="What's your name?" />
              <Line kr="조세핀이에요." en="I'm Josephine. (My name is Josephine.)" />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Callout kind="tip" title="Names with 씨 are ALWAYS 예요">
            <p>
              <span className="font-kr text-lg">씨</span> (Mr./Ms.) has no 받침, so: <span className="font-kr text-lg">조세핀 씨<b>예요</b></span>, <span className="font-kr text-lg">알리 씨<b>예요</b></span>. Without 씨, the name itself decides: <span className="font-kr text-lg">조세핀<b>이에요</b></span>, <span className="font-kr text-lg">알리<b>예요</b></span>.
            </p>
          </Callout>
        </div>
      </Card>

      <Card className="bg-gradient-to-br from-violet-50 to-sky-50">
        <H3 sub="Look at the last syllable, decide 받침 O / X, tap the ending.">⚡ Quick practice</H3>
        <MiniDrill kind="copula" words={DRILL_WORDS} />
      </Card>
    </Section>
  )
}
