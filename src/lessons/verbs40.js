// The 40 verbs from the handout "40 verbos coreanos — presente, passado e futuro" (3rd batch).
// Every form below is the one printed in the handout, including the formal (-습니다) and
// honorific (-(으)시-) columns. `sp` marks a verb whose honorific is a different WORD
// (먹다 → 드시다), `hum` is the humble verb I use when the respected person receives my action.
// `note` is the handout's own warning for that verb.

export const GROUPS = [
  { id: 'daily', kr: '일상', en: 'Everyday life', range: '1–10', tone: 'sky' },
  { id: 'study', kr: '공부 · 말', en: 'Study & communication', range: '11–20', tone: 'violet' },
  { id: 'routine', kr: '하루 · 선물', en: 'Routine, clothes & presents', range: '21–30', tone: 'emerald' },
  { id: 'class', kr: '교실 · 생활', en: 'Classroom & daily life', range: '31–40', tone: 'rose' },
]

export const VERBS40 = [
  {
    n: 1, g: 'daily', kr: '가다', en: 'to go', pres: '가요', past: '갔어요', fut: '갈 거예요',
    ex: {
      pres: ['지금 학교에 가요.', "I'm going to school now."],
      past: ['어제 명동에 갔어요.', 'Yesterday I went to Myeongdong.'],
      fut: ['주말에 부산에 갈 거예요.', "At the weekend I'm going to Busan."],
    },
    fml: ['갑니다', '갔습니다', '갈 겁니다'],
    hon: ['가세요', '가셨어요', '가실 거예요'],
    honEx: ['아버지께서 회사에 가세요.', 'My father goes to the office.'],
  },
  {
    n: 2, g: 'daily', kr: '오다', en: 'to come', pres: '와요', past: '왔어요', fut: '올 거예요',
    tip: 'ㅗ + 아 → ㅘ',
    ex: {
      pres: ['친구가 우리 집에 와요.', 'A friend is coming to our house.'],
      past: ['작년에 한국에 왔어요.', 'I came to Korea last year.'],
      fut: ['다음 주에 가족이 올 거예요.', 'My family is coming next week.'],
    },
    fml: ['옵니다', '왔습니다', '올 겁니다'],
    hon: ['오세요', '오셨어요', '오실 거예요'],
    honEx: ['할머니께서 한국에 오셨어요.', 'My grandmother came to Korea.'],
  },
  {
    n: 3, g: 'daily', kr: '하다', en: 'to do', pres: '해요', past: '했어요', fut: '할 거예요',
    tip: '하다 → 해요 (its own rule)',
    ex: {
      pres: ['매일 숙제를 해요.', 'I do my homework every day.'],
      past: ['어제 청소를 했어요.', 'I cleaned yesterday.'],
      fut: ['내일 뭐 할 거예요?', 'What are you going to do tomorrow?'],
    },
    fml: ['합니다', '했습니다', '할 겁니다'],
    hon: ['하세요', '하셨어요', '하실 거예요'],
    honEx: ['어머니께서 청소를 하세요.', 'My mother is cleaning.'],
  },
  {
    n: 4, g: 'daily', kr: '먹다', en: 'to eat', pres: '먹어요', past: '먹었어요', fut: '먹을 거예요', sp: true,
    ex: {
      pres: ['보통 아침에 빵을 먹어요.', 'I usually eat bread in the morning.'],
      past: ['어제 비빔밥을 먹었어요.', 'I ate bibimbap yesterday.'],
      fut: ['저녁에 치킨을 먹을 거예요.', "In the evening I'll eat fried chicken."],
    },
    fml: ['먹습니다', '먹었습니다', '먹을 겁니다'],
    hon: ['드세요', '드셨어요', '드실 거예요'],
    honEx: ['할아버지께서 아침을 드셨어요.', 'Grandfather had breakfast.'],
    note: 'The honorific is a different word: 드시다.',
  },
  {
    n: 5, g: 'daily', kr: '마시다', en: 'to drink', pres: '마셔요', past: '마셨어요', fut: '마실 거예요', sp: true,
    tip: 'ㅣ + 어 → ㅕ',
    ex: {
      pres: ['매일 커피를 마셔요.', 'I drink coffee every day.'],
      past: ['어제 소주를 마셨어요.', 'I drank soju yesterday.'],
      fut: ['이따가 물을 마실 거예요.', "In a bit I'll drink some water."],
    },
    fml: ['마십니다', '마셨습니다', '마실 겁니다'],
    hon: ['드세요', '드셨어요', '드실 거예요'],
    honEx: ['어머니께서 커피를 드세요.', 'Mother is drinking coffee.'],
    note: '먹다 and 마시다 share one honorific: 드시다.',
  },
  {
    n: 6, g: 'daily', kr: '보다', en: 'to see, to watch', pres: '봐요', past: '봤어요', fut: '볼 거예요',
    tip: 'ㅗ + 아 → ㅘ',
    ex: {
      pres: ['지금 드라마를 봐요.', "I'm watching a drama now."],
      past: ['지난주에 영화를 봤어요.', 'I watched a film last week.'],
      fut: ['주말에 영화를 볼 거예요.', "At the weekend I'll watch a film."],
    },
    fml: ['봅니다', '봤습니다', '볼 겁니다'],
    hon: ['보세요', '보셨어요', '보실 거예요'],
    honEx: ['아버지께서 뉴스를 보세요.', 'Father is watching the news.'],
  },
  {
    n: 7, g: 'daily', kr: '자다', en: 'to sleep', pres: '자요', past: '잤어요', fut: '잘 거예요', sp: true,
    tip: 'ㅏ + 아 → ㅏ',
    ex: {
      pres: ['보통 열한 시에 자요.', 'I usually go to sleep at eleven.'],
      past: ['어제 일찍 잤어요.', 'I went to sleep early yesterday.'],
      fut: ['오늘 열 시에 잘 거예요.', "Today I'll sleep at ten."],
    },
    fml: ['잡니다', '잤습니다', '잘 겁니다'],
    hon: ['주무세요', '주무셨어요', '주무실 거예요'],
    honEx: ['할머니께서 일찍 주무셨어요.', 'Grandmother went to sleep early.'],
    note: 'The honorific is a different word: 주무시다.',
  },
  {
    n: 8, g: 'daily', kr: '일어나다', en: 'to get up, to wake up', pres: '일어나요', past: '일어났어요', fut: '일어날 거예요',
    ex: {
      pres: ['보통 일곱 시에 일어나요.', 'I usually get up at seven.'],
      past: ['오늘 늦게 일어났어요.', 'I got up late today.'],
      fut: ['내일 여섯 시에 일어날 거예요.', "Tomorrow I'll get up at six."],
    },
    fml: ['일어납니다', '일어났습니다', '일어날 겁니다'],
    hon: ['일어나세요', '일어나셨어요', '일어나실 거예요'],
    honEx: ['할아버지께서 다섯 시에 일어나세요.', 'Grandfather gets up at five.'],
  },
  {
    n: 9, g: 'daily', kr: '만나다', en: 'to meet', pres: '만나요', past: '만났어요', fut: '만날 거예요', hum: '뵙다',
    tip: 'ㅏ + 아 → ㅏ',
    ex: {
      pres: ['주말에 친구를 만나요.', 'I meet friends at the weekend.'],
      past: ['어제 선생님을 만났어요.', 'I met the teacher yesterday.'],
      fut: ['다음 주에 친구를 만날 거예요.', "Next week I'll meet a friend."],
    },
    fml: ['만납니다', '만났습니다', '만날 겁니다'],
    hon: ['만나세요', '만나셨어요', '만나실 거예요'],
    honEx: ['선생님께서 학생들을 만나셨어요.', 'The teacher met the students.'],
    note: 'When I am the one meeting someone I respect: 선생님을 뵈었어요.',
  },
  {
    n: 10, g: 'daily', kr: '사다', en: 'to buy', pres: '사요', past: '샀어요', fut: '살 거예요',
    tip: 'ㅏ + 아 → ㅏ',
    ex: {
      pres: ['마트에서 과일을 사요.', 'I buy fruit at the supermarket.'],
      past: ['어제 옷을 샀어요.', 'I bought clothes yesterday.'],
      fut: ['내일 신발을 살 거예요.', "Tomorrow I'll buy shoes."],
    },
    fml: ['삽니다', '샀습니다', '살 겁니다'],
    hon: ['사세요', '사셨어요', '사실 거예요'],
    honEx: ['어머니께서 과일을 사셨어요.', 'Mother bought fruit.'],
    note: '살 거예요 · 사세요 · 삽니다 can also come from 살다 (to live). Only the context tells you which.',
  },
  {
    n: 11, g: 'study', kr: '공부하다', en: 'to study', pres: '공부해요', past: '공부했어요', fut: '공부할 거예요',
    ex: {
      pres: ['요즘 한국어를 공부해요.', 'These days I study Korean.'],
      past: ['어제 도서관에서 공부했어요.', 'I studied at the library yesterday.'],
      fut: ['내일 시험이 있어서 공부할 거예요.', "There's a test tomorrow, so I'm going to study."],
    },
    fml: ['공부합니다', '공부했습니다', '공부할 겁니다'],
    hon: ['공부하세요', '공부하셨어요', '공부하실 거예요'],
    honEx: ['아버지께서 영어를 공부하세요.', 'Father studies English.'],
  },
  {
    n: 12, g: 'study', kr: '읽다', en: 'to read', pres: '읽어요', past: '읽었어요', fut: '읽을 거예요',
    ex: {
      pres: ['매일 책을 읽어요.', 'I read books every day.'],
      past: ['어제 신문을 읽었어요.', 'I read the newspaper yesterday.'],
      fut: ['주말에 이 책을 읽을 거예요.', "At the weekend I'll read this book."],
    },
    fml: ['읽습니다', '읽었습니다', '읽을 겁니다'],
    hon: ['읽으세요', '읽으셨어요', '읽으실 거예요'],
    honEx: ['할머니께서 신문을 읽으세요.', 'Grandmother reads the newspaper.'],
  },
  {
    n: 13, g: 'study', kr: '쓰다', en: 'to write; to wear (hat, glasses)', pres: '써요', past: '썼어요', fut: '쓸 거예요',
    tip: 'ㅡ drops: 쓰 + 어 → 써',
    ex: {
      pres: ['공책에 이름을 써요.', 'I write my name in the notebook.'],
      past: ['어제 친구에게 편지를 썼어요.', 'I wrote a letter to a friend yesterday.'],
      fut: ['내일 이메일을 쓸 거예요.', "Tomorrow I'll write an email."],
    },
    fml: ['씁니다', '썼습니다', '쓸 겁니다'],
    hon: ['쓰세요', '쓰셨어요', '쓰실 거예요'],
    honEx: ['선생님께서 칠판에 이름을 쓰셨어요.', 'The teacher wrote the name on the board.'],
    note: 'Hats and glasses use 쓰다 too: 모자를 써요.',
  },
  {
    n: 14, g: 'study', kr: '듣다', en: 'to listen, to hear', pres: '들어요', past: '들었어요', fut: '들을 거예요', irr: 'ㄷ',
    tip: 'ㄷ → ㄹ before a vowel',
    ex: {
      pres: ['지금 음악을 들어요.', "I'm listening to music now."],
      past: ['어제 케이팝을 들었어요.', 'I listened to K-pop yesterday.'],
      fut: ['이따가 이 노래를 들을 거예요.', "In a bit I'll listen to this song."],
    },
    fml: ['듣습니다', '들었습니다', '들을 겁니다'],
    hon: ['들으세요', '들으셨어요', '들으실 거예요'],
    honEx: ['아버지께서 음악을 들으세요.', 'Father listens to music.'],
  },
  {
    n: 15, g: 'study', kr: '걷다', en: 'to walk', pres: '걸어요', past: '걸었어요', fut: '걸을 거예요', irr: 'ㄷ',
    tip: 'ㄷ → ㄹ before a vowel',
    ex: {
      pres: ['매일 공원에서 걸어요.', 'I walk in the park every day.'],
      past: ['어제 한강에서 걸었어요.', 'I walked by the Han river yesterday.'],
      fut: ['주말에 친구하고 걸을 거예요.', "At the weekend I'll walk with a friend."],
    },
    fml: ['걷습니다', '걸었습니다', '걸을 겁니다'],
    hon: ['걸으세요', '걸으셨어요', '걸으실 거예요'],
    honEx: ['할아버지께서 공원에서 걸으세요.', 'Grandfather walks in the park.'],
  },
  {
    n: 16, g: 'study', kr: '배우다', en: 'to learn', pres: '배워요', past: '배웠어요', fut: '배울 거예요',
    tip: 'ㅜ + 어 → ㅝ',
    ex: {
      pres: ['요즘 태권도를 배워요.', "These days I'm learning taekwondo."],
      past: ['작년에 수영을 배웠어요.', 'Last year I learned to swim.'],
      fut: ['다음 달에 요리를 배울 거예요.', "Next month I'll learn to cook."],
    },
    fml: ['배웁니다', '배웠습니다', '배울 겁니다'],
    hon: ['배우세요', '배우셨어요', '배우실 거예요'],
    honEx: ['어머니께서 요가를 배우세요.', 'Mother is learning yoga.'],
  },
  {
    n: 17, g: 'study', kr: '가르치다', en: 'to teach', pres: '가르쳐요', past: '가르쳤어요', fut: '가르칠 거예요',
    tip: 'ㅣ + 어 → ㅕ',
    ex: {
      pres: ['선생님이 한국어를 가르쳐요.', 'The teacher teaches Korean.'],
      past: ['고향에서 영어를 가르쳤어요.', 'I taught English in my hometown.'],
      fut: ['내년에 아이들을 가르칠 거예요.', "Next year I'll teach children."],
    },
    fml: ['가르칩니다', '가르쳤습니다', '가르칠 겁니다'],
    hon: ['가르치세요', '가르치셨어요', '가르치실 거예요'],
    honEx: ['선생님께서 한국어를 가르치세요.', 'The teacher teaches Korean.'],
  },
  {
    n: 18, g: 'study', kr: '살다', en: 'to live', pres: '살아요', past: '살았어요', fut: '살 거예요', irr: 'ㄹ',
    tip: 'ㄹ stem: no 을 in the future',
    ex: {
      pres: ['서울에서 살아요.', 'I live in Seoul.'],
      past: ['고향에서 부모님하고 살았어요.', 'I lived with my parents in my hometown.'],
      fut: ['내년에도 한국에서 살 거예요.', "Next year I'll live in Korea too."],
    },
    fml: ['삽니다', '살았습니다', '살 겁니다'],
    hon: ['사세요', '사셨어요', '사실 거예요'],
    honEx: ['할머니께서 부산에 사세요.', 'Grandmother lives in Busan.'],
    note: 'The ㄹ disappears before ㅂ and 시: 삽니다, 사세요 — same shape as 사다 (to buy).',
  },
  {
    n: 19, g: 'study', kr: '놀다', en: 'to play, to hang out', pres: '놀아요', past: '놀았어요', fut: '놀 거예요', irr: 'ㄹ',
    tip: 'ㄹ stem: no 을 in the future',
    ex: {
      pres: ['주말에 친구하고 놀아요.', 'At the weekend I hang out with friends.'],
      past: ['어제 홍대에서 놀았어요.', 'Yesterday I hung out in Hongdae.'],
      fut: ['방학에 바다에서 놀 거예요.', "In the holidays I'll have fun at the sea."],
    },
    fml: ['놉니다', '놀았습니다', '놀 겁니다'],
    hon: ['노세요', '노셨어요', '노실 거예요'],
    honEx: ['할아버지께서 손자하고 노세요.', 'Grandfather plays with his grandson.'],
  },
  {
    n: 20, g: 'study', kr: '만들다', en: 'to make', pres: '만들어요', past: '만들었어요', fut: '만들 거예요', irr: 'ㄹ',
    tip: 'ㄹ stem: no 을 in the future',
    ex: {
      pres: ['집에서 김밥을 만들어요.', 'I make gimbap at home.'],
      past: ['어제 케이크를 만들었어요.', 'I made a cake yesterday.'],
      fut: ['내일 불고기를 만들 거예요.', "Tomorrow I'll make bulgogi."],
    },
    fml: ['만듭니다', '만들었습니다', '만들 겁니다'],
    hon: ['만드세요', '만드셨어요', '만드실 거예요'],
    honEx: ['어머니께서 김밥을 만드셨어요.', 'Mother made gimbap.'],
  },
  {
    n: 21, g: 'routine', kr: '타다', en: 'to ride, to take (transport)', pres: '타요', past: '탔어요', fut: '탈 거예요',
    tip: 'ㅏ + 아 → ㅏ',
    ex: {
      pres: ['매일 지하철을 타요.', 'I take the subway every day.'],
      past: ['어제 택시를 탔어요.', 'I took a taxi yesterday.'],
      fut: ['주말에 자전거를 탈 거예요.', "At the weekend I'll ride a bike."],
    },
    fml: ['탑니다', '탔습니다', '탈 겁니다'],
    hon: ['타세요', '타셨어요', '타실 거예요'],
    honEx: ['아버지께서 지하철을 타세요.', 'Father takes the subway.'],
  },
  {
    n: 22, g: 'routine', kr: '입다', en: 'to wear, to put on (clothes)', pres: '입어요', past: '입었어요', fut: '입을 거예요',
    ex: {
      pres: ['보통 청바지를 입어요.', 'I usually wear jeans.'],
      past: ['경복궁에서 한복을 입었어요.', 'I wore a hanbok at Gyeongbokgung.'],
      fut: ['내일 새 옷을 입을 거예요.', "Tomorrow I'll wear new clothes."],
    },
    fml: ['입습니다', '입었습니다', '입을 겁니다'],
    hon: ['입으세요', '입으셨어요', '입으실 거예요'],
    honEx: ['할머니께서 한복을 입으셨어요.', 'Grandmother wore a hanbok.'],
  },
  {
    n: 23, g: 'routine', kr: '주다', en: 'to give', pres: '줘요', past: '줬어요', fut: '줄 거예요', hum: '드리다',
    tip: 'ㅜ + 어 → ㅝ',
    ex: {
      pres: ['친구에게 커피를 줘요.', 'I give my friend a coffee.'],
      past: ['어제 친구에게 선물을 줬어요.', 'I gave my friend a present yesterday.'],
      fut: ['생일에 케이크를 줄 거예요.', "On the birthday I'll give a cake."],
    },
    fml: ['줍니다', '줬습니다', '줄 겁니다'],
    hon: ['주세요', '주셨어요', '주실 거예요'],
    honEx: ['선생님께서 책을 주셨어요.', 'The teacher gave me a book.'],
    note: 'When I give to someone I respect: 어머니께 선물을 드렸어요.',
  },
  {
    n: 24, g: 'routine', kr: '받다', en: 'to receive, to get', pres: '받아요', past: '받았어요', fut: '받을 거예요',
    tip: 'ends in ㄷ but REGULAR',
    ex: {
      pres: ['생일에 선물을 받아요.', 'I get presents on my birthday.'],
      past: ['어제 이메일을 받았어요.', 'I received an email yesterday.'],
      fut: ['크리스마스에 선물을 받을 거예요.', "At Christmas I'll get presents."],
    },
    fml: ['받습니다', '받았습니다', '받을 겁니다'],
    hon: ['받으세요', '받으셨어요', '받으실 거예요'],
    honEx: ['아버지께서 선물을 받으셨어요.', 'Father received a present.'],
    note: '받다 ends in ㄷ but it is REGULAR: 받아요, never 발아요.',
  },
  {
    n: 25, g: 'routine', kr: '찍다', en: 'to take (a photo)', pres: '찍어요', past: '찍었어요', fut: '찍을 거예요',
    ex: {
      pres: ['여행에서 사진을 많이 찍어요.', 'I take lots of photos on trips.'],
      past: ['어제 남산에서 사진을 찍었어요.', 'I took photos at Namsan yesterday.'],
      fut: ['부산에서 바다 사진을 찍을 거예요.', "In Busan I'll take photos of the sea."],
    },
    fml: ['찍습니다', '찍었습니다', '찍을 겁니다'],
    hon: ['찍으세요', '찍으셨어요', '찍으실 거예요'],
    honEx: ['할아버지께서 사진을 찍으셨어요.', 'Grandfather took photos.'],
  },
  {
    n: 26, g: 'routine', kr: '쉬다', en: 'to rest', pres: '쉬어요', past: '쉬었어요', fut: '쉴 거예요',
    tip: 'ㅟ does NOT contract: 쉬어요',
    ex: {
      pres: ['주말에 집에서 쉬어요.', 'At the weekend I rest at home.'],
      past: ['어제 아파서 쉬었어요.', 'I was ill yesterday, so I rested.'],
      fut: ['수업 후에 쉴 거예요.', "I'll rest after class."],
    },
    fml: ['쉽니다', '쉬었습니다', '쉴 겁니다'],
    hon: ['쉬세요', '쉬셨어요', '쉬실 거예요'],
    honEx: ['어머니께서 집에서 쉬세요.', 'Mother is resting at home.'],
  },
  {
    n: 27, g: 'routine', kr: '운동하다', en: 'to exercise, to work out', pres: '운동해요', past: '운동했어요', fut: '운동할 거예요',
    ex: {
      pres: ['매일 아침에 운동해요.', 'I exercise every morning.'],
      past: ['어제 공원에서 운동했어요.', 'I exercised in the park yesterday.'],
      fut: ['내일 친구하고 운동할 거예요.', "Tomorrow I'll work out with a friend."],
    },
    fml: ['운동합니다', '운동했습니다', '운동할 겁니다'],
    hon: ['운동하세요', '운동하셨어요', '운동하실 거예요'],
    honEx: ['아버지께서 매일 아침 운동하세요.', 'Father exercises every morning.'],
  },
  {
    n: 28, g: 'routine', kr: '요리하다', en: 'to cook', pres: '요리해요', past: '요리했어요', fut: '요리할 거예요',
    ex: {
      pres: ['저녁에 집에서 요리해요.', 'In the evening I cook at home.'],
      past: ['어제 친구하고 같이 요리했어요.', 'Yesterday I cooked with a friend.'],
      fut: ['주말에 고향 음식을 요리할 거예요.', "At the weekend I'll cook food from my hometown."],
    },
    fml: ['요리합니다', '요리했습니다', '요리할 겁니다'],
    hon: ['요리하세요', '요리하셨어요', '요리하실 거예요'],
    honEx: ['할머니께서 불고기를 요리하셨어요.', 'Grandmother cooked bulgogi.'],
  },
  {
    n: 29, g: 'routine', kr: '일하다', en: 'to work', pres: '일해요', past: '일했어요', fut: '일할 거예요',
    ex: {
      pres: ['아버지는 회사에서 일해요.', 'My father works at a company.'],
      past: ['작년에 카페에서 일했어요.', 'Last year I worked at a café.'],
      fut: ['다음 달부터 학교에서 일할 거예요.', "From next month I'll work at a school."],
    },
    fml: ['일합니다', '일했습니다', '일할 겁니다'],
    hon: ['일하세요', '일하셨어요', '일하실 거예요'],
    honEx: ['아버지께서 은행에서 일하세요.', 'Father works at a bank.'],
  },
  {
    n: 30, g: 'routine', kr: '여행하다', en: 'to travel', pres: '여행해요', past: '여행했어요', fut: '여행할 거예요',
    ex: {
      pres: ['방학에 자주 여행해요.', 'I travel often in the holidays.'],
      past: ['작년에 제주도를 여행했어요.', 'Last year I travelled around Jeju.'],
      fut: ['겨울에 일본을 여행할 거예요.', "In winter I'll travel around Japan."],
    },
    fml: ['여행합니다', '여행했습니다', '여행할 겁니다'],
    hon: ['여행하세요', '여행하셨어요', '여행하실 거예요'],
    honEx: ['부모님께서 제주도를 여행하실 거예요.', 'My parents are going to travel around Jeju.'],
  },
  {
    n: 31, g: 'class', kr: '기다리다', en: 'to wait', pres: '기다려요', past: '기다렸어요', fut: '기다릴 거예요',
    tip: 'ㅣ + 어 → ㅕ',
    ex: {
      pres: ['지금 버스를 기다려요.', "I'm waiting for the bus now."],
      past: ['어제 친구를 한 시간 기다렸어요.', 'Yesterday I waited an hour for my friend.'],
      fut: ['카페에서 기다릴 거예요.', "I'll wait at the café."],
    },
    fml: ['기다립니다', '기다렸습니다', '기다릴 겁니다'],
    hon: ['기다리세요', '기다리셨어요', '기다리실 거예요'],
    honEx: ['선생님께서 교실에서 기다리세요.', 'The teacher is waiting in the classroom.'],
  },
  {
    n: 32, g: 'class', kr: '좋아하다', en: 'to like', pres: '좋아해요', past: '좋아했어요', fut: '좋아할 거예요',
    ex: {
      pres: ['저는 케이팝을 좋아해요.', 'I like K-pop.'],
      past: ['고향에서는 축구를 좋아했어요.', 'Back home I liked football.'],
      fut: ['친구가 이 선물을 좋아할 거예요.', 'My friend will like this present.'],
    },
    fml: ['좋아합니다', '좋아했습니다', '좋아할 겁니다'],
    hon: ['좋아하세요', '좋아하셨어요', '좋아하실 거예요'],
    honEx: ['할머니께서 꽃을 좋아하세요.', 'Grandmother likes flowers.'],
    note: '좋아하다 takes 을/를. 좋다 is an adjective and takes 이/가: 사과가 좋아요.',
  },
  {
    n: 33, g: 'class', kr: '전화하다', en: 'to call, to phone', pres: '전화해요', past: '전화했어요', fut: '전화할 거예요', hum: '전화드리다',
    ex: {
      pres: ['매주 부모님에게 전화해요.', 'I call my parents every week.'],
      past: ['어제 친구에게 전화했어요.', 'I called a friend yesterday.'],
      fut: ['이따가 다시 전화할 거예요.', "I'll call again in a bit."],
    },
    fml: ['전화합니다', '전화했습니다', '전화할 겁니다'],
    hon: ['전화하세요', '전화하셨어요', '전화하실 거예요'],
    honEx: ['어머니께서 저에게 전화하셨어요.', 'Mother called me.'],
    note: 'When I call someone I respect: 할머니께 전화드렸어요.',
  },
  {
    n: 34, g: 'class', kr: '씻다', en: 'to wash', pres: '씻어요', past: '씻었어요', fut: '씻을 거예요',
    ex: {
      pres: ['집에 가서 손을 씻어요.', 'I go home and wash my hands.'],
      past: ['아침에 씻었어요.', 'I washed in the morning.'],
      fut: ['운동 후에 씻을 거예요.', "I'll wash after exercising."],
    },
    fml: ['씻습니다', '씻었습니다', '씻을 겁니다'],
    hon: ['씻으세요', '씻으셨어요', '씻으실 거예요'],
    honEx: ['할아버지께서 손을 씻으세요.', 'Grandfather washes his hands.'],
  },
  {
    n: 35, g: 'class', kr: '앉다', en: 'to sit down', pres: '앉아요', past: '앉았어요', fut: '앉을 거예요',
    ex: {
      pres: ['교실에서 창문 옆에 앉아요.', 'In class I sit next to the window.'],
      past: ['버스에서 앉았어요.', 'I sat down on the bus.'],
      fut: ['저기에 앉을 거예요.', "I'll sit over there."],
    },
    fml: ['앉습니다', '앉았습니다', '앉을 겁니다'],
    hon: ['앉으세요', '앉으셨어요', '앉으실 거예요'],
    honEx: ['할머니, 여기 앉으세요.', 'Grandma, please sit here.'],
  },
  {
    n: 36, g: 'class', kr: '열다', en: 'to open', pres: '열어요', past: '열었어요', fut: '열 거예요', irr: 'ㄹ',
    tip: 'ㄹ stem: no 을 in the future',
    ex: {
      pres: ['더우니까 창문을 열어요.', "It's hot, so I open the window."],
      past: ['아침에 문을 열었어요.', 'I opened the door in the morning.'],
      fut: ['이따가 창문을 열 거예요.', "In a bit I'll open the window."],
    },
    fml: ['엽니다', '열었습니다', '열 겁니다'],
    hon: ['여세요', '여셨어요', '여실 거예요'],
    honEx: ['선생님께서 창문을 여셨어요.', 'The teacher opened the window.'],
  },
  {
    n: 37, g: 'class', kr: '닫다', en: 'to close, to shut', pres: '닫아요', past: '닫았어요', fut: '닫을 거예요',
    tip: 'ends in ㄷ but REGULAR',
    ex: {
      pres: ['추우니까 창문을 닫아요.', "It's cold, so I close the window."],
      past: ['아까 문을 닫았어요.', 'I closed the door a moment ago.'],
      fut: ['수업 후에 창문을 닫을 거예요.', "I'll close the window after class."],
    },
    fml: ['닫습니다', '닫았습니다', '닫을 겁니다'],
    hon: ['닫으세요', '닫으셨어요', '닫으실 거예요'],
    honEx: ['할머니께서 문을 닫으셨어요.', 'Grandmother closed the door.'],
    note: '닫다 ends in ㄷ but it is REGULAR: 닫아요, never 달아요.',
  },
  {
    n: 38, g: 'class', kr: '물어보다', en: 'to ask', pres: '물어봐요', past: '물어봤어요', fut: '물어볼 거예요', hum: '여쭤보다',
    tip: 'from 묻다 (ㄷ → ㄹ) + 보다',
    ex: {
      pres: ['모르면 선생님에게 물어봐요.', "If I don't know, I ask the teacher."],
      past: ['어제 친구에게 전화번호를 물어봤어요.', 'Yesterday I asked a friend for their number.'],
      fut: ['내일 선생님에게 물어볼 거예요.', "Tomorrow I'll ask the teacher."],
    },
    fml: ['물어봅니다', '물어봤습니다', '물어볼 겁니다'],
    hon: ['물어보세요', '물어보셨어요', '물어보실 거예요'],
    honEx: ['선생님께서 제 이름을 물어보셨어요.', 'The teacher asked my name.'],
    note: 'When I ask someone I respect: 선생님께 여쭤봤어요.',
  },
  {
    n: 39, g: 'class', kr: '보내다', en: 'to send', pres: '보내요', past: '보냈어요', fut: '보낼 거예요',
    tip: 'ㅐ stays: 보내 + 어 → 보내',
    ex: {
      pres: ['매일 친구에게 메시지를 보내요.', 'I send messages to friends every day.'],
      past: ['지난주에 선물을 보냈어요.', 'Last week I sent a present.'],
      fut: ['사진을 찍어서 부모님에게 보낼 거예요.', "I'll take photos and send them to my parents."],
    },
    fml: ['보냅니다', '보냈습니다', '보낼 겁니다'],
    hon: ['보내세요', '보내셨어요', '보내실 거예요'],
    honEx: ['어머니께서 메시지를 보내셨어요.', 'Mother sent a message.'],
  },
  {
    n: 40, g: 'class', kr: '끝나다', en: 'to end, to finish', pres: '끝나요', past: '끝났어요', fut: '끝날 거예요',
    tip: 'ㅏ + 아 → ㅏ',
    ex: {
      pres: ['수업이 한 시에 끝나요.', 'Class ends at one.'],
      past: ['시험이 어제 끝났어요.', 'The exam finished yesterday.'],
      fut: ['방학이 다음 달에 끝날 거예요.', 'The holidays will end next month.'],
    },
    fml: ['끝납니다', '끝났습니다', '끝날 겁니다'],
    hon: null,
    honEx: ['수업이 한 시에 끝납니다.', 'Class ends at one.'],
    note: 'No honorific: the subject is the class, not a person.',
  },
]

// Verbs whose honorific is a completely different word (handout, page 7).
export const SPECIAL_HON = [
  { plain: '먹다 / 마시다', hon: '드시다', ex: '할아버지께서 진지를 드세요.', en: 'Grandfather is eating.' },
  { plain: '자다', hon: '주무시다', ex: '할머니께서 주무세요.', en: 'Grandmother is sleeping.' },
  { plain: '있다 (to be in a place)', hon: '계시다', ex: '어머니께서 집에 계세요.', en: 'Mother is at home.' },
  { plain: '말하다', hon: '말씀하시다', ex: '선생님께서 말씀하셨어요.', en: 'The teacher spoke.' },
]

// Humble verbs: I act, the respected person receives. 에게 becomes 께.
export const HUMBLE = [
  { plain: '주다', hum: '드리다', ex: '어머니께 선물을 드렸어요.', en: 'I gave my mother a present.' },
  { plain: '말하다', hum: '말씀드리다', ex: '선생님께 말씀드렸어요.', en: 'I spoke to the teacher.' },
  { plain: '물어보다', hum: '여쭤보다', ex: '선생님께 여쭤봤어요.', en: 'I asked the teacher.' },
  { plain: '만나다', hum: '뵙다', ex: '선생님을 뵈었어요.', en: 'I met the teacher.' },
  { plain: '전화하다', hum: '전화드리다', ex: '할머니께 전화드렸어요.', en: 'I called my grandmother.' },
]

// The four shapes of the formal / honorific grid (handout, page 7).
export const FORM_GRID = [
  { form: 'Formal, no 받침', kr: '-ㅂ니다', pres: '갑니다', past: '갔습니다', fut: '갈 겁니다' },
  { form: 'Formal, with 받침', kr: '-습니다', pres: '먹습니다', past: '먹었습니다', fut: '먹을 겁니다' },
  { form: 'Honorific, no 받침', kr: '-세요', pres: '가세요', past: '가셨어요', fut: '가실 거예요' },
  { form: 'Honorific, with 받침', kr: '-으세요', pres: '읽으세요', past: '읽으셨어요', fut: '읽으실 거예요' },
  { form: 'Honorific + formal', kr: '-(으)십니다', pres: '가십니다', past: '가셨습니다', fut: '가실 겁니다' },
]

// 요 → 습니다, from the review handout (page 9).
export const POLITE_TO_FORMAL = [
  { yo: '다녀요', fml: '다닙니다', rule: 'no 받침 → -ㅂ니다' },
  { yo: '있어요', fml: '있습니다', rule: 'with 받침 → -습니다' },
  { yo: '멀어요', fml: '멉니다', rule: 'ㄹ stem: the ㄹ drops → -ㅂ니다' },
  { yo: '하세요?', fml: '하십니까?', rule: 'honorific -시- + -ㅂ니까' },
  { yo: '돼요', fml: '됩니다', rule: '되다 → 됩니다' },
]

// Honorific swaps the review handout drills (page 9).
export const HON_SWAPS = [
  ['이/가, 은/는', '께서, 께서는'],
  ['에게', '께'],
  ['들어요', '들으세요'],
  ['커요', '크세요'],
  ['자요', '주무세요'],
  ['있어요 (in a place)', '계세요'],
  ['먹어요', '드세요'],
  ['말해요', '말씀하세요'],
  ['말했어요 (to someone I respect)', '말씀드렸어요'],
]

// Time words the handout pairs with each tense.
export const TIME_BY_TENSE = {
  pres: [['지금', 'now'], ['보통', 'usually'], ['매일', 'every day'], ['요즘', 'these days']],
  past: [['어제', 'yesterday'], ['지난주', 'last week'], ['작년', 'last year'], ['아까', 'a moment ago']],
  fut: [['내일', 'tomorrow'], ['주말에', 'at the weekend'], ['다음 주에', 'next week'], ['이따가', 'in a bit']],
}
