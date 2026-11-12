// Everything from the handout "Revisão 총복습 2 (8–15과)" (3rd batch): the mini-lessons and
// the exam answers. Each `q` item keeps the original question number so it can be checked
// against the paper.

/* ───────────────────────── 1. Counters ───────────────────────── */

export const COUNTERS = [
  { kr: '개', en: 'things in general', ex: '사과 한 개', exEn: 'one apple', icon: '🍎' },
  { kr: '명', en: 'people', ex: '친구 두 명', exEn: 'two friends', icon: '🧑' },
  { kr: '마리', en: 'animals', ex: '고양이 세 마리', exEn: 'three cats', icon: '🐱' },
  { kr: '권', en: 'books, notebooks', ex: '책 네 권', exEn: 'four books', icon: '📚' },
  { kr: '장', en: 'flat things (paper, card, photo, ticket)', ex: '카드 두 장', exEn: 'two cards', icon: '🎫' },
  { kr: '대', en: 'machines, cars', ex: '컴퓨터 열 대', exEn: 'ten computers', icon: '💻' },
  { kr: '잔', en: 'glasses, cups', ex: '커피 세 잔', exEn: 'three coffees', icon: '☕' },
  { kr: '병', en: 'bottles', ex: '맥주 한 병', exEn: 'one bottle of beer', icon: '🍾' },
  { kr: '캔', en: 'cans', ex: '주스 한 캔', exEn: 'one can of juice', icon: '🥤' },
]

// Native numbers that change shape in front of a counter.
export const NATIVE_SHIFT = [
  ['하나', '한'],
  ['둘', '두'],
  ['셋', '세'],
  ['넷', '네'],
  ['스물', '스무'],
]

export const NATIVE_SAME = ['다섯', '여섯', '일곱', '여덟', '아홉', '열']

export const COUNTER_ANSWERS = [
  { n: 1, kr: '사과 (여덟 개) 주세요.', en: 'Eight apples, please.' },
  { n: 2, kr: '지갑에 카드가 (두 장) 있어요.', en: 'I have two cards in my wallet.' },
  { n: 3, kr: '교실에 컴퓨터가 (열 대) 있어요.', en: 'There are ten computers in the classroom.' },
  { n: 4, kr: '도서관에서 책을 (다섯 권) 빌렸어요.', en: 'I borrowed five books from the library.' },
  { n: 5, kr: '방학에 친구 (여섯 명)과 같이 제주도에 갔어요.', en: 'In the holidays I went to Jeju with six friends.' },
  { n: 6, kr: '커피를 (세 잔) 주문했어요.', en: 'I ordered three coffees.' },
  { n: 7, kr: '집 근처에서 고양이를 (한 마리) 봤어요.', en: 'I saw a cat near my house.' },
  { n: 8, kr: '맥주 (한 병)하고 주스 (한 캔)을 마셨어요.', en: 'I drank a bottle of beer and a can of juice.' },
]

/* ───────────────────────── 2. Money ───────────────────────── */

export const MONEY_BLOCKS = [
  { kr: '만', value: '10,000' },
  { kr: '천', value: '1,000' },
  { kr: '백', value: '100' },
  { kr: '십', value: '10' },
]

export const SINO = ['영', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구']

export const MONEY_ANSWERS = [
  { n: 9, digits: '70,300원', kr: '칠만 삼백 원', steps: '7만 + 3백 → 칠만 삼백' },
  { n: 10, digits: '52,090원', kr: '오만 이천구십 원', steps: '5만 + 2천 + 9십 → 오만 이천구십' },
]

/* ───────────────────────── 3. Adverbs ───────────────────────── */

export const ADVERBS3 = [
  { kr: '열심히', en: 'hard, with effort', clue: '공부하다, 일하다', ex: '학생들이 도서관에서 열심히 공부합니다.', exEn: 'The students are studying hard in the library.' },
  { kr: '푹', en: 'deeply, well (rest/sleep)', clue: '쉬다, 자다', ex: '약을 먹고 푹 쉬세요.', exEn: 'Take the medicine and rest well.' },
  { kr: '다시', en: 'again', clue: '말씀해 주세요, 오세요', ex: '죄송하지만 다시 한번 말씀해 주세요.', exEn: "Sorry, could you say that again?" },
  { kr: '먼저', en: 'first, before anything', clue: 'order of actions', ex: '요리할 때 먼저 손을 씻고 시작하세요.', exEn: 'When you cook, wash your hands first.' },
  { kr: '조용히', en: 'quietly', clue: '떠들면 안 되다', ex: '미술관에서는 조용히 하십시오.', exEn: 'Please be quiet in the art museum.' },
  { kr: '처음', en: 'for the first time', clue: 'a past experience', ex: '10년 전에 처음 피아노를 배웠어요.', exEn: 'I first learned the piano ten years ago.' },
  { kr: '제일', en: 'the most', clue: 'picking a favourite', ex: '저는 떡볶이를 제일 좋아해요.', exEn: 'I like tteokbokki the most.' },
  { kr: '이따가', en: 'in a bit (later today)', clue: '바쁘니까, -(으)ㄹ게요', ex: '지금은 바쁘니까 이따가 전화할게요.', exEn: "I'm busy now, so I'll call you in a bit." },
  { kr: '잠시', en: 'a moment', clue: '잠시 후에', ex: '잠시 후에 공연을 시작합니다.', exEn: 'The show starts in a moment.' },
  { kr: '아직', en: 'still, not yet', clue: '안 ~ 봤어요, 못 ~', ex: '아직 한강 공원에 안 가 봤어요.', exEn: "I still haven't been to Han river park." },
]

export const ADVERB_ANSWERS = [
  { n: 11, kr: '(잠시) 후에 공연을 시작합니다.', ans: '잠시', en: 'The show starts in a moment.' },
  { n: 12, kr: '요리할 때 (먼저) 손을 씻고 시작하세요.', ans: '먼저', en: 'When you cook, wash your hands first.' },
  { n: 13, kr: '지금은 바쁘니까 (이따가) 제가 전화할게요.', ans: '이따가', en: "I'm busy now, so I'll call you in a bit." },
  { n: 14, kr: '많이 아프면 집에 가서 약을 먹고 (푹) 쉬세요.', ans: '푹', en: 'If you feel really bad, go home, take medicine and rest well.' },
  { n: 15, kr: '미술관에서는 떠들면 안 됩니다. (조용히) 하십시오.', ans: '조용히', en: 'No noise in the art museum. Please be quiet.' },
  { n: 16, kr: '맛있는 한국 음식이 많지만 저는 떡볶이를 (제일) 좋아해요.', ans: '제일', en: 'There is a lot of tasty Korean food, but I like tteokbokki the most.' },
  { n: 17, kr: '한 달 전에 한국에 왔지만 (아직) 한강 공원에 안 가 봤어요.', ans: '아직', en: "I came to Korea a month ago, but I still haven't been to Han river park." },
  { n: 18, kr: '내일이 시험이라서 학생들이 도서관에서 (열심히) 공부합니다.', ans: '열심히', en: 'The exam is tomorrow, so the students are studying hard in the library.' },
  { n: 19, kr: '시끄러워서 못 들었습니다. 죄송하지만 (다시) 한번 말씀해 주세요.', ans: '다시', en: "It was noisy so I couldn't hear. Sorry, could you say it again?" },
  { n: 20, kr: '저는 10년 전에 (처음) 피아노를 배웠어요. 그렇지만 지금은 잘 못 쳐요.', ans: '처음', en: "I first learned the piano ten years ago. But now I can't play well." },
]

/* ───────────────────────── 4. Particles ───────────────────────── */

export const PARTICLES = [
  { kr: '이/가', en: 'subject', hon: '께서', ex: '할머니께서 책을 읽으세요.', exEn: 'Grandmother is reading a book.' },
  { kr: '에게', en: 'to someone (give, ask, call)', hon: '께', ex: '친구에게 물어야 해요.', exEn: 'I have to ask a friend.' },
  { kr: '에', en: 'where something IS; destination; time', hon: null, ex: '편의점이 어디에 있어요?', exEn: 'Where is the convenience store?' },
  { kr: '에서', en: 'where the action HAPPENS', hon: null, ex: '집에서 영화를 봐요.', exEn: 'I watch films at home.' },
  { kr: '(으)로', en: 'by (transport), with (tool), towards', hon: null, ex: '기차로 3시간 걸려요.', exEn: 'It takes three hours by train.' },
  { kr: '(이)랑', en: 'and / with (casual, = 하고)', hon: null, ex: '운동화랑 치마를 샀어요.', exEn: 'I bought trainers and a skirt.' },
  { kr: '보다', en: 'than (comparison)', hon: null, ex: '한국의 날씨보다 더 추워요.', exEn: "It's colder than the weather in Korea." },
  { kr: '마다', en: 'every, each', hon: null, ex: '주말마다 농구를 해요.', exEn: 'I play basketball every weekend.' },
]

export const PARTICLE_ANSWERS = [
  { n: 21, kr: '할머니(께서) 방에서 책을 읽으세요.', ans: '께서', en: 'Grandmother reads a book in her room.', why: 'A subject you respect takes 께서, and the verb goes honorific too (읽으세요).' },
  { n: 22, kr: '숙제를 모르면 친구(에게) 물어야 해요.', ans: '에게', en: "If you don't understand the homework, you have to ask a friend.", why: '물어보다 goes TO a person → 에게.' },
  { n: 23, kr: '저는 주말에 보통 집(에서) 영화를 봐요.', ans: '에서', en: 'At the weekend I usually watch films at home.', why: 'Watching HAPPENS at home → 에서.' },
  { n: 24, kr: '학교 근처에 편의점이 어디(에) 있어요?', ans: '에', en: 'Where is there a convenience store near the school?', why: '있다/없다 use 에, not 에서.' },
  { n: 25, kr: '백화점에 가서 운동화(랑) 치마를 샀어요.', ans: '랑', en: 'I went to the department store and bought trainers and a skirt.', why: '운동화 has no 받침 → 랑 (with 받침 it would be 이랑).' },
  { n: 26, kr: '예쁜 지갑을 사서 어머니(께) 선물했어요.', ans: '께', en: 'I bought a pretty wallet and gave it to my mother.', why: 'The receiver is someone I respect → 께 instead of 에게.' },
  { n: 27, kr: '고향의 날씨가 한국의 날씨(보다) 더 추워요.', ans: '보다', en: 'The weather back home is colder than in Korea.', why: 'A than B → B보다, and 더 before the adjective.' },
  { n: 28, kr: '서울에서 부산까지 기차(로) 3시간 30분쯤 걸려요.', ans: '로', en: 'From Seoul to Busan takes about 3h30 by train.', why: '기차 has no 받침 → 로 (with 받침 it would be 으로).' },
  { n: 29, kr: '저는 주말(마다) 친구들하고 한강 공원에서 농구를 해요.', ans: '마다', en: 'Every weekend I play basketball with friends at Han river park.', why: 'every + time word → 마다.' },
]

/* ───────── 5. Fixed expressions (1급 조사 복습) ───────── */

export const FIXED = [
  { kr: '7시에', en: 'at 7 — a clock time takes 에', tag: 'time' },
  { kr: '김치가 좋아요', en: '좋다 / 아니다 / 되다 take 이/가', tag: 'adjective' },
  { kr: '책상이 아니에요', en: 'not a desk — 아니다 takes 이/가', tag: 'adjective' },
  { kr: '감기에 걸리다', en: 'to catch a cold', tag: 'health' },
  { kr: '열이 나다', en: 'to have a fever', tag: 'health' },
  { kr: '기침을 하다', en: 'to cough', tag: 'health' },
  { kr: '비가 오다', en: 'to rain', tag: 'weather' },
  { kr: '바람이 불다', en: 'to be windy', tag: 'weather' },
  { kr: '한 개에 얼마예요?', en: 'how much each? — price per unit takes 에', tag: 'shop' },
  { kr: 'A에서 B까지', en: 'from A to B (places)', tag: 'route' },
  { kr: 'A부터 B까지', en: 'from A to B (time)', tag: 'route' },
  { kr: '지하철로', en: 'by subway — transport takes (으)로', tag: 'route' },
  { kr: '어느 나라에서 오셨어요?', en: 'which country are you from? — origin takes 에서', tag: 'origin' },
  { kr: '회사에 다니다', en: 'to work at a company', tag: 'work' },
]

export const FIXED_ANSWERS = [
  { n: 1, kr: '저는 매일 아침 7시(에) 일어납니다.', ans: ['에'], en: 'I get up at 7 every morning.' },
  { n: 2, kr: '저(는) 운동(을) 좋아합니다.', ans: ['는', '을'], en: 'I like exercising.' },
  { n: 3, kr: '그것은 책상(이) 아닙니다.', ans: ['이'], en: 'That is not a desk.' },
  { n: 4, kr: '저는 김치(가) 좋습니다.', ans: ['가'], en: 'I like kimchi.' },
  { n: 5, kr: '한국(에서) 여행(을) 할 겁니다.', ans: ['에서', '을'], en: 'I am going to travel in Korea.' },
  { n: 6, kr: '사과가 1개(에) 얼마입니까?', ans: ['에'], en: 'How much is one apple?' },
  { n: 7, kr: '은행(에) 돈(을) 찾으러 갑니다.', ans: ['에', '을'], en: 'I am going to the bank to withdraw money.' },
  { n: 8, kr: '하루나 씨는 감기(에) 걸렸습니다.', ans: ['에'], en: 'Haruna caught a cold.' },
  { n: 9, kr: '열(이) 나고 기침(을) 합니다.', ans: ['이', '을'], en: 'She has a fever and a cough.' },
  { n: 10, kr: '명동(은) 항상 사람(이) 많아서 복잡합니다.', ans: ['은', '이'], en: 'Myeongdong is always crowded.', note: '명동에는 is also correct.' },
  { n: 11, kr: '내일 여자 친구(하고) 영화(를) 볼 거예요.', ans: ['하고', '를'], en: 'Tomorrow I will watch a film with my girlfriend.', note: '와 and 랑 work too.' },
  { n: 12, kr: '집(에서) 학교(까지) 얼마나 걸립니까?', ans: ['에서', '까지'], en: 'How long does it take from home to school?' },
  { n: 13, kr: '지하철(로) 한 시간쯤 걸립니다.', ans: ['로'], en: 'It takes about an hour by subway.' },
  { n: 14, kr: '비(가) 오고 바람(이) 많이 붑니다.', ans: ['가', '이'], en: 'It is raining and very windy.' },
  { n: 15, kr: '건우 씨(가) 공항(에) 도착했습니다.', ans: ['가', '에'], en: 'Geon-woo arrived at the airport.' },
  { n: 16, kr: '외국 사람이지요? 어느 나라(에서) 오셨어요?', ans: ['에서'], en: 'You are a foreigner, right? Which country are you from?' },
  { n: 17, kr: '오늘(부터) 모레(까지) 휴가(를) 갑니다.', ans: ['부터', '까지', '를'], en: 'I am on holiday from today until the day after tomorrow.' },
  { n: 18, kr: '아버지(께서는) 회사(에) 다니십니다.', ans: ['께서는', '에'], en: 'My father works at a company.' },
  { n: 19, kr: '선생님(께서) 저(에게) 책(을) 한 권 주셨습니다.', ans: ['께서', '에게', '을'], en: 'The teacher gave me a book.' },
  { n: 20, kr: '어머니(께서는) 사과(와) 바나나(를) 좋아하십니다.', ans: ['께서는', '와', '를'], en: 'My mother likes apples and bananas.', note: '사과 has no 받침 → 와 (with 받침 it would be 과).' },
]

/* ───────────────────────── 6. Irregulars ───────────────────────── */

export const IRREGULARS = [
  {
    id: 'd', kr: 'ㄷ 불규칙', what: 'ㄷ becomes ㄹ', tone: 'sky',
    when: 'before a vowel ending (-아/어, -으)',
    ex: [['걷다', '걸어서', 'walking'], ['듣다', '들어요', 'listen'], ['묻다', '물어보세요', 'ask']],
    trap: '닫다 and 받다 end in ㄷ but are REGULAR: 닫아요, 받아요.',
  },
  {
    id: 'b', kr: 'ㅂ 불규칙', what: 'ㅂ becomes 우', tone: 'rose',
    when: 'before a vowel ending',
    ex: [['뜨겁다', '뜨거우니까', 'because it is hot'], ['아름답다', '아름다웠어요', 'it was beautiful'], ['맵다', '매워요', 'it is spicy']],
    trap: 'Before a consonant ending nothing changes: 어렵지만, 맵고.',
  },
  {
    id: 'eu', kr: 'ㅡ 탈락', what: 'the ㅡ disappears', tone: 'emerald',
    when: 'before -아/어',
    ex: [['쓰다', '써', 'write'], ['고프다', '고파서', 'because I am hungry'], ['바쁘다', '바빠요', 'I am busy']],
    trap: 'The vowel that replaces it copies the syllable before: 바쁘다 → 바빠요 (ㅏ), 쓰다 → 써요 (ㅓ).',
  },
  {
    id: 'r', kr: 'ㄹ 탈락', what: 'the ㄹ drops, and never takes 으', tone: 'violet',
    when: 'before ㄴ, ㅂ, ㅅ',
    ex: [['멀다', '머니까', 'because it is far'], ['떠들다', '떠들면', 'if you make noise'], ['살다', '삽니다', 'I live']],
    trap: 'No 으 is ever added: 멀면 (not 멀으면), 살 거예요 (not 살을 거예요).',
  },
]

export const IRREGULAR_ANSWERS = [
  { n: 30, kr: '이 모자를 (써) 볼 수 있어요?', ans: '써', base: '쓰다', en: 'Can I try this hat on?', why: 'Hats and glasses use 쓰다. ㅡ drops: 쓰 + 어 → 써.' },
  { n: 31, kr: '수업 시간에 (떠들면) 안 됩니다.', ans: '떠들면', base: '떠들다', en: 'You must not make noise during class.', why: 'ㄹ stem + -(으)면 takes NO 으: 떠들면.' },
  { n: 32, kr: '저는 학교에 (걸어서) 와요.', ans: '걸어서', base: '걷다', en: 'I come to school on foot.', why: 'ㄷ irregular before a vowel: 걷 → 걸어서.' },
  { n: 33, kr: '집에서 공항까지 (머니까) 빨리 출발해야 해요.', ans: '머니까', base: '멀다', en: 'It is far from home to the airport, so we have to leave early.', why: 'ㄹ drops before ㄴ: 멀 + 니까 → 머니까.' },
  { n: 34, kr: '(배가 고파서) 빵을 먹었어요.', ans: '배가 고파서', base: '고프다', en: 'I was hungry, so I ate bread.', why: 'ㅡ drops: 고프 + 아서 → 고파서.' },
  { n: 35, kr: '지난주에 등산하러 갔어요. 경치가 (아름다웠어요).', ans: '아름다웠어요', base: '아름답다', en: 'Last week I went hiking. The scenery was beautiful.', why: 'ㅂ → 우: 아름답 + 았어요 → 아름다웠어요.' },
  { n: 36, kr: '커피가 (뜨거우니까) 천천히 드세요.', ans: '뜨거우니까', base: '뜨겁다', en: 'The coffee is hot, so drink it slowly.', why: 'ㅂ → 우 before 으니까: 뜨거우니까.' },
  { n: 37, kr: '길을 모르면 한국 사람에게 (물어) 보세요.', ans: '물어', base: '묻다', en: 'If you do not know the way, ask a Korean person.', why: 'ㄷ → ㄹ: 묻 + 어 → 물어.' },
  { n: 38, kr: '손님, 옷이 (마음에 들면) 입어 보세요.', ans: '마음에 들면', base: '들다', en: 'Sir, if you like the clothes, try them on.', why: '마음에 들다 = to like. ㄹ stem + -(으)면 → 들면, no 으.' },
  { n: 39, kr: '추우니까 문을 (닫아) 주세요.', ans: '닫아', base: '닫다', en: 'It is cold, so please close the door.', why: '닫다 is REGULAR: 닫 + 아 → 닫아.' },
]

/* ───────── 7. Adjective before a noun (관형형) ───────── */

export const MODIFIERS = [
  { rule: 'no 받침', end: '-ㄴ', ex: ['예쁘다', '예쁜'], tone: 'sky' },
  { rule: 'with 받침', end: '-은', ex: ['높다', '높은'], tone: 'emerald' },
  { rule: 'ㄹ stem', end: 'ㄹ drops + ㄴ', ex: ['길다', '긴'], tone: 'violet' },
  { rule: 'ㅂ irregular', end: 'ㅂ → 운', ex: ['맵다', '매운'], tone: 'rose' },
  { rule: '있다 / 없다', end: '-는', ex: ['재미있다', '재미있는'], tone: 'amber' },
  { rule: '하다', end: '-한', ex: ['깨끗하다', '깨끗한'], tone: 'orange' },
]

export const MODIFIER_PRACTICE = [
  { base: '예쁘다', en: 'pretty', mod: '예쁜', rule: 'no 받침' },
  { base: '높다', en: 'high', mod: '높은', rule: 'with 받침' },
  { base: '길다', en: 'long', mod: '긴', rule: 'ㄹ stem' },
  { base: '짧다', en: 'short', mod: '짧은', rule: 'with 받침' },
  { base: '맵다', en: 'spicy', mod: '매운', rule: 'ㅂ irregular' },
  { base: '더럽다', en: 'dirty', mod: '더러운', rule: 'ㅂ irregular' },
  { base: '두껍다', en: 'thick', mod: '두꺼운', rule: 'ㅂ irregular' },
  { base: '재미있다', en: 'fun', mod: '재미있는', rule: '있다 / 없다' },
  { base: '맛있다', en: 'tasty', mod: '맛있는', rule: '있다 / 없다' },
  { base: '맛없다', en: 'tasteless', mod: '맛없는', rule: '있다 / 없다' },
  { base: '멋있다', en: 'cool, good-looking', mod: '멋있는', rule: '있다 / 없다' },
  { base: '깨끗하다', en: 'clean', mod: '깨끗한', rule: '하다' },
  { base: '친절하다', en: 'kind', mod: '친절한', rule: '하다' },
]

export const MODIFIER_ANSWERS = [
  { n: 40, kr: '저는 (높은) 구두를 자주 신어요.', ans: '높은', base: '높다', en: 'I often wear high heels.' },
  { n: 41, kr: '친구는 (매운) 음식을 좋아하지 않아요.', ans: '매운', base: '맵다', en: 'My friend does not like spicy food.' },
  { n: 42, kr: '주말에 집에서 (재미있는) 한국 드라마를 볼 거예요.', ans: '재미있는', base: '재미있다', en: 'At the weekend I will watch a fun Korean drama at home.' },
  { n: 43, kr: '저는 짧은 머리보다 (긴) 머리를 좋아해요.', ans: '긴', base: '길다', en: 'I prefer long hair to short hair.' },
  { n: 44, kr: '제 친구 주원은 멋있는 남자고, 세아는 (예쁜) 여자예요.', ans: '예쁜', base: '예쁘다', en: 'My friend Ju-won is a good-looking guy, and Se-a is a pretty girl.' },
  { n: 45, kr: '저는 더러운 것을 싫어하니까 (깨끗한) 방에서 살고 싶어요.', ans: '깨끗한', base: '깨끗하다', en: 'I hate dirty things, so I want to live in a clean room.' },
  { n: 46, kr: '학교 근처에 싸고 (맛있는) 식당이 있습니까?', ans: '맛있는', base: '맛있다', en: 'Is there a cheap and tasty restaurant near the school?', why: '-고 joins the two adjectives (싸고) and only the LAST one takes the modifier form.' },
]

/* ───────── 8. The semester grammar box ───────── */

export const GRAMMAR_BOX = [
  { kr: '-아/어 보세요', use: 'recommend something', ex: '한번 가 보세요.', exEn: 'Give it a try / go once.', icon: '👍' },
  { kr: '-아/어 주세요', use: 'ask for help', ex: '문을 닫아 주세요.', exEn: 'Please close the door.', icon: '🙏' },
  { kr: '-아/어도 되다', use: 'permission', ex: '앉아도 돼요?', exEn: 'May I sit down?', icon: '✅' },
  { kr: '-아/어 봤다', use: 'experience (I have done it)', ex: '한복을 입어 봤어요.', exEn: 'I have worn a hanbok.', icon: '🎒' },
  { kr: '-(으)ㄹ게요', use: 'a promise I make', ex: '이따가 전화할게요.', exEn: "I'll call you in a bit.", icon: '🤝' },
  { kr: '-지요?', use: 'confirm something we both know', ex: '날씨가 좋지요?', exEn: 'The weather is nice, isn’t it?', icon: '🙂' },
  { kr: '-(으)러 가다/오다', use: 'go/come in order to do something', ex: '밥을 먹으러 가요.', exEn: "I'm going to eat.", icon: '🚶' },
  { kr: '-(으)ㄹ 거예요', use: 'a future plan', ex: '주말에 쉴 거예요.', exEn: "I'll rest at the weekend.", icon: '📅' },
  { kr: '-(으)ㄹ 수 있다/없다', use: 'can / cannot', ex: '수영할 수 있어요.', exEn: 'I can swim.', icon: '💪' },
]

export const GRAMMAR_QA = [
  { n: 51, q: '볼펜을 안 가져왔어요?', qEn: "Didn't you bring a pen?", a: '네, 볼펜 좀 빌려 주세요. 수업이 끝나고 다시 줄게요.', aEn: "No. Could you lend me a pen? I'll give it back after class.", tag: '-아/어 주세요', why: 'Asking for help → -아/어 주세요. The second half promises, so it uses -(으)ㄹ게요.' },
  { n: 52, q: '왜 한국에 왔어요?', qEn: 'Why did you come to Korea?', a: '한국어를 배우러 왔어요.', aEn: 'I came to learn Korean.', tag: '-(으)러 오다', why: 'A purpose in front of 가다/오다 → -(으)러.' },
  { n: 53, q: '이번 방학에 뭐 할 거예요?', qEn: 'What will you do these holidays?', a: '고향에 갈 거예요.', aEn: "I'll go to my hometown.", tag: '-(으)ㄹ 거예요', why: 'A future plan → -(으)ㄹ 거예요.' },
  { n: 54, q: '밍 씨는 정말 친절하지요?', qEn: 'Ming is really kind, isn’t she?', a: '네, 정말 친절해요. 그래서 친구들이 모두 밍 씨를 좋아해요.', aEn: 'Yes, really kind. That’s why all her friends like her.', tag: '-지요?', why: 'Confirming something you both already know → -지요?' },
  { n: 55, q: '무슨 한국 음식을 먹어 봤어요?', qEn: 'Which Korean food have you tried?', a: '비빔밥을 먹어 봤어요.', aEn: 'I have tried bibimbap.', tag: '-아/어 봤다', why: 'Experience → -아/어 봤다.' },
  { n: 56, q: '저도 보드를 타고 싶어요. 보드 좀 가르쳐 주세요.', qEn: 'I want to snowboard too. Could you teach me?', a: '네, 제가 가르쳐 줄게요.', aEn: "Sure, I'll teach you.", tag: '-(으)ㄹ게요', why: 'A promise I make → -(으)ㄹ게요.' },
  { n: 57, q: '여기에서 사진을 찍어도 돼요?', qEn: 'May I take photos here?', a: '아니요, 사진을 찍으시면 안 됩니다.', aEn: 'No, taking photos is not allowed.', tag: '-아/어도 돼요?', why: 'Asking permission → -아/어도 돼요? The refusal uses -(으)면 안 됩니다.' },
  { n: 58, q: '무슨 운동을 할 수 있으세요?', qEn: 'Which sport can you do?', a: '저는 수영을 할 수 있어요.', aEn: 'I can swim.', tag: '-(으)ㄹ 수 있다', why: 'Ability → -(으)ㄹ 수 있다.' },
]

/* ───────── 9. Connectors ───────── */

export const CONNECTORS = [
  { kr: '-아/어/해서', use: 'because, so (reason)', ex: '배가 아파서 못 먹었어요.', exEn: "My stomach hurt, so I couldn't eat.", tone: 'rose' },
  { kr: '-아/어/해서', use: 'and then, and there (sequence)', ex: '도서관에 가서 공부해요.', exEn: 'I go to the library and study there.', tone: 'amber' },
  { kr: '-(으)니까', use: 'because — when a request or suggestion follows', ex: '추우니까 문을 닫으세요.', exEn: "It's cold, so please close the door.", tone: 'sky' },
  { kr: '-(으)면', use: 'if, when', ex: '아프면 쉬세요.', exEn: 'If you feel ill, rest.', tone: 'emerald' },
  { kr: '-거나', use: 'or', ex: '책을 읽거나 영화를 봐요.', exEn: 'I read books or watch films.', tone: 'violet' },
  { kr: '-(으)러 가다/오다', use: 'go/come in order to', ex: '놀러 갔습니다.', exEn: 'I went to have fun.', tone: 'orange' },
]

export const CONNECTOR_ANSWERS = [
  { n: 59, q: '시험이 끝나서 기분이 너무 좋아요.', qEn: 'The exam is over and I feel great.', kr: '시험이 (끝났으니까) 우리 같이 영화 보러 갈까요?', ans: '끝났으니까', en: 'The exam is over, so shall we go to the cinema together?', why: 'A suggestion at the end (갈까요?) → -(으)니까. And -니까 accepts the past: 끝났으니까.' },
  { n: 60, q: '보통 어디에 가서 공부해요?', qEn: 'Where do you usually go to study?', kr: '저는 도서관에 (가서) 공부해요.', ans: '가서', en: 'I go to the library and study there.', why: 'Two actions in the same place, one after the other → -아서.' },
  { n: 61, q: '다리가 아파요.', qEn: 'My leg hurts.', kr: '그래요? 많이 (아프면) 여기에서 좀 쉴까요?', ans: '아프면', en: 'Really? If it hurts a lot, shall we rest here?', why: 'A condition → -(으)면.' },
  { n: 62, q: '시간이 많으면 뭘 하고 싶어요?', qEn: 'If you had a lot of time, what would you want to do?', kr: '책을 (읽거나) 영화를 보고 싶어요.', ans: '읽거나', en: 'I would like to read books or watch films.', why: 'A choice between two things → -거나.' },
  { n: 63, q: '한국어를 잘하고 싶어요. 어떻게 해야 돼요?', qEn: 'I want to speak Korean well. What should I do?', kr: '한국 사람을 자주 만나서 이야기를 (많이 해야 돼요).', ans: '많이 해야 돼요', en: 'You have to meet Korean people often and talk a lot.', why: 'The question uses -아/어야 돼요, so the answer repeats the same shape.' },
  { n: 64, q: null, qEn: null, kr: '저는 지난 주말에 친구들과 같이 공원에 (놀러) 갔습니다.', ans: '놀러', en: 'Last weekend I went to the park with friends to have fun.', why: 'A purpose in front of 가다 → -(으)러.' },
]

/* ───────── 10. Word order (47–50) ───────── */

export const ORDER_ANSWERS = [
  {
    n: 47, kr: '저는 친절하고 재미있는 친구를 사귀고 싶습니다.', en: 'I want to make kind and fun friends.',
    parts: [
      { role: 'subj', base: '저', particle: '는', gloss: 'I' },
      { role: 'info', base: '친절하고 재미있는', gloss: 'kind and fun' },
      { role: 'obj', base: '친구', particle: '를', gloss: 'friends' },
      { role: 'pred', base: '사귀고 싶습니다.', gloss: 'want to make' },
    ],
    why: 'Two adjectives joined with -고, and only the last one takes the modifier form: 친절하고 재미있는.',
  },
  {
    n: 48, kr: '저는 시험공부를 해야 해서 친구의 생일 파티에 갈 수 없습니다.', en: "I have to study for the exam, so I can't go to my friend's birthday party.",
    parts: [
      { role: 'subj', base: '저', particle: '는', gloss: 'I' },
      { role: 'info', base: '시험공부를 해야 해서', gloss: 'because I have to study' },
      { role: 'place', base: '친구의 생일 파티', particle: '에', gloss: "to my friend's party" },
      { role: 'pred', base: '갈 수 없습니다.', gloss: "can't go" },
    ],
    why: 'Reason (-아/어야 해서) first, result (-(으)ㄹ 수 없다) last.',
  },
  {
    n: 49, kr: '영화관에서 핸드폰을 사용하거나 옆 사람과 떠들면 안 됩니다.', en: 'In the cinema you must not use your phone or chat with the person next to you.',
    parts: [
      { role: 'place', base: '영화관', particle: '에서', gloss: 'in the cinema' },
      { role: 'obj', base: '핸드폰을 사용하거나', gloss: 'use your phone or' },
      { role: 'info', base: '옆 사람과 떠들면', gloss: 'chat with the person next to you' },
      { role: 'pred', base: '안 됩니다.', gloss: 'must not' },
    ],
    why: 'Place + action 1 -거나 (or) + action 2 -(으)면 안 됩니다.',
  },
  {
    n: 50, kr: '아만다 씨도 제주도에 한번 가 보세요.', en: 'Amanda, you should go to Jeju once too.',
    context: '가: 제주도 여행이 어땠어요?  나: 너무 좋았어요. 그러니까…',
    contextEn: 'How was the Jeju trip?  It was great. So…',
    parts: [
      { role: 'subj', base: '아만다 씨', particle: '도', gloss: 'Amanda too' },
      { role: 'place', base: '제주도', particle: '에', gloss: 'to Jeju' },
      { role: 'time', base: '한번', gloss: 'once' },
      { role: 'pred', base: '가 보세요.', gloss: 'give it a try' },
    ],
    why: 'The clue is 한번 + a recommendation → -아/어 보세요.',
  },
]

/* ───────── 11. Reading strategies (74–81) ───────── */

export const READING = [
  { n: 74, q: '나이가 어떻게 되세요?', qEn: 'How old are you?', a: '스무 살이에요.', aEn: "I'm twenty.", why: 'Age uses NATIVE numbers + 살, and 스물 becomes 스무 in front of it.' },
  { n: 75, q: '교실에서 담배를 피워도 돼요?', qEn: 'May I smoke in the classroom?', a: '아니요, 담배를 피우면 안 돼요.', aEn: 'No, smoking is not allowed.', why: 'A -아/어도 돼요? question is refused with -(으)면 안 돼요.' },
  { n: 76, q: '머리가 아프면 빨리 집에 가서 쉬세요.', qEn: 'If you have a headache, go home and rest.', a: '네. 집에 갈게요.', aEn: "OK. I'll go home.", why: 'The answer to advice is a promise → -(으)ㄹ게요.' },
]

export const READING_TIPS = [
  { icon: '🎯', title: 'Answering a question', body: 'Pick the option that answers EXACTLY what was asked — the same question word, the same tense.' },
  { icon: '🧠', title: 'Main idea (중심 생각)', body: 'It is almost always in the LAST sentence: the one starting with 그래서… or 앞으로….' },
  { icon: '🔍', title: '"Same content" questions', body: 'Compare each option with one sentence of the text and cross out the ones that say the opposite.' },
]

export const READING_LONG = [
  { n: 77, text: 'A text about liking travel: the scenery, the food, the photos, "that is why it is fun".', answer: '여행을 하면 즐겁습니다.', answerEn: 'Travelling is fun.', why: 'The last sentence carries the main idea.' },
  { n: 78, text: 'She wanted to wear nice clothes, a friend said to wear thick ones, she wore a thin dress and caught a cold — "from now on, when it is cold, I will wear thick clothes".', answer: '날씨가 추우면 두꺼운 옷을 입어야 합니다.', answerEn: 'When it is cold you have to wear thick clothes.', why: 'The 앞으로… sentence at the end is the lesson learned.' },
  { n: 79, text: '"The shops at DDP sell pretty things you cannot find elsewhere. (㉠) a lot of people go there to shop."', answer: '그래서', answerEn: 'that is why', why: 'The second sentence is the CONSEQUENCE of the first → 그래서.' },
  { n: 80, text: 'Which option matches the DDP text?', answer: '예쁜 물건을 사러 동대문 DDP에 사람들이 많이 갑니다.', answerEn: 'Many people go to Dongdaemun DDP to buy pretty things.', why: 'The others contradict the text: it does mention a museum, it calls the museum quiet (not crowded), and the writer went for the FIRST time last week, not always.' },
  { n: 81, text: 'A wedding invitation: 10월 2일 토요일 오후 2시, 행복예식장 2층, 건대입구역 2번 출구, 걸어서 1분.', answer: '행복예식장 이 층에서 결혼합니다.', answerEn: 'The wedding is on the 2nd floor of the Haengbok hall.', why: '시월 일 일 would be 1 October (the invitation says 이 일 = the 2nd); the invitation asks people to come; and it IS walkable — one minute.' },
]

export const DATE_NOTE = [
  { kr: '유월', wrong: '육월', en: 'June — 6월 is read 유월, never 육월' },
  { kr: '시월', wrong: '십월', en: 'October — 10월 is read 시월, never 십월' },
]

/* ───────── 12. Error correction (82–90) ───────── */

export const ERRORS = [
  { n: 82, bad: '주말에 누구가 만났어요?', good: '주말에 누구를 만났어요?', en: 'Who did you meet at the weekend?', why: '만나다 takes an object → 를. (And "who" as a SUBJECT is 누가, never 누구가.)', span: '누구가' },
  { n: 83, bad: '요즘 바빠서 못 청소했어요.', good: '요즘 바빠서 청소 못 했어요.', en: "I've been busy lately, so I couldn't clean.", why: 'With noun + 하다, 못 goes in the MIDDLE: 청소 못 했어요.', span: '못 청소했어요' },
  { n: 84, bad: '딸기랑 사과를 좋아요.', good: '딸기랑 사과를 좋아해요.', en: 'I like strawberries and apples.', why: 'An object with 을/를 needs 좋아하다. 좋다 takes 이/가: 사과가 좋아요.', span: '사과를 좋아요' },
  { n: 85, bad: '맛없은 음식은 먹고 싶지 않아요.', good: '맛없는 음식은 먹고 싶지 않아요.', en: "I don't want to eat tasteless food.", why: 'Words built on 있다/없다 take -는 before a noun: 맛없는.', span: '맛없은' },
  { n: 86, bad: '할머니께서 지금 방에 있어요.', good: '할머니께서 지금 방에 계세요.', en: 'Grandmother is in her room now.', why: 'A respected person "being in a place" → 계시다.', span: '방에 있어요' },
  { n: 87, bad: '저는 아침에 빵을 드셨어요.', good: '저는 아침에 빵을 먹었어요.', en: 'I ate bread in the morning.', why: 'NEVER use an honorific about yourself.', span: '드셨어요' },
  { n: 88, bad: '학교에서 집까지 많이 멀습니까?', good: '학교에서 집까지 많이 멉니까?', en: 'Is it very far from school to your house?', why: '멀다: the ㄹ drops before -ㅂ니까.', span: '멀습니까' },
  { n: 89, bad: '무엇을 하고 싶세요?', good: '무엇을 하고 싶으세요?', en: 'What would you like to do?', why: '싶다 has a 받침 → -으세요.', span: '싶세요' },
  { n: 90, bad: '누가 케이크를 준비할게요?', good: '누가 케이크를 준비할 거예요?', en: 'Who is going to prepare the cake?', why: '-(으)ㄹ게요 is a promise I make. To ask about someone else, use -(으)ㄹ 거예요.', span: '준비할게요' },
]

/* ───────── 13. Formal style Q&A (65–67) ───────── */

export const FORMAL_QA = [
  { n: 65, q: '무슨 일을 하십니까?', qEn: 'What do you do for a living?', a: '저는 회사에 다닙니다.', aEn: 'I work at a company.', why: '다니다 has no 받침 → 다닙니다. The question is honorific (하십니까?) because it is about YOU; the answer is just formal, because it is about me.' },
  { n: 66, q: '부산에 가 보셨습니까?', qEn: 'Have you been to Busan?', a: '아니요, 아직 안 가 봤습니다.', aEn: 'No, I still have not been.', why: '아직 pairs with a negative. 봤어요 → 봤습니다 in the formal style.' },
  { n: 67, q: '여기에 쓰레기를 버려도 됩니까?', qEn: 'May I throw rubbish here?', a: '아니요, 버리면 안 됩니다.', aEn: 'No, you must not.', why: '되다 → 됩니다. A -아/어도 됩니까? question is refused with -(으)면 안 됩니다.' },
]

/* ───────── 14. Honorific answers (68–73) ───────── */

export const HON_ANSWERS = [
  { n: 68, kr: '아버지께서는 음악을 (들으세요).', ans: '들으세요', en: 'My father listens to music.', why: 'ㄷ irregular: 듣 → 들으 before 으세요.' },
  { n: 69, kr: '아버지께서는 키가 (크세요).', ans: '크세요', en: 'My father is tall.', why: 'Even adjectives take -세요 when they describe someone you respect: 커요 → 크세요.' },
  { n: 70, kr: '할머니께서는 낮에 안 (주무세요).', ans: '주무세요', en: 'My grandmother does not sleep during the day.', why: '자다 has its own honorific word: 주무시다.' },
  { n: 71, kr: '할아버지께서 저에게 (말씀하셨어요).', ans: '말씀하셨어요', en: 'My grandfather spoke to me.', why: '말하다 → 말씀하시다. He is the one speaking, so the honorific goes on him.' },
  { n: 72, kr: '선생님께서는 학교에 (가실 거예요).', ans: '가실 거예요', en: 'The teacher will go to school.', why: 'Honorific future: -(으)실 거예요.' },
  { n: 73, kr: '저는 어머니께 (말씀드렸어요).', ans: '말씀드렸어요', en: 'I spoke to my mother.', why: 'Here I am the one acting, so the respect moves to the RECEIVER: 께 + the humble verb 말씀드리다.' },
]
