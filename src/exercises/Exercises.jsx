import { Callout, Card, H3, Section } from '../components/ui'
import { FullText, Hi, Step } from './shared'

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

export default function Exercises() {
  return (
    <Section id="practice" icon="📝" kr="연습" title="Practice — three 쓰기 the course has not asked for yet" tone="violet" tag="연습 1 · 2 · 3">
      <Card>
        <H3 sub="Same toolbox, three shapes the course has not asked for yet. Written the way the 보기 would write them.">
          What could come next
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
    </Section>
  )
}
