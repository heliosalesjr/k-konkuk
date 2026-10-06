import { COUNTRIES, COUNTRY, JOBS, NAMES, ORDER_SENTENCES, PEOPLE } from '../data/content'
import { KINDS, attach, explain, particleFor, pick, shuffle } from './korean'

// Every correct answer is computed from the 받침 rule, so the quiz can never contradict the lesson.

const other = (kind, chosen) => KINDS[kind].pair.find((p) => p !== chosen)

function choice(fields, options, correct) {
  const shuffled = shuffle(options)
  return { type: 'choice', ...fields, options: shuffled, answer: shuffled.indexOf(correct) }
}

function qCopula() {
  const isName = Math.random() < 0.5
  const job = pick(JOBS)
  const word = isName ? pick(NAMES) : job.kr
  const correct = particleFor(word, 'copula')
  return choice(
    {
      title: 'Pick the right ending',
      kr: isName ? `저는 ${word}___.` : `이 사람은 ${word}___.`,
      en: isName ? `I'm ${word}.` : `This person is a ${job.en}.`,
      explain: `${explain(word, 'copula')}  →  ${attach(word, 'copula')}`,
    },
    KINDS.copula.pair,
    correct,
  )
}

function qTopic() {
  const word = Math.random() < 0.2 ? '저' : pick(NAMES)
  const person = PEOPLE.find((p) => p.kr === word)
  const c = COUNTRY[person ? person.country : pick(COUNTRIES).kr]
  const correct = particleFor(word, 'topic')
  return choice(
    {
      title: 'Pick the right particle',
      kr: `${word}___ ${c.kr} 사람이에요.`,
      en: word === '저' ? `I'm from ${c.en}.` : `${person ? person.en : word} is from ${c.en}.`,
      explain: `${explain(word, 'topic')}  →  ${attach(word, 'topic')}`,
    },
    KINDS.topic.pair,
    correct,
  )
}

function qNeg() {
  const job = pick(JOBS)
  const correct = particleFor(job.kr, 'neg').split(' ')[0]
  return choice(
    {
      title: 'Pick 이 or 가',
      kr: `이 사람은 ${job.kr}___ 아니에요.`,
      en: `This person is not a ${job.en}.`,
      explain: `${explain(job.kr, 'neg')}  →  ${attach(job.kr, 'neg')}`,
    },
    ['이', '가'],
    correct,
  )
}

function qBuild() {
  const cop = (w) => particleFor(w, 'copula')
  if (Math.random() < 0.35) {
    const name = pick(NAMES)
    const good = `저는 ${name}${cop(name)}`
    const wrongCop = `저는 ${name}${other('copula', cop(name))}`
    const wrongTopic = `저은 ${name}${cop(name)}`
    return choice(
      {
        title: 'Build the sentence',
        kr: `저, ${name}`,
        en: `“I'm ${name}.”`,
        explain: `저 has no 받침 → 저는.  ${explain(name, 'copula')}  →  ${good}.`,
      },
      [good, wrongCop, wrongTopic],
      good,
    )
  }
  const p = pick(PEOPLE)
  const c = p.country
  const top = particleFor(p.kr, 'topic')
  const good = `${p.kr}${top} ${c} 사람이에요`
  return choice(
    {
      title: 'Build the sentence',
      kr: `${p.kr}, ${c} 사람`,
      en: `“${p.en} is from ${COUNTRY[c].en}.”`,
      explain: `${explain(p.kr, 'topic')}.  사람 → ㅁ 받침 → 이에요  →  ${good}.`,
    },
    [good, `${p.kr}${other('topic', top)} ${c} 사람이에요`, `${p.kr}${top} ${c} 사람예요`, `${p.kr}${other('topic', top)} ${c} 사람예요`],
    good,
  )
}

function qYesNo() {
  const p = pick(PEOPLE)
  const real = COUNTRY[p.country]
  const truth = Math.random() < 0.5
  const asked = truth ? real : COUNTRY[pick(COUNTRIES.filter((c) => c.kr !== real.kr)).kr]
  const name = attach(p.kr, 'topic')
  const good = truth ? `네, ${name} ${asked.kr} 사람이에요.` : `아니요, ${name} ${asked.kr} 사람이 아니에요.`
  const options = truth
    ? [good, `아니요, ${name} ${asked.kr} 사람이에요.`, `네, ${name} ${asked.kr} 사람이 아니에요.`]
    : [good, `네, ${name} ${asked.kr} 사람이에요.`, `아니요, ${name} ${asked.kr} 사람이에요.`]
  return choice(
    {
      title: 'Answer the question',
      fact: `${real.flag}  ${p.kr} = ${real.kr} 사람`,
      kr: `${name} ${asked.kr} 사람이에요?`,
      en: `Is ${p.en} from ${asked.en}?`,
      explain: truth
        ? `The fact matches the question → say 네 and repeat the sentence.`
        : `The fact does NOT match → say 아니요 and use 이 아니에요 (사람 has ㅁ → 이).`,
    },
    options,
    good,
  )
}

function qOrder() {
  const s = pick(ORDER_SENTENCES)
  return { type: 'order', title: 'Put the words in order', parts: s.parts, en: s.en, explain: 'Subject → Time → Place → Object → Verb (last!).' }
}

export function makeQuiz(n = 10) {
  const makers = [qCopula, qCopula, qTopic, qTopic, qNeg, qNeg, qBuild, qBuild, qYesNo, qOrder]
  return shuffle(makers)
    .slice(0, n)
    .map((m) => m())
}
