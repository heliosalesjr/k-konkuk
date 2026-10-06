// Everything here comes from the 건국 한국어 1-1 pages (verbs, adjectives, 문법 및 표현 1–4,
// 말하기 1) and the handouts (V/A-았/었/했다, 안 + V) in the second batch of photos.
// The few "extra" examples are marked with `extra: true` so they are easy to spot.

// Verb table: dictionary form, meaning, polite present (-아/어/해요) and polite past (-았/었/했어요).
export const VERBS = [
  { kr: '가다', en: 'go', pres: '가요', past: '갔어요' },
  { kr: '오다', en: 'come', pres: '와요', past: '왔어요' },
  { kr: '먹다', en: 'eat', pres: '먹어요', past: '먹었어요' },
  { kr: '마시다', en: 'drink', pres: '마셔요', past: '마셨어요' },
  { kr: '보다', en: 'see / watch', pres: '봐요', past: '봤어요' },
  { kr: '사다', en: 'buy', pres: '사요', past: '샀어요' },
  { kr: '쓰다', en: 'write', pres: '써요', past: '썼어요' },
  { kr: '읽다', en: 'read', pres: '읽어요', past: '읽었어요' },
  { kr: '듣다', en: 'listen', pres: '들어요', past: '들었어요' },
  { kr: '말하다', en: 'speak / say', pres: '말해요', past: '말했어요' },
  { kr: '배우다', en: 'learn', pres: '배워요', past: '배웠어요' },
  { kr: '가르치다', en: 'teach', pres: '가르쳐요', past: '가르쳤어요' },
  { kr: '만나다', en: 'meet', pres: '만나요', past: '만났어요' },
  { kr: '기다리다', en: 'wait', pres: '기다려요', past: '기다렸어요' },
  { kr: '놀다', en: 'play / hang out', pres: '놀아요', past: '놀았어요' },
  { kr: '쉬다', en: 'rest', pres: '쉬어요', past: '쉬었어요' },
  { kr: '자다', en: 'sleep', pres: '자요', past: '잤어요' },
  { kr: '일하다', en: 'work', pres: '일해요', past: '일했어요' },
  { kr: '공부하다', en: 'study', pres: '공부해요', past: '공부했어요' },
]

// Verbs with 하다 — the noun comes first with 을/를, then 하다 (see the book's 게임(을)하다 cards).
export const HA_NOUNS = [
  { kr: '게임', en: 'game', slot: '게임을' },
  { kr: '샤워', en: 'shower', slot: '샤워를' },
  { kr: '숙제', en: 'homework', slot: '숙제를' },
  { kr: '빨래', en: 'laundry', slot: '빨래를' },
  { kr: '청소', en: 'cleaning', slot: '청소를' },
  { kr: '요리', en: 'cooking', slot: '요리를' },
  { kr: '아르바이트', en: 'part-time job', slot: '아르바이트를' },
  { kr: '운동', en: 'exercise', slot: '운동을' },
  { kr: '데이트', en: 'date', slot: '데이트를' },
  { kr: '쇼핑', en: 'shopping', slot: '쇼핑을' },
  { kr: '산책', en: 'walk', slot: '산책을' },
  { kr: '파티', en: 'party', slot: '파티를' },
]

// Adjectives from the book (어휘 2 · 형용사 1 and 문법 및 표현 3, 4).
export const ADJECTIVES = [
  { kr: '크다', en: 'big', pres: '커요', past: '컸어요' },
  { kr: '작다', en: 'small', pres: '작아요', past: '작았어요' },
  { kr: '많다', en: 'many / a lot', pres: '많아요', past: '많았어요' },
  { kr: '적다', en: 'few / little', pres: '적어요', past: '적었어요' },
  { kr: '좋다', en: 'good', pres: '좋아요', past: '좋았어요' },
  { kr: '예쁘다', en: 'pretty', pres: '예뻐요', past: '예뻤어요' },
  { kr: '춥다', en: 'cold', pres: '추워요', past: '추웠어요' },
  { kr: '바쁘다', en: 'busy', pres: '바빠요', past: '바빴어요' },
]

// Time and manner words the book uses before a verb.
export const ADVERBS = [
  { kr: '지금', en: 'now', example: '엠마 씨는 지금 빵을 먹어요?', exampleEn: 'Is Emma eating bread now?', src: 'book' },
  { kr: '오늘', en: 'today', example: '저는 오늘 친구를 만나요.', exampleEn: 'I meet a friend today.', src: 'book' },
  { kr: '어제', en: 'yesterday', example: '왕명 씨는 어제 명동에서 친구를 만났어요.', exampleEn: 'Wang Myeong met a friend in Myeongdong yesterday.', src: 'worksheet' },
  { kr: '매일', en: 'every day', example: '매일 청소해요? 아니요, 매일 청소하지 않아요.', exampleEn: 'Do you clean every day? No, I don\'t clean every day.', src: 'book' },
  { kr: '보통', en: 'usually', example: '다니엘 씨는 보통 누구하고 같이 밥을 먹어요?', exampleEn: 'Who does Daniel usually eat with?', src: 'book' },
  { kr: '같이', en: 'together', example: '선생님하고 같이 한국어를 공부해요.', exampleEn: 'I study Korean together with the teacher.', src: 'book' },
  { kr: '혼자', en: 'alone', example: '저는 보통 혼자 먹어요.', exampleEn: 'I usually eat alone.', src: 'book' },
  { kr: '안', en: 'not (don\'t / didn\'t)', example: '저는 오늘 친구를 안 만나요.', exampleEn: 'I am not meeting a friend today.', src: 'book' },
]

// Time phrases that go with 에 (the worksheet uses them a lot).
export const TIME_PHRASES = [
  { kr: '오늘 아침', en: 'this morning' },
  { kr: '오늘 오전', en: 'this morning / forenoon' },
  { kr: '어제 오후', en: 'yesterday afternoon' },
  { kr: '어제 저녁', en: 'yesterday evening' },
  { kr: '지난 주말', en: 'last weekend' },
]
