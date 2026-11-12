import { LessonShell } from '../shell'
import Two from './Two'
import Formal from './Formal'
import Honorific from './Honorific'
import Special from './Special'
import TableHon from './TableHon'
import Drill from './Drill'

const SECTIONS = [
  { id: 'two', label: '🤝 두 가지' },
  { id: 'formal', label: '📢 -습니다' },
  { id: 'honorific', label: '👑 -(으)시-' },
  { id: 'special', label: '⭐ 특별한 동사' },
  { id: 'tablehon', label: '📋 40개 표' },
  { id: 'drill', label: '🎯 연습' },
]

export default function HonorificsApp() {
  return (
    <LessonShell
      id="honorifics"
      kr="존댓말"
      title="Formal style and honorifics — two different switches"
      source="40 verbos pp.7–12 · 총복습 pp.9–10"
      sections={SECTIONS}
      intro="-습니다 changes how formal you sound. -(으)시- shows respect for the person you are talking about. They are independent, and you can use both at once. Here is each one on its own, the verbs that change word completely, and the forty-verb table from the handout."
    >
      <Two />
      <Formal />
      <Honorific />
      <Special />
      <TableHon />
      <Drill />
    </LessonShell>
  )
}
