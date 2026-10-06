import { useState } from 'react'
import { Callout, Card, H3, Line, Section, Speak } from '../components/ui'
import { COUNTRIES, DIALOGUES } from '../data/content'
import { attach, particleFor } from '../lib/korean'

function Dialogue({ d, showEn }) {
  const colors = ['bg-sky-100 text-sky-900', 'bg-rose-100 text-rose-900', 'bg-emerald-100 text-emerald-900']
  const speakers = [...new Set(d.lines.map((l) => l.who))]
  return (
    <div className="space-y-3">
      {d.lines.map((l, i) => {
        const side = speakers.indexOf(l.who)
        return (
          <div key={i} className={`flex items-start gap-3 ${side === 1 ? 'flex-row-reverse' : ''}`}>
            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-kr text-lg font-bold shadow-sm ${colors[side % 3]}`} title={d.cast?.[l.who]}>
              {l.who}
            </div>
            <div className={`min-w-0 max-w-[85%] rounded-3xl px-4 py-3 shadow-sm ${side === 1 ? 'rounded-tr-md bg-rose-50' : 'rounded-tl-md bg-sky-50'}`}>
              <div className="flex items-center gap-2">
                <Speak text={l.kr} />
                <span className="font-kr text-2xl leading-snug text-slate-900 sm:text-3xl">{l.kr}</span>
              </div>
              {showEn && <p className="mt-1 text-sm font-semibold text-slate-600">{l.en}</p>}
            </div>
          </div>
        )
      })}
      {d.cast && (
        <p className="text-center text-xs font-bold text-slate-500">
          {Object.entries(d.cast)
            .map(([k, v]) => `${k} = ${v}`)
            .join('  ·  ')}
        </p>
      )}
    </div>
  )
}

// Fill in your details and get a ready-to-read introduction with the correct endings.
function IntroBuilder() {
  const [name, setName] = useState('하루나')
  const [country, setCountry] = useState('일본')
  const [friend, setFriend] = useState('조세핀')
  const [friendCountry, setFriendCountry] = useState('프랑스')

  const n = name.trim() || '이름'
  const f = friend.trim() || '이름'
  const me = [
    '여러분, 안녕하세요.',
    `저는 ${n}${particleFor(n, 'copula') || '이에요'}.`,
    `저는 ${country} 사람이에요.`,
    '만나서 반가워요.',
  ]
  const fr = [
    '여러분, 안녕하세요?',
    `저는 ${n}${particleFor(n, 'copula') || '이에요'}.`,
    `이 사람은 ${f} 씨예요.`,
    `${f} 씨는 ${friendCountry} 사람이에요.`,
  ]
  const field = 'rounded-2xl border-2 border-emerald-300 bg-white px-3 py-2 font-kr text-2xl shadow-inner outline-none focus:ring-4 focus:ring-emerald-200'
  const label = 'text-xs font-extrabold uppercase tracking-wide text-slate-500'
  const select = (value, set) => (
    <select value={value} onChange={(e) => set(e.target.value)} className={field}>
      {COUNTRIES.map((c) => (
        <option key={c.kr} value={c.kr}>
          {c.flag} {c.kr} — {c.en}
        </option>
      ))}
    </select>
  )

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2 rounded-3xl bg-white p-4 shadow-sm">
          <p className={label}>You</p>
          <input value={name} onChange={(e) => setName(e.target.value)} className={`${field} w-full`} aria-label="Your name in Hangul" placeholder="이름 (Hangul)" />
          {select(country, setCountry)}
        </div>
        <div className="space-y-2 rounded-3xl bg-white p-4 shadow-sm">
          <p className={label}>Your friend</p>
          <input value={friend} onChange={(e) => setFriend(e.target.value)} className={`${field} w-full`} aria-label="Your friend's name in Hangul" placeholder="이름 (Hangul)" />
          {select(friendCountry, setFriendCountry)}
        </div>
      </div>

      {[
        { title: '🙋 Introduce yourself', lines: me },
        { title: '🤝 Introduce a friend', lines: fr },
      ].map((box) => (
        <div key={box.title} className="rounded-3xl bg-gradient-to-br from-emerald-50 to-yellow-50 p-4 ring-2 ring-emerald-200">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-lg font-extrabold text-emerald-900">{box.title}</p>
            <Speak text={box.lines.join(' ')} />
          </div>
          <div className="space-y-1.5">
            {box.lines.map((l) => (
              <p key={l} className="font-kr text-3xl leading-snug text-slate-900 sm:text-4xl">
                {l}
              </p>
            ))}
          </div>
        </div>
      ))}
      <p className="text-center text-xs text-slate-500">
        Your name → <span className="font-kr text-base">{attach(n, 'copula')}</span> · Friend&apos;s name + 씨 → <span className="font-kr text-base">{f} 씨예요</span> (씨 always takes 예요)
      </p>
    </div>
  )
}

export default function Speaking() {
  const [tab, setTab] = useState(DIALOGUES[0].id)
  const [showEn, setShowEn] = useState(true)
  const d = DIALOGUES.find((x) => x.id === tab)

  return (
    <Section id="speak" icon="🎤" kr="말하기" title="Speaking practice" tone="emerald" tag="말하기 1 · 2">
      <Card>
        <H3 sub="Tap 🔊 to hear each line, then read it out loud. Hide the English to test yourself!">Model dialogues</H3>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {DIALOGUES.map((x) => (
            <button key={x.id} type="button" onClick={() => setTab(x.id)} className={`rounded-full px-4 py-2 text-sm font-extrabold shadow-sm transition ${tab === x.id ? 'bg-emerald-500 text-white' : 'bg-white text-slate-700 hover:bg-emerald-100'}`}>
              {x.title}
            </button>
          ))}
          <label className="ml-auto flex cursor-pointer items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold shadow-sm">
            <input type="checkbox" checked={showEn} onChange={(e) => setShowEn(e.target.checked)} className="h-4 w-4 accent-emerald-500" />
            Show English
          </label>
        </div>
        <Dialogue key={d.id} d={d} showEn={showEn} />
      </Card>

      <Card>
        <H3 sub="From the book: 말하기 1 — how to introduce yourself and a friend in front of the class.">Model introductions</H3>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-2 rounded-3xl bg-sky-50 p-4 ring-2 ring-sky-200">
            <p className="text-sm font-extrabold text-sky-800">🙋 Yourself (Batar)</p>
            <Line kr="여러분, 안녕하세요." en="Hello, everyone." />
            <Line kr="저는 바타르예요." en="I'm Batar." />
            <Line kr="저는 몽골 사람이에요." en="I'm from Mongolia." />
            <Line kr="만나서 반가워요." en="Nice to meet you." />
          </div>
          <div className="space-y-2 rounded-3xl bg-rose-50 p-4 ring-2 ring-rose-200">
            <p className="text-sm font-extrabold text-rose-800">🤝 A friend (Ali introduces Josephine)</p>
            <Line kr="여러분 안녕하세요? 저는 알리예요." en="Hello, everyone! I'm Ali." />
            <Line kr="이 사람은 조세핀 씨예요." en="This is Josephine." />
            <Line kr="조세핀 씨는 프랑스 사람이에요." en="Josephine is from France." />
          </div>
        </div>
      </Card>

      <Card className="bg-gradient-to-br from-emerald-50 to-sky-50">
        <H3 sub="Type a name in Hangul and pick a country. The endings are chosen for you.">✨ Make your own introduction</H3>
        <IntroBuilder />
        <div className="mt-4">
          <Callout kind="tip" title="Challenge">
            <p>Read your introduction out loud three times, then close the English. Then try it with a friend from the dialogues above!</p>
          </Callout>
        </div>
      </Card>
    </Section>
  )
}
