// Works out WHICH rule of the handout produces a verb's form, so the conjugator can
// explain itself instead of just showing the answer. The forms themselves always come
// from verbs40.js (the handout), never from these functions.

import { analyze } from '../lib/korean'

export const stemOf = (dict) => dict.slice(0, -1)

const isHada = (dict) => dict.endsWith('하다')

// -아요 / -어요 / 해요
export function presentRule(v) {
  const stem = stemOf(v.kr)
  if (isHada(v.kr)) return { label: '-하다 → 해요', add: '해요', why: '하다 has its own shape: 해요.' }
  const a = analyze(stem)
  const bright = a && (a.jung === 'ㅏ' || a.jung === 'ㅗ')
  return bright
    ? { label: 'ㅏ / ㅗ → -아요', add: '아요', why: `The last vowel of ${stem} is ${a.jung} → -아요.` }
    : { label: 'any other vowel → -어요', add: '어요', why: `The last vowel of ${stem} is ${a ? a.jung : '?'} → -어요.` }
}

// -았어요 / -었어요 / 했어요 — the same choice as the present
export function pastRule(v) {
  const stem = stemOf(v.kr)
  if (isHada(v.kr)) return { label: '-하다 → 했어요', add: '했어요', why: '하다 → 했어요.' }
  const a = analyze(stem)
  const bright = a && (a.jung === 'ㅏ' || a.jung === 'ㅗ')
  return bright
    ? { label: 'ㅏ / ㅗ → -았어요', add: '았어요', why: `Same vowel as the present (${a.jung}) → -았어요.` }
    : { label: 'any other vowel → -었어요', add: '었어요', why: `Same vowel as the present (${a ? a.jung : '?'}) → -었어요.` }
}

// -(으)ㄹ 거예요
export function futureRule(v) {
  const stem = stemOf(v.kr)
  if (isHada(v.kr)) return { label: '-하다 → -할 거예요', add: 'ㄹ 거예요', why: '하다 → 할 거예요.' }
  const a = analyze(stem)
  if (a && a.jong === 'ㄹ') return { label: 'ㄹ stem → -ㄹ 거예요', add: 'ㄹ 거예요', why: `${stem} already ends in ㄹ, so NO 을 is added.` }
  if (v.irr === 'ㄷ') return { label: 'ㄷ 불규칙 → -을 거예요', add: '을 거예요', why: 'The ㄷ turns into ㄹ before the vowel, then 을 거예요.' }
  if (a && a.hasBatchim) return { label: '받침 O → -을 거예요', add: '을 거예요', why: `${a.syllable} has ${a.jong} at the bottom → 을 거예요.` }
  return { label: '받침 X → -ㄹ 거예요', add: 'ㄹ 거예요', why: `${a ? a.syllable : stem} has nothing at the bottom → ㄹ 거예요.` }
}

// -습니다 / -ㅂ니다
export function formalRule(v) {
  const stem = stemOf(v.kr)
  const a = analyze(stem)
  if (a && a.jong === 'ㄹ') return { label: 'ㄹ stem → ㄹ drops, -ㅂ니다', why: `${stem} loses its ㄹ before ㅂ: 삽니다, 엽니다, 놉니다.` }
  if (a && a.hasBatchim) return { label: '받침 O → -습니다', why: `${a.syllable} has ${a.jong} at the bottom → -습니다.` }
  return { label: '받침 X → -ㅂ니다', why: `${a ? a.syllable : stem} has nothing at the bottom → -ㅂ니다.` }
}

// -(으)세요
export function honorificRule(v) {
  const stem = stemOf(v.kr)
  if (v.sp) return { label: 'a special word', why: 'This verb has its own honorific word — you have to learn it.' }
  const a = analyze(stem)
  if (a && a.jong === 'ㄹ') return { label: 'ㄹ stem → ㄹ drops, -세요', why: `${stem} loses its ㄹ before 시: 사세요, 여세요, 만드세요.` }
  if (v.irr === 'ㄷ') return { label: 'ㄷ 불규칙 → -으세요', why: 'ㄷ turns into ㄹ before 으: 들으세요, 걸으세요.' }
  if (a && a.hasBatchim) return { label: '받침 O → -으세요', why: `${a.syllable} has ${a.jong} at the bottom → -으세요.` }
  return { label: '받침 X → -세요', why: `${a ? a.syllable : stem} has nothing at the bottom → -세요.` }
}
