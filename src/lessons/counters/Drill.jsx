import { useMemo } from 'react'
import { Card, H3, Section } from '../../components/ui'
import { PickDrill } from '../drills'
import { ADVERBS3, ADVERB_ANSWERS, COUNTERS, PARTICLE_ANSWERS } from '../review'

const THING_COUNTER = [
  ['사과', '개'], ['빵', '개'], ['친구', '명'], ['학생', '명'], ['고양이', '마리'], ['개', '마리'],
  ['책', '권'], ['공책', '권'], ['카드', '장'], ['사진', '장'], ['표', '장'], ['컴퓨터', '대'],
  ['자동차', '대'], ['커피', '잔'], ['물', '잔'], ['맥주', '병'], ['주스', '캔'],
]

function counterItems() {
  const all = COUNTERS.map((c) => c.kr)
  return THING_COUNTER.map(([thing, counter], i) => {
    const others = all.filter((c) => c !== counter)
    return {
      kr: `${thing} 세 ___`,
      en: `three ${COUNTERS.find((c) => c.kr === counter).en.split(',')[0]} — which counter?`,
      options: [counter, others[i % others.length], others[(i + 3) % others.length]].filter((o, k, a) => a.indexOf(o) === k),
      answer: counter,
      why: `${counter} = ${COUNTERS.find((c) => c.kr === counter).en}. Example from the handout: ${COUNTERS.find((c) => c.kr === counter).ex}.`,
    }
  })
}

const POOL = ['에', '에서', '께', '께서', '에게', '로', '랑', '보다', '마다', '까지', '부터', '를', '가', '는', '와', '하고', '을', '이', '께서는']

function particleItems() {
  return PARTICLE_ANSWERS.map((p, i) => {
    const others = POOL.filter((x) => x !== p.ans)
    return {
      kr: p.kr.replace(/\([^)]*\)/, '___'),
      en: p.en,
      options: [p.ans, others[(i * 5) % others.length], others[(i * 7 + 2) % others.length]].filter((o, k, a) => a.indexOf(o) === k),
      answer: p.ans,
      why: p.why,
    }
  })
}

function adverbItems() {
  const all = ADVERBS3.map((a) => a.kr)
  return ADVERB_ANSWERS.map((a, i) => {
    const others = all.filter((x) => x !== a.ans)
    return {
      kr: a.kr.replace(/\([^)]*\)/, '___'),
      en: a.en,
      options: [a.ans, others[(i * 3) % others.length], others[(i * 5 + 1) % others.length]].filter((o, k, x) => x.indexOf(o) === k),
      answer: a.ans,
      why: `${a.ans} = ${ADVERBS3.find((x) => x.kr === a.ans)?.en ?? ''}. Clue: ${ADVERBS3.find((x) => x.kr === a.ans)?.clue ?? ''}.`,
    }
  })
}

const PLACE_ITEMS = [
  { kr: '편의점이 어디___ 있어요?', en: 'Where is the convenience store?', options: ['에', '에서'], answer: '에', why: '있다/없다 always take 에.' },
  { kr: '집___ 영화를 봐요.', en: 'I watch films at home.', options: ['에', '에서'], answer: '에서', why: 'Watching HAPPENS at home → 에서.' },
  { kr: '학교___ 가요.', en: 'I go to school.', options: ['에', '에서'], answer: '에', why: 'A destination with 가다/오다 → 에.' },
  { kr: '도서관___ 공부했어요.', en: 'I studied at the library.', options: ['에', '에서'], answer: '에서', why: 'Studying HAPPENS there → 에서.' },
  { kr: '교실에 컴퓨터가 열 대 있___요.', en: 'There are ten computers in the classroom.', options: ['어', '으'], answer: '어', why: '있다 → 있어요. The place takes 에 because of 있다.' },
  { kr: '어느 나라___ 오셨어요?', en: 'Which country are you from?', options: ['에서', '에'], answer: '에서', why: 'Where you came FROM → 에서.' },
  { kr: '서울___ 부산까지', en: 'from Seoul to Busan', options: ['에서', '부터'], answer: '에서', why: 'Places use 에서…까지. Times use 부터…까지.' },
  { kr: '오늘___ 모레까지', en: 'from today until the day after tomorrow', options: ['부터', '에서'], answer: '부터', why: 'Times use 부터…까지.' },
]

const NUMBER_ITEMS = [
  { kr: '사과 ___ 개 주세요.', en: 'Three apples, please.', options: ['세', '삼', '셋'], answer: '세', why: 'Counting things → native numbers, and 셋 becomes 세 in front of a counter.' },
  { kr: '친구 ___ 명', en: 'two friends', options: ['두', '이', '둘'], answer: '두', why: '둘 → 두 in front of a counter.' },
  { kr: '___ 살이에요.', en: "I'm twenty.", options: ['스무', '스물', '이십'], answer: '스무', why: 'Age takes native numbers + 살, and 스물 → 스무.' },
  { kr: '커피 ___ 잔', en: 'one coffee', options: ['한', '일', '하나'], answer: '한', why: '하나 → 한 in front of a counter.' },
  { kr: '3,000원 = ___ 원', en: 'three thousand won', options: ['삼천', '세천', '삼만'], answer: '삼천', why: 'Money uses Sino-Korean numbers: 삼천.' },
  { kr: '10,000원 = ___ 원', en: 'ten thousand won', options: ['만', '일만', '십천'], answer: '만', why: 'Never say 일 in front of 만.' },
  { kr: '10월 = ___', en: 'October', options: ['시월', '십월', '열월'], answer: '시월', why: '10월 is read 시월 — an irregular month.' },
  { kr: '6월 = ___', en: 'June', options: ['유월', '육월', '여섯월'], answer: '유월', why: '6월 is read 유월 — the other irregular month.' },
]

export default function Drill() {
  const counters = useMemo(counterItems, [])
  const particles = useMemo(particleItems, [])
  const adverbs = useMemo(adverbItems, [])

  return (
    <Section id="drill" icon="🎯" kr="연습" title="Practise counters, numbers, adverbs and particles" tone="rose" tag="built from the review answers">
      <Card>
        <H3 sub="Which counter does this thing take?">단위 명사 · counters</H3>
        <PickDrill prompt="pick the counter" items={counters} big />
      </Card>
      <Card>
        <H3 sub="Native or Sino? Counting things, age and hours use native; money, dates and minutes use Sino.">숫자 · numbers</H3>
        <PickDrill prompt="pick the right number word" items={NUMBER_ITEMS} />
      </Card>
      <Card>
        <H3 sub="The sentences from questions 11–20, with the adverb removed.">부사 · adverbs</H3>
        <PickDrill prompt="pick the adverb" items={adverbs} />
      </Card>
      <Card>
        <H3 sub="The classic pair. Ask yourself: does something just EXIST there, or does something HAPPEN there?">에 vs 에서</H3>
        <PickDrill prompt="pick the particle" items={PLACE_ITEMS} />
      </Card>
      <Card>
        <H3 sub="The sentences from questions 21–29, with the particle removed.">조사 · particles</H3>
        <PickDrill prompt="pick the particle" items={particles} />
      </Card>
    </Section>
  )
}
