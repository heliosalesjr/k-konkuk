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

// Inline highlight: dark blue instead of bold, so it reads clearly next to the black text.
function Hi({ children }) {
  return <span className="text-blue-700">{children}</span>
}

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

/* ------------------------------------------------------------------ Practice prompts */

// Three prompts the course could realistically set next, each answered with the same
// toolbox: present, past, adjectives, 에/에서, times, -고 / -지만 / -아어서 / -고 싶다.

const P1 = {
  tag: '연습 1',
  kr: '자기소개와 하루',
  en: '"저를 소개하세요" — who I am and what my days look like',
  trains: 'The whole text stays in the PRESENT — the mirror image of Writing 1. It drills 이에요/예요 and the frequency adverbs 보통 · 매일 · 자주 · 혼자 · 같이.',
  head: ['질문', '나'],
  rows: [
    ['이름이 뭐예요? 어느 나라 사람이에요?', '헬리오, 브라질'],
    ['직업이 뭐예요?', '학생'],
    ['보통 아침에 뭐 해요?', '집에서 커피를 마시다'],
    ['오후에 뭐 해요?', '도서관에서 숙제를 하다'],
    ['주말에 뭐 해요?', '친구하고 영화를 보다, 쇼핑하다'],
    ['뭘 좋아해요?', '김밥, 한국 음악'],
    ['나중에 뭐 하고 싶어요?', '한국 친구를 만나다, 삼겹살을 먹다'],
  ],
  text:
    '안녕하세요. 저는 헬리오예요. 저는 브라질 사람이에요. 그리고 학생이에요. 지금 건국대학교에서 한국어를 공부해요. ' +
    '저는 보통 아침 7시에 일어나요. 그리고 집에서 커피를 마셔요. 커피가 뜨겁고 맛있어요. ' +
    '오전 9시에 학교에 가요. 학교에서 한국어를 공부해요. 한국어가 조금 어렵지만 재미있어요. ' +
    '오후 2시에 도서관에서 숙제를 해요. 숙제가 많아요. 그래서 조금 피곤해요. ' +
    '저는 보통 혼자 밥을 먹어요. 김밥을 자주 먹어요. 김밥이 싸고 맛있어서 좋아해요. ' +
    '주말에 친구하고 같이 영화를 봐요. 그리고 쇼핑해요. 정말 즐거워요. ' +
    '저는 한국 음악을 매일 들어요. 한국 음악이 정말 좋아요. ' +
    '저는 나중에 한국 친구를 자주 만나고 싶어요. 그리고 삼겹살을 먹고 싶어요.',
  steps: [
    { kr: '안녕하세요. 저는 헬리오예요.', en: 'Hello. I am Helio.', why: '예요 because 오 has no 받침. A name ending in a consonant takes 이에요: 최건우이에요.' },
    { kr: '저는 보통 아침 7시에 일어나요.', en: 'I usually get up at 7 in the morning.', why: '보통 sits right before the verb phrase, never at the head of the sentence. 7시 = 일곱 시.' },
    { kr: '한국어가 조금 어렵지만 재미있어요.', en: 'Korean is a little difficult, but it is fun.', why: 'Two opposite adjectives in one honest sentence. 어렵다 keeps its ㅂ before 지만: 어렵지만, not 어려우지만.' },
    { kr: '김밥이 싸고 맛있어서 좋아해요.', en: 'Gimbap is cheap and tasty, so I like it.', why: '-고 and -아/어서 stacked: 싸 + 고 … 맛있 + 어서. No tense marker before 어서.' },
    { kr: '저는 나중에 한국 친구를 자주 만나고 싶어요.', en: 'Later I want to meet Korean friends often.', why: 'Closing on -고 싶다 is what both 보기 texts do. It turns a list of facts into a text with a direction.' },
  ],
  check: ['좋아하다 — if the class has not seen it yet, write 김밥이 좋아요 instead (adjective, so 이/가, not 을/를).'],
}

const P2 = {
  tag: '연습 2',
  kr: '브라질하고 한국',
  en: '"고향에 대해서 쓰세요" — my country and Korea',
  trains: 'The only shape that forces PAST and PRESENT into the same text, and the one place where 은/는 finally means contrast instead of topic.',
  head: ['질문', '나'],
  rows: [
    ['어느 나라 사람이에요?', '브라질'],
    ['날씨가 어때요?', '브라질 – 덥다 / 한국 – 춥다'],
    ['고향에서 보통 뭐 했어요?', '친구하고 축구를 하다, 집에서 요리하다'],
    ['지금 한국에서 뭐 해요?', '한국어를 공부하다'],
    ['뭐가 좋아요? 뭐가 어려워요?', '한국 음식 – 맛있다 / 한국어 – 어렵다'],
    ['나중에 누구하고 뭐 하고 싶어요?', '부모님하고 삼계탕을 먹다'],
  ],
  text:
    '저는 브라질 사람이에요. 브라질은 정말 커요. 그리고 날씨가 더워요. 브라질은 춥지 않아요. ' +
    '저는 브라질에서 매일 친구하고 축구를 했어요. 정말 즐거웠어요. 그리고 주말에 집에서 요리했어요. 저는 요리를 좋아해요. ' +
    '지금 저는 한국에서 한국어를 공부해요. 브라질은 덥지만 한국은 조금 추워요. ' +
    '한국 음식이 정말 맛있어요. 저는 김치찌개를 자주 먹어요. 김치찌개가 조금 맵지만 맛있어요. ' +
    '한국어 공부가 조금 어려워요. 그래서 매일 숙제를 해요. 숙제가 많아서 피곤해요. ' +
    '그렇지만 한국이 정말 좋아요. 저는 나중에 부모님하고 같이 삼계탕을 먹고 싶어요.',
  steps: [
    { kr: '브라질은 정말 커요. 그리고 날씨가 더워요.', en: 'Brazil is really big. And the weather is hot.', why: '크다 is 으-irregular (크 + 어요 → 커요); 덥다 is ㅂ-irregular (덥 + 어요 → 더워요). Two different irregulars side by side.' },
    { kr: '저는 브라질에서 매일 친구하고 축구를 했어요.', en: 'In Brazil I played soccer with friends every day.', why: '에서 because the action happened there. 축구를 하다 — the noun takes 을/를 and 하다 carries the tense.' },
    { kr: '브라질은 덥지만 한국은 조금 추워요.', en: 'Brazil is hot, but Korea is a little cold.', why: 'The core sentence of the whole text. 은/는 on BOTH sides is what signals the comparison.' },
    { kr: '숙제가 많아서 피곤해요.', en: 'I have a lot of homework, so I am tired.', why: '많다 + 아서 → 많아서. Note that Korean says "the homework is many", with 이/가 — not "I have".' },
    { kr: '저는 나중에 부모님하고 같이 삼계탕을 먹고 싶어요.', en: 'Later I want to eat samgyetang together with my parents.', why: 'Same closing move as the 보기 of Writing 2, which also ends on 부모님하고 같이.' },
  ],
  check: [
    '그렇지만 (however) — if you have not seen it, start a new sentence with 그리고, or drop it.',
    '좋아하다 — same note as above: 요리가 좋아요 is the safe version.',
  ],
}

const P3 = {
  tag: '연습 3',
  kr: '어디에 자주 가요?',
  en: '"자주 가는 장소에 대해서 쓰세요" — campus, café, park, department store',
  trains: 'Built to drill 에 vs 에서. The pair appears eleven times, always in the same rhythm: go TO the place (에), then do something AT it (에서).',
  head: ['장소', '언제', '뭐 해요?', '어때요?'],
  rows: [
    ['학교 앞 편의점', '아침 8시', '김밥을 사다', '싸다 · 맛있다'],
    ['교실', '오전 9시', '한국어를 공부하다', '깨끗하다 · 크다'],
    ['도서관', '오후 2시', '숙제를 하다, 책을 읽다', '깨끗하다'],
    ['학교 앞 카페', '오후 4시', '친구를 만나다, 커피를 마시다', '뜨겁다 · 비싸지 않다'],
    ['공원', '주말 아침', '친구하고 운동하다', '깨끗하다 · 즐겁다'],
    ['백화점', '주말 오후', '쇼핑하다, 영화를 보다', '예쁘다 · 조금 비싸다'],
    ['기숙사', '밤 11시', '샤워하고 자다', '좋다'],
  ],
  text:
    '저는 건국대학교 학생이에요. 저는 매일 학교에 가요. ' +
    '아침 8시에 학교 앞 편의점에 가요. 편의점에서 김밥을 사요. 김밥이 싸고 맛있어요. ' +
    '오전 9시에 교실에서 한국어를 공부해요. 교실이 깨끗하고 커요. ' +
    '오후 2시에 도서관에 가요. 도서관에서 숙제를 해요. 그리고 책을 읽어요. 도서관이 정말 깨끗해요. ' +
    '오후 4시에 학교 앞 카페에서 친구를 만나요. 카페에서 커피를 마셔요. 커피가 뜨겁고 비싸지 않아요. ' +
    '저는 주말 아침에 공원에 가요. 공원에서 친구하고 운동해요. 공원이 깨끗하고 좋아요. 정말 즐거워요. ' +
    '주말 오후에 백화점에 가요. 백화점에서 쇼핑해요. 옷이 예쁘지만 조금 비싸요. 그래서 자주 안 사요. ' +
    '저는 백화점에서 영화도 봐요. 영화가 재미있어요. ' +
    '밤 11시에 기숙사에 와요. 기숙사에서 샤워하고 자요. 저는 학교 도서관하고 공원을 정말 좋아해요.',
  steps: [
    { kr: '아침 8시에 학교 앞 편의점에 가요.', en: 'At 8 in the morning I go to the convenience store in front of the school.', why: '에 = the destination, because the verb is 가다. 학교 앞 is noun + noun with no particle in between.' },
    { kr: '편의점에서 김밥을 사요.', en: 'I buy gimbap at the convenience store.', why: 'Same shop, one syllable longer: 에서, because now something happens there. Say these two sentences back to back until the pair is automatic.' },
    { kr: '도서관이 정말 깨끗해요.', en: 'The library is really clean.', why: 'When you describe the place itself it stops being a location and becomes the subject — so 이/가, never 에서.' },
    { kr: '옷이 예쁘지만 조금 비싸요. 그래서 자주 안 사요.', en: 'The clothes are pretty but a bit expensive. So I do not buy them often.', why: '안 goes immediately before the verb, after the adverb: 자주 안 사요. 예쁘다 is 으-irregular → 예뻐요.' },
    { kr: '저는 백화점에서 영화도 봐요.', en: 'I also watch movies at the department store.', why: '도 (also) replaces 을/를 — 영화도, never 영화를도. Department stores in Korea really do have cinemas on the top floor.' },
  ],
  check: ['앞 (in front of) — if the position words 앞/뒤/옆/위/아래 have not come up yet, use 학교 근처 편의점 instead; the 보기 of Writing 1 already uses 근처.'],
}

const PRACTICE = [P1, P2, P3]

function Practice({ p, tone }) {
  return (
    <Card className={`ring-2 ${tone}`}>
      <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-white">{p.tag}</span>
        <h3 className="font-kr text-3xl text-slate-900 sm:text-4xl">{p.kr}</h3>
      </div>
      <p className="mb-4 text-base font-semibold text-slate-700">{p.en}</p>

      <div className="mb-5 overflow-x-auto">
        <table className="w-full min-w-[30rem] border-separate border-spacing-y-2 text-left text-sm">
          <thead>
            <tr className="text-xs font-extrabold uppercase tracking-wide text-slate-500">
              {p.head.map((h) => (
                <th key={h} className="p-2 font-kr text-base normal-case">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {p.rows.map((r) => (
              <tr key={r[0] + r[1]}>
                {r.map((c, i) => (
                  <td
                    key={i}
                    className={`p-2 font-kr text-lg ${i === 0 ? 'rounded-l-2xl bg-slate-50 text-slate-900' : 'bg-emerald-50 text-emerald-900'} ${i === r.length - 1 ? 'rounded-r-2xl' : ''}`}
                  >
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <FullText text={p.text} label="원고지에 쓰세요" />

      <div className="mt-5 space-y-2">
        {p.steps.map((s, i) => (
          <Step key={s.kr} n={i + 1} {...s} />
        ))}
      </div>

      <div className="mt-4 space-y-3">
        <Callout kind="tip" title="What this one trains">
          <p>{p.trains}</p>
        </Callout>
        <Callout kind="warn" title="확인하세요 — check these with the teacher">
          <ul className="list-disc space-y-1 pl-4">
            {p.check.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Callout>
      </div>
    </Card>
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
            <p>Fill the table (시간 · 어디에서 · 뭐 했어요? · 어땠어요?), then turn every row into 2–3 past-tense sentences. The last column is the one that makes it sound Korean: always say how it <Hi>was</Hi>.</p>
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
            <p className="font-kr text-lg">2시 30분 → <Hi>두 시 삼십 분</Hi></p>
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
            <p className="font-kr text-lg">커피가 뜨겁<Hi>고</Hi> 맛있었어요.</p>
            <p className="font-kr text-lg">샤워하<Hi>고</Hi> 잤어요.</p>
            <p>With adjectives it means "and"; with verbs it means "and then". Tense goes on the <Hi>last</Hi> verb only.</p>
          </Callout>
          <Callout kind="rule" title="-지 않다  (not)">
            <p className="font-kr text-lg">비싸<Hi>지 않았어요</Hi>. · 맵<Hi>지 않고</Hi> 맛있어요.</p>
            <p>Stem + 지 않다. It can take 고 and 지만 just like any other word.</p>
          </Callout>
          <Callout kind="rule" title="-아/어서  (so, because)">
            <p className="font-kr text-lg">싸고 맛있<Hi>어서</Hi> 자주 먹어요.</p>
            <p>Cause first, result second. Important: no 았/었 before 어서 — the tense lives on the final verb.</p>
          </Callout>
          <Callout kind="rule" title="-지만  (but)">
            <p className="font-kr text-lg">피자는 조금 짜<Hi>지만</Hi> 맛있어요.</p>
            <p>Attach straight to the stem. Pair it with 은/는 on both sides to make the contrast obvious.</p>
          </Callout>
        </div>
        <div className="mt-4">
          <Callout kind="warn" title="에 vs 에서 — the mistake the grader is looking for">
            <p className="font-kr text-lg">공원<Hi>에</Hi> 갔어요. <span className="font-sans text-sm text-slate-600">(went TO the park — destination, with 가다/오다)</span></p>
            <p className="font-kr text-lg">공원<Hi>에서</Hi> 운동했어요. <span className="font-sans text-sm text-slate-600">(exercised AT the park — where the action happens)</span></p>
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
            <p className="font-kr text-lg">먹다 → 먹<Hi>고 싶어요</Hi> · 마시다 → 마시<Hi>고 싶어요</Hi> · 가다 → 가<Hi>고 싶어요</Hi></p>
            <p>No 아/어 juggling — 고 attaches to the bare stem, always the same shape.</p>
          </Callout>
          <Callout kind="warn" title="Only for me and you">
            <p>
              -고 싶다 is for <Hi>I</Hi> and <Hi>you</Hi>. For a third person Korean says 먹고 싶<Hi>어 하다</Hi>. At this level, just keep your sentences in 저는 / 씨는 questions.
            </p>
          </Callout>
        </div>
      </Card>

      {/* ---------------- Practice prompts ---------------- */}
      <Card>
        <H3 sub="Same toolbox, three shapes the course has not asked for yet. Written the way the 보기 would write them.">
          ③ What could come next
        </H3>
        <p className="text-sm leading-relaxed text-slate-700">
          The chapters so far give five building blocks — identity (이에요/예요 · 나라 · 직업), time (시/분 · 오전/오후 · 요일),
          place (<Hi>에</Hi> vs <Hi>에서</Hi>), description (형용사 1–3 · <Hi>-고</Hi> · <Hi>-지만</Hi>) and wanting or
          explaining (<Hi>-고 싶다</Hi> · <Hi>-아/어서</Hi>). Every 쓰기 from here is a recombination of those five.
        </p>
      </Card>

      {PRACTICE.map((p, i) => (
        <Practice key={p.tag} p={p} tone={['ring-sky-100', 'ring-amber-100', 'ring-violet-100'][i]} />
      ))}

      {/* ---------------- Vocabulary ---------------- */}
      <Card>
        <H3 sub="형용사 2 — everything from the two adjective pages, with the forms you need for the past-tense text.">Adjectives you can reuse</H3>
        <AdjTable rows={ADJ2} caption="ㅂ = ㅂ-irregular: the ㅂ turns into 우 before a vowel ending." />
        <div className="mt-4">
          <Callout kind="tip" title="The ㅂ-irregular, in one line">
            <p className="font-kr text-xl">맵다 → 맵 + 어요 → 매<Hi>워</Hi>요 → 매<Hi>웠</Hi>어요</p>
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
