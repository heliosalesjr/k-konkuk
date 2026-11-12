// The map of the whole course, in one place.
//
// Everything that needs to know "what exists and where" reads from here: the home page,
// the navigation on every page, and the progression strips inside the lessons. If a
// section moves, it moves here once.
//
// Two axes:
//   UNITS  — the order the classes actually happened (which is also the order of difficulty)
//   TOPICS — one subject followed ACROSS the units, because a topic comes back
//            more than once, each time with more to it. That ladder is the point:
//            the repeats are not duplicates, they are the next step up.

export const UNITS = [
  {
    id: 'u1', n: 1, kr: '기초', en: 'Foundations', icon: '🌱',
    blurb: 'Who I am, where I am from, and how a Korean sentence is put together.',
    tone: 'from-yellow-200 to-rose-100', ring: 'ring-amber-200', dot: 'bg-amber-400',
    source: '1과 인사와 소개',
  },
  {
    id: 'u2', n: 2, kr: '현재와 과거', en: 'Present & Past', icon: '🕒',
    blurb: 'Verbs and adjectives in the present and the past, plus the writing worksheets.',
    tone: 'from-sky-200 to-violet-100', ring: 'ring-sky-200', dot: 'bg-sky-400',
    source: '2과 · 문법 및 표현 1–4',
  },
  {
    id: 'u3', n: 3, kr: '총복습', en: 'Full review', icon: '📦',
    blurb: 'The last month, revisited: the future tense, honorifics, particles, irregulars and the exam grammar.',
    tone: 'from-emerald-200 to-amber-100', ring: 'ring-emerald-200', dot: 'bg-emerald-400',
    source: '40 verbos · 총복습 2 (8–15과)',
  },
]

// Every page, in reading order, with its sections. `label` is what the nav shows.
export const PAGES = [
  {
    id: 'basics', unit: 'u1', href: 'basics.html', icon: '🌱',
    kr: '인사와 소개', en: 'Greetings & introductions',
    sections: [
      { id: 'start', label: '🏠 시작' },
      { id: 'greetings', label: '👋 인사' },
      { id: 'structure', label: '🧱 어순' },
      { id: 'batchim', label: '🔍 받침' },
      { id: 'ieyo', label: '🙋 이에요/예요' },
      { id: 'eunneun', label: '🌍 은/는' },
      { id: 'anieyo', label: '🚫 아니에요' },
      { id: 'speak', label: '🎤 말하기' },
      { id: 'words', label: '📚 단어' },
      { id: 'quiz', label: '📝 퀴즈' },
    ],
  },
  {
    id: 'materials', unit: 'u2', href: 'materials.html', icon: '📘',
    kr: '문법 정리', en: 'Present · Past · Adverbs',
    sections: [
      { id: 'top', label: '🏠 시작' },
      { id: 'present', label: '🕒 현재' },
      { id: 'past', label: '⏪ 과거' },
      { id: 'adverbs', label: '🔸 부사' },
    ],
  },
  {
    id: 'exercises', unit: 'u2', href: 'exercises.html', icon: '✍️',
    kr: '쓰기 · 연습 · 말하기', en: 'Writing, practice & talking',
    sections: [
      { id: 'top', label: '🏠 시작' },
      { id: 'writing', label: '✍️ 쓰기' },
      { id: 'practice', label: '📝 연습 문제' },
      { id: 'talking', label: '🗣️ 질문 25개' },
    ],
  },
  {
    id: 'verbs', unit: 'u3', href: 'verbs.html', icon: '🧪',
    kr: '동사 활용', en: 'Verb conjugation',
    sections: [
      { id: 'recipe', label: '🧪 만들기' },
      { id: 'table40', label: '📚 동사 40개' },
      { id: 'drill', label: '🎯 동사 연습' },
    ],
  },
  {
    id: 'honorifics', unit: 'u3', href: 'honorifics.html', icon: '🙇',
    kr: '존댓말', en: 'Formal & honorific',
    sections: [
      { id: 'two', label: '🤝 두 가지' },
      { id: 'formal', label: '📢 -습니다' },
      { id: 'honorific', label: '👑 -(으)시-' },
      { id: 'special', label: '⭐ 특별한 동사' },
      { id: 'tablehon', label: '📋 40개 표' },
      { id: 'drill', label: '🎯 존댓말 연습' },
    ],
  },
  {
    id: 'counters', unit: 'u3', href: 'counters.html', icon: '🔢',
    kr: '수 · 부사 · 조사', en: 'Counters, adverbs & particles',
    sections: [
      { id: 'counters', label: '🔢 단위 명사' },
      { id: 'money', label: '💰 돈' },
      { id: 'adverbs', label: '🔸 부사 10개' },
      { id: 'particles', label: '🧲 조사' },
      { id: 'fixed', label: '📌 고정 표현' },
      { id: 'drill', label: '🎯 조사 연습' },
    ],
  },
  {
    id: 'irregulars', unit: 'u3', href: 'irregulars.html', icon: '⚡',
    kr: '불규칙 · 관형형', en: 'Irregulars & adjectives',
    sections: [
      { id: 'irregular', label: '⚡ 불규칙' },
      { id: 'modifier', label: '🎨 관형형' },
      { id: 'drill', label: '🎯 불규칙 연습' },
    ],
  },
  {
    id: 'grammar', unit: 'u3', href: 'grammar.html', icon: '🧰',
    kr: '문법 · 연결어미', en: 'Grammar box & connectors',
    sections: [
      { id: 'box', label: '🧰 문법 상자' },
      { id: 'connectors', label: '🔗 연결어미' },
      { id: 'order', label: '🧩 어순' },
      { id: 'reading', label: '📖 읽기' },
      { id: 'errors', label: '❌ 고치기' },
      { id: 'drill', label: '🎯 문법 연습' },
    ],
  },
]

// A topic and its ladder. Each stage says what that visit ADDS — so when the same
// subject comes back you can see why, instead of wondering which one to read.
export const TOPICS = [
  {
    id: 'tense', icon: '🕒', kr: '시제', en: 'Verb tenses',
    stages: [
      { page: 'materials', section: 'present', adds: 'the present: -아요 / -어요 / 해요' },
      { page: 'materials', section: 'past', adds: 'the past: -았 / -었 / 했어요' },
      { page: 'verbs', section: 'recipe', adds: 'the future, the contractions, all three rules side by side' },
      { page: 'verbs', section: 'table40', adds: '40 verbs in all three tenses, with example sentences' },
    ],
  },
  {
    id: 'politeness', icon: '🙇', kr: '존댓말', en: 'Politeness levels',
    stages: [
      { page: 'basics', section: 'ieyo', adds: 'the polite -요 style you start with' },
      { page: 'honorifics', section: 'formal', adds: 'the formal -습니다 style, for exams and presentations' },
      { page: 'honorifics', section: 'honorific', adds: 'honorific -(으)시-, respect for who you talk about' },
      { page: 'honorifics', section: 'special', adds: 'verbs that change word entirely: 드시다, 주무시다, 드리다' },
    ],
  },
  {
    id: 'particles', icon: '🧲', kr: '조사', en: 'Particles',
    stages: [
      { page: 'basics', section: 'eunneun', adds: 'the topic particle 은/는' },
      { page: 'counters', section: 'particles', adds: '에 vs 에서, 에게 vs 께, (으)로, (이)랑, 보다, 마다' },
      { page: 'counters', section: 'fixed', adds: 'expressions where the particle is fixed and must be memorised' },
    ],
  },
  {
    id: 'batchim', icon: '🔍', kr: '받침', en: 'The 받침 rule',
    stages: [
      { page: 'basics', section: 'batchim', adds: 'what a 받침 is, and how it picks 이에요/예요 and 은/는' },
      { page: 'verbs', section: 'recipe', adds: 'it also decides the future: -을 거예요 or -ㄹ 거예요' },
      { page: 'honorifics', section: 'formal', adds: 'and the formal style: -습니다 or -ㅂ니다' },
      { page: 'honorifics', section: 'honorific', adds: 'and the honorific: -으세요 or -세요' },
    ],
  },
  {
    id: 'order', icon: '🧱', kr: '어순', en: 'Word order',
    stages: [
      { page: 'basics', section: 'structure', adds: 'subject → object → verb, and the verb always last' },
      { page: 'grammar', section: 'order', adds: 'long sentences: reason before result, adjective chains' },
    ],
  },
  {
    id: 'negation', icon: '🚫', kr: '부정', en: 'Saying no',
    stages: [
      { page: 'basics', section: 'anieyo', adds: '이/가 아니에요 — not being something' },
      { page: 'materials', section: 'adverbs', adds: '안 and -지 않다 — not doing something' },
      { page: 'grammar', section: 'box', adds: '-(으)면 안 되다 — not being allowed to' },
    ],
  },
  {
    id: 'adverbs', icon: '🔸', kr: '부사', en: 'Adverbs',
    stages: [
      { page: 'materials', section: 'adverbs', adds: '지금, 오늘, 매일, 보통 — when and how often' },
      { page: 'counters', section: 'adverbs', adds: 'the exam ten: 열심히, 푹, 다시, 제일, 아직… each with its clue' },
    ],
  },
  {
    id: 'irregular', icon: '⚡', kr: '불규칙', en: 'Irregular stems',
    stages: [
      { page: 'materials', section: 'past', adds: 'the first irregulars: 듣다 → 들었어요, 춥다 → 추웠어요' },
      { page: 'irregulars', section: 'irregular', adds: 'all four families ㄷ ㅂ ㅡ ㄹ, and WHEN each one changes' },
    ],
  },
  {
    id: 'adjectives', icon: '🎨', kr: '형용사', en: 'Adjectives',
    stages: [
      { page: 'materials', section: 'present', adds: 'adjectives take the same endings as verbs' },
      { page: 'materials', section: 'past', adds: 'adjectives in the past: 어땠어요?' },
      { page: 'irregulars', section: 'modifier', adds: 'in front of a noun they change shape: 맵다 → 매운 음식' },
    ],
  },
  {
    id: 'numbers', icon: '🔢', kr: '숫자', en: 'Numbers & counting',
    stages: [
      { page: 'counters', section: 'counters', adds: 'native numbers + a counter for each kind of thing' },
      { page: 'counters', section: 'money', adds: 'Sino numbers for money, dates and minutes' },
    ],
  },
  {
    id: 'speaking', icon: '🗣️', kr: '말하기', en: 'Speaking',
    stages: [
      { page: 'basics', section: 'speak', adds: 'introducing yourself out loud' },
      { page: 'exercises', section: 'talking', adds: 'the 25 partner questions, with an answer for each' },
    ],
  },
  {
    id: 'writing', icon: '✍️', kr: '쓰기', en: 'Writing',
    stages: [
      { page: 'exercises', section: 'writing', adds: 'the two 쓰기 texts, sentence by sentence' },
      { page: 'exercises', section: 'practice', adds: 'three more prompts built from the same toolbox' },
    ],
  },
  {
    id: 'connectors', icon: '🔗', kr: '연결어미', en: 'Joining sentences',
    stages: [
      { page: 'grammar', section: 'connectors', adds: '-아서 vs -(으)니까, -(으)면, -거나, -(으)러' },
    ],
  },
  {
    id: 'exam', icon: '🎯', kr: '시험 대비', en: 'Exam practice',
    stages: [
      { page: 'basics', section: 'quiz', adds: 'the Unit 1 quiz' },
      { page: 'grammar', section: 'reading', adds: 'reading strategies for 중심 생각 and "same content" questions' },
      { page: 'grammar', section: 'errors', adds: 'the nine sentences to repair' },
    ],
  },
]

/* ───────────────────────── lookups ───────────────────────── */

export const pageOf = (id) => PAGES.find((p) => p.id === id)
export const unitOf = (pageId) => UNITS.find((u) => u.id === pageOf(pageId)?.unit)
export const pagesOfUnit = (unitId) => PAGES.filter((p) => p.unit === unitId)
export const sectionOf = (pageId, sectionId) => pageOf(pageId)?.sections.find((s) => s.id === sectionId)

// A readable label for a stage, e.g. "② 문법 정리 · 🕒 현재".
export function stageLabel(stage) {
  const p = pageOf(stage.page)
  const s = sectionOf(stage.page, stage.section)
  return { unit: unitOf(stage.page), page: p, section: s, href: `${p.href}#${stage.section}` }
}

// Every topic ladder that passes through this section, with where in the ladder we are.
export function laddersAt(pageId, sectionId) {
  const out = []
  for (const t of TOPICS) {
    const i = t.stages.findIndex((s) => s.page === pageId && s.section === sectionId)
    if (i !== -1 && t.stages.length > 1) out.push({ topic: t, index: i })
  }
  return out
}

export const TOTAL_SECTIONS = PAGES.reduce((n, p) => n + p.sections.filter((s) => !['start', 'top'].includes(s.id)).length, 0)
