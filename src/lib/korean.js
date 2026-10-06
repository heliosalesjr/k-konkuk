// Hangul helpers: break a syllable apart, find out if it has a 받침 (final consonant),
// and pick the right particle / ending for a word.

const CHO = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ']
const JUNG = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ']
const JONG = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ']

export function decompose(ch) {
  const code = ch.charCodeAt(0) - 0xac00
  if (code < 0 || code > 11171) return null
  return {
    cho: CHO[Math.floor(code / 588)],
    jung: JUNG[Math.floor((code % 588) / 28)],
    jong: JONG[code % 28],
  }
}

export function lastSyllable(word) {
  const chars = [...word.trim()]
  return chars.length ? chars[chars.length - 1] : ''
}

// Returns null when the last character is not a Hangul syllable.
export function analyze(word) {
  const syllable = lastSyllable(word)
  const parts = syllable ? decompose(syllable) : null
  if (!parts) return null
  return { syllable, ...parts, hasBatchim: parts.jong !== '' }
}

// pair = [after 받침 O, after 받침 X]
export const KINDS = {
  copula: { pair: ['이에요', '예요'] },
  topic: { pair: ['은', '는'] },
  subject: { pair: ['이', '가'] },
  object: { pair: ['을', '를'] },
  neg: { pair: ['이 아니에요', '가 아니에요'] },
}

export function particleFor(word, kind) {
  const a = analyze(word)
  if (!a) return null
  return KINDS[kind].pair[a.hasBatchim ? 0 : 1]
}

export function attach(word, kind) {
  const p = particleFor(word, kind)
  return p ? word + p : word
}

export function explain(word, kind) {
  const a = analyze(word)
  if (!a) return ''
  const [withB, withoutB] = KINDS[kind].pair
  return a.hasBatchim
    ? `${a.syllable} has ${a.jong} at the bottom → 받침 O → ${withB}`
    : `${a.syllable} has nothing at the bottom → 받침 X → ${withoutB}`
}

export function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export const pick = (arr) => arr[Math.floor(Math.random() * arr.length)]

// Text-to-speech using the browser's built-in Korean voice (if the device has one).
export function speak(text) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
  const synth = window.speechSynthesis
  synth.cancel()
  const u = new SpeechSynthesisUtterance(text)
  u.lang = 'ko-KR'
  u.rate = 0.85
  const voice = synth.getVoices().find((v) => v.lang.replace('_', '-').toLowerCase().startsWith('ko'))
  if (voice) u.voice = voice
  synth.speak(u)
}
