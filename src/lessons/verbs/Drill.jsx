import { useMemo } from 'react'
import { Card, H3, Section } from '../../components/ui'
import { PickDrill } from '../drills'
import { futureRule, pastRule, presentRule } from '../conjugate'
import { VERBS40 } from '../verbs40'

// Every question is built FROM the handout's own table, so a drill can never contradict it.
function buildTenseItems(field, label, ruleFn) {
  return VERBS40.map((v) => {
    const pool = VERBS40.filter((x) => x.kr !== v.kr && x[field] !== v[field]).map((x) => x[field])
    const options = [v[field]]
    for (const k of [v.n * 7, v.n * 13 + 5, v.n * 3 + 1]) {
      const cand = pool[k % pool.length]
      if (options.length < 3 && !options.includes(cand)) options.push(cand)
    }
    const r = ruleFn(v)
    return {
      kr: v.kr,
      en: `${v.en} — put it in the ${label}`,
      options,
      answer: v[field],
      why: `${r.label} · ${r.why}${v.tip ? ` (${v.tip})` : ''}`,
    }
  })
}

// "Which tense is this sentence in?" — the time word is the giveaway.
function buildTimeItems() {
  const out = []
  VERBS40.slice(0, 24).forEach((v) => {
    ;[
      ['pres', '현재 present'],
      ['past', '과거 past'],
      ['fut', '미래 future'],
    ].forEach(([k, label]) => {
      out.push({
        kr: v.ex[k][0],
        en: v.ex[k][1],
        options: ['현재 present', '과거 past', '미래 future'],
        answer: label,
        why: `The verb is ${v[k]}, and the time word points the same way.`,
      })
    })
  })
  return out
}

export default function Drill() {
  const present = useMemo(() => buildTenseItems('pres', 'present', presentRule), [])
  const past = useMemo(() => buildTenseItems('past', 'past', pastRule), [])
  const future = useMemo(() => buildTenseItems('fut', 'future', futureRule), [])
  const time = useMemo(() => buildTimeItems(), [])

  return (
    <Section id="drill" icon="🎯" kr="연습" title="Practise the three tenses" tone="rose" tag="built from the 40-verb table">
      <Card>
        <H3 sub="The dictionary form is on the card. Pick the polite present.">현재 · present</H3>
        <PickDrill prompt="dictionary form → -아요 / -어요 / 해요" items={present} big />
      </Card>
      <Card>
        <H3 sub="Same verbs, now in the past. Remember: the past makes the same ㅏ/ㅗ choice as the present.">과거 · past</H3>
        <PickDrill prompt="dictionary form → -았어요 / -었어요 / 했어요" items={past} big />
      </Card>
      <Card>
        <H3 sub="Now ask the other question: does the stem have a 받침?">미래 · future</H3>
        <PickDrill prompt="dictionary form → -을 거예요 / -ㄹ 거예요" items={future} big />
      </Card>
      <Card>
        <H3 sub="Read the sentence from the handout and say which tense it is in. The time word usually gives it away before the verb does.">
          시제 찾기 · spot the tense
        </H3>
        <PickDrill prompt="which tense is this sentence in?" items={time} />
      </Card>
    </Section>
  )
}
