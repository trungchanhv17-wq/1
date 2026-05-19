
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

  // --- TRƯỜNG HỌC ---
  { id: 'a1-s1', word: 'Lehrer', article: 'DER', plural: 'Lehrer', phonetic: '[ˈleːʁɐ]', meaning: 'Giáo viên', example: 'Der Lehrer ist sehr geduldig.', theme: 'Trường học', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1544717297-fa95b3ee51f8?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-s2', word: 'Schüler', article: 'DER', plural: 'Schüler', phonetic: '[ˈʃyːlɐ]', meaning: 'Học sinh', example: 'Der Schüler lernt Deutsch.', theme: 'Trường học', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-s3', word: 'Klasse', article: 'DIE', plural: 'Klassen', phonetic: '[ˈklasə]', meaning: 'Lớp học', example: 'Unsere Klasse là rất vui.', theme: 'Trường học', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-s4', word: 'Buch', article: 'DAS', plural: 'Bücher', phonetic: '[buːx]', meaning: 'Sách', example: 'Das Buch liegt auf dem Tisch.', theme: 'Trường học', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=1000' },

  // --- THỨC ĂN & ĐỒ UỐNG ---
  { id: 'a1-e1', word: 'Brot', article: 'DAS', plural: 'Brote', phonetic: '[bʁoːt]', meaning: 'Bánh mì', example: 'Ich kaufe frisches Brot.', theme: 'Thức ăn & Đồ uống', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-e2', word: 'Wasser', article: 'DAS', phonetic: '[ˈvasɐ]', meaning: 'Nước', example: 'Ein Glas Wasser, bitte.', theme: 'Thức ăn & Đồ uống', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1548919973-5cfe5d4fc474?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-e3', word: 'Milch', article: 'DIE', phonetic: '[mɪlç]', meaning: 'Sữa', example: 'Milch ist gesund.', theme: 'Thức ăn & Đồ uống', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1564031649988-9694b791facd?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-e4', word: 'Apfel', article: 'DER', plural: 'Äpfel', phonetic: '[ˈapl̩]', meaning: 'Quả táo', example: 'Ein roter Apfel.', theme: 'Thức ăn & Đồ uống', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=1000' },

  // --- THỜI GIAN ---
  { id: 'a1-t1', word: 'Uhr', article: 'DIE', plural: 'Uhren', phonetic: '[uːɐ̯]', meaning: 'Giờ / Đồng hồ', example: 'Es ist zwei Uhr.', theme: 'Thời gian', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-t2', word: 'Tag', article: 'DER', plural: 'Tage', phonetic: '[taːk]', meaning: 'Ngày', example: 'Guten Tag!', theme: 'Thời gian', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1491147334573-44cbb4602074?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-t3', word: 'Woche', article: 'DIE', plural: 'Wochen', phonetic: '[ˈvɔxə]', meaning: 'Tuần', example: 'Die Woche hat sieben Tage.', theme: 'Thời gian', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1461749280684-1ca1752b3925?auto=format&fit=crop&q=80&w=1000' },

  // --- ĐỘNG VẬT ---
  { id: 'a1-an1', word: 'Hund', article: 'DER', plural: 'Hunde', phonetic: '[hʊnt]', meaning: 'Con chó', example: 'Der Hund bellt.', theme: 'Động vật', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-an2', word: 'Katze', article: 'DIE', plural: 'Katzen', phonetic: '[ˈkat͡sə]', meaning: 'Con mèo', example: 'Die Katze schnurrt.', theme: 'Động vật', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=1000' },

  // --- THIÊN NHIÊN ---
  { id: 'a1-nat1', word: 'Blume', article: 'DIE', plural: 'Blumen', phonetic: '[ˈbluːmə]', meaning: 'Hoa', example: 'Eine schöne Blume.', theme: 'Thiên nhiên', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-nat2', word: 'Baum', article: 'DER', plural: 'Bäume', phonetic: '[baʊ̯m]', meaning: 'Cây', example: 'Der Baum ist grün.', theme: 'Thiên nhiên', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000' },

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
  { id: 'a1-w1', word: 'Arbeit', article: 'DIE', phonetic: '[ˈaʁbaɪ̯t]', meaning: 'Công việc', example: 'Die Arbeit macht Spaß.', theme: 'Công việc', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1454165833767-02754a7c1b22?auto=format&fit=crop&q=80&w=1000' },
  { id: 'a1-w2', word: 'Büro', article: 'DAS', plural: 'Büros', phonetic: '[byˈʁoː]', meaning: 'Văn phòng', example: 'Das Büro ist im 2. Stock.', theme: 'Công việc', level: 'A1', imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000' }
];

export const THEMES = Array.from(new Set(VOCABULARY_DATA.map(v => v.theme)));
export const LEVELS: Level[] = ['A1', 'A2', 'B1', 'B2'];
