import { LessonShell } from '../shell'
import Box from './Box'
import Connectors from './Connectors'
import Order from './Order'
import Reading from './Reading'
import Errors from './Errors'
import Drill from './Drill'


export default function GrammarApp() {
  return (
    <LessonShell
      id="grammar"
      kr="문법 · 연결어미"
      title="The grammar box, the connectors and the exam itself"
      source="총복습 2 · questions 47–90"
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
