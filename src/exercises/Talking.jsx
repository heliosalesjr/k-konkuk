import { useState } from 'react'
import { Callout, Card, H3, Line, Section, Speak } from '../components/ui'
import { Hi } from './shared'

// The 말하기 worksheet "친구하고 같이 이야기하세요!" — 25 questions to ask a partner.
// Every answer below is written with ONLY what the course has covered so far
// (present, past, adjectives, 에/에서, times and dates, -고 / -지만 / -아어서 / -고 싶다),
// using the same person the 쓰기 texts use: 헬리오, a Brazilian student at 건국대.

const GROUPS = [
  { id: 'all', kr: '전체', en: 'All 25' },
  { id: 'time', kr: '시간 · 날짜', en: 'Time & dates' },
  { id: 'place', kr: '장소', en: 'Places' },
  { id: 'thing', kr: '사물 · 위치', en: 'Things & position' },
  { id: 'desc', kr: '묘사', en: 'Describing' },
  { id: 'plan', kr: '사람 · 약속', en: 'People & plans' },
]

const QUESTIONS = [
  {
    n: 1,
    g: 'time',
    kr: '지금 몇 시예요?',
    en: 'What time is it now?',
    a: [
      { kr: '지금 오후 세 시 사십 분이에요.', en: "It's 3:40 p.m." },
      { kr: '지금 오전 아홉 시 반이에요.', en: "It's 9:30 a.m." },
    ],
    why: '시 takes NATIVE numbers (한 시, 두 시, 세 시…), 분 takes SINO numbers (사십 분). 오전/오후 goes first, and 반 = half past.',
  },
  {
    n: 2,
    g: 'time',
    kr: '오늘이 몇 월 며칠이에요?',
    en: "What's the date today?",
    a: [{ kr: '오늘은 시월 십이 일이에요.', en: 'Today is October 12th.' }],
    why: 'The question asks with 이, the answer states with 은 — 오늘은. Months are Sino + 월, and two of them are irregular: 6월 = 유월, 10월 = 시월 (never 육월 / 십월).',
  },
  {
    n: 3,
    g: 'desc',
    kr: '한국어가 어때요?',
    en: "How's Korean (for you)?",
    a: [{ kr: '한국어가 조금 어렵지만 재미있어요. 그래서 매일 공부해요.', en: 'Korean is a little difficult, but fun. So I study every day.' }],
    why: 'The thing you describe takes 이/가, never 은/는. 어렵다 keeps its ㅂ before 지만 (어렵지만) and only loses it before a vowel ending: 어려워요.',
  },
  {
    n: 4,
    g: 'place',
    kr: '여기가 어디예요? 여기에서 무엇을 해요?',
    en: 'Where is this? What do you do here?',
    a: [{ kr: '여기는 건국대학교 교실이에요. 여기에서 한국어를 공부해요.', en: 'This is a classroom at Konkuk University. I study Korean here.' }],
    why: '여기가 asks, 여기는 answers. Then the particle flips: 에서, because something HAPPENS here. 무엇을 is 뭘 in speech.',
  },
  {
    n: 5,
    g: 'place',
    kr: '어디에 자주 가요? 어디에 가끔 가요?',
    en: 'Where do you go often? Where do you go sometimes?',
    a: [{ kr: '저는 도서관에 자주 가요. 그리고 백화점에 가끔 가요.', en: 'I often go to the library. And I sometimes go to the department store.' }],
    why: '가다 = a destination, so 에. The frequency word sits immediately before the verb: 자주 가요, 가끔 가요 — never at the head of the sentence.',
  },
  {
    n: 6,
    g: 'place',
    kr: '어디에서 살아요? 거기가 어때요?',
    en: 'Where do you live? What is it like there?',
    a: [{ kr: '저는 기숙사에서 살아요. 기숙사가 작지만 깨끗하고 좋아요.', en: 'I live in the dormitory. It is small but clean and nice.' }],
    why: '살다 takes 에서 — living is something you DO in a place. In the second half the dorm stops being a location and becomes the subject, so it switches to 이/가.',
  },
  {
    n: 7,
    g: 'thing',
    kr: 'OO 씨의 가방 안에 뭐가 있어요? (2개↑)',
    en: "What's in your bag? (2 or more)",
    a: [{ kr: '제 가방 안에 책하고 휴대폰이 있어요. 그리고 지갑도 있어요.', en: 'In my bag there is a book and a phone. And a wallet too.' }],
    why: '의 = ’s, and 저의 shrinks to 제. 있다 takes 이/가 for the thing that exists. 하고 joins two nouns; 도 (also) REPLACES 이/가 — 지갑도, never 지갑이도.',
  },
  {
    n: 8,
    g: 'time',
    kr: '보통 몇 시에 일어나요?',
    en: 'What time do you usually get up?',
    a: [{ kr: '저는 보통 아침 일곱 시에 일어나요. 그렇지만 주말에는 아홉 시에 일어나요.', en: 'I usually get up at 7 in the morning. But on weekends I get up at 9.' }],
    why: 'Clock times always take 에: 일곱 시에. 보통 goes right before the verb phrase. 주말에는 = 주말에 + 는, the contrast 는 stacked on top of 에.',
  },
  {
    n: 9,
    g: 'thing',
    kr: '교실 안에 무엇이 어디에 있어요? (3개↑)',
    en: 'What is where inside the classroom? (3 or more)',
    a: [{ kr: '칠판이 앞에 있어요. 책상이 가운데에 있어요. 그리고 시계가 칠판 위에 있어요.', en: 'The board is at the front. The desks are in the middle. And the clock is above the board.' }],
    why: 'Position words are nouns, so they take 에: 앞에, 뒤에, 옆에, 위에, 아래에, 안에. To anchor them to something, chain the nouns with no particle between: 칠판 위에.',
  },
  {
    n: 10,
    g: 'place',
    kr: '어제 어디에 갔어요? 거기에서 뭐 했어요?',
    en: 'Where did you go yesterday? What did you do there?',
    a: [{ kr: '어제 학교 앞 카페에 갔어요. 카페에서 친구를 만났어요. 그리고 커피를 마셨어요.', en: 'Yesterday I went to the café in front of the school. I met a friend at the café. And I drank coffee.' }],
    why: 'The 에 / 에서 pair in one breath — go TO the place, then do something AT it. 어제 already marks the past, but the verbs still have to carry 았/었: 갔어요, 만났어요.',
  },
  {
    n: 11,
    g: 'plan',
    kr: '주말에 같이 운동할까요?',
    en: 'Shall we exercise together this weekend?',
    a: [
      { tag: '네', kr: '네, 좋아요! 주말에 공원에서 같이 운동해요.', en: "Yes, great! Let's exercise together at the park on the weekend." },
      { tag: '아니요', kr: '미안해요. 주말에 조금 바빠요. 다음 주에 같이 운동해요.', en: "Sorry, I'm a bit busy this weekend. Let's exercise together next week." },
    ],
    why: '-(으)ㄹ까요? = "shall we?". You do NOT answer it with -ㄹ까요 — you answer with the plain polite form, which doubles as "let’s": 운동해요.',
    neu: true,
  },
  {
    n: 12,
    g: 'plan',
    kr: 'OO 씨는 생일에 뭐 하고 싶어요?',
    en: 'What do you want to do on your birthday?',
    a: [{ kr: '저는 생일에 친구하고 같이 삼겹살을 먹고 싶어요. 그리고 노래방에 가고 싶어요.', en: 'On my birthday I want to eat samgyeopsal with friends. And I want to go to a noraebang.' }],
    why: '-고 싶다 attaches to the verb STEM with no tense: 먹 + 고 싶어요. 생일에 — a day on the calendar takes 에, exactly like a clock time.',
  },
  {
    n: 13,
    g: 'desc',
    kr: '무슨 과일을 좋아해요?',
    en: 'What fruit do you like?',
    a: [{ kr: '저는 딸기를 좋아해요. 딸기가 달고 맛있어요.', en: 'I like strawberries. They are sweet and tasty.' }],
    why: '무슨 + noun = "what kind of ~". Watch the particle flip: 좋아하다 is a VERB and takes 을/를, but 좋다 is an ADJECTIVE and takes 이/가 — 딸기가 좋아요.',
  },
  {
    n: 14,
    g: 'desc',
    kr: '교실이 넓어요?',
    en: 'Is the classroom spacious?',
    a: [
      { tag: '네', kr: '네, 교실이 넓어요. 그리고 깨끗해요.', en: 'Yes, the classroom is spacious. And it is clean.' },
      { tag: '아니요', kr: '아니요, 교실이 넓지 않아요. 조금 좁아요.', en: 'No, the classroom is not spacious. It is a bit narrow.' },
    ],
    why: 'A yes/no question is answered by repeating the adjective, not by 네 alone. Two ways to say no: 넓지 않아요 or 안 넓어요 — both correct, the first sounds a little more written.',
  },
  {
    n: 15,
    g: 'desc',
    kr: '라면이 어때요?',
    en: 'How is ramyeon?',
    a: [{ kr: '라면이 조금 맵지만 정말 맛있어요. 그리고 싸요. 그래서 자주 먹어요.', en: 'Ramyeon is a bit spicy but really tasty. And cheap. So I eat it often.' }],
    why: '어때요? wants an adjective, so give two and link them with 지만. 맵다 is ㅂ-irregular: 맵 + 지만 → 맵지만, but 맵 + 어요 → 매워요.',
  },
  {
    n: 16,
    g: 'desc',
    kr: '무슨 간식을 좋아해요? 그 간식이 어때요?',
    en: 'What snack do you like? What is that snack like?',
    a: [{ kr: '저는 떡볶이를 좋아해요. 떡볶이가 조금 맵지만 싸고 맛있어요.', en: 'I like tteokbokki. It is a little spicy, but cheap and tasty.' }],
    why: '그 = "that one we just mentioned", so 그 간식 points back to your own answer. Three adjectives in a row: 지만 for the contrast, 고 for the list.',
  },
  {
    n: 17,
    g: 'thing',
    kr: '이것은 / 그것은 / 저것은 뭐예요?',
    en: 'What is this / that / that over there?',
    a: [{ kr: '이것은 제 휴대폰이에요. 그것은 선생님의 책이에요. 저것은 시계예요.', en: 'This is my phone. That is the teacher’s book. That one over there is a clock.' }],
    why: '이것 = next to me, 그것 = next to you, 저것 = away from both of us. In speech they shrink to 이건 / 그건 / 저건. 시계 has no 받침 → 예요; 휴대폰 has one → 이에요.',
  },
  {
    n: 18,
    g: 'plan',
    kr: '방학에 어디에 가고 싶어요?',
    en: 'Where do you want to go during the vacation?',
    a: [{ kr: '저는 방학에 부산에 가고 싶어요. 부산에서 바다를 보고 싶어요.', en: 'During the vacation I want to go to Busan. I want to see the sea in Busan.' }],
    why: 'Both 에 do different jobs in one answer: 방학에 = when, 부산에 = where to. Then the second sentence switches to 부산에서, because now something happens there.',
  },
  {
    n: 19,
    g: 'time',
    kr: '한국어 수업이 몇 시부터 몇 시까지 있어요?',
    en: 'From what time to what time is your Korean class?',
    a: [{ kr: '한국어 수업이 오전 아홉 시부터 오후 한 시까지 있어요.', en: 'My Korean class is from 9 a.m. to 1 p.m.' }],
    why: '부터 … 까지 = from … to. They replace 에 — never say 아홉 시에부터. Note 한 시, 두 시: the native numbers 하나/둘 drop a letter before 시.',
    neu: true,
  },
  {
    n: 20,
    g: 'place',
    kr: '한국에서 어디에서 쇼핑했어요? 뭘 샀어요? 그게 어땠어요?',
    en: 'Where in Korea did you go shopping? What did you buy? How was it?',
    a: [{ kr: '저는 명동에서 쇼핑했어요. 거기에서 옷을 샀어요. 옷이 예쁘고 비싸지 않았어요.', en: 'I went shopping in Myeongdong. I bought clothes there. They were pretty and not expensive.' }],
    why: 'Two 에서 in a row is normal — the big place, then the exact one. 뭘 = 무엇을, 그게 = 그것이. 어땠어요 is simply the past of 어때요.',
  },
  {
    n: 21,
    g: 'time',
    kr: '언제 한국에 왔어요?',
    en: 'When did you come to Korea?',
    a: [{ kr: '저는 작년 구월에 한국에 왔어요. 그래서 지금 일 년 됐어요.', en: 'I came to Korea last September. So it has been a year now.' }],
    why: '언제 itself never takes 에, but the answer does: 구월에. 오다 → 와요 → 왔어요. If the second sentence is too much, just stop after 왔어요.',
  },
  {
    n: 22,
    g: 'plan',
    kr: '지금 바빠요? 우리 같이 놀까요?',
    en: 'Are you busy now? Shall we hang out together?',
    a: [
      { tag: '네', kr: '아니요, 안 바빠요. 좋아요! 우리 같이 놀아요.', en: "No, I'm not busy. Great! Let's hang out." },
      { tag: '아니요', kr: '미안해요. 지금 조금 바빠요. 숙제가 많아서 바빠요.', en: "Sorry, I'm a bit busy now. I'm busy because I have a lot of homework." },
    ],
    why: '바쁘다 is 으-irregular: 바쁘 + 아요 → 바빠요. 안 goes immediately before the verb. 놀까요? is answered with 놀아요, the same "let’s" form as in question 11.',
  },
  {
    n: 23,
    g: 'plan',
    kr: '한국 친구가 있어요? 한국 친구가 많아요?',
    en: 'Do you have Korean friends? Do you have many?',
    a: [{ kr: '네, 한국 친구가 있어요. 그렇지만 많지 않아요. 친구가 두 명 있어요.', en: "Yes, I have Korean friends. But not many. I have two friends." }],
    why: 'Korean has no verb "to have" here — it says "a friend EXISTS", so 있다 and 많다 both take 이/가. People are counted with 명 and native numbers: 한 명, 두 명, 세 명.',
  },
  {
    n: 24,
    g: 'desc',
    kr: 'OO 씨의 방이 너무 더러워요? 왜요?',
    en: 'Is your room too messy? Why?',
    a: [
      { tag: '아니요', kr: '아니요, 제 방이 더럽지 않아요. 저는 주말에 청소해요.', en: 'No, my room is not messy. I clean on weekends.' },
      { tag: '네', kr: '네, 제 방이 조금 더러워요. 숙제가 많아서 청소하지 않았어요.', en: "Yes, my room is a bit messy. I didn't clean because I had a lot of homework." },
    ],
    why: '너무 = too much (a complaint), 정말 = really (neutral). 왜요? is answered with -아/어서 or 그래서. 더럽다 is ㅂ-irregular → 더러워요.',
  },
  {
    n: 25,
    g: 'plan',
    kr: '여기는 식당이에요. 뭘 시킬까요?',
    en: "This is a restaurant. What shall we order?",
    a: [
      { kr: '김치찌개를 시킬까요? 김치찌개가 맵지만 맛있어요.', en: 'Shall we order kimchi stew? It is spicy but tasty.' },
      { kr: '저는 비빔밥을 먹고 싶어요. 우리 비빔밥하고 불고기를 시켜요.', en: "I want to eat bibimbap. Let's order bibimbap and bulgogi." },
    ],
    why: '시키다 = to order food (주문하다 in writing). You can bounce the question straight back with -(으)ㄹ까요?, or state what you want with -고 싶다 and then propose with 시켜요.',
    neu: true,
  },
]

const NEW_GRAMMAR = [
  { kr: '-(으)ㄹ까요?', en: 'Shall we ~?', ex: '같이 운동할까요? → 네, 좋아요. 같이 운동해요.', q: '11 · 22 · 25' },
  { kr: 'N부터 N까지', en: 'from ~ to ~', ex: '아홉 시부터 한 시까지 수업이 있어요.', q: '19' },
  { kr: '이것 / 그것 / 저것', en: 'this / that / that over there', ex: '이것은 제 휴대폰이에요.', q: '17' },
  { kr: '앞 · 뒤 · 옆 · 위 · 아래 · 안', en: 'position words + 에', ex: '시계가 칠판 위에 있어요.', q: '7 · 9' },
  { kr: '무슨 N', en: 'what kind of ~', ex: '무슨 과일을 좋아해요?', q: '13 · 16' },
  { kr: '의 (제)', en: "possessive 's", ex: '제 가방 = 저의 가방', q: '7 · 17 · 24' },
]

/* ------------------------------------------------------------------ One question */

function Question({ q, open, onToggle }) {
  const group = GROUPS.find((g) => g.id === q.g)
  return (
    <div className="rounded-3xl bg-white/90 p-4 shadow-sm ring-1 ring-slate-100 sm:p-5">
      <div className="flex flex-wrap items-center gap-2">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-extrabold text-white">
          {String(q.n).padStart(2, '0')}
        </span>
        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 font-kr text-sm text-slate-600">{group.kr}</span>
        {q.neu && <span className="rounded-full bg-amber-200 px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wide text-amber-900">새 문법</span>}
        <div className="ml-auto">
          <Speak text={q.kr} className="h-10 w-10 text-xl ring-2 ring-sky-200" />
        </div>
      </div>

      <p className="mt-3 font-kr text-2xl leading-snug text-slate-900 sm:text-3xl">{q.kr}</p>
      <p className="mt-1 text-sm font-semibold text-slate-600">{q.en}</p>

      {open ? (
        <div className="mt-4 space-y-2 border-t border-dashed border-slate-200 pt-4">
          <p className="font-kr text-base text-rose-700">내 대답</p>
          {q.a.map((ans) => (
            <div key={ans.kr}>
              {ans.tag && (
                <span className="mb-1 inline-block rounded-full bg-rose-100 px-2.5 py-0.5 font-kr text-sm text-rose-800">{ans.tag}</span>
              )}
              <Line kr={ans.kr} en={ans.en} />
            </div>
          ))}
          <p className="mt-2 border-l-2 border-rose-200 pl-3 text-sm leading-relaxed text-slate-700">{q.why}</p>
        </div>
      ) : (
        <button
          type="button"
          onClick={onToggle}
          className="mt-3 rounded-full bg-violet-100 px-4 py-1.5 font-kr text-base text-violet-800 shadow-sm transition hover:bg-violet-200"
        >
          답 보기 · show answer
        </button>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ Section */

export default function Talking() {
  const [group, setGroup] = useState('all')
  const [showAll, setShowAll] = useState(true)
  const [opened, setOpened] = useState([])

  const list = group === 'all' ? QUESTIONS : QUESTIONS.filter((q) => q.g === group)
  const isOpen = (n) => showAll || opened.includes(n)

  return (
    <Section id="talking" icon="🗣️" kr="말하기" title="Talking — the 25 partner questions" tone="sky" tag="친구하고 같이 이야기하세요">
      <Card>
        <H3 sub="Tap 🔊 to hear the question, say your own answer out loud, then open the model answer to check it.">
          친구하고 같이 이야기하세요!
        </H3>
        <p className="text-sm leading-relaxed text-slate-700">
          The worksheet gives the questions only — the answers here are written with what the course has covered so far: present and past,
          adjectives joined by <Hi>-고</Hi> and <Hi>-지만</Hi>, <Hi>에</Hi> vs <Hi>에서</Hi>, times and dates, <Hi>-고 싶다</Hi> and{' '}
          <Hi>-아/어서</Hi>. Six questions need a little grammar from the next chapter; they carry a <span className="font-kr">새 문법</span> badge
          and are listed at the bottom.
        </p>
      </Card>

      <Card className="bg-gradient-to-br from-sky-50 to-violet-50">
        <div className="flex flex-wrap items-center gap-2">
          {GROUPS.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setGroup(g.id)}
              title={g.en}
              className={`rounded-full px-4 py-1.5 font-kr text-base shadow-sm transition ${group === g.id ? 'bg-sky-600 text-white' : 'bg-white text-slate-700 hover:bg-sky-100'}`}
            >
              {g.kr}
              <span className="ml-1.5 font-sans text-xs font-bold opacity-60">
                {g.id === 'all' ? QUESTIONS.length : QUESTIONS.filter((q) => q.g === g.id).length}
              </span>
            </button>
          ))}
          <label className="ml-auto flex cursor-pointer items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold shadow-sm">
            <input
              type="checkbox"
              checked={!showAll}
              onChange={(e) => {
                setShowAll(!e.target.checked)
                setOpened([])
              }}
              className="h-4 w-4 accent-sky-500"
            />
            답 숨기기 · hide answers
          </label>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {list.map((q) => (
            <Question key={q.n} q={q} open={isOpen(q.n)} onToggle={() => setOpened((o) => [...o, q.n])} />
          ))}
        </div>
      </Card>

      <Card>
        <H3 sub="Six questions on the sheet use grammar the course has not drilled yet. Here is the minimum you need to answer them.">
          새 문법 — what the sheet adds
        </H3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[32rem] border-separate border-spacing-y-2 text-left text-sm">
            <thead>
              <tr className="text-xs font-extrabold uppercase tracking-wide text-slate-500">
                <th className="p-2">Form</th>
                <th className="p-2">Means</th>
                <th className="p-2">Example</th>
                <th className="p-2">질문</th>
              </tr>
            </thead>
            <tbody>
              {NEW_GRAMMAR.map((g) => (
                <tr key={g.kr}>
                  <td className="rounded-l-2xl bg-amber-50 p-2 font-kr text-lg text-amber-900">{g.kr}</td>
                  <td className="bg-slate-50 p-2 font-semibold text-slate-700">{g.en}</td>
                  <td className="bg-slate-50 p-2 font-kr text-lg text-slate-900">{g.ex}</td>
                  <td className="rounded-r-2xl bg-slate-50 p-2 text-xs font-bold text-slate-500">{g.q}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid gap-3 sm:grid-cols-2">
        <Callout kind="tip" title="How to use this with a partner">
          <p>
            Turn <span className="font-kr">답 숨기기</span> on, hand your phone to your partner and let them tap 🔊. Answer out loud first,
            then open the answer. The point is the second sentence — anyone can say 네, but the course wants 네 + a reason.
          </p>
        </Callout>
        <Callout kind="rule" title="The safe answer shape">
          <p className="font-kr text-lg">저는 · 시간에 · 장소에서 · 누구하고 · 목적어를 · 동사요.</p>
          <p>Topic → time → place → companion → object → verb. Then add one adjective sentence with 이/가, and you have a full turn.</p>
        </Callout>
        <Callout kind="warn" title="The three particle traps on this sheet">
          <ul className="list-disc space-y-1 pl-4">
            <li>
              <span className="font-kr">가다/오다 → 에</span>, but <span className="font-kr">하다/만나다/사다 → 에서</span> (questions 4, 5, 10, 18, 20).
            </li>
            <li>
              <span className="font-kr">있다 · 많다 · 좋다 → 이/가</span>, but <span className="font-kr">좋아하다 → 을/를</span> (7, 13, 23).
            </li>
            <li>
              <span className="font-kr">도</span> replaces 이/가 and 을/를 — <span className="font-kr">지갑도</span>, never 지갑이도.
            </li>
          </ul>
        </Callout>
        <Callout kind="note" title="OO 씨 on the sheet">
          <p>
            <span className="font-kr">OO</span> is a blank for your partner&apos;s name, and 씨 goes after the full name or the given name —
            never after a family name alone, and never about yourself. 씨 always takes 예요: <span className="font-kr">민수 씨예요</span>.
          </p>
        </Callout>
      </div>
    </Section>
  )
}
