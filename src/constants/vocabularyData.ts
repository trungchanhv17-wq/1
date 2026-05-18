
export type Level = 'A1' | 'A2' | 'B1' | 'B2';

export interface VocabularyWord {
  id: string;
  word: string;
  article?: 'DER' | 'DIE' | 'DAS';
  plural?: string;
  phonetic: string;
  meaning: string;
  example: string;
  theme: string;
  level: Level;
  imageUrl?: string;
}

export const VOCABULARY_DATA: VocabularyWord[] = [
  // A1 - Basics
  {
    id: '1',
    word: 'Haus',
    article: 'DAS',
    plural: 'Häuser',
    phonetic: '[haʊ̯s]',
    meaning: 'Ngôi nhà',
    example: 'Das Haus ist groß.',
    theme: 'Nhà cửa',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '2',
    word: 'Apfel',
    article: 'DER',
    plural: 'Äpfel',
    phonetic: '[ˈapl̩]',
    meaning: 'Quả táo',
    example: 'Ich esse einen Apfel.',
    theme: 'Thức ăn & Đồ uống',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '3',
    word: 'Wasser',
    article: 'DAS',
    phonetic: '[ˈvasɐ]',
    meaning: 'Nước',
    example: 'Ein Glas Wasser, bitte.',
    theme: 'Thức ăn & Đồ uống',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1548919973-5cfe5d4fc474?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '4',
    word: 'Uhr',
    article: 'DIE',
    plural: 'Uhren',
    phonetic: '[uːɐ̯]',
    meaning: 'Đồng hồ / Giờ',
    example: 'Es ist zwei Uhr.',
    theme: 'Thời gian',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&q=80&w=1000'
  },
  
  // A1 - Personal Details (Nhóm 1)
  {
    id: '6',
    word: 'Name',
    article: 'DER',
    plural: 'Namen',
    phonetic: '[ˈnaːmə]',
    meaning: 'Tên',
    example: 'Mein Name ist Hans.',
    theme: 'Thông tin cá nhân',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '7',
    word: 'Vorname',
    article: 'DER',
    plural: 'Vornamen',
    phonetic: '[ˈfoːɐ̯ˌnaːmə]',
    meaning: 'Tên gọi',
    example: 'Mein Vorname ist Peter.',
    theme: 'Thông tin cá nhân',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '8',
    word: 'Nachname',
    article: 'DER',
    plural: 'Nachnamen',
    phonetic: '[ˈnaːxˌnaːmə]',
    meaning: 'Họ',
    example: 'Mein Nachname ist Müller.',
    theme: 'Thông tin cá nhân',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '9',
    word: 'Geschlecht',
    article: 'DAS',
    plural: 'Geschlechter',
    phonetic: '[ɡəˈʃlɛçt]',
    meaning: 'Giới tính',
    example: 'Bitte geben Sie Ihr Geschlecht an.',
    theme: 'Thông tin cá nhân',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '10',
    word: 'Geburtsdatum',
    article: 'DAS',
    plural: 'Geburtsdaten',
    phonetic: '[ɡəˈbuːɐ̯tsˌdaːtʊm]',
    meaning: 'Ngày sinh',
    example: 'Wann ist Ihr Geburtsdatum?',
    theme: 'Thông tin cá nhân',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '11',
    word: 'Geburtsort',
    article: 'DER',
    plural: 'Geburtsorte',
    phonetic: '[ɡəˈbuːɐ̯tsˌɔʁt]',
    meaning: 'Nơi sinh',
    example: 'Mein Geburtsort ist Berlin.',
    theme: 'Thông tin cá nhân',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '12',
    word: 'Alter',
    article: 'DAS',
    phonetic: '[ˈaltɐ]',
    meaning: 'Tuổi / Tuổi tác',
    example: 'Wie alt bist du?',
    theme: 'Thông tin cá nhân',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '13',
    word: 'Nationalität',
    article: 'DIE',
    plural: 'Nationalitäten',
    phonetic: '[nat͡si̯onaliˈtɛːt]',
    meaning: 'Quốc tịch',
    example: 'Was ist Ihre Nationalität?',
    theme: 'Thông tin cá nhân',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1549416878-b9ca95e26903?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '14',
    word: 'Familienstand',
    article: 'DER',
    phonetic: '[faˈmiːli̯ənˌʃtant]',
    meaning: 'Tình trạng hôn nhân',
    example: 'Sind Sie verheiratet?',
    theme: 'Thông tin cá nhân',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '14a',
    word: 'Spitzname',
    article: 'DER',
    plural: 'Spitznamen',
    phonetic: '[ˈʃpɪt͡snhaːmə]',
    meaning: 'Biệt danh',
    example: 'Mein Spitzname ist Max.',
    theme: 'Thông tin cá nhân',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '14b',
    word: 'Geburtstag',
    article: 'DER',
    plural: 'Geburtstage',
    phonetic: '[ɡəˈbuːɐ̯tst͡saːk]',
    meaning: 'Sinh nhật',
    example: 'Herzlichen Glückwunsch zum Geburtstag!',
    theme: 'Thông tin cá nhân',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '14c',
    word: 'Herkunft',
    article: 'DIE',
    plural: 'Herkünfte',
    phonetic: '[ˈheːɐ̯ˌkʊnft]',
    meaning: 'Nguồn gốc / Quê quán',
    example: 'Was ist Ihre Herkunft?',
    theme: 'Thông tin cá nhân',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1524850041227-63d2714c33f7?auto=format&fit=crop&q=80&w=1000'
  },

  // Nhóm 2: Thông tin liên lạc & Nơi ở
  {
    id: '15',
    word: 'Adresse',
    article: 'DIE',
    plural: 'Adressen',
    phonetic: '[aˈdʁɛsə]',
    meaning: 'Địa chỉ',
    example: 'Wie ist Ihre Adresse?',
    theme: 'Liên lạc & Nơi ở',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1490122417551-6ee9691429d0?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '15a',
    word: 'Anschrift',
    article: 'DIE',
    plural: 'Anschriften',
    phonetic: '[ˈanˌʃʁɪft]',
    meaning: 'Địa chỉ nhận thư / Địa chỉ',
    example: 'Bitte geben Sie Ihre Anschrift an.',
    theme: 'Thông tin cá nhân',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '16',
    word: 'Wohnort',
    article: 'DER',
    plural: 'Wohnorte',
    phonetic: '[ˈvoːnˌɔʁt]',
    meaning: 'Nơi cư trú',
    example: 'Mein Wohnort ist München.',
    theme: 'Liên lạc & Nơi ở',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '17',
    word: 'Straße',
    article: 'DIE',
    plural: 'Straßen',
    phonetic: '[ˈʃtʁaːsə]',
    meaning: 'Đường phố',
    example: 'Ich wohne in der Goethestraße.',
    theme: 'Liên lạc & Nơi ở',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1473163928139-1402d53ee7ca?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '17a',
    word: 'Stadtviertel',
    article: 'DAS',
    plural: 'Stadtviertel',
    phonetic: '[ˈʃtatˌfɪʁtl̩]',
    meaning: 'Khu phố / Quận',
    example: 'Das Stadtviertel ist sehr ruhig.',
    theme: 'Liên lạc & Nơi ở',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1514924013511-cbf7b350306a?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '18',
    word: 'Stadt',
    article: 'DIE',
    plural: 'Städte',
    phonetic: '[ʃtat]',
    meaning: 'Thành phố',
    example: 'Wien ist eine schöne Stadt.',
    theme: 'Liên lạc & Nơi ở',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '18a',
    word: 'Hauptstadt',
    article: 'DIE',
    plural: 'Hauptstädte',
    phonetic: '[ˈhaʊ̯ptˌʃtat]',
    meaning: 'Thủ đô',
    example: 'Berlin ist die Hauptstadt von Deutschland.',
    theme: 'Liên lạc & Nơi ở',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '19',
    word: 'Land',
    article: 'DAS',
    plural: 'Länder',
    phonetic: '[lant]',
    meaning: 'Quốc gia',
    example: 'Deutschland ist ein Land in Europa.',
    theme: 'Liên lạc & Nơi ở',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '20',
    word: 'Postleitzahl',
    article: 'DIE',
    plural: 'Postleitzahlen',
    phonetic: '[ˈpɔstlaɪ̯tt͡saːl]',
    meaning: 'Mã bưu chính',
    example: 'Wie lautet die Postleitzahl?',
    theme: 'Liên lạc & Nơi ở',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1585250001091-628d05fc867a?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '21',
    word: 'Telefonnummer',
    article: 'DIE',
    plural: 'Telefonnummern',
    phonetic: '[teleˈfoːnˌnʊmɐ]',
    meaning: 'Số điện thoại',
    example: 'Hier ist meine Telefonnummer.',
    theme: 'Thông tin cá nhân',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1520923642038-b4259ace9451?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '21a',
    word: 'E-Mail-Adresse',
    article: 'DIE',
    plural: 'E-Mail-Adressen',
    phonetic: '[ˈiːmeːl aˈdʁɛsə]',
    meaning: 'Địa chỉ Email',
    example: 'Schreiben Sie mir an meine E-Mail-Adresse.',
    theme: 'Thông tin cá nhân',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=1000'
  },

  // Nhóm 3: Bản thân & Sở thích
  {
    id: '22',
    word: 'Beruf',
    article: 'DER',
    plural: 'Berufe',
    phonetic: '[bəˈʁuːf]',
    meaning: 'Nghề nghiệp',
    example: 'Was sind Sie von Beruf?',
    theme: 'Thông tin cá nhân',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1454165833767-02754a7c1b22?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '23',
    word: 'Hobby',
    article: 'DAS',
    plural: 'Hobbys',
    phonetic: '[ˈhɔbi]',
    meaning: 'Sở thích',
    example: 'Mein Hobby ist Lesen.',
    theme: 'Thông tin cá nhân',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1463171356619-035824805e91?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '24',
    word: 'Sprache',
    article: 'DIE',
    plural: 'Sprachen',
    phonetic: '[ˈʃpʁaːxə]',
    meaning: 'Ngôn ngữ',
    example: 'Welche Sprachen sprechen Sie?',
    theme: 'Thông tin cá nhân',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '24a',
    word: 'Muttersprache',
    article: 'DIE',
    plural: 'Muttersprachen',
    phonetic: '[ˈmʊtɐˌʃpʁaːxə]',
    meaning: 'Tiếng mẹ đẻ',
    example: 'Meine Muttersprache ist Vietnamesisch.',
    theme: 'Thông tin cá nhân',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '24b',
    word: 'Fremdsprache',
    article: 'DIE',
    plural: 'Fremdsprachen',
    phonetic: '[ˈfʁɛmtˌʃpʁaːxə]',
    meaning: 'Ngoại ngữ',
    example: 'Ich lerne Deutsch als Fremdsprache.',
    theme: 'Thông tin cá nhân',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '25',
    word: 'Lieblingsessen',
    article: 'DAS',
    plural: 'Lieblingsessen',
    phonetic: '[ˈliːblɪŋsˌʔɛsn̩]',
    meaning: 'Món ăn yêu thích',
    example: 'Was ist dein Lieblingsessen?',
    theme: 'Thức ăn & Đồ uống',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000'
  },

  // Nhóm 4: Tổng quan
  {
    id: '25a',
    word: 'Personalien',
    article: 'DIE',
    plural: 'Personalien',
    phonetic: '[pɛʁzoˈnaːli̯ən]',
    meaning: 'Thông tin cá nhân',
    example: 'Geben Sie bitte Ihre Personalien an.',
    theme: 'Thông tin cá nhân',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '26',
    word: 'Profil',
    article: 'DAS',
    plural: 'Profile',
    phonetic: '[pʁoˈfiːl]',
    meaning: 'Hồ sơ',
    example: 'Dein Profil ist unvollständig.',
    theme: 'Thông tin cá nhân',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '26a',
    word: 'Begrüßung',
    article: 'DIE',
    plural: 'Begrüßungen',
    phonetic: '[bəˈɡʁyːsʊŋ]',
    meaning: 'Lời chào',
    example: 'Die Begrüßung war sehr freundlich.',
    theme: 'Tổng quan',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1521791136364-798a730bb361?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '27',
    word: 'Erde',
    article: 'DIE',
    phonetic: '[ˈeːɐ̯də]',
    meaning: 'Trái đất',
    example: 'Die Erde ist rund.',
    theme: 'Tổng quan',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '28',
    word: 'Landkarte',
    article: 'DIE',
    plural: 'Landkarten',
    phonetic: '[ˈlantˌkaʁtə]',
    meaning: 'Bản đồ',
    example: 'Schau auf die Landkarte.',
    theme: 'Tổng quan',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '28a',
    word: 'Stadtplan',
    article: 'DER',
    plural: 'Stadtpläne',
    phonetic: '[ˈʃtatˌplaːn]',
    meaning: 'Bản đồ thành phố',
    example: 'Ich brauche einen Stadtplan.',
    theme: 'Tổng quan',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '28b',
    word: 'Lieblingsfilm',
    article: 'DER',
    plural: 'Lieblingsfilme',
    phonetic: '[ˈliːblɪŋsfɪlm]',
    meaning: 'Phim yêu thích',
    example: 'Was ist dein Lieblingsfilm?',
    theme: 'Thông tin cá nhân',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '28c',
    word: 'Lieblingsfarbe',
    article: 'DIE',
    plural: 'Lieblingsfarben',
    phonetic: '[ˈliːblɪŋsfaʁbə]',
    meaning: 'Màu sắc yêu thích',
    example: 'Meine Lieblingsfarbe ist Blau.',
    theme: 'Thông tin cá nhân',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1502691876148-a84978f59af8?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '28d',
    word: 'Gebirge',
    article: 'DAS',
    plural: 'Gebirge',
    phonetic: '[ɡəˈbɪʁɡə]',
    meaning: 'Dãy núi',
    example: 'Wir fahren in das Gebirge.',
    theme: 'Tổng quan',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '28e',
    word: 'Mausoleum',
    article: 'DAS',
    plural: 'Mausoleen',
    phonetic: '[maʊ̯zoˈleːʊm]',
    meaning: 'Lăng mộ',
    example: 'Das Mausoleum ist sehr alt.',
    theme: 'Tổng quan',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '28f',
    word: 'Vorort',
    article: 'DER',
    plural: 'Vororte',
    phonetic: '[ˈfoːɐ̯ˌɔʁt]',
    meaning: 'Ngoại ô',
    example: 'Ich wohne in einem Vorort.',
    theme: 'Liên lạc & Nơi ở',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '28g',
    word: 'Region',
    article: 'DIE',
    plural: 'Regionen',
    phonetic: '[ʁeˈɡi̯oːn]',
    meaning: 'Vùng miền',
    example: 'Diese Region ist bekannt cho Wein.',
    theme: 'Tổng quan',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '28h',
    word: 'Gegend',
    article: 'DIE',
    plural: 'Gegenden',
    phonetic: '[ˈɡeːɡn̩t]',
    meaning: 'Khu vực',
    example: 'In dieser Gegend ist es ruhig.',
    theme: 'Tổng quan',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '28i',
    word: 'Inland',
    article: 'DAS',
    phonetic: '[ˈɪnlant]',
    meaning: 'Nội địa',
    example: 'Der Brief geht ins Inland.',
    theme: 'Tổng quan',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '28j',
    word: 'Stufe',
    article: 'DIE',
    plural: 'Stufen',
    phonetic: '[ˈʃtuːfə]',
    meaning: 'Bậc thang / Cấp độ',
    example: 'Vorsicht, eine Stufe!',
    theme: 'Tổng quan',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '28k',
    word: 'Grenze',
    article: 'DIE',
    plural: 'Grenzen',
    phonetic: '[ˈɡʁɛnt͡sə]',
    meaning: 'Giới hạn / Biên giới',
    example: 'Wir überqueren die Grenze.',
    theme: 'Tổng quan',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '28l',
    word: 'Höhe',
    article: 'DIE',
    plural: 'Höhen',
    phonetic: '[ˈhøːə]',
    meaning: 'Chiều cao / Độ cao',
    example: 'Die Höhe des Berges ist 3000 Meter.',
    theme: 'Tổng quan',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '28m',
    word: 'Amerikaner',
    article: 'DER',
    plural: 'Amerikaner',
    phonetic: '[ameʁiˈkaːnɐ]',
    meaning: 'Người Mỹ',
    example: 'Er ist Amerikaner.',
    theme: 'Thông tin cá nhân',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1508921234172-b68ed335b3e6?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '28n',
    word: 'Geldbörse',
    article: 'DIE',
    plural: 'Geldbörsen',
    phonetic: '[ˈɡɛltˌbœʁzə]',
    meaning: 'Túi tiền / Ví',
    example: 'Meine Geldbörse ist weg.',
    theme: 'Tổng quan',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '28o',
    word: 'Portemonnaie',
    article: 'DAS',
    plural: 'Portemonnaies',
    phonetic: '[pɔʁtmɔˈneː]',
    meaning: 'Ví tiền',
    example: 'Ich habe mein Portemonnaie vergessen.',
    theme: 'Tổng quan',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '28p',
    word: 'Richtung',
    article: 'DIE',
    plural: 'Richtungen',
    phonetic: '[ˈʁɪçtʊŋ]',
    meaning: 'Phương hướng',
    example: 'In welche Richtung gehst du?',
    theme: 'Tổng quan',
    level: 'A1',
    imageUrl: 'https://images.unsplash.com/photo-1502101872923-d48509bff386?auto=format&fit=crop&q=80&w=1000'
  },

  // B1
  {
    id: '101',
    word: 'Entwicklung',
    article: 'DIE',
    plural: 'Entwicklungen',
    phonetic: '[ɛntˈvɪklʊŋ]',
    meaning: 'Sự phát triển',
    example: 'Die wirtschaftliche Entwicklung ist positiv.',
    theme: 'Kinh tế',
    level: 'B1',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '102',
    word: 'Verantwortung',
    article: 'DIE',
    phonetic: '[fɛɐ̯ˈantvɔʁtʊŋ]',
    meaning: 'Trách nhiệm',
    example: 'Er übernimmt die Verantwortung.',
    theme: 'Công việc',
    level: 'B1',
    imageUrl: 'https://images.unsplash.com/photo-1521791136364-798a730bb361?auto=format&fit=crop&q=80&w=1000'
  }
];

export const THEMES = Array.from(new Set(VOCABULARY_DATA.map(v => v.theme)));
export const LEVELS: Level[] = ['A1', 'A2', 'B1', 'B2'];
