import { LessonShell } from '../shell'
import Counters from './Counters'
import Money from './Money'
import Adverbs from './Adverbs'
import Particles from './Particles'
import Fixed from './Fixed'
import Drill from './Drill'


export default function CountersApp() {
  return (
    <LessonShell
      id="counters"
      kr="수 · 부사 · 조사"
      title="Counting, money, adverbs and particles"
      source="총복습 2 · questions 1–29 + 조사 복습"
      intro="The first half of the review paper: how to count things, how to read a price, the ten adverbs and the clue that gives each one away, and the particles that decide what each noun is doing. Every answer from the paper is here, hidden behind a gap you can tap."
    >
      <Counters />
      <Money />
      <Adverbs />
      <Particles />
      <Fixed />
      <Drill />
    </LessonShell>
  )
}
