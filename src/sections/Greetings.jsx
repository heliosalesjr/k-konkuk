import { useState } from 'react'
import { Section, Callout } from '../components/ui'
import { ANSWERS, CLASSROOM, GREETINGS } from '../data/content'
import { speak } from '../lib/korean'

function PhraseCard({ kr, alt, en, icon, note, sound, tone }) {
  return (
    <button
      type="button"
      onClick={() => speak(kr)}
      className={`group flex flex-col items-center gap-2 rounded-3xl border-2 p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg active:scale-95 ${tone}`}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 font-kr text-4xl shadow-inner">{icon}</div>
      <div className="font-kr text-3xl leading-tight text-slate-900 sm:text-4xl">{kr}</div>
      {alt && <div className="font-kr text-2xl leading-tight text-slate-700">{alt}</div>}
      <div className="text-sm font-bold text-slate-700">{en}</div>
      {sound && <div className="rounded-full bg-white/80 px-2 py-0.5 text-xs font-bold text-violet-700">sounds like {sound}</div>}
      {note && <div className="text-xs text-slate-600">{note}</div>}
      <span className="text-xs font-bold text-slate-400 group-hover:text-slate-600">🔊 tap to listen</span>
    </button>
  )
}

const TABS = [
  { id: 'greet', label: '👋 Greetings', tone: 'border-rose-200 bg-rose-50', items: GREETINGS },
  { id: 'class', label: '🏫 Teacher says', tone: 'border-sky-200 bg-sky-50', items: CLASSROOM },
  { id: 'answers', label: '🙋 You say', tone: 'border-emerald-200 bg-emerald-50', items: ANSWERS },
]

export default function Greetings() {
  const [tab, setTab] = useState('greet')
  const current = TABS.find((t) => t.id === tab)

  return (
    <Section id="greetings" icon="👋" kr="인사와 교실 표현" title="Greetings & classroom expressions" tone="rose" tag="한글 5 · pp. 90–91">
      <div className="flex flex-wrap gap-2">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`rounded-full px-5 py-2 text-base font-extrabold shadow-sm transition ${
              tab === t.id ? 'bg-rose-500 text-white' : 'bg-white text-slate-700 hover:bg-rose-100'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {current.items.map((it) => (
          <PhraseCard key={it.kr} {...it} tone={current.tone} />
        ))}
      </div>

      {tab === 'greet' && (
        <Callout kind="tip" title="안녕히 가세요 vs 안녕히 계세요">
          <p>
            Look at who is <b>moving</b>. If the other person is leaving, you say <span className="font-kr text-lg">가세요</span> (go). If the other person is staying, you say{' '}
            <span className="font-kr text-lg">계세요</span> (stay). If you are both leaving, you both say <span className="font-kr text-lg">안녕히 가세요</span>.
          </p>
        </Callout>
      )}
      {tab === 'answers' && (
        <Callout kind="note" title="받침 — you will hear this word a lot!">
          <p>
            <span className="font-kr text-lg">옷</span> has a consonant at the bottom (<span className="font-kr text-lg">받침이 있어요</span>).{' '}
            <span className="font-kr text-lg">오</span> has nothing at the bottom (<span className="font-kr text-lg">받침이 없어요</span>). Whether a word has 받침 decides which particle to use — that is the key to this whole block!
          </p>
        </Callout>
      )}
    </Section>
  )
}
