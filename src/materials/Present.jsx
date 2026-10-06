import { useState } from 'react'
import { Block, Callout, Card, H3, Line, Section, Sentence, Speak, Word } from '../components/ui'
import { ADJECTIVES, HA_NOUNS, VERBS } from './data'

// Shows the polite present form next to the dictionary form, and lets the learner switch tenses later.
function VerbList() {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {VERBS.map((v) => (
        <div key={v.kr} className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 p-3">
          <div className="min-w-0">
            <Word text={v.kr} className="text-2xl text-slate-900" />
            <div className="text-xs font-semibold text-slate-500">{v.en}</div>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-kr text-2xl text-violet-800">{v.pres}</span>
            <Speak text={v.pres} />
          </div>
        </div>
      ))}
    </div>
  )
}

function HaVerbs() {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {HA_NOUNS.map((n) => (
        <div key={n.kr} className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 p-3">
          <div className="min-w-0">
            <span className="font-kr text-2xl text-slate-900">
              {n.kr}
              <b className="rounded-md bg-yellow-200 px-1 text-yellow-900">{n.slot.endsWith('을') ? '을' : '를'}</b>
            </span>
            <div className="text-xs font-semibold text-slate-500">{n.en}</div>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-kr text-2xl text-violet-800">{n.kr}{n.slot.endsWith('을') ? '을' : '를'} 해요</span>
          </div>
        </div>
      ))}
    </div>
  )
}

// Interactive: tap a word, see it in a sentence. Uses only the book's example sentences.
const CHOICES = [
  { id: 'a', kr: '저는 오늘 친구를 만나요.', en: 'I meet a friend today.' },
  { id: 'b', kr: '저는 오늘 밥을 먹어요.', en: 'I eat a meal today.' },
  { id: 'c', kr: '텔레비전을 봐요.', en: 'I watch TV.' },
]

export default function Present() {
  const [open, setOpen] = useState(null)
  return (
    <Section id="present" icon="🕒" kr="현재 시제" title="Present tense — what I do now · 해요 ending" tone="sky" tag="문법 및 표현 1 · 어휘 1–2">
      <Card>
        <H3 sub="Take the dictionary form (-다), remove 다, then add the polite ending.">The recipe</H3>
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          <Block role="pred" base="먹" gloss="verb stem (remove 다)" size="md" />
          <span className="text-4xl font-black text-slate-400">+</span>
          <Block role="pred" base="아 / 어 / 해" gloss="by the last vowel" size="md" />
          <span className="text-4xl font-black text-slate-400">+</span>
          <Block role="plain" base="요" gloss="polite ending" size="md" />
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <Callout kind="rule" title="ㅏ or ㅗ → 아요">
            <p className="font-kr text-lg">만나다 → 만나<b>요</b>, 자다 → 자<b>요</b>, 오다 → 와<b>요</b></p>
          </Callout>
          <Callout kind="rule" title="Anything else → 어요">
            <p className="font-kr text-lg">먹다 → 먹<b>어요</b>, 읽다 → 읽<b>어요</b>, 쉬다 → 쉬<b>어요</b></p>
          </Callout>
          <Callout kind="rule" title="-하다 → 해요">
            <p className="font-kr text-lg">공부하다 → 공부<b>해요</b>, 일하다 → 일<b>해요</b></p>
          </Callout>
        </div>
        <div className="mt-4 space-y-3">
          <Callout kind="note" title="Irregular ones (you will see them in the book)">
            <p>
              <span className="font-kr text-lg">마시다 → 마셔요</span>, <span className="font-kr text-lg">보다 → 봐요</span>, <span className="font-kr text-lg">기다리다 → 기다려요</span>, <span className="font-kr text-lg">듣다 → 들어요</span>, <span className="font-kr text-lg">가르치다 → 가르쳐요</span>. Learn them as words, the book uses these forms.
            </p>
          </Callout>
        </div>
      </Card>

      <Card>
        <H3 sub="Tap 🔊 to hear each verb. Pronunciation is the one you hear from the book.">Verbs from the book (어휘 1)</H3>
        <VerbList />
      </Card>

      <Card>
        <H3 sub="Noun + 을/를 + 하다. The noun gets the particle, 하다 becomes 해요.">Verbs with 하다 (어휘 2)</H3>
        <HaVerbs />
        <p className="mt-3 text-sm text-slate-600">
          Pattern from the book: <span className="font-kr text-lg">숙제<b>를</b> 해요</span> (I do homework), <span className="font-kr text-lg">운동<b>을</b> 해요</span> (I exercise).
        </p>
      </Card>

      <Card>
        <H3 sub="Read the dialogue, then tap a card to see the sentence in full.">From the book: 말하기 · 문법 및 표현 1</H3>
        <div className="grid gap-2">
          {CHOICES.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setOpen(open === c.id ? null : c.id)}
              className={`rounded-2xl p-3 text-left shadow-sm ring-1 transition ${open === c.id ? 'bg-violet-100 ring-violet-300' : 'bg-white ring-slate-200 hover:bg-yellow-50'}`}
            >
              <span className="font-kr text-2xl text-slate-900">{open === c.id ? c.kr : '👀 Tap to show'}</span>
              {open === c.id && <div className="text-sm font-semibold text-slate-600">{c.en}</div>}
            </button>
          ))}
        </div>

        <div className="mt-5 space-y-2">
          <Line kr="가: 조세핀 씨, 오늘 뭐 해요?" en="Josephine, what are you doing today?" />
          <Line kr="나: 저는 오늘 친구를 만나요. 그리고 커피를 마셔요. 밍 씨는요?" en="I meet a friend today. And I drink coffee. What about you, Ming?" />
          <Line kr="가: 저는 오늘 밥을 먹어요. 그리고 한국어를 공부해요." en="I eat a meal today. And I study Korean." />
        </div>

        <div className="mt-5 rounded-3xl bg-slate-50 p-4">
          <p className="mb-3 text-sm font-extrabold text-slate-700">Build a sentence: subject + time + object + verb</p>
          <Sentence
            size="md"
            parts={[
              { role: 'subj', base: '저', particle: '는', gloss: 'I' },
              { role: 'time', base: '오늘', gloss: 'today' },
              { role: 'obj', base: '친구', particle: '를', gloss: 'a friend' },
              { role: 'pred', base: '만나요.', gloss: 'meet' },
            ]}
          />
        </div>
      </Card>

      <Card>
        <H3 sub="The book uses 누구하고 같이 (with whom) and 선생님하고 같이 (together with the teacher).">Asking and answering with 하고 같이</H3>
        <div className="space-y-2">
          <Line kr="가: 누구하고 같이 한국어를 공부해요?" en="Who do you study Korean with?" />
          <Line kr="나: 선생님하고 같이 한국어를 공부해요." en="I study Korean with the teacher." />
          <Line kr="가: 텔레비전을 봐요. 드라마를 봐요. 무엇을 봐요?" en="I watch TV. I watch a drama. What do you watch?" />
          <Line kr="나: 저는 다큐멘터리를 봐요." en="I watch documentaries. (extra example, same pattern)" />
        </div>
        <p className="mt-3 text-xs text-slate-500">The last line is an extra example that uses the same pattern as the book's 드라마를 봐요.</p>
      </Card>

      <Card>
        <H3 sub="The same verb with a noun or 누구 (who) and 를 or 을.">Who or what?</H3>
        <div className="space-y-2">
          <Line kr="가: 누구를 만나요?" en="Who do you meet?" />
          <Line kr="나: 밍을 만나요." en="I meet Ming." />
          <Line kr="가: 누구를 기다려요?" en="Who are you waiting for?" />
          <Line kr="나: 밍을 기다려요." en="I'm waiting for Ming." />
        </div>
      </Card>

      <Card>
        <H3 sub="Adjectives use the same endings. They describe, they don't do.">Adjectives in the present (형용사)</H3>
        <div className="grid gap-2 sm:grid-cols-2">
          {ADJECTIVES.map((a) => (
            <div key={a.kr} className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 p-3">
              <div className="min-w-0">
                <Word text={a.kr} className="text-2xl text-slate-900" />
                <div className="text-xs font-semibold text-slate-500">{a.en}</div>
              </div>
              <span className="font-kr text-2xl text-emerald-800">{a.pres}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-2">
          <Line kr="가: 어때요?" en="How is it?" />
          <Line kr="가: 떡볶이가 매워요?" en="Is tteokbokki spicy?" />
          <Line kr="나: 네, 매워요." en="Yes, it's spicy." />
          <Line kr="가: 한국어 공부가 어때요?" en="How is studying Korean?" />
        </div>
      </Card>
    </Section>
  )
}
