import { Callout, Card, H3, Section } from '../../components/ui'
import { ErrorSpot } from '../drills'
import { ERRORS } from '../review'

const PATTERNS = [
  { icon: '🧲', title: 'The wrong particle', body: '만나다 needs 를, 좋아하다 needs 을/를, 좋다 needs 이/가.' },
  { icon: '🚫', title: 'Where 못 goes', body: 'With noun + 하다 it sits in the middle: 청소 못 했어요.' },
  { icon: '🙇', title: 'Honorific about yourself', body: 'Never. 저는 먹었어요, not 저는 드셨어요.' },
  { icon: '🤝', title: '-(으)ㄹ게요 about someone else', body: 'It is a promise I make. For other people use -(으)ㄹ 거예요.' },
]

export default function Errors() {
  return (
    <Section id="errors" icon="❌" kr="틀린 것 고치기" title="Spot the mistake" tone="rose" tag="총복습 82–90 · page 11">
      <Card>
        <H3 sub="The same four mistakes come back every time. If you know these, you can fix most sentences without thinking.">
          The four patterns
        </H3>
        <div className="grid gap-3 sm:grid-cols-2">
          {PATTERNS.map((p) => (
            <div key={p.title} className="rounded-3xl bg-rose-50 p-4 ring-2 ring-rose-200">
              <div className="text-3xl">{p.icon}</div>
              <p className="mt-1 text-lg font-extrabold text-slate-900">{p.title}</p>
              <p className="mt-0.5 font-kr text-base leading-relaxed text-slate-700">{p.body}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <H3 sub="Questions 82–90. Each sentence has exactly one problem — tap the word you think is wrong, then read the fix.">
          From the exam · find the error
        </H3>
        <ErrorSpot items={ERRORS} />
      </Card>

      <Card>
        <H3 sub="One more pair worth repeating, because it appears twice in this paper.">⚠️ 좋다 vs 좋아하다, one last time</H3>
        <Callout kind="warn" title="Two different words">
          <p>
            <span className="font-kr text-lg">좋다</span> is an <b>adjective</b> — the thing takes 이/가:{' '}
            <span className="font-kr text-lg">김치<span className="text-blue-700">가</span> 좋아요.</span>
          </p>
          <p className="mt-1">
            <span className="font-kr text-lg">좋아하다</span> is a <b>verb</b> — the thing takes 을/를:{' '}
            <span className="font-kr text-lg">김치<span className="text-blue-700">를</span> 좋아해요.</span>
          </p>
          <p className="mt-1 font-kr text-lg text-slate-400 line-through decoration-rose-500 decoration-2">사과를 좋아요</p>
        </Callout>
      </Card>
    </Section>
  )
}
