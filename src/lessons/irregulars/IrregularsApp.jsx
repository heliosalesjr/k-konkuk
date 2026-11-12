import { LessonShell } from '../shell'
import Irregular from './Irregular'
import Modifier from './Modifier'
import Drill from './Drill'

const SECTIONS = [
  { id: 'irregular', label: '⚡ 불규칙' },
  { id: 'modifier', label: '🎨 관형형' },
  { id: 'drill', label: '🎯 연습' },
]

export default function IrregularsApp() {
  return (
    <LessonShell
      id="irregulars"
      kr="불규칙 · 관형형"
      title="Irregular stems and adjectives before nouns"
      source="총복습 2 · questions 30–46"
      sections={SECTIONS}
      intro="Four families of verbs rearrange themselves before certain endings — and the whole trick is knowing WHICH endings. Then the other half of the paper: how an adjective changes shape when you put it in front of a noun."
    >
      <Irregular />
      <Modifier />
      <Drill />
    </LessonShell>
  )
}
