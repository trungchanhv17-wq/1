
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
    theme: 'Home',
    level: 'A1',
  },
  {
    id: '2',
    word: 'Apfel',
    article: 'DER',
    plural: 'Äpfel',
    phonetic: '[ˈapl̩]',
    meaning: 'Quả táo',
    example: 'Ich esse einen Apfel.',
    theme: 'Food',
    level: 'A1',
  },
  {
    id: '3',
    word: 'Wasser',
    article: 'DAS',
    phonetic: '[ˈvasɐ]',
    meaning: 'Nước',
    example: 'Ein Glas Wasser, bitte.',
    theme: 'Food',
    level: 'A1',
  },
  // A1 - Time
  {
    id: '4',
    word: 'Uhr',
    article: 'DIE',
    plural: 'Uhren',
    phonetic: '[uːɐ̯]',
    meaning: 'Đồng hồ / Giờ',
    example: 'Es ist zwei Uhr.',
    theme: 'Time',
    level: 'A1',
  },
  {
    id: '5',
    word: 'Alter',
    article: 'DAS',
    phonetic: '[ˈaltə]',
    meaning: 'Tuổi tác',
    example: 'Wie alt sind Sie?',
    theme: 'Personal',
    level: 'A1',
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
    theme: 'Economy',
    level: 'B1',
  },
  {
    id: '102',
    word: 'Verantwortung',
    article: 'DIE',
    phonetic: '[fɛɐ̯ˈantvɔʁtʊŋ]',
    meaning: 'Trách nhiệm',
    example: 'Er übernimmt die Verantwortung.',
    theme: 'Work',
    level: 'B1',
  }
];

export const THEMES = Array.from(new Set(VOCABULARY_DATA.map(v => v.theme)));
export const LEVELS: Level[] = ['A1', 'A2', 'B1', 'B2'];
