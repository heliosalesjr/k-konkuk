import { useMemo } from 'react'
import { Card, H3, Section } from '../../components/ui'
import { PickDrill } from '../drills'
import { CONNECTOR_ANSWERS, GRAMMAR_BOX, GRAMMAR_QA } from '../review'

// "Which grammar point does this situation need?" — straight from the toolbox.
function boxItems() {
  const all = GRAMMAR_BOX.map((g) => g.kr)
  return GRAMMAR_BOX.map((g, i) => {
    const others = all.filter((x) => x !== g.kr)
    return {
      kr: g.ex,
      en: `${g.exEn}  ·  which grammar point is this?`,
      options: [g.kr, others[(i * 3) % others.length], others[(i * 5 + 1) % others.length]].filter((o, k, a) => a.indexOf(o) === k),
      answer: g.kr,
      why: `${g.kr} = ${g.use}.`,
    }
  })
}

// The exam dialogues, as a choice of grammar tag.
function qaItems() {
  const all = GRAMMAR_QA.map((q) => q.tag)
  return GRAMMAR_QA.map((q, i) => {
    const others = all.filter((x) => x !== q.tag)
    return {
      kr: q.q,
      en: `${q.qEn}  ·  what shape does the answer need?`,
      options: [q.tag, others[(i * 3) % others.length], others[(i * 5 + 2) % others.length]].filter((o, k, a) => a.indexOf(o) === k),
      answer: q.tag,
      why: `${q.why}  →  ${q.a}`,
    }
  })
}

function connectorItems() {
  const pool = CONNECTOR_ANSWERS.map((c) => c.ans)
  return CONNECTOR_ANSWERS.map((c, i) => {
    const others = pool.filter((x) => x !== c.ans)
    return {
      kr: c.kr.replace(/\([^)]*\)/, '___'),
      en: c.en,
      options: [c.ans, others[(i * 2) % others.length], others[(i * 4 + 1) % others.length]].filter((o, k, a) => a.indexOf(o) === k),
      answer: c.ans,
      why: c.why,
    }
  })
}

const GOLDEN_ITEMS = [
  { kr: '추___ 문을 닫으세요.', en: "It's cold, so please close the door.", options: ['우니까', '워서'], answer: '우니까', why: 'A request follows (닫으세요) → -(으)니까.' },
  { kr: '배가 아파___ 못 먹었어요.', en: "My stomach hurt, so I couldn't eat.", options: ['서', '니까'], answer: '서', why: 'A plain statement follows → -아서.' },
  { kr: '시험이 끝났___ 영화 보러 갈까요?', en: 'The exam is over, so shall we go to the cinema?', options: ['으니까', '어서'], answer: '으니까', why: 'A suggestion follows (갈까요?) → -(으)니까, and it accepts the past.' },
  { kr: '도서관에 ___ 공부해요.', en: 'I go to the library and study there.', options: ['가서', '가니까'], answer: '가서', why: 'Two actions in sequence in the same place → -아서.' },
  { kr: '많이 ___ 여기에서 쉴까요?', en: 'If it hurts a lot, shall we rest here?', options: ['아프면', '아파서'], answer: '아프면', why: 'A condition, not a reason → -(으)면.' },
  { kr: '책을 ___ 영화를 보고 싶어요.', en: 'I want to read books or watch films.', options: ['읽거나', '읽어서'], answer: '읽거나', why: 'A choice between two things → -거나.' },
  { kr: '공원에 ___ 갔습니다.', en: 'I went to the park to have fun.', options: ['놀러', '놀고'], answer: '놀러', why: 'A purpose in front of 가다 → -(으)러.' },
  { kr: '한국어를 배우___ 왔어요.', en: 'I came to learn Korean.', options: ['러', '고'], answer: '러', why: 'Purpose with 오다 → -(으)러 오다.' },
]

export default function Drill() {
  const box = useMemo(boxItems, [])
  const qa = useMemo(qaItems, [])
  const connectors = useMemo(connectorItems, [])

  return (
    <Section id="drill" icon="🎯" kr="연습" title="Practise the grammar box and the connectors" tone="orange" tag="built from the review answers">
      <Card>
        <H3 sub="The golden rule, eight times. Ask yourself what comes in the second half.">-아서 vs -(으)니까 and friends</H3>
        <PickDrill prompt="pick the connector" items={GOLDEN_ITEMS} />
      </Card>
      <Card>
        <H3 sub="Read the sentence and name the grammar point it uses.">문법 상자 · name the point</H3>
        <PickDrill prompt="which grammar point?" items={box} />
      </Card>
      <Card>
        <H3 sub="Someone asks you this. What shape does your answer need to be?">대화 · what does the answer need?</H3>
        <PickDrill prompt="pick the shape of the answer" items={qa} />
      </Card>
      <Card>
        <H3 sub="The sentences from questions 59–64, as multiple choice.">From the exam · 59–64</H3>
        <PickDrill prompt="complete the sentence" items={connectors} />
      </Card>
    </Section>
  )
}
