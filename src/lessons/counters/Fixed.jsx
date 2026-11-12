import { Callout, Card, H3, Section, Speak } from '../../components/ui'
import { GapList } from '../drills'
import { FIXED, FIXED_ANSWERS } from '../review'

const THEMES = [
  { tag: 'time', icon: '🕖', title: 'Time', tone: 'bg-sky-50 ring-sky-200' },
  { tag: 'adjective', icon: '💙', title: 'Adjectives that take 이/가', tone: 'bg-violet-50 ring-violet-200' },
  { tag: 'health', icon: '🤒', title: 'Getting ill', tone: 'bg-rose-50 ring-rose-200' },
  { tag: 'weather', icon: '🌧️', title: 'Weather', tone: 'bg-cyan-50 ring-cyan-200' },
  { tag: 'shop', icon: '🛒', title: 'Shopping', tone: 'bg-amber-50 ring-amber-200' },
  { tag: 'route', icon: '🚇', title: 'From A to B', tone: 'bg-emerald-50 ring-emerald-200' },
  { tag: 'origin', icon: '🌍', title: 'Where you are from', tone: 'bg-lime-50 ring-lime-200' },
  { tag: 'work', icon: '🏢', title: 'Work', tone: 'bg-orange-50 ring-orange-200' },
]

export default function Fixed() {
  return (
    <Section id="fixed" icon="📌" kr="고정 표현" title="Expressions to learn as one block" tone="orange" tag="총복습 조사 복습 · page 12">
      <Card>
        <H3 sub="These are not rules you work out — they are chunks. The particle is part of the expression, so memorise the whole thing together.">
          Learn the whole chunk
        </H3>
        <div className="grid gap-3 sm:grid-cols-2">
          {THEMES.map((t) => {
            const items = FIXED.filter((f) => f.tag === t.tag)
            if (!items.length) return null
            return (
              <div key={t.tag} className={`rounded-3xl p-4 ring-2 ${t.tone}`}>
                <p className="text-sm font-extrabold uppercase tracking-wide text-slate-600">
                  {t.icon} {t.title}
                </p>
                <div className="mt-2 space-y-1.5">
                  {items.map((f) => (
                    <div key={f.kr} className="flex items-start gap-2 rounded-2xl bg-white/80 p-2">
                      <Speak text={f.kr} className="h-7 w-7 text-sm" />
                      <div className="min-w-0">
                        <p className="font-kr text-xl leading-snug text-slate-900">{f.kr}</p>
                        <p className="text-xs font-semibold text-slate-500">{f.en}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        <div className="mt-4">
          <Callout kind="warn" title="The three adjectives that take 이/가, not 을/를">
            <p>
              <span className="font-kr text-lg">좋다 · 아니다 · 되다</span> → <span className="font-kr text-lg">김치<span className="text-blue-700">가</span> 좋아요, 책상<span className="text-blue-700">이</span> 아니에요</span>. Compare
              with 좋아하다, which is a verb and takes 을/를: <span className="font-kr text-lg">김치<span className="text-blue-700">를</span> 좋아해요</span>.
            </p>
          </Callout>
        </div>
      </Card>

      <Card>
        <H3 sub="The twenty particle questions from the last page of the review. Tap each gap — some sentences have three.">
          From the exam · 조사 복습 1–20
        </H3>
        <GapList items={FIXED_ANSWERS} />
      </Card>
    </Section>
  )
}
