import { LessonShell } from '../shell'
import Recipe from './Recipe'
import Table40 from './Table40'
import Drill from './Drill'


export default function VerbsApp() {
  return (
    <LessonShell
      id="verbs"
      kr="동사 활용"
      title="Present · Past · Future — and the 40 verbs"
      source="40 verbos coreanos"
      intro="Three tenses built from one stem. First the recipe and the contractions, then all forty verbs from the handout with an example sentence in each tense, and finally a drill that is generated from that very table. Tap 🔊 to hear any Korean."
    >
      <Recipe />
      <Table40 />
      <Drill />
    </LessonShell>
  )
}
