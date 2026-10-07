import { Callout, Card, H3, Line, Section, Speak } from '../components/ui'
import { speak } from '../lib/korean'

// 쓰기 1 (지난주 토요일) and 쓰기 1 (한국 음식) from the two 쓰기 worksheets.
// Both texts below are written with ONLY what the course has covered so far:
// present, past, adjectives, places (에/에서), times and dates.

/* ------------------------------------------------------------------ Writing 1 */

const W1_PLAN = [
  { ampm: '오전', time: '9:00', where: '공원', what: '친구하고 운동하다', how: '깨끗하다 · 즐겁다' },
  { ampm: '오전', time: '11:30', where: '학교 근처 카페', what: '커피를 마시다', how: '뜨겁다 · 맛있다 · 비싸지 않다' },
  { ampm: '오후', time: '2:00', where: '도서관', what: '한국어를 공부하다', how: '어렵다 · 피곤하다' },
  { ampm: '오후', time: '6:00', where: '홍대', what: '친구하고 영화를 보다', how: '재미있다' },
  { ampm: '오후', time: '11:00', where: '기숙사', what: '샤워하고 자다', how: '행복하다' },
]

const W1_TEXT =
  '저는 지난주 토요일에 오전 9시에 공원에 갔어요. 공원에서 친구하고 운동했어요. ' +
  '공원이 깨끗하고 좋았어요. 정말 즐거웠어요. 그리고 오전 11시 반에 학교 근처 카페에서 커피를 마셨어요. ' +
  '커피가 뜨겁고 맛있었어요. 그리고 비싸지 않았어요. 오후 2시에 도서관에서 한국어를 공부했어요. ' +
  '한국어가 조금 어려웠어요. 그래서 피곤했어요. 오후 6시에 홍대에서 친구하고 영화를 봤어요. ' +
  '영화가 재미있었어요. 저는 오후 11시에 기숙사에 왔어요. 그리고 샤워하고 잤어요. 저는 행복했어요.'

const W1_LINES = [
  {
    kr: '저는 지난주 토요일에 오전 9시에 공원에 갔어요.',
    en: 'Last Saturday I went to the park at 9 a.m.',
    why: 'Two time words in a row, each with 에 — exactly like the 보기 (지난주 토요일에 … 10시에). 공원에 = the place you go TO.',
  },
  {
    kr: '공원에서 친구하고 운동했어요.',
    en: 'I exercised with a friend at the park.',
    why: 'Same park, different particle: 에서 because something HAPPENS there. 친구하고 = with a friend.',
  },
  {
    kr: '공원이 깨끗하고 좋았어요.',
    en: 'The park was clean and nice.',
    why: 'Two adjectives joined by -고. Only the LAST one carries the past tense: 깨끗하고 + 좋았어요.',
  },
  { kr: '정말 즐거웠어요.', en: 'It was really enjoyable.', why: '즐겁다 is a ㅂ-irregular: 즐겁 + 었어요 → 즐거웠어요.' },
  {
    kr: '그리고 오전 11시 반에 학교 근처 카페에서 커피를 마셨어요.',
    en: 'And at 11:30 a.m. I drank coffee at a café near the school.',
    why: '반 = half (past the hour). 학교 근처 = near the school — a noun + noun chain, no particle in between.',
  },
  { kr: '커피가 뜨겁고 맛있었어요.', en: 'The coffee was hot and delicious.', why: 'The thing you describe takes 이/가, not 은/는. 뜨겁다 → 뜨겁고 (the 고 form never changes).' },
  { kr: '그리고 비싸지 않았어요.', en: "And it wasn't expensive.", why: '-지 않다 in the past = -지 않았어요. The 보기 uses the same move: 비싸지 않고 맛있었어요.' },
  { kr: '오후 2시에 도서관에서 한국어를 공부했어요.', en: 'At 2 p.m. I studied Korean at the library.', why: '공부하다 → 공부했어요 (every 하다 verb becomes 했어요).' },
  { kr: '한국어가 조금 어려웠어요.', en: 'Korean was a little difficult.', why: '조금 = a little, softens the adjective. 어렵다 → 어려웠어요 (ㅂ-irregular again).' },
  { kr: '그래서 피곤했어요.', en: 'So I was tired.', why: '그래서 = so / that is why. It connects a cause to a result across two sentences.' },
  { kr: '오후 6시에 홍대에서 친구하고 영화를 봤어요.', en: 'At 6 p.m. I watched a movie with a friend in Hongdae.', why: '보다 has ㅗ as its last vowel → 보 + 았어요 → 봤어요.' },
  { kr: '영화가 재미있었어요.', en: 'The movie was fun.', why: '재미있다 already ends in 있다, so the past is 재미있었어요 — never 재미있다었어요.' },
  { kr: '저는 오후 11시에 기숙사에 왔어요.', en: 'I came back to the dormitory at 11 p.m.', why: '기숙사에 왔어요 — 에 again, because the dorm is the destination. 오다 → 와요 → 왔어요.' },
  { kr: '그리고 샤워하고 잤어요.', en: 'And I showered and slept.', why: 'Here -고 joins two VERBS = "and then". Straight out of the 보기: 샤워하고 잤어요.' },
  { kr: '저는 행복했어요.', en: 'I was happy.', why: 'A closing line. 행복하다 → 행복했어요.' },
]

const CLOCK = [
  { d: '9:00', kr: '아홉 시', en: 'nine o’clock' },
  { d: '11:30', kr: '열한 시 반', en: 'half past eleven' },
  { d: '2:00', kr: '두 시', en: 'two o’clock' },
  { d: '6:00', kr: '여섯 시', en: 'six o’clock' },
  { d: '11:00', kr: '열한 시', en: 'eleven o’clock' },
]

/* ------------------------------------------------------------------ Writing 2 */

const W2_PLAN = [
  { q: '무엇을 자주 먹어요?', qe: 'What do you eat often?', a: '김밥, 피자' },
  { q: '어디에서 먹어요?', qe: 'Where do you eat it?', a: '집, 학교 근처 식당' },
  { q: '왜 그 음식을 자주 먹어요?', qe: 'Why do you eat it often?', a: '김밥 – 싸고 맛있다 / 피자 – 짜지만 맛있다' },
  { q: '나중에 무엇을 먹고 싶어요? 왜요?', qe: 'What do you want to eat later? Why?', a: '삼계탕 – 맵지 않다' },
  { q: '누구하고 먹고 싶어요?', qe: 'Who do you want to eat it with?', a: '친구' },
]

const W2_TEXT =
  '저는 김밥하고 피자를 자주 먹어요. 아침에 집에서 김밥을 먹어요. 김밥이 싸고 맛있어서 자주 먹어요. ' +
  '그리고 주말에 학교 근처 식당에서 피자를 먹어요. 피자는 조금 짜지만 맛있어요. 그리고 콜라를 같이 마셔요. ' +
  '콜라가 차갑고 달아요. 저는 과일도 좋아해요. 수박하고 포도가 달고 맛있어요. ' +
  '저는 나중에 삼계탕을 먹고 싶어요. 삼계탕은 맵지 않고 맛있어요. 그래서 친구하고 같이 삼계탕을 먹고 싶어요.'

const W2_LINES = [
  { kr: '저는 김밥하고 피자를 자주 먹어요.', en: 'I often eat gimbap and pizza.', why: '하고 between two nouns = "and". 자주 (often) sits right before the verb.' },
  { kr: '아침에 집에서 김밥을 먹어요.', en: 'In the morning I eat gimbap at home.', why: '아침에 = in the morning (time + 에). 집에서 = at home (action place + 에서).' },
  {
    kr: '김밥이 싸고 맛있어서 자주 먹어요.',
    en: "Gimbap is cheap and tasty, so I eat it often.",
    why: '-아/어서 = "so / because". The 보기 uses the exact same sentence shape: 싸고 맛있어서 자주 먹어요.',
  },
  { kr: '그리고 주말에 학교 근처 식당에서 피자를 먹어요.', en: 'And on weekends I eat pizza at a restaurant near the school.', why: '주말에 = on the weekend. Note the order: time → place → object → verb.' },
  { kr: '피자는 조금 짜지만 맛있어요.', en: 'Pizza is a bit salty, but it is delicious.', why: '-지만 = but. The 보기 does the same with 김치는 조금 시지만….  은/는 here marks contrast, not the topic.' },
  { kr: '그리고 콜라를 같이 마셔요.', en: 'And I drink cola with it.', why: '같이 = together / along with. 마시다 → 마셔요.' },
  { kr: '콜라가 차갑고 달아요.', en: 'The cola is cold and sweet.', why: '차갑다 → 차가워요 (ㅂ-irregular), but 차갑고 in the 고 form. 달다 → 달아요.' },
  { kr: '저는 과일도 좋아해요.', en: 'I like fruit too.', why: '도 = also/too. It REPLACES 은/는 and 이/가 — never 과일이도.' },
  { kr: '수박하고 포도가 달고 맛있어요.', en: 'Watermelon and grapes are sweet and delicious.', why: 'When 하고 joins two nouns, the particle goes on the last one only: 수박하고 포도가.' },
  { kr: '저는 나중에 삼계탕을 먹고 싶어요.', en: 'Later I want to eat samgyetang.', why: '-고 싶다 = want to. Verb stem + 고 싶어요. 나중에 = later (the vocabulary card on the page).' },
  { kr: '삼계탕은 맵지 않고 맛있어요.', en: 'Samgyetang is not spicy and it is delicious.', why: '-지 않다 + -고 stacked together: 맵 + 지 않 + 고. Same as the 보기’s 시지 않고 맛있어요.' },
  { kr: '그래서 친구하고 같이 삼계탕을 먹고 싶어요.', en: 'So I want to eat samgyetang with a friend.', why: '친구하고 같이 = together with a friend. 하고 alone already means "with"; 같이 just makes it warmer.' },
]

/* ------------------------------------------------------------------ Vocabulary */

const ADJ2 = [
  { kr: '재미있다', en: 'fun', now: '재미있어요', past: '재미있었어요' },
  { kr: '재미없다', en: 'boring', now: '재미없어요', past: '재미없었어요' },
  { kr: '싸다', en: 'cheap', now: '싸요', past: '쌌어요' },
  { kr: '비싸다', en: 'expensive', now: '비싸요', past: '비쌌어요' },
  { kr: '맛있다', en: 'tasty', now: '맛있어요', past: '맛있었어요' },
  { kr: '맛없다', en: 'not tasty', now: '맛없어요', past: '맛없었어요' },
  { kr: '피곤하다', en: 'tired', now: '피곤해요', past: '피곤했어요' },
  { kr: '행복하다', en: 'happy', now: '행복해요', past: '행복했어요' },
  { kr: '쉽다', en: 'easy', now: '쉬워요', past: '쉬웠어요', irr: true },
  { kr: '어렵다', en: 'difficult', now: '어려워요', past: '어려웠어요', irr: true },
  { kr: '덥다', en: 'hot (weather)', now: '더워요', past: '더웠어요', irr: true },
  { kr: '춥다', en: 'cold (weather)', now: '추워요', past: '추웠어요', irr: true },
  { kr: '뜨겁다', en: 'hot (to touch)', now: '뜨거워요', past: '뜨거웠어요', irr: true },
  { kr: '차갑다', en: 'cold (to touch)', now: '차가워요', past: '차가웠어요', irr: true },
  { kr: '더럽다', en: 'dirty', now: '더러워요', past: '더러웠어요', irr: true },
  { kr: '깨끗하다', en: 'clean', now: '깨끗해요', past: '깨끗했어요' },
  { kr: '맵다', en: 'spicy', now: '매워요', past: '매웠어요', irr: true },
  { kr: '즐겁다', en: 'enjoyable', now: '즐거워요', past: '즐거웠어요', irr: true },
]

const ADJ3 = [
  { kr: '짜다', en: 'salty', now: '짜요', past: '짰어요' },
  { kr: '싱겁다', en: 'bland', now: '싱거워요', past: '싱거웠어요', irr: true },
  { kr: '달다', en: 'sweet', now: '달아요', past: '달았어요' },
  { kr: '시다', en: 'sour', now: '셔요', past: '셨어요' },
  { kr: '맵다', en: 'spicy', now: '매워요', past: '매웠어요', irr: true },
  { kr: '쓰다', en: 'bitter', now: '써요', past: '썼어요' },
]

const FOOD = [
  ['비빔밥', 'bibimbap'], ['김밥', 'gimbap'], ['떡볶이', 'tteokbokki'],
  ['냉면', 'cold noodles'], ['삼겹살', 'pork belly'], ['삼계탕', 'ginseng chicken soup'],
  ['된장찌개', 'soybean-paste stew'], ['김치찌개', 'kimchi stew'], ['부대찌개', 'army stew'],
]

const DRINK = [
  ['물', 'water'], ['커피', 'coffee'], ['차', 'tea'],
  ['우유', 'milk'], ['콜라', 'cola'], ['사이다', 'lemon-lime soda'],
  ['주스', 'juice'], ['소주', 'soju'], ['맥주', 'beer'],
]

const FRUIT = [
  ['수박', 'watermelon'], ['사과', 'apple'], ['배', 'pear'], ['딸기', 'strawberry'],
  ['복숭아', 'peach'], ['포도', 'grapes'], ['귤', 'tangerine'], ['오렌지', 'orange'],
  ['바나나', 'banana'], ['키위', 'kiwi'],
]

const SNACK = [
  ['과자', 'snacks / crackers'], ['초콜릿', 'chocolate'], ['사탕', 'candy'],
  ['케이크', 'cake'], ['떡', 'rice cake'], ['아이스크림', 'ice cream'], ['빙수', 'shaved ice'],
]

/* ------------------------------------------------------------------ Small pieces */

function Step({ kr, en, why, n }) {
  return (
    <div className="flex gap-3 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-extrabold text-slate-500">{n}</div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start gap-2">
          <Speak text={kr} />
          <div className="min-w-0">
            <div className="font-kr text-2xl leading-snug text-slate-900 sm:text-3xl">{kr}</div>
            <div className="text-sm font-semibold text-slate-600">{en}</div>
          </div>
        </div>
        <p className="mt-2 border-l-2 border-rose-200 pl-3 text-sm leading-relaxed text-slate-700">{why}</p>
      </div>
    </div>
  )
}

function FullText({ text, label }) {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-rose-50 to-amber-50 p-5 ring-2 ring-rose-200 sm:p-6">
      <div className="mb-3 flex items-center gap-2">
        <Speak text={text} />
        <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-rose-700">{label}</span>
      </div>
      <p className="font-kr text-2xl leading-[1.9] text-slate-900 sm:text-3xl sm:leading-[1.9]">{text}</p>
    </div>
  )
}

function Chips({ items, tone }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map(([kr, en]) => (
        <button
          key={kr}
          type="button"
          onClick={() => speak(kr)}
          className={`rounded-2xl px-3 py-1.5 text-left shadow-sm ring-1 transition hover:scale-105 ${tone}`}
        >
          <span className="font-kr text-xl">{kr}</span>
          <span className="ml-2 text-xs font-semibold opacity-70">{en}</span>
        </button>
      ))}
    </div>
  )
}

function AdjTable({ rows, caption }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[24rem] border-separate border-spacing-y-2 text-center">
        <caption className="pb-2 text-left text-sm font-bold text-slate-500">{caption}</caption>
        <thead>
          <tr className="text-xs font-extrabold uppercase tracking-wide text-slate-500">
            <th className="p-2 text-left">Adjective</th>
            <th className="p-2 text-violet-700">Now</th>
            <th className="p-2 text-rose-700">Past</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((a) => (
            <tr key={a.kr + a.en}>
              <td className="rounded-l-2xl bg-slate-50 p-2 text-left">
                <span className="font-kr text-xl text-slate-900">{a.kr}</span>
                {a.irr && <span className="ml-1.5 rounded bg-amber-200 px-1 text-[10px] font-black text-amber-900">ㅂ</span>}
                <div className="text-xs font-semibold text-slate-500">{a.en}</div>
              </td>
              <td className="bg-violet-50 p-2 font-kr text-xl text-violet-900">{a.now}</td>
              <td className="rounded-r-2xl bg-rose-50 p-2 font-kr text-xl text-rose-900">{a.past}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ------------------------------------------------------------------ Section */

export default function Writing() {
  return (
    <Section id="writing" icon="✍️" kr="쓰기" title="Writing 1 & 2 — my two texts" tone="rose" tag="쓰기1 · 어휘2 형용사 2–3">
      <Card>
        <H3 sub="Two 쓰기 pages, two short texts. Both are written with only what we have studied: present, past, adjectives, places, times and dates.">
          How these were built
        </H3>
        <div className="grid gap-3 sm:grid-cols-2">
          <Callout kind="note" title="Writing 1 — 지난주 토요일에 뭐 했어요?">
            <p>Fill the table (시간 · 어디에서 · 뭐 했어요? · 어땠어요?), then turn every row into 2–3 past-tense sentences. The last column is the one that makes it sound Korean: always say how it <b>was</b>.</p>
          </Callout>
          <Callout kind="note" title="Writing 2 — 한국 음식에 대해서 쓰세요">
            <p>Answer the five questions, then glue the answers together. The 보기 moves in a fixed order: what → where → why → what later → with whom.</p>
          </Callout>
        </div>
        <div className="mt-4">
          <Callout kind="tip" title="Why the textbook uses those little squares">
            <p>
              That grid is 원고지 (manuscript paper). One square = one syllable, one punctuation mark, or one space. Particles stay glued to their word
              (<span className="font-kr">김밥을</span> = 3 squares, no gap), and a space goes <i>between</i> words. It is the fastest way to train Korean
              spacing (띄어쓰기), which is graded.
            </p>
          </Callout>
        </div>
      </Card>

      {/* ---------------- Writing 1 ---------------- */}
      <Card className="ring-2 ring-rose-100">
        <H3 sub="지난주 토요일에 뭐 했어요? — What did you do last Saturday?">① Writing 1 · My Saturday</H3>

        <div className="mb-5 overflow-x-auto">
          <table className="w-full min-w-[32rem] border-separate border-spacing-y-2 text-left text-sm">
            <thead>
              <tr className="text-xs font-extrabold uppercase tracking-wide text-slate-500">
                <th className="p-2">시간 <span className="normal-case opacity-60">time</span></th>
                <th className="p-2">어디에서 <span className="normal-case opacity-60">where</span></th>
                <th className="p-2">뭐 했어요? <span className="normal-case opacity-60">what</span></th>
                <th className="p-2">어땠어요? <span className="normal-case opacity-60">how was it</span></th>
              </tr>
            </thead>
            <tbody>
              {W1_PLAN.map((r) => (
                <tr key={r.time + r.ampm}>
                  <td className="rounded-l-2xl bg-sky-50 p-2 font-kr text-lg text-sky-900">
                    {r.ampm} {r.time}
                  </td>
                  <td className="bg-amber-50 p-2 font-kr text-lg text-amber-900">{r.where}</td>
                  <td className="bg-violet-50 p-2 font-kr text-lg text-violet-900">{r.what}</td>
                  <td className="rounded-r-2xl bg-rose-50 p-2 font-kr text-lg text-rose-900">{r.how}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <FullText text={W1_TEXT} label="원고지에 쓰세요" />

        <div className="mt-6">
          <H3 sub="Every sentence, and the one thing it is practising.">Sentence by sentence</H3>
          <div className="space-y-2">
            {W1_LINES.map((l, i) => (
              <Step key={l.kr} n={i + 1} {...l} />
            ))}
          </div>
        </div>
      </Card>

      <Card>
        <H3 sub="This is where most beginners lose points, so read the clock out loud before you write it.">Reading the times in Writing 1</H3>
        <div className="grid gap-2 sm:grid-cols-2">
          {CLOCK.map((c) => (
            <div key={c.d} className="flex items-center gap-3 rounded-2xl bg-sky-50 p-3 ring-1 ring-sky-100">
              <Speak text={c.kr} />
              <div>
                <span className="font-black text-sky-900">{c.d}</span>
                <span className="mx-2 text-slate-400">=</span>
                <span className="font-kr text-2xl text-slate-900">{c.kr}</span>
                <div className="text-xs font-semibold text-slate-500">{c.en}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <Callout kind="rule" title="Hours = native numbers, minutes = Sino numbers">
            <p className="font-kr text-lg">2시 30분 → <b>두 시 삼십 분</b></p>
            <p>Never 이 시. The hour uses 하나·둘·셋 (→ 한·두·세 before 시); the minute uses 일·이·삼.</p>
          </Callout>
          <Callout kind="tip" title="오전 / 오후 come FIRST">
            <p className="font-kr text-lg">오전 9시 · 오후 6시 · 오전 11시 반</p>
            <p>English puts a.m./p.m. after the number; Korean puts it before. 반 = half past, and it replaces 30분.</p>
          </Callout>
        </div>
      </Card>

      <Card>
        <H3 sub="Both worksheets lean on these four. They are the glue of the whole text.">The four connectors doing all the work</H3>
        <div className="grid gap-3 sm:grid-cols-2">
          <Callout kind="rule" title="A-고 A  ·  V-고 V">
            <p className="font-kr text-lg">커피가 뜨겁<b>고</b> 맛있었어요.</p>
            <p className="font-kr text-lg">샤워하<b>고</b> 잤어요.</p>
            <p>With adjectives it means "and"; with verbs it means "and then". Tense goes on the <b>last</b> verb only.</p>
          </Callout>
          <Callout kind="rule" title="-지 않다  (not)">
            <p className="font-kr text-lg">비싸<b>지 않았어요</b>. · 맵<b>지 않고</b> 맛있어요.</p>
            <p>Stem + 지 않다. It can take 고 and 지만 just like any other word.</p>
          </Callout>
          <Callout kind="rule" title="-아/어서  (so, because)">
            <p className="font-kr text-lg">싸고 맛있<b>어서</b> 자주 먹어요.</p>
            <p>Cause first, result second. Important: no 았/었 before 어서 — the tense lives on the final verb.</p>
          </Callout>
          <Callout kind="rule" title="-지만  (but)">
            <p className="font-kr text-lg">피자는 조금 짜<b>지만</b> 맛있어요.</p>
            <p>Attach straight to the stem. Pair it with 은/는 on both sides to make the contrast obvious.</p>
          </Callout>
        </div>
        <div className="mt-4">
          <Callout kind="warn" title="에 vs 에서 — the mistake the grader is looking for">
            <p className="font-kr text-lg">공원<b>에</b> 갔어요. <span className="font-sans text-sm text-slate-600">(went TO the park — destination, with 가다/오다)</span></p>
            <p className="font-kr text-lg">공원<b>에서</b> 운동했어요. <span className="font-sans text-sm text-slate-600">(exercised AT the park — where the action happens)</span></p>
          </Callout>
        </div>
      </Card>

      {/* ---------------- Writing 2 ---------------- */}
      <Card className="ring-2 ring-emerald-100">
        <H3 sub="보기와 같이 한국 음식에 대해서 쓰세요. — Write about Korean food as in the example.">② Writing 2 · Food and drinks</H3>

        <div className="mb-5 overflow-x-auto">
          <table className="w-full min-w-[30rem] border-separate border-spacing-y-2 text-left text-sm">
            <thead>
              <tr className="text-xs font-extrabold uppercase tracking-wide text-slate-500">
                <th className="p-2">질문 <span className="normal-case opacity-60">question</span></th>
                <th className="p-2">나 <span className="normal-case opacity-60">my answer</span></th>
              </tr>
            </thead>
            <tbody>
              {W2_PLAN.map((r) => (
                <tr key={r.q}>
                  <td className="rounded-l-2xl bg-slate-50 p-2">
                    <div className="font-kr text-lg text-slate-900">{r.q}</div>
                    <div className="text-xs font-semibold text-slate-500">{r.qe}</div>
                  </td>
                  <td className="rounded-r-2xl bg-emerald-50 p-2 font-kr text-lg text-emerald-900">{r.a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <FullText text={W2_TEXT} label="원고지에 쓰세요" />

        <div className="mt-6">
          <H3 sub="Every sentence, and the one thing it is practising.">Sentence by sentence</H3>
          <div className="space-y-2">
            {W2_LINES.map((l, i) => (
              <Step key={l.kr} n={i + 1} {...l} />
            ))}
          </div>
        </div>
      </Card>

      <Card>
        <H3 sub="The pattern the second worksheet is really testing.">-고 싶다 — what I want to eat</H3>
        <div className="space-y-2">
          <Line kr="저는 삼계탕을 먹고 싶어요." en="I want to eat samgyetang." />
          <Line kr="저는 냉면을 먹고 싶어요." en="I want to eat cold noodles." />
          <Line kr="저는 친구하고 같이 먹고 싶어요." en="I want to eat with a friend." />
          <Line kr="저는 커피를 마시고 싶어요." en="I want to drink coffee." />
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <Callout kind="rule" title="Verb stem + 고 싶어요">
            <p className="font-kr text-lg">먹다 → 먹<b>고 싶어요</b> · 마시다 → 마시<b>고 싶어요</b> · 가다 → 가<b>고 싶어요</b></p>
            <p>No 아/어 juggling — 고 attaches to the bare stem, always the same shape.</p>
          </Callout>
          <Callout kind="warn" title="Only for me and you">
            <p>
              -고 싶다 is for <b>I</b> and <b>you</b>. For a third person Korean says 먹고 싶<b>어 하다</b>. At this level, just keep your sentences in 저는 / 씨는 questions.
            </p>
          </Callout>
        </div>
      </Card>

      {/* ---------------- Vocabulary ---------------- */}
      <Card>
        <H3 sub="형용사 2 — everything from the two adjective pages, with the forms you need for the past-tense text.">Adjectives you can reuse</H3>
        <AdjTable rows={ADJ2} caption="ㅂ = ㅂ-irregular: the ㅂ turns into 우 before a vowel ending." />
        <div className="mt-4">
          <Callout kind="tip" title="The ㅂ-irregular, in one line">
            <p className="font-kr text-xl">맵다 → 맵 + 어요 → 매<b>워</b>요 → 매<b>웠</b>어요</p>
            <p>
              Drop the ㅂ, add 우, then the ending: 어렵다 → 어려워요, 춥다 → 추워요, 즐겁다 → 즐거워요. But the 고 form and the 지 않다 form keep the ㅂ:
              <span className="font-kr"> 맵고, 맵지 않아요</span>. 깨끗하다 and 피곤하다 are 하다 words, so they are completely regular.
            </p>
          </Callout>
        </div>
      </Card>

      <Card>
        <H3 sub="형용사 3 — the six taste words. These are what turn a food list into a text.">Taste adjectives</H3>
        <AdjTable rows={ADJ3} caption="Use them with 이/가: 김치가 매워요. 커피가 써요." />
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <Callout kind="note" title="싱겁다 has no English word">
            <p>It means "not salty enough / under-seasoned" — the opposite of 짜다. Koreans use it constantly about soup.</p>
          </Callout>
          <Callout kind="warn" title="쓰다 is two words">
            <p className="font-kr text-lg">쓰다 = bitter · 쓰다 = to write</p>
            <p>Identical in every form (써요, 썼어요). Context decides: 커피가 써요 vs 편지를 써요.</p>
          </Callout>
        </div>
      </Card>

      <Card>
        <H3 sub="음식 · 음료 — tap any word to hear it.">Food & drinks from the chapter</H3>
        <p className="mb-2 text-sm font-bold text-slate-500">한국 음식</p>
        <Chips items={FOOD} tone="bg-orange-50 text-orange-950 ring-orange-200" />
        <p className="mb-2 mt-5 text-sm font-bold text-slate-500">음료 Drinks</p>
        <Chips items={DRINK} tone="bg-sky-50 text-sky-950 ring-sky-200" />
        <p className="mb-2 mt-5 text-sm font-bold text-slate-500">과일 Fruit</p>
        <Chips items={FRUIT} tone="bg-rose-50 text-rose-950 ring-rose-200" />
        <p className="mb-2 mt-5 text-sm font-bold text-slate-500">간식 Snacks</p>
        <Chips items={SNACK} tone="bg-violet-50 text-violet-950 ring-violet-200" />
      </Card>

      <Card>
        <H3 sub="Small things that make the text read like a real Korean one.">Worth knowing</H3>
        <div className="grid gap-3 sm:grid-cols-2">
          <Callout kind="note" title="삼계탕 is a summer dish">
            <p>
              A whole young chicken stuffed with rice and ginseng. Koreans eat it on the three hottest days of the year (복날) — the idea is 이열치열,
              "fight heat with heat". That is why it is a natural answer to 나중에 무엇을 먹고 싶어요?
            </p>
          </Callout>
          <Callout kind="note" title="사이다 is not cider">
            <p>
              <span className="font-kr">사이다</span> is a clear lemon-lime soda (Sprite-style), with no alcohol at all. And
              <span className="font-kr"> 커피</span> on a menu usually means 아메리카노.
            </p>
          </Callout>
          <Callout kind="note" title="찌개 vs 탕">
            <p>
              <span className="font-kr">찌개</span> is a thick stew shared from the pot in the middle of the table;
              <span className="font-kr"> 탕</span> is a clearer soup served in your own bowl. That is why 김치찌개 and 삼계탕 are named differently.
            </p>
          </Callout>
          <Callout kind="note" title="Why 김밥 is the default answer">
            <p>
              It is the cheapest hot-ish meal at a 편의점 (convenience store) and the book leans on it for that reason —
              <span className="font-kr"> 김밥이 싸고 맛있어서 자주 먹어요</span> is almost a set phrase for students.
            </p>
          </Callout>
          <Callout kind="tip" title="하고 does three jobs">
            <p className="font-kr text-lg">김밥하고 피자 <span className="font-sans text-sm text-slate-600">(and)</span></p>
            <p className="font-kr text-lg">친구하고 <span className="font-sans text-sm text-slate-600">(with)</span></p>
            <p className="font-kr text-lg">친구하고 같이 <span className="font-sans text-sm text-slate-600">(together with)</span></p>
          </Callout>
          <Callout kind="tip" title="Word order to copy">
            <p className="font-kr text-lg">저는 · 오후 6시에 · 홍대에서 · 친구하고 · 영화를 · 봤어요.</p>
            <p>Topic → time → place → companion → object → verb. Keep that order and the sentence is hard to get wrong.</p>
          </Callout>
        </div>
      </Card>
    </Section>
  )
}
