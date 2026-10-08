import { useEffect, useState } from 'react'
import { Speak } from '../components/ui'

const GOALS = [
  { id: 'me-from', kr: '저는 일본 사람이에요.', en: "I'm from Japan.", label: 'Where I am from', to: 'eunneun' },
  { id: 'me-what', kr: '저는 학생이에요.', en: "I'm a student.", label: 'What I am', to: 'ieyo' },
  { id: 'you-from', kr: '케이트 씨는 미국 사람이에요.', en: 'Kate is from the USA.', label: 'Where someone else is from', to: 'eunneun' },
  { id: 'you-what', kr: '이 사람은 의사예요.', en: 'This person is a doctor.', label: 'What someone else is', to: 'ieyo' },
  { id: 'me-not', kr: '저는 학생이 아니에요.', en: "I'm not a student.", label: 'What I am not', to: 'anieyo' },
  { id: 'you-not', kr: '루카스는 일본 사람이 아니에요.', en: 'Lucas is not from Japan.', label: 'What someone else is not', to: 'anieyo' },
]

const KEY = 'korean-konkuk-goals-v1'

function useChecked() {
  const [checked, setChecked] = useState([])
  useEffect(() => {
    try {
      setChecked(JSON.parse(localStorage.getItem(KEY)) || [])
    } catch {
      /* storage unavailable — the checklist just won't be remembered */
    }
  }, [])
  const toggle = (id) => {
    const next = checked.includes(id) ? checked.filter((x) => x !== id) : [...checked, id]
    setChecked(next)
    try {
      localStorage.setItem(KEY, JSON.stringify(next))
    } catch {
      /* ignore */
    }
  }
  return [checked, toggle]
}

export default function Hero() {
  const [checked, toggle] = useChecked()
  return (
    <section id="start" className="scroll-mt-24 space-y-6">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-yellow-300 via-rose-300 to-sky-300 p-6 shadow-xl sm:p-10">
        <div className="pointer-events-none absolute -right-6 -top-6 text-[9rem] opacity-20 sm:text-[13rem]">🇰🇷</div>
        <p className="text-sm font-extrabold uppercase tracking-widest text-slate-800/70">건국 한국어 1-1 · Lesson 1</p>
        <h1 className="mt-2 font-kr text-6xl leading-tight text-slate-900 sm:text-8xl">안녕하세요!</h1>
        <p className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
          <span className="font-kr">1과 인사와 소개</span> · Greetings &amp; Introductions
        </p>
        <p className="mt-4 max-w-2xl text-base font-semibold text-slate-800 sm:text-lg">
          Block 1: who am I, where am I from, and who are you? Colourful explanations, word-order pictures, games and a quiz — all following the order of your textbook.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Speak text="안녕하세요" />
          <span className="text-sm font-bold text-slate-800">Tap 🔊 anywhere to hear Korean out loud.</span>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <a href="#greetings" className="rounded-[2rem] bg-gradient-to-br from-yellow-200 to-rose-100 p-5 shadow-md ring-2 ring-white transition hover:scale-[1.01]">
          <div className="text-xs font-extrabold uppercase tracking-wide text-slate-600">Lesson 1 · 1과</div>
          <div className="font-kr text-3xl text-slate-900">인사와 소개</div>
          <div className="text-sm font-semibold text-slate-700">Greetings &amp; introductions · you are here</div>
        </a>
        <a href="materials.html" className="rounded-[2rem] bg-gradient-to-br from-sky-200 to-violet-100 p-5 shadow-md ring-2 ring-white transition hover:scale-[1.01]">
          <div className="text-xs font-extrabold uppercase tracking-wide text-slate-600">Lesson 2 · 2과 materials</div>
          <div className="font-kr text-3xl text-slate-900">현재 · 과거 · 부사</div>
          <div className="text-sm font-semibold text-slate-700">Present · Past · Adverbs →</div>
        </a>
        <a href="exercises.html" className="rounded-[2rem] bg-gradient-to-br from-rose-200 to-amber-100 p-5 shadow-md ring-2 ring-white transition hover:scale-[1.01]">
          <div className="text-xs font-extrabold uppercase tracking-wide text-slate-600">Lesson 2 · 쓰기 worksheets</div>
          <div className="font-kr text-3xl text-slate-900">쓰기 · 연습</div>
          <div className="text-sm font-semibold text-slate-700">Writing 1 &amp; 2 · practice →</div>
        </a>
      </div>

      <div className="rounded-[2rem] bg-white/90 p-5 shadow-md sm:p-7">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">🎯 By the end of this block I can say…</h2>
            <p className="text-sm text-slate-600">Tick each one when you feel confident. Tap a card to jump to its lesson.</p>
          </div>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-extrabold text-emerald-800">
            {checked.length} / {GOALS.length}
          </span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {GOALS.map((g) => {
            const on = checked.includes(g.id)
            return (
              <div key={g.id} className={`flex items-center gap-3 rounded-3xl border-2 p-3 transition ${on ? 'border-emerald-300 bg-emerald-50' : 'border-slate-100 bg-slate-50'}`}>
                <button
                  type="button"
                  onClick={() => toggle(g.id)}
                  aria-pressed={on}
                  aria-label={`${on ? 'Untick' : 'Tick'}: ${g.label}`}
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-xl transition active:scale-90 ${on ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-slate-300 bg-white text-transparent hover:border-emerald-400'}`}
                >
                  ✓
                </button>
                <a href={`#${g.to}`} className="min-w-0 flex-1">
                  <div className="text-xs font-extrabold uppercase tracking-wide text-slate-500">{g.label}</div>
                  <div className="font-kr text-2xl leading-snug text-slate-900 sm:text-3xl">{g.kr}</div>
                  <div className="text-sm font-semibold text-slate-600">{g.en}</div>
                </a>
                <Speak text={g.kr} />
              </div>
            )
          })}
        </div>
      </div>

      <div className="rounded-[2rem] bg-white/90 p-5 shadow-md sm:p-7">
        <h2 className="mb-3 text-xl font-extrabold text-slate-900">🎨 The colour code (same everywhere)</h2>
        <div className="flex flex-wrap gap-2 font-kr text-2xl">
          <span className="rounded-2xl border-2 border-rose-300 bg-rose-100 px-3 py-1">주어 <span className="font-sans text-sm font-bold">Subject</span></span>
          <span className="rounded-2xl border-2 border-sky-300 bg-sky-100 px-3 py-1"><span className="font-sans text-sm font-bold">Time</span></span>
          <span className="rounded-2xl border-2 border-amber-300 bg-amber-100 px-3 py-1"><span className="font-sans text-sm font-bold">Place</span></span>
          <span className="rounded-2xl border-2 border-emerald-300 bg-emerald-100 px-3 py-1">목적어 <span className="font-sans text-sm font-bold">Object</span></span>
          <span className="rounded-2xl border-2 border-yellow-300 bg-yellow-100 px-3 py-1"><span className="font-sans text-sm font-bold">Key info</span></span>
          <span className="rounded-2xl border-2 border-violet-300 bg-violet-100 px-3 py-1">서술어 <span className="font-sans text-sm font-bold">Predicate</span></span>
        </div>
        <p className="mt-3 text-sm text-slate-600">
          The <span className="rounded-md bg-white px-1.5 font-black text-rose-700 shadow ring-1 ring-slate-200">white pill</span> inside a coloured block is the particle or ending glued to the word.
        </p>
      </div>
    </section>
  )
}
