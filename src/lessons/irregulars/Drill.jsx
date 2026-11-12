import { useMemo } from 'react'
import { Card, H3, Section } from '../../components/ui'
import { PickDrill } from '../drills'
import { IRREGULAR_ANSWERS, MODIFIER_PRACTICE } from '../review'

// Adjective → modifier form. The wrong options are the forms a learner would guess.
function modifierItems() {
  return MODIFIER_PRACTICE.map((a) => {
    const stem = a.base.slice(0, -1)
    const guesses = [`${stem}은`, `${stem}ㄴ`.replace('ㄴ', '는'), `${stem}한`]
    const options = [a.mod, ...guesses.filter((g) => g !== a.mod)].slice(0, 3)
    return {
      kr: `${a.base} + 음식`,
      en: `${a.en} food — which form of the adjective?`,
      options,
      answer: a.mod,
      why: `${a.rule} → ${a.base} becomes ${a.mod}.`,
    }
  })
}

// The review's own irregular questions, as multiple choice.
function irregularItems() {
  const pool = IRREGULAR_ANSWERS.map((a) => a.ans)
  return IRREGULAR_ANSWERS.map((a, i) => {
    const others = pool.filter((x) => x !== a.ans)
    return {
      kr: a.kr.replace(/\([^)]*\)/, '___'),
      en: `${a.en}  ·  from ${a.base}`,
      options: [a.ans, others[(i * 3) % others.length], others[(i * 5 + 2) % others.length]].filter((o, k, x) => x.indexOf(o) === k),
      answer: a.ans,
      why: a.why,
    }
  })
}

const FAMILY_ITEMS = [
  { kr: '걷다 + -아/어서', en: 'walking →', options: ['걸어서', '걷어서', '거러서'], answer: '걸어서', why: 'ㄷ 불규칙: ㄷ becomes ㄹ before a vowel.' },
  { kr: '걷다 + -고', en: 'walk and →', options: ['걷고', '걸고', '걸으고'], answer: '걷고', why: '-고 starts with a consonant, so nothing changes.' },
  { kr: '맵다 + -아/어요', en: 'it is spicy →', options: ['매워요', '맵어요', '매버요'], answer: '매워요', why: 'ㅂ 불규칙: ㅂ becomes 우 before a vowel.' },
  { kr: '맵다 + -지만', en: 'spicy but →', options: ['맵지만', '매우지만', '매워지만'], answer: '맵지만', why: '-지만 starts with a consonant, so the ㅂ stays.' },
  { kr: '쓰다 + -아/어요', en: 'I write →', options: ['써요', '쓰어요', '쓰여요'], answer: '써요', why: 'ㅡ 탈락: the ㅡ disappears before -아/어.' },
  { kr: '바쁘다 + -아/어서', en: 'because I am busy →', options: ['바빠서', '바쁘어서', '바뻐서'], answer: '바빠서', why: 'ㅡ drops, and the new vowel copies the ㅏ of 바.' },
  { kr: '멀다 + -(으)니까', en: 'because it is far →', options: ['머니까', '멀으니까', '멀니까'], answer: '머니까', why: 'ㄹ drops before ㄴ — and never takes 으.' },
  { kr: '멀다 + -ㅂ니까', en: 'is it far? →', options: ['멉니까', '멀습니까', '멀읍니까'], answer: '멉니까', why: 'ㄹ drops before ㅂ: 멉니까.' },
  { kr: '살다 + -(으)면', en: 'if I live →', options: ['살면', '살으면', '사면'], answer: '살면', why: 'ㄹ stems never take 으, and ㅁ is not ㄴ/ㅂ/ㅅ, so the ㄹ stays.' },
  { kr: '닫다 + -아/어요', en: 'I close →', options: ['닫아요', '달아요', '다다요'], answer: '닫아요', why: '닫다 is REGULAR, even though it ends in ㄷ.' },
  { kr: '받다 + -(으)ㄹ 거예요', en: 'I will receive →', options: ['받을 거예요', '발을 거예요', '받를 거예요'], answer: '받을 거예요', why: '받다 is REGULAR: 받을 거예요.' },
  { kr: '듣다 + -(으)세요', en: 'please listen →', options: ['들으세요', '듣으세요', '들세요'], answer: '들으세요', why: 'ㄷ becomes ㄹ before 으: 들으세요.' },
]

export default function Drill() {
  const modifiers = useMemo(modifierItems, [])
  const irregulars = useMemo(irregularItems, [])

  return (
    <Section id="drill" icon="🎯" kr="연습" title="Practise the irregulars and the modifier form" tone="amber" tag="built from the review answers">
      <Card>
        <H3 sub="Verb plus ending. First decide whether the ending starts with a vowel — that is the whole question.">불규칙 · stem + ending</H3>
        <PickDrill prompt="which form?" items={FAMILY_ITEMS} />
      </Card>
      <Card>
        <H3 sub="The sentences from questions 30–39, as multiple choice.">From the exam · 30–39</H3>
        <PickDrill prompt="complete the sentence" items={irregulars} />
      </Card>
      <Card>
        <H3 sub="Put each adjective in front of a noun.">관형형 · adjective + noun</H3>
        <PickDrill prompt="pick the modifier form" items={modifiers} big />
      </Card>
    </Section>
  )
}
