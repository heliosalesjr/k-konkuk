import { LessonShell } from '../shell'
import Box from './Box'
import Connectors from './Connectors'
import Order from './Order'
import Reading from './Reading'
import Errors from './Errors'
import Drill from './Drill'

const SECTIONS = [
  { id: 'box', label: '🧰 문법 상자' },
  { id: 'connectors', label: '🔗 연결어미' },
  { id: 'order', label: '🧩 어순' },
  { id: 'reading', label: '📖 읽기' },
  { id: 'errors', label: '❌ 고치기' },
  { id: 'drill', label: '🎯 연습' },
]

export default function GrammarApp() {
  return (
    <LessonShell
      id="grammar"
      kr="문법 · 연결어미"
      title="The grammar box, the connectors and the exam itself"
      source="총복습 2 · questions 47–90"
      sections={SECTIONS}
      intro="The nine grammar points of the semester, the connector pair the exam always tests (-아서 against -(으)니까), how to assemble a long sentence, the three reading strategies, and the nine sentences you have to repair. Tap to reveal every answer."
    >
      <Box />
      <Connectors />
      <Order />
      <Reading />
      <Errors />
      <Drill />
    </LessonShell>
  )
}
