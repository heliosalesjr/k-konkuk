import { Block, Callout, Card, H3, Line, Section, Speak, Word } from '../../components/ui'
import { POLITE_TO_FORMAL } from '../verbs40'
import { FORMAL_QA } from '../review'

export default function Formal() {
  return (
    <Section id="formal" icon="📢" kr="-습니다" title="The formal style — how you speak in an exam or a presentation" tone="sky" tag="40 verbos p.7 · 총복습 p.9">
      <Card>
        <H3 sub="The question here is the 받침 question: does the stem end in a consonant or not?">The recipe</H3>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-3xl bg-sky-50 p-4 ring-2 ring-sky-200">
            <p className="text-sm font-extrabold uppercase tracking-wide text-sky-700">받침 X → -ㅂ니다</p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Block role="pred" base="가" gloss="stem" size="sm" />
              <span className="text-2xl font-black text-slate-400">+</span>
              <Block role="plain" base="ㅂ니다" size="sm" />
              <span className="text-2xl font-black text-slate-400">=</span>
              <span className="font-kr text-3xl text-sky-900">갑니다</span>
            </div>
            <p className="mt-2 font-kr text-lg text-slate-700">오다 → 옵니다 · 하다 → 합니다 · 다니다 → 다닙니다</p>
          </div>
          <div className="rounded-3xl bg-emerald-50 p-4 ring-2 ring-emerald-200">
            <p className="text-sm font-extrabold uppercase tracking-wide text-emerald-700">받침 O → -습니다</p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Block role="pred" base="먹" gloss="stem" size="sm" />
              <span className="text-2xl font-black text-slate-400">+</span>
              <Block role="plain" base="습니다" size="sm" />
              <span className="text-2xl font-black text-slate-400">=</span>
              <span className="font-kr text-3xl text-emerald-900">먹습니다</span>
            </div>
            <p className="mt-2 font-kr text-lg text-slate-700">읽다 → 읽습니다 · 있다 → 있습니다 · 앉다 → 앉습니다</p>
          </div>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <Callout kind="rule" title="The past is always -습니다">
            <p className="font-kr text-lg">갔어요 → 갔<span className="text-blue-700">습니다</span> · 먹었어요 → 먹었<span className="text-blue-700">습니다</span></p>
            <p className="mt-1 text-xs">Because 았/었 always ends in ㅆ — a 받침. So you never have to choose.</p>
          </Callout>
          <Callout kind="rule" title="The future is -(으)ㄹ 겁니다">
            <p className="font-kr text-lg">갈 거예요 → 갈 <span className="text-blue-700">겁니다</span> · 먹을 거예요 → 먹을 <span className="text-blue-700">겁니다</span></p>
            <p className="mt-1 text-xs">거예요 becomes 겁니다, the rest stays the same.</p>
          </Callout>
        </div>
      </Card>

      <Card>
        <H3 sub="A ㄹ at the bottom of the stem cannot survive in front of ㅂ. It simply drops.">⚠️ ㄹ stems lose their ㄹ</H3>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ['살다', '삽니다', 'to live'],
            ['열다', '엽니다', 'to open'],
            ['놀다', '놉니다', 'to hang out'],
            ['만들다', '만듭니다', 'to make'],
            ['멀다', '멉니다', 'to be far'],
            ['길다', '깁니다', 'to be long'],
          ].map(([a, b, en]) => (
            <div key={a} className="flex items-center justify-between gap-2 rounded-2xl bg-slate-50 p-3">
              <div className="min-w-0">
                <Word text={a} className="text-2xl text-slate-900" />
                <div className="text-xs font-semibold text-slate-500">{en}</div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-kr text-2xl text-sky-900">{b}</span>
                <Speak text={b} className="h-7 w-7 text-sm" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3">
          <Callout kind="warn" title="The exam catches people here">
            <p>
              <span className="font-kr text-lg line-through decoration-rose-500 decoration-2">멀습니까?</span> →{' '}
              <span className="font-kr text-lg">멉니까?</span> The ㄹ is gone, so the stem now has no 받침 and takes -ㅂ니까.
            </p>
          </Callout>
        </div>
      </Card>

      <Card>
        <H3 sub="The review handout drills exactly these five. Each one hides a different rule.">요 → 습니다, the five tricky ones</H3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[26rem] border-separate border-spacing-y-2 text-left">
            <thead>
              <tr className="text-xs font-extrabold uppercase tracking-wide text-slate-500">
                <th className="p-2">polite -요</th>
                <th className="p-2 text-sky-700">formal</th>
                <th className="p-2">why</th>
              </tr>
            </thead>
            <tbody>
              {POLITE_TO_FORMAL.map((r) => (
                <tr key={r.yo}>
                  <td className="rounded-l-2xl bg-slate-50 p-2.5 font-kr text-2xl text-slate-900">{r.yo}</td>
                  <td className="bg-sky-50 p-2.5 font-kr text-2xl text-sky-900">{r.fml}</td>
                  <td className="rounded-r-2xl bg-slate-50 p-2.5 text-sm font-semibold text-slate-600">{r.rule}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card>
        <H3 sub="Questions 65–67 of the review. Notice how the question can be honorific while the answer is only formal — because the answer is about me.">
          From the exam · 대화
        </H3>
        <div className="space-y-4">
          {FORMAL_QA.map((qa) => (
            <div key={qa.n} className="rounded-3xl bg-slate-50 p-4">
              <div className="mb-1 text-xs font-extrabold uppercase tracking-wide text-slate-400">question {qa.n}</div>
              <Line kr={`가: ${qa.q}`} en={qa.qEn} />
              <div className="mt-2">
                <Line kr={`나: ${qa.a}`} en={qa.aEn} />
              </div>
              <p className="mt-2 border-l-2 border-sky-300 pl-3 text-sm leading-relaxed text-slate-700">{qa.why}</p>
            </div>
          ))}
        </div>
      </Card>
    </Section>
  )
}
