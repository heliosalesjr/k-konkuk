import { useState } from 'react'
import { Block, Callout, Card, H3, Section, Speak, Word } from '../../components/ui'
import { futureRule, pastRule, presentRule, stemOf } from '../conjugate'
import { TIME_BY_TENSE, VERBS40 } from '../verbs40'

const TENSES = [
  { id: 'pres', kr: '현재', en: 'Present', colour: 'violet', rule: presentRule, field: 'pres' },
  { id: 'past', kr: '과거', en: 'Past', colour: 'rose', rule: pastRule, field: 'past' },
  { id: 'fut', kr: '미래', en: 'Future', colour: 'sky', rule: futureRule, field: 'fut' },
]

const RING = { violet: 'ring-violet-300 bg-violet-50', rose: 'ring-rose-300 bg-rose-50', sky: 'ring-sky-300 bg-sky-50' }
const TEXT = { violet: 'text-violet-900', rose: 'text-rose-900', sky: 'text-sky-900' }

// Pick any of the 40 verbs and watch the three tenses being built, with the rule that fired.
function Conjugator() {
  const [kr, setKr] = useState('먹다')
  const v = VERBS40.find((x) => x.kr === kr)
  const stem = stemOf(v.kr)

  return (
    <div className="space-y-5">
      <div className="max-h-44 overflow-y-auto rounded-3xl bg-slate-50 p-3">
        <div className="flex flex-wrap gap-1.5">
          {VERBS40.map((x) => (
            <button
              key={x.kr}
              type="button"
              onClick={() => setKr(x.kr)}
              className={`rounded-full px-2.5 py-1 font-kr text-lg shadow-sm transition ${x.kr === kr ? 'bg-slate-900 text-white' : 'bg-white text-slate-700 hover:bg-yellow-100'}`}
            >
              {x.kr}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-3xl bg-gradient-to-br from-yellow-50 to-amber-50 p-4 ring-2 ring-amber-200">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Block role="plain" base={v.kr} gloss={v.en} size="md" />
          <span className="text-3xl font-black text-slate-400">−다 →</span>
          <Block role="pred" base={stem} gloss="the stem (어간)" size="md" />
        </div>
        {v.tip && (
          <p className="mt-3 text-center text-sm font-bold text-amber-800">
            ⚠️ {v.tip}
          </p>
        )}
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {TENSES.map((t) => {
          const r = t.rule(v)
          return (
            <div key={t.id} className={`rounded-3xl p-4 ring-2 ${RING[t.colour]}`}>
              <div className="flex items-center justify-between">
                <span className="font-kr text-2xl text-slate-900">{t.kr}</span>
                <span className="text-xs font-extrabold uppercase tracking-wide text-slate-500">{t.en}</span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className={`font-kr text-3xl sm:text-4xl ${TEXT[t.colour]}`}>{v[t.field]}</span>
                <Speak text={v[t.field]} />
              </div>
              <p className="mt-2 rounded-xl bg-white/80 px-2.5 py-1 font-kr text-base text-slate-800">{r.label}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{r.why}</p>
            </div>
          )
        })}
      </div>

      <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
        <p className="mb-2 text-sm font-extrabold text-slate-700">The same verb in the three tenses, from the handout:</p>
        <div className="space-y-1.5">
          {TENSES.map((t) => (
            <div key={t.id} className="flex items-start gap-2">
              <Speak text={v.ex[t.id][0]} />
              <div className="min-w-0">
                <p className="font-kr text-xl leading-snug text-slate-900 sm:text-2xl">{v.ex[t.id][0]}</p>
                <p className="text-xs font-semibold text-slate-500">{v.ex[t.id][1]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Recipe() {
  return (
    <Section id="recipe" icon="🧪" kr="동사 만들기" title="Every Korean verb is built the same way" tone="amber" tag="40 verbos · page 1">
      <Card>
        <H3 sub="Every verb in the dictionary ends in 다. Take the 다 off and you have the stem — the piece every ending is glued onto.">Step 0 · find the stem</H3>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          <Block role="plain" base="먹다" gloss="dictionary form" size="md" />
          <span className="text-4xl font-black text-slate-400">−다</span>
          <Block role="pred" base="먹" gloss="stem · 어간" size="md" />
          <span className="text-4xl font-black text-slate-400">+</span>
          <Block role="plain" base="어요 / 었어요 / 을 거예요" gloss="the tense you want" size="md" />
        </div>
      </Card>

      <Card>
        <H3 sub="Three tenses, three endings. The present and the past make the SAME choice, so if you can do one you can do the other.">The three tenses at a glance</H3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[34rem] border-separate border-spacing-y-2 text-left">
            <thead>
              <tr className="text-xs font-extrabold uppercase tracking-wide text-slate-500">
                <th className="p-2">Tense</th>
                <th className="p-2">Rule</th>
                <th className="p-2">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="rounded-l-2xl bg-violet-100 p-3 font-kr text-2xl text-violet-950">현재<div className="text-xs font-sans font-bold text-violet-700">present</div></td>
                <td className="bg-violet-50 p-3 text-sm font-semibold text-slate-700">
                  last vowel <span className="font-kr text-lg text-blue-700">ㅏ</span> or <span className="font-kr text-lg text-blue-700">ㅗ</span> → <span className="font-kr text-lg text-blue-700">-아요</span><br />
                  any other vowel → <span className="font-kr text-lg text-blue-700">-어요</span><br />
                  <span className="font-kr text-lg text-blue-700">하다</span> → <span className="font-kr text-lg text-blue-700">해요</span>
                </td>
                <td className="rounded-r-2xl bg-violet-50 p-3 font-kr text-xl text-violet-900">앉다 → 앉아요 · 먹다 → 먹어요 · 공부하다 → 공부해요</td>
              </tr>
              <tr>
                <td className="rounded-l-2xl bg-rose-100 p-3 font-kr text-2xl text-rose-950">과거<div className="text-xs font-sans font-bold text-rose-700">past</div></td>
                <td className="bg-rose-50 p-3 text-sm font-semibold text-slate-700">
                  the same choice → <span className="font-kr text-lg text-blue-700">-았어요</span> / <span className="font-kr text-lg text-blue-700">-었어요</span> / <span className="font-kr text-lg text-blue-700">했어요</span>
                </td>
                <td className="rounded-r-2xl bg-rose-50 p-3 font-kr text-xl text-rose-900">앉았어요 · 먹었어요 · 공부했어요</td>
              </tr>
              <tr>
                <td className="rounded-l-2xl bg-sky-100 p-3 font-kr text-2xl text-sky-950">미래<div className="text-xs font-sans font-bold text-sky-700">future</div></td>
                <td className="bg-sky-50 p-3 text-sm font-semibold text-slate-700">
                  stem with <span className="font-kr text-lg text-blue-700">받침</span> → <span className="font-kr text-lg text-blue-700">-을 거예요</span><br />
                  stem without <span className="font-kr text-lg text-blue-700">받침</span> → <span className="font-kr text-lg text-blue-700">-ㄹ 거예요</span>
                </td>
                <td className="rounded-r-2xl bg-sky-50 p-3 font-kr text-xl text-sky-900">먹을 거예요 · 갈 거예요 · 공부할 거예요</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <Callout kind="tip" title="Notice the difference between the two questions">
            <p>
              Present and past look at the <b>last vowel</b> of the stem (ㅏ/ㅗ or not). The future looks at something else entirely: whether the stem has a{' '}
              <span className="font-kr text-lg text-blue-700">받침</span> at the bottom. Two different questions — ask the right one.
            </p>
          </Callout>
        </div>
      </Card>

      <Card>
        <H3 sub="When the stem ends in a vowel and the ending starts with a vowel, the two melt together. This is why 가다 is 가요 and not 가아요.">Contractions · vowel + vowel</H3>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            ['ㅏ + 아 → ㅏ', '가다 → 가요', 'not 가아요'],
            ['ㅗ + 아 → ㅘ', '오다 → 와요 · 보다 → 봐요', ''],
            ['ㅜ + 어 → ㅝ', '배우다 → 배워요 · 주다 → 줘요', ''],
            ['ㅣ + 어 → ㅕ', '마시다 → 마셔요 · 기다리다 → 기다려요', ''],
            ['ㅐ / ㅔ stay as they are', '보내다 → 보내요', 'the 어 just disappears'],
            ['ㅟ does NOT contract', '쉬다 → 쉬어요', 'never 셔요'],
          ].map(([rule, ex, note]) => (
            <div key={rule} className="rounded-2xl bg-slate-50 p-3">
              <p className="font-kr text-lg text-slate-700">{rule}</p>
              <p className="font-kr text-2xl text-violet-900">{ex}</p>
              {note && <p className="text-xs font-semibold text-slate-500">{note}</p>}
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <H3 sub="Three groups break the normal pattern. They are the ones the exam loves.">Irregulars you have already met</H3>
        <div className="grid gap-3 sm:grid-cols-3">
          <Callout kind="warn" title="ㄷ 불규칙 — ㄷ becomes ㄹ">
            <p className="font-kr text-lg">듣다 → 들어요 · 걷다 → 걸을 거예요</p>
            <p className="mt-1 text-xs font-bold text-rose-800">But 받다 and 닫다 are REGULAR: 받아요, 닫아요.</p>
          </Callout>
          <Callout kind="warn" title="ㄹ stem — no 을 in the future">
            <p className="font-kr text-lg">살다 → 살 거예요 · 놀다 → 놀 거예요</p>
            <p className="mt-1 text-xs font-bold text-rose-800">The ㄹ is already there, so nothing is added.</p>
          </Callout>
          <Callout kind="warn" title="ㅡ 탈락 — the ㅡ drops">
            <p className="font-kr text-lg">쓰다 → 써요 · 바쁘다 → 바빠요</p>
            <p className="mt-1 text-xs font-bold text-rose-800">The new vowel copies the syllable before it.</p>
          </Callout>
        </div>
        <p className="mt-3 text-sm text-slate-600">
          All four irregular families get their own page:{' '}
          <a href="irregulars.html" className="font-bold underline decoration-2 underline-offset-2 hover:text-violet-800">
            불규칙 · 관형형 →
          </a>
        </p>
      </Card>

      <Card>
        <H3 sub="Tap any of the 40 verbs. The three tenses are built in front of you, with the rule that produced each one.">🎛️ The conjugator</H3>
        <Conjugator />
      </Card>

      <Card>
        <H3 sub="A time word tells the listener which tense to expect. The handout pairs these with each tense.">Time words that match each tense</H3>
        <div className="grid gap-3 sm:grid-cols-3">
          {TENSES.map((t) => (
            <div key={t.id} className={`rounded-3xl p-4 ring-2 ${RING[t.colour]}`}>
              <p className="font-kr text-2xl text-slate-900">{t.kr}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {TIME_BY_TENSE[t.id].map(([kr, en]) => (
                  <span key={kr} className="rounded-xl bg-white px-2 py-1 shadow-sm">
                    <Word text={kr} className="text-lg text-slate-900" />
                    <span className="ml-1 text-xs font-semibold text-slate-500">{en}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </Section>
  )
}
