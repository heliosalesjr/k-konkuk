import { useMemo } from 'react'
import { Card, H3, Section } from '../../components/ui'
import { PickDrill } from '../drills'
import { formalRule, honorificRule } from '../conjugate'
import { VERBS40 } from '../verbs40'

// Formal: pick the right -습니다 form.
function formalItems() {
  return VERBS40.map((v) => {
    const stem = v.kr.slice(0, -1)
    const wrongA = `${stem}습니다`
    const wrongB = `${stem}ㅂ니다`.replace('ㅂ니다', '읍니다')
    const options = [v.fml[0], wrongA, wrongB].filter((o, i, a) => a.indexOf(o) === i && (i === 0 || o !== v.fml[0]))
    return {
      kr: v.pres,
      en: `${v.en} — now say it in the formal style`,
      options: options.slice(0, 3),
      answer: v.fml[0],
      why: `${formalRule(v).label} · ${formalRule(v).why}`,
    }
  })
}

// Honorific: the subject is someone you respect.
function honorificItems() {
  return VERBS40.filter((v) => v.hon).map((v) => {
    const stem = v.kr.slice(0, -1)
    const wrongA = `${stem}세요`
    const wrongB = `${stem}으세요`
    const options = [v.hon[0], wrongA, wrongB].filter((o, i, a) => a.indexOf(o) === i)
    return {
      kr: v.pres,
      en: `${v.en} — the subject is 할머니. What do you say?`,
      options: options.slice(0, 3),
      answer: v.hon[0],
      why: `${honorificRule(v).label} · ${honorificRule(v).why}`,
    }
  })
}

// 께서 or 께? — depends on whether the respected person acts or receives.
const PARTICLE_ITEMS = [
  { kr: '할머니___ 방에서 책을 읽으세요.', en: 'Grandmother reads a book in her room.', options: ['께서', '께'], answer: '께서', why: 'She is the one DOING the reading → subject → 께서.' },
  { kr: '어머니___ 선물을 드렸어요.', en: 'I gave my mother a present.', options: ['께서', '께'], answer: '께', why: 'I act, she receives → 께 + the humble verb 드리다.' },
  { kr: '선생님___ 여쭤봤어요.', en: 'I asked the teacher.', options: ['께서', '께'], answer: '께', why: 'I am the one asking → 께 + 여쭤보다.' },
  { kr: '아버지___ 음악을 들으세요.', en: 'My father listens to music.', options: ['께서', '께'], answer: '께서', why: 'He is the subject → 께서, and the verb goes honorific.' },
  { kr: '할아버지___ 저에게 말씀하셨어요.', en: 'My grandfather spoke to me.', options: ['께서', '께'], answer: '께서', why: 'He speaks, I receive → he is the subject → 께서.' },
  { kr: '할머니___ 전화드렸어요.', en: 'I called my grandmother.', options: ['께서', '께'], answer: '께', why: 'I make the call → 께 + 전화드리다.' },
]

// Special words: plain verb → honorific word.
const SPECIAL_ITEMS = [
  { kr: '할아버지께서 아침을 ___.', en: 'Grandfather had breakfast.', options: ['드셨어요', '먹으셨어요', '먹었어요'], answer: '드셨어요', why: '먹다 has its own honorific word: 드시다.' },
  { kr: '할머니께서 일찍 ___.', en: 'Grandmother went to sleep early.', options: ['주무셨어요', '자셨어요', '잤어요'], answer: '주무셨어요', why: '자다 → 주무시다.' },
  { kr: '어머니께서 집에 ___.', en: 'Mother is at home.', options: ['계세요', '있으세요', '있어요'], answer: '계세요', why: '있다 (to be in a place) → 계시다.' },
  { kr: '선생님께서 ___.', en: 'The teacher spoke.', options: ['말씀하셨어요', '말하셨어요', '말했어요'], answer: '말씀하셨어요', why: '말하다 → 말씀하시다.' },
  { kr: '저는 아침에 빵을 ___.', en: 'I ate bread in the morning.', options: ['먹었어요', '드셨어요', '잡수셨어요'], answer: '먹었어요', why: 'The subject is ME. Never honour yourself.' },
  { kr: '저는 선생님을 ___.', en: 'I met the teacher.', options: ['뵈었어요', '만나셨어요', '뵙으셨어요'], answer: '뵈었어요', why: 'I am the one meeting someone I respect → the humble verb 뵙다.' },
]

export default function Drill() {
  const formal = useMemo(formalItems, [])
  const honorific = useMemo(honorificItems, [])

  return (
    <Section id="drill" icon="🎯" kr="연습" title="Practise formal and honorific" tone="rose" tag="built from the handout tables">
      <Card>
        <H3 sub="The polite -요 form is on the card. Say the same thing in the formal style.">-요 → -습니다</H3>
        <PickDrill prompt="polite → formal" items={formal} big />
      </Card>
      <Card>
        <H3 sub="Now the subject is your grandmother. Add the honorific.">-요 → -(으)세요</H3>
        <PickDrill prompt="polite → honorific" items={honorific} big />
      </Card>
      <Card>
        <H3 sub="This is the decision the exam really tests. Does the respected person ACT, or RECEIVE?">께서 or 께?</H3>
        <PickDrill prompt="pick the particle" items={PARTICLE_ITEMS} />
      </Card>
      <Card>
        <H3 sub="Six sentences, six traps. Two of them are about yourself — watch out.">The special words</H3>
        <PickDrill prompt="complete the sentence" items={SPECIAL_ITEMS} />
      </Card>
    </Section>
  )
}
