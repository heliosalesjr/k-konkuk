import { Block, Callout, Card, H3, Line, Section, Sentence } from '../../components/ui'
import { GapList } from '../drills'
import { HON_SWAPS } from '../verbs40'
import { HON_ANSWERS } from '../review'

export default function Honorific() {
  return (
    <Section id="honorific" icon="👑" kr="-(으)시-" title="The honorific — respect for the person you talk about" tone="rose" tag="40 verbos p.7 · 총복습 p.9">
      <Card>
        <H3 sub="When the subject of your sentence is someone you respect, THREE things change at once. Miss one and the sentence is wrong.">
          The three changes
        </H3>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-3xl bg-rose-50 p-4 ring-2 ring-rose-200">
            <div className="text-3xl">1️⃣</div>
            <p className="mt-1 font-kr text-2xl text-rose-950">이/가 → 께서</p>
            <p className="text-sm font-semibold text-slate-700">은/는 → 께서는</p>
            <p className="mt-2 font-kr text-lg text-slate-700">할머니<span className="text-blue-700">께서</span> 책을 읽으세요.</p>
          </div>
          <div className="rounded-3xl bg-violet-50 p-4 ring-2 ring-violet-200">
            <div className="text-3xl">2️⃣</div>
            <p className="mt-1 font-kr text-2xl text-violet-950">verb + -(으)시-</p>
            <p className="text-sm font-semibold text-slate-700">읽어요 → 읽으세요</p>
            <p className="mt-2 font-kr text-lg text-slate-700">가요 → 가<span className="text-blue-700">세요</span></p>
          </div>
          <div className="rounded-3xl bg-amber-50 p-4 ring-2 ring-amber-200">
            <div className="text-3xl">3️⃣</div>
            <p className="mt-1 font-kr text-2xl text-amber-950">some verbs change WORD</p>
            <p className="text-sm font-semibold text-slate-700">먹다 → 드시다</p>
            <p className="mt-2 font-kr text-lg text-slate-700">자다 → <span className="text-blue-700">주무시다</span></p>
          </div>
        </div>
        <div className="mt-5 rounded-3xl bg-slate-50 p-4">
          <p className="mb-3 text-sm font-extrabold text-slate-700">All three at once:</p>
          <Sentence
            size="md"
            parts={[
              { role: 'subj', base: '할아버지', particle: '께서', gloss: 'grandfather (respect)' },
              { role: 'obj', base: '진지', particle: '를', gloss: 'the meal (honorific word)' },
              { role: 'pred', base: '드세요.', gloss: 'is eating (드시다)' },
            ]}
          />
        </div>
      </Card>

      <Card>
        <H3 sub="Same 받침 question as always, now for the honorific ending.">-세요 or -으세요?</H3>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-3xl bg-sky-50 p-4 ring-2 ring-sky-200">
            <p className="text-sm font-extrabold uppercase tracking-wide text-sky-700">받침 X → -세요</p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Block role="pred" base="가" size="sm" />
              <span className="text-2xl font-black text-slate-400">+</span>
              <Block role="plain" base="세요" size="sm" />
              <span className="text-2xl font-black text-slate-400">=</span>
              <span className="font-kr text-3xl text-sky-900">가세요</span>
            </div>
            <p className="mt-2 font-kr text-lg text-slate-700">하다 → 하세요 · 보다 → 보세요 · 쉬다 → 쉬세요</p>
          </div>
          <div className="rounded-3xl bg-emerald-50 p-4 ring-2 ring-emerald-200">
            <p className="text-sm font-extrabold uppercase tracking-wide text-emerald-700">받침 O → -으세요</p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Block role="pred" base="읽" size="sm" />
              <span className="text-2xl font-black text-slate-400">+</span>
              <Block role="plain" base="으세요" size="sm" />
              <span className="text-2xl font-black text-slate-400">=</span>
              <span className="font-kr text-3xl text-emerald-900">읽으세요</span>
            </div>
            <p className="mt-2 font-kr text-lg text-slate-700">입다 → 입으세요 · 앉다 → 앉으세요 · 싶다 → 싶으세요</p>
          </div>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <Callout kind="rule" title="Past">
            <p className="font-kr text-lg">가셨어요 · 읽으셨어요</p>
            <p className="mt-1 text-xs">-세요 → -셨어요</p>
          </Callout>
          <Callout kind="rule" title="Future">
            <p className="font-kr text-lg">가실 거예요 · 읽으실 거예요</p>
            <p className="mt-1 text-xs">-(으)실 거예요</p>
          </Callout>
          <Callout kind="rule" title="+ formal">
            <p className="font-kr text-lg">가십니다 · 가십니까?</p>
            <p className="mt-1 text-xs">-(으)시- and -ㅂ니다 stack.</p>
          </Callout>
        </div>
      </Card>

      <Card>
        <H3 sub="The two irregular families behave exactly as they do everywhere else.">⚠️ ㄹ stems and ㄷ verbs</H3>
        <div className="grid gap-3 sm:grid-cols-2">
          <Callout kind="warn" title="ㄹ drops before 시">
            <p className="font-kr text-xl">살다 → 사세요 · 열다 → 여세요</p>
            <p className="font-kr text-xl">만들다 → 만드세요 · 놀다 → 노세요</p>
          </Callout>
          <Callout kind="warn" title="ㄷ becomes ㄹ before 으">
            <p className="font-kr text-xl">듣다 → 들으세요</p>
            <p className="font-kr text-xl">걷다 → 걸으세요</p>
          </Callout>
        </div>
      </Card>

      <Card>
        <H3 sub="Everything that swaps when the subject deserves respect. Learn this as a list.">The swap list</H3>
        <div className="grid gap-2 sm:grid-cols-2">
          {HON_SWAPS.map(([plain, hon]) => (
            <div key={plain} className="flex items-center justify-between gap-2 rounded-2xl bg-slate-50 p-3">
              <span className="font-kr text-xl text-slate-600">{plain}</span>
              <span className="text-xl font-black text-slate-300">→</span>
              <span className="font-kr text-2xl text-rose-900">{hon}</span>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Callout kind="note" title="Adjectives get it too">
            <p>
              <span className="font-kr text-lg">키가 커요</span> → <span className="font-kr text-lg">키가 크세요</span>. If the sentence describes someone you
              respect, the adjective takes -세요 as well.
            </p>
          </Callout>
        </div>
      </Card>

      <Card>
        <H3 sub="Questions 68–73 of the review. Tap a gap to check your answer.">From the exam · fill the gap</H3>
        <GapList items={HON_ANSWERS} />
      </Card>
    </Section>
  )
}
