// Everything here comes from the textbook / workbook pages of Lesson 1 (1과 인사와 소개).

export const COUNTRIES = [
  { kr: '한국', en: 'Korea', flag: '🇰🇷' },
  { kr: '중국', en: 'China', flag: '🇨🇳' },
  { kr: '일본', en: 'Japan', flag: '🇯🇵' },
  { kr: '미국', en: 'the USA', flag: '🇺🇸' },
  { kr: '프랑스', en: 'France', flag: '🇫🇷' },
  { kr: '스웨덴', en: 'Sweden', flag: '🇸🇪' },
  { kr: '사우디아라비아', en: 'Saudi Arabia', flag: '🇸🇦' },
  { kr: '몽골', en: 'Mongolia', flag: '🇲🇳' },
  { kr: '호주', en: 'Australia', flag: '🇦🇺' },
  { kr: '브라질', en: 'Brazil', flag: '🇧🇷' },
  { kr: '베트남', en: 'Vietnam', flag: '🇻🇳' },
  { kr: '폴란드', en: 'Poland', flag: '🇵🇱' },
]
export const COUNTRY = Object.fromEntries(COUNTRIES.map((c) => [c.kr, c]))

export const JOBS = [
  { kr: '학생', en: 'student', icon: '🎒' },
  { kr: '회사원', en: 'office worker', icon: '💼' },
  { kr: '가수', en: 'singer', icon: '🎤' },
  { kr: '요리사', en: 'cook / chef', icon: '🧑‍🍳' },
  { kr: '의사', en: 'doctor', icon: '🩺' },
  { kr: '선생님', en: 'teacher', icon: '👩‍🏫' },
  { kr: '주부', en: 'homemaker', icon: '🏡' },
  { kr: '경찰', en: 'police officer', icon: '👮' },
]

// The characters that appear in the book's dialogues.
export const PEOPLE = [
  { kr: '하루나', en: 'Haruna', country: '일본' },
  { kr: '자함', en: 'Zhang Zihan', country: '중국' },
  { kr: '케이트', en: 'Kate', country: '미국' },
  { kr: '엠마', en: 'Emma', country: '호주' },
  { kr: '루카스', en: 'Lucas', country: '브라질' },
  { kr: '알리', en: 'Ali', country: '사우디아라비아' },
  { kr: '조세핀', en: 'Josephine', country: '프랑스' },
  { kr: '다니엘', en: 'Daniel', country: '스웨덴' },
  { kr: '바타르', en: 'Batar', country: '몽골' },
  { kr: '최건우', en: 'Choi Geonu', country: '한국' },
]

// Extra names used in the grammar tables (no country needed).
export const NAMES = [...PEOPLE.map((p) => p.kr), '박주원', '이지현', '크리스틴']

export const CLASSROOM = [
  { kr: '보세요', en: 'Look', icon: '👀' },
  { kr: '읽으세요', en: 'Read', icon: '📖' },
  { kr: '들으세요', en: 'Listen', icon: '👂' },
  { kr: '따라 하세요', en: 'Repeat', icon: '🗣️' },
  { kr: '쓰세요', en: 'Write', icon: '✍️' },
  { kr: '쉬세요', en: 'Take a break', icon: '☕' },
]

export const ANSWERS = [
  { kr: '받침이 있어요', en: 'There is a 받침 (final consonant)', icon: '옷' },
  { kr: '받침이 없어요', en: 'There is no 받침', icon: '오' },
  { kr: '네', en: 'Yes', icon: '🙆' },
  { kr: '아니요', en: 'No', icon: '🙅' },
  { kr: '알아요', en: 'I know / I understand', icon: '💡' },
  { kr: '몰라요', en: "I don't know", icon: '🤷' },
  { kr: '맞아요', en: "That's right", icon: '⭕' },
  { kr: '틀려요', en: "That's wrong", icon: '❌' },
]

export const GREETINGS = [
  { kr: '안녕하세요', en: 'Hello', icon: '👋', note: 'Say it when you meet someone.' },
  {
    kr: '안녕히 가세요',
    en: 'Goodbye — to the person who is leaving',
    icon: '🚶',
    note: 'You STAY, they GO. (Literally: "Go in peace.")',
  },
  {
    kr: '안녕히 계세요',
    en: 'Goodbye — to the person who is staying',
    icon: '🧍',
    note: 'You GO, they STAY. (Literally: "Stay in peace.")',
  },
  { kr: '고맙습니다', alt: '감사합니다', en: 'Thank you', icon: '🙏', sound: '[고맙씀니다] · [감사함니다]' },
  { kr: '미안합니다', alt: '죄송합니다', en: "I'm sorry", icon: '😣', sound: '[미안함니다] · [죄송함니다]' },
  { kr: '괜찮아요', en: "It's okay / No problem", icon: '😊', sound: '[괜차나요]' },
  { kr: '아니에요', en: "Not at all / Don't mention it", icon: '🤗', note: 'The reply to "thank you".' },
]

export const SENTENCE_WORDS = [
  { kr: '저', en: 'I / me (polite)' },
  { kr: '이 사람', en: 'this person' },
  { kr: '씨', en: 'Mr. / Ms. (after a name)' },
  { kr: '이름', en: 'name' },
  { kr: '뭐', en: 'what' },
  { kr: '어느', en: 'which' },
  { kr: '나라', en: 'country' },
  { kr: '사람', en: 'person' },
  { kr: '학교', en: 'school' },
  { kr: '집', en: 'home / house' },
  { kr: '주말', en: 'weekend' },
  { kr: '밥', en: 'rice / a meal' },
  { kr: '사과', en: 'apple' },
  { kr: '날씨', en: 'weather' },
  { kr: '누가', en: 'who (as the subject)' },
  { kr: '여러분', en: 'everyone (to a group)' },
  { kr: '만나서 반가워요', en: 'Nice to meet you' },
]

// Sentences for the "tap the words in order" game. Book order: Subject → Time → Place → Object → Verb.
const S = (base, particle, gloss) => ({ base, particle, gloss, role: 'subj' })
const T = (base, particle, gloss) => ({ base, particle, gloss, role: 'time' })
const P = (base, particle, gloss) => ({ base, particle, gloss, role: 'place' })
const O = (base, particle, gloss) => ({ base, particle, gloss, role: 'obj' })
const V = (base, gloss) => ({ base, particle: '', gloss, role: 'pred' })

export const ORDER_SENTENCES = [
  { en: 'Daniel eats a meal.', parts: [S('다니엘', '이', 'Daniel'), O('밥', '을', 'a meal'), V('먹어요', 'eats')] },
  {
    en: 'Daniel eats a meal at home.',
    parts: [S('다니엘', '이', 'Daniel'), P('집', '에서', 'at home'), O('밥', '을', 'a meal'), V('먹어요', 'eats')],
  },
  {
    en: 'Daniel eats a meal at home on the weekend.',
    parts: [
      S('다니엘', '이', 'Daniel'),
      T('주말', '에', 'on the weekend'),
      P('집', '에서', 'at home'),
      O('밥', '을', 'a meal'),
      V('먹어요', 'eats'),
    ],
  },
  { en: 'Ali goes to school.', parts: [S('알리', '는', 'Ali'), P('학교', '에', 'to school'), V('가요', 'goes')] },
  { en: 'Ming eats an apple.', parts: [S('밍', '이', 'Ming'), O('사과', '를', 'an apple'), V('먹어요', 'eats')] },
  {
    en: 'Lucas is from Brazil.',
    parts: [
      S('루카스', '는', 'Lucas'),
      { base: '브라질', particle: '', gloss: 'Brazil', role: 'pred' },
      { base: '사람', particle: '이에요', gloss: 'person + is', role: 'pred' },
    ],
  },
]

// Dialogues from the speaking pages.
export const DIALOGUES = [
  {
    id: 'from',
    title: 'Where are you from?',
    lines: [
      { who: 'A', kr: '어느 나라 사람이에요?', en: 'Which country are you from?' },
      { who: 'B', kr: '베트남 사람이에요.', en: "I'm from Vietnam." },
      { who: 'A', kr: '루카스는 어느 나라 사람이에요?', en: 'Which country is Lucas from?' },
      { who: 'B', kr: '저는 브라질 사람이에요.', en: "I'm from Brazil." },
    ],
  },
  {
    id: 'name',
    title: "What's your name?",
    lines: [
      { who: 'A', kr: '이름이 뭐예요?', en: "What's your name?" },
      { who: 'B', kr: '하루나예요.', en: "I'm Haruna." },
      { who: 'A', kr: '하루나 씨는 어느 나라 사람이에요?', en: 'Which country are you from, Haruna?' },
      { who: 'B', kr: '저는 일본 사람이에요.', en: "I'm from Japan." },
    ],
  },
  {
    id: 'friends',
    title: 'Introducing two friends',
    cast: { 가: 'Introducer', 나: 'Kate', 다: 'Zhang Zihan' },
    lines: [
      { who: '가', kr: '케이트 씨, 이 사람은 자함 씨예요. 자함 씨, 이 사람은 케이트 씨예요.', en: 'Kate, this is Zihan. Zihan, this is Kate.' },
      { who: '나', kr: '안녕하세요.', en: 'Hello.' },
      { who: '다', kr: '안녕하세요.', en: 'Hello.' },
      { who: '나', kr: '자함 씨는 어느 나라 사람이에요?', en: 'Which country are you from, Zihan?' },
      { who: '다', kr: '저는 중국 사람이에요. 케이트 씨는 어느 나라 사람이에요?', en: "I'm from China. Which country are you from, Kate?" },
      { who: '나', kr: '저는 미국 사람이에요. 만나서 반가워요.', en: "I'm from the USA. Nice to meet you." },
      { who: '다', kr: '만나서 반가워요.', en: 'Nice to meet you too.' },
    ],
  },
]
