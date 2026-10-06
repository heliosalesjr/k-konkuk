import { Block, Callout, Card, H3, Line, Section, Sentence, Speak, Word } from '../components/ui'
import { ADJECTIVES, VERBS } from './data'

// The past-tense sentences are from the worksheet (students' answers), with the forms corrected.
const WORKSHEET = [
  { kr: '요코 씨는 오늘 아침에 수영장에서 수영했어요.', en: 'Yoko swam at the pool this morning.' },
  { kr: '제임스 씨는 어제 학교에서 컴퓨터를 배웠어요.', en: 'James learned computers at school yesterday.' },
  { kr: '왕명 씨는 어제 명동에서 친구를 만났어요.', en: 'Wang Myeong met a friend in Myeongdong yesterday.' },
  { kr: '리나 씨는 지난 주말에 백화점에서 쇼핑했어요.', en: 'Rina went shopping at the department store last weekend.' },
  { kr: '사토 씨는 지난 주말에 기숙사에서 음악을 들었어요.', en: 'Sato listened to music at the dormitory last weekend.' },
  { kr: '잉가 씨는 지난 주말에 술집에서 술을 마셨어요.', en: 'Inga drank alcohol at a bar last weekend.' },
  { kr: '민수 씨는 어제 오후에 학교 운동장에서 축구를 했어요.', en: 'Minsu played soccer at the school field yesterday afternoon.' },
  { kr: '제니퍼 씨는 오늘 오전에 도서관에서 공부했어요.', en: 'Jennifer studied at the library this morning.' },
  { kr: '비비 씨는 지난 주말에 극장에서 영화를 봤어요.', en: 'Bibi watched a movie at the cinema last weekend.' },
  { kr: '샤오밍 씨는 어제 저녁에 서울에서 갔어요.', en: 'Xiaoming went to Seoul yesterday evening.' },
]

// Present vs past, side by side, using the same verbs as the book.
const PAIRS = ['먹다', '마시다', '만나다', '쉬다', '공부하다', '사다', '보다']

function TenseCompare() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[22rem] border-separate border-spacing-y-2 text-center">
        <thead>
          <tr className="text-sm font-extrabold text-slate-500">
            <th className="p-2">Verb</th>
            <th className="p-2 text-violet-700">Now (present)</th>
            <th className="p-2 text-rose-700">Before (past)</th>
          </tr>
        </thead>
        <tbody>
          {PAIRS.map((kr) => {
            const v = VERBS.find((x) => x.kr === kr)
            return (
              <tr key={kr}>
                <td className="rounded-l-2xl bg-slate-50 p-3">
                  <Word text={v.kr} className="text-2xl text-slate-900" />
                  <div className="text-xs font-semibold text-slate-500">{v.en}</div>
                </td>
                <td className="bg-violet-50 p-3 font-kr text-2xl text-violet-900">{v.pres}</td>
                <td className="rounded-r-2xl bg-rose-50 p-3 font-kr text-2xl text-rose-900">{v.past}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default function Past() {
  return (
    <Section id="past" icon="⏪" kr="과거 시제" title="Past tense — what I did · 았/었/했어요" tone="orange" tag="문법 및 표현 2 · 워크북 68–69쪽">
      <Card>
        <H3 sub="Look at the LAST vowel of the stem, the same way as the present tense.">The recipe</H3>
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          <Block role="pred" base="보" gloss="verb stem (remove 다)" size="md" />
          <span className="text-4xl font-black text-slate-400">+</span>
          <Block role="pred" base="았 / 었 / 했" gloss="by the last vowel" size="md" />
          <span className="text-4xl font-black text-slate-400">+</span>
          <Block role="plain" base="어요" gloss="polite ending" size="md" />
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <Callout kind="rule" title="ㅏ or ㅗ → 았어요">
            <p className="font-kr text-lg">가다 → 가<b>았어요</b> → <b>갔어요</b></p>
            <p className="font-kr text-lg">보다 → 보<b>았어요</b> → <b>봤어요</b></p>
          </Callout>
          <Callout kind="rule" title="Anything else → 었어요">
            <p className="font-kr text-lg">먹다 → 먹<b>었어요</b></p>
            <p className="font-kr text-lg">쉬다 → 쉬<b>었어요</b></p>
          </Callout>
          <Callout kind="rule" title="-하다 → 했어요">
            <p className="font-kr text-lg">공부하다 → 공부<b>했어요</b></p>
            <p className="font-kr text-lg">일하다 → 일<b>했어요</b></p>
          </Callout>
        </div>
        <div className="mt-4">
          <Callout kind="tip" title="Stems that change shape (from the handout)">
            <p className="font-kr text-lg">마시다 → 마시 + 었어요 → <b>마셨어요</b> · 가르치다 → 가르치 + 었어요 → <b>가르쳤어요</b> · 기다리다 → 기다리 + 었어요 → <b>기다렸어요</b></p>
            <p className="font-kr text-lg">보내다 → 보내 + 었어요 → 었 is dropped → <b>보냈어요</b> · 쓰다 → the — is dropped, then ㅓ is added → <b>썼어요</b></p>
          </Callout>
        </div>
      </Card>

      <Card>
        <H3 sub="Some verbs break the normal rule. Learn them as words.">Irregular forms from the handout</H3>
        <div className="grid gap-3 sm:grid-cols-2">
          <Line kr="듣다 → 들었어요" en="listen → listened (ㄷ irregular: ㄷ becomes ㄹ)" />
          <Line kr="춥다 → 추웠어요" en="cold → was cold (ㅂ irregular: ㅂ becomes 우)" />
          <Line kr="쉬다 → 쉬었어요 (not 셨어요)" en="rest → rested (no contraction with ㅟ)" />
          <Line kr="배우다 → 배웠어요" en="learn → learned (배우었어요 is rarely used)" />
          <Line kr="주다 → 줬어요" en="give → gave (more common than 주었어요)" />
          <Line kr="오다 → 왔어요" en="come → came" />
        </div>
      </Card>

      <Card>
        <H3 sub="Read the present next to the past. Same verb, only the ending changes.">Now vs before</H3>
        <TenseCompare />
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          <Line kr="저는 오늘 밥을 먹어요." en="I eat a meal today. (present)" />
          <Line kr="저는 어제 밥을 먹었어요." en="I ate a meal yesterday. (past)" />
          <Line kr="저는 지금 커피를 마셔요." en="I drink coffee now. (present)" />
          <Line kr="저는 어제 커피를 마셨어요." en="I drank coffee yesterday. (past)" />
        </div>
        <p className="mt-3 text-xs text-slate-500">The 저는 어제… lines are extra examples, built with the same verbs and pattern as the book.</p>
      </Card>

      <Card>
        <H3 sub="Tap 🔊 to hear each one. These are the worksheet sentences, corrected.">From the worksheet · 보기와 같이 문장을 만드세요</H3>
        <div className="space-y-2">
          {WORKSHEET.map((s) => (
            <Line key={s.kr} kr={s.kr} en={s.en} />
          ))}
        </div>
        <div className="mt-5 rounded-3xl bg-slate-50 p-4">
          <p className="mb-3 text-sm font-extrabold text-slate-700">Build a past sentence: time + place + verb</p>
          <Sentence
            size="md"
            parts={[
              { role: 'subj', base: '왕명', particle: '씨는', gloss: 'Wang Myeong' },
              { role: 'time', base: '어제', gloss: 'yesterday' },
              { role: 'place', base: '명동', particle: '에서', gloss: 'in Myeongdong' },
              { role: 'obj', base: '친구', particle: '를', gloss: 'a friend' },
              { role: 'pred', base: '만났어요.', gloss: 'met' },
            ]}
          />
        </div>
      </Card>

      <Card>
        <H3 sub="Time words (오늘 아침, 어제 저녁…) take 에 in the past sentences.">Time phrases with 에</H3>
        <Callout kind="note" title="Watch the 에 and 에서">
          <p>
            <span className="font-kr text-lg">어제 저녁<b>에</b></span> (in the evening, yesterday) and <span className="font-kr text-lg">지난 주말<b>에</b></span> (last weekend) use 에 for time. <span className="font-kr text-lg">학교<b>에서</b></span> and <span className="font-kr text-lg">서울<b>에서</b></span> use 에서 for the place where the action happens.
          </p>
        </Callout>
      </Card>

      <Card>
        <H3 sub="Adjectives get the past too. Ask how it was.">Adjectives in the past</H3>
        <div className="grid gap-2 sm:grid-cols-2">
          {ADJECTIVES.map((a) => (
            <div key={a.kr} className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 p-3">
              <div className="min-w-0">
                <Word text={a.kr} className="text-2xl text-slate-900" />
                <div className="text-xs font-semibold text-slate-500">{a.en}</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-kr text-2xl text-rose-800">{a.past}</span>
                <Speak text={a.past} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-2">
          <Line kr="가: 어제 시험이 어땠어요?" en="How was the exam yesterday?" />
          <Line kr="나: 시험이 어려웠어요." en="The exam was difficult." />
          <Line kr="가: 어제 날씨가 더웠어요? 추웠어요?" en="Was the weather hot or cold yesterday?" />
          <Line kr="가: 한국에서 여행을 했어요? 여행이 어땠어요?" en="Did you travel in Korea? How was the trip?" />
        </div>
      </Card>
    </Section>
  )
}
