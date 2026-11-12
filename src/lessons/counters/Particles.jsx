import { Block, Callout, Card, H3, Line, Section } from '../../components/ui'
import { GapList } from '../drills'
import { PARTICLES, PARTICLE_ANSWERS } from '../review'

export default function Particles() {
  return (
    <Section id="particles" icon="🧲" kr="조사" title="Particles — the glue that gives each word its job" tone="sky" tag="총복습 21–29 · page 3">
      <Card>
        <H3 sub="A particle sticks to the END of a noun and says what that noun is doing in the sentence. Change the particle and the whole meaning changes.">
          What they do
        </H3>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Block role="place" base="집" particle="에" gloss="at home (it IS there)" size="md" />
          <span className="text-3xl font-black text-slate-400">vs</span>
          <Block role="place" base="집" particle="에서" gloss="at home (something HAPPENS)" size="md" />
        </div>
      </Card>

      <Card>
        <H3 sub="The eight particles the review tests, with the honorific version where there is one.">The table</H3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[30rem] border-separate border-spacing-y-2 text-left">
            <thead>
              <tr className="text-xs font-extrabold uppercase tracking-wide text-slate-500">
                <th className="p-2">Particle</th>
                <th className="p-2">Job</th>
                <th className="p-2 text-rose-700">honorific</th>
                <th className="p-2">Example</th>
              </tr>
            </thead>
            <tbody>
              {PARTICLES.map((p) => (
                <tr key={p.kr} className="align-top">
                  <td className="rounded-l-2xl bg-sky-50 p-2.5 font-kr text-2xl text-sky-900">{p.kr}</td>
                  <td className="bg-slate-50 p-2.5 text-sm font-semibold text-slate-700">{p.en}</td>
                  <td className="bg-slate-50 p-2.5 text-center font-kr text-2xl text-rose-900">{p.hon || '—'}</td>
                  <td className="rounded-r-2xl bg-slate-50 p-2.5">
                    <div className="font-kr text-lg text-slate-900">{p.ex}</div>
                    <div className="text-xs font-semibold text-slate-500">{p.exEn}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card>
        <H3 sub="Two pairs cause almost every mistake. Read these until they feel obvious.">⚠️ The two pairs that confuse everyone</H3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-emerald-50 p-4 ring-2 ring-emerald-200">
            <p className="font-kr text-3xl text-emerald-900">에 vs 에서</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              <span className="font-kr text-lg text-blue-700">있다 / 없다</span> use <span className="font-kr text-lg text-blue-700">에</span> — the thing just IS somewhere. Any other action uses{' '}
              <span className="font-kr text-lg text-blue-700">에서</span> — something HAPPENS there.
            </p>
            <div className="mt-2 space-y-1.5">
              <Line kr="편의점이 어디에 있어요?" en="Where is the convenience store?" />
              <Line kr="집에서 영화를 봐요." en="I watch films at home." />
            </div>
            <p className="mt-2 text-xs font-bold text-emerald-800">에 is also the destination of 가다/오다 and a clock time: 학교에 가요, 7시에.</p>
          </div>
          <div className="rounded-3xl bg-rose-50 p-4 ring-2 ring-rose-200">
            <p className="font-kr text-3xl text-rose-900">에게 vs 께</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Same job — the person who receives (give, ask, call). <span className="font-kr text-lg text-blue-700">께</span> is the respectful version.
            </p>
            <div className="mt-2 space-y-1.5">
              <Line kr="친구에게 물어야 해요." en="I have to ask a friend." />
              <Line kr="어머니께 선물을 드렸어요." en="I gave my mother a present." />
            </div>
            <p className="mt-2 text-xs font-bold text-rose-800">With 께 the verb usually becomes humble too: 드리다, 여쭤보다, 말씀드리다.</p>
          </div>
        </div>
      </Card>

      <Card>
        <H3 sub="Two particles change shape depending on the 받침 — exactly like 은/는 and 이/가.">The (으) / (이) rule</H3>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-3xl bg-slate-50 p-4">
            <p className="font-kr text-2xl text-slate-900">(으)로 — by, with</p>
            <div className="mt-2 grid gap-1.5">
              <p className="text-sm">
                받침 X → <span className="font-kr text-xl text-violet-800">로</span> ·{' '}
                <span className="font-kr text-lg">기차<span className="text-blue-700">로</span>, 지하철<span className="text-blue-700">로</span></span>
              </p>
              <p className="text-sm">
                받침 O → <span className="font-kr text-xl text-violet-800">으로</span> ·{' '}
                <span className="font-kr text-lg">버스<span className="text-blue-700">로</span>… 젓가락<span className="text-blue-700">으로</span></span>
              </p>
            </div>
            <p className="mt-2 text-xs font-bold text-amber-800">⚠️ A ㄹ 받침 also takes just 로: 지하철로.</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-4">
            <p className="font-kr text-2xl text-slate-900">(이)랑 — and, with</p>
            <div className="mt-2 grid gap-1.5">
              <p className="text-sm">
                받침 X → <span className="font-kr text-xl text-violet-800">랑</span> ·{' '}
                <span className="font-kr text-lg">운동화<span className="text-blue-700">랑</span></span>
              </p>
              <p className="text-sm">
                받침 O → <span className="font-kr text-xl text-violet-800">이랑</span> ·{' '}
                <span className="font-kr text-lg">책<span className="text-blue-700">이랑</span></span>
              </p>
            </div>
            <p className="mt-2 text-xs font-bold text-slate-600">랑 is the casual twin of 하고. 와/과 is the written one.</p>
          </div>
        </div>
        <div className="mt-4">
          <Callout kind="note" title="와 / 과 follows the same logic, backwards">
            <p>
              <span className="font-kr text-lg">사과<span className="text-blue-700">와</span> 바나나</span> (no 받침 → 와) · <span className="font-kr text-lg">책<span className="text-blue-700">과</span> 공책</span> (받침 → 과).
            </p>
          </Callout>
        </div>
      </Card>

      <Card>
        <H3 sub="Questions 21–29 of the review. Every one has a reason written underneath.">From the exam · fill the gap</H3>
        <GapList items={PARTICLE_ANSWERS} />
      </Card>
    </Section>
  )
}
