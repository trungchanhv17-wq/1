
import { WIRTSCHAFT_VOCABULARY_DATA } from './wirtschaftData';
import { ARBEIT_KARRIERE_VOCABULARY_DATA } from './arbeitKarriereData';
import { UMWELT_NATUR_VOCABULARY_DATA } from './umweltNaturData';
import { RECHT_GESETZ_VOCABULARY_DATA } from './rechtGesetzData';
import { ENERGIE_UMWELT_VOCABULARY_DATA } from './energieUmweltData';
import { LEBENSQUALITAET_GESELLSCHAFT_VOCABULARY_DATA } from './lebensqualitaetGesellschaftData';
import { KULTUR_KOMMUNIKATION_VOCABULARY_DATA } from './kulturKommunikationData';
import { GELD_FINANZEN_VOCABULARY_DATA } from './geldFinanzenData';
import { ETHIK_MORAL_VOCABULARY_DATA } from './ethikMoralData';
import { MEDIEN_UNTERHALTUNG_VOCABULARY_DATA } from './medienUnterhaltungData';
import { RELIGION_GLAUBE_VOCABULARY_DATA } from './religionGlaubeData';
import { WISSENSCHAFT_TECHNOLOGIE_VOCABULARY_DATA } from './wissenschaftTechnologieData';
import { STADT_URBANISIERUNG_VOCABULARY_DATA } from './stadtUrbanisierungData';

export type Level = 'A1' | 'A2' | 'B1' | 'B2';

export interface VocabularyWord {
  id: string;
  level: Level;
  theme: string;
  german: string;
  article: 'der' | 'die' | 'das' | 'none';
  plural?: string;
  meaning_vi: string;
  meaning_en: string;
  example_de: string;
  example_vi: string;
  example_en: string;

  // Additional metadata & backward compatibility fields
  phonetic?: string;
  imageUrl?: string;
  word: string;
  meaning: string;
  example: string;
  word_type?: string;
}

export interface LegacyVocabularyWord {
  id: string;
  word: string;
  article?: string;
  plural?: string;
  phonetic?: string;
  meaning: string;
  example: string;
  theme: string;
  level: Level;
  imageUrl?: string;
}

const LEGACY_RAW_VOCABULARY_DATA: LegacyVocabularyWord[] = [
  // --- THÔNG TIN CÁ NHÂN ---
  { id: 'a1-p1', word: 'Name', article: 'DER', plural: 'Namen', phonetic: '[ˈnaːmə]', meaning: 'Tên', example: 'Mein Name ist Hans.', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-p2', word: 'Vorname', article: 'DER', plural: 'Vornamen', phonetic: '[ˈfoːɐ̯ˌnaːmə]', meaning: 'Tên gọi', example: 'Mein Vorname ist Peter.', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-p3', word: 'Nachname', article: 'DER', plural: 'Nachnamen', phonetic: '[ˈnaːxˌnaːmə]', meaning: 'Họ', example: 'Müller ist ein häufiger Nachname.', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-p4', word: 'Spitzname', article: 'DER', plural: 'Spitznamen', phonetic: '[ˈʃpɪt͡snhaːmə]', meaning: 'Biệt danh', example: 'Mein Spitzname ist Max.', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-p5', word: 'Geburtsdatum', article: 'DAS', plural: 'Geburtsdaten', phonetic: '[ɡəˈbuːɐ̯tsˌdaːtʊm]', meaning: 'Ngày sinh', example: 'Bitte nennen Sie Ihr Geburtsdatum.', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-p6', word: 'Alter', article: 'DAS', plural: 'Alter', phonetic: '[ˈaltɐ]', meaning: 'Tuổi', example: 'Wie alt bist du?', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-p7', word: 'Adresse', article: 'DIE', plural: 'Adressen', phonetic: '[aˈdʁɛsə]', meaning: 'Địa chỉ', example: 'Meine Adresse ist in Berlin.', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1490122417551-6ee9691429d0?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-p8', word: 'Straße', article: 'DIE', plural: 'Straßen', phonetic: '[ˈʃtʁaːsə]', meaning: 'Đường phố', example: 'Die Straße ist lang.', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1473163928139-1402d53ee7ca?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-p9', word: 'Stadt', article: 'DIE', plural: 'Städte', phonetic: '[ʃtat]', meaning: 'Thành phố', example: 'Berlin ist eine Stadt.', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-p10', word: 'Land', article: 'DAS', plural: 'Länder', phonetic: '[lant]', meaning: 'Quốc gia', example: 'Vietnam ist ein schönes Land.', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-p11', word: 'Postleitzahl', article: 'DIE', plural: 'Postleitzahlen', phonetic: '[ˈpɔstlaɪ̯tˌt͡saːl]', meaning: 'Mã bưu chính', example: 'Wie ist Ihre Postleitzahl?', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1566125882500-87e10f726cdc?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-p12', word: 'Telefonnummer', article: 'DIE', plural: 'Telefonnummern', phonetic: '[teleˈfoːnˌnʊmɐ]', meaning: 'Số điện thoại', example: 'Hier ist meine Telefonnummer.', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1520923642038-b4259ace9451?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-p13', word: 'E-Mail-Adresse', article: 'DIE', plural: 'E-Mail-Adressen', phonetic: '[ˈiːmeːl aˈdʁɛsə]', meaning: 'Địa chỉ email', example: 'Schicken Sie mir eine E-Mail.', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-p14', word: 'Geschlecht', article: 'DAS', plural: 'Geschlechter', phonetic: '[ɡəˈʃlɛçt]', meaning: 'Giới tính', example: 'Männlich oder weiblich.', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-p15', word: 'Beruf', article: 'DER', plural: 'Berufe', phonetic: '[bəˈʁuːf]', meaning: 'Nghề nghiệp', example: 'Was sind Sie von Beruf?', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1454165833767-02754a7c1b22?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-p16', word: 'Nationalität', article: 'DIE', plural: 'Nationalitäten', phonetic: '[nat͡si̯onaliˈtɛːt]', meaning: 'Quốc tịch', example: 'Ihre Nationalität bitte.', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1549416878-b9ca95e26903?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-p17', word: 'Familienstand', article: 'DER', plural: 'Familienstände', phonetic: '[faˈmiːli̯ənˌʃtant]', meaning: 'Tình trạng hôn nhân', example: 'Ledig oder verheiratet?', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1511119098563-1b033ca8b652?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-p18', word: 'Hobby', article: 'DAS', plural: 'Hobbys', phonetic: '[ˈhɔbi]', meaning: 'Sở thích', example: 'Mein Hobby ist Lesen.', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-p19', word: 'Geburtstag', article: 'DER', plural: 'Geburtstage', phonetic: '[ɡəˈbuːɐ̯t͡staːk]', meaning: 'Sinh nhật', example: 'Wann hast du Geburtstag?', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-p20', word: 'Sprache', article: 'DIE', plural: 'Sprachen', phonetic: '[ˈʃpʁaːxə]', meaning: 'Ngôn ngữ', example: 'Ich lerne Deutsch.', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-p21', word: 'Muttersprache', article: 'DIE', plural: 'Muttersprachen', phonetic: '[ˈmʊtɐʃpʁaːxə]', meaning: 'Tiếng mẹ đẻ', example: 'Vietnamesisch ist meine Muttersprache.', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-p22', word: 'Fremdsprache', article: 'DIE', plural: 'Fremdsprachen', phonetic: '[ˈfʁɛmtʃpʁaːxə]', meaning: 'Ngoại ngữ', example: 'Englisch ist eine Fremdsprache.', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-p23', word: 'Lieblingsessen', article: 'DAS', phonetic: '[ˈliːplɪŋsˌɛsn̩]', meaning: 'Món ăn yêu thích', example: 'Was ist dein Lieblingsessen?', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-p24', word: 'Hauptstadt', article: 'DIE', plural: 'Hauptstädte', phonetic: '[ˈhaʊ̯ptˌʃtat]', meaning: 'Thủ đô', example: 'Berlin ist die Hauptstadt von Deutschland.', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-p25', word: 'Herkunft', article: 'DIE', plural: 'Herkünfte', phonetic: '[ˈheːɐ̯ˌkʊnft]', meaning: 'Nguồn gốc, quê quán', example: 'Meine Herkunft ist Vietnam.', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-p26', word: 'Stadtviertel', article: 'DAS', plural: 'Stadtviertel', phonetic: '[ˈʃtatˌfɪʁtl̩]', meaning: 'Quận', example: 'Das Stadtviertel ist ruhig.', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-p27', word: 'Erde', article: 'DIE', plural: 'Erden', phonetic: '[ˈeːɐ̯də]', meaning: 'Trái Đất', example: 'Die Erde ist rund.', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-p28', word: 'Landkarte', article: 'DIE', plural: 'Landkarten', phonetic: '[ˈlantˌkaʁtə]', meaning: 'Bản đồ', example: 'Ich brauche eine Landkarte.', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-p29', word: 'Stadtplan', article: 'DER', plural: 'Stadtpläne', phonetic: '[ˈʃtatˌplaːn]', meaning: 'Bản đồ thành phố', example: 'Haben Sie einen Stadtplan?', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1490122417551-6ee9691429d0?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-p30', word: 'Begrüßung', article: 'DIE', plural: 'Begrüßungen', phonetic: '[bəˈɡʁyːsʊŋ]', meaning: 'Sự chào mừng', example: 'Die Begrüßung war sehr herzlich.', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-p31', word: 'Personalien', plural: 'Personalien', phonetic: '[pɛʁzoˈnaːli̯ən]', meaning: 'Thông tin cá nhân', example: 'Bitte geben Sie Ihre Personalien an.', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-p32', word: 'Profil', article: 'DAS', plural: 'Profile', phonetic: '[pʁoˈfiːl]', meaning: 'Tiểu sử', example: 'Mein Profil ist aktuell.', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-p33', word: 'Anschrift', article: 'DIE', plural: 'Anschriften', phonetic: '[ˈanˌʃʁɪft]', meaning: 'Địa chỉ', example: 'Như thế nào là Anschrift của bạn?', theme: 'Thông tin cá nhân', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=1000' },

  // --- GIA ĐÌNH ---
  { id: 'a1-f1', word: 'Mutter', article: 'DIE', plural: 'Mütter', phonetic: '[ˈmʊtɐ]', meaning: 'Mẹ', example: 'Meine Mutter ist nett.', theme: 'Gia đình', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-f2', word: 'Vater', article: 'DER', plural: 'Väter', phonetic: '[ˈfaːtɐ]', meaning: 'Bố', example: 'Mein Vater arbeitet viel.', theme: 'Gia đình', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-f3', word: 'Bruder', article: 'DER', plural: 'Brüder', phonetic: '[ˈbʁuːdɐ]', meaning: 'Anh trai', example: 'Ich habe einen Bruder.', theme: 'Gia đình', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-f4', word: 'Schwester', article: 'DIE', plural: 'Schwestern', phonetic: '[ˈʃvɛstɐ]', meaning: 'Chị gái', example: 'Meine Schwester ist klein.', theme: 'Gia đình', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-f5', word: 'Kind', article: 'DAS', plural: 'Kinder', phonetic: '[kɪnt]', meaning: 'Đứa trẻ', example: 'Das Kind spielt im Garten.', theme: 'Gia đình', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-f6', word: 'Oma', article: 'DIE', plural: 'Omas', phonetic: '[ˈoːma]', meaning: 'Bà', example: 'Meine Oma kocht gut.', theme: 'Gia đình', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-f7', word: 'Opa', article: 'DER', plural: 'Opas', phonetic: '[ˈoːpa]', meaning: 'Ông', example: 'Mein Opa liest die Zeitung.', theme: 'Gia đình', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-f8', word: 'Eltern', plural: 'Eltern', phonetic: '[ˈɛltɐn]', meaning: 'Bố mẹ', example: 'Meine Eltern leben in Hanoi. (Bố mẹ tôi sống ở Hà Nội.)', theme: 'Gia đình', level: 'A1' },
  { id: 'a1-f9', word: 'Sohn', article: 'DER', plural: 'Söhne', phonetic: '[zoːn]', meaning: 'Con trai', example: 'Mein Sohn geht zur Schule. (Con trai tôi đi học.)', theme: 'Gia đình', level: 'A1' },
  { id: 'a1-f10', word: 'Tochter', article: 'DIE', plural: 'Töchter', phonetic: '[ˈtɔxtɐ]', meaning: 'Con gái', example: 'Meine Tochter singt gern. (Con gái tôi thích hát.)', theme: 'Gia đình', level: 'A1' },
  { id: 'a1-f11', word: 'Onkel', article: 'DER', plural: 'Onkel', phonetic: '[ˈɔŋkl̩]', meaning: 'Cậu / Chú / Bác trai', example: 'Mein Onkel wohnt in Berlin. (Cậu tôi sống ở Berlin.)', theme: 'Gia đình', level: 'A1' },
  { id: 'a1-f12', word: 'Tante', article: 'DIE', plural: 'Tanten', phonetic: '[ˈtantə]', meaning: 'Dì / Cô / Bác gái', example: 'Meine Tante gibt mir ein Buch. (Dì tôi tặng tôi một cuốn sách.)', theme: 'Gia đình', level: 'A1' },
  { id: 'a1-f13', word: 'Cousin', article: 'DER', plural: 'Cousins', phonetic: '[kuˈzɛ̃ː]', meaning: 'Anh em họ nam', example: 'Mein Cousin spielt Fußball. (Anh họ của tôi chơi đá bóng.)', theme: 'Gia đình', level: 'A1' },
  { id: 'a1-f14', word: 'Cousine', article: 'DIE', plural: 'Cousinen', phonetic: '[kuˈziːnə]', meaning: 'Chị em họ nữ', example: 'Meine Cousine lernt Englisch. (Chị họ của tôi học tiếng Anh.)', theme: 'Gia đình', level: 'A1' },
  { id: 'a1-f15', word: 'Ehemann', article: 'DER', plural: 'Ehemänner', phonetic: '[ˈeːəˌman]', meaning: 'Chồng', example: 'Mein Ehemann kocht das Abendessen. (Chồng tôi nấu bữa tối.)', theme: 'Gia đình', level: 'A1' },
  { id: 'a1-f16', word: 'Ehefrau', article: 'DIE', plural: 'Ehefrauen', phonetic: '[ˈeːəˌfʁaʊ̯]', meaning: 'Vợ', example: 'Meine Ehefrau liest ein Buch. (Vợ tôi đang đọc sách.)', theme: 'Gia đình', level: 'A1' },
  { id: 'a1-f17', word: 'Baby', article: 'DAS', plural: 'Babys', phonetic: '[ˈbeːbi]', meaning: 'Em bé', example: 'Das Baby schläft ruhig. (Em bé đang ngủ yên.)', theme: 'Gia đình', level: 'A1' },
  { id: 'a1-f18', word: 'Familie', article: 'DIE', plural: 'Familien', phonetic: '[faˈmiːli̯ə]', meaning: 'Gia đình', example: 'Unsere Familie ist sehr glücklich. (Gia đình tôi rất hạnh phúc.)', theme: 'Gia đình', level: 'A1' },
  { id: 'a1-f19', word: 'Großeltern', plural: 'Großeltern', phonetic: '[ˈɡʁoːsˌɛltɐn]', meaning: 'Ông bà', example: 'Ich liebe meine Großeltern. (Tôi yêu kính ông bà mình.)', theme: 'Gia đình', level: 'A1' },
  { id: 'a1-f20', word: 'Familie von', phonetic: '[faˈmiːli̯ə fɔn]', meaning: 'Gia đình của...', example: 'Wie geht es der Familie von Peter? (Gia đình của Peter khỏe không?)', theme: 'Gia đình', level: 'A1' },
  { id: 'a1-f21', word: 'Eltern von', phonetic: '[ˈɛltɐn fɔn]', meaning: 'Bố mẹ của...', example: 'Das sind die Eltern von Anna. (Đó là bố mẹ của Anna.)', theme: 'Gia đình', level: 'A1' },
  { id: 'a1-f22', word: 'Freund', article: 'DER', plural: 'Freunde', phonetic: '[fʁɔɪ̯nt]', meaning: 'Bạn trai / Bạn bè nam', example: 'Er ist ein treuer Freund. (Anh ấy là một người bạn tốt.)', theme: 'Gia đình', level: 'A1' },
  { id: 'a1-f23', word: 'Freundin', article: 'DIE', plural: 'Freundinnen', phonetic: '[ˈfʁɔɪ̯ndɪn]', meaning: 'Bạn gái / Bạn bè nữ', example: 'Meine Freundin studiert Medizin. (Bạn gái tôi học ngành y.)', theme: 'Gia đình', level: 'A1' },
  { id: 'a1-f24', word: 'Gruppe', article: 'DIE', plural: 'Gruppen', phonetic: '[ˈɡʁʊpə]', meaning: 'Nhóm', example: 'Wir arbeiten in einer Gruppe. (Chúng tôi làm việc theo nhóm.)', theme: 'Gia đình', level: 'A1' },
  { id: 'a1-f25', word: 'miteinander', phonetic: '[mɪtˈaɪ̯nandɐ]', meaning: 'Cùng với nhau, với nhau', example: 'Lass uns miteinander reden. (Hãy cùng nói chuyện với nhau.)', theme: 'Gia đình', level: 'A1' },

  // --- TRƯỜNG HỌC ---
  { id: 'a1-s1', word: 'Lehrer', article: 'DER', plural: 'Lehrer', phonetic: '[ˈleːʁɐ]', meaning: 'Giáo viên nam', example: 'Der Lehrer ist sehr geduldig.', theme: 'Trường học', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1544717297-fa95b3ee51f8?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-s2', word: 'Schüler', article: 'DER', plural: 'Schüler', phonetic: '[ˈʃyːlɐ]', meaning: 'Học sinh nam', example: 'Der Schüler lernt Deutsch.', theme: 'Trường học', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-s3', word: 'Klasse', article: 'DIE', plural: 'Klassen', phonetic: '[ˈklasə]', meaning: 'Lớp học', example: 'Unsere Klasse ist sehr groß.', theme: 'Trường học', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-s4', word: 'Buch', article: 'DAS', plural: 'Bücher', phonetic: '[buːx]', meaning: 'Quyển sách', example: 'Das Buch liegt auf dem Tisch.', theme: 'Trường học', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-s5', word: 'Schule', article: 'DIE', plural: 'Schulen', phonetic: '[ˈʃuːlə]', meaning: 'Trường học', example: 'Meine Schule ist sehr modern.', theme: 'Trường học', level: 'A1' },
  { id: 'a1-s6', word: 'Lehrerin', article: 'DIE', plural: 'Lehrerinnen', phonetic: '[ˈleːʁəʁɪn]', meaning: 'Giáo viên nữ', example: 'Unsere Lehrerin ist sehr freundlich.', theme: 'Trường học', level: 'A1' },
  { id: 'a1-s7', word: 'Schülerin', article: 'DIE', plural: 'Schülerinnen', phonetic: '[ˈʃyːləʁɪn]', meaning: 'Học sinh nữ', example: 'Die Schülerin schreibt einen Aufsatz.', theme: 'Trường học', level: 'A1' },
  { id: 'a1-s8', word: 'Klassenzimmer', article: 'DAS', plural: 'Klassenzimmer', phonetic: '[ˈklasn̩ˌt͡sɪmɐ]', meaning: 'Phòng học', example: 'Das Klassenzimmer ist sauber.', theme: 'Trường học', level: 'A1' },
  { id: 'a1-s9', word: 'Tafel', article: 'DIE', plural: 'Tafeln', phonetic: '[ˈtaːfl̩]', meaning: 'Bảng', example: 'Der Lehrer schreibt an die Tafel.', theme: 'Trường học', level: 'A1' },
  { id: 'a1-s10', word: 'Tisch', article: 'DER', plural: 'Tische', phonetic: '[tɪʃ]', meaning: 'Bàn', example: 'Das Buch liegt auf dem Tisch.', theme: 'Trường học', level: 'A1' },
  { id: 'a1-s11', word: 'Stuhl', article: 'DER', plural: 'Stühle', phonetic: '[ʃtuːl]', meaning: 'Ghế', example: 'Setz dich auf den Stuhl.', theme: 'Trường học', level: 'A1' },
  { id: 'a1-s12', word: 'Heft', article: 'DAS', plural: 'Hefte', phonetic: '[hɛft]', meaning: 'Vở', example: 'Ich schreibe Vokabeln in das Heft.', theme: 'Trường học', level: 'A1' },
  { id: 'a1-s13', word: 'Bleistift', article: 'DER', plural: 'Bleistifte', phonetic: '[ˈblaɪ̯ˌʃtɪft]', meaning: 'Bút chì', example: 'Der Bleistift ist auf dem Tisch.', theme: 'Trường học', level: 'A1' },
  { id: 'a1-s14', word: 'Kugelschreiber', article: 'DER', plural: 'Kugelschreiber', phonetic: '[ˈkuːɡl̩ˌʃʁaɪ̯bɐ]', meaning: 'Bút bi', example: 'Ich schreibe mit einem Kugelschreiber.', theme: 'Trường học', level: 'A1' },
  { id: 'a1-s15', word: 'Radiergummi', article: 'DER', plural: 'Radiergummis', phonetic: '[ʁaˈdiːɐ̯ˌɡʊmi]', meaning: 'Cục tẩy', example: 'Hast du einen Radiergummi für mich?', theme: 'Trường học', level: 'A1' },
  { id: 'a1-s16', word: 'Tasche', article: 'DIE', plural: 'Taschen', phonetic: '[ˈtaʃə]', meaning: 'Cặp sách', example: 'Meine Tasche ist sehr schwer.', theme: 'Trường học', level: 'A1' },
  { id: 'a1-s17', word: 'Lineal', article: 'DAS', plural: 'Lineale', phonetic: '[liˈne̯aːl]', meaning: 'Thước kẻ', example: 'Wir benutzen das Lineal.', theme: 'Trường học', level: 'A1' },
  { id: 'a1-s18', word: 'Rucksack', article: 'DER', plural: 'Rucksäcke', phonetic: '[ˈʁʊkˌzak]', meaning: 'Ba lô', example: 'Mein Rucksack ist blau.', theme: 'Trường học', level: 'A1' },
  { id: 'a1-s19', word: 'Papier', article: 'DAS', plural: 'Papiere', phonetic: '[paˈpiːɐ̯]', meaning: 'Giấy', example: 'Bitte geben Sie mir ein Blatt Papier.', theme: 'Trường học', level: 'A1' },
  { id: 'a1-s20', word: 'Schultasche', article: 'DIE', plural: 'Schultaschen', phonetic: '[ˈʃuːlˌtaʃə]', meaning: 'Cặp học sinh', example: 'Er packt seine Schultasche.', theme: 'Trường học', level: 'A1' },
  { id: 'a1-s21', word: 'Note', article: 'DIE', plural: 'Noten', phonetic: '[ˈnoːtə]', meaning: 'Điểm số', example: 'Sie hat eine gute Note bekommen.', theme: 'Trường học', level: 'A1' },
  { id: 'a1-s22', word: 'Pause', article: 'DIE', plural: 'Pausen', phonetic: '[ˈpaʊ̯zə]', meaning: 'Giờ giải lao', example: 'In der Pause spielen die Kinder.', theme: 'Trường học', level: 'A1' },
  { id: 'a1-s23', word: 'Fach', article: 'DAS', plural: 'Fächer', phonetic: '[fach]', meaning: 'Môn học', example: 'Mein liebstes Fach ist Deutsch.', theme: 'Trường học', level: 'A1' },
  { id: 'a1-s24', word: 'Mathematik', article: 'DIE', phonetic: '[mateˈmaːtɪk]', meaning: 'Môn Toán', example: 'Mathematik macht viel Spaß.', theme: 'Trường học', level: 'A1' },
  { id: 'a1-s25', word: 'Deutsch', phonetic: '[dɔɪ̯t͡ʃ]', meaning: 'Tiếng Đức', example: 'Deutsch ist schön.', theme: 'Trường học', level: 'A1' },
  { id: 'a1-s26', word: 'Englisch', phonetic: '[ˈɛŋlɪʃ]', meaning: 'Tiếng Anh', example: 'Wir lernen Englisch.', theme: 'Trường học', level: 'A1' },
  { id: 'a1-s27', word: 'Kunst', article: 'DIE', plural: 'Künste', phonetic: '[kʊnst]', meaning: 'Nghệ thuật', example: 'Kunst ist mein Lieblingsfach.', theme: 'Trường học', level: 'A1' },
  { id: 'a1-s28', word: 'Musik', article: 'DIE', phonetic: '[muˈziːk]', meaning: 'Âm nhạc', example: 'Wir singen Lieder in Musik.', theme: 'Trường học', level: 'A1' },

  // --- TRƯỜNG HỌC A2 ---
  { id: 'a2-s1', word: 'Direktor', article: 'DER', plural: 'Direktoren', phonetic: '[diˈʁɛktoːɐ̯]', meaning: 'Hiệu trưởng nam', example: 'Der Direktor hält eine Rede.', theme: 'Trường học', level: 'A2' },
  { id: 'a2-s2', word: 'Direktorin', article: 'DIE', plural: 'Direktorinnen', phonetic: '[diʁɛkˈtoːʁɪn]', meaning: 'Hiệu trưởng nữ', example: 'Unsere Direktorin ist sehr nett.', theme: 'Trường học', level: 'A2' },
  { id: 'a2-s3', word: 'Prüfung', article: 'DIE', plural: 'Prüfungen', phonetic: '[ˈpʁyːfʊŋ]', meaning: 'Bài kiểm tra / Kỳ thi', example: 'Ich lerne für die Deutschprüfung.', theme: 'Trường học', level: 'A2' },
  { id: 'a2-s4', word: 'Test', article: 'DER', plural: 'Tests', phonetic: '[tɛst]', meaning: 'Bài thi', example: 'Der Test ist morgen.', theme: 'Trường học', level: 'A2' },
  { id: 'a2-s5', word: 'Zeugnis', article: 'DAS', plural: 'Zeugnisse', phonetic: '[ˈt͡sɔɪ̯knɪs]', meaning: 'Bảng điểm', example: 'Ich bekomme ein Zeugnis.', theme: 'Trường học', level: 'A2' },
  { id: 'a2-s6', word: 'Stundenplan', article: 'DER', plural: 'Stundenpläne', phonetic: '[ˈʃtʊndn̩ˌplaːn]', meaning: 'Thời khóa biểu', example: 'Auf dem Stundenplan steht heute Chemie.', theme: 'Trường học', level: 'A2' },
  { id: 'a2-s7', word: 'Geschichte', article: 'DIE', phonetic: '[ɡəˈʃɪçtə]', meaning: 'Lịch sử', example: 'Geschichte ist interessant.', theme: 'Trường học', level: 'A2' },
  { id: 'a2-s8', word: 'Chemie', article: 'DIE', phonetic: '[çeˈmiː]', meaning: 'Hóa học', example: 'Im Chemieunterricht machen wir Experimente.', theme: 'Trường học', level: 'A2' },
  { id: 'a2-s9', word: 'Biologie', article: 'DIE', phonetic: '[bioloˈɡiː]', meaning: 'Sinh học', example: 'Wir lernen über Tiere in Biologie.', theme: 'Trường học', level: 'A2' },
  { id: 'a2-s10', word: 'Physik', article: 'DIE', phonetic: '[fyˈziːk]', meaning: 'Vật lý', example: 'Physik erklärt das Universum.', theme: 'Trường học', level: 'A2' },
  { id: 'a2-s11', word: 'Erdkunde', article: 'DIE', phonetic: '[ˈeːɐ̯tˌkʊndə]', meaning: 'Địa lý', example: 'Wir lernen Länder in Erdkunde.', theme: 'Trường học', level: 'A2' },
  { id: 'a2-s12', word: 'Informatik', article: 'DIE', phonetic: '[ɪnfɔʁˈmaːtɪk]', meaning: 'Tin học', example: 'Wir programmieren in Informatik.', theme: 'Trường học', level: 'A2' },
  { id: 'a2-s13', word: 'Unterricht', article: 'DER', plural: 'Unterrichte', phonetic: '[ˈʊntɐˌʁɪçt]', meaning: 'Giờ học', example: 'Der Unterricht beginnt früh.', theme: 'Trường học', level: 'A2' },
  { id: 'a2-s14', word: 'Universität', article: 'DIE', plural: 'Universitäten', phonetic: '[univɛʁziˈtɛːt]', meaning: 'Đại học', example: 'Er studiert an der Universität.', theme: 'Trường học', level: 'A2' },
  { id: 'a2-s15', word: 'Campus', article: 'DER', plural: 'Campus', phonetic: '[ˈkambʊs]', meaning: 'Khuôn viên trường', example: 'Der Campus der Universität ist sehr schön.', theme: 'Trường học', level: 'A2' },
  { id: 'a2-s16', word: 'Bibliothek', article: 'DIE', plural: 'Bibliotheken', phonetic: '[bibli̯oˈteːk]', meaning: 'Thư viện', example: 'Ich lese in der Bibliothek.', theme: 'Trường học', level: 'A2' },
  { id: 'a2-s17', word: 'Computerraum', article: 'DER', plural: 'Computerräume', phonetic: '[kɔmˈpuːtɐˌʁaʊ̯m]', meaning: 'Phòng máy tính', example: 'Der Computerraum ist besetzt.', theme: 'Trường học', level: 'A2' },
  { id: 'a2-s18', word: 'Pausenhof', article: 'DER', plural: 'Pausenhöfe', phonetic: '[ˈpaʊ̯zn̩ˌhoːf]', meaning: 'Sân trường', example: 'Wir essen auf dem Pausenhof.', theme: 'Trường học', level: 'A2' },
  { id: 'a2-s19', word: 'Mensa', article: 'DIE', plural: 'Mensen', phonetic: '[ˈmɛnza]', meaning: 'Căng tin', example: 'Das Essen in der Mensa ist sehr lecker.', theme: 'Trường học', level: 'A2' },
  { id: 'a2-s20', word: 'Wissen', article: 'DAS', phonetic: '[ˈvɪsn̩]', meaning: 'Kiến thức', example: 'Wissen ist sehr wichtig.', theme: 'Trường học', level: 'A2' },
  { id: 'a2-s21', word: 'Lektion', article: 'DIE', plural: 'Lektionen', phonetic: '[lɛkˈt͡si̯oːn]', meaning: 'Bài học', example: 'Lektion eins ist sehr einfach.', theme: 'Trường học', level: 'A2' },
  { id: 'a2-s22', word: 'Nachhilfe', article: 'DIE', phonetic: '[ˈnaːxˌhɪlfə]', meaning: 'Gia sư', example: 'Sie gibt Nachhilfe in Mathematik.', theme: 'Trường học', level: 'A2' },

  // --- TRƯỜNG HỌC B1 ---
  { id: 'b1-s1', word: 'Abitur', article: 'DAS', plural: 'Abiture', phonetic: '[abiˈtuːɐ̯]', meaning: 'Kỳ thi tốt nghiệp', example: 'Er hat das Abitur bestanden.', theme: 'Trường học', level: 'B1' },
  { id: 'b1-s2', word: 'Hochschule', article: 'DIE', plural: 'Hochschulen', phonetic: '[ˈhoːxˌʃuːlə]', meaning: 'Trường cao đẳng, đại học', example: 'Er geht an eine Fachhochschule.', theme: 'Trường học', level: 'B1' },
  { id: 'b1-s3', word: 'Labor', article: 'DAS', plural: 'Labore', phonetic: '[laˈboːɐ̯]', meaning: 'Phòng thí nghiệm', example: 'Wir arbeiten im Labor.', theme: 'Trường học', level: 'B1' },
  { id: 'b1-s4', word: 'Sprachzertifikat', article: 'DAS', plural: 'Sprachzertifikate', phonetic: '[ˈʃpʁaːxt͡sɛɐ̯tifiˌkaːt]', meaning: 'Chứng chỉ ngôn ngữ', example: 'Ich brauche ein Sprachzertifikat.', theme: 'Trường học', level: 'B1' },
  { id: 'b1-s5', word: 'Nachweis', article: 'DER', plural: 'Nachweise', phonetic: '[ˈnaːxˌvaɪ̯s]', meaning: 'Sự chứng minh', example: 'Bitte zeigen Sie einen Nachweis.', theme: 'Trường học', level: 'B1' },
  { id: 'b1-s6', word: 'bestehen', phonetic: '[bəˈʃteːən]', meaning: 'Thi đỗ, bao gồm', example: 'Ich möchte die Prüfung bestehen.', theme: 'Trường học', level: 'B1' },
  { id: 'b1-s7', word: 'Stipendium', article: 'DAS', plural: 'Stipendien', phonetic: '[ʃtiˈpɛndi̯ʊm]', meaning: 'Học bổng', example: 'Sie hat ein Stipendium bekommen.', theme: 'Trường học', level: 'B1' },
  { id: 'b1-s8', word: 'ausprobieren', phonetic: '[ˈaʊ̯spʁoˌbiːʁən]', meaning: 'Thử nghiệm', example: 'Du solltest die neue Methode ausprobieren.', theme: 'Trường học', level: 'B1' },
  { id: 'b1-s9', word: 'Schulabschluss', article: 'DER', plural: 'Schulabschlüsse', phonetic: '[ˈʃuːlapˌʃlʊs]', meaning: 'Tốt nghiệp', example: 'Er hat einen guten Schulabschluss.', theme: 'Trường học', level: 'B1' },
  { id: 'b1-s10', word: 'Schulbildung', article: 'DIE', plural: 'Schulbildungen', phonetic: '[ˈʃuːlˌbɪldʊŋ]', meaning: 'Giáo dục', example: 'Eine gute Schulbildung giúp ích nhiều trong cuộc sống.', theme: 'Trường học', level: 'B1' },
  { id: 'b1-s11', word: 'betonen', phonetic: '[bəˈtoːnən]', meaning: 'Nhấn mạnh', example: 'Der Lehrer betont die Grammatik.', theme: 'Trường học', level: 'B1' },
  { id: 'b1-s12', word: 'Praktikantin', article: 'DIE', plural: 'Praktikantinnen', phonetic: '[pʁaktɪˈkantɪn]', meaning: 'Thực tập sinh nữ', example: 'Die Praktikantin lernt viele Dinge.', theme: 'Trường học', level: 'B1' },
  { id: 'b1-s13', word: 'überprüfen', phonetic: '[yːbɐˈpʁyːfn̩]', meaning: 'Kiểm tra lại', example: 'Bitte überprüfen Sie die Ergebnisse.', theme: 'Trường học', level: 'B1' },
  { id: 'b1-s14', word: 'Sprachprüfung', article: 'DIE', plural: 'Sprachprüfungen', phonetic: '[ˈʃpʁaːxpʁyːfʊŋ]', meaning: 'Bài kiểm tra ngôn ngữ', example: 'Die Sprachprüfung ist nächste Woche.', theme: 'Trường học', level: 'B1' },
  { id: 'b1-s15', word: 'Bildung', article: 'DIE', plural: 'Bildungen', phonetic: '[ˈbɪldʊŋ]', meaning: 'Sự giáo dục', example: 'Bildung öffnet neue Möglichkeiten.', theme: 'Trường học', level: 'B1' },
  { id: 'b1-s16', word: 'Abschluss', article: 'DER', plural: 'Abschlüsse', phonetic: '[ˈapˌʃlʊs]', meaning: 'Bằng cấp / Sự hoàn thành', example: 'Sie feiert ihren Abschluss.', theme: 'Trường học', level: 'B1' },
  { id: 'b1-s17', word: 'Studium', article: 'DAS', plural: 'Studien', phonetic: '[ˈʃtuːdi̯ʊm]', meaning: 'Học tập / Việc học đại học', example: 'Mein Studium läuft sehr gut.', theme: 'Trường học', level: 'B1' },
  { id: 'b1-s18', word: 'belegen', phonetic: '[bəˈleːɡen]', meaning: 'Tham gia khóa học / kỳ thi', example: 'Ich möchte einen Kurs belegen.', theme: 'Trường học', level: 'B1' },
  { id: 'b1-s19', word: 'Studiengang', article: 'DER', plural: 'Studiengänge', phonetic: '[ˈʃtuːdi̯ənˌɡaŋ]', meaning: 'Ngành học', example: 'Sie lernt im Studiengang Informatik.', theme: 'Trường học', level: 'B1' },
  { id: 'b1-s20', word: 'Seminar', article: 'DAS', plural: 'Seminare', phonetic: '[zemiˈnaːɐw]', meaning: 'Hội thảo / Chuyên đề', example: 'Wir bereiten ein Seminar vor.', theme: 'Trường học', level: 'B1' },
  { id: 'b1-s21', word: 'Prüfungsvorbereitung', article: 'DIE', phonetic: '[ˈpʁyːfʊŋsfoːɐbəʁaɪtʊŋ]', meaning: 'Luyện thi / Ôn tập', example: 'Die Prüfungsvorbereitung nimmt viel Zeit in Anspruch.', theme: 'Trường học', level: 'B1' },
  { id: 'b1-s22', word: 'erziehen', phonetic: '[ɛɐˈt͡siːən]', meaning: 'Dạy dỗ / Giáo dục', example: 'Es ist wichtig, Kinder gut zu erziehen.', theme: 'Trường học', level: 'B1' },
  { id: 'b1-s23', word: 'schulisch', phonetic: '[ˈʃuːlɪʃ]', meaning: 'Thuộc giáo dục', example: 'Er hat viele schulische Aktivitäten.', theme: 'Trường học', level: 'B1' },
  { id: 'b1-s24', word: 'Methode', article: 'DIE', plural: 'Methoden', phonetic: '[meˈtoːdə]', meaning: 'Phương pháp', example: 'Eine neue Methode hilft dir beim Lernen.', theme: 'Trường học', level: 'B1' },
  { id: 'b1-s25', word: 'Theorie', article: 'DIE', plural: 'Theorien', phonetic: '[teoˈʁiː]', meaning: 'Lý thuyết', example: 'Die Theorie muss man gut verstehen.', theme: 'Trường học', level: 'B1' },
  { id: 'b1-s26', word: 'gebildet', phonetic: '[ɡəˈbɪldət]', meaning: 'Có học thức', example: 'Sie ist eine sehr gebildete Person.', theme: 'Trường học', level: 'B1' },
  { id: 'b1-s27', word: 'Zertifikat', article: 'DAS', plural: 'Zertifikate', phonetic: '[t͡sɛɐ̯tifiˈkaːt]', meaning: 'Chứng chỉ', example: 'Ich freue mich über das Zertifikat.', theme: 'Trường học', level: 'B1' },
  { id: 'b1-s28', word: 'Rede', article: 'DIE', plural: 'Reden', phonetic: '[ˈʁeːdə]', meaning: 'Bài phát biểu', example: 'Der Direktor hält eine Rede.', theme: 'Trường học', level: 'B1' },
  { id: 'b1-s29', word: 'Ausgabe', article: 'DIE', plural: 'Ausgaben', phonetic: '[ˈaʊ̯sˌɡaːbə]', meaning: 'Sự xuất bản / Phiên bản', example: 'Das ist die neueste Ausgabe des Buchs.', theme: 'Trường học', level: 'B1' },
  { id: 'b1-s30', word: 'Hygiene', article: 'DIE', phonetic: '[hyˈɡi̯eːnə]', meaning: 'Vệ sinh', example: 'In Schulbauten wird auf Hygiene geachtet.', theme: 'Trường học', level: 'B1' },
  { id: 'b1-s31', word: 'Klassenfahrt', article: 'DIE', plural: 'Klassenfahrten', phonetic: '[ˈklasn̩ˌfaːɐ̯t]', meaning: 'Chuyến dã ngoại của lớp', example: 'Im Sommer machen wir eine Klassenfahrt.', theme: 'Trường học', level: 'B1' },
  { id: 'b1-s32', word: 'Fortbildung', article: 'DIE', plural: 'Fortbildungen', phonetic: '[ˈfɔʁtˌbɪldʊŋ]', meaning: 'Sự học nâng cao / Bồi dưỡng', example: 'Sie nimmt an einer Fortbildung teil.', theme: 'Trường học', level: 'B1' },
  { id: 'b1-s33', word: 'Disziplin', article: 'DIE', plural: 'Disziplinen', phonetic: '[dɪst͡sɪˈpliːn]', meaning: 'Kỷ luật', example: 'In der Schule braucht man Disziplin.', theme: 'Trường học', level: 'B1' },

  // --- TRƯỜNG HỌC B2 ---
  { id: 'b2-s1', word: 'Umschulung', article: 'DIE', plural: 'Umschulungen', phonetic: '[ˈʊmˌʃuːlʊŋ]', meaning: 'Đào tạo lại', example: 'Er macht eine Umschulung.', theme: 'Trường học', level: 'B2' },
  { id: 'b2-s2', word: 'umschulen', phonetic: '[ˈʊmˌʃuːlən]', meaning: 'Học chuyển đổi nghề', example: 'Er lässt sich zum Kaufmann umschulen.', theme: 'Trường học', level: 'B2' },
  { id: 'b2-s3', word: 'Körpersprache', article: 'DIE', plural: 'Körpersprachen', phonetic: '[ˈkœʁpɐˌʃpʁaːxə]', meaning: 'Ngôn ngữ cơ thể', example: 'Die Körpersprache sagt viel aus.', theme: 'Trường học', level: 'B2' },
  { id: 'b2-s4', word: 'Bildungsweg', article: 'DER', plural: 'Bildungswege', phonetic: '[ˈbɪldʊŋsˌveːk]', meaning: 'Con đường giáo dục', example: 'Jeder Bildungsweg ist einzigartig.', theme: 'Trường học', level: 'B2' },
  { id: 'b2-s5', word: 'Akademie', article: 'DIE', plural: 'Akademien', phonetic: '[akadeˈmiː]', meaning: 'Học viện', example: 'Er lehrt an einer Kunstakademie.', theme: 'Trường học', level: 'B2' },
  { id: 'b2-s6', word: 'Volkshochschule', article: 'DIE', plural: 'Volkshochschulen', phonetic: '[ˈfɔlksˈhoːxˌʃuːlə]', meaning: 'Trường cao đẳng cộng đồng', example: 'Ich belege Kurse an der Volkshochschule.', theme: 'Trường học', level: 'B2' },
  { id: 'b2-s7', word: 'Pädagogin', article: 'DIE', plural: 'Pädagoginnen', phonetic: '[pɛdaˈɡoːɡɪn]', meaning: 'Giáo viên sư phạm nữ', example: 'Als Pädagogin erforscht sie neue Lernweisen.', theme: 'Trường học', level: 'B2' },
  { id: 'b2-s8', word: 'Kindertagesstätte', article: 'DIE', plural: 'Kindertagesstätten', phonetic: '[ˈkɪndɐˈtaːɡəsˌʃtɛtə]', meaning: 'Nhà trẻ', example: 'Sie arbeitet in einer neuen Kindertagesstätte.', theme: 'Trường học', level: 'B2' },

  // --- THỨC ĂN & ĐỒ UỐNG ---
  // --- LEVEL A1 ---
  { id: 'food-a1-1', word: 'Brot', article: 'DAS', plural: 'Brote', phonetic: '[bʁoːt]', meaning: 'Bánh mì', example: 'Ich esse jeden Morgen Brot mit Butter. (Tôi ăn bánh mì với bơ mỗi sáng.)', theme: 'Thức ăn & Đồ uống', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1000' },
  { id: 'food-a1-2', word: 'Butter', article: 'DIE', plural: 'Buttern', phonetic: '[ˈbʊtɐ]', meaning: 'Bơ', example: 'Bitte gib mir die Butter für das Brot. (Làm ơn đưa cho tôi bơ để quẹt bánh mì.)', theme: 'Thức ăn & Đồ uống', level: 'A1' },
  { id: 'food-a1-3', word: 'Käse', article: 'DER', plural: 'Käse', phonetic: '[ˈkɛːzə]', meaning: 'Phô mai', example: 'Der Käse schmeckt sehr lecker. (Phô mai có vị rất ngon.)', theme: 'Thức ăn & Đồ uống', level: 'A1' },
  { id: 'food-a1-4', word: 'Zucker', article: 'DER', phonetic: '[ˈt͡sʊkɐ]', meaning: 'Đường', example: 'Ich trinke meinen Kaffee ohne Zucker. (Tôi uống cà phê không đường.)', theme: 'Thức ăn & Đồ uống', level: 'A1' },
  { id: 'food-a1-5', word: 'Kaffee', article: 'DER', plural: 'Kaffees', phonetic: '[ˈkafe]', meaning: 'Cà phê', example: 'Ein Kaffee am Morgen weckt mich auf. (Một ly cà phê vào buổi sáng giúp tôi tỉnh táo.)', theme: 'Thức ăn & Đồ uống', level: 'A1' },
  { id: 'food-a1-6', word: 'Tee', article: 'DER', plural: 'Tees', phonetic: '[teː]', meaning: 'Trà', example: 'Trinkst du lieber grünen oder schwarzen Tee? (Bạn thích uống trà xanh hay trà đen hơn?)', theme: 'Thức ăn & Đồ uống', level: 'A1' },
  { id: 'food-a1-7', word: 'Wasser', article: 'DAS', plural: 'Wasser', phonetic: '[ˈvasɐ]', meaning: 'Nước', example: 'Trinken Sie genug Wasser am Tag. (Hãy uống đủ nước mỗi ngày.)', theme: 'Thức ăn & Đồ uống', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1548919973-5cfe5d4fc474?auto=format&fit=crop&q=80&w=1000' },
  { id: 'food-a1-8', word: 'Milch', article: 'DIE', plural: 'Milchsorten', phonetic: '[mɪlç]', meaning: 'Sữa', example: 'Kinder sollen täglich frische Milch trinken. (Trẻ em nên uống sữa tươi mỗi ngày.)', theme: 'Thức ăn & Đồ uống', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1564031649988-9694b791facd?auto=format&fit=crop&q=80&w=1000' },
  { id: 'food-a1-9', word: 'Apfel', article: 'DER', plural: 'Äpfel', phonetic: '[ˈapl̩]', meaning: 'Quả táo', example: 'Ein Apfel am Tag hält den Arzt gesund. (Một quả táo mỗi ngày giúp bạn khỏe mạnh gạt lo bác sĩ.)', theme: 'Thức ăn & Đồ uống', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=1000' },
  { id: 'food-a1-10', word: 'Banane', article: 'DIE', plural: 'Bananen', phonetic: '[baˈnaːnə]', meaning: 'Quả chuối', example: 'Die Affen essen sehr gerne Bananen. (Những con khỉ rất thích ăn chuối.)', theme: 'Thức ăn & Đồ uống', level: 'A1' },
  { id: 'food-a1-11', word: 'Orange', article: 'DIE', plural: 'Orangen', phonetic: '[oˈʁɑ̃ːʒə]', meaning: 'Quả cam', example: 'Orangensaft liefert viel Vitamin C. (Nước cam cung cấp rất nhiều vitamin C.)', theme: 'Thức ăn & Đồ uống', level: 'A1' },
  { id: 'food-a1-12', word: 'Tomate', article: 'DIE', plural: 'Tomaten', phonetic: '[toˈmaːtə]', meaning: 'Quả cà chua', example: 'Die rote Tomate passt perfekt in den Salat. (Quả cà chua đỏ hoàn hảo khi làm salad.)', theme: 'Thức ăn & Đồ uống', level: 'A1' },
  { id: 'food-a1-13', word: 'Fisch', article: 'DER', plural: 'Fische', phonetic: '[fɪʃ]', meaning: 'Con cá', example: 'Fisch ist gesund und schmeckt lecker. (Cá rất có lợi cho sức khỏe và vị thì ngon.)', theme: 'Thức ăn & Đồ uống', level: 'A1' },
  { id: 'food-a1-14', word: 'Fleisch', article: 'DAS', plural: 'Fleischsorten', phonetic: '[flaɪ̯ʃ]', meaning: 'Thịt', example: 'Er isst überhaupt kein Fleisch mehr. (Anh ấy hoàn toàn không ăn thịt nữa.)', theme: 'Thức ăn & Đồ uống', level: 'A1' },
  { id: 'food-a1-15', word: 'Kartoffel', article: 'DIE', plural: 'Kartoffeln', phonetic: '[kaʁˈtɔfl̩]', meaning: 'Khoai tây', example: 'Pommes frites werden aus Kartoffeln gemacht. (Khoai tây chiên được làm từ khoai tây.)', theme: 'Thức ăn & Đồ uống', level: 'A1' },
  { id: 'food-a1-16', word: 'Salat', article: 'DER', plural: 'Salate', phonetic: '[zaˈlaːt]', meaning: 'Món salad / Rau xà lách', example: 'Zum Abendessen bereite ich einen Salat vor. (Tôi chuẩn bị một món salad cho bữa tối.)', theme: 'Thức ăn & Đồ uống', level: 'A1' },
  { id: 'food-a1-17', word: 'Suppe', article: 'DIE', plural: 'Suppen', phonetic: '[ˈzʊpə]', meaning: 'Món súp / Canh', example: 'Im Winter wärmt eine heiße Suppe sehr gut. (Vào mùa đông, một bát súp nóng sẽ sưởi ấm rất tốt.)', theme: 'Thức ăn & Đồ uống', level: 'A1' },
  { id: 'food-a1-18', word: 'Reis', article: 'DER', plural: 'Reissorten', phonetic: '[ʁaɪ̯s]', meaning: 'Cơm / Gạo', example: 'In Vietnam isst man täglich Reis. (Ở Việt Nam, người ta ăn cơm hàng ngày.)', theme: 'Thức ăn & Đồ uống', level: 'A1' },
  { id: 'food-a1-19', word: 'Kuchen', article: 'DER', plural: 'Kuchen', phonetic: '[ˈkuːxn̩]', meaning: 'Bánh ngọt', example: 'Sonntags gibt es bei uns oft Kuchen. (Vào Chủ Nhật, chúng tôi thường ăn bánh ngọt.)', theme: 'Thức ăn & Đồ uống', level: 'A1' },
  { id: 'food-a1-20', word: 'Eis', article: 'DAS', plural: 'Eissorten', phonetic: '[aɪ̯s]', meaning: 'Kem', example: 'Im Sommer essen die Kinder gerne süßes Eis. (Vào mùa hè, trẻ em thích ăn kem ngọt.)', theme: 'Thức ăn & Đồ uống', level: 'A1' },
  { id: 'food-a1-21', word: 'Hähnchen', article: 'DAS', plural: 'Hähnchen', phonetic: '[ˈhɛːnçən]', meaning: 'Thịt gà / Con gà', example: 'Wir braten ein Hähnchen für das Mittagessen. (Chúng tôi quay một con gà cho bữa trưa.)', theme: 'Thức ăn & Đồ uống', level: 'A1' },
  { id: 'food-a1-22', word: 'Gemüse', article: 'DAS', plural: 'Gemüsearten', phonetic: '[ɡəˈmyːzə]', meaning: 'Rau củ', example: 'Frisches Gemüse liefert dem Körper Vitamine. (Rau củ tươi cung cấp vitamin cho cơ thể.)', theme: 'Thức ăn & Đồ uống', level: 'A1' },
  { id: 'food-a1-23', word: 'Obst', article: 'DAS', phonetic: '[oːpst]', meaning: 'Trái cây / Hoa quả', example: 'Obst enthält gesunden, natürlichen Fruchtzucker. (Trái cây chứa đường tự nhiên tốt cho sức khỏe.)', theme: 'Thức ăn & Đồ uống', level: 'A1' },
  { id: 'food-a1-24', word: 'Getränk', article: 'DAS', plural: 'Getränke', phonetic: '[ɡəˈtʁɛŋk]', meaning: 'Đồ uống / Thức uống', example: 'Welche Getränke möchtest du für die Party kaufen? (Bạn muốn mua những thức uống nào cho bữa tiệc?)', theme: 'Thức ăn & Đồ uống', level: 'A1' },
  { id: 'food-a1-25', word: 'Pizza', article: 'DIE', plural: 'Pizzen', phonetic: '[ˈpɪt͡sa]', meaning: 'Bánh pizza', example: 'Lass uns heute Abend eine klassische Pizza Salami bestellen. (Tối nay hãy gọi một chiếc pizza salami truyền thống nhé.)', theme: 'Thức ăn & Đồ uống', level: 'A1' },
  { id: 'food-a1-26', word: 'Sandwich', article: 'DAS', plural: 'Sandwiches', phonetic: '[ˈsɛntvɪt͡ʃ]', meaning: 'Bánh mì kẹp Sandwich', example: 'Ich nehme ein fertiges Sandwich mit zur Arbeit. (Tôi mang theo một chiếc sandwich làm sẵn tới chỗ làm.)', theme: 'Thức ăn & Đồ uống', level: 'A1' },
  { id: 'food-a1-27', word: 'Schokolade', article: 'DIE', plural: 'Schokoladen', phonetic: '[ʃokoˈlaːdə]', meaning: 'Sô-cô-la', example: 'Dunkle Schokolade schmeckt mir am besten. (Sô-cô-la đen có hương vị tôi thích nhất.)', theme: 'Thức ăn & Đồ uống', level: 'A1' },
  { id: 'food-a1-28', word: 'Tasse', article: 'DIE', plural: 'Tassen', phonetic: '[ˈtasə]', meaning: 'Cái cốc / Tách', example: 'Ich möchte gerne eine Tasse heißen Kakao trinken. (Tôi muốn uống một cốc ca cao nóng.)', theme: 'Thức ăn & Đồ uống', level: 'A1' },
  { id: 'food-a1-29', word: 'Löffel', article: 'DER', plural: 'Löffel', phonetic: '[ˈlœfl̩]', meaning: 'Cái thìa / Muỗng', example: 'Wir essen die warme Suppe mit einem Löffel. (Chúng tôi dùng thìa để ăn món súp ấm.)', theme: 'Thức ăn & Đồ uống', level: 'A1' },

  // --- LEVEL A2 ---
  { id: 'food-a2-1', word: 'Marmelade', article: 'DIE', plural: 'Marmeladen', phonetic: '[maʁmeˈlaːdə]', meaning: 'Mứt quả', example: 'Eine süße Marmelade schmeckt lecker zum Frühstück. (Mứt ngọt ăn kèm bữa sáng rất ngon.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-2', word: 'Nudel', article: 'DIE', plural: 'Nudeln', phonetic: '[ˈnuːdl̩]', meaning: 'Mì / Sợi mì', example: 'Heute koche ich italienische Nudeln mit Tomatensoße. (Hôm nay tôi sẽ nấu mì Ý với sốt cà chua.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-3', word: 'Hamburger', article: 'DER', plural: 'Hamburger', phonetic: '[ˈhambʊʁɡɐ]', meaning: 'Bánh Hamburger', example: 'Kinder lieben Hamburger und Pommes im Schnellrestaurant. (Trẻ em thích hamburger và khoai tây chiên ở quán ăn nhanh.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-4', word: 'Rindfleisch', article: 'DAS', phonetic: '[ˈʁɪntˌflaɪ̯ʃ]', meaning: 'Thịt bò', example: 'Rindfleisch eignet sich hervorragend für ein gutes Steak. (Thịt bò cực kỳ thích hợp để làm món bít tết hảo hạng.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-5', word: 'Schweinefleisch', article: 'DAS', phonetic: '[ˈʃvaɪ̯nəˌflaɪ̯ʃ]', meaning: 'Thịt lợn (Thịt heo)', example: 'In Deutschland wird sehr viel Schweinefleisch konsumiert. (Ở Đức, người ta tiêu thụ lượng lớn thịt lợn.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-6', word: 'Wurst', article: 'DIE', plural: 'Würste', phonetic: '[vʊʁst]', meaning: 'Xúc xích', example: 'Es gibt viele verschiedene Wurstsorten beim Metzger. (Có rất nhiều loại xúc xích khác nhau ở cửa hàng thịt.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-7', word: 'Schinken', article: 'DER', plural: 'Schinken', phonetic: '[ˈʃɪŋkn̩]', meaning: 'Thịt mông xông khói / Giăm bông', example: 'Ich belege mein Brot gerne mit Käse und Schinken. (Tôi thích kẹp bánh mì của mình với phô mai và giăm bông.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-8', word: 'Imbiss', article: 'DER', plural: 'Imbisse', phonetic: '[ˈɪmbɪs]', meaning: 'Quán ăn nhanh / Quầy ăn nhẹ', example: 'In der Mittagspause hole ich mir eine Wurst am Imbiss. (Trong giờ nghỉ trưa, tôi lấy một cái xúc xích ở quầy ăn nhanh.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-9', word: 'Biergarten', article: 'DER', plural: 'Biergärten', phonetic: '[ˈbiːɐ̯ˌɡaʁtn̩]', meaning: 'Vườn bia (Quán bia ngoài trời kiểu Đức)', example: 'Im Sommer treffen sich alle im schattigen Biergarten. (Vào mùa hè, tất cả tụ họp tại vườn bia râm mát.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-10', word: 'Bratwurst', article: 'DIE', plural: 'Bratwürste', phonetic: '[ˈbʁaːtˌvʊʁst]', meaning: 'Xúc xích nướng', example: 'Eine Thüringer Bratwurst schmeckt am besten frisch vom Grill. (Xúc xích nướng vùng Thüringen ngon nhất khi mới xuống lò nướng.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-11', word: 'Birne', article: 'DIE', plural: 'Birnen', phonetic: '[ˈbɪʁnə]', meaning: 'Quả lê', example: 'Die Birne ist süß, saftig and sehr gesund. (Quả lê ngọt, mọng nước và rất tốt cho sức khỏe.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-12', word: 'Karotte', article: 'DIE', plural: 'Karotten', phonetic: '[kaˈʁɔtə]', meaning: 'Củ cà rốt', example: 'Karotten sind sehr gut für die Augen. (Cà rốt rất tốt cho đôi mắt.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-13', word: 'Zwiebel', article: 'DIE', plural: 'Zwiebeln', phonetic: '[ˈt͡sviːbl̩]', meaning: 'Củ hành tây / Hành củ', example: 'Beim Schneiden einer Zwiebel muss ich immer weinen. (Khi cắt hành tây, tôi luôn phải chảy nước mắt.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-14', word: 'Honig', article: 'DER', plural: 'Honigsorten', phonetic: '[ˈhoːnɪç]', meaning: 'Mật ong', example: 'Ich trinke meinen Tee am liebsten mit Honig. (Tôi thích uống trà với mật ong nhất.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-15', word: 'Joghurt', article: 'DER', plural: 'Joghurts', phonetic: '[ˈjoːɡʊʁt]', meaning: 'Sữa chua', example: 'Ein frischer Naturjoghurt eignet sich gut als Snack. (Một hũ sữa chua tự nhiên tươi ngon thích hợp làm đồ ăn nhẹ.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-16', word: 'Salz', article: 'DAS', plural: 'Salzsorten', phonetic: '[zalt͡s]', meaning: 'Muối ăn', example: 'In der Suppe fehlt noch eine Prise Salz. (Trong nồi canh vẫn còn thiếu một nhúm muối.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-17', word: 'Pfeffer', article: 'DER', plural: 'Pfeffersorten', phonetic: '[ˈpfɛfɐ]', meaning: 'Hạt tiêu / Tiêu', example: 'Würzen Sie das Steak mit Salz und schwarzem Pfeffer. (Hãy nêm bít tết của bạn với muối và tiêu đen.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-18', word: 'Gaststätte', article: 'DIE', plural: 'Gaststätten', phonetic: '[ˈɡastˌʃtɛtə]', meaning: 'Nhà hàng / Quán ăn truyền thống', example: 'Wir essen am Sonntag in der gemütlichen Gaststätte. (Chúng tôi ăn vào Chủ Nhật tại nhà hàng ấm cúng.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-19', word: 'Keks', article: 'DER', plural: 'Kekse', phonetic: '[keːks]', meaning: 'Bánh quy', example: 'Der Hund darf auf keinen Fall Kekse essen. (Chó tuyệt đối không được ăn bánh quy.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-20', word: 'Croissant', article: 'DAS', plural: 'Croissants', phonetic: '[kʁoaˈsãː]', meaning: 'Bánh sừng bò', example: 'Zum Frühstück esse ich am liebsten ein warmes Croissant. (Cho bữa sáng tôi thích ăn bánh sừng bò nóng nhất.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-21', word: 'Kaffeetasse', article: 'DIE', plural: 'Kaffeetassen', phonetic: '[ˈkafeˌtasə]', meaning: 'Tách cà phê', example: 'Sie stellt eine leere Kaffeetasse auf den Tisch. (Cô ấy đặt một chiếc tách cà phê trống lên bàn.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-22', word: 'süß', phonetic: '[zyːs]', meaning: 'Ngọt', example: 'Reife Himbeeren schmecken herrlich süß. (Những quả mâm xôi chín mọng có vị ngọt ngào.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-23', word: 'sauer', phonetic: '[ˈzaʊ̯ɐ]', meaning: 'Chua', example: 'Zitronen schmecken extrem sauer. (Quả chanh có vị cực kỳ chua.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-24', word: 'scharf', phonetic: '[ʃaʁf]', meaning: 'Cay', example: 'Chilischoten machen das thailändische Curry sehr scharf. (Ớt làm cho món cà ri Thái trở nên rất cay.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-25', word: 'fettig', phonetic: '[ˈfɛtɪç]', meaning: 'Nhiều dầu mỡ', example: 'Pommes frites können im Imbiss sehr fettig sein. (Khoai tây chiên ở quán ăn nhanh có thể rất nhiều dầu mỡ.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-26', word: 'Gurke', article: 'DIE', plural: 'Gurken', phonetic: '[ˈɡʊʁkə]', meaning: 'Quả dưa chuột (Dưa leo)', example: 'Eine frische Gurke besteht fast nur aus Wasser. (Một quả dưa chuột tươi chứa hầu như toàn nước.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-27', word: 'Erdbeere', article: 'DIE', plural: 'Erdbeeren', phonetic: '[ˈeːɐ̯tˌbeːʁə]', meaning: 'Quả dâu tây', example: 'Im Juni pflücken wir frische süße Erdbeeren im Garten. (Vào tháng Sáu, chúng tôi hái dâu tây ngọt tươi trong vườn.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-28', word: 'Müsli', article: 'DAS', plural: 'Müslis', phonetic: '[ˈmyːsli]', meaning: 'Ngũ cốc ăn sáng', example: 'Er bereitet ein gesundes Müsli mit Haferflocken zu. (Anh ấy tự chuẩn bị một bữa ngũ cốc lành mạnh với yến mạch.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-29', word: 'Speisekarte', article: 'DIE', plural: 'Speisekarten', phonetic: '[ˈʃpaɪ̯zəˌkaʁtə]', meaning: 'Thực đơn', example: 'Darf ich bitte einen Blick auf die Speisekarte werfen? (Vui lòng cho tôi liếc nhìn thực đơn một chút được không?)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-30', word: 'Traube', article: 'DIE', plural: 'Trauben', phonetic: '[ˈtʁaʊ̯bə]', meaning: 'Quả nho', example: 'Aus süßen Weintrauben wird edler Wein gepresst. (Rượu vang quý phái được ép từ những quả nho ngọt.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-31', word: 'Pilz', article: 'DER', plural: 'Pilze', phonetic: '[pɪlt͡s]', meaning: 'Nấm', example: 'Im Herbst sammeln viele Menschen essbare Pilze im Wald. (Vào mùa thu nhiều người hái nấm ăn được trong rừng.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-32', word: 'Frucht', article: 'DIE', plural: 'Früchte', phonetic: '[fʁʊxt]', meaning: 'Trái cây / Quả', example: 'Tropische Früchte schmecken im Urlaub am besten. (Trái cây nhiệt đới ăn ngon nhất trong kỳ nghỉ.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-33', word: 'Huhn', article: 'DAS', plural: 'Hühner', phonetic: '[huːn]', meaning: 'Con gà / Gà mái', example: 'Die Hühner laufen frei auf dem Bauernhof herum. (Những con gà chạy xung quanh tự do trên trang trại.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-34', word: 'Soße', article: 'DIE', plural: 'Soßen', phonetic: '[ˈzoːsə]', meaning: 'Nước sốt / Nước xốt', example: 'Nudeln mit viel Tomatensoße schmecken den Kindern gut. (Mì với nhiều sốt cà chua trẻ em cực kỳ thích.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'food-a2-35', word: 'Möhre', article: 'DIE', plural: 'Möhren', phonetic: '[ˈmøːʁə]', meaning: 'Củ cà rốt (Tương tự Karotte)', example: 'Er schneidet eine Möhre für die Suppe auf. (Anh ấy cắt một củ cà rốt để nấu súp.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },

  // --- LEVEL B1 ---
  { id: 'food-b1-1', word: 'Putenfleisch', article: 'DAS', phonetic: '[ˈpuːtn̩ˌflaɪ̯ʃ]', meaning: 'Thịt gà tây', example: 'Putenfleisch ist mager, kalorienarm und sehr gesund. (Thịt gà tây nạc, ít calo và rất tốt cho sức khỏe.)', theme: 'Thức ăn & Đồ uống', level: 'B1' },
  { id: 'food-b1-2', word: 'Lammfleisch', article: 'DAS', phonetic: '[ˈlamˌflaɪ̯ʃ]', meaning: 'Thịt cừu non (Thịt cừu)', example: 'Lammfleisch schmeckt besonders zart und würzig. (Thịt cừu ăn rất mềm và có vị đậm đà đặc trưng.)', theme: 'Thức ăn & Đồ uống', level: 'B1' },
  { id: 'food-b1-3', word: 'Meeresfrüchte', article: 'DIE', plural: 'Meeresfrüchte', phonetic: '[ˈmeːʁəsˌfʁʏçtə]', meaning: 'Hải sản (Động vật biển ăn được)', example: 'Er bestellt Spaghetti mit frischen Meeresfrüchten. (Anh ấy gọi mì ống spaghetti với hải sản tươi sống.)', theme: 'Thức ăn & Đồ uống', level: 'B1' },
  { id: 'food-b1-4', word: 'Besteck', article: 'DAS', plural: 'Bestecke', phonetic: '[bəˈstɛk]', meaning: 'Bộ dao nĩa thìa', example: 'Legen Sie bitte das neue Besteck ordentlich auf den Tisch. (Làm ơn xếp bộ dao nĩa thìa mới ngăn nắp lên bàn.)', theme: 'Thức ăn & Đồ uống', level: 'B1' },
  { id: 'food-b1-5', word: 'Rezept', article: 'DAS', plural: 'Rezepte', phonetic: '[ʁeˈt͡sɛpt]', meaning: 'Công thức nấu ăn', example: 'Ich backe den Kuchen nach einem geheimen Rezept. (Tôi nướng cái bánh ngọt dựa theo một công thức bí mật.)', theme: 'Thức ăn & Đồ uống', level: 'B1' },
  { id: 'food-b1-6', word: 'Büfett', article: 'DAS', plural: 'Büfetts', phonetic: '[byˈfɛː]', meaning: 'Bàn tiệc Buffet / Quầy ăn tự chọn', example: 'Das kalte Büfett ist reichlich mit leckeren Speisen gefüllt. (Quầy buffet lạnh ngập tràn các món ăn ngon mắt.)', theme: 'Thức ăn & Đồ uống', level: 'B1' },
  { id: 'food-b1-7', word: 'Snack', article: 'DER', plural: 'Snacks', phonetic: '[snɛk]', meaning: 'Thức ăn nhẹ / Đồ ăn vặt', example: 'Nüsse sind ein gesunder Snack für zwischendurch. (Hạt là đồ ăn vặt lành mạnh cho các bữa phụ.)', theme: 'Thức ăn & Đồ uống', level: 'B1' },
  { id: 'food-b1-8', word: 'Alkohol', article: 'DER', plural: 'Alkohole', phonetic: '[ˈalkohol]', meaning: 'Chất cồn / Rượu', example: 'Jugendliche dürfen keinen harten Alkohol kaufen. (Thanh thiếu niên không được phép mua rượu mạnh.)', theme: 'Thức ăn & Đồ uống', level: 'B1' },
  { id: 'food-b1-9', word: 'Ananas', article: 'DIE', plural: 'Ananasse', phonetic: '[ˈananas]', meaning: 'Quả dứa', example: 'Eine saftige Ananas schmeckt köstlich süß und sauer. (Một quả dứa mọng nước có vị ngọt thanh chua dịu rất ngon.)', theme: 'Thức ăn & Đồ uống', level: 'B1' },
  { id: 'food-b1-10', word: 'backen', phonetic: '[ˈbakn̩]', meaning: 'Nướng bánh / Làm bánh', example: 'Meine Oma backt jeden Samstag frischen Apfelkuchen. (Bà ngoại tôi nướng bánh táo tươi mỗi thứ Bảy.)', theme: 'Thức ăn & Đồ uống', level: 'B1' },
  { id: 'food-b1-11', word: 'Bonbon', article: 'DER', plural: 'Bonbons', phonetic: '[bɔ̃ˈbɔ̃]', meaning: 'Kẹo cứng / Viên kẹo', example: 'Sie schenkt dem traurigen Jungen ein süßes Bonbon. (Cô ấy tặng cho cậu bé đang buồn một viên kẹo ngọt.)', theme: 'Thức ăn & Đồ uống', level: 'B1' },
  { id: 'food-b1-12', word: 'Schweinebraten', article: 'DER', plural: 'Schweinebraten', phonetic: '[ˈʃvaɪ̯nəˌbʁaːtn̩]', meaning: 'Thịt lợn nướng', example: 'Sonntags gibt es bei uns traditionell Schweinebraten. (Chủ Nhật nhà chúng tôi hay có món thịt heo quay truyền thống.)', theme: 'Thức ăn & Đồ uống', level: 'B1' },
  { id: 'food-b1-13', word: 'Erbse', article: 'DIE', plural: 'Erbsen', phonetic: '[ˈɛʁpsə]', meaning: 'Hạt đậu / Đậu Hà Lan', example: 'Grüne Erbsen passen hervorragend als Beilage zu Fleisch. (Đậu Hà Lan xanh cực kỳ hợp làm món ăn kèm thịt.)', theme: 'Thức ăn & Đồ uống', level: 'B1' },
  { id: 'food-b1-14', word: 'Spinat', article: 'DER', plural: 'Spinatsorten', phonetic: '[ʃpɪˈnaːt]', meaning: 'Rau chân vịt / Cải bó xôi', example: 'Spinat enthält sehr viel Eisen und Vitamine. (Rau bó xôi chứa vô cùng nhiều sắt và vitamin.)', theme: 'Thức ăn & Đồ uống', level: 'B1' },
  { id: 'food-b1-15', word: 'Kohl', article: 'DER', plural: 'Kohlsorten', phonetic: '[koːl]', meaning: 'Bắp cải / Cải bắp', example: 'Aus weißem Kohl macht man deftiges Sauerkraut für Würste. (Từ bắp cải trắng người ta làm bắp cải muối dưa chua béo ngậy để ăn với xúc xích.)', theme: 'Thức ăn & Đồ uống', level: 'B1' },
  { id: 'food-b1-16', word: 'Öl', article: 'DAS', plural: 'Öle', phonetic: '[øːl]', meaning: 'Dầu / Dầu ăn', example: 'Das Olivenöl ist qualitativ hochwertig und teuer. (Dầu ô liu này có chất lượng cao cấp và đắt tiền.)', theme: 'Thức ăn & Đồ uống', level: 'B1' },
  { id: 'food-b1-17', word: 'Essig', article: 'DER', plural: 'Essige', phonetic: '[ˈɛsɪç]', meaning: 'Giấm', example: 'Essig und Öl bilden die Basis for ein gutes Dressing. (Giấm và dầu tạo thành nguyên liệu cơ bản cho một món nước sốt trộn salad ngon.)', theme: 'Thức ăn & Đồ uống', level: 'B1' },
  { id: 'food-b1-18', word: 'Cappuccino', article: 'DER', plural: 'Cappuccinos', phonetic: '[kapʊˈtʃiːno]', meaning: 'Cà phê Cappuccino', example: 'Ich trinke am Nachmittag gern einen cremigen Cappuccino. (Tôi thích uống một ly cappuccino mịn béo vào buổi chiều.)', theme: 'Thức ăn & Đồ uống', level: 'B1' },
  { id: 'food-b1-19', word: 'Espresso', article: 'DER', plural: 'Espressos', phonetic: '[ɛsˈpʁɛso]', meaning: 'Cà phê Espresso', example: 'Nach dem Essen trinke ich einen starken, kleinen Espresso. (Sau bữa ăn tôi làm một ly espresso nhỏ nhưng đậm đà.)', theme: 'Thức ăn & Đồ uống', level: 'B1' },
  { id: 'food-b1-20', word: 'Torte', article: 'DIE', plural: 'Torten', phonetic: '[ˈtɔʁtə]', meaning: 'Bánh kem lớn / Bánh kem gato sinh nhật', example: 'Zum Geburtstag backt meine Mutter eine große Schwarzwälder Torte. (Vào sinh nhật mẹ tôi làm chiếc bánh kem rừng đen rất lớn.)', theme: 'Thức ăn & Đồ uống', level: 'B1' },
  { id: 'food-b1-21', word: 'Gebäck', article: 'DAS', plural: 'Gebäcke', phonetic: '[ɡəˈbɛk]', meaning: 'Bánh ngọt nướng / Đồ nướng', example: 'In der Vorweihnachtszeit gibt es köstliches Gebäck. (Vào khoảng thời gian trước Giáng sinh thường có nhiều loại bánh nướng ngon mắt.)', theme: 'Thức ăn & Đồ uống', level: 'B1' },
  { id: 'food-b1-22', word: 'Sahne', article: 'DIE', plural: 'Sahnen', phonetic: '[ˈzaːnə]', meaning: 'Kem tươi / Váng sữa', example: 'Möchten Sie Ihren Kuchen lieber mit oder ohne süße Sahne? (Bạn thích ăn bánh ngọt kèm hay không kèm kem tươi ngọt?)', theme: 'Thức ăn & Đồ uống', level: 'B1' },
  { id: 'food-b1-23', word: 'Nahrungsmittel', article: 'DAS', plural: 'Nahrungsmittel', phonetic: '[ˈnaːʁʊŋsˌmɪtl̩]', meaning: 'Thực phẩm / Lương thực', example: 'Frische Lebensmittel sind die besten Nahrungsmittel für uns. (Đồ ăn sống sạch là loại thực phẩm tốt nhất cho chúng ta.)', theme: 'Thức ăn & Đồ uống', level: 'B1' },
  { id: 'food-b1-24', word: 'Speise', article: 'DIE', plural: 'Speisen', phonetic: '[ˈʃpaɪ̯zə]', meaning: 'Món ăn / Đồ ăn dọn lên dĩa', example: 'Die Speisen auf diesem Fest sind exquisit zubereitet. (Các món ăn ở lễ hội này được chế biến vô cùng tinh xảo.)', theme: 'Thức ăn & Đồ uống', level: 'B1' },
  { id: 'food-b1-25', word: 'Nachtisch', article: 'DER', plural: 'Nachtische', phonetic: '[ˈnaːxˌtɪʃ]', meaning: 'Món tráng miệng', example: 'Gibt es heute ein süßes Eis als leckeren Nachtisch? (Hôm nay có kem ngọt để làm món tráng miệng ngon không?)', theme: 'Thức ăn & Đồ uống', level: 'B1' },
  { id: 'food-b1-26', word: 'vegetarisch', phonetic: '[veɡeˈtaːʁɪʃ]', meaning: 'Ăn chay / Thuộc thực vật', example: 'Vegetarische Ernährung liegt heutzutage voll im Trend. (Chế độ ăn chay ngày nay đang cực kỳ thịnh hành.)', theme: 'Thức ăn & Đồ uống', level: 'B1' },
  { id: 'food-b1-27', word: 'sich ernähren', phonetic: '[zɪç ɛɐ̯ˈnɛːʁən]', meaning: 'Ăn uống / Nuôi dưỡng cơ thể', example: 'Es ist wichtig für die Gesundheit, sich ausgewogen zu ernähren. (Ăn uống cân bằng là điều tối quan trọng cho sức khỏe.)', theme: 'Thức ăn & Đồ uống', level: 'B1' },
  { id: 'food-b1-28', word: 'köstlich', phonetic: '[ˈkœstlɪç]', meaning: 'Ngon tuyệt / Thơm ngon', example: 'Dieses frisch zubereitete Mittagessen schmeckt wirklich köstlich. (Bữa trưa mới chuẩn bị xong này ăn cực kỳ ngon tuyệt.)', theme: 'Thức ăn & Đồ uống', level: 'B1' },
  { id: 'food-b1-29', word: 'enthalten', phonetic: '[ɛntˈhaltn̩]', meaning: 'Bao gồm / Chứa đựng', example: 'Süße Getränke enthalten extrem viel schädlichen Zucker. (Nước uống ngọt chứa cực kỳ nhiều lượng đường gây hại.)', theme: 'Thức ăn & Đồ uống', level: 'B1' },
  { id: 'food-b1-30', word: 'inklusive', phonetic: '[ɪnkluˈziːvə]', meaning: 'Bao gồm cả / Đã tính', example: 'Die Rechnung versteht sich inklusive Mehrwertsteuer und Service. (Hóa đơn này được hiểu là đã bao gồm thuế VAT và dịch vụ.)', theme: 'Thức ăn & Đồ uống', level: 'B1' },
  { id: 'food-b1-31', word: 'Gewürze', article: 'DIE', plural: 'Gewürze', phonetic: '[ɡəˈvʏʁt͡sə]', meaning: 'Gia vị các loại', example: 'Asiatische Gerichte verwenden viele duftende Gewürze. (Các món ăn châu Á sử dụng rất nhiều loại gia vị dậy mùi thơm.)', theme: 'Thức ăn & Đồ uống', level: 'B1' },

  // --- LEVEL B2 ---
  { id: 'food-b2-1', word: 'Ziegenfleisch', article: 'DAS', phonetic: '[ˈt͡siːɡn̩ˌflaɪ̯ʃ]', meaning: 'Thịt dê', example: 'Ziegenfleisch wird in vielen Kulturen gerne geschmort. (Thịt dê thường được các nền văn hóa hầm mặn thơm ngon.)', theme: 'Thức ăn & Đồ uống', level: 'B2' },
  { id: 'food-b2-2', word: 'Kaninchenfleisch', article: 'DAS', phonetic: '[kaˈniːnçənˌflaɪ̯ʃ]', meaning: 'Thịt thỏ', example: 'Kaninchenfleisch schmeckt zart und ähnelt Geflügelfleisch. (Thịt thỏ có vị thanh dịu, mềm và gần giống thịt gia cầm.)', theme: 'Thức ăn & Đồ uống', level: 'B2' },
  { id: 'food-b2-3', word: 'Wildfleisch', article: 'DAS', phonetic: '[ˈvɪltˌflaɪ̯ʃ]', meaning: 'Thịt rừng (Thịt thú săn)', example: 'Wildfleisch hat ein kräftiges und einzigartiges Aroma. (Thịt rừng hoang dã có một mùi thơm đậm đà độc nhất vô nhị.)', theme: 'Thức ăn & Đồ uống', level: 'B2' },
  { id: 'food-b2-4', word: 'Fischfleisch', article: 'DAS', phonetic: '[ˈfɪʃˌflaɪ̯ʃ]', meaning: 'Thịt cá', example: 'Zartes Fischfleisch liefert wertvolle Omega-3-Fettsäuren. (Thịt cá mềm cung cấp những axit béo Omega-3 có giá trị lớn.)', theme: 'Thức ăn & Đồ uống', level: 'B2' },
  { id: 'food-b2-5', word: 'Schaffleisch', article: 'DAS', phonetic: '[ˈʃaːfˌflaɪ̯ʃ]', meaning: 'Thịt cừu trưởng thành', example: 'Schaffleisch hat einen intensiveren Geschmack als Lammfleisch. (Thịt cừu trưởng thành dồi dào hương vị đậm đà hơn so với thịt cừu non.)', theme: 'Thức ăn & Đồ uống', level: 'B2' },
  { id: 'food-b2-6', word: 'Rinderhackfleisch', article: 'DAS', phonetic: '[ˈʁɪndɐˌhakflaɪ̯ʃ]', meaning: 'Thịt bò xay', example: 'Für Frikadellen oder Lasagne nutzt man frisches Rinderhackfleisch. (Đối với chả thịt rán kiểu Đức hoặc mì đút lò Lasagne, người ta dùng thịt bò xay tươi.)', theme: 'Thức ăn & Đồ uống', level: 'B2' },
  { id: 'food-b2-7', word: 'Schweinehackfleisch', article: 'DAS', phonetic: '[ˈʃvaɪ̯nəˌhakflaɪ̯ʃ]', meaning: 'Thịt lợn xay nhuyễn (Thịt heo xay)', example: 'Schweinehackfleisch eignet sich perfekt für Füllungen aller Art. (Thịt lợn xay phù hợp hoàn hảo để làm các loại nhân thơm ngậy.)', theme: 'Thức ăn & Đồ uống', level: 'B2' },
  { id: 'food-b2-8', word: 'Speck', article: 'DER', plural: 'Specksorten', phonetic: '[ʃpɛk]', meaning: 'Thịt mỡ xông khói / Ba chỉ xông khói', example: 'Wir braten den salzigen Speck in der Pfanne knusprig an. (Chúng tôi áp chảo dải ba chỉ xông khói mặn giòn tan trên chảo.)', theme: 'Thức ăn & Đồ uống', level: 'B2' },
  { id: 'food-b2-9', word: 'Grill', article: 'DER', plural: 'Grills', phonetic: '[ɡʁɪl]', meaning: 'Vỉ nướng / Lò nướng than', example: 'Der Vater legt Steaks und Würste auf den heißen Grill. (Người bố đặt miếng bít tết và xúc xích lên lò nướng rực nóng.)', theme: 'Thức ăn & Đồ uống', level: 'B2' },
  { id: 'food-b2-10', word: 'Hauptmahlzeit', article: 'DIE', plural: 'Hauptmahlzeiten', phonetic: '[ˈhaʊ̯ptmaːlˌt͡saɪ̯t]', meaning: 'Bữa ăn chính', example: 'Das Mittagessen ist für viele Familien die warme Hauptmahlzeit. (Bữa trưa là bữa ăn chính ấm áp cho rất nhiều gia đình.)', theme: 'Thức ăn & Đồ uống', level: 'B2' },
  { id: 'food-b2-11', word: 'Knödel', article: 'DER', plural: 'Knödel', phonetic: '[ˈknøːdl̩]', meaning: 'Bánh bao bọt / Bánh dẻo tròn nặn đặc sản Đức', example: 'Zum Schweinebraten isst man in Bayern gerne Kartoffelknödel. (Người dân bang Bayern cực kỳ chuộng ăn bánh bao khoai tây tròn dẻo kèm thịt heo nướng.)', theme: 'Thức ăn & Đồ uống', level: 'B2' },
  { id: 'food-b2-12', word: 'Pfannkuchen', article: 'DER', plural: 'Pfannkuchen', phonetic: '[ˈpfanˌkuːxn̩]', meaning: 'Bánh kếp', example: 'Zum Frühstück backen wir süße Pfannkuchen mit Ahornsirup. (Cho bữa sáng chúng tôi rán những chiếc bánh kếp ngọt ngào dùng kèm si rô lá phong.)', theme: 'Thức ăn & Đồ uống', level: 'B2' },
  { id: 'food-b2-13', word: 'Steak', article: 'DAS', plural: 'Steaks', phonetic: '[steːk]', meaning: 'Bít tết / Miếng thịt nướng', example: 'Er bestellt ein saftiges Rindersteak mit viel Kräuterbutter. (Anh ấy gọi một đĩa bít tết bò mọng nước kèm thật nhiều bơ thảo mộc ngọt thơm.)', theme: 'Thức ăn & Đồ uống', level: 'B2' },
  { id: 'food-b2-14', word: 'roh', phonetic: '[ʁoː]', meaning: 'Sống / Chưa chế biến', example: 'Einige Gemüsesorten kann man hervorragend roh verzehren. (Một số loại rau củ có thể thưởng thức sống nguyên sơ cực ngon.)', theme: 'Thức ăn & Đồ uống', level: 'B2' },
  { id: 'food-b2-15', word: 'blutig', phonetic: '[ˈbluːtɪç]', meaning: 'Tái chín / Miếng thịt còn đỏ rực sọc máu (Rare)', example: 'Möchten Sie Ihr Steak gut durchgebraten oder lieber blutig? (Bạn muốn bít tết chín kỹ hay chỉ tái hồng sọc máu?)', theme: 'Thức ăn & Đồ uống', level: 'B2' },
  { id: 'food-b2-16', word: 'essbar', phonetic: '[ˈɛsbaːɐ̯]', meaning: 'Ăn được (Không độc hại)', example: 'Sind diese bunten Beeren am Waldrand eigentlich essbar? (Những quả mọng sặc sỡ bên rìa rừng kia liệu có ăn được không?)', theme: 'Thức ăn & Đồ uống', level: 'B2' },
  { id: 'food-b2-17', word: 'anbraten', phonetic: '[ˈanˌbʁaːtn̩]', meaning: 'Rán sơ / Áp chảo nhanh', example: 'Fleisch muss man zuerst scharf anbraten, um Saft zu behalten. (Thịt trước tiên phải được áp chảo thật nhanh để giữ độ mọng nước bên trong.)', theme: 'Thức ăn & Đồ uống', level: 'B2' },
  { id: 'food-b2-18', word: 'bestreuen mit', phonetic: '[bəˈʃtʁɔɪ̯ən pre: mɪt]', meaning: 'Rắc lên (VớI thứ gì)', example: 'Vor dem Servieren bestreuen wir den Salat mit Schnittlauch. (Trước khi dọn lên, chúng tôi rắc rau hẹ băm nhỏ lên dĩa salad.)', theme: 'Thức ăn & Đồ uống', level: 'B2' },
  { id: 'food-b2-19', word: 'verrühren', phonetic: '[fɛɐ̯ˈʁyːʁən]', meaning: 'Khuấy đều / Trộn đều nhuyễn', example: 'Sie müssen die Eier mit etwas Milch sanft verrühren. (Bạn cần khuấy trứng thật mượt với một chút sữa.)', theme: 'Thức ăn & Đồ uống', level: 'B2' },
  { id: 'food-b2-20', word: 'salzig', phonetic: '[ˈzaltsɪç]', meaning: 'Mặn / Có vị mặn nhiều muối', example: 'Chips schmecken extrem salzig und machen schnellen Durst. (Khoai tây lát chiên có vị cực kỳ mặn muối và gây khát rất mau.)', theme: 'Thức ăn & Đồ uống', level: 'B2' },
  { id: 'food-b2-21', word: 'fein', phonetic: '[faɪ̯n]', meaning: 'Ngon tinh tế / Hảo hạng dẻo mịn', example: 'Das edle Restaurant bietet feine Spezialitäten für Feinschmecker. (Nhà hàng sang trọng dâng lên những món đặc biệt tinh tế cho thực khách sành ăn.)', theme: 'Thức ăn & Đồ uống', level: 'B2' },
  { id: 'food-b2-22', word: 'Latte', article: 'DER', plural: 'Lattes', phonetic: '[ˈlatə]', meaning: 'Cà phê Latte / Sữa', example: 'Sie trinkt vormittags immer einen heißen Latte Macchiato. (Cô ấy sáng nào cũng thưởng thức ly latte bọt sữa nóng hổi.)', theme: 'Thức ăn & Đồ uống', level: 'B2' },
  { id: 'food-b2-23', word: 'Zuckerguss', article: 'DER', plural: 'Zuckergüsse', phonetic: '[ˈt͡sʊkɐˌɡʊs]', meaning: 'Lớp đường phủ (Trang trí bánh kẹo)', example: 'Sie verziert die Kekse mit einem süßen Zuckerguss. (Cô ấy trang điểm cho những chiếc bánh quy bằng một lớp đường phủ ngọt lịm.)', theme: 'Thức ăn & Đồ uống', level: 'B2' },
  { id: 'food-b2-24', word: 'Sirup', article: 'DER', plural: 'Sirupe', phonetic: '[ˈziːʁʊp]', meaning: 'Si rô nước đặc', example: 'Der klebrige Sirup verleiht dem Getränk eine süße Note. (Dòng si rô sánh kẹo đem lại nốt vị ngọt dạt dào cho ly nước uống.)', theme: 'Thức ăn & Đồ uống', level: 'B2' },
  { id: 'food-b2-25', word: 'Biskuit', article: 'DER', plural: 'Biskuits', phonetic: '[bɪsˈkviːt]', meaning: 'Bánh bông lan / Cốt xốp kem bánh', example: 'Der Biskuit dient als weiche Basis für unsere Sahnetorte. (Cốt bánh bông lan đóng vai trò làm chân đế siêu mềm mại cho ổ bánh kem tươi.)', theme: 'Thức ăn & Đồ uống', level: 'B2' },
  { id: 'food-b2-26', word: 'Untertasse', article: 'DIE', plural: 'Untertassen', phonetic: '[ˈʊntɐˌtasə]', meaning: 'Đĩa lót tách', example: 'Er stellt die kochende Tasse vorsichtig auf die Untertasse. (Anh ấy nhẹ nhàng đặt chiếc cốc nóng bốc hơi lên đĩa lót tách.)', theme: 'Thức ăn & Đồ uống', level: 'B2' },
  { id: 'food-b2-27', word: 'Muffin', article: 'DER', plural: 'Muffins', phonetic: '[ˈmafɪn]', meaning: 'Bánh Muffin ngọt xốp', example: 'Frische Muffins mit Blaubeeren verströmen einen tollen Duft. (Ổ bánh muffin việt quất tươi tỏa ra một làn hương ngào ngạt.)', theme: 'Thức ăn & Đồ uống', level: 'B2' },
  { id: 'food-b2-28', word: 'Vanille', article: 'DIE', plural: 'Vanillen', phonetic: '[vaˈnɪljə]', meaning: 'Hương vị Vani', example: 'Der Pudding schmeckt himmlisch nach echter Vanille. (Món pudding mang lại mùi vị đặc trưng từ cây vani tự nhiên ngọt dịu.)', theme: 'Thức ăn & Đồ uống', level: 'B2' },
  { id: 'food-b2-29', word: 'ernähren', phonetic: '[ɛɐ̯ˈnɛːʁən]', meaning: 'Nuôi dưỡng / Nuôi sống', example: 'Es ist heutzutage teuer geworden, eine Großfamilie zu ernähren. (Ngày nay việc để nuôi sống một đại gia đình đã trở nên vô cùng tốn kém.)', theme: 'Thức ăn & Đồ uống', level: 'B2' },
  { id: 'food-b2-30', word: 'Rind', article: 'DAS', plural: 'Rinder', phonetic: '[ʁɪnt]', meaning: 'Con bò (Chỉ chung giống loài bò sữa/đực)', example: 'Auf der grünen Wiese grasen friedlich viele Rinder. (Trên đồng cỏ xanh mướt nhiều chú bò đang gặm cỏ thanh bình.)', theme: 'Thức ăn & Đồ uống', level: 'B2' },
  { id: 'food-b2-31', word: 'Schale', article: 'DIE', plural: 'Schalen', phonetic: '[ˈʃaːlə]', meaning: 'Vỏ trái cây / Vỏ ngoài cứng', example: 'Vor dem Essen sollte man die bittere Schale einer Orange entfernen. (Trước khi ăn dứt khoát phải tước bỏ phần vỏ đắng của trái cam đi.)', theme: 'Thức ăn & Đồ uống', level: 'B2' },

  // --- THỜI GIAN A1 ---
  { id: 'time-a1-1', word: 'Uhr', article: 'DIE', plural: 'Uhren', phonetic: '[uːɐ̯]', meaning: 'Đồng hồ / Giờ (báo thời gian)', example: 'Es ist vier Uhr.', theme: 'Thời gian', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&q=80&w=1000' },
  { id: 'time-a1-2', word: 'Stunde', article: 'DIE', plural: 'Stunden', phonetic: '[ˈʃtʊndə]', meaning: 'Giờ / Tiếng đồng hồ (khoảng thời gian)', example: 'Die Fahrt dauert eine Stunde.', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-3', word: 'Minute', article: 'DIE', plural: 'Minuten', phonetic: '[miˈnuːtə]', meaning: 'Phút', example: 'Ich komme in fünf Minuten.', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-4', word: 'Sekunde', article: 'DIE', plural: 'Sekunden', phonetic: '[zeˈkʊndə]', meaning: 'Giây', example: 'Warten Sie bitte eine Sekunde.', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-5', word: 'Tag', article: 'DER', plural: 'Tage', phonetic: '[taːk]', meaning: 'Ngày', example: 'Heute ist ein schöner Tag.', theme: 'Thời gian', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1491147334573-44cbb4602074?auto=format&fit=crop&q=80&w=1000' },
  { id: 'time-a1-6', word: 'Monat', article: 'DER', plural: 'Monate', phonetic: '[ˈmoːnat]', meaning: 'Tháng', example: 'Der Juni ist ein warmer Monat.', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-7', word: 'Jahr', article: 'DAS', plural: 'Jahre', phonetic: '[jaːɐ̯]', meaning: 'Năm', example: 'Ein Jahr hat zwölf Monate.', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-8', word: 'Woche', article: 'DIE', plural: 'Wochen', phonetic: '[ˈvɔxə]', meaning: 'Tuần', example: 'Nächste Woche fahre ich nach Berlin.', theme: 'Thời gian', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1461749280684-1ca1752b3925?auto=format&fit=crop&q=80&w=1000' },
  { id: 'time-a1-9', word: 'Wochenende', article: 'DAS', plural: 'Wochenenden', phonetic: '[ˈvɔxn̩ˌɛndə]', meaning: 'Cuối tuần', example: 'Am Wochenende lerne ich kein Deutsch.', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-10', word: 'Morgen', article: 'DER', plural: 'Morgen', phonetic: '[ˈmɔʁɡn̩]', meaning: 'Buổi sáng', example: 'Guten Morgen, meine Freunde!', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-11', word: 'Nachmittag', article: 'DER', plural: 'Nachmittage', phonetic: '[ˈnaːxmɪˌtaːk]', meaning: 'Buổi chiều', example: 'Am Nachmittag machen wir ein Picknick.', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-12', word: 'Abend', article: 'DER', plural: 'Abende', phonetic: '[ˈaːbn̩t]', meaning: 'Buổi tối', example: 'Guten Abend! Wie geht es dir?', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-13', word: 'Mitternacht', article: 'DIE', plural: 'Mitternächte', phonetic: '[ˈmɪtɐˌnaxt]', meaning: 'Nửa đêm', example: 'Um Mitternacht schlafen alle Menschen.', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-14', word: 'Uhrzeit', article: 'DIE', plural: 'Uhrzeiten', phonetic: '[ˈuːɐ̯t͡saɪ̯t]', meaning: 'Thời gian, giờ giấc cụ thể', example: 'Wie ist die genaue Uhrzeit?', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-15', word: 'Zeit', article: 'DIE', plural: 'Zeiten', phonetic: '[t͡saɪ̯t]', meaning: 'Thời gian', example: 'Ich habe im Moment keine Zeit zum Deutschlernen.', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-16', word: 'Frühling', article: 'DER', plural: 'Frühlinge', phonetic: '[ˈfʁyːlɪŋ]', meaning: 'Mùa xuân', example: 'Der Frühling fängt im März an.', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-17', word: 'Sommer', article: 'DER', plural: 'Sommer', phonetic: '[ˈzɔmɐ]', meaning: 'Mùa hè', example: 'Im Sommer fliegen viele Vögel nach Norden.', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-18', word: 'Herbst', article: 'DER', plural: 'Herbste', phonetic: '[hɛʁpst]', meaning: 'Mùa thu', example: 'Die Blätter fallen im Herbst.', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-19', word: 'Winter', article: 'DER', plural: 'Winter', phonetic: '[ˈvɪntɐ]', meaning: 'Mùa đông', example: 'Wir trinken heißen Tee im Winter.', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-20', word: 'Januar', article: 'DER', phonetic: '[ˈjanuaːɐ̯]', meaning: 'Tháng Một', example: 'Der Januar hat 31 Tage.', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-21', word: 'Februar', article: 'DER', phonetic: '[ˈfeːbʁuaːɐ̯]', meaning: 'Tháng Hai', example: 'Der Februar ist manchmal sehr kalt.', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-22', word: 'März', article: 'DER', phonetic: '[mɛʁt͡s]', meaning: 'Tháng Ba', example: 'Im März fängt das neue Schuljahr an.', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-23', word: 'April', article: 'DER', phonetic: '[aˈpʁɪl]', meaning: 'Tháng Tư', example: 'Am ersten April machen wir Witze.', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-24', word: 'Mai', article: 'DER', phonetic: '[maɪ̯]', meaning: 'Tháng Năm', example: 'Im Mai blühen die Rosen.', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-25', word: 'Juni', article: 'DER', phonetic: '[ˈjuːni]', meaning: 'Tháng Sáu', example: 'Im Juni lerne ich für das Examen.', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-26', word: 'Juli', article: 'DER', phonetic: '[ˈjuːli]', meaning: 'Tháng Bảy', example: 'Im Juli ist es oft sonnig.', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-27', word: 'August', article: 'DER', phonetic: '[aʊ̯ˈɡʊst]', meaning: 'Tháng Tám', example: 'Der August ist perfekt für Urlaub.', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-28', word: 'September', article: 'DER', phonetic: '[zɛpˈtɛmbɐ]', meaning: 'Tháng Chín', example: 'Im September fliegen wir nach Vietnam.', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-29', word: 'Oktober', article: 'DER', phonetic: '[ɔkˈtoːbɐ]', meaning: 'Tháng Mười', example: 'Im Oktober ist das Oktoberfest vorbei.', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-30', word: 'November', article: 'DER', phonetic: '[noˈvɛmbɐ]', meaning: 'Tháng Mười Một', example: 'Im November regnet es viel.', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-31', word: 'Dezember', article: 'DER', phonetic: '[deˈt͡sɛmbɐ]', meaning: 'Tháng Mười Hai', example: 'Im Dezember machen wir Urlaub.', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-32', word: 'Montag', article: 'DER', plural: 'Montage', phonetic: '[ˈmoːntaːk]', meaning: 'Thứ Hai', example: 'Heute ist Montag, der Wochenstart.', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-33', word: 'Dienstag', article: 'DER', plural: 'Dienstage', phonetic: '[ˈdiːnstaːk]', meaning: 'Thứ Ba', example: 'Am Dienstag habe ich frei.', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-34', word: 'Mittwoch', article: 'DER', plural: 'Mittwoche', phonetic: '[ˈmɪtvɔx]', meaning: 'Thứ Tư', example: 'Wir machen am Mittwoch ein Meeting.', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-35', word: 'Donnerstag', article: 'DER', plural: 'Donnerstage', phonetic: '[ˈdɔnɐstaːk]', meaning: 'Thứ Năm', example: 'Ist am Donnerstag der Test?', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-36', word: 'Freitag', article: 'DER', plural: 'Freitage', phonetic: '[ˈfʁaɪ̯taːk]', meaning: 'Thứ Sáu', example: 'Am Freitag arbeite ich nur bis Mittag.', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-37', word: 'Samstag', article: 'DER', plural: 'Samstage', phonetic: '[ˈzamstaːk]', meaning: 'Thứ Bảy', example: 'Samstag lerne ich Deutsch im Park.', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-38', word: 'Sonntag', article: 'DER', plural: 'Sonntage', phonetic: '[ˈzɔntaːk]', meaning: 'Chủ Nhật', example: 'Sonntag ist Ausschlaftag.', theme: 'Thời gian', level: 'A1' },
  { id: 'time-a1-39', word: 'morgen früh', phonetic: '[ˈmɔʁɡn̩ fʁyː]', meaning: 'Sáng mai', example: 'Wir sehen uns morgen früh.', theme: 'Thời gian', level: 'A1' },

  // --- THỜI GIAN A2 ---
  { id: 'time-a2-1', word: 'Feiertag', article: 'DER', plural: 'Feiertage', phonetic: '[ˈfaɪ̯ɐˌtaːk]', meaning: 'Ngày lễ', example: 'Morgen ist ein Feiertag, Geschäfte haben zu.', theme: 'Thời gian', level: 'A2' },
  { id: 'time-a2-2', word: 'Alltag', article: 'DER', plural: 'Alltage', phonetic: '[ˈalˌtaːk]', meaning: 'Cuộc sống hàng ngày / Thường nhật', example: 'Der Alltag kann manchmal stressig sein.', theme: 'Thời gian', level: 'A2' },
  { id: 'time-a2-3', word: 'Jahrhundert', article: 'DAS', plural: 'Jahrhunderte', phonetic: '[jaːɐ̯ˈhʊndɐt]', meaning: 'Thế kỷ', example: 'Es ist das einundzwanzigste Jahrhundert.', theme: 'Thời gian', level: 'A2' },
  { id: 'time-a2-4', word: 'Terminkalender', article: 'DER', plural: 'Terminkalender', phonetic: '[tɛʁˈmiːnkaˌlɛndɐ]', meaning: 'Lịch, sổ lịch hẹn', example: 'Er schreibt den Termin in seinen Terminkalender.', theme: 'Thời gian', level: 'A2' },
  { id: 'time-a2-5', word: 'rechtzeitig', phonetic: '[ˈʁɛçtˌt͡saɪ̯tɪç]', meaning: 'Đúng giờ, kịp thời, không trễ', example: 'Kommen Sie bitte rechtzeitig, sonst verlieren Sie den Slot.', theme: 'Thời gian', level: 'A2' },
  { id: 'time-a2-6', word: 'vorbei sein', phonetic: '[foːɐ̯ˈbaɪ̯ zaɪ̯n]', meaning: 'Đã kết thúc, đã trôi qua', example: 'Die Pause ist nun vorbei.', theme: 'Thời gian', level: 'A2' },
  { id: 'time-a2-7', word: 'zu Ende sein', phonetic: '[t͡suː ˈɛndə zaɪ̯n]', meaning: 'Đã xong, hoàn thành', example: 'Das Spiel ist zu Ende.', theme: 'Thời gian', level: 'A2' },
  { id: 'time-a2-8', word: 'beinahe', phonetic: '[baɪ̯ˈnaːə]', meaning: 'Hầu như, suýt nữa', example: 'Das Auto hätte mich beinahe angefahren.', theme: 'Thời gian', level: 'A2' },
  { id: 'time-a2-9', word: 'kaum', phonetic: '[kaʊ̯m]', meaning: 'Hầu như không', example: 'Ich kann das kaum glauben.', theme: 'Thời gian', level: 'A2' },
  { id: 'time-a2-10', word: 'momentan', phonetic: '[momənˈtaːn]', meaning: 'Hiện tại, lúc này, đang', example: 'Momentan habe ich keine Lust auf Kaffee.', theme: 'Thời gian', level: 'A2' },
  { id: 'time-a2-11', word: 'im Moment', phonetic: '[ɪm moˈmɛnt]', meaning: 'Lúc này, hiện tại', example: 'Im Moment bin ich am Lernen.', theme: 'Thời gian', level: 'A2' },
  { id: 'time-a2-12', word: 'diesmal', phonetic: '[ˈdiːsmaːl]', meaning: 'Lần này', example: 'Diesmal klappt es!', theme: 'Thời gian', level: 'A2' },
  { id: 'time-a2-13', word: 'nachher', phonetic: '[ˈnaːxˌheːɐ̯]', meaning: 'Sau đó, tí nữa, sau đấy', example: 'Komm nachher doch bei mir vorbei!', theme: 'Thời gian', level: 'A2' },
  { id: 'time-a2-14', word: 'zurzeit', phonetic: '[t͡suːɐ̯ˈt͡saɪ̯t]', meaning: 'Hiện tại, hiện thời', example: 'Zurzeit gibt es viele gute Jobs.', theme: 'Thời gian', level: 'A2' },
  { id: 'time-a2-15', word: 'bisher', phonetic: '[bɪsˈheːɐ̯]', meaning: 'Cho đến nay, bấy lâu nay', example: 'Bisher läuft alles nach Plan.', theme: 'Thời gian', level: 'A2' },
  { id: 'time-a2-16', word: 'Aufenthalt', article: 'DER', plural: 'Aufenthalte', phonetic: '[ˈaʊ̯fənthalt]', meaning: 'Nơi cư trú, sự lưu lại', example: 'Der Aufenthalt im Hotel war fantastisch.', theme: 'Thời gian', level: 'A2' },
  { id: 'time-a2-17', word: 'Vergangenheit', article: 'DIE', phonetic: '[fɛɐ̯ˈɡaŋənhaɪ̯t]', meaning: 'Quá khứ', example: 'Man sollte nicht zu viel an die Vergangenheit denken.', theme: 'Thời gian', level: 'A2' },
  { id: 'time-a2-18', word: 'Feierabend', article: 'DER', plural: 'Feierabende', phonetic: '[ˈfaɪ̯ɐˌaːbn̩t]', meaning: 'Tan làm, tan học, kết thúc công việc trong ngày', example: 'Er freut sich auf den Feierabend.', theme: 'Thời gian', level: 'A2' },

  // --- THỜI GIAN B1 ---
  { id: 'time-b1-1', word: 'Frist', article: 'DIE', plural: 'Fristen', phonetic: '[fʁɪst]', meaning: 'Thời hạn', example: 'Die gesetzliche Frist endet am 30. September.', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-2', word: 'Dauer', article: 'DIE', plural: 'Dauern', phonetic: '[ˈdaʊ̯ɐ]', meaning: 'Khoảng thời gian, thời lượng', example: 'Die Dauer der Show beträgt zwei Stunden.', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-3', word: 'chronologisch', phonetic: '[kʁonoˈloːɡɪʃ]', meaning: 'Theo thứ tự thời gian', example: 'Ordnen Sie die Dokumente chronologisch.', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-4', word: 'zunächst', phonetic: '[t͡suˈnɛːçst]', meaning: 'Đầu tiên, trước mắt là', example: 'Zunächst besprechen wir das Problem.', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-5', word: 'jederzeit', phonetic: '[ˈjeːdɐˌt͡saɪ̯t]', meaning: 'Bất cứ lúc nào', example: 'Das System ist jederzeit erreichbar.', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-6', word: 'Entfernung', article: 'DIE', plural: 'Entfernungen', phonetic: '[ɛntˈfɛʁnʊŋ]', meaning: 'Khoảng cách', example: 'Die Entfernung ist zu groß, um zu Fuß zu gehen.', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-7', word: 'Fahrtzeit', article: 'DIE', plural: 'Fahrtzeiten', phonetic: '[ˈfaːɐ̯tˌt͡saɪ̯t]', meaning: 'Thời gian di chuyển', example: 'Mit der Bahn beträgt die Fahrtzeit eine Stunde.', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-8', word: 'eher', phonetic: '[ˈeːɐ̯]', meaning: 'Sớm hơn / Khá là, đúng hơn là', example: 'Ich gehe eher nach Hause.', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-9', word: 'jedenfalls', phonetic: '[ˈjeːdn̩falz]', meaning: 'Dù sao đi nữa, trong mọi trường hợp', example: 'Ich werde jedenfalls anrufen.', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-10', word: 'offenbar', phonetic: '[ˈɔfn̩baːɐ̯]', meaning: 'Rõ ràng là, hình như', example: 'Er hat offenbar vergessen, den Schlüssel mitzunehmen.', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-11', word: 'gleichzeitig', phonetic: '[ˈɡlaɪ̯çˌtsaɪ̯tɪç]', meaning: 'Đồng thời, cùng lúc', example: 'Er telefoniert und kocht gleichzeitig.', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-12', word: 'bereits', phonetic: '[bəˈʁaɪ̯ts]', meaning: 'Đã (tương tự schon)', example: 'Sie haben bereits mit dem Essen angefangen.', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-13', word: 'geschehen', phonetic: '[ɡəˈʃeːən]', meaning: 'Xảy ra, diễn ra', example: 'Was ist hier geschehen?', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-14', word: 'Rückkehr', article: 'DIE', plural: 'Rückkehren', phonetic: '[ˈʁʏkˌkeːɐ̯]', meaning: 'Sự trở lại', example: 'Seine Rückkehr war eine Überraschung.', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-15', word: 'verschwinden', phonetic: '[fɛɐ̯ˈʃvɪndn̩]', meaning: 'Biến mất', example: 'Das Haustier ist spurlos verschwunden.', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-16', word: 'mittlerweile', phonetic: '[ˈmɪtlɐˌvaɪ̯lə]', meaning: 'Trong khi đó, dần dần, cho tới nay', example: 'Mittlerweile hat er sich gut eingelebt.', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-17', word: 'schließlich', phonetic: '[ˈʃliːslɪç]', meaning: 'Cuối cùng, rốt cuộc là', example: 'Nach langen Verhandlungen haben sie schließlich zugestimmt.', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-18', word: 'seitdem', phonetic: '[zaɪ̯tˈdeːm]', meaning: 'Kể từ khi', example: 'Er lernt Deutsch und liest seitdem deutsche Bücher.', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-19', word: 'von ... auf ...', phonetic: '[fɔn ... aʊ̯f]', meaning: 'Từ ... đến ... / Từ ... chuyển sang ...', example: 'Der Termin wurde von Mittwoch auf Freitag verschoben.', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-20', word: 'jahrelang', phonetic: '[ˈjaːʁəlaŋ]', meaning: 'Trong nhiều năm', example: 'Sie haben jahrelang hart gearbeitet.', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-21', word: 'zukünftig', phonetic: '[ˈt͡suːkʏnftɪç]', meaning: 'Thuộc về tương lai, có triển vọng', example: 'Das ist mein zukünftiger Arbeitsplatz.', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-22', word: 'längst', phonetic: '[lɛŋst]', meaning: 'Từ lâu', example: 'Das Problem ist längst gelöst.', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-23', word: 'Gegenwart', article: 'DIE', phonetic: '[ˈɡeːɡn̩vaʁt]', meaning: 'Hiện tại', example: 'In der Gegenwart müssen wir weise handeln.', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-24', word: 'Das ist schon lange her', phonetic: '[das ɪst ʃoːn ˈlaŋə heːɐ̯]', meaning: 'Lâu lắm rồi / Đó đã là câu chuyện cũ', example: 'Wir waren Freunde, aber das ist schon lange her.', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-25', word: 'tagelang', phonetic: '[ˈtaːɡəlaŋ]', meaning: 'Nhiều ngày liền', example: 'Es gab tagelang heftige Regenfälle.', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-26', word: 'immerhin', phonetic: '[ɪmɐˈhɪn]', meaning: 'Sau tất cả, dù sao thì', example: 'Er hat den Test nicht bestanden, aber immerhin hat er gelernt.', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-27', word: 'vergehen', phonetic: '[fɛɐ̯ˈɡeːən]', meaning: 'Trôi qua (thời gian)', example: 'Wie schnell doch die Jahre vergehen!', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-28', word: 'eilig', phonetic: '[ˈaɪ̯lɪç]', meaning: 'Vội vàng, khẩn cấp', example: 'Hast du es so eilig?', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-29', word: 'bisherig', phonetic: '[bɪsˈheːʁɪç]', meaning: 'Từ trước tới nay, trước đây', example: 'Unsere bisherige Methode war gut.', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-30', word: 'ständig', phonetic: '[ˈʃtɛndɪç]', meaning: 'Thường xuyên, liên tục', example: 'Er stellt ständig komplizierte Fragen.', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-31', word: 'Semester', article: 'DAS', plural: 'Semester', phonetic: '[zeˈmɛstɐ]', meaning: 'Học kỳ', example: 'Dieses Semester bin ich sehr fleißig.', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-32', word: 'zuvor', phonetic: '[t͡suˈfoːɐ̯]', meaning: 'Trước kia, trước đó', example: 'Das war noch nie zuvor vorgekommen.', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-33', word: 'stundenlang', phonetic: '[ˈʃtʊndn̩laŋ]', meaning: 'Hàng giờ liền', example: 'Sie telefonierten stundenlang miteinander.', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-34', word: 'dauernd', phonetic: '[ˈdaʊ̯ɐnt]', meaning: 'Liên tục, luôn mồm, không ngớt', example: 'Du unterbrichst mich dauernd!', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-35', word: 'monatlich', phonetic: '[ˈmoːnatlɪç]', meaning: 'Hàng tháng', example: 'Wir zahlen unsere Miete monatlich.', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-36', word: 'aktuell', phonetic: '[aktuˈɛl]', meaning: 'Hiện tại, tính thời sự, cập nhật', example: 'Das ist die aktuellste Version der Software.', theme: 'Thời gian', level: 'B1' },
  { id: 'time-b1-37', word: 'erster - letzter', phonetic: '[ˈeːɐ̯stɐ ˈlɛtstɐ]', meaning: 'Đầu tiên - cuối cùng', example: 'Er ging als Erster und kam als Letzter.', theme: 'Thời gian', level: 'B1' },

  // --- THỜI GIAN B2 ---
  { id: 'time-b2-1', word: 'Zeitspanne', article: 'DIE', plural: 'Zeitspannen', phonetic: '[ˈt͡saɪ̯tˌʃpanə]', meaning: 'Khoảng thời gian', example: 'Eine Zeitspanne von zehn Jahren ist relativ kurz.', theme: 'Thời gian', level: 'B2' },
  { id: 'time-b2-2', word: 'Zeitpunkt', article: 'DER', plural: 'Zeitpunkte', phonetic: '[ˈt͡saɪ̯tˌpʊŋkt]', meaning: 'Thời điểm', example: 'Das ist nicht der richtige Zeitpunkt für Kritik.', theme: 'Thời gian', level: 'B2' },
  { id: 'time-b2-3', word: 'übernächster', phonetic: '[ˈyːbɐˌnɛːçstɐ]', meaning: 'Tiếp theo sau nữa', example: 'Am übernächsten Montag reise ich ab.', theme: 'Thời gian', level: 'B2' },
  { id: 'time-b2-4', word: 'langfristig', phonetic: '[ˈlaŋˌfʁɪstɪç]', meaning: 'Lâu dài, dài hạn', example: 'Wir müssen langfristig planen để thành công.', theme: 'Thời gian', level: 'B2' },
  { id: 'time-b2-5', word: 'von Geburt an', phonetic: '[fɔn ɡəˈbuːɐ̯t an]', meaning: 'Từ khi sinh ra', example: 'Er hat eine Behinderung von Geburt an.', theme: 'Thời gian', level: 'B2' },
  { id: 'time-b2-6', word: 'erst durch', phonetic: '[eːɐ̯st dʊʁç]', meaning: 'Chỉ thông qua, chỉ bằng cách', example: 'Erst durch schmerzliche Erfahrung lernt man.', theme: 'Thời gian', level: 'B2' },
  { id: 'time-b2-7', word: 'unendlich', phonetic: '[ʊnˈɛntliç]', meaning: 'Vô tận, vô hạn', example: 'Das Weltall scheint unendlich zu sein.', theme: 'Thời gian', level: 'B2' },
  { id: 'time-b2-8', word: 'spätestens', phonetic: '[ˈʃpɛːtəstn̩s]', meaning: 'Muộn nhất, trễ nhất', example: 'Sie müssen spätestens am Freitag die Arbeit abgeben.', theme: 'Thời gian', level: 'B2' },

  // --- ĐỘNG VẬT ---
  // --- LEVEL A1 ---
  { id: 'animal-a1-1', word: 'Hund', article: 'DER', plural: 'Hunde', phonetic: '[hʊnt]', meaning: 'Con chó', example: 'Der Hund läuft im Garten herum. (Con chó chạy nhảy xung quanh trong vườn.)', theme: 'Động vật', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1000' },
  { id: 'animal-a1-2', word: 'Katze', article: 'DIE', plural: 'Katzen', phonetic: '[ˈkat͡sə]', meaning: 'Con mèo', example: 'Unsere Katze schläft gerne auf dem Sofa. (Con mèo của chúng tôi thích ngủ trên ghế sofa.)', theme: 'Động vật', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=1000' },
  { id: 'animal-a1-3', word: 'Fisch', article: 'DER', plural: 'Fische', phonetic: '[fɪʃ]', meaning: 'Con cá', example: 'Der rote Fisch schwimmt im Aquarium. (Con cá màu đỏ bơi trong bể cá.)', theme: 'Động vật', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1000' },
  { id: 'animal-a1-4', word: 'Schwein', article: 'DAS', plural: 'Schweine', phonetic: '[ʃvaɪ̯n]', meaning: 'Con lợn', example: 'Das Schwein schläft gerne im Schlamm. (Con lợn thích ngủ trong vũng bùn.)', theme: 'Động vật', level: 'A1' },
  { id: 'animal-a1-5', word: 'Kuh', article: 'DIE', plural: 'Kühe', phonetic: '[kuː]', meaning: 'Con bò', example: 'Die Kuh frisst frisches Gras auf der Wiese. (Con bò ăn cỏ tươi trên đồng cỏ.)', theme: 'Động vật', level: 'A1' },
  { id: 'animal-a1-6', word: 'Huhn', article: 'DAS', plural: 'Hühner', phonetic: '[huːn]', meaning: 'Con gà', example: 'Das Huhn legt jeden Morgen ein Ei. (Con gà đẻ một quả trứng mỗi sáng.)', theme: 'Động vật', level: 'A1' },
  { id: 'animal-a1-7', word: 'Maus', article: 'DIE', plural: 'Mäuse', phonetic: '[maʊ̯s]', meaning: 'Con chuột', example: 'Die kleine Maus läuft schnell vor der Katze weg. (Con chuột nhỏ chạy trốn nhanh khỏi con mèo.)', theme: 'Động vật', level: 'A1' },
  { id: 'animal-a1-8', word: 'Kaninchen', article: 'DAS', plural: 'Kaninchen', phonetic: '[kaˈniːnçən]', meaning: 'Con thỏ', example: 'Das Kaninchen frisst eine Karotte. (Con thỏ ăn một củ cà rốt.)', theme: 'Động vật', level: 'A1' },
  { id: 'animal-a1-9', word: 'bellen', phonetic: '[ˈbɛlən]', meaning: 'Sủa', example: 'Hunde bellen, wenn sie Fremde sehen. (Những con chó sủa khi chúng thấy người lạ.)', theme: 'Động vật', level: 'A1' },
  { id: 'animal-a1-10', word: 'miauen', phonetic: '[ˈmiaʊ̯ən]', meaning: 'Kêu meo meo', example: 'Katzen miauen, wenn sie Hunger haben. (Những con mèo kêu meo meo khi chúng đói.)', theme: 'Động vật', level: 'A1' },
  { id: 'animal-a1-11', word: 'Ente', article: 'DIE', plural: 'Enten', phonetic: '[ˈɛntə]', meaning: 'Con vịt', example: 'Die gelbe Ente schwimmt auf dem See. (Con vịt màu vàng bơi trên hồ.)', theme: 'Động vật', level: 'A1' },
  { id: 'animal-a1-12', word: 'Haustier', article: 'DAS', plural: 'Haustiere', phonetic: '[ˈhaʊ̯sˌtiːɐ̯]', meaning: 'Thú cưng', example: 'Hast du ein Haustier zu Hause? (Bạn có nuôi con thú cưng nào ở nhà không?)', theme: 'Động vật', level: 'A1' },
  { id: 'animal-a1-13', word: 'Tier', article: 'DAS', plural: 'Tiere', phonetic: '[tiːɐ̯]', meaning: 'Con vật', example: 'Der Elefant ist ein sehr großes Tier. (Con voi là một con vật rất lớn.)', theme: 'Động vật', level: 'A1' },
  { id: 'animal-a1-14', word: 'Vogel', article: 'DER', plural: 'Vögel', phonetic: '[ˈfoːɡl̩]', meaning: 'Con chim', example: 'Der bunte Vogel singt auf dem Ast. (Con chim nhiều màu sắc hót trên cành cây.)', theme: 'Động vật', level: 'A1' },
  { id: 'animal-a1-15', word: 'Pferd', article: 'DAS', plural: 'Pferde', phonetic: '[pfeːɐ̯t]', meaning: 'Con ngựa', example: 'Sie reitet auf einem braunen Pferd. (Cô ấy cưỡi trên một con ngựa màu nâu.)', theme: 'Động vật', level: 'A1' },

  // --- LEVEL A2 ---
  { id: 'animal-a2-1', word: 'Tiger', article: 'DER', plural: 'Tiger', phonetic: '[ˈtiːɡɐ]', meaning: 'Con hổ', example: 'Der hungrige Tiger jagt im Dschungel. (Con hổ đói săn mồi trong rừng rậm.)', theme: 'Động vật', level: 'A2' },
  { id: 'animal-a2-2', word: 'Elefant', article: 'DER', plural: 'Elefanten', phonetic: '[elaˈfant]', meaning: 'Con voi', example: 'Elefanten haben ein hervorragendes Gedächtnis. (Những con voi có một trí nhớ tuyệt vời.)', theme: 'Động vật', level: 'A2' },
  { id: 'animal-a2-3', word: 'Affe', article: 'DER', plural: 'Affen', phonetic: '[ˈafə]', meaning: 'Con khỉ', example: 'Der Affe klettert flink auf den Baum. (Con khỉ leo trèo thoăn thoắt lên cây.)', theme: 'Động vật', level: 'A2' },
  { id: 'animal-a2-4', word: 'Reh', article: 'DAS', plural: 'Rehe', phonetic: '[ʁeː]', meaning: 'Con hươu', example: 'Ein kleines Reh steht am Waldrand. (Một con hươu nhỏ đứng ở rìa rừng.)', theme: 'Động vật', level: 'A2' },
  { id: 'animal-a2-5', word: 'Biene', article: 'DIE', plural: 'Bienen', phonetic: '[ˈbiːnə]', meaning: 'Con ong', example: 'Die fleißige Biene sammelt süßen Nektar. (Con ong chăm chỉ hút mật hoa ngọt.)', theme: 'Động vật', level: 'A2' },
  { id: 'animal-a2-6', word: 'Spinne', article: 'DIE', plural: 'Spinnen', phonetic: '[ˈʃpɪnə]', meaning: 'Con nhện', example: 'Die Spinne baut ein großes Netz an der Wand. (Con nhện chăng một cái mạng lớn ở trên tường.)', theme: 'Động vật', level: 'A2' },
  { id: 'animal-a2-7', word: 'Fuchs', article: 'DER', plural: 'Füchse', phonetic: '[fʊks]', meaning: 'Con cáo', example: 'Der schlaue Fuchs stiehlt ein Huhn. (Con cáo tinh ranh ăn trộm một con gà.)', theme: 'Động vật', level: 'A2' },
  { id: 'animal-a2-8', word: 'füttern', phonetic: '[ˈfʏtɐn]', meaning: 'Cho ăn', example: 'Wir füttern die Hühner jeden Nachmittag. (Chúng tôi cho những con gà ăn mỗi buổi chiều.)', theme: 'Động vật', level: 'A2' },
  { id: 'animal-a2-9', word: 'Bär', article: 'DER', plural: 'Bären', phonetic: '[bɛːɐ̯]', meaning: 'Con gấu', example: 'Der braune Bär fängt Fische im Fluss. (Con gấu nâu bắt cá ở dưới sông.)', theme: 'Động vật', level: 'A2' },
  { id: 'animal-a2-10', word: 'Zebra', article: 'DAS', plural: 'Zebras', phonetic: '[ˈt͡seːbʁa]', meaning: 'Ngựa vằn', example: 'Das Zebra hat auffällige schwarz-weiße Streifen. (Ngựa vằn có những sọc đen trắng nổi bật.)', theme: 'Động vật', level: 'A2' },
  { id: 'animal-a2-11', word: 'Schaf', article: 'DAS', plural: 'Schafe', phonetic: '[ʃaːf]', meaning: 'Con cừu', example: 'Das weiche Schaf gibt uns Wolle. (Con cừu mềm mại cho chúng ta len.)', theme: 'Động vật', level: 'A2' },
  { id: 'animal-a2-12', word: 'Ameise', article: 'DIE', plural: 'Ameisen', phonetic: '[ˈaːmaɪ̯zə]', meaning: 'Con kiến', example: 'Die kleine Ameise trägt ein schweres Blatt. (Con kiến nhỏ khiêng một chiếc lá nặng.)', theme: 'Động vật', level: 'A2' },
  { id: 'animal-a2-13', word: 'Löwe', article: 'DER', plural: 'Löwen', phonetic: '[ˈløːvə]', meaning: 'Sư tử', example: 'Der Löwe wird der König der Tiere genannt. (Sư tử được mệnh danh là vương quốc của loài vật.)', theme: 'Động vật', level: 'A2' },
  { id: 'animal-a2-14', word: 'Ziege', article: 'DIE', plural: 'Ziegen', phonetic: '[ˈt͡siːɡə]', meaning: 'Con dê', example: 'Die Ziege klettert khéo léo auf die Felsen. (Con dê leo trèo khéo léo trên những tảng đá.)', theme: 'Động vật', level: 'A2' },
  { id: 'animal-a2-15', word: 'Taube', article: 'DIE', plural: 'Tauben', phonetic: '[ˈtaʊ̯bə]', meaning: 'Chim bồ câu', example: 'Eine weiße Taube gilt als Symbol des Friedens. (Chim bồ câu trắng được coi là biểu tượng của hòa bình.)', theme: 'Động vật', level: 'A2' },
  { id: 'animal-a2-16', word: 'Insekt', article: 'DAS', plural: 'Insekten', phonetic: '[ɪnˈzɛkt]', meaning: 'Côn trùng', example: 'Die Ameise ist ein sehr nützliches Insekt. (Con kiến là một loài côn trùng rất có ích.)', theme: 'Động vật', level: 'A2' },
  { id: 'animal-a2-17', word: 'Tierpark', article: 'DER', plural: 'Tierparks', phonetic: '[ˈtiːɐ̯ˌpaʁk]', meaning: 'Vườn bách thú', example: 'Am Sonntag besuchen wir den städtischen Tierpark. (Vào Chủ Nhật, chúng tôi ghé thăm vườn bách thú thành phố.)', theme: 'Động vật', level: 'A2' },

  // --- LEVEL B1 ---
  { id: 'animal-b1-1', word: 'Wolf', article: 'DER', plural: 'Wölfe', phonetic: '[vɔlf]', meaning: 'Con sói', example: 'Der einsame Wolf heult den Mond an. (Con sói cô đơn hú dưới trăng.)', theme: 'Động vật', level: 'B1' },
  { id: 'animal-b1-2', word: 'Schlange', article: 'DIE', plural: 'Schlangen', phonetic: '[ˈʃlaŋə]', meaning: 'Con rắn', example: 'Die Schlange kriecht lautlos durch das dichte Gras. (Con rắn bò không tiếng động qua đám cỏ rậm rạp.)', theme: 'Động vật', level: 'B1' },
  { id: 'animal-b1-3', word: 'Frosch', article: 'DER', plural: 'Frösche', phonetic: '[fʁɔʃ]', meaning: 'Con ếch', example: 'Der grüne Frosch springt mit einem Satz in den Teich. (Con ếch xanh nhảy một phát xuống ao.)', theme: 'Động vật', level: 'B1' },
  { id: 'animal-b1-4', word: 'Papagei', article: 'DER', plural: 'Papageien', phonetic: '[papaˈɡaɪ̯]', meaning: 'Con vẹt', example: 'Der schlaue Papagei spricht einige Worte nach. (Con vẹt thông minh nói nhại lại vài từ.)', theme: 'Động vật', level: 'B1' },
  { id: 'animal-b1-5', word: 'Igel', article: 'DER', plural: 'Igel', phonetic: '[ˈiːɡl̩]', meaning: 'Con nhím', example: 'Bei Gefahr rollt sich der Igel zu einer Kugel zusammen. (Khi gặp mối nguy hiểm, con nhím cuộn tròn lại thành một quả bóng.)', theme: 'Động vật', level: 'B1' },
  { id: 'animal-b1-6', word: 'Pinguin', article: 'DER', plural: 'Pinguine', phonetic: '[ˈpɪŋɡu̯iːn]', meaning: 'Chim cánh cụt', example: 'Pinguine können trotz ihrer Flügel nicht fliegen, aber hervorragend schwimmen. (Mặc dù có cánh nhưng chim cánh cụt không biết bay mà bơi lội cực kỳ giỏi.)', theme: 'Động vật', level: 'B1' },
  { id: 'animal-b1-7', word: 'fressen', phonetic: '[ˈfʁɛsən]', meaning: 'Ăn (dùng cho động vật)', example: 'Die Kühe fressen das Heu im Stall. (Đàn bò ăn cỏ khô trong chuồng.)', theme: 'Động vật', level: 'B1' },
  { id: 'animal-b1-8', word: 'Giraffe', article: 'DIE', plural: 'Giraffen', phonetic: '[ɡiˈʁafə]', meaning: 'Hươu cao cổ', example: 'Die Giraffe frisst die Blätter von den Spitzen der hohen Bäume. (Hươu cao cổ ăn những chiếc lá từ trên ngọn những cây cao.)', theme: 'Động vật', level: 'B1' },
  { id: 'animal-b1-9', word: 'Hirsch', article: 'DER', plural: 'Hirsche', phonetic: '[hɪʁʃ]', meaning: 'Con nai (đực, có sừng)', example: 'Der imposante Hirsch trägt ein großes Geweih. (Con nai đực oai vệ mang một cặp sừng lớn.)', theme: 'Động vật', level: 'B1' },
  { id: 'animal-b1-10', word: 'Krokodil', article: 'DAS', plural: 'Krokodile', phonetic: '[kʁokoˈdiːl]', meaning: 'Cá sấu', example: 'Das gefährliche Krokodil wartet am Flussufer. (Con cá sấu nguy hiểm đợi ở bờ sông.)', theme: 'Động vật', level: 'B1' },
  { id: 'animal-b1-11', word: 'Rabe', article: 'DER', plural: 'Raben', phonetic: '[ˈʁaːbə]', meaning: 'Con quạ', example: 'Ein kluger Rabe beobachtet uns vom Baum aus. (Một con quạ thông minh quan sát chúng tôi từ trên cây.)', theme: 'Động vật', level: 'B1' },
  { id: 'animal-b1-12', word: 'Schildkröte', article: 'DIE', plural: 'Schildkröten', phonetic: '[ˈʃɪltˌkʁøːtə]', meaning: 'Con rùa', example: 'Die alte Schildkröte bewegt sich sehr langsam vorwärts. (Con rùa già di chuyển về phía trước rất chậm chạp.)', theme: 'Động vật', level: 'B1' },
  { id: 'animal-b1-13', word: 'Fell', article: 'DAS', plural: 'Felle', phonetic: '[fɛl]', meaning: 'Lông thú', example: 'Unsere Katze hat ein besonders weiches, glänzendes Fell. (Con mèo của chúng tôi có một bộ lông thú vô cùng mềm mại và bóng mượt.)', theme: 'Động vật', level: 'B1' },
  { id: 'animal-b1-14', word: 'Stall', article: 'DER', plural: 'Ställe', phonetic: '[ʃtal]', meaning: 'Chuồng trại', example: 'Am Abend treibt der Bauer alle Pferde zurück in den Stall. (Buổi tối, người nông dân dồn tất cả ngựa quay trở lại chuồng.)', theme: 'Động vật', level: 'B1' },
  { id: 'animal-b1-15', word: 'Monster', article: 'DAS', plural: 'Monster', phonetic: '[ˈmɔnstɐ]', meaning: 'Quái vật', example: 'Das kleine Kid hat Angst vor einem fiktiven Monster unter dem Bett. (Đứa trẻ nhỏ sợ hãi một con quái vật hư cấu ở dưới gầm giường.)', theme: 'Động vật', level: 'B1' },
  { id: 'animal-b1-16', word: 'Hai', article: 'DER', plural: 'Haie', phonetic: '[haɪ̯]', meaning: 'Cá mập', example: 'Der große Hai schwimmt majestätisch durch den tiefen Ozean. (Con cá mập lớn bơi uy nghi qua đại dương sâu thẳm.)', theme: 'Động vật', level: 'B1' },
  { id: 'animal-b1-17', word: 'Eule', article: 'DIE', plural: 'Eulen', phonetic: '[ˈɔɪ̯lə]', meaning: 'Con cú', example: 'Die weise Eule jagt geräuschlos in der Dunkelheit. (Con cú thông thái săn mồi lặng lẽ trong bóng đêm.)', theme: 'Động vật', level: 'B1' },

  // --- LEVEL B2 ---
  { id: 'animal-b2-1', word: 'auswandern', phonetic: '[ˈaʊ̯sˌvandɐn]', meaning: 'Di cư', example: 'Zugvögel wandern im kalten Herbst in den warmen Süden aus. (Chim di trú di cư về phương nam ấm áp vào mùa thu lạnh giá.)', theme: 'Động vật', level: 'B2' },
  { id: 'animal-b2-2', word: 'beißen', phonetic: '[ˈbaɪ̯sən]', meaning: 'Cắn', example: 'Ein wütender Hund biss den Einbrecher ins Bein. (Một con chó hung dữ đã cắn vào chân kẻ trộm.)', theme: 'Động vật', level: 'B2' },
  { id: 'animal-b2-3', word: 'Beute', article: 'DIE', plural: 'Beuten', phonetic: '[ˈbɔɪ̯tə]', meaning: 'Con mồi', example: 'Der Adler späht aus großer Höhe nach seiner Beute. (Chim đại bàng tìm kiếm con mồi từ độ cao lớn.)', theme: 'Động vật', level: 'B2' },
  { id: 'animal-b2-4', word: 'Fliege', article: 'DIE', plural: 'Fliegen', phonetic: '[ˈfliːɡə]', meaning: 'Con ruồi', example: 'Die lästige Fliege summt ununterbrochen um meinen Kopf herum. (Con ruồi phiền phức cứ vo ve liên tục xung quanh đầu tôi.)', theme: 'Động vật', level: 'B2' },
  { id: 'animal-b2-5', word: 'Mücke', article: 'DIE', plural: 'Mücken', phonetic: '[ˈmʏkə]', meaning: 'Muỗi', example: 'In feuchten Sommernächten raubt uns manche Mücke den Schlaf. (Vào những đêm hè ẩm ướt, vài con muỗi cướp đi giấc ngủ của chúng tôi.)', theme: 'Động vật', level: 'B2' },
  { id: 'animal-b2-6', word: 'auffressen', phonetic: '[ˈaʊ̯fˌfʁɛsən]', meaning: 'Ăn sạch', example: 'Das gierige Wildtier fraß die gesamte Beute restlos auf. (Con thú hoang tham lam nuốt chửng hoàn toàn con mồi không còn một vết tích.)', theme: 'Động vật', level: 'B2' },
  { id: 'animal-b2-7', word: 'Haltung', article: 'DIE', plural: 'Haltungen', phonetic: '[ˈhaltʊŋ]', meaning: 'Sự chăn nuôi', example: 'Artgerechte Haltung ist extrem wichtig für das Wohl der Tiere. (Việc chăn nuôi nhân đạo, phù hợp loài là tối quan trọng cho phúc lợi động vật.)', theme: 'Động vật', level: 'B2' },
  { id: 'animal-b2-8', word: 'tierisch', phonetic: '[ˈtiːʁɪʃ]', meaning: 'Thuộc động vật', example: 'Auf der Party hatten wir gestern einen tierischen Spaß. (Ở bữa tiệc hôm qua chúng tôi đã có một niềm vui dạt dào sảng khoái.)', theme: 'Động vật', level: 'B2' },
  { id: 'animal-b2-9', word: 'sträuben', phonetic: '[ˈʃtʁɔɪ̯bən]', meaning: 'Xù lông', example: 'Vor lauter Schreck sträubten sich die Haare der Katze. (Vì quá sợ hãi, lông của con mèo dựng đứng xù hết cả lên.)', theme: 'Động vật', level: 'B2' },
  { id: 'animal-b2-10', word: 'Oktopus', article: 'DER', plural: 'Oktopusse', phonetic: '[ˈɔktopʊs]', meaning: 'Bạch tuộc', example: 'Der intelligente Oktopus versteckt sich geschickt in Meereshöhlen. (Con bạch tuộc thông minh lẩn trốn khéo léo trong các hang động biển.)', theme: 'Động vật', level: 'B2' },
  { id: 'animal-b2-11', word: 'Garnele', article: 'DIE', plural: 'Garnelen', phonetic: '[ɡaʁˈneːlə]', meaning: 'Con tôm', example: 'In Flüssen findet man winzige Garnelen, die sich im Sand vergraben. (Ở các dòng sông, người ta tìm thấy những con tôm nhỏ bé tự vùi mình trong cát.)', theme: 'Động vật', level: 'B2' },
  { id: 'animal-b2-12', word: 'Feder', article: 'DIE', plural: 'Federn', phonetic: '[ˈfeːdɐ]', meaning: 'Lông gia cầm', example: 'Die bunte Pfauenfeder sieht unglaublich elegant aus. (Chiệc lông vũ công đầy màu sắc trông vô cùng trang nhã tao nhã.)', theme: 'Động vật', level: 'B2' },
  { id: 'animal-b2-13', word: 'vielfältig', phonetic: '[ˈfiːlˌfɛltɪç]', meaning: 'Đa dạng', example: 'Die Tierwelt im tropischen Regenwald ist unglaublich vielfältig. (Thế giới động vật ở rừng mưa nhiệt đới vô cùng đa dạng phong phú.)', theme: 'Động vật', level: 'B2' },
  { id: 'animal-b2-14', word: 'knurren', phonetic: '[ˈknʊʁən]', meaning: 'Gầm gừ', example: 'Der Hund begann leise zu knurren, als sich jemand dem Zaun näherte. (Con chó bắt đầu gầm gừ nhỏ khi có ai đó tiến lại gần hàng rào.)', theme: 'Động vật', level: 'B2' },

  // --- PFLANZEN UND NATUR ---
  { id: 'nature-a1-1', word: 'Blume', article: 'DIE', plural: 'Blumen', phonetic: '[ˈblyːmə]', meaning: 'Hoa', example: 'Ich kaufe eine schöne Blume für meine Mutter. (Tôi mua một bông hoa đẹp tặng mẹ.)', theme: 'Pflanzen und Natur', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=1000' },
  { id: 'nature-a1-2', word: 'Baum', article: 'DER', plural: 'Bäume', phonetic: '[baʊ̯m]', meaning: 'Cây', example: 'Der große Baum steht mitten im Garten. (Cây lớn đứng giữa vườn.)', theme: 'Pflanzen und Natur', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000' },
  { id: 'nature-a1-3', word: 'Blatt', article: 'DAS', plural: 'Blätter', phonetic: '[blat]', meaning: 'Lá', example: 'Im Herbst fällt das rote Blatt vom Baum. (Vào mùa thu, chiếc lá đỏ rơi xuống từ trên cây.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-4', word: 'Strauch', article: 'DER', plural: 'Sträucher', phonetic: '[ʃtʁaʊ̯x]', meaning: 'Cây bụi', example: 'Hinter dem Haus wächst ein grüner Strauch. (Phía sau nhà mọc một cây bụi xanh.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-5', word: 'Gras', article: 'DAS', plural: 'Gräser', phonetic: '[ɡʁaːs]', meaning: 'Cỏ', example: 'Das Schaf frisst grünes Gras auf der Wiese. (Con cừu ăn cỏ xanh trên đồng cỏ.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-6', word: 'Pilz', article: 'DER', plural: 'Pilze', phonetic: '[pɪlt͡s]', meaning: 'Nấm', example: 'Wir sammeln im Wald leckere Pilze. (Chúng tôi hái những cây nấm ngon trong rừng.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-7', word: 'Pflanze', article: 'DIE', plural: 'Pflanzen', phonetic: '[ˈp͡flant͡sə]', meaning: 'Cây trồng', example: 'Jede Pflanze braucht Licht und Wasser zum Wachsen. (Mỗi cây trồng đều cần ánh sáng và nước để phát triển.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-8', word: 'Busch', article: 'DER', plural: 'Büsche', phonetic: '[bʊʃ]', meaning: 'Bụi cây', example: 'Vögel nisten gerne in einem dichten Busch. (Chim thích làm tổ trong một bụi cây rậm rạp.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-9', word: 'Frucht', article: 'DIE', plural: 'Früchte', phonetic: '[fʁʊxt]', meaning: 'Quả', example: 'Die Frucht ist süß und saftig. (Trái quả này ngọt và mọng nước.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-10', word: 'Wurzel', article: 'DIE', plural: 'Wurzeln', phonetic: '[ˈvʊʁt͡sl̩]', meaning: 'Rễ', example: 'Die Wurzel dieser Pflanze wächst tief in die Erde. (Rễ của loài cây này mọc sâu vào trong đất.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-11', word: 'Samen', article: 'DER', plural: 'Samen', phonetic: '[ˈzaːmən]', meaning: 'Hạt', example: 'Aus dem kleinen Samen wächst eine große Blume. (Từ chiếc hạt nhỏ sẽ mọc lên một bông hoa lớn.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-12', word: 'Kaktus', article: 'DER', plural: 'Kakteen', phonetic: '[ˈkaktʊs]', meaning: 'Xương rồng', example: 'Ein Kaktus braucht nur sehr wenig Wasser. (Cây xương rồng chỉ cần rất ít nước.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-13', word: 'Rose', article: 'DIE', plural: 'Rosen', phonetic: '[ˈʁoːzə]', meaning: 'Hoa hồng', example: 'Er schenkt ihr eine wunderschöne rote Rose. (Anh ấy tặng cô ấy một bông hoa hồng đỏ tuyệt đẹp.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-14', word: 'Tulpe', article: 'DIE', plural: 'Tulpen', phonetic: '[ˈtʊlpə]', meaning: 'Hoa tulip', example: 'Im Frühling blühen gelbe Tulpen im Beet. (Vào mùa xuân, những hoa tulip vàng nở rộ trên luống.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-15', word: 'Blüte', article: 'DIE', plural: 'Blüten', phonetic: '[ˈblyːtə]', meaning: 'Cánh hoa', example: 'Die Kirschbäume tragen weiße Blüten. (Những cây anh đào mang những bông hoa trắng nở rộ.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-16', word: 'Zweig', article: 'DER', plural: 'Zweige', phonetic: '[t͡svaɪ̯k]', meaning: 'Nhánh cây', example: 'Die Katze klettert auf einen dünnen Zweig. (Con mèo trèo lên một nhánh cây mảnh.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-17', word: 'Ast', article: 'DER', plural: 'Äste', phonetic: '[ast]', meaning: 'Cành cây', example: 'Der dicke Ast bietet einen guten Halt für die Schaukel. (Cành cây dày tạo chỗ bấu chắc chắn cho xích đu.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-18', word: 'Stamm', article: 'DER', plural: 'Stämme', phonetic: '[ʃtam]', meaning: 'Thân cây', example: 'Der Stamm des Baumes ist sehr breit. (Thân của cây rất rộng.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-19', word: 'Keim', article: 'DER', plural: 'Keime', phonetic: '[kaɪ̯m]', meaning: 'Mầm', example: 'Der zarte Keim wächst nach dem Regen schnell. (Mầm non yếu ớt phát triển nhanh chóng sau cơn mưa.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-20', word: 'Feld', article: 'DAS', plural: 'Felder', phonetic: '[fɛlt]', meaning: 'Cánh đồng', example: 'Der Bauer arbeitet heute auf dem weiten Feld. (Người nông dân hôm nay làm việc trên cánh đồng bao la.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-21', word: 'Garten', article: 'DER', plural: 'Gärten', phonetic: '[ˈɡaʁtn̩]', meaning: 'Vườn', example: 'In unserem Garten wachsen viele Rosen. (Trong vườn của chúng tôi trồng nhiều hoa hồng.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-22', word: 'Gemüse', article: 'DAS', plural: 'Gemüsearten', phonetic: '[ɡəˈmyːzə]', meaning: 'Rau củ', example: 'Wir essen täglich frisches Gemüse aus dem Garten. (Chúng tôi ăn rau củ tươi từ vườn mỗi ngày.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-23', word: 'Kletterpflanze', article: 'DIE', plural: 'Kletterpflanzen', phonetic: '[ˈklɛtɐp͡flant͡sə]', meaning: 'Cây leo', example: 'Die grüne Kletterpflanze wächst an der Hauswand empor. (Cây leo xanh mọc leo lên trên tường nhà.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-24', word: 'Zierpflanze', article: 'DIE', plural: 'Zierpflanzen', phonetic: '[ˈt͡siːɐ̯p͡flant͡sə]', meaning: 'Cây cảnh', example: 'Diese Zierpflanze steht dekorativ im Wohnzimmer. (Loại cây cảnh này được đặt trang trí trong phòng khách.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-25', word: 'Unkraut', article: 'DAS', plural: 'Unkräuter', phonetic: '[ˈʊnˌkʁaʊ̯t]', meaning: 'Cỏ dại', example: 'Der Gärtner entfernt das Unkraut aus dem Beet. (Người làm vườn nhổ cỏ dại ra khỏi luống cây.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-26', word: 'Baumstamm', article: 'DER', plural: 'Baumstämme', phonetic: '[ˈbaʊ̯mˌʃtam]', meaning: 'Thân cây', example: 'Der Hund läuft um den Baumstamm herum. (Con chó chạy vòng quanh thân cây.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-27', word: 'Sprosse', article: 'DIE', plural: 'Sprossen', phonetic: '[ˈʃpʁɔsə]', meaning: 'Mầm cây', example: 'Frische Sprossen eignen sich hervorragend für den Salat. (Mầm non tươi cực kỳ thích hợp làm món salad.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-28', word: 'Wiese', article: 'DIE', plural: 'Wiesen', phonetic: '[ˈviːzə]', meaning: 'Đồng cỏ', example: 'Auf der grünen Wiese spielen glückliche Kinder. (Trên đồng cỏ xanh, những đứa trẻ vui vẻ đang chơi đùa.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-29', word: 'Farn', article: 'DER', plural: 'Farne', phonetic: '[faʁn]', meaning: 'Cây dương xỉ', example: 'Im schattigen Wald wächst dieser grüne Farn besonders gut. (Trong khu rừng râm mát, cây dương xỉ xanh này mọc đặc biệt tốt.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-30', word: 'Baumstumpf', article: 'DER', plural: 'Baumstümpfe', phonetic: '[ˈbaʊ̯mˌʃtʊmp͡f]', meaning: 'Gốc cây', example: 'Klaus setzt sich auf einen alten Baumstumpf, um sich auszuruhen. (Klaus ngồi lên một gốc cây già để nghỉ ngơi.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-31', word: 'Blühzeitpunkt', article: 'DER', plural: 'Blühzeitpunkte', phonetic: '[ˈblyːt͡saɪ̯tˌpʊŋkt]', meaning: 'Thời điểm hoa nở', example: 'Der genaue Blühzeitpunkt variiert je nach Wetter. (Thời điểm hoa nở chính xác thay đổi tùy theo thời tiết.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-32', word: 'Saatgut', article: 'DAS', plural: 'Saatgüter', phonetic: '[ˈzaːtˌɡuːt]', meaning: 'Hạt giống', example: 'Hochwertiges Saatgut garantiert eine gute Ernte. (Hạt giống chất lượng cao đảm bảo một vụ mùa bội thu.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-33', word: 'Bonsai', article: 'DER', plural: 'Bonsais', phonetic: '[ˈbɔnsaɪ̯]', meaning: 'Cây bonsai', example: 'Er pflegt seinen kleinen Bonsai mit großer Sorgfalt. (Anh ấy chăm sóc cây bonsai nhỏ của mình với sự cẩn thận tỉ mỉ.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-34', word: 'Hecke', article: 'DIE', plural: 'Hecken', phonetic: '[ˈhɛkə]', meaning: 'Hàng rào cây', example: 'Die dichte Hecke schützt das Grundstück vor Wind und Blicken. (Hàng rào cây rậm rạp bảo vệ khu đất khỏi gió và ánh nhìn.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-35', word: 'Nadelbaum', article: 'DER', plural: 'Nadelbäume', phonetic: '[ˈnaːdl̩ˌbaʊ̯m]', meaning: 'Cây thông', example: 'Die Kiefer ist ein bekannter Nadelbaum. (Cây thông đuôi ngựa là một cây lá kim nổi tiếng.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-36', word: 'Laub', article: 'DAS', phonetic: '[laʊ̯p]', meaning: 'Lá cây', example: 'Die Kinder rascheln glücklich durch das trockene Laub. (Trẻ em vui vẻ xào xạc bước qua lớp lá cây khô.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-37', word: 'Knospe', article: 'DIE', plural: 'Knospen', phonetic: '[ˈknɔspə]', meaning: 'Nụ hoa', example: 'Die kleine Knospe öffnet sich langsam am Morgen. (Nụ hoa nhỏ từ từ nở ra vào buổi sáng.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-38', word: 'Laubbaum', article: 'DER', plural: 'Laubbäume', phonetic: '[ˈlaʊ̯pˌbaʊ̯m]', meaning: 'Cây lá rộng', example: 'Im Herbst verlieren viele Laubbäume ihre Blätter. (Vào mùa thu, nhiều cây lá rộng rụng hết lá.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-39', word: 'Gärtnerei', article: 'DIE', plural: 'Gärtnereien', phonetic: '[ɡɛʁtnəˈʁaɪ̯]', meaning: 'Nhà vườn', example: 'Wir kaufen bunte Sommerblumen in der lokalen Gärtnerei. (Chúng tôi mua hoa mùa hè sặc sỡ ở nhà vườn địa phương.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-40', word: 'Topf', article: 'DER', plural: 'Töpfe', phonetic: '[tɔp_f]', meaning: 'Chậu cây', example: 'Ich pflanze die Rose in einen großen Topf. (Tôi trồng cây hoa hồng vào một cái chậu lớn.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-41', word: 'Beet', article: 'DAS', plural: 'Beete', phonetic: '[beːt]', meaning: 'Luống cây', example: 'Maria gräbt das Beet um, bevor sie neue Blumen einpflanzt. (Maria xới tung luống cây trước khi trồng hoa mới.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-42', word: 'Kompost', article: 'DER', phonetic: '[kɔmˈpɔst]', meaning: 'Phân hữu cơ', example: 'Wir bringen den Biomüll auf den Kompost im Garten. (Chúng tôi mang rác hữu cơ đổ ra đống ủ phân trong vườn.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-43', word: 'Erde', article: 'DIE', plural: 'Erden', phonetic: '[ˈeːɐ̯də]', meaning: 'Đất', example: 'Die weiche Erde eignet sich perfekt für Gemüsepflanzen. (Đất tơi xốp cực kỳ hoàn hảo cho các cây rau.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-44', word: 'Gewächshaus', article: 'DAS', plural: 'Gewächshäuser', phonetic: '[ɡəˈvɛçsˌhaʊ̯s]', meaning: 'Nhà kính', example: 'Tomaten wachsen im warmen Gewächshaus am besten. (Cà chua phát triển tốt nhất trong nhà kính ấm áp.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-45', word: 'Dünger', article: 'DER', plural: 'Dünger', phonetic: '[ˈdʏŋɐ]', meaning: 'Phân bón', example: 'Mit dem richtigen Dünger wachsen die Pflanzen schneller. (Với loại phân bón thích hợp, cây trồng sẽ lớn nhanh hơn.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-46', word: 'Wasserbedarf', article: 'DER', plural: 'Wasserbedarfe', phonetic: '[ˈvasɐbəˌdaʁf]', meaning: 'Nhu cầu nước', example: 'Kakteen haben einen sehr geringen Wasserbedarf. (Xương rồng có nhu cầu nước rất thấp.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-47', word: 'Bewässerung', article: 'DIE', plural: 'Bewässerungen', phonetic: '[bəˈvɛsəʁʊŋ]', meaning: 'Hệ thống tưới tiêu', example: 'Die automatische Bewässerung spart uns viel Arbeit. (Hệ thống tưới tiêu tự động tiết kiệm cho chúng tôi nhiều công sức.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-48', word: 'Rasen', article: 'DER', plural: 'Rasen', phonetic: '[ˈʁaːzən]', meaning: 'Thảm cỏ', example: 'Der Rasen muss im Sommer oft gemäht werden. (Thảm cỏ cần phải được cắt thường xuyên vào mùa hè.)', theme: 'Pflanzen und Natur', level: 'A1' },
  { id: 'nature-a1-49', word: 'Holz', article: 'DAS', plural: 'Hölzer', phonetic: '[hɔlt͡s]', meaning: 'Gỗ', example: 'Der alte Tisch ist aus hochwertigem Holz gefertigt. (Chiếc bàn cũ được làm từ loại gỗ chất lượng cao.)', theme: 'Pflanzen und Natur', level: 'A1' },

  // --- MÀU SẮC ---
  { id: 'a1-c1', word: 'Rot', phonetic: '[ʁoːt]', meaning: 'Màu đỏ', example: 'Das Auto ist rot.', theme: 'Màu sắc', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1502691876148-a84978f59af8?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-c2', word: 'Blau', phonetic: '[blaʊ̯]', meaning: 'Màu xanh dương', example: 'Der Himmel ist blau.', theme: 'Màu sắc', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1500462859194-845d611571db?auto=format&fit=crop&q=80&w=1000' },

  // --- THỜI TIẾT ---
  { id: 'a1-w1', word: 'Sonne', article: 'DIE', phonetic: '[ˈzɔnə]', meaning: 'Mặt trời', example: 'Die Sonne scheint.', theme: 'Thời tiết', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1526285769708-bbd4bd8e5744?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-w2', word: 'Regen', article: 'DER', phonetic: '[ˈʁeːɡn̩]', meaning: 'Mưa', example: 'Der Regen ist kalt.', theme: 'Thời tiết', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&q=80&w=1000' },

  // --- NHÀ CỬA ---
  { id: 'a1-h1', word: 'Haus', article: 'DAS', plural: 'Häuser', phonetic: '[haʊ̯s]', meaning: 'Nhà', example: 'Mein Haus ist groß.', theme: 'Nhà cửa', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-h2', word: 'Zimmer', article: 'DAS', plural: 'Zimmer', phonetic: '[ˈt͡sɪmɐ]', meaning: 'Phòng', example: 'Das Zimmer ist hell.', theme: 'Nhà cửa', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-h3', word: 'Küche', article: 'DIE', plural: 'Küchen', phonetic: '[ˈkʏçə]', meaning: 'Nhà bếp', example: 'Ich koche in der Küche.', theme: 'Nhà cửa', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1000' },

  // --- CÔNG VIỆC ---
  { id: 'a1-wk1', word: 'Arbeit', article: 'DIE', phonetic: '[ˈaʁbaɪ̯t]', meaning: 'Công việc', example: 'Die Arbeit macht Spaß.', theme: 'Công việc', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1454165833767-02754a7c1b22?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-wk2', word: 'Büro', article: 'DAS', plural: 'Büros', phonetic: '[byˈʁoː]', meaning: 'Văn phòng', example: 'Das Büro ist im 2. Stock.', theme: 'Công việc', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000' },

  // --- LEVEL A2 VOCABULARY ---
  { id: 'a2-v1', word: 'Tradition', article: 'DIE', plural: 'Traditionen', phonetic: '[tʁadiˈt͡si̯oːn]', meaning: 'Truyền thống', example: 'Diese Tradition ist sehr alt. (Truyền thống này rất lâu đời.)', theme: 'Văn hóa & Truyền thống', level: 'A2' },
  { id: 'a2-v2', word: 'Fest', article: 'DAS', plural: 'Feste', phonetic: '[fɛst]', meaning: 'Lễ hội / Bữa tiệc', example: 'Das Fest beginnt am Abend. (Lễ hội bắt đầu vào buổi tối.)', theme: 'Lễ hội & Ăn mừng', level: 'A2' },
  { id: 'a2-v3', word: 'Feier', article: 'DIE', plural: 'Feiern', phonetic: '[ˈfaɪ̯ɐ]', meaning: 'Sự ăn mừng / Buổi lễ', example: 'Die Feier war sehr schön. (Buổi lễ rất là vui vẻ.)', theme: 'Lễ hội & Ăn mừng', level: 'A2' },
  { id: 'a2-v4', word: 'Sprache', article: 'DIE', plural: 'Sprachen', phonetic: '[ˈʃpʁaːxə]', meaning: 'Ngôn ngữ', example: 'Deutsch ist eine interessante Sprache. (Tiếng Đức là một ngôn ngữ thú vị.)', theme: 'Văn hóa & Truyền thống', level: 'A2' },
  { id: 'a2-v5', word: 'Wald', article: 'DER', plural: 'Wälder', phonetic: '[valt]', meaning: 'Rừng', example: 'Der Wald ist sehr ruhig. (Rừng cây rất yên tĩnh.)', theme: 'Thiên nhiên & Môi trường', level: 'A2' },
  { id: 'a2-v6', word: 'Fluss', article: 'DER', plural: 'Flüsse', phonetic: '[flʊs]', meaning: 'Dòng sông', example: 'Der Fluss fließt durch die Stadt. (Dòng sông chảy qua thành phố.)', theme: 'Thiên nhiên & Môi trường', level: 'A2' },
  { id: 'a2-v7', word: 'Berg', article: 'DER', plural: 'Berge', phonetic: '[bɛʁk]', meaning: 'Ngọn núi', example: 'Wir steigen auf den Berg. (Chúng tôi đang leo lên núi.)', theme: 'Thiên nhiên & Môi trường', level: 'A2' },
  { id: 'a2-v8', word: 'Urlaub', article: 'DER', plural: 'Urlaube', phonetic: '[ˈuːɐ̯laʊ̯p]', meaning: 'Kỳ nghỉ', example: 'Wir machen Urlaub in Italien. (Chúng tôi đang nghỉ mát ở Ý.)', theme: 'Du lịch & Nghỉ dưỡng', level: 'A2' },
  { id: 'a2-v9', word: 'Reise', article: 'DIE', plural: 'Reisen', phonetic: '[ˈʁaɪ̯zə]', meaning: 'Chuyến du lịch / Cuộc hành trình', example: 'Die Reise war sehr interessant. (Chuyến đi rất thú vị.)', theme: 'Du lịch & Nghỉ dưỡng', level: 'A2' },
  { id: 'a2-v10', word: 'Koffer', article: 'DER', plural: 'Koffer', phonetic: '[ˈkɔfɐ]', meaning: 'Vali', example: 'Mein Koffer ist voll. (Vali của tôi đã chật cứng.)', theme: 'Du lịch & Nghỉ dưỡng', level: 'A2' },
  { id: 'a2-v11', word: 'Arbeitsplatz', article: 'DER', plural: 'Arbeitsplätze', phonetic: '[ˈaʁbaɪ̯t͡sˌplat͡s]', meaning: 'Chỗ làm việc', example: 'Der Arbeitsplatz ist modern. (Nơi làm việc thật hiện đại.)', theme: 'Công việc & Sự nghiệp', level: 'A2' },
  { id: 'a2-v12', word: 'Geschenk', article: 'DAS', plural: 'Geschenke', phonetic: '[ɡəˈʃɛŋk]', meaning: 'Món quà', example: 'Das Geschenk gefällt mir sehr. (Tôi rất thích món quà này.)', theme: 'Quà tặng & Nghi lễ', level: 'A2' },
  { id: 'a2-v13', word: 'Bild', article: 'DAS', plural: 'Bilder', phonetic: '[bɪlt]', meaning: 'Bức tranh / Hình ảnh', example: 'Das Bild hängt an der Wand. (Bức tranh sặc sỡ treo trên tường.)', theme: 'Nghệ thuật & Hình ảnh', level: 'A2' },
  { id: 'a2-v14', word: 'Sport', article: 'DER', plural: 'Sporte', phonetic: '[ʃpɔʁt]', meaning: 'Thể thao', example: 'Sport ist gesund. (Thể thao rất tốt cho sức khoẻ.)', theme: 'Sức khỏe & Thể thao', level: 'A2' },
  { id: 'a2-v15', word: 'Gespräch', article: 'DAS', plural: 'Gespräche', phonetic: '[ɡəˈʃpʁɛːç]', meaning: 'Cuộc trò chuyện', example: 'Das Gespräch war interessant. (Cuộc nói chuyện thật lý thú.)', theme: 'Giao tiếp & Mối quan hệ', level: 'A2' },
  { id: 'a2-v16', word: 'Zukunft', article: 'DIE', plural: 'Zukünfte', phonetic: '[ˈt͡suːkʊnft]', meaning: 'Tương lai', example: 'Die Zukunft ist wichtig. (Tương lai là điều hệ trọng.)', theme: 'Tương lai & Sự nghiệp', level: 'A2' },
  { id: 'a2-v17', word: 'Verwandte', article: 'DIE', plural: 'Verwandten', phonetic: '[fɛɐ̯ˈvantə]', meaning: 'Họ hàng', example: 'Meine Verwandten wohnen alle in Berlin. (Họ hàng của tôi đều sống ở Berlin.)', theme: 'Gia đình', level: 'A2' },
  { id: 'a2-v18', word: 'Geschwister', plural: 'Geschwister', phonetic: '[ɡəˈʃvɪstɐ]', meaning: 'Anh chị em ruột', example: 'Ich habe zwei Geschwister: einen Bruder und eine Schwester. (Tôi có hai anh chị em ruột: một anh trai và một chị gái.)', theme: 'Gia đình', level: 'A2' },
  { id: 'a2-f1', word: 'Neffe', article: 'DER', plural: 'Neffen', phonetic: '[ˈnɛfə]', meaning: 'Cháu trai', example: 'Mein Neffe ist fünf Jahre alt. (Cháu trai tôi 5 tuổi.)', theme: 'Gia đình', level: 'A2' },
  { id: 'a2-f2', word: 'Nichte', article: 'DIE', plural: 'Nichten', phonetic: '[ˈnɪçtə]', meaning: 'Cháu gái', example: 'Meine Nichte lernt schnell. (Cháu gái tôi tiếp thu nhanh.)', theme: 'Gia đình', level: 'A2' },
  { id: 'a2-f3', word: 'Schwiegermutter', article: 'DIE', plural: 'Schwiegermütter', phonetic: '[ˈʃviːɡɐˌmʊtɐ]', meaning: 'Mẹ chồng / Mẹ vợ', example: 'Meine Schwiegermutter ist sehr freundlich. (Mẹ chồng tôi rất thân thiện.)', theme: 'Gia đình', level: 'A2' },
  { id: 'a2-f4', word: 'Schwiegervater', article: 'DER', plural: 'Schwiegerväter', phonetic: '[ˈʃviːɡɐˌfaːtɐ]', meaning: 'Bố chồng / Bố vợ', example: 'Mein Schwiegervater erzählt viele Geschichten. (Bố chồng tôi kể nhiều câu chuyện.)', theme: 'Gia đình', level: 'A2' },
  { id: 'a2-f5', word: 'Schwiegertochter', article: 'DIE', plural: 'Schwiegertöchter', phonetic: '[ˈʃviːɡɐˌtɔxtɐ]', meaning: 'Con dâu', example: 'Unsere Schwiegertochter besucht uns oft. (Con dâu chúng tôi ghé thăm thường xuyên.)', theme: 'Gia đình', level: 'A2' },
  { id: 'a2-f6', word: 'Schwiegersohn', article: 'DER', plural: 'Schwiegersöhne', phonetic: '[ˈʃviːɡɐˌzoːn]', meaning: 'Con rể', example: 'Mein Schwiegersohn arbeitet als Arzt. (Con rể tôi làm bác sĩ.)', theme: 'Gia đình', level: 'A2' },
  { id: 'a2-f7', word: 'Schwager', article: 'DER', plural: 'Schwager', phonetic: '[ˈʃvaːɡɐ]', meaning: 'Anh/em rể, anh/em vợ', example: 'Mein Schwager spielt Gitarre. (Anh rể tôi chơi đàn ghita.)', theme: 'Gia đình', level: 'A2' },
  { id: 'a2-f8', word: 'Schwägerin', article: 'DIE', plural: 'Schwägerinnen', phonetic: '[ˈʃvɛːɡəʁɪn]', meaning: 'Chị/em dâu, chị/em vợ', example: 'Meine Schwägerin kocht rất tốt.', theme: 'Gia đình', level: 'A2' },
  { id: 'a2-f9', word: 'Kollege', article: 'DER', plural: 'Kollegen', phonetic: '[kɔˈleːɡə]', meaning: 'Đồng nghiệp nam', example: 'Mein Kollege hilft mir bei der Arbeit. (Đồng nghiệp nam giúp tôi trong công việc.)', theme: 'Gia đình', level: 'A2' },
  { id: 'a2-f10', word: 'Kollegin', article: 'DIE', plural: 'Kolleginnen', phonetic: '[kɔˈleːɡɪn]', meaning: 'Đồng nghiệp nữ', example: 'Unsere Kollegin hat Geburtstag. (Đồng nghiệp nữ của chúng tôi sinh nhật.)', theme: 'Gia đình', level: 'A2' },
  { id: 'a2-f11', word: 'Streit', article: 'DER', plural: 'Streite', phonetic: '[ʃtʁaɪ̯t]', meaning: 'Cuộc cãi vã', example: 'Sie hatten einen heftigen Streit. (Họ đã có một cuộc cãi vã nảy lửa.)', theme: 'Gia đình', level: 'A2' },
  { id: 'a2-f12', word: 'einander', phonetic: '[aɪ̯ˈnandɐ]', meaning: 'Lẫn nhau', example: 'Sie lieben einander sehr. (Họ yêu thương nhau sâu sắc.)', theme: 'Gia đình', level: 'A2' },
  { id: 'a2-f13', word: 'Beziehung', article: 'DIE', plural: 'Beziehungen', phonetic: '[bəˈt͡siːʊŋ]', meaning: 'Mối quan hệ', example: 'Ich habe eine gute Beziehung zu meinen Eltern. (Tôi có mối quan hệ tốt với bố mẹ mình.)', theme: 'Gia đình', level: 'A2' },
  { id: 'a2-v19', word: 'Wohnung', article: 'DIE', plural: 'Wohnungen', phonetic: '[ˈvoːnʊŋ]', meaning: 'Căn hộ', example: 'Unsere Wohnung hat drei Zimmer. (Căn hộ của chúng tôi có ba phòng.)', theme: 'Nhà cửa', level: 'A2' },
  { id: 'a2-v20', word: 'Möbel', article: 'DAS', plural: 'Möbel', phonetic: '[ˈmøːbl̩]', meaning: 'Đồ đạc nội thất', example: 'Die Möbel im Wohnzimmer sind neu. (Đồ đạc trong phòng khách đều mới.)', theme: 'Nhà cửa', level: 'A2' },
  { id: 'a2-v21', word: 'Nachbar', article: 'DER', plural: 'Nachbarn', phonetic: '[ˈnaːxbɐ]', meaning: 'Hàng xóm', example: 'Mein Nachbar ist sehr freundlich. (Hàng xóm của tôi rất thân thiện.)', theme: 'Nhà cửa', level: 'A2' },
  { id: 'a2-v25', word: 'Bahnhof', article: 'DER', plural: 'Bahnhöfe', phonetic: '[ˈbaːnˌhoːf]', meaning: 'Nhà ga tàu hỏa', example: 'Der Zug kommt pünktlich am Bahnhof an. (Tàu hỏa đến ga đúng giờ.)', theme: 'Du lịch & Nghỉ dưỡng', level: 'A2' },
  { id: 'a2-v26', word: 'Flughafen', article: 'DER', plural: 'Flughäfen', phonetic: '[ˈfluːkˌhaːfn̩]', meaning: 'Sân bay', example: 'Wir fahren mit dem Taxi zum Flughafen. (Chúng tôi đi taxi ra sân bay.)', theme: 'Du lịch & Nghỉ dưỡng', level: 'A2' },
  { id: 'a2-v27', word: 'Fahrkarte', article: 'DIE', plural: 'Fahrkarten', phonetic: '[ˈfaːɐ̯ˌkaʁtə]', meaning: 'Vé tàu xe', example: 'Haben Sie eine Fahrkarte gekauft? (Bạn đã mua vé tàu chưa?)', theme: 'Du lịch & Nghỉ dưỡng', level: 'A2' },
  { id: 'a2-v28', word: 'Frühling', article: 'DER', phonetic: '[ˈfʁyːlɪŋ]', meaning: 'Mùa xuân', example: 'Im Frühling blühen viele Blumen. (Vào mùa xuân nhiều loài hoa nở.)', theme: 'Thiên nhiên & Môi trường', level: 'A2' },
  { id: 'a2-v29', word: 'Sommer', article: 'DER', phonetic: '[ˈzɔmɐ]', meaning: 'Mùa hè', example: 'Im Sommer ist es meistens sehr heiß. (Vào mùa hè trời hầu như rất nóng.)', theme: 'Thiên nhiên & Môi trường', level: 'A2' },
  { id: 'a2-v30', word: 'Herbst', article: 'DER', phonetic: '[hɛʁpst]', meaning: 'Mùa thu', example: 'Im Herbst fallen die Blätter von den Bäumen. (Vào mùa thu lá rụng từ các cành cây.)', theme: 'Thiên nhiên & Môi trường', level: 'A2' },
  { id: 'a2-v31', word: 'Winter', article: 'DER', phonetic: '[ˈvɪntɐ]', meaning: 'Mùa đông', example: 'Im Winter schneit es oft in Deutschland. (Vào mùa đông trời thường đổ tuyết ở Đức.)', theme: 'Thiên nhiên & Môi trường', level: 'A2' },
  { id: 'a2-v32', word: 'Gesundheit', article: 'DIE', phonetic: '[ɡəˈzʊnthait]', meaning: 'Sức khỏe', example: 'Gesundheit ist das Wichtigste im Leben. (Sức khỏe là điều quan trọng nhất cuộc sống.)', theme: 'Sức khỏe & Thể thao', level: 'A2' },
  { id: 'a2-v33', word: 'Krankheit', article: 'DIE', plural: 'Krankheiten', phonetic: '[ˈkʁaŋkhaɪ̯t]', meaning: 'Bệnh tật', example: 'Grippe ist eine ansteckende Krankheit. (Cúm là một bệnh truyền nhiễm.)', theme: 'Sức khỏe & Thể thao', level: 'A2' },
  { id: 'a2-v34', word: 'Arzt', article: 'DER', plural: 'Ärzte', phonetic: '[aːɐ̯t͡st]', meaning: 'Bác sĩ', example: 'Morgen habe ich einen Termin beim Arzt. (Ngày mai tôi có một cuộc hẹn với bác sĩ.)', theme: 'Sức khỏe & Thể thao', level: 'A2' },
  { id: 'a2-v35', word: 'Medikament', article: 'DAS', plural: 'Medikamente', phonetic: '[medikaˈmɛnt]', meaning: 'Thuốc men', example: 'Der Arzt hat mir ein Medikament verschrieben. (Bác sĩ đã kê đơn thuốc cho tôi.)', theme: 'Sức khỏe & Thể thao', level: 'A2' },
  { id: 'a2-v36', word: 'Ausbildung', article: 'DIE', plural: 'Ausbildungen', phonetic: '[ˈaʊ̯sˌbɪldʊŋ]', meaning: 'Sự đào tạo nghề', example: 'Ich mache eine Ausbildung als Mechatroniker. (Tôi đang học đào tạo nghề thợ cơ điện tử.)', theme: 'Công việc & Sự nghiệp', level: 'A2' },
  { id: 'a2-v37', word: 'Kollege', article: 'DER', plural: 'Kollegen', phonetic: '[kɔˈleːɡə]', meaning: 'Đồng nghiệp', example: 'Die neuen Kollegen sind sehr kooperativ. (Các đồng nghiệp mới rất hợp tác.)', theme: 'Công việc & Sự nghiệp', level: 'A2' },
  { id: 'a2-v38', word: 'Erfahrung', article: 'DIE', plural: 'Erfahrungen', phonetic: '[ɛɐ̯ˈfaːʁʊŋ]', meaning: 'Kinh nghiệm', example: 'Er hat viel Erfahrung im IT-Bereich. (Anh ấy có nhiều kinh nghiệm trong lĩnh vực IT.)', theme: 'Công việc & Sự nghiệp', level: 'A2' },
  { id: 'a2-v39', word: 'Bäckerei', article: 'DIE', plural: 'Bäckereien', phonetic: '[bɛkəˈʁaɪ̯]', meaning: 'Tiệm bánh mì', example: 'Frisches Brot kaufe ich immer in der Bäckerei. (Tôi luôn mua bánh mì tươi ở tiệm bánh mì.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'a2-v40', word: 'Supermarkt', article: 'DER', plural: 'Supermärkte', phonetic: '[ˈuːpɐˌmaʁkt]', meaning: 'Siêu thị', example: 'Dieser Supermarkt hat bis 22 Uhr geöffnet. (Siêu thị này mở cửa đến 22 giờ.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },
  { id: 'a2-v41', word: 'Kaufhaus', article: 'DAS', plural: 'Kaufhäuser', phonetic: '[ˈkaʊ̯fˌhaʊ̯s]', meaning: 'Trung tâm thương mại', example: 'Wir gehen im neuen Kaufhaus einkaufen. (Chúng tôi đi mua sắm ở trung tâm thương mại mới.)', theme: 'Thức ăn & Đồ uống', level: 'A2' },

  // --- LEVEL B1 & B2 GIA ĐÌNH & MỐI QUAN HỆ ---
  { id: 'b1-f1', word: 'Verwandtschaft', article: 'DIE', plural: 'Verwandtschaften', phonetic: '[fɛɐ̯ˈvantʃaft]', meaning: 'Họ hàng, bà con', example: 'Die ganze Verwandtschaft feiert zusammen. (Cả gia tộc ăn mừng cùng nhau.)', theme: 'Gia đình', level: 'B1' },
  { id: 'b1-f2', word: 'Betreuung', article: 'DIE', phonetic: '[bəˈtʁɔɪ̯ʊŋ]', meaning: 'Sự chăm sóc, hỗ trợ', example: 'Die Betreuung der Kinder ist kostenlos. (Việc trông nom trẻ em là miễn phí.)', theme: 'Gia đình', level: 'B1' },
  { id: 'b1-f3', word: 'Kindertagesstätte', article: 'DIE', plural: 'Kindertagesstätten', phonetic: '[ˈkɪndɐˈtaːɡəsˌʃtɛtə]', meaning: 'Nhà trẻ, trường mầm non', example: 'Mein Sohn geht in die Kindertagesstätte. (Con trai tôi đi nhà trẻ.)', theme: 'Gia đình', level: 'B1' },
  { id: 'b1-f4', word: 'Kinderkrippe', article: 'DIE', plural: 'Kinderkrippen', phonetic: '[ˈkɪndɐˌkʁɪpə]', meaning: 'Nhà trẻ (cho bé dưới 3 tuổi)', example: 'Gute Plätze in einer Kinderkrippe sind schwer zu finden. (Rất khó tìm được suất tốt trong nhà trẻ.)', theme: 'Gia đình', level: 'B1' },
  { id: 'b1-f5', word: 'Verliebte', article: 'DER', plural: 'Verliebten', phonetic: '[fɛɐ̯ˈliːptə]', meaning: 'Người đang yêu', example: 'Die Verliebten gehen im Park spazieren. (Hai người đang yêu tản bộ trong công viên.)', theme: 'Gia đình', level: 'B1' },
  { id: 'b1-f6', word: 'sich versöhnen', phonetic: '[zɪç fɛɐ̯ˈzøːnən]', meaning: 'Làm hòa, hòa giải', example: 'Nach dem Streit versöhnen sich die Geschwister wieder. (Sau cuộc cãi vã, anh chị em lại làm hòa với nhau.)', theme: 'Gia đình', level: 'B1' },
  { id: 'b1-f7', word: 'Scheidung', article: 'DIE', plural: 'Scheidungen', phonetic: '[ˈʃaɪ̯dʊŋ]', meaning: 'Cuộc ly hôn', example: 'Die Scheidung war schmerzhaft für alle. (Vụ ly hôn thật đau đớn cho tất cả.)', theme: 'Gia đình', level: 'B1' },
  { id: 'b1-f8', word: 'Feind', article: 'DER', plural: 'Feinde', phonetic: '[faɪ̯nt]', meaning: 'Kẻ thù', example: 'Aus Freunden wurden Feinde. (Từ bạn bè đã trở thành kẻ thù.)', theme: 'Gia đình', level: 'B1' },
  { id: 'b1-f9', word: 'sich wenden an', phonetic: '[zɪç ˈvɛndn̩ an]', meaning: 'Tìm đến ai, liên hệ với ai', example: 'Bei Problemen kannst du dich an mich wenden. (Khi gặp rắc rối, bạn có thể tìm đến tôi.)', theme: 'Gia đình', level: 'B1' },
  { id: 'b1-f10', word: 'gegenseitig', phonetic: '[ˈɡeːɡn̩ˌzaɪ̯tɪç]', meaning: 'Lẫn nhau, tương hỗ', example: 'Wir müssen uns gegenseitig unterstützen. (Chúng ta phải giúp đỡ lẫn nhau.)', theme: 'Gia đình', level: 'B1' },
  { id: 'b1-f11', word: 'Verhältnis', article: 'DAS', plural: 'Verhältnisse', phonetic: '[fɛɐ̯ˈhɛltnɪs]', meaning: 'Mối quan hệ, tỷ lệ', example: 'Ihr Verhältnis ist sehr eng. (Quan hệ của họ rất khăng khít.)', theme: 'Gia đình', level: 'B1' },

  { id: 'b2-f1', word: 'Assoziation', article: 'DIE', plural: 'Assoziationen', phonetic: '[asot͡si̯aˈt͡si̯oːn]', meaning: 'Sự liên tưởng, kết nối', example: 'Was ist deine erste Assoziation bei diesem Wort? (Liên tưởng đầu tiên của bạn với từ này là gì?)', theme: 'Gia đình', level: 'B2' },
  { id: 'b2-f2', word: 'Mehrgenerationenhaus', article: 'DAS', plural: 'Mehrgenerationenhäuser', phonetic: '[ˈmeːɐ̯ɡenəʁaˈt͡si̯oːnənˌhaʊ̯s]', meaning: 'Nhà chung sống nhiều thế hệ', example: 'In einem Mehrgenerationenhaus helfen Jung und Alt einander. (Trong nhà nhiều thế hệ, người trẻ và già giúp đỡ nhau.)', theme: 'Gia đình', level: 'B2' },
  { id: 'b2-f3', word: 'aus den Augen verlieren', phonetic: '[aʊ̯s deːn ˈaʊ̯ɡn̩ fɛɐ̯ˈliːʁən]', meaning: 'Mất liên lạc, xa mặt cách lòng', example: 'Wir haben uns nach der Schule aus den Augen verloren. (Chúng tôi đã mất liên lạc với nhau sau khi ra trường.)', theme: 'Gia đình', level: 'B2' },
  { id: 'b2-f4', word: 'über den Weg laufen', phonetic: '[ˈjeːmandəm ˈyːbɐ deːn veːk ˈlaʊ̯fn̩]', meaning: 'Gặp ai đó tình cờ trên đường', example: 'Gestern bin ich meinem alten Freund über den Weg gelaufen. (Hôm qua tôi ngẫu nhiên bắt gặp một người bạn cũ.)', theme: 'Gia đình', level: 'B2' },
  { id: 'b2-f5', word: 'Harmonie', article: 'DIE', plural: 'Harmonien', phonetic: '[haʁmoˈniː]', meaning: 'Sự hòa thuận, hòa hợp', example: 'In unserer Familie herrscht große Harmonie. (Gia đình chúng tôi luôn sống rất hòa thuận.)', theme: 'Gia đình', level: 'B2' },
  { id: 'b2-f6', word: 'Auseinandersetzung', article: 'DIE', plural: 'Auseinandersetzungen', phonetic: '[aʊ̯sˈaɪ̯nandɐˌzɛt͡sʊŋ]', meaning: 'Sự tranh chấp/đối đầu/xung đột', example: 'Eine friedliche Auseinandersetzung ist wichtig. (Giải quyết bất đồng một cách hòa bình rất quan trọng.)', theme: 'Gia đình', level: 'B2' },
  { id: 'b2-f7', word: 'Gegensatz', article: 'DER', plural: 'Gegensätze', phonetic: '[ˈɡeːɡn̩ˌzat͡s]', meaning: 'Sự tương phản, trái ngược', example: 'Sie sind im Gegensatz zu mir sehr schüchtern. (Họ rất rụt rè trái ngược hoàn toàn với tôi.)', theme: 'Gia đình', level: 'B2' }
];

// Map of Vietnamese word meanings to English for legacy compatibility
const legacyMeaningToEn: Record<string, string> = {
  'Tên': 'Name',
  'Tên gọi': 'First name',
  'Họ': 'Last name',
  'Biệt danh': 'Nickname',
  'Ngày sinh': 'Date of birth',
  'Tuổi': 'Age',
  'Địa chỉ': 'Address',
  'Đường phố': 'Street',
  'Thành phố': 'City',
  'Quốc gia': 'Country',
  'Mã bưu chính': 'Postal code',
  'Số điện thoại': 'Phone number',
  'Địa chỉ email': 'Email address',
  'Giới tính': 'Gender',
  'Nghề nghiệp': 'Occupation',
  'Quốc tịch': 'Nationality',
  'Tình trạng hôn nhân': 'Marital status',
  'Sở thích': 'Hobby',
  'Sinh nhật': 'Birthday',
  'Ngôn ngữ': 'Language',
  'Tiếng mẹ đẻ': 'Native language',
  'Ngoại ngữ': 'Foreign language',
  'Món ăn yêu thích': 'Favorite food',
  'Thủ đô': 'Capital',
  'Nguồn gốc, quê quán': 'Origin / Hometown',
  'Quận': 'District',
  'Trái Đất': 'Earth',
  'Bản đồ': 'Map',
  'Bản đồ thành phố': 'City map',
  'Sự chào mừng': 'Greeting',
  'Thông tin cá nhân': 'Personal details',
  'Tiểu sử': 'Profile',
  'Địa chỉ (thể thức ngắn)': 'Address (short)',

  // Family
  'Mẹ': 'Mother',
  'Bố': 'Father',
  'Anh trai': 'Brother',
  'Chị gái': 'Sister',
  'Đứa trẻ': 'Child',
  'Bà': 'Grandmother',
  'Ông': 'Grandfather',
  'Bố mẹ': 'Parents',
  'Con trai': 'Son',
  'Con gái': 'Daughter',
  'Cậu / Chú / Bác trai': 'Uncle',
  'Dì / Cô / Bác gái': 'Aunt',
  'Anh em họ nam': 'Cousin (male)',
  'Chị em họ nữ': 'Cousin (female)',
  'Chồng': 'Husband',
  'Vợ': 'Wife',
  'Em bé': 'Baby',
  'Gia gia đình': 'Family',
  'Ông bà': 'Grandparents',
  'Gia đình của...': 'Family of...',
  'Bố mẹ của...': 'Parents of...',
  'Bạn trai / Bạn bè nam': 'Boyfriend / Male friend',
  'Bạn gái / Bạn bè nữ': 'Girlfriend / Female friend',
  'Nhóm': 'Group',
  'Cùng với nhau, với nhau': 'Together',

  // School
  'Giáo viên nam': 'Teacher (male)',
  'Học sinh nam': 'Student (male)',
  'Lớp học': 'Classroom',
  'Quyển sách': 'Book',
  'Trường học': 'School',
  'Giáo viên nữ': 'Teacher (female)',
  'Học sinh nữ': 'Student (female)',
  'Phòng học': 'Classroom',
  'Bảng': 'Board',
  'Bàn': 'Table',
  'Ghế': 'Chair',
  'Vở': 'Notebook',
  'Bút chì': 'Pencil',
  'Bút bi': 'Ballpoint pen',
  'Cục tẩy': 'Eraser',
  'Cặp sách': 'Schoolbag',
  'Thước kẻ': 'Ruler',
  'Ba lô': 'Backpack',
  'Giấy': 'Paper',
  'Cặp học sinh': 'Schoolbag',
  'Điểm số': 'Grade',
  'Giờ giải lao': 'Break',
  'Môn học': 'Subject',
  'Môn Toán': 'Mathematics',
  'Tiếng Đức': 'German',
  'Tiếng Anh': 'English',
  'Nghệ thuật': 'Art',
  'Âm nhạc': 'Music',
  'Hiệu trưởng nam': 'Principal (male)',
  'Hiệu trưởng nữ': 'Principal (female)',
  'Bài kiểm tra / Kỳ thi': 'Exam / Test',
  'Bài thi': 'Test',
  'Bảng điểm': 'Report card',
  'Thời khoa biểu': 'Timetable',
  'Thời khóa biểu': 'Timetable',
  'Lịch sử': 'History',
  'Hóa học': 'Chemistry',
  'Sinh học': 'Biology',
  'Vật lý': 'Physics',
  'Địa lý': 'Geography',
  'Tin học': 'Computer Science',
  'Giờ học': 'Lesson',
  'Đại học': 'University',
  'Khuôn viên trường': 'Campus',
  'Thư viện': 'Library',
  'Phòng máy tính': 'Computer room',
  'Sân trường': 'Schoolyard',
  'Căng tin': 'Cafeteria',
  'Kiến thức': 'Knowledge',
  'Bài học': 'Lesson',
  'Gia sư': 'Tutor',
  'Kỳ thi tốt nghiệp': 'High school graduation exam',
  'Trường cao đẳng, đại học': 'College / University',
  'Phòng thí nghiệm': 'Laboratory',
  'Chứng chỉ ngôn ngữ': 'Language certificate',
  'Sự chứng minh': 'Proof / Demonstration',
  'Thi đỗ, bao gồm': 'Pass / Consist of',
  'Học bổng': 'Scholarship',
  'Thử nghiệm': 'Try out / Experiment',
  'Tốt nghiệp': 'Graduation',
  'Giáo dục': 'Education',
  'Nhấn mạnh': 'Emphasize'
};

// Map of Vietnamese example sentences in legacy dataset to English for high-fidelity English support
const legacyExampleToEn: Record<string, string> = {
  'Mein Name ist Hans.': 'My name is Hans.',
  'Mein Vorname ist Peter.': 'My first name is Peter.',
  'Müller ist ein häufiger Nachname.': 'Müller is a common last name.',
  'Mein Spitzname ist Max.': 'My nickname is Max.',
  'Bitte nennen Sie Ihr Geburtsdatum.': 'Please state your date of birth.',
  'Wie alt bist du?': 'How old are you?',
  'Meine Adresse ist in Berlin.': 'My address is in Berlin.',
  'Die Straße ist lang.': 'The street is long.',
  'Berlin ist eine Stadt.': 'Berlin is a city.',
  'Vietnam ist ein schönes Land.': 'Vietnam is a beautiful country.',
  'Wie ist Ihre Postleitzahl?': 'What is your postal code?',
  'Hier ist meine Telefonnummer.': 'Here is my phone number.',
  'Schicken Sie mir eine E-Mail.': 'Send me an email.',
  'Männlich oder weiblich.': 'Male or female.',
  'Was sind Sie von Beruf?': 'What is your profession?',
  'Ihre Nationalität bitte.': 'Your nationality, please.',
  'Ledig oder verheiratet?': 'Single or married?',
  'Mein Hobby ist Lesen.': 'My hobby is reading.',
  'Wann hast du Geburtstag?': 'When is your birthday?',
  'Ich lerne Deutsch.': 'I am learning German.',
  'Vietnamesisch ist meine Muttersprache.': 'Vietnamese is my native language.',
  'Englisch ist eine Fremdsprache.': 'English is a foreign language.',
  'Was ist dein Lieblingsessen?': 'What is your favorite food?',
  'Berlin ist die Hauptstadt von Deutschland.': 'Berlin is the capital of Germany.',
  'Meine Herkunft ist Vietnam.': 'My origin is Vietnam.',
  'Das Stadtviertel ist ruhig.': 'The district is quiet.',
  'Die Erde ist rund.': 'The Earth is round.',
  'Ich brauche eine Landkarte.': 'I need a map.',
  'Haben Sie einen Stadtplan?': 'Do you have a city map?',
  'Die Begrüßung war sehr herzlich.': 'The greeting was very warm.',
  'Bitte geben Sie Ihre Personalien an.': 'Please state your personal details.',
  'Mein Profil ist aktuell.': 'My profile is up to date.',
  'Như thế nào là Anschrift của bạn?': 'What is your address?',
  'Meine Mutter ist nett.': 'My mother is nice.',
  'Mein Vater arbeitet viel.': 'My father works a lot.',
  'Ich habe einen Bruder.': 'I have a brother.',
  'Meine Schwester ist klein.': 'My sister is small.',
  'Das Kind spielt im Garten.': 'The child plays in the garden.',
  'Meine Oma kocht gut.': 'My grandmother cooks well.',
  'Mein Opa liest die Zeitung.': 'My grandfather reads the newspaper.'
};

const NEW_B1_VOCABULARY_DATA: VocabularyWord[] = [
  // --- Thema: Politik ---
  {
    id: 'b1-pol-1', level: 'B1', theme: 'Politik', german: 'die Politik', article: 'die', plural: 'die Politiken',
    meaning_vi: 'Chính trị', meaning_en: 'politics',
    example_de: 'Die Politik des Landes muss sich ändern.',
    example_vi: 'Chính trị của đất nước cần phải thay đổi.',
    example_en: 'The country\'s politics must change.',
    word: 'Politik', meaning: 'Chính trị', example: 'Die Politik des Landes muss sich ändern.'
  },
  {
    id: 'b1-pol-2', level: 'B1', theme: 'Politik', german: 'die Gesellschaft', article: 'die', plural: 'die Gesellschaften',
    meaning_vi: 'Xã hội', meaning_en: 'society',
    example_de: 'Wir leben in einer modernen Gesellschaft.',
    example_vi: 'Chúng ta sống trong một xã hội hiện đại.',
    example_en: 'We live in a modern society.',
    word: 'Gesellschaft', meaning: 'Xã hội', example: 'Wir leben in einer modernen Gesellschaft.'
  },
  {
    id: 'b1-pol-3', level: 'B1', theme: 'Politik', german: 'die Demokratie', article: 'die', plural: 'die Demokratien',
    meaning_vi: 'Dân chủ', meaning_en: 'democracy',
    example_de: 'Deutschland ist eine stabile Demokratie.',
    example_vi: 'Đức là một nền dân chủ ổn định.',
    example_en: 'Germany is a stable democracy.',
    word: 'Demokratie', meaning: 'Dân chủ', example: 'Deutschland ist eine stabile Demokratie.'
  },
  {
    id: 'b1-pol-4', level: 'B1', theme: 'Politik', german: 'die Diktatur', article: 'die', plural: 'die Diktaturen',
    meaning_vi: 'Chế độ độc tài', meaning_en: 'dictatorship',
    example_de: 'In einer Diktatur haben die Bürger keine Freiheit.',
    example_vi: 'Trong một chế độ độc tài, người dân không có tự do.',
    example_en: 'In a dictatorship, citizens have no freedom.',
    word: 'Diktatur', meaning: 'Chế độ độc tài', example: 'In einer Diktatur haben die Bürger keine Freiheit.'
  },
  {
    id: 'b1-pol-5', level: 'B1', theme: 'Politik', german: 'die Wahl', article: 'die', plural: 'die Wahlen',
    meaning_vi: 'Cuộc bầu cử', meaning_en: 'election',
    example_de: 'Die nächste Wahl findet im September statt.',
    example_vi: 'Cuộc bầu cử tiếp theo diễn ra vào tháng Chín.',
    example_en: 'The next election takes place in September.',
    word: 'Wahl', meaning: 'Cuộc bầu cử', example: 'Die nächste Wahl findet im September statt.'
  },
  {
    id: 'b1-pol-6', level: 'B1', theme: 'Politik', german: 'der Politiker', article: 'der', plural: 'die Politiker',
    meaning_vi: 'Chính trị gia (nam)', meaning_en: 'politician (male)',
    example_de: 'Der Politiker spricht vor vielen Menschen.',
    example_vi: 'Chính trị gia nói chuyện trước nhiều người.',
    example_en: 'The politician speaks in front of many people.',
    word: 'Politiker', meaning: 'Chính trị gia (nam)', example: 'Der Politiker spricht vor vielen Menschen.'
  },
  {
    id: 'b1-pol-7', level: 'B1', theme: 'Politik', german: 'die Politikerin', article: 'die', plural: 'die Politikerinnen',
    meaning_vi: 'Chính trị gia (nữ)', meaning_en: 'politician (female)',
    example_de: 'Angela Merkel ist eine bekannte Politikerin.',
    example_vi: 'Angela Merkel là một chính trị gia nữ nổi tiếng.',
    example_en: 'Angela Merkel is a famous female politician.',
    word: 'Politikerin', meaning: 'Chính trị gia (nữ)', example: 'Angela Merkel ist eine bekannte Politikerin.'
  },
  {
    id: 'b1-pol-8', level: 'B1', theme: 'Politik', german: 'die Partei', article: 'die', plural: 'die Parteien',
    meaning_vi: 'Đảng', meaning_en: 'political party',
    example_de: 'Welche Partei wirst du wählen?',
    example_vi: 'Bạn sẽ bầu cho đảng nào?',
    example_en: 'Which party will you vote for?',
    word: 'Partei', meaning: 'Đảng', example: 'Welche Partei wirst du wählen?'
  },
  {
    id: 'b1-pol-9', level: 'B1', theme: 'Politik', german: 'die Regierung', article: 'die', plural: 'die Regierungen',
    meaning_vi: 'Chính phủ', meaning_en: 'government',
    example_de: 'Die Regierung beschließt neue Gesetze.',
    example_vi: 'Chính phủ quyết định các luật mới.',
    example_en: 'The government decides on new laws.',
    word: 'Regierung', meaning: 'Chính phủ', example: 'Die Regierung beschließt neue Gesetze.'
  },
  {
    id: 'b1-pol-10', level: 'B1', theme: 'Politik', german: 'das Gesetz', article: 'das', plural: 'die Gesetze',
    meaning_vi: 'Luật', meaning_en: 'law',
    example_de: 'Alle Bürger müssen das Gesetz beachten.',
    example_vi: 'Tất cả công dân phải tuân thủ pháp luật.',
    example_en: 'All citizens must respect the law.',
    word: 'Gesetz', meaning: 'Luật', example: 'Alle Bürger müssen das Gesetz beachten.'
  },
  {
    id: 'b1-pol-11', level: 'B1', theme: 'Politik', german: 'die Verfassung', article: 'die', plural: 'die Verfassungen',
    meaning_vi: 'Hiến pháp', meaning_en: 'constitution',
    example_de: 'Die Verfassung schützt unsere Rechte.',
    example_vi: 'Hiến pháp bảo vệ các quyền của chúng ta.',
    example_en: 'The constitution protects our rights.',
    word: 'Verfassung', meaning: 'Hiến pháp', example: 'Die Verfassung schützt our Rechte.'
  },
  {
    id: 'b1-pol-12', level: 'B1', theme: 'Politik', german: 'die Freiheit', article: 'die', plural: 'die Freiheiten',
    meaning_vi: 'Tự do', meaning_en: 'freedom',
    example_de: 'Pressefreiheit ist ein wichtiger Teil der Demokratie.',
    example_vi: 'Tự do báo chí là một phần quan trọng của nền dân chủ.',
    example_en: 'Freedom of the press is an important part of democracy.',
    word: 'Freiheit', meaning: 'Tự do', example: 'Pressefreiheit ist ein wichtiger Teil der Demokratie.'
  },
  {
    id: 'b1-pol-13', level: 'B1', theme: 'Politik', german: 'die Gleichheit', article: 'die', plural: 'die Gleichheiten',
    meaning_vi: 'Bình đẳng', meaning_en: 'equality',
    example_de: 'Die Gleichheit aller Menschen ist ein Grundrecht.',
    example_vi: 'Sự bình đẳng của mọi người là một quyền cơ bản.',
    example_en: 'The equality of all human beings is a basic right.',
    word: 'Gleichheit', meaning: 'Bình đẳng', example: 'Die Gleichheit aller Menschen ist ein Grundrecht.'
  },
  {
    id: 'b1-pol-14', level: 'B1', theme: 'Politik', german: 'die Menschenrechte', article: 'die', plural: 'die Menschenrechte',
    meaning_vi: 'Quyền con người', meaning_en: 'human rights',
    example_de: 'Wir müssen für die Menschenrechte kämpfen.',
    example_vi: 'Chúng ta phải đấu tranh cho quyền con người.',
    example_en: 'We must fight for human rights.',
    word: 'Menschenrechte', meaning: 'Quyền con người', example: 'Wir müssen für die Menschenrechte kämpfen.'
  },
  {
    id: 'b1-pol-15', level: 'B1', theme: 'Politik', german: 'die Macht', article: 'die', plural: 'die Mächte',
    meaning_vi: 'Quyền lực', meaning_en: 'power',
    example_de: 'Wisen ist Macht.',
    example_vi: 'Kiến thức là sức mạnh.',
    example_en: 'Knowledge is power.',
    word: 'Macht', meaning: 'Quyền lực', example: 'Wissen ist Macht.'
  },
  {
    id: 'b1-pol-16', level: 'B1', theme: 'Politik', german: 'der Staat', article: 'der', plural: 'die Staaten',
    meaning_vi: 'Nhà nước', meaning_en: 'state / nation',
    example_de: 'Der Staat unterstützt bedürftige Familien.',
    example_vi: 'Nhà nước hỗ trợ những gia đình khó khăn.',
    example_en: 'The state supports families in need.',
    word: 'Staat', meaning: 'Nhà nước', example: 'Der Staat unterstützt bedürftige Familien.'
  },
  {
    id: 'b1-pol-17', level: 'B1', theme: 'Politik', german: 'die Armee', article: 'die', plural: 'die Armeen',
    meaning_vi: 'Quân đội', meaning_en: 'army',
    example_de: 'Die Armee schützt das Land.',
    example_vi: 'Quân đội bảo vệ đất nước.',
    example_en: 'The army protects the country.',
    word: 'Armee', meaning: 'Quân đội', example: 'Die Armee schützt das Land.'
  },
  {
    id: 'b1-pol-18', level: 'B1', theme: 'Politik', german: 'die Polizei', article: 'die', plural: 'die Polizeien',
    meaning_vi: 'Cảnh sát', meaning_en: 'police',
    example_de: 'Rufen Sie sofort die Polizei!',
    example_vi: 'Hãy gọi cảnh sát ngay lập tức!',
    example_en: 'Call the police immediately!',
    word: 'Polizei', meaning: 'Cảnh sát', example: 'Rufen Sie sofort die Polizei!'
  },
  {
    id: 'b1-pol-19', level: 'B1', theme: 'Politik', german: 'der Terrorismus', article: 'der', plural: 'die Terrorismen',
    meaning_vi: 'Chủ nghĩa khủng bố', meaning_en: 'terrorism',
    example_de: 'Der Terrorismus bedroht den Weltfrieden.',
    example_vi: 'Chủ nghĩa khủng bố đe dọa hòa bình thế giới.',
    example_en: 'Terrorism threatens world peace.',
    word: 'Terrorismus', meaning: 'Chủ nghĩa khủng bố', example: 'Der Terrorismus bedroht den Weltfrieden.'
  },
  {
    id: 'b1-pol-20', level: 'B1', theme: 'Politik', german: 'der Konflikt', article: 'der', plural: 'die Konflikte',
    meaning_vi: 'Xung đột', meaning_en: 'conflict',
    example_de: 'Wir müssen den Konflikt friedlich lösen.',
    example_vi: 'Chúng ta phải giải quyết xung đợi bằng hòa bình.',
    example_en: 'We must solve the conflict peacefully.',
    word: 'Konflikt', meaning: 'Xung đột', example: 'Wir müssen den Konflikt friedlich lösen.'
  },

  // --- Thema: Gesellschaft & Sozialleben ---
  {
    id: 'b1-soc-1', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Verantwortung', article: 'die', plural: 'die Verantwortungen',
    meaning_vi: 'Trách nhiệm', meaning_en: 'responsibility',
    example_de: 'Wir alle tragen die Verantwortung für das Projekt.',
    example_vi: 'Tất cả chúng ta đều chịu trách nhiệm cho dự án này.',
    example_en: 'We all bear the responsibility for the project.',
    word: 'Verantwortung', meaning: 'Trách nhiệm', example: 'Wir alle tragen die Verantwortung für das Projekt.'
  },
  {
    id: 'b1-soc-2', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Gesellschaft', article: 'die', plural: 'die Gesellschaften',
    meaning_vi: 'Xã hội', meaning_en: 'society',
    example_de: 'Er leistet einen Beitrag für die Gesellschaft.',
    example_vi: 'Anh ấy đóng góp một phần cho xã hội.',
    example_en: 'He makes a contribution to society.',
    word: 'Gesellschaft', meaning: 'Xã hội', example: 'Er leistet einen Beitrag für die Gesellschaft.'
  },
  {
    id: 'b1-soc-3', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Gemeinnützigkeit', article: 'die', plural: 'die Gemeinnützigkeiten',
    meaning_vi: 'Tính vì cộng đồng', meaning_en: 'charitable status',
    example_de: 'Die Gemeinnützigkeit des Vereins wurde anerkannt.',
    example_vi: 'Tính chất vì cộng đồng của hiệp hội đã được công nhận.',
    example_en: 'The charitable status of the association was recognized.',
    word: 'Gemeinnützigkeit', meaning: 'Tính vì cộng đồng', example: 'Die Gemeinnützigkeit des Vereins wurde anerkannt.'
  },
  {
    id: 'b1-soc-4', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'das Ehrenamt', article: 'das', plural: 'die Ehrenämter',
    meaning_vi: 'Công việc tình nguyện', meaning_en: 'voluntary role',
    example_de: 'Sie engagiert sich sehr für das Ehrenamt.',
    example_vi: 'Cô ấy hoạt động rất năng nổ cho công việc tình nguyện.',
    example_en: 'She is very engaged in her voluntary role.',
    word: 'Ehrenamt', meaning: 'Công việc tình nguyện', example: 'Sie engagiert sich sehr für das Ehrenamt.'
  },
  {
    id: 'b1-soc-5', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Spende', article: 'die', plural: 'die Spenden',
    meaning_vi: 'Sự quyên góp', meaning_en: 'donation',
    example_de: 'Vielen Dank für Ihre großzügige Spende.',
    example_vi: 'Xin cảm ơn rất nhiều vì sự quyên góp hào phóng của bạn.',
    example_en: 'Thank you very much for your generous donation.',
    word: 'Spende', meaning: 'Sự quyên góp', example: 'Vielen Dank für Ihre großzügige Spende.'
  },
  {
    id: 'b1-soc-6', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'der Spender', article: 'der', plural: 'die Spender',
    meaning_vi: 'Người quyên góp (nam)', meaning_en: 'donor (male)',
    example_de: 'Der Spender möchte unerkannt bleiben.',
    example_vi: 'Người quyên góp muốn được giấu danh tính.',
    example_en: 'The donor wishes to remain anonymous.',
    word: 'Spender', meaning: 'Người quyên góp (nam)', example: 'Der Spender möchte unerkannt bleiben.'
  },
  {
    id: 'b1-soc-7', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Spenderin', article: 'die', plural: 'die Spenderinnen',
    meaning_vi: 'Người quyên góp (nữ)', meaning_en: 'donor (female)',
    example_de: 'Die Spenderin überreichte einen Scheck.',
    example_vi: 'Người quyên góp nữ đã trao một tấm séc.',
    example_en: 'The female donor handed over a check.',
    word: 'Spenderin', meaning: 'Người quyên góp (nữ)', example: 'Die Spenderin überreichte einen Scheck.'
  },
  {
    id: 'b1-soc-8', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Wohltätigkeit', article: 'die', plural: 'die Wohltätigkeiten',
    meaning_vi: 'Từ thiện', meaning_en: 'charity',
    example_de: 'Wohltätigkeit hilft armen Menschen in Not.',
    example_vi: 'Từ thiện giúp đỡ những người nghèo đang gặp khó khăn.',
    example_en: 'Charity helps poor people in need.',
    word: 'Wohltätigkeit', meaning: 'Từ thiện', example: 'Wohltätigkeit hilft armen Menschen in Not.'
  },
  {
    id: 'b1-soc-9', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'der Verein', article: 'der', plural: 'die Vereine',
    meaning_vi: 'Hiệp hội, câu lạc bộ', meaning_en: 'association / club',
    example_de: 'Er hat einen neuen Sportverein gegründet.',
    example_vi: 'Anh ấy đã thành lập một hiệp hội thể thao mới.',
    example_en: 'He founded a new sports association.',
    word: 'Verein', meaning: 'Hiệp hội, câu lạc bộ', example: 'Er hat einen neuen Sportverein gegründet.'
  },
  {
    id: 'b1-soc-10', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'der Freiwillige', article: 'der', plural: 'die Freiwilligen',
    meaning_vi: 'Người tình nguyện (nam)', meaning_en: 'volunteer (male)',
    example_de: 'Der Freiwillige arbeitet im sozialen Dienst.',
    example_vi: 'Người tình nguyện viên làm việc trong dịch vụ xã hội.',
    example_en: 'The male volunteer works in social services.',
    word: 'Freiwillige', meaning: 'Người tình nguyện (nam)', example: 'Der Freiwillige arbeitet im sozialen Dienst.'
  },
  {
    id: 'b1-soc-11', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Freiwillige', article: 'die', plural: 'die Freiwilligen',
    meaning_vi: 'Người tình nguyện (nữ)', meaning_en: 'volunteer (female)',
    example_de: 'Die Freiwillige unterrichtet Deutsch im Asylheim.',
    example_vi: 'Người tình nguyện viên nữ dạy tiếng Đức ở trại tị nạn.',
    example_en: 'The female volunteer teaches German at the asylum home.',
    word: 'Freiwillige', meaning: 'Người tình nguyện (nữ)', example: 'Die Freiwillige unterrichtet Deutsch im Asylheim.'
  },
  {
    id: 'b1-soc-12', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'der Umweltschutz', article: 'der', plural: 'die Umweltschutze',
    meaning_vi: 'Bảo vệ môi trường', meaning_en: 'environmental protection',
    example_de: 'Umweltschutz geht alle Bürger an.',
    example_vi: 'Bảo vệ môi trường liên quan tới mọi công dân.',
    example_en: 'Environmental protection concerns all citizens.',
    word: 'Umweltschutz', meaning: 'Bảo vệ môi trường', example: 'Umweltschutz geht alle Bürger an.'
  },
  {
    id: 'b1-soc-13', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Hilfe', article: 'die', plural: 'die Hilfen',
    meaning_vi: 'Sự giúp đỡ', meaning_en: 'assistance / help',
    example_de: 'Wir brauchen Ihre dringende Hilfe.',
    example_vi: 'Chúng tôi cần sự giúp đỡ khẩn cấp của bạn.',
    example_en: 'We need your urgent help.',
    word: 'Hilfe', meaning: 'sự giúp đỡ', example: 'Wir brauchen Ihre dringende Hilfe.'
  },
  {
    id: 'b1-soc-14', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Solidarität', article: 'die', plural: 'die Solidaritäten',
    meaning_vi: 'Tinh thần đoàn kết', meaning_en: 'solidarity',
    example_de: 'In dieser Krise ist Solidarität besonders wichtig.',
    example_vi: 'Trong cuộc khủng hoảng này, tình đoàn kết đặc biệt quan trọng.',
    example_en: 'Solidarity is particularly important in this crisis.',
    word: 'Solidarität', meaning: 'Tinh thần đoàn kết', example: 'In dieser Krise ist Solidarität besonders wichtig.'
  },
  {
    id: 'b1-soc-15', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Chancengleichheit', article: 'die', plural: 'die Chancengleichheiten',
    meaning_vi: 'Bình đẳng cơ hội', meaning_en: 'equal opportunity',
    example_de: 'Chancengleichheit ist die Basis einer gerechten Gesellschaft.',
    example_vi: 'Bình đẳng cơ hội là nền tảng của một xã hội công bằng.',
    example_en: 'Equal opportunity is the foundation of a fair society.',
    word: 'Chancengleichheit', meaning: 'Bình đẳng cơ hội', example: 'Chancengleichheit ist die Basis einer gerechten Gesellschaft.'
  },
  {
    id: 'b1-soc-16', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Charity', article: 'die', plural: 'die Charities',
    meaning_vi: 'Tổ chức từ thiện', meaning_en: 'charity organization',
    example_de: 'Die Gelder gehen komplett an eine Charity.',
    example_vi: 'Toàn bộ số tiền sẽ được gửi trực tiếp cho một tổ chức từ thiện.',
    example_en: 'The funds go entirely to a charity.',
    word: 'Charity', meaning: 'Tổ chức từ thiện', example: 'Die Gelder gehen komplett an eine Charity.'
  },
  {
    id: 'b1-soc-17', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'das Fundraising', article: 'das', plural: 'die Fundraisings',
    meaning_vi: 'Gây quỹ', meaning_en: 'fundraising',
    example_de: 'Das Fundraising brachte zehntausend Euro ein.',
    example_vi: 'Hoạt động gây quỹ đã thu về mười ngàn euro.',
    example_en: 'The fundraising generated ten thousand euros.',
    word: 'Fundraising', meaning: 'Gây quỹ', example: 'Das Fundraising brachte zehntausend Euro ein.'
  },
  {
    id: 'b1-soc-18', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'das Projekt', article: 'das', plural: 'die Projekte',
    meaning_vi: 'Dự án', meaning_en: 'project',
    example_de: 'Wir arbeiten an einem neuen Hilfsprojekt.',
    example_vi: 'Chúng tôi đang làm việc cho một dự án hỗ trợ mới.',
    example_en: 'We are working on a new relief project.',
    word: 'Projekt', meaning: 'Dự án', example: 'Wir arbeiten an einem neuen Hilfsprojekt.'
  },
  {
    id: 'b1-soc-19', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'der Hilfsfonds', article: 'der', plural: 'die Hilfsfonds',
    meaning_vi: 'Quỹ từ thiện', meaning_en: 'relief fund',
    example_de: 'Der Hilfsfonds unterstützt Erdbebenopfer.',
    example_vi: 'Quỹ hỗ trợ giúp đỡ các nạn nhân của trận động đất.',
    example_en: 'The relief fund supports earthquake victims.',
    word: 'Hilfsfonds', meaning: 'Quỹ từ thiện', example: 'Der Hilfsfonds unterstützt Erdbebenopfer.'
  },
  {
    id: 'b1-soc-20', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Unterstützung', article: 'die', plural: 'die Unterstützungen',
    meaning_vi: 'Sự hỗ trợ', meaning_en: 'support / backup',
    example_de: 'Vielen Dank für Ihre aktive Unterstützung.',
    example_vi: 'Xin cảm ơn rất nhiều vì sự hỗ trợ tích cực của bạn.',
    example_en: 'Thank you very much for your active support.',
    word: 'Unterstützung', meaning: 'Sự hỗ trợ', example: 'Vielen Dank für Ihre aktive Unterstützung.'
  },
  {
    id: 'b1-soc-21', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'das Sozialwerk', article: 'das', plural: 'die Sozialwerke',
    meaning_vi: 'Công tác xã hội', meaning_en: 'social service agency',
    example_de: 'Das Sozialwerk betreut Kinder aus armen Familien.',
    example_vi: 'Tổ chức công tác xã hội chăm sóc trẻ em từ các gia đình nghèo.',
    example_en: 'The social service agency cares for children from poor families.',
    word: 'Sozialwerk', meaning: 'Công tác xã hội', example: 'Das Sozialwerk betreut Kinder aus armen Familien.'
  },
  {
    id: 'b1-soc-22', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Organisation', article: 'die', plural: 'die Organisationen',
    meaning_vi: 'Tổ chức', meaning_en: 'organisation',
    example_de: 'Sie arbeitet bei einer großen internationalen Organisation.',
    example_vi: 'Cô ấy làm việc tại một tổ chức quốc tế lớn.',
    example_en: 'She works at a large international organisation.',
    word: 'Organisation', meaning: 'Tổ chức', example: 'Sie arbeitet bei einer großen internationalen Organisation.'
  },
  {
    id: 'b1-soc-23', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Hilfsbereitschaft', article: 'die', plural: 'die Hilfsbereitschaften',
    meaning_vi: 'Sự sẵn lòng giúp đỡ', meaning_en: 'helpfulness',
    example_de: 'Die Hilfsbereitschaft der Nachbarn war überwältigend.',
    example_vi: 'Sự sẵn lòng giúp đỡ của hàng xóm thật vô cùng to lớn.',
    example_en: 'The neighbors\' helpfulness was overwhelming.',
    word: 'Hilfsbereitschaft', meaning: 'Sự sẵn lòng giúp đỡ', example: 'Die Hilfsbereitschaft der Nachbarn war überwältigend.'
  },
  {
    id: 'b1-soc-24', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Bedürftigkeit', article: 'die', plural: 'die Bedürftigkeiten',
    meaning_vi: 'Sự thiếu thốn', meaning_en: 'deprivation / neediness',
    example_de: 'Finanzielle Bedürftigkeit ist ein großes Problem.',
    example_vi: 'Sự thiếu thốn tài chính là một vấn đề nghiêm trọng.',
    example_en: 'Financial neediness is a big problem.',
    word: 'Bedürftigkeit', meaning: 'Sự thiếu thốn', example: 'Finanzielle Bedürftigkeit ist ein großes Problem.'
  },
  {
    id: 'b1-soc-25', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Armut', article: 'die', plural: 'die Armuten',
    meaning_vi: 'Nghèo đói', meaning_en: 'poverty',
    example_de: 'Gemeinsam können wir die Armut bekämpfen.',
    example_vi: 'Cùng nhau, chúng ta có thể chống lại đói nghèo.',
    example_en: 'Together we can fight poverty.',
    word: 'Armut', meaning: 'Nghèo đói', example: 'Gemeinsam können wir die Armut bekämpfen.'
  },
  {
    id: 'b1-soc-26', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Spendenaktion', article: 'die', plural: 'die Spendenaktionen',
    meaning_vi: 'Chiến dịch quyên góp', meaning_en: 'donation campaign',
    example_de: 'Die Spendenaktion für das Tierheim läuft erfolgreich.',
    example_vi: 'Chiến dịch quyên góp cho trạm cứu hộ động vật đang diễn ra rất thành công.',
    example_en: 'The donation campaign for the animal shelter is running successfully.',
    word: 'Spendenaktion', meaning: 'Chiến dịch quyên góp', example: 'Die Spendenaktion für das Tierheim läuft erfolgreich.'
  },
  {
    id: 'b1-soc-27', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'der Wohltätigkeitsverein', article: 'der', plural: 'die Wohltätigkeitsvereine',
    meaning_vi: 'Câu lạc bộ từ thiện', meaning_en: 'charity club',
    example_de: 'Der Wohltätigkeitsverein sammelt warme Kleider.',
    example_vi: 'Câu lạc bộ từ thiện đang thu gom quần áo ấm.',
    example_en: 'The charity club is collecting warm clothes.',
    word: 'Wohltätigkeitsverein', meaning: 'Câu lạc bộ từ thiện', example: 'Der Wohltätigkeitsverein sammelt warme Kleider.'
  },
  {
    id: 'b1-soc-28', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Bedürftigenhilfe', article: 'die', plural: 'die Bedürftigenhilfen',
    meaning_vi: 'Giúp đỡ người nghèo', meaning_en: 'aid for the needy',
    example_de: 'Sie spenden wöchentlich an die Bedürftigenhilfe.',
    example_vi: 'Họ quyên góp hàng tuần cho quỹ giúp đỡ người nghèo.',
    example_en: 'They donate weekly to the aid for the needy.',
    word: 'Bedürftigenhilfe', meaning: 'Giúp đỡ người nghèo', example: 'Sie spenden wöchentlich an die Bedürftigenhilfe.'
  },
  {
    id: 'b1-soc-29', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'das Hilfsprojekt', article: 'das', plural: 'die Hilfsprojekte',
    meaning_vi: 'Dự án hỗ trợ', meaning_en: 'assistance project',
    example_de: 'Sie leiten das neue Hilfsprojekt in Vietnam.',
    example_vi: 'Họ đang điều hành một dự án hỗ trợ mới tại Việt Nam.',
    example_en: 'They manage the new assistance project in Vietnam.',
    word: 'Hilfsprojekt', meaning: 'Dự án hỗ trợ', example: 'Sie leiten das neue Hilfsprojekt in Vietnam.'
  },
  {
    id: 'b1-soc-30', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'der Hilfsdienst', article: 'der', plural: 'die Hilfsdienste',
    meaning_vi: 'Dịch vụ hỗ trợ', meaning_en: 'support service',
    example_de: 'Rufen Sie im Notfall den Hilfsdienst.',
    example_vi: 'Hãy gọi cho dịch vụ hỗ trợ trong tình huống khẩn cấp.',
    example_en: 'Call the support service in case of emergency.',
    word: 'Hilfsdienst', meaning: 'Dịch vụ hỗ trợ', example: 'Rufen Sie im Notfall den Hilfsdienst.'
  },
  {
    id: 'b1-soc-31', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'der Bazar', article: 'der', plural: 'die Bazare',
    meaning_vi: 'Chợ từ thiện', meaning_en: 'charity bazaar',
    example_de: 'Der Bazar für das Rote Kreuz brachte viel Geld.',
    example_vi: 'Phiên chợ từ thiện cho Hội Chữ thập đỏ đã quyên góp được rất nhiều tiền.',
    example_en: 'The charity bazaar for the Red Cross raised a lot of money.',
    word: 'Bazar', meaning: 'Chợ từ thiện', example: 'Der Bazar für das Rote Kreuz brachte viel Geld.'
  },
  {
    id: 'b1-soc-32', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'der Altruismus', article: 'der', plural: 'die Altruismen',
    meaning_vi: 'Chủ nghĩa vị tha', meaning_en: 'altruism',
    example_de: 'Der Altruismus ist ein ehrenhafter Charakterzug.',
    example_vi: 'Lòng vị tha là một nét tính cách rất đáng quý.',
    example_en: 'Altruism is an honorable personality trait.',
    word: 'Altruismus', meaning: 'Chủ nghĩa vị tha', example: 'Der Altruismus ist ein ehrenhafter Charakterzug.'
  },
  {
    id: 'b1-soc-33', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Stiftung', article: 'die', plural: 'die Stiftungen',
    meaning_vi: 'Quỹ, tổ chức từ thiện', meaning_en: 'foundation / trust fund',
    example_de: 'Die Stiftung vergibt Stipendien an talentierte Studenten.',
    example_vi: 'Quỹ từ thiện trao học bổng cho các sinh viên tài năng.',
    example_en: 'The foundation awards scholarships to talented students.',
    word: 'Stiftung', meaning: 'Quỹ, tổ chức từ thiện', example: 'Die Stiftung vergibt Stipendien an talentierte Studenten.'
  },
  {
    id: 'b1-soc-34', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Spendensammlung', article: 'die', plural: 'die Spendensammlungen',
    meaning_vi: 'Thu thập quyên góp', meaning_en: 'donation collection',
    example_de: 'Die Spendensammlung brachte viel Kleidung ein.',
    example_vi: 'Chiến dịch thu gom hiện vật quyên góp đã nhận về rất nhiều quần áo.',
    example_en: 'The donation collection gathered a lot of clothing.',
    word: 'Spendensammlung', meaning: 'Thu thập quyên góp', example: 'Die Spendensammlung brachte viel Kleidung ein.'
  },
  {
    id: 'b1-soc-35', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Hilfsorganisation', article: 'die', plural: 'die Hilfsorganisationen',
    meaning_vi: 'Tổ chức cứu trợ', meaning_en: 'relief organization',
    example_de: 'Die Hilfsorganisation liefert Lebensmittel ins Krisengebiet.',
    example_vi: 'Tổ chức cứu trợ cung cấp thực phẩm tới các vùng gặp thiên tai.',
    example_en: 'The relief organization delivers food to the crisis area.',
    word: 'Hilfsorganisation', meaning: 'Tổ chức cứu trợ', example: 'Die Hilfsorganisation liefert Lebensmittel ins Krisengebiet.'
  },
  {
    id: 'b1-soc-36', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'das Altenheim', article: 'das', plural: 'die Altenheime',
    meaning_vi: 'Nhà dưỡng lão', meaning_en: 'nursing home / retirement home',
    example_de: 'Er arbeitet freiwillig in einem Altenheim.',
    example_vi: 'Anh ấy làm việc tình nguyện tại một nhà dưỡng lão.',
    example_en: 'He works as a volunteer in a nursing home.',
    word: 'Altenheim', meaning: 'Nhà dưỡng lão', example: 'Er arbeitet freiwillig in einem Altenheim.'
  },
  {
    id: 'b1-soc-37', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'der Ruhestand', article: 'der', plural: 'die Ruhestände',
    meaning_vi: 'Sự về hưu', meaning_en: 'retirement',
    example_de: 'Er freut sich auf seinen wohlverdienten Ruhestand.',
    example_vi: 'Ông ấy mong chờ kỳ nghỉ hưu hoàn toàn xứng đáng của mình.',
    example_en: 'He is looking forward to his well-deserved retirement.',
    word: 'Ruhestand', meaning: 'Sự về hưu', example: 'Er freut sich auf seinen wohlverdienten Ruhestand.'
  },
  {
    id: 'b1-soc-38', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Lebensqualität', article: 'die', plural: 'die Lebensqualitäten',
    meaning_vi: 'Chất lượng cuộc sống', meaning_en: 'quality of life',
    example_de: 'Gesunde Ernährung verbessert die Lebensqualität.',
    example_vi: 'Chế độ ăn lành mạnh giúp nâng cao chất lượng cuộc sống.',
    example_en: 'A healthy diet improves the quality of life.',
    word: 'Lebensqualität', meaning: 'Chất lượng cuộc sống', example: 'Gesunde Ernährung verbessert die Lebensqualität.'
  },
  {
    id: 'b1-soc-39', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'der Teenager', article: 'der', plural: 'die Teenager',
    meaning_vi: 'Thanh thiếu niên', meaning_en: 'teenager',
    example_de: 'Viele Teenager nutzen heute soziale Netzwerke.',
    example_vi: 'Nhiều thanh thiếu niên hiện nay sử dụng mạng xã hội.',
    example_en: 'Many teenagers use social networks today.',
    word: 'Teenager', meaning: 'Thanh thiếu niên', example: 'Viele Teenager nutzen heute soziale Netzwerke.'
  },
  {
    id: 'b1-soc-40', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'der Jugendliche', article: 'der', plural: 'die Jugendlichen',
    meaning_vi: 'Thanh thiếu niên / Giới trẻ', meaning_en: 'youth / young person',
    example_de: 'Der Jugendliche engagiert sich im Sportclub.',
    example_vi: 'Người bạn trẻ năng nổ tham gia ở câu lạc bộ thể thao.',
    example_en: 'The youth is actively involved in the sports club.',
    word: 'Jugendliche', meaning: 'Thanh thiếu niên', example: 'Der Jugendliche engagiert sich im Sportclub.'
  },
  {
    id: 'b1-soc-41', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'der Beitrag', article: 'der', plural: 'die Beiträge',
    meaning_vi: 'Sự đóng góp', meaning_en: 'contribution',
    example_de: 'Jeder Beitrag hilft uns weiter.',
    example_vi: 'Mọi sự đóng góp đều giúp chúng ta tiến xa hơn.',
    example_en: 'Every contribution helps us move forward.',
    word: 'Beitrag', meaning: 'Sự đóng góp', example: 'Jeder Beitrag hilft uns weiter.'
  },
  {
    id: 'b1-soc-42', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'der Schutz', article: 'der', plural: 'die Schutze',
    meaning_vi: 'Sự bảo vệ', meaning_en: 'protection',
    example_de: 'Der Schutz der Privatsphäre ist ein Grundrecht.',
    example_vi: 'Sự bảo vệ quyền riêng tư là một quyền cơ bản.',
    example_en: 'The protection of privacy is a fundamental right.',
    word: 'Schutz', meaning: 'Bảo vệ', example: 'Der Schutz der Privatsphäre ist ein Grundrecht.'
  },
  {
    id: 'b1-soc-43', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'der Einwohner', article: 'der', plural: 'die Einwohner',
    meaning_vi: 'Cư dân / Người dân', meaning_en: 'inhabitant / citizen',
    example_de: 'Die Stadt hat über eine Million Einwohner.',
    example_vi: 'Thành phố có trên một triệu cư dân sinh sống.',
    example_en: 'The city has over a million inhabitants.',
    word: 'Einwohner', meaning: 'Cư dân', example: 'Die Stadt hat über eine Million Einwohner.'
  },
  {
    id: 'b1-soc-44', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Bevölkerung', article: 'die', plural: 'die Bevölkerungen',
    meaning_vi: 'Dân số, dân cư', meaning_en: 'population / community',
    example_de: 'Die Bevölkerung wächst jedes Jahr stetig.',
    example_vi: 'Dân số tăng trưởng đều đặn mỗi năm.',
    example_en: 'The population is growing steadily every year.',
    word: 'Bevölkerung', meaning: 'Dân số, dân cư', example: 'Die Bevölkerung wächst jedes Jahr stetig.'
  },
  {
    id: 'b1-soc-45', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'der Auswanderer', article: 'der', plural: 'die Auswanderer',
    meaning_vi: 'Người di cư / xuất ngoại', meaning_en: 'emigrant',
    example_de: 'Der Auswanderer sucht ein neues Leben in Kanada.',
    example_vi: 'Người di cư đang tìm kiếm một cuộc sống mới ở Canada.',
    example_en: 'The emigrant seeks a new life in Canada.',
    word: 'Auswanderer', meaning: 'Người di cư', example: 'Der Auswanderer sucht ein neues Leben in Kanada.'
  },
  {
    id: 'b1-soc-46', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Einreise', article: 'die', plural: 'die Einreisen',
    meaning_vi: 'Sự nhập cảnh', meaning_en: 'entry / arrival',
    example_de: 'Die Einreise in dieses Land erfordert ein Visum.',
    example_vi: 'Nhập cảnh vào đất nước này yêu cầu phải có thị thực.',
    example_en: 'Entry into this country requires a visa.',
    word: 'Einreise', meaning: 'Sự nhập cảnh', example: 'Die Einreise in dieses Land erfordert ein Visum.'
  },
  {
    id: 'b1-soc-47', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Einreiseerlaubnis', article: 'die', plural: 'die Einreiseerlaubnisse',
    meaning_vi: 'Giấy phép nhập cảnh', meaning_en: 'entry permit',
    example_de: 'Haben Sie bereits Ihre dringen Einreiseerlaubnis erhalten?',
    example_vi: 'Bạn đã nhận được giấy phép nhập cảnh khẩn cấp chưa?',
    example_en: 'Have you already received your entry permit?',
    word: 'Einreiseerlaubnis', meaning: 'Giấy phép nhập cảnh', example: 'Haben Sie bereits Ihre dringen Einreiseerlaubnis erhalten?'
  },
  {
    id: 'b1-soc-48', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Ausländerbehörde', article: 'die', plural: 'die Ausländerbehörden',
    meaning_vi: 'Sở ngoại kiều', meaning_en: 'immigration office',
    example_de: 'Morgen muss ich zur Ausländerbehörde gehen.',
    example_vi: 'Ngày mai tôi phải tới gặp sở ngoại kiều.',
    example_en: 'Tomorrow I have to go to the immigration office.',
    word: 'Ausländerbehörde', meaning: 'Sở ngoại kiều', example: 'Morgen muss ich zur Ausländerbehörde gehen.'
  },
  {
    id: 'b1-soc-49', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'der Bewohner', article: 'der', plural: 'die Bewohner',
    meaning_vi: 'Cư dân đầu mục', meaning_en: 'resident',
    example_de: 'Die Bewohner des Hauses teilen sich einen Garten.',
    example_vi: 'Những người dân sống chung một tòa nhà chia sẻ một khu vườn.',
    example_en: 'The residents of the building share a garden.',
    word: 'Bewohner', meaning: 'Cư dân', example: 'Die Bewohner des Hauses teilen sich einen Garten.'
  },
  {
    id: 'b1-soc-50', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'der Durchschnitt', article: 'der', plural: 'die Durchschnitte',
    meaning_vi: 'Mức trung bình', meaning_en: 'average',
    example_de: 'Das Einkommen liegt über dem Durchschnitt.',
    example_vi: 'Thu nhập hiện tại nằm ở trên mức trung bình.',
    example_en: 'The income is above the average.',
    word: 'Durchschnitt', meaning: 'Mức trung bình', example: 'Das Einkommen liegt über dem Durchschnitt.'
  },
  {
    id: 'b1-soc-51', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Lösung', article: 'die', plural: 'die Lösungen',
    meaning_vi: 'Giải pháp / Đáp án', meaning_en: 'solution',
    example_de: 'Wir müssen schnell eine friedliche Lösung finden.',
    example_vi: 'Chúng ta phải nhanh chóng tìm ra một giải pháp hòa bình.',
    example_en: 'We must quickly find a peaceful solution.',
    word: 'Lösung', meaning: 'Giải pháp, đáp án', example: 'Wir müssen schnell eine friedliche Lösung finden.'
  },
  {
    id: 'b1-soc-52', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'das Rote Kreuz', article: 'das', plural: 'die Roten Kreuze',
    meaning_vi: 'Hội Chữ thập đỏ', meaning_en: 'Red Cross',
    example_de: 'Er engagiert sich ehrenamtlich beim Roten Kreuz.',
    example_vi: 'Anh ấy tham gia tình nguyện tại Hội Chữ thập đỏ.',
    example_en: 'He volunteers for the Red Cross.',
    word: 'Rote Kreuz', meaning: 'Hội Chữ thập đỏ', example: 'Er engagiert sich ehrenamtlich beim Roten Kreuz.'
  },
  {
    id: 'b1-soc-53', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'sozial', article: 'none',
    meaning_vi: 'Thuộc về xã hội / Có tính xã hội', meaning_en: 'social',
    example_de: 'In unserem Land gibt es enge soziale Netzwerke.',
    example_vi: 'Ở đất nước chúng tôi có tổ chức mạng lưới xã hội rất khăng khít.',
    example_en: 'In our country we have close social networks.',
    word: 'sozial', meaning: 'Thuộc về xã hội', example: 'In unserem Land gibt es enge soziale Netzwerke.'
  },
  {
    id: 'b1-soc-54', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'arm', article: 'none',
    meaning_vi: 'Nghèo', meaning_en: 'poor',
    example_de: 'Früher war er arm, aber er hat fleißig gearbeitet.',
    example_vi: 'Trước đây anh ấy rất nghèo, nhưng anh ấy rất chăm chỉ.',
    example_en: 'He used to be poor, but he worked hard.',
    word: 'arm', meaning: 'Nghèo', example: 'Früher war er arm, aber er hat fleißig gearbeitet.'
  },
  {
    id: 'b1-soc-55', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Stelle', article: 'die', plural: 'die Stellen',
    meaning_vi: 'Nơi / Chỗ / Địa vị / Công việc', meaning_en: 'position / post',
    example_de: 'Ich habe mich für eine neue Stelle beworben.',
    example_vi: 'Tôi vừa ứng tuyển cho một vị trí công việc mới.',
    example_en: 'I applied for a new position.',
    word: 'Stelle', meaning: 'Nơi, chỗ, địa vị', example: 'Ich habe mich für eine neue Stelle beworben.'
  },
  {
    id: 'b1-soc-56', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'der Einfluss', article: 'der', plural: 'die Einflüsse',
    meaning_vi: 'Sự ảnh hưởng', meaning_en: 'influence',
    example_de: 'Er hat einen goßen Einfluss auf die Politik.',
    example_vi: 'Anh ấy có tầm ảnh hưởng lớn đối với nền chính trị.',
    example_en: 'He has a huge influence on politics.',
    word: 'Einfluss', meaning: 'Sự ảnh hưởng', example: 'Er hat einen goßen Einfluss auf die Politik.'
  },
  {
    id: 'b1-soc-57', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Kritik', article: 'die', plural: 'die Kritiken',
    meaning_vi: 'Sự chỉ trích, phê bình', meaning_en: 'criticism',
    example_de: 'Wir müssen konstruktive Kritik akzeptieren.',
    example_vi: 'Chúng ta phải học cách chấp nhận sự chỉ trích mang tính xây dựng.',
    example_en: 'We must accept constructive criticism.',
    word: 'Kritik', meaning: 'Sự chỉ trích, phê bình', example: 'Wir müssen konstruktive Kritik akzeptieren.'
  },
  {
    id: 'b1-soc-58', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Forderung', article: 'die', plural: 'die Forderungen',
    meaning_vi: 'Sự yêu cầu, đòi hỏi', meaning_en: 'demand / claim',
    example_de: 'Die Gewerkschaft stellt eine neue Forderung nach mehr Lohn.',
    example_vi: 'Công đoàn đưa ra một yêu cầu mới đòi hỏi tăng thêm lương.',
    example_en: 'The trade union puts forward a new demand for more wages.',
    word: 'Forderung', meaning: 'Sự yêu cầu, đòi hỏi', example: 'Die Gewerkschaft stellt eine neue Forderung nach mehr Lohn.'
  },
  {
    id: 'b1-soc-59', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Versammlung', article: 'die', plural: 'die Versammlungen',
    meaning_vi: 'Đại hội / Buổi họp', meaning_en: 'assembly / meeting',
    example_de: 'Die Versammlung findet heute Nachmittag in der Aula statt.',
    example_vi: 'Đại hội diễn ra chiều nay tại giảng đường lớn học khu.',
    example_en: 'The assembly takes place this afternoon in the main hall.',
    word: 'Versammlung', meaning: 'Đại hội, buổi họp', example: 'Die Versammlung findet heute Nachmittag in der Aula statt.'
  },
  {
    id: 'b1-soc-60', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Teilnahme', article: 'die', plural: 'die Teilnahmen',
    meaning_vi: 'Sự tham gia', meaning_en: 'participation',
    example_de: 'Ihre Teilnahme an der Umfrage ist freiwillig.',
    example_vi: 'Sự tham gia khảo sát của bạn hoàn toàn tự nguyện.',
    example_en: 'Your participation in the survey is voluntary.',
    word: 'Teilnahme', meaning: 'Sự tham gia', example: 'Ihre Teilnahme an der Umfrage ist freiwillig.'
  },
  {
    id: 'b1-soc-61', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Mehrheit', article: 'die', plural: 'die Mehrheiten',
    meaning_vi: 'Đa số, phần lớn', meaning_en: 'majority',
    example_de: 'Die Mehrheit der Bürger stimmte für das neue Gesetz.',
    example_vi: 'Đa số các công dân đã đồng thuận bầu cho bộ luật mới.',
    example_en: 'The majority of citizens voted for the new law.',
    word: 'Mehrheit', meaning: 'Đa số, phần lớn', example: 'Die Mehrheit der Bürger stimmte für das neue Gesetz.'
  },
  {
    id: 'b1-soc-62', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Presse', article: 'die', plural: 'die Pressen',
    meaning_vi: 'Báo chí / Thông tấn', meaning_en: 'press / media',
    example_de: 'Die freie Presse ist unverzichtbar für eine gute Demokratie.',
    example_vi: 'Báo chí tự do là không thể thiếu cho một nền dân chủ lành mạnh.',
    example_en: 'The free press is indispensable for a good democracy.',
    word: 'Presse', meaning: 'Báo chí, thông tấn', example: 'Die freie Presse ist unverzichtbar für eine gute Demokratie.'
  },
  {
    id: 'b1-soc-63', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Rede', article: 'die', plural: 'die Reden',
    meaning_vi: 'Bài phát biểu', meaning_en: 'speech',
    example_de: 'Der Präsident hält eine wichtige Rede im Fernsehen.',
    example_vi: 'Tổng thống có bài phát biểu quan trọng trên sóng truyền hình.',
    example_en: 'The president is delivering an important speech on TV.',
    word: 'Rede', meaning: 'Bài phát biểu', example: 'Der Präsident hält eine wichtige Rede im Fernsehen.'
  },
  {
    id: 'b1-soc-64', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'streiken', article: 'none',
    meaning_vi: 'Đình công / Biểu tình', meaning_en: 'to strike / go on strike',
    example_de: 'Die Lokführer herrscht und sie streiken wieder.',
    example_vi: 'Đội ngũ lái tàu hỏa đang tổ chức đình công trở lại.',
    example_en: 'The train drivers are on strike again.',
    word: 'streiken', meaning: 'Đình công, biểu tình', example: 'Die Lokführer herrscht und sie streiken wieder.'
  },
  {
    id: 'b1-soc-65', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Ausgabe', article: 'die', plural: 'die Ausgaben',
    meaning_vi: 'Sự xuất bản / Phiên bản', meaning_en: 'edition / publication',
    example_de: 'Ich lese die heutige Ausgabe der Zeitung.',
    example_vi: 'Tôi đang đọc cuốn báo chí phiên bản của ngày hôm nay.',
    example_en: 'I am reading today\'s edition of the newspaper.',
    word: 'Ausgabe', meaning: 'Sự xuất bản', example: 'Ich lese die heutige Ausgabe der Zeitung.'
  },
  {
    id: 'b1-soc-66', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Schlagzeile', article: 'die', plural: 'die Schlagzeilen',
    meaning_vi: 'Tiêu đề / Tít nóng', meaning_en: 'headline',
    example_de: 'Diese Schlagzeile sorgt heute für viel Aufsehen.',
    example_vi: 'Dòng tiêu đề này đang làm xôn xao dư luận ngày hôm nay.',
    example_en: 'This headline is causing a big stir today.',
    word: 'Schlagzeile', meaning: 'Tiêu đề', example: 'Diese Schlagzeile sorgt heute für viel Aufsehen.'
  },
  {
    id: 'b1-soc-67', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'das Institut', article: 'das', plural: 'die Institute',
    meaning_vi: 'Tổ chức, viện', meaning_en: 'institute',
    example_de: 'Das Goethe-Institut fördert die deutsche Sprache.',
    example_vi: 'Viện Goethe hỗ trợ và thúc đẩy việc lan tỏa giảng dạy tiếng Đức.',
    example_en: 'The Goethe Institute promotes the German language.',
    word: 'Institut', meaning: 'Tổ chức, viện', example: 'Das Goethe-Institut fördert die deutsche Sprache.'
  },
  {
    id: 'b1-soc-68', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Nachbarschaft', article: 'die', plural: 'die Nachbarschaften',
    meaning_vi: 'Tình hàng xóm / Khu dân cư', meaning_en: 'neighborhood',
    example_de: 'In unserer ruhigen Nachbarschaft helfen sich alle gegenseitig.',
    example_vi: 'Ở khu dân cư yên bình của chúng tôi mọi người giúp trợ lẫn nhau.',
    example_en: 'In our quiet neighborhood, everyone helps each other.',
    word: 'Nachbarschaft', meaning: 'Tình hàng xóm, khu dân cư', example: 'In unserer ruhigen Nachbarschaft helfen sich alle gegenseitig.'
  },
  {
    id: 'b1-soc-69', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Freiheit', article: 'die', plural: 'die Freiheiten',
    meaning_vi: 'Tự do', meaning_en: 'freedom',
    example_de: 'Die Freiheit des Denkens ist ein hohes Gut.',
    example_vi: 'Tự do trong tư tưởng là một tài sản vô giá.',
    example_en: 'Freedom of thought is a valuable asset.',
    word: 'Freiheit', meaning: 'Tự do', example: 'Die Freiheit des Denkens ist ein hohes Gut.'
  },
  {
    id: 'b1-soc-70', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'der Frieden', article: 'der', plural: 'die Frieden',
    meaning_vi: 'Hòa bình', meaning_en: 'peace',
    example_de: 'Alle Völker wünschen sich weltweit dauerhaften Frieden.',
    example_vi: 'Mọi quốc gia thế giới đều ước ao một nền hòa bình lâu dài.',
    example_en: 'All nations wish for lasting peace worldwide.',
    word: 'Frieden', meaning: 'Hòa bình', example: 'Alle Völker wünschen sich weltweit dauerhaften Frieden.'
  },
  {
    id: 'b1-soc-71', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'der Kompromiss', article: 'der', plural: 'die Kompromisse',
    meaning_vi: 'Sự thỏa hiệp / Thống nhất', meaning_en: 'compromise',
    example_de: 'Nach langen Verhandlungen fanden wir einen Kompromiss.',
    example_vi: 'Sau cuộc thảo luận dài chúng tôi đã thống nhất sự thỏa hiệp.',
    example_en: 'After long negotiations, we found a compromise.',
    word: 'Kompromiss', meaning: 'Sự thỏa hiệp', example: 'Nach langen Verhandlungen fanden wir einen Kompromiss.'
  },
  {
    id: 'b1-soc-72', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'der Streik', article: 'der', plural: 'die Streiks',
    meaning_vi: 'Cuộc đình công', meaning_en: 'strike',
    example_de: 'Der Streik legte den gesamten Bahnverkehr lahm.',
    example_vi: 'Cuộc đình công phá hoại đóng băng toàn bộ hệ thống giao thông đường sắt.',
    example_en: 'The strike paralyzed the entire rail traffic.',
    word: 'Streik', meaning: 'Cuộc đình công', example: 'Der Streik legte den gesamten Bahnverkehr lahm.'
  },
  {
    id: 'b1-soc-73', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Sozialhilfe', article: 'die', plural: 'die Sozialhilfen',
    meaning_vi: 'Phúc lợi xã hội', meaning_en: 'social assistance / welfare benefits',
    example_de: 'Er lebt vorübergehend von staatlicher Sozialhilfe.',
    example_vi: 'Anh ấy đang tạm thời sống nhờ tiền trợ cấp phúc lợi xã hội nhà nước.',
    example_en: 'He temporarily lives on social assistance benefits.',
    word: 'Sozialhilfe', meaning: 'Phúc lợi xã hội', example: 'Er lebt vorübergehend von staatlicher Sozialhilfe.'
  },
  {
    id: 'b1-soc-74', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Bildung', article: 'die', plural: 'die Bildungen',
    meaning_vi: 'Giáo dục / Học thức', meaning_en: 'education',
    example_de: 'Gute Bildung ist der Schlüssel zur erfolgreichen Karriere.',
    example_vi: 'Nền giáo dục tốt là chìa khóa mở đường cho sự nghiệp thành công.',
    example_en: 'Good education is the key to a successful career.',
    word: 'Bildung', meaning: 'Giáo dục', example: 'Gute Bildung ist der Schlüssel zur erfolgreichen Karriere.'
  },
  {
    id: 'b1-soc-75', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'der Bekannte', article: 'der', plural: 'die Bekannten',
    meaning_vi: 'Người quen (nam)', meaning_en: 'acquaintance (male)',
    example_de: 'Er ist kein enger Freund, sondern nur ein Bekannte.',
    example_vi: 'Anh ấy không phải là bạn chí cốt, chỉ đơn giản là người quen.',
    example_en: 'He is not a close friend, but rather just an acquaintance.',
    word: 'Bekannte', meaning: 'Người quen', example: 'Er ist kein enger Freund, sondern nur ein Bekannte.'
  },
  {
    id: 'b1-soc-76', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Bekannte', article: 'die', plural: 'die Bekannten',
    meaning_vi: 'Người quen (nữ)', meaning_en: 'acquaintance (female)',
    example_de: 'Eine Bekannte hilft mir bei der Vorbereitung für das Fest.',
    example_vi: 'Một người quen nữ đang hỗ trợ tôi chuẩn bị tươm tất cho ngày hội.',
    example_en: 'A female acquaintance is helping me prepare for the festival.',
    word: 'Bekannte', meaning: 'Người quen (nữ)', example: 'Eine Bekannte hilft mir bei der Vorbereitung für das Fest.'
  },
  {
    id: 'b1-soc-77', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'der Behinderte', article: 'der', plural: 'die Behinderten',
    meaning_vi: 'Người tàn tật / khuyết tật', meaning_en: 'disabled person (male)',
    example_de: 'Der Behinderte fährt mit einem speziellen Rollstuhl.',
    example_vi: 'Người bạn khuyết tật đang di chuyển bằng chiếc xe lăn được thiết kế chuyên dụng.',
    example_en: 'The disabled person rides with a special wheelchair.',
    word: 'Behinderte', meaning: 'Người tàn tật', example: 'Der Behinderte fährt mit einem speziellen Rollstuhl.'
  },
  {
    id: 'b1-soc-78', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Privatsphäre', article: 'die', plural: 'die Privatsphären',
    meaning_vi: 'Sự riêng tư', meaning_en: 'privacy',
    example_de: 'Internetnutzer sollten ihre Privatsphäre gut schützen.',
    example_vi: 'Người dùng Internet nên biết cách bảo vệ bảo mật sự riêng tư của mình.',
    example_en: 'Internet users should protect their privacy well.',
    word: 'Privatsphäre', meaning: 'Sự riêng tư', example: 'Internetnutzer sollten ihre Privatsphäre gut schützen.'
  },
  {
    id: 'b1-soc-79', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Behinderung', article: 'die', plural: 'die Behinderungen',
    meaning_vi: 'Khuyết tật / Sự khiếm khuyết', meaning_en: 'disability / physical impairment',
    example_de: 'Sie meistert ihr Berufsleben trotz ihrer Behinderung.',
    example_vi: 'Cô ấy vẫn hoàn toàn làm chủ cuộc sống công việc bất chấp khiếm khuyết thể chất.',
    example_en: 'She masters her professional life despite her disability.',
    word: 'Behinderung', meaning: 'Khuyết tật', example: 'Sie meistert ihr Berufsleben trotz ihrer Behinderung.'
  },
  {
    id: 'b1-soc-80', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Umfrage', article: 'die', plural: 'die Umfragen',
    meaning_vi: 'Cuộc khảo sát / Thăm dò', meaning_en: 'survey / opinion poll',
    example_de: 'Das Institut führt eine landesweite Umfrage durch.',
    example_vi: 'Cơ quan đang tổ chức một cuộc khảo sát thăm dò ý kiến trên phạm vi toàn diện quốc gia.',
    example_en: 'The institute is conducting a nationwide survey.',
    word: 'Umfrage', meaning: 'Cuộc khảo sát', example: 'Das Institut führt eine landesweite Umfrage durch.'
  },
  {
    id: 'b1-soc-81', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Infrastruktur', article: 'die', plural: 'die Infrastrukturen',
    meaning_vi: 'Cơ sở hạ tầng', meaning_en: 'infrastructure',
    example_de: 'Der Ausbau der Infrastruktur ist staatlich gefördert.',
    example_vi: 'Dự án đầu tư mở rộng nâng cấp cơ sở hạ tầng được hỗ trợ kinh phí quốc gia.',
    example_en: 'The expansion of infrastructure is publicly funded.',
    word: 'Infrastruktur', meaning: 'Cơ sở hạ tầng', example: 'Der Ausbau der Infrastruktur ist staatlich gefördert.'
  },
  {
    id: 'b1-soc-82', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'der Bürger', article: 'der', plural: 'die Bürger',
    meaning_vi: 'Người dân / Công dân', meaning_en: 'citizen',
    example_de: 'Die Rechte der Bürger sind durch die Verfassung geschützt.',
    example_vi: 'Các quyền căn bản tự nhiên của người dân do hiến pháp bảo hộ.',
    example_en: 'The citizens\' rights are protected by the constitution.',
    word: 'Bürger', meaning: 'Người dân, công dân', example: 'Die Rechte der Bürger sind durch die Verfassung geschützt.'
  },
  {
    id: 'b1-soc-83', level: 'die Öffentlichkeit', level_1: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Öffentlichkeit', article: 'die', plural: 'die Öffentlichkeiten',
    meaning_vi: 'Công chúng, cộng đồng', meaning_en: 'public',
    example_de: 'Die Information gelangte versehentlich an die Öffentlichkeit.',
    example_vi: 'Nguồn thông tin đã bị vô tình rò rỉ ra ngoài công chúng.',
    example_en: 'The information accidentally reached the public.',
    word: 'Öffentlichkeit', meaning: 'Công chúng, cộng đồng', example: 'Die Information gelangte versehentlich an die Öffentlichkeit.'
  },
  {
    id: 'b1-soc-84', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'populär', article: 'none',
    meaning_vi: 'Phổ biến / Nổi tiếng', meaning_en: 'popular',
    example_de: 'Dieser Trend ist besonders bei Jugendlichen populär.',
    example_vi: 'Trào lưu này đặc biệt phổ biến trong giới thanh thiếu niên.',
    example_en: 'This trend is particularly popular among youths.',
    word: 'populär', meaning: 'Phổ biến, nổi tiếng', example: 'Dieser Trend ist besonders bei Jugendlichen populär.'
  },
  {
    id: 'b1-soc-85', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'die Einbürgerung', article: 'die', plural: 'die Einbürgerungen',
    meaning_vi: 'Sự nhập tịch', meaning_en: 'naturalization',
    example_de: 'Der Prozess der Einbürgerung dauert oft mehrere Monate.',
    example_vi: 'Tiến trình nhập quốc tịch thường kéo dài nhiều tháng trời.',
    example_en: 'The process of naturalization often lasts several months.',
    word: 'Einbürgerung', meaning: 'Sự nhập tịch', example: 'Der Prozess der Einbürgerung dauert oft mehrere Monate.'
  },
  {
    id: 'b1-soc-86', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'das Publikum', article: 'das', plural: 'die Publika',
    meaning_vi: 'Khán giả / Công chúng', meaning_en: 'audience',
    example_de: 'Das Publikum klatschte begeistert Beifall.',
    example_vi: 'Khán giả say sưa vỗ tay tán thưởng nồng nhiệt.',
    example_en: 'The audience clapped enthusiastically.',
    word: 'Publikum', meaning: 'Khán giả, công chúng', example: 'Das Publikum klatschte begeistert Beifall.'
  },
  {
    id: 'b1-soc-87', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'das Benehmen', article: 'das', plural: 'das Benehmen',
    meaning_vi: 'Hành vi / Cách ứng xử', meaning_en: 'behavior / conduct',
    example_de: 'Gutes Benehmen ist die halbe Miete im Berufsleben.',
    example_vi: 'Cách cư xử tử tế chiếm vai trò một nửa thành công trong công việc.',
    example_en: 'Good conduct is half the battle in professional life.',
    word: 'Benehmen', meaning: 'Hành vi, cách cư xử', example: 'Gutes Benehmen ist die halbe Miete im Berufsleben.'
  },
  {
    id: 'b1-soc-88', level: 'B1', theme: 'Gesellschaft & Sozialleben', german: 'das Verhalten', article: 'das', plural: 'das Verhalten',
    meaning_vi: 'Hành vi / Cách ứng xử', meaning_en: 'behavior',
    example_de: 'Sein Verhalten im Kurs war vorbildlich.',
    example_vi: 'Thái độ ứng xử tích cực của anh ấy trong lớp là vô cùng gương mẫu.',
    example_en: 'His behavior in the class was exemplary.',
    word: 'Verhalten', meaning: 'Hành vi, cách cư xử', example: 'Sein Verhalten im Kurs war vorbildlich.'
  }
];

// Helper to convert legacy items at module startup
const mapLegacyToNewFormat = (legacy: LegacyVocabularyWord): VocabularyWord => {
  const art = (legacy.article ? legacy.article.toLowerCase() : 'none') as 'der' | 'die' | 'das' | 'none';
  
  // Custom German representation with lowercase article prefix
  let german = legacy.word;
  if (legacy.article && !legacy.word.toLowerCase().startsWith(legacy.article.toLowerCase() + ' ')) {
    german = `${legacy.article.toLowerCase()} ${legacy.word}`;
  }

  // Format plural
  let plural = legacy.plural;
  if (plural && legacy.article && !plural.toLowerCase().startsWith('die ')) {
    plural = `die ${plural}`;
  }

  // Translate Vietnamese word meaning to English
  const meaning_en = legacyMeaningToEn[legacy.meaning.trim()] || legacy.meaning;

  // Split example sentence into German & Vietnamese context translation
  let example_de = legacy.example || '';
  let example_vi = legacy.example || '';
  let example_en = legacy.example || '';
  
  const matchParen = (legacy.example || '').match(/\(([^)]+)\)/);
  if (matchParen) {
    example_vi = matchParen[1].trim();
    example_de = (legacy.example || '').replace(/\([^)]+\)/, '').trim();
  }

  const lookupEnExample = legacyExampleToEn[example_de.trim()];
  if (lookupEnExample) {
    example_en = lookupEnExample;
  } else {
    // English translation fallback using word swapping or default
    example_en = example_vi;
  }

  return {
    id: legacy.id,
    level: legacy.level || 'A2',
    theme: legacy.theme || 'Sonstiges',
    german: german,
    article: art,
    plural: plural,
    meaning_vi: legacy.meaning || '',
    meaning_en: meaning_en,
    example_de: example_de,
    example_vi: example_vi,
    example_en: example_en,

    // Backward compatibility
    phonetic: legacy.phonetic,
    imageUrl: legacy.imageUrl,
    word: legacy.word,
    meaning: legacy.meaning,
    example: legacy.example
  };
};

export const VOCABULARY_DATA: VocabularyWord[] = [
  ...LEGACY_RAW_VOCABULARY_DATA.map(mapLegacyToNewFormat),
  ...NEW_B1_VOCABULARY_DATA,
  ...WIRTSCHAFT_VOCABULARY_DATA,
  ...ARBEIT_KARRIERE_VOCABULARY_DATA,
  ...UMWELT_NATUR_VOCABULARY_DATA,
  ...RECHT_GESETZ_VOCABULARY_DATA,
  ...ENERGIE_UMWELT_VOCABULARY_DATA,
  ...LEBENSQUALITAET_GESELLSCHAFT_VOCABULARY_DATA,
  ...KULTUR_KOMMUNIKATION_VOCABULARY_DATA,
  ...GELD_FINANZEN_VOCABULARY_DATA,
  ...ETHIK_MORAL_VOCABULARY_DATA,
  ...MEDIEN_UNTERHALTUNG_VOCABULARY_DATA,
  ...RELIGION_GLAUBE_VOCABULARY_DATA,
  ...WISSENSCHAFT_TECHNOLOGIE_VOCABULARY_DATA,
  ...STADT_URBANISIERUNG_VOCABULARY_DATA
];

export const THEMES = Array.from(new Set(VOCABULARY_DATA.map(v => v.theme)));
export const LEVELS: Level[] = ['A1', 'A2', 'B1', 'B2'];
