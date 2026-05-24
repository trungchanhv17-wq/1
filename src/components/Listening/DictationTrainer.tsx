import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Volume2, 
  RotateCcw, 
  AlertCircle,
  Trophy,
  Zap,
  X,
  Play,
  Pause,
  ArrowRight,
  Flame,
  Check,
  Bot,
  Sparkles,
  CheckCircle,
  BookOpen,
  Headphones
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage, translations } from '@/context/LanguageContext';

// Sentences Database
interface ErrorDictEntry {
  correct: string;
  type: string;
  explain: string;
}

interface Question {
  de: string;
  vi: string;
  en?: string;
  level: Level;
  errors?: Record<string, ErrorDictEntry>;
}

interface Topic {
  id: string;
  title: string;
  viTitle: string;
  description: string;
  icon: React.ElementType;
}

const TOPICS: Topic[] = [
  { 
    id: 'familie', 
    title: 'Thema 2: Familie', 
    viTitle: 'Thema 2: Familie',
    description: 'Nghe viết chính tả các mẫu câu về chủ đề gia đình, người thân.',
    icon: Sparkles
  },
  { 
    id: 'freizeit_hobbys', 
    title: 'Thema 3: Freizeit und Hobbys', 
    viTitle: 'Thema 3: Freizeit und Hobbys',
    description: 'Nghe viết chính tả các mẫu câu về sở thích, thể thao, giải trí và thời gian rảnh.',
    icon: Sparkles
  },
  { 
    id: 'einkaufen', 
    title: 'Thema 4: Einkaufen', 
    viTitle: 'Thema 4: Einkaufen',
    description: 'Nghe viết chính tả các mẫu câu đi mua sắm, hỏi giá cả, thanh toán và lựa chọn sản phẩm.',
    icon: Sparkles
  },
  { 
    id: 'essen_trinken', 
    title: 'Thema 5: Essen und Trinken', 
    viTitle: 'Thema 5: Essen und Trinken',
    description: 'Nghe viết chính tả các mẫu câu về ăn uống, đầy đủ các hoạt động ở nhà hàng, gọi món.',
    icon: Sparkles
  },
  { 
    id: 'zeit_termine', 
    title: 'Thema 6: Zeit und Termine', 
    viTitle: 'Thema 6: Zeit und Termine',
    description: 'Nghe viết chính tả các mẫu câu về thời gian, thứ ngày, đặt hẹn và quản lý thời gian.',
    icon: Sparkles
  },
  { 
    id: 'gesundheit', 
    title: 'Thema 7: Gesundheit', 
    viTitle: 'Thema 7: Gesundheit',
    description: 'Nghe viết chính tả các mẫu câu về sức khỏe, triệu chứng bệnh, đi khám bác sĩ và thuốc men.',
    icon: Sparkles
  },
  { 
    id: 'wohnen', 
    title: 'Thema 8: Wohnen', 
    viTitle: 'Thema 8: Wohnen',
    description: 'Nghe viết chính tả các mẫu câu về nhà ở, căn hộ, phòng ốc và các hoạt động dọn dẹp, chuyển nhà.',
    icon: Sparkles
  },
  { 
    id: 'arbeit_schule', 
    title: 'Thema 9: Arbeit und Schule', 
    viTitle: 'Thema 9: Arbeit und Schule',
    description: 'Nghe viết chính tả các mẫu câu về công việc, trường học, nghề nghiệp và hoạt động học tập.',
    icon: Sparkles
  },
  { 
    id: 'reisen_verkehr', 
    title: 'Thema 10: Reisen und Verkehr', 
    viTitle: 'Thema 10: Reisen und Verkehr',
    description: 'Nghe viết chính tả các mẫu câu về đi lại, phương tiện giao thông, du lịch, mua vé và hỏi đường.',
    icon: Sparkles
  },
  { 
    id: 'alltag_tagesablauf_a2', 
    title: 'A2 - Thema 1: Alltag und Tagesablauf', 
    viTitle: 'A2 - Thema 1: Alltag und Tagesablauf',
    description: 'Nghe viết chính tả các mẫu câu về cuộc sống hàng ngày và thời gian biểu trình độ A2.',
    icon: Sparkles
  },
  { 
    id: 'greetings', 
    title: 'Greetings & Basics', 
    viTitle: 'Chào hỏi & Cơ bản',
    description: 'Các mẫu câu giao tiếp cơ bản hàng ngày khi gặp gỡ người mới.',
    icon: Sparkles
  },
  { 
    id: 'travel', 
    title: 'Travel & Directions', 
    viTitle: 'Du lịch & Chỉ đường',
    description: 'Tìm đường, mua vé tàu và cách đi lại thuận tiện tại nước Đức.',
    icon: BookOpen
  },
  { 
    id: 'daily', 
    title: 'Daily Life', 
    viTitle: 'Đời sống hàng ngày',
    description: 'Đặt thức ăn, hỏi thời tiết và thói quen sinh hoạt thường nhật.',
    icon: Flame
  },
  { 
    id: 'work', 
    title: 'Work & Career', 
    viTitle: 'Công việc',
    description: 'Mẫu câu chuyên sâu hỗ trợ giao tiếp và phỏng vấn công sở.',
    icon: Trophy
  },
  {
    id: 'numbers',
    title: 'Zahlen 0–100',
    viTitle: 'Số đếm 0–100',
    description: 'Nắm vững bảng số đếm từ cơ bản nhất tới số phức tạp trong tiếng Đức.',
    icon: Zap
  }
];

const DB: Record<string, Question[]> = {
  familie: [
    { level: 'A1', de: "Ich habe eine kleine Familie.", vi: "Tôi có một gia đình nhỏ.", en: "I have a small family." },
    { level: 'A1', de: "Meine Familie wohnt in einer kleinen Stadt.", vi: "Gia đình tôi sống trong một thành phố nhỏ.", en: "My family lives in a small city." },
    { level: 'A1', de: "Ich wohne mit meiner Familie.", vi: "Tôi sống với gia đình tôi.", en: "I live with my family." },
    { level: 'A1', de: "Meine Mutter ist sehr freundlich.", vi: "Mẹ tôi rất thân thiện.", en: "My mother is very friendly." },
    { level: 'A1', de: "Mein Vater arbeitet im Büro.", vi: "Bố tôi làm việc ở văn phòng.", en: "My father works in an office." },
    { level: 'A1', de: "Ich habe einen Bruder.", vi: "Tôi có một người anh trai.", en: "I have a brother." },
    { level: 'A1', de: "Ich habe eine Schwester.", vi: "Tôi có một người chị gái.", en: "I have a sister." },
    { level: 'A1', de: "Mein Bruder wohnt in einer großen Stadt.", vi: "Anh trai tôi sống trong một thành phố lớn.", en: "My brother lives in a big city." },
    { level: 'A1', de: "Meine Schwester lernt Englisch.", vi: "Chị gái tôi học tiếng Anh.", en: "My sister learns English." },
    { level: 'A1', de: "Meine Mutter kocht sehr gut.", vi: "Mẹ tôi nấu ăn rất ngon.", en: "My mother cooks very well." },
    { level: 'A1', de: "Mein Vater trinkt morgens Kaffee.", vi: "Bố tôi uống cà phê vào buổi sáng.", en: "My father drinks coffee in the morning." },
    { level: 'A1', de: "Mein Bruder geht zur Schule.", vi: "Em trai tôi đi học.", en: "My younger brother goes to school." },
    { level: 'A1', de: "Meine Schwester ist noch klein.", vi: "Em gái tôi còn nhỏ.", en: "My younger sister is still small." },
    { level: 'A1', de: "Mein Großvater ist alt.", vi: "Ông tôi đã già.", en: "My grandfather is old." },
    { level: 'A1', de: "Meine Großmutter ist sehr nett.", vi: "Bà tôi rất tốt bụng.", en: "My grandmother is very kind." },
    { level: 'A1', de: "Ich liebe meine Familie.", vi: "Tôi yêu gia đình tôi.", en: "I love my family." },
    { level: 'A1', de: "Meine Familie ist sehr wichtig für mich.", vi: "Gia đình tôi rất quan trọng với tôi.", en: "My family is very important to me." },
    { level: 'A1', de: "Ich rufe oft meine Mutter an.", vi: "Tôi thường gọi điện cho mẹ tôi.", en: "I often call my mother." },
    { level: 'A1', de: "Ich spreche mit meinem Vater.", vi: "Tôi nói chuyện với bố tôi.", en: "I talk with my father." },
    { level: 'A1', de: "Ich esse mit meiner Familie zu Abend.", vi: "Tôi ăn tối với gia đình tôi.", en: "I have dinner with my family." },
    { level: 'A1', de: "Meine Mutter arbeitet heute nicht.", vi: "Mẹ tôi không làm việc hôm nay.", en: "My mother does not work today." },
    { level: 'A1', de: "Mein Vater hat keine Zeit.", vi: "Bố tôi không có thời gian.", en: "My father does not have time." },
    { level: 'A1', de: "Mein Bruder hat ein Auto.", vi: "Anh trai tôi có một chiếc xe hơi.", en: "My brother has a car." },
    { level: 'A1', de: "Meine Schwester hat eine Katze.", vi: "Chị gái tôi có một con mèo.", en: "My sister has a cat." },
    { level: 'A1', de: "Ich habe einen Hund.", vi: "Tôi có một con chó.", en: "I have a dog." },
    { level: 'A1', de: "Mein Hund ist sehr süß.", vi: "Con chó của tôi rất dễ thương.", en: "My dog is very cute." },
    { level: 'A1', de: "Die Katze meiner Schwester schläft viel.", vi: "Con mèo của chị tôi ngủ nhiều.", en: "My sister’s cat sleeps a lot." },
    { level: 'A1', de: "Wir wohnen in einem kleinen Haus.", vi: "Chúng tôi sống trong một ngôi nhà nhỏ.", en: "We live in a small house." },
    { level: 'A1', de: "Wir essen am Sonntag zusammen.", vi: "Chúng tôi ăn cùng nhau vào Chủ nhật.", en: "We eat together on Sunday." },
    { level: 'A1', de: "Ich möchte am Wochenende meine Familie besuchen.", vi: "Tôi muốn thăm gia đình tôi vào cuối tuần.", en: "I want to visit my family on the weekend." }
  ],
  freizeit_hobbys: [
    { level: 'A1', de: "Ich höre gern Musik.", vi: "Tôi thích nghe nhạc.", en: "I like listening to music." },
    { level: 'A1', de: "Ich spiele gern Fußball.", vi: "Tôi thích chơi bóng đá.", en: "I like playing football." },
    { level: 'A1', de: "Ich spiele nicht gern Basketball.", vi: "Tôi không thích chơi bóng rổ.", en: "I do not like playing basketball." },
    { level: 'A1', de: "Ich habe eine Gitarre.", vi: "Tôi có một cây đàn ghi-ta.", en: "I have a guitar." },
    { level: 'A1', de: "Ich spiele am Abend Gitarre.", vi: "Tôi chơi đàn ghi-ta vào buổi tối.", en: "I play guitar in the evening." },
    { level: 'A1', de: "Ich habe ein neues Hobby.", vi: "Tôi có một sở thích mới.", en: "I have a new hobby." },
    { level: 'A1', de: "Mein Hobby ist Lesen.", vi: "Sở thích của tôi là đọc sách.", en: "My hobby is reading." },
    { level: 'A1', de: "Ich lese ein Buch.", vi: "Tôi đọc một cuốn sách.", en: "I read a book." },
    { level: 'A1', de: "Ich habe kein Buch.", vi: "Tôi không có cuốn sách nào.", en: "I do not have a book." },
    { level: 'A1', de: "Ich möchte ein Buch kaufen.", vi: "Tôi muốn mua một cuốn sách.", en: "I would like to buy a book." },
    { level: 'A1', de: "Ich kann ein bisschen singen.", vi: "Tôi có thể hát một chút.", en: "I can sing a little." },
    { level: 'A1', de: "Ich kann nicht gut tanzen.", vi: "Tôi không thể nhảy tốt.", en: "I cannot dance well." },
    { level: 'A1', de: "Hörst du gern Musik?", vi: "Bạn có thích nghe nhạc không?", en: "Do you like listening to music?" },
    { level: 'A1', de: "Welchen Sport spielst du?", vi: "Bạn chơi môn thể thao nào?", en: "Which sport do you play?" },
    { level: 'A1', de: "Was machst du am Wochenende?", vi: "Bạn làm gì vào cuối tuần?", en: "What do you do on the weekend?" },
    { level: 'A1', de: "Am Wochenende spiele ich Fußball.", vi: "Vào cuối tuần, tôi chơi bóng đá.", en: "On the weekend, I play football." },
    { level: 'A1', de: "Am Samstag treffe ich meinen Freund.", vi: "Vào thứ Bảy, tôi gặp bạn tôi.", en: "On Saturday, I meet my friend." },
    { level: 'A1', de: "Ich gehe mit meinem Freund ins Kino.", vi: "Tôi đi xem phim với bạn tôi.", en: "I go to the cinema with my friend." },
    { level: 'A1', de: "Ich gehe mit meiner Freundin spazieren.", vi: "Tôi đi dạo với bạn gái của tôi.", en: "I go for a walk with my girlfriend." },
    { level: 'A1', de: "Möchtest du mitkommen?", vi: "Bạn có muốn đi cùng không?", en: "Would you like to come along?" },
    { level: 'A1', de: "Ich muss heute zu Hause bleiben.", vi: "Hôm nay tôi phải ở nhà.", en: "I have to stay at home today." },
    { level: 'A1', de: "Ich möchte einen Film sehen.", vi: "Tôi muốn xem một bộ phim.", en: "I would like to watch a movie." },
    { level: 'A1', de: "Ich sehe am Abend fern.", vi: "Tôi xem tivi vào buổi tối.", en: "I watch TV in the evening." },
    { level: 'A1', de: "Der Film ist sehr gut.", vi: "Bộ phim rất hay.", en: "The movie is very good." },
    { level: 'A1', de: "Der Film ist nicht gut.", vi: "Bộ phim không hay.", en: "The movie is not good." },
    { level: 'A1', de: "Ich habe keine Zeit für mein Hobby.", vi: "Tôi không có thời gian cho sở thích của tôi.", en: "I do not have time for my hobby." },
    { level: 'A1', de: "Ich brauche mehr Zeit.", vi: "Tôi cần nhiều thời gian hơn.", en: "I need more time." },
    { level: 'A1', de: "Ich lerne Deutsch in meiner Freizeit.", vi: "Tôi học tiếng Đức trong thời gian rảnh.", en: "I learn German in my free time." },
    { level: 'A1', de: "Ich lerne gern mit Musik.", vi: "Tôi thích học với âm nhạc.", en: "I like studying with music." },
    { level: 'A1', de: "Mein Hobby ist sehr wichtig für mich.", vi: "Sở thích của tôi rất quan trọng với tôi.", en: "My hobby is very important to me." }
  ],
  einkaufen: [
    { level: 'A1', de: "Ich möchte ein Hemd kaufen.", vi: "Tôi muốn mua một cái áo.", en: "I would like to buy a shirt." },
    { level: 'A1', de: "Brauchst du eine Tasche?", vi: "Bạn cần một cái túi không?", en: "Do you need a bag?" },
    { level: 'A1', de: "Er kauft einen Apfel.", vi: "Anh ấy mua một quả táo.", en: "He buys an apple." },
    { level: 'A1', de: "Sie kauft eine Flasche Wasser.", vi: "Cô ấy mua một chai nước.", en: "She buys a bottle of water." },
    { level: 'A1', de: "Wir brauchen ein Kilo Brot.", vi: "Chúng tôi cần một ký bánh mì.", en: "We need one kilo of bread." },
    { level: 'A1', de: "Wie viel kostet das?", vi: "Cái này giá bao nhiêu?", en: "How much does this cost?" },
    { level: 'A1', de: "Dieses Hemd ist zu teuer.", vi: "Cái áo này quá đắt.", en: "This shirt is too expensive." },
    { level: 'A1', de: "Diese Tasche ist nicht teuer.", vi: "Cái túi này không đắt.", en: "This bag is not expensive." },
    { level: 'A1', de: "Ich habe kein Bargeld.", vi: "Tôi không có tiền mặt.", en: "I do not have cash." },
    { level: 'A1', de: "Du kannst mit Karte bezahlen.", vi: "Bạn có thể thanh toán bằng thẻ.", en: "You can pay by card." },
    { level: 'A1', de: "Er bezahlt bar.", vi: "Anh ấy trả bằng tiền mặt.", en: "He pays in cash." },
    { level: 'A1', de: "Sie möchte mit Karte bezahlen.", vi: "Cô ấy muốn thanh toán bằng thẻ.", en: "She would like to pay by card." },
    { level: 'A1', de: "Wir suchen ein Paar Schuhe.", vi: "Chúng tôi đang tìm một đôi giày.", en: "We are looking for a pair of shoes." },
    { level: 'A1', de: "Haben Sie eine andere Farbe?", vi: "Bạn có màu khác không?", en: "Do you have another color?" },
    { level: 'A1', de: "Kann ich dieses Hemd anprobieren?", vi: "Tôi có thể thử cái áo này không?", en: "Can I try on this shirt?" },
    { level: 'A1', de: "Sie probiert dieses Kleid an.", vi: "Cô ấy thử cái váy này.", en: "She tries on this dress." },
    { level: 'A1', de: "Er nimmt dieses Hemd nicht.", vi: "Anh ấy không lấy cái áo này.", en: "He does not take this shirt." },
    { level: 'A1', de: "Wir nehmen zwei Flaschen Wasser.", vi: "Chúng tôi lấy hai chai nước.", en: "We take two bottles of water." },
    { level: 'A1', de: "Geben Sie mir bitte eine Tasche.", vi: "Làm ơn cho tôi một cái túi.", en: "Please give me a bag." },
    { level: 'A1', de: "Was kaufst du heute?", vi: "Bạn mua gì hôm nay?", en: "What are you buying today?" },
    { level: 'A1', de: "Heute kauft sie Gemüse und Obst.", vi: "Hôm nay cô ấy mua rau và trái cây.", en: "Today she buys vegetables and fruit." },
    { level: 'A1', de: "Er braucht ein Geschenk für seine Mutter.", vi: "Anh ấy cần một món quà cho mẹ anh ấy.", en: "He needs a gift for his mother." },
    { level: 'A1', de: "Wir brauchen keine Quittung.", vi: "Chúng tôi không cần hóa đơn.", en: "We do not need a receipt." },
    { level: 'A1', de: "Ich möchte eine Quittung.", vi: "Tôi muốn hóa đơn.", en: "I would like a receipt." },
    { level: 'A1', de: "Wann öffnet das Geschäft?", vi: "Cửa hàng mở cửa lúc mấy giờ?", en: "When does the shop open?" },
    { level: 'A1', de: "Ich habe gestern ein Hemd gekauft.", vi: "Hôm qua tôi đã mua một cái áo.", en: "Yesterday I bought a shirt." },
    { level: 'A1', de: "Sie ist gestern in den Supermarkt gegangen.", vi: "Hôm qua cô ấy đã đi siêu thị.", en: "Yesterday she went to the supermarket." },
    { level: 'A1', de: "Er hat mit Karte bezahlt.", vi: "Anh ấy đã thanh toán bằng thẻ.", en: "He paid by card." },
    { level: 'A1', de: "Wir haben diese Schuhe anprobiert.", vi: "Chúng tôi đã thử đôi giày này.", en: "We tried on these shoes." },
    { level: 'A1', de: "Diese Tasche war zu teuer.", vi: "Cái túi này đã quá đắt.", en: "This bag was too expensive." }
  ],
  essen_trinken: [
    { level: 'A1', de: "Ich habe Hunger.", vi: "Tôi đói.", en: "I am hungry." },
    { level: 'A1', de: "Hast du Durst?", vi: "Bạn có khát không?", en: "Are you thirsty?" },
    { level: 'A1', de: "Er trinkt Wasser.", vi: "Anh ấy uống nước.", en: "He drinks water." },
    { level: 'A1', de: "Sie trinkt morgens Tee.", vi: "Cô ấy uống trà vào buổi sáng.", en: "She drinks tea in the morning." },
    { level: 'A1', de: "Wir frühstücken um sieben Uhr.", vi: "Chúng tôi ăn sáng lúc bảy giờ.", en: "We have breakfast at seven o’clock." },
    { level: 'A1', de: "Ich esse Brot mit Käse.", vi: "Tôi ăn bánh mì với phô mai.", en: "I eat bread with cheese." },
    { level: 'A1', de: "Magst du Kaffee?", vi: "Bạn có thích cà phê không?", en: "Do you like coffee?" },
    { level: 'A1', de: "Er mag keine Milch.", vi: "Anh ấy không thích sữa.", en: "He does not like milk." },
    { level: 'A1', de: "Sie isst gern Obst.", vi: "Cô ấy thích ăn trái cây.", en: "She likes eating fruit." },
    { level: 'A1', de: "Wir essen kein Fleisch.", vi: "Chúng tôi không ăn thịt.", en: "We do not eat meat." },
    { level: 'A1', de: "Ich möchte ein Glas Wasser trinken.", vi: "Tôi muốn uống một ly nước.", en: "I would like to drink a glass of water." },
    { level: 'A1', de: "Was möchtest du bestellen?", vi: "Bạn muốn gọi món gì?", en: "What would you like to order?" },
    { level: 'A1', de: "Was möchten Sie trinken?", vi: "Ông muốn uống gì?", en: "What would you like to drink." },
    { level: 'A1', de: "Ich möchte eine Suppe bestellen.", vi: "Tôi muốn gọi một phần súp.", en: "I would like to order a soup." },
    { level: 'A1', de: "Er bestellt eine Pizza.", vi: "Anh ấy gọi một cái pizza.", en: "He orders a pizza." },
    { level: 'A1', de: "Sie nimmt einen Salat.", vi: "Cô ấy lấy một phần salad.", en: "She takes a salad." },
    { level: 'A1', de: "Wir brauchen die Speisekarte.", vi: "Chúng tôi cần thực đơn.", en: "We need the menu." },
    { level: 'A1', de: "Geben Sie mir bitte die Speisekarte.", vi: "Làm ơn cho tôi thực đơn.", en: "Please give me the menu." },
    { level: 'A1', de: "Das Essen ist sehr lecker.", vi: "Món ăn này rất ngon.", en: "The food is very delicious." },
    { level: 'A1', de: "Das Wasser ist kalt.", vi: "Nước này lạnh.", en: "The water is cold." },
    { level: 'A1', de: "Der Kaffee ist zu heiß.", vi: "Cà phê này quá nóng.", en: "The coffee is too hot." },
    { level: 'A1', de: "Ich habe keinen Löffel.", vi: "Tôi không có thìa.", en: "I do not have a spoon." },
    { level: 'A1', de: "Hast du ein Messer?", vi: "Bạn có dao không?", en: "Do you have a knife?" },
    { level: 'A1', de: "Wir bezahlen zusammen.", vi: "Chúng tôi trả tiền cùng nhau.", en: "We pay together." },
    { level: 'A1', de: "Ich möchte bezahlen.", vi: "Tôi muốn thanh toán.", en: "I would like to pay." },
    { level: 'A1', de: "Ich habe gestern Pizza gegessen.", vi: "Hôm qua tôi đã ăn pizza.", en: "Yesterday I ate pizza." },
    { level: 'A1', de: "Sie hat Tee getrunken.", vi: "Cô ấy đã uống trà.", en: "She drank tea." },
    { level: 'A1', de: "Er hat das Abendessen gekocht.", vi: "Anh ấy đã nấu bữa tối.", en: "He cooked dinner." },
    { level: 'A1', de: "Wir sind ins Restaurant gegangen.", vi: "Chúng tôi đã đi nhà hàng.", en: "We went to the restaurant." },
    { level: 'A1', de: "Das Essen war sehr gut.", vi: "Bữa ăn rất ngon.", en: "The meal was very good." }
  ],
  zeit_termine: [
    { level: 'A1', de: "Heute ist Montag.", vi: "Hôm nay là thứ Hai.", en: "Today is Monday." },
    { level: 'A1', de: "Morgen ist Dienstag.", vi: "Ngày mai là thứ Ba.", en: "Tomorrow is Tuesday." },
    { level: 'A1', de: "Gestern war Sonntag.", vi: "Hôm qua là Chủ nhật.", en: "Yesterday was Sunday." },
    { level: 'A1', de: "Wie spät ist es jetzt?", vi: "Bây giờ là mấy giờ?", en: "What time is it now?" },
    { level: 'A1', de: "Es ist jetzt sieben Uhr.", vi: "Bây giờ là bảy giờ.", en: "It is seven o’clock now." },
    { level: 'A1', de: "Hast du heute Zeit?", vi: "Bạn có thời gian hôm nay không?", en: "Do you have time today?" },
    { level: 'A1', de: "Ich habe heute keine Zeit.", vi: "Tôi không có thời gian hôm nay.", en: "I do not have time today." },
    { level: 'A1', de: "Er hat am Nachmittag Zeit.", vi: "Anh ấy có thời gian vào buổi chiều.", en: "He has time in the afternoon." },
    { level: 'A1', de: "Sie hat am Abend keine Zeit.", vi: "Cô ấy không có thời gian vào buổi tối.", en: "She does not have time in the evening." },
    { level: 'A1', de: "Wir haben am Wochenende Zeit.", vi: "Chúng tôi có thời gian vào cuối tuần.", en: "We have time on the weekend." },
    { level: 'A1', de: "Was machst du am Freitag?", vi: "Bạn làm gì vào thứ Sáu?", en: "What do you do on Friday?" },
    { level: 'A1', de: "Er arbeitet am Samstag.", vi: "Anh ấy làm việc vào thứ Bảy.", en: "He works on Saturday." },
    { level: 'A1', de: "Sie lernt am Abend Deutsch.", vi: "Cô ấy học tiếng Đức vào buổi tối.", en: "She studies German in the evening." },
    { level: 'A1', de: "Wir treffen uns um drei Uhr.", vi: "Chúng tôi gặp nhau lúc ba giờ.", en: "We meet at three o’clock." },
    { level: 'A1', de: "Haben Sie einen Termin?", vi: "Ông có lịch hẹn không?", en: "Do you have an appointment." }, // Correct standard English punctuation
    { level: 'A1', de: "Ich möchte einen Termin machen.", vi: "Tôi muốn đặt một lịch hẹn.", en: "I would like to make an appointment." },
    { level: 'A1', de: "Kannst du um zehn Uhr kommen?", vi: "Bạn có thể đến lúc mười giờ không?", en: "Can you come at ten o’clock?" },
    { level: 'A1', de: "Er muss früh zur Arbeit gehen.", vi: "Anh ấy phải đi làm sớm.", en: "He has to go to work early." },
    { level: 'A1', de: "Sie muss heute zu Hause bleiben.", vi: "Cô ấy phải ở nhà hôm nay.", en: "She has to stay at home today." },
    { level: 'A1', de: "Wir müssen hier warten.", vi: "Chúng tôi phải chờ ở đây.", en: "We have to wait here." },
    { level: 'A1', de: "Der Termin beginnt um acht Uhr.", vi: "Cuộc hẹn bắt đầu lúc tám giờ.", en: "The appointment starts at eight o’clock." },
    { level: 'A1', de: "Der Termin endet um neun Uhr.", vi: "Cuộc hẹn kết thúc lúc chín giờ.", en: "The appointment ends at nine o’clock." },
    { level: 'A1', de: "Ich komme zu spät.", vi: "Tôi đến muộn.", en: "I am coming late." },
    { level: 'A1', de: "Du kommst zu früh.", vi: "Bạn đến quá sớm.", en: "You are coming too early." },
    { level: 'A1', de: "Warten Sie bitte einen Moment.", vi: "Làm ơn đợi một chút.", en: "Please wait a moment." },
    { level: 'A1', de: "Ich hatte gestern einen Termin.", vi: "Hôm qua tôi đã có một lịch hẹn.", en: "Yesterday I had an appointment." },
    { level: 'A1', de: "Er ist gestern zu spät gekommen.", vi: "Hôm qua anh ấy đã đến muộn.", en: "Yesterday he came late." },
    { level: 'A1', de: "Sie hat zehn Minuten gewartet.", vi: "Cô ấy đã chờ mười phút.", en: "She waited for ten minutes." },
    { level: 'A1', de: "Wir haben uns am Freitag getroffen.", vi: "Chúng tôi đã gặp nhau vào thứ Sáu.", en: "We met on Friday." },
    { level: 'A1', de: "Der Termin war sehr wichtig.", vi: "Cuộc hẹn đã rất quan trọng.", en: "The appointment was very important." }
  ],
  gesundheit: [
    { level: 'A1', de: "Mir geht es nicht gut.", vi: "Tôi không khỏe.", en: "I am not well." },
    { level: 'A1', de: "Geht es dir gut?", vi: "Bạn có khỏe không?", en: "Are you well?" },
    { level: 'A1', de: "Er hat Kopfschmerzen.", vi: "Anh ấy bị đau đầu.", en: "He has a headache." },
    { level: 'A1', de: "Sie hat Bauchschmerzen.", vi: "Cô ấy bị đau bụng.", en: "She has a stomachache." },
    { level: 'A1', de: "Wir sind heute sehr müde.", vi: "Chúng tôi rất mệt hôm nay.", en: "We are very tired today." },
    { level: 'A1', de: "Ich habe Fieber.", vi: "Tôi bị sốt.", en: "I have a fever." },
    { level: 'A1', de: "Bist du erkältet?", vi: "Bạn bị cảm à?", en: "Do you have a cold?" },
    { level: 'A1', de: "Er braucht einen Arzt.", vi: "Anh ấy cần bác sĩ.", en: "He needs a doctor." },
    { level: 'A1', de: "Sie braucht Medikamente.", vi: "Cô ấy cần thuốc.", en: "She needs medicine." },
    { level: 'A1', de: "Wir möchten einen Termin machen.", vi: "Chúng tôi muốn đặt lịch hẹn.", en: "We would like to make an appointment." },
    { level: 'A1', de: "Haben Sie heute einen Termin?", vi: "Ông có lịch hẹn hôm nay không?", en: "Do you have an appointment today?" },
    { level: 'A1', de: "Ich muss zum Arzt gehen.", vi: "Tôi phải đi bác sĩ.", en: "I have to go to the doctor." },
    { level: 'A1', de: "Du musst dich ausruhen.", vi: "Bạn phải nghỉ ngơi.", en: "You have to rest." },
    { level: 'A1', de: "Er darf keinen Kaffee trinken.", vi: "Anh ấy không được uống cà phê.", en: "He is not allowed to drink coffee." },
    { level: 'A1', de: "Sie soll viel Wasser trinken.", vi: "Cô ấy nên uống nhiều nước.", en: "She should drink a lot of water." },
    { level: 'A1', de: "Wo tut es weh?", vi: "Bạn đau ở đâu?", en: "Where does it hurt?" },
    { level: 'A1', de: "Mein Kopf tut weh.", vi: "Đầu của tôi đau.", en: "My head hurts." },
    { level: 'A1', de: "Ihr Hals tut weh.", vi: "Cổ họng của cô ấy đau.", en: "Her throat hurts." },
    { level: 'A1', de: "Wir warten im Wartezimmer.", vi: "Chúng tôi chờ trong phòng chờ.", en: "We wait in the waiting room." },
    { level: 'A1', de: "Helfen Sie mir bitte.", vi: "Làm ơn giúp tôi.", en: "Please help me." },
    { level: 'A1', de: "Ich habe keine Versicherungskarte.", vi: "Tôi không có thẻ bảo hiểm.", en: "I do not have an insurance card." },
    { level: 'A1', de: "Er hat eine Versicherungskarte.", vi: "Anh ấy có thẻ bảo hiểm.", en: "He has an insurance card." },
    { level: 'A1', de: "Dieses Medikament hilft mir.", vi: "Thuốc này giúp tôi.", en: "This medicine helps me." },
    { level: 'A1', de: "Sie nimmt morgens Medikamente.", vi: "Cô ấy uống thuốc vào buổi sáng.", en: "She takes medicine in the morning." },
    { level: 'A1', de: "Kannst du den Arzt anrufen?", vi: "Bạn có thể gọi bác sĩ không?", en: "Can you call the doctor." },
    { level: 'A1', de: "Ich hatte gestern Kopfschmerzen.", vi: "Hôm qua tôi đã bị đau đầu.", en: "Yesterday I had a headache." },
    { level: 'A1', de: "Sie ist gestern zum Arzt gegangen.", vi: "Hôm qua cô ấy đã đi bác sĩ.", en: "Yesterday she went to the doctor." },
    { level: 'A1', de: "Er hat Medikamente genommen.", vi: "Anh ấy đã uống thuốc.", en: "He took medicine." },
    { level: 'A1', de: "Wir haben dreißig Minuten gewartet.", vi: "Chúng tôi đã chờ ba mươi phút.", en: "We waited for thirty minutes." },
    { level: 'A1', de: "Ich war gestern sehr müde.", vi: "Hôm qua tôi đã rất mệt.", en: "Yesterday I was very tired." }
  ],
  wohnen: [
    { level: 'A1', de: "Ich wohne in einer Wohnung.", vi: "Tôi sống trong một căn hộ.", en: "I live in an apartment." },
    { level: 'A1', de: "Wo wohnst du?", vi: "Bạn sống ở đâu?", en: "Where do you live?" },
    { level: 'A1', de: "Er wohnt in einem kleinen Haus.", vi: "Anh ấy sống trong một ngôi nhà nhỏ.", en: "He lives in a small house." },
    { level: 'A1', de: "Sie wohnt im Stadtzentrum.", vi: "Cô ấy sống ở trung tâm thành phố.", en: "She lives in the city center." },
    { level: 'A1', de: "Wir wohnen in der Nähe der Schule.", vi: "Chúng tôi sống gần trường học.", en: "We live near the school." },
    { level: 'A1', de: "Meine Wohnung ist sehr klein.", vi: "Căn hộ của tôi rất nhỏ.", en: "My apartment is very small." },
    { level: 'A1', de: "Ist dein Haus groß?", vi: "Nhà của bạn có lớn không?", en: "Is your house big?" },
    { level: 'A1', de: "Sein Zimmer ist sehr hell.", vi: "Phòng của anh ấy rất sáng.", en: "His room is very bright." },
    { level: 'A1', de: "Ihr Zimmer ist nicht groß.", vi: "Phòng của cô ấy không lớn.", en: "Her room is not big." },
    { level: 'A1', de: "Wir haben ein Wohnzimmer.", vi: "Chúng tôi có một phòng khách.", en: "We have a living room." },
    { level: 'A1', de: "Ich habe ein Schlafzimmer.", vi: "Tôi có một phòng ngủ.", en: "I have a bedroom." },
    { level: 'A1', de: "Hast du eine Küche?", vi: "Bạn có một nhà bếp không?", en: "Do you have a kitchen?" },
    { level: 'A1', de: "Er hat keinen Balkon.", vi: "Anh ấy không có ban công.", en: "He does not have a balcony." },
    { level: 'A1', de: "Sie hat ein kleines Badezimmer.", vi: "Cô ấy có một phòng tắm nhỏ.", en: "She has a small bathroom." },
    { level: 'A1', de: "Die Wohnung hat zwei Zimmer.", vi: "Căn hộ có hai phòng.", en: "The apartment has two rooms." },
    { level: 'A1', de: "Ich möchte eine Wohnung mieten.", vi: "Tôi muốn thuê một căn hộ.", en: "I would like to rent an apartment." },
    { level: 'A1', de: "Kannst du mir helfen?", vi: "Bạn có thể giúp tôi không?", en: "Can you help me." },
    { level: 'A1', de: "Haben Sie eine freie Wohnung?", vi: "Ông có một căn hộ trống không?", en: "Do you have an available apartment?" },
    { level: 'A1', de: "Wie hoch ist die Miete?", vi: "Giá thuê bao nhiêu?", en: "How much is the rent?" },
    { level: 'A1', de: "Die Miete ist zu teuer.", vi: "Giá thuê quá đắt.", en: "The rent is too expensive." },
    { level: 'A1', de: "Ich muss mein Zimmer aufräumen.", vi: "Tôi phải dọn phòng của tôi.", en: "I have to clean up my room." },
    { level: 'A1', de: "Du sollst das Fenster öffnen.", vi: "Bạn nên mở cửa sổ.", en: "You should open the window." },
    { level: 'A1', de: "Er macht die Tür zu.", vi: "Anh ấy đóng cửa.", en: "He closes the door." },
    { level: 'A1', de: "Sie macht das Licht an.", vi: "Cô ấy bật đèn.", en: "She turns on the light." },
    { level: 'A1', de: "Wir kochen in der Küche.", vi: "Chúng tôi nấu ăn trong bếp.", en: "We cook in the kitchen." },
    { level: 'A1', de: "Ich habe gestern mein Zimmer aufgeräumt.", vi: "Hôm qua tôi đã dọn phòng.", en: "Yesterday I cleaned up my room." },
    { level: 'A1', de: "Sie hat eine Wohnung gemietet.", vi: "Cô ấy đã thuê một căn hộ.", en: "She rented an apartment." },
    { level: 'A1', de: "Er hat das Fenster geöffnet.", vi: "Anh ấy đã mở cửa sổ.", en: "He opened the window." },
    { level: 'A1', de: "Wir sind am Samstag umgezogen.", vi: "Chúng tôi đã chuyển nhà vào thứ Bảy.", en: "We moved on Saturday." },
    { level: 'A1', de: "Die alte Wohnung war sehr klein.", vi: "Căn hộ cũ rất nhỏ.", en: "The old apartment was very small." }
  ],
  arbeit_schule: [
    { level: 'A1', de: "Ich gehe jeden Tag zur Schule.", vi: "Tôi đi học mỗi ngày.", en: "I go to school every day." },
    { level: 'A1', de: "Wo lernst du?", vi: "Bạn học ở đâu?", en: "Where do you study?" },
    { level: 'A1', de: "Er arbeitet im Büro.", vi: "Anh ấy làm việc ở văn phòng.", en: "He works in an office." },
    { level: 'A1', de: "Sie arbeitet in einem Geschäft.", vi: "Cô ấy làm việc trong một cửa hàng.", en: "She works in a shop." },
    { level: 'A1', de: "Wir lernen zusammen Deutsch.", vi: "Chúng tôi học tiếng Đức cùng nhau.", en: "We study German together." },
    { level: 'A1', de: "Ich bin Schüler.", vi: "Tôi là học sinh.", en: "I am a student." },
    { level: 'A1', de: "Bist du Lehrer?", vi: "Bạn là giáo viên phải không?", en: "Are you a teacher?" },
    { level: 'A1', de: "Er ist Student.", vi: "Anh ấy là sinh viên.", en: "He is a university student." },
    { level: 'A1', de: "Sie ist Lehrerin.", vi: "Cô ấy là giáo viên.", en: "She is a teacher." },
    { level: 'A1', de: "Wir haben am Morgen einen Kurs.", vi: "Chúng tôi có một lớp học vào buổi sáng.", en: "We have a course in the morning." },
    { level: 'A1', de: "Ich habe Hausaufgaben.", vi: "Tôi có bài tập về nhà.", en: "I have homework." },
    { level: 'A1', de: "Hast du viele Hausaufgaben?", vi: "Bạn có nhiều bài tập không?", en: "Do you have a lot of homework?" },
    { level: 'A1', de: "Er hat kein Buch.", vi: "Anh ấy không có sách.", en: "He does not have a book." },
    { level: 'A1', de: "Sie hat keinen Stift.", vi: "Cô ấy không có bút.", en: "She does not have a pen." },
    { level: 'A1', de: "Wir brauchen ein Heft.", vi: "Chúng tôi cần một quyển vở.", en: "We need a notebook." },
    { level: 'A1', de: "Ich möchte besser lernen.", vi: "Tôi muốn học tốt hơn.", en: "I would like to study better." },
    { level: 'A1', de: "Kannst du mir helfen?", vi: "Bạn có thể giúp tôi không?", en: "Can you help me?" },
    { level: 'A1', de: "Können Sie diesen Satz erklären?", vi: "Ông có thể giải thích câu này không?", en: "Can you explain this sentence?" },
    { level: 'A1', de: "Ich muss heute Hausaufgaben machen.", vi: "Tôi phải làm bài tập hôm nay.", en: "I have to do homework today." },
    { level: 'A1', de: "Er muss früh zur Arbeit gehen.", vi: "Anh ấy phải đi làm sớm.", en: "He has to go to work early." },
    { level: 'A1', de: "Sie schreibt eine E-Mail.", vi: "Cô ấy viết một email.", en: "She writes an email." },
    { level: 'A1', de: "Du liest diesen Text.", vi: "Bạn đọc bài này.", en: "You read this text." },
    { level: 'A1', de: "Wir hören dem Lehrer zu.", vi: "Chúng tôi nghe giáo viên.", en: "We listen to the teacher." },
    { level: 'A1', de: "Der Unterricht beginnt um acht Uhr.", vi: "Lớp học bắt đầu lúc tám giờ.", en: "The lesson starts at eight o’clock." },
    { level: 'A1', de: "Der Unterricht endet um zehn Uhr.", vi: "Lớp học kết thúc lúc mười giờ.", en: "The lesson ends at ten o’clock." },
    { level: 'A1', de: "Ich habe gestern Deutsch gelernt.", vi: "Hôm qua tôi đã học tiếng Đức.", en: "Yesterday I studied German." },
    { level: 'A1', de: "Er hat Hausaufgaben gemacht.", vi: "Anh ấy đã làm bài tập về nhà.", en: "He did homework." },
    { level: 'A1', de: "Sie hat eine E-Mail geschrieben.", vi: "Cô ấy đã viết một email.", en: "She wrote an email." },
    { level: 'A1', de: "Wir sind mit dem Bus zur Schule gefahren.", vi: "Chúng tôi đã đi học bằng xe buýt.", en: "We went to school by bus." },
    { level: 'A1', de: "Der Arbeitstag war sehr lang.", vi: "Ngày làm việc đã rất dài.", en: "The workday was very long." }
  ],
  reisen_verkehr: [
    { level: 'A1', de: "Ich fahre mit dem Bus.", vi: "Tôi đi bằng xe buýt.", en: "I go by bus." },
    { level: 'A1', de: "Fährst du mit dem Zug?", vi: "Bạn đi bằng tàu hỏa phải không?", en: "Do you go by train?" },
    { level: 'A1', de: "Er fährt mit dem Fahrrad zur Arbeit.", vi: "Anh ấy đi làm bằng xe đạp.", en: "He goes to work by bike." },
    { level: 'A1', de: "Sie geht zu Fuß zur Schule.", vi: "Cô ấy đi bộ đến trường.", en: "She walks to school." },
    { level: 'A1', de: "Wir gehen zum Bahnhof.", vi: "Chúng tôi đi đến nhà ga.", en: "We go to the train station." },
    { level: 'A1', de: "Wo ist der Bahnhof?", vi: "Nhà ga ở đâu?", en: "Where is the train station?" },
    { level: 'A1', de: "Die Bushaltestelle ist hier in der Nähe.", vi: "Bến xe buýt ở gần đây.", en: "The bus stop is near here." },
    { level: 'A1', de: "Ich brauche ein Ticket.", vi: "Tôi cần một vé.", en: "I need a ticket." },
    { level: 'A1', de: "Brauchst du zwei Tickets?", vi: "Bạn cần hai vé không?", en: "Do you need two tickets?" },
    { level: 'A1', de: "Er kauft ein Zugticket.", vi: "Anh ấy mua một vé tàu.", en: "He buys a train ticket." },
    { level: 'A1', de: "Sie möchte nach Berlin fahren.", vi: "Cô ấy muốn đi Berlin.", en: "She would like to go to Berlin." },
    { level: 'A1', de: "Wir möchten eine Reise buchen.", vi: "Chúng tôi muốn đặt một chuyến đi.", en: "We would like to book a trip." },
    { level: 'A1', de: "Wohin möchten Sie fahren?", vi: "Ông muốn đi đâu?", en: "Where would you like to go?" },
    { level: 'A1', de: "Ich möchte ins Stadtzentrum fahren.", vi: "Tôi muốn đi đến trung tâm thành phố.", en: "I would like to go to the city center." },
    { level: 'A1', de: "Kannst du mir den Weg zeigen?", vi: "Bạn có thể chỉ đường cho tôi không?", en: "Can you show me the way?" },
    { level: 'A1', de: "Gehen Sie bitte geradeaus.", vi: "Làm ơn đi thẳng.", en: "Please go straight ahead." },
    { level: 'A1', de: "Biegen Sie hier links ab.", vi: "Rẽ trái ở đây.", en: "Turn left here." },
    { level: 'A1', de: "Biegen Sie an der Ecke rechts ab.", vi: "Rẽ phải ở góc phố.", en: "Turn right at the corner." },
    { level: 'A1', de: "Wann kommt der Bus?", vi: "Xe buýt đến lúc mấy giờ?", en: "When does the bus arrive?" },
    { level: 'A1', de: "Der Zug fährt um acht Uhr ab.", vi: "Tàu khởi hành lúc tám giờ.", en: "The train leaves at eight o’clock." },
    { level: 'A1', de: "Ich komme heute zu spät.", vi: "Tôi đến muộn hôm nay.", en: "I am late today." },
    { level: 'A1', de: "Du kommst zu früh.", vi: "Bạn đến quá sớm.", en: "You arrive too early." },
    { level: 'A1', de: "Er hat kein Ticket.", vi: "Anh ấy không có vé.", en: "He does not have a ticket." },
    { level: 'A1', de: "Sie findet den Bahnhof nicht.", vi: "Cô ấy không tìm thấy nhà ga.", en: "She cannot find the train station." },
    { level: 'A1', de: "Wir müssen auf den Bus warten.", vi: "Chúng tôi phải chờ xe buýt.", en: "We have to wait for the bus." },
    { level: 'A1', de: "Ich bin gestern mit dem Zug gefahren.", vi: "Hôm qua tôi đã đi bằng tàu hỏa.", en: "Yesterday I went by train." },
    { level: 'A1', de: "Er hat ein Ticket gekauft.", vi: "Anh ấy đã mua một vé.", en: "He bought a ticket." },
    { level: 'A1', de: "Sie ist zu spät gekommen.", vi: "Cô ấy đã đến muộn.", en: "She arrived late." },
    { level: 'A1', de: "Wir sind ins Stadtzentrum gefahren.", vi: "Chúng tôi đã đi đến trung tâm thành phố.", en: "We went to the city center." },
    { level: 'A1', de: "Die Reise war sehr schön.", vi: "Chuyến đi rất đẹp.", en: "The trip was very nice." }
  ],
  alltag_tagesablauf_a2: [
    { level: 'A2', de: "Ich stehe früh auf, weil ich zur Arbeit gehen muss.", vi: "Tôi thức dậy sớm vì tôi phải đi làm.", en: "I get up early because I have to go to work." },
    { level: 'A2', de: "Frühstückst du, bevor du zur Schule gehst?", vi: "Bạn ăn sáng trước khi đi học à?", en: "Do you have breakfast before you go to school?" },
    { level: 'A2', de: "Er fährt jeden Tag mit dem Bus zur Arbeit.", vi: "Anh ấy đi làm bằng xe buýt mỗi ngày.", en: "He goes to work by bus every day." },
    { level: 'A2', de: "Sie steht meistens um halb sieben auf.", vi: "Cô ấy thường dậy lúc sáu giờ rưỡi.", en: "She usually gets up at half past six." },
    { level: 'A2', de: "Wir haben am Morgen nicht viel Zeit.", vi: "Chúng tôi không có nhiều thời gian vào buổi sáng.", en: "We do not have much time in the morning." },
    { level: 'A2', de: "Ich habe Kaffee getrunken, bevor ich das Haus verlassen habe.", vi: "Tôi đã uống cà phê trước khi ra khỏi nhà.", en: "I drank coffee before I left the house." },
    { level: 'A2', de: "Was hast du am Morgen gemacht?", vi: "Bạn đã làm gì vào buổi sáng?", en: "What did you do in the morning?" },
    { level: 'A2', de: "Er ist zu spät gekommen, weil der Bus nicht gekommen ist.", vi: "Anh ấy đã đến muộn vì xe buýt không đến.", en: "He arrived late because the bus did not come." },
    { level: 'A2', de: "Sie hat mit ihrer Familie gefrühstückt.", vi: "Cô ấy đã ăn sáng với gia đình.", en: "She had breakfast with her family." },
    { level: 'A2', de: "Wir sind zu Fuß zur Schule gegangen.", vi: "Chúng tôi đã đi bộ đến trường.", en: "We walked to school." },
    { level: 'A2', de: "Ich muss nach der Arbeit einkaufen.", vi: "Tôi phải mua sắm sau giờ làm.", en: "I have to go shopping after work." },
    { level: 'A2', de: "Kannst du mich am Abend anrufen?", vi: "Bạn có thể gọi cho tôi vào buổi tối không?", en: "Can you call me in the evening?" },
    { level: 'A2', de: "Er kann nicht kommen, weil er krank ist.", vi: "Anh ấy không thể đến vì anh ấy bị bệnh.", en: "He cannot come because he is sick." },
    { level: 'A2', de: "Sie möchte sich ein bisschen ausruhen.", vi: "Cô ấy muốn nghỉ ngơi một chút.", en: "She would like to rest a little." },
    { level: 'A2', de: "Wir müssen heute die Wohnung aufräumen.", vi: "Chúng tôi phải dọn dẹp căn hộ hôm nay.", en: "We have to clean the apartment today." },
    { level: 'A2', de: "Ich denke, dass der Tag heute sehr stressig ist.", vi: "Tôi nghĩ rằng ngày hôm nay rất bận.", en: "I think that today is very busy." },
    { level: 'A2', de: "Weißt du, wann der Unterricht beginnt?", vi: "Bạn có biết khi nào lớp học bắt đầu không?", en: "Do you know when the lesson starts?" },
    { level: 'A2', de: "Er sagt, dass er keine Zeit hat.", vi: "Anh ấy nói rằng anh ấy không có thời gian.", en: "He says that he has no time." },
    { level: 'A2', de: "Sie lernt Deutsch, wenn sie Zeit hat.", vi: "Cô ấy học tiếng Đức khi cô ấy có thời gian.", en: "She learns German when she has time." },
    { level: 'A2', de: "Wir kochen am Abend zusammen.", vi: "Chúng tôi nấu ăn cùng nhau vào buổi tối.", en: "We cook together in the evening." },
    { level: 'A2', de: "Ich habe nach dem Abendessen Hausaufgaben gemacht.", vi: "Tôi đã làm bài tập về nhà sau bữa tối.", en: "I did homework after dinner." },
    { level: 'A2', de: "Hast du gestern einen Film gesehen?", vi: "Bạn đã xem phim hôm qua à?", en: "Did you watch a movie yesterday?" },
    { level: 'A2', de: "Er hat Musik gehört, während er gekocht hat.", vi: "Anh ấy đã nghe nhạc khi anh ấy nấu ăn.", en: "He listened to music while he was cooking." },
    { level: 'A2', de: "Sie hat eine E-Mail geschrieben, bevor sie schlafen gegangen ist.", vi: "Cô ấy đã viết một email trước khi đi ngủ.", en: "She wrote an email before she went to sleep." },
    { level: 'A2', de: "Wir haben unseren Freund angerufen.", vi: "Chúng tôi đã gọi điện cho bạn của chúng tôi.", en: "We called our friend." },
    { level: 'A2', de: "Ich will nicht zu spät schlafen gehen.", vi: "Tôi không muốn đi ngủ quá muộn.", en: "I do not want to go to bed too late." },
    { level: 'A2', de: "Du solltest dich mehr ausruhen.", vi: "Bạn nên nghỉ ngơi nhiều hơn.", en: "You should rest more." },
    { level: 'A2', de: "Er sollte mehr Wasser trinken.", vi: "Anh ấy nên uống nhiều nước hơn.", en: "He should drink more water." },
    { level: 'A2', de: "Sie muss bis sechs Uhr arbeiten.", vi: "Cô ấy phải làm việc đến sáu giờ.", en: "She has to work until six o’clock." },
    { level: 'A2', de: "Gestern war sehr anstrengend, aber heute ist es besser.", vi: "Ngày hôm qua rất mệt, nhưng hôm nay tốt hơn.", en: "Yesterday was very tiring, but today is better." }
  ],
  greetings: [
    {
      level: 'A1',
      de: "Ich heiße Anna und komme aus Vietnam.",
      vi: "Tôi tên Anna và đến từ Việt Nam.",
      errors: {
        "heise":   { correct:"heiße",   type:"spelling",  explain:"'heiße' dùng chữ 'ß' (Eszett), phát âm như 'ss'." },
        "heisse":  { correct:"heiße",   type:"close",     explain:"Gần đúng! Có thể dùng 'heisse' nhưng chuẩn hơn là 'heiße'." },
      }
    },
    {
      level: 'A1',
      de: "Guten Morgen, wie geht es dir?",
      vi: "Chào buổi sáng, bạn khỏe không?",
      errors: {
        "gutten": { correct: "Guten", type: "spelling", explain: "Guten chỉ có một chữ 't'." },
        "dir": { correct: "dir", type: "grammar", explain: "Dùng 'dir' cho ngôi 'du' trong cấu trúc 'wie geht es'." }
      }
    },
    {
      level: 'A1',
      de: "Dankeschön, bis bald!",
      vi: "Cảm ơn rất nhiều, hẹn sớm gặp lại!",
      errors: {
        "danke": { correct: "Dankeschön", type: "spelling", explain: "Dankeschön viết liền và có âm 'ö'." }
      }
    }
  ],
  travel: [
    {
      level: 'A1',
      de: "Wo wohnst du in Vietnam?",
      vi: "Bạn sống ở đâu tại Việt Nam?",
      errors: {
        "wonst": { correct: "wohnst", type: "spelling", explain: "Động từ 'wohnen' có chữ 'h' câm giúp kéo dài nguyên âm 'o'." }
      }
    },
    {
      level: 'A2',
      de: "Kannst du mir bitte helfen, den Koffer zu tragen?",
      vi: "Bạn có thể giúp tôi mang vali không?",
    }
  ],
  daily: [
    {
      level: 'A1',
      de: "Ich möchte heute einen Kaffee bestellen.",
      vi: "Tôi muốn gọi một tách cà phê hôm nay.",
      errors: {
        "mochte":  { correct:"möchte",  type:"umlaut",   explain:"Thiếu âm umlaut 'ö'. 'möchte' là dạng lịch sự của 'muốn'." },
        "kafe":    { correct:"Kaffee",  type:"spelling",  explain:"'Kaffee' cần viết hai chữ 'f' và 'ee'." },
      }
    },
    {
      level: 'A1',
      de: "Das Wetter ist heute sehr schön.",
      vi: "Thời tiết hôm nay rất đẹp.",
      errors: {
        "schan":   { correct:"schön",   type:"umlaut",   explain:"Thiếu âm umlaut 'ö'. 'schön' phát âm là /ʃøːn/." },
        "wether":  { correct:"Wetter",  type:"spelling",  explain:"'Wetter' cần viết hai chữ 't'." },
      }
    }
  ],
  work: [
    {
      level: 'A2',
      de: "Gestern Abend haben wir ein tolles Restaurant besucht.",
      vi: "Tối qua chúng tôi đã đến một nhà hàng tuyệt vời.",
    },
    {
      level: 'B1',
      de: "Obwohl es regnete, gingen wir spazieren.",
      vi: "Mặc dù trời mưa, chúng tôi vẫn đi dạo.",
    }
  ],
  numbers: [
    { level: 'A1', de: "null", vi: "Số 0" },
    { level: 'A1', de: "eins", vi: "Số 1" },
    { level: 'A1', de: "zwei", vi: "Số 2" },
    { level: 'A1', de: "drei", vi: "Số 3" },
    { level: 'A1', de: "vier", vi: "Số 4" },
    { level: 'A1', de: "fünf", vi: "Số 5", errors: { "funf": { correct: "fünf", type: "umlaut", explain: "Thiếu dấu ü." } } },
    { level: 'A1', de: "sechs", vi: "Số 6" },
    { level: 'A1', de: "sieben", vi: "Số 7" },
    { level: 'A1', de: "acht", vi: "Số 8" },
    { level: 'A1', de: "neun", vi: "Số 9" },
    { level: 'A1', de: "zehn", vi: "Số 10" },
    { level: 'A1', de: "elf", vi: "Số 11" },
    { level: 'A1', de: "zwölf", vi: "Số 12", errors: { "zwolf": { correct: "zwölf", type: "umlaut", explain: "Thiếu dấu ö." } } },
    { level: 'A1', de: "dreizehn", vi: "Số 13" },
    { level: 'A1', de: "vierzehn", vi: "Số 14" },
    { level: 'A1', de: "fünfzehn", vi: "Số 15" },
    { level: 'A1', de: "sechzehn", vi: "Số 16" },
    { level: 'A1', de: "siebzehn", vi: "Số 17" },
    { level: 'A1', de: "achtzehn", vi: "Số 18" },
    { level: 'A1', de: "neunzehn", vi: "Số 19" },
    { level: 'A1', de: "zwanzig", vi: "Số 20" },
    { level: 'A1', de: "einundzwanzig", vi: "Số 21" },
    { level: 'A1', de: "zweiundzwanzig", vi: "Số 22" },
    { level: 'A1', de: "dreiundzwanzig", vi: "Số 23" },
    { level: 'A1', de: "vierundzwanzig", vi: "Số 24" },
    { level: 'A1', de: "fünfundzwanzig", vi: "Số 25" },
    { level: 'A1', de: "sechsundzwanzig", vi: "Số 26" },
    { level: 'A1', de: "siebenundzwanzig", vi: "Số 27" },
    { level: 'A1', de: "achtundzwanzig", vi: "Số 28" },
    { level: 'A1', de: "neunundzwanzig", vi: "Số 29" },
    { level: 'A1', de: "dreißig", vi: "Số 30", errors: { "dreissig": { correct: "dreißig", type: "spelling", explain: "30 dùng ß thay vì ss." } } },
    { level: 'A1', de: "vierzig", vi: "Số 40" },
    { level: 'A1', de: "fünfzig", vi: "Số 50" },
    { level: 'A1', de: "sechzig", vi: "Số 60" },
    { level: 'A1', de: "siebzig", vi: "Số 70" },
    { level: 'A1', de: "achtzig", vi: "Số 80" },
    { level: 'A1', de: "neunzig", vi: "Số 90" },
    { level: 'A1', de: "hundert", vi: "Số 100" }
  ]
};

type Speed = 'slow' | 'normal' | 'fast';
type Level = 'A1' | 'A2' | 'B1' | 'B2';

interface LevelToken {
  word: string;
  type: string;
  userWord?: string;
  correction?: string;
  explain?: string;
}

interface LevelError {
  wrong: string;
  correct: string;
  type: string;
  explain: string;
}

interface Feedback {
  tokens: LevelToken[];
  errors: LevelError[];
  score: number;
  isPerfect: boolean;
  earnedXp: number;
}

const sentenceTranslationsEn: Record<string, string> = {
  "Ich heiße Anna und komme aus Vietnam.": "My name is Anna and I come from Vietnam.",
  "Guten Morgen, wie geht es dir?": "Good morning, how are you?",
  "Dankeschön, bis bald!": "Thank you very much, see you soon!",
  "Wo wohnst du in Vietnam?": "Where do you live in Vietnam?",
  "Kannst du mir bitte helfen, den Koffer zu tragen?": "Can you please help me carry the suitcase?",
  "Ich möchte heute einen Kaffee bestellen.": "I would like to order a coffee today.",
  "Das Wetter ist heute sehr schön.": "The weather is very beautiful today.",
  "Gestern Abend haben wir ein tolles Restaurant besucht.": "Yesterday evening we visited a great restaurant.",
  "Obwohl es regnete, gingen wir spazieren.": "Although it was raining, we went for a walk.",
};

const explainTranslationsEn: Record<string, string> = {
  "'heiße' dùng chữ 'ß' (Eszett), phát âm như 'ss'.": "'heiße' uses the letter 'ß' (Eszett), pronounced like 'ss'.",
  "Gần đúng! Có thể dùng 'heisse' nhưng chuẩn hơn là 'heiße'.": "Almost correct! 'heisse' is acceptable, but 'heiße' is more standard.",
  "Guten chỉ có một chữ 't'.": "'Guten' has only one 't'.",
  "Dùng 'dir' cho ngôi 'du' trong cấu trúc 'wie geht es'.": "Use 'dir' for 'du' in the 'wie geht es' structure.",
  "Dankeschôn viết liền và có âm 'ö'.": "'Dankeschön' is written as one word and has the 'ö' sound.",
  "Dankeschön viết liền và có âm 'ö'.": "'Dankeschön' is written as one word and has the 'ö' sound.",
  "Động từ 'wohnen' có chữ 'h' câm giúp kéo dài nguyên âm 'o'.": "The verb 'wohnen' has a silent 'h' that lengthens the 'o' sound.",
  "Thiếu âm umlaut 'ö'. 'möchte' là dạng lịch sự của 'muốn'.": "Missing the 'ö' umlaut. 'möchte' is the polite form of 'want'.",
  "'Kaffee' cần viết hai chữ 'f' và 'ee'.": "'Kaffee' must be written with two 'f's and 'ee's.",
  "Thiếu âm umlaut 'ö'. 'schön' phát âm là /ʃøːn/.": "Missing the 'ö' umlaut. 'schön' is pronounced /ʃøːn/.",
  "'Wetter' cần viết hai chữ 't'.": "'Wetter' must be written with two 't's.",
  "Thiếu dấu ü.": "Missing the 'ü' umlaut.",
  "Thiếu dấu ö.": "Missing the 'ö' umlaut.",
  "30 dùng ß thay vì ss.": "30 uses ß instead of ss.",
};

const getExplainTranslation = (explain: string, lang: 'vi' | 'en' | null) => {
  if (lang === 'en') {
    return explainTranslationsEn[explain] || explain;
  }
  return explain;
};

const getSentenceTranslation = (de: string, vi: string, lang: 'vi' | 'en' | null, en?: string) => {
  if (lang === 'en') {
    if (en) return en;
    if (sentenceTranslationsEn[de]) return sentenceTranslationsEn[de];
    if (de.toLowerCase() === "null") return "Number 0";
    if (vi.startsWith("Số ")) return vi.replace("Số ", "Number ");
    return vi;
  }
  return vi;
};

export const DictationTrainer = () => {
  const { t, nativeLanguage } = useLanguage();
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [level, setLevel] = useState<Level>('A1');
  const [queue, setQueue] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [showHint, setShowHint] = useState(0);
  const [replaysLeft, setReplaysLeft] = useState(3);
  const [speed, setSpeed] = useState<Speed>('normal');
  const [isPlaying, setIsPlaying] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [xp, setXp] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [streak, setStreak] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showXpPopup, setShowXpPopup] = useState<{ amount: number; perfect: boolean } | null>(null);

  // Session results tracking states
  const [sessionScores, setSessionScores] = useState<number[]>([]);
  const [sessionXpGained, setSessionXpGained] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const synthesisRef = useRef<SpeechSynthesis | null>(typeof window !== 'undefined' ? window.speechSynthesis : null);
  const hasAutoPlayed = useRef(false);

  const resetQuestionState = React.useCallback((lvl: Level) => {
    setInputValue('');
    setShowHint(0);
    const maxR = lvl === 'B2' ? 1 : lvl === 'B1' ? 2 : 3;
    setReplaysLeft(maxR);
    setIsAnswered(false);
    setFeedback(null);
    setIsPlaying(false);
    hasAutoPlayed.current = false;
    if (synthesisRef.current) synthesisRef.current.cancel();
  }, []);

  const startTopic = React.useCallback((topicId: string, lvl: Level) => {
    const sentences = DB[topicId] || [];
    const filtered = sentences.filter(q => q.level === lvl || (lvl === 'A1' && (q.level === 'A1' || !q.level)));
    const activeSentences = filtered.length > 0 ? filtered : sentences;
    const shuffled = [...activeSentences].sort(() => Math.random() - 0.5);
    setQueue(shuffled);
    setCurrentIdx(0);
    resetQuestionState(lvl);
  }, [resetQuestionState]);

  useEffect(() => {
    if (selectedTopic) {
      startTopic(selectedTopic, level);
    }
  }, [selectedTopic, level, startTopic]);

  const speak = React.useCallback(() => {
    if (!queue[currentIdx] || !synthesisRef.current) return;
    synthesisRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(queue[currentIdx].de);
    utterance.lang = 'de-DE';
    utterance.rate = speed === 'slow' ? 0.60 : speed === 'fast' ? 1.05 : 0.85;

    // Prefer highest quality/natural German voice for more emotional and premium audio
    const voices = window.speechSynthesis.getVoices();
    const premiumGerman = voices.find(v => 
      v.lang.toLowerCase().includes('de') && 
      (v.name.toLowerCase().includes('google') || v.name.toLowerCase().includes('premium') || v.name.toLowerCase().includes('natural') || v.name.toLowerCase().includes('siri'))
    );
    const anyGerman = premiumGerman || voices.find(v => v.lang.toLowerCase().startsWith('de'));
    if (anyGerman) {
      utterance.voice = anyGerman;
    }

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    synthesisRef.current.speak(utterance);
  }, [queue, currentIdx, speed]);

  useEffect(() => {
    if (queue.length > 0 && !isAnswered && !hasAutoPlayed.current) {
      hasAutoPlayed.current = true;
      const timer = setTimeout(() => {
        speak();
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [currentIdx, queue, isAnswered, speak]);

  const togglePlay = () => {
    if (isPlaying) {
      if (synthesisRef.current) synthesisRef.current.cancel();
      setIsPlaying(false);
    } else {
      speak();
    }
  };

  const replay = () => {
    if (replaysLeft <= 0) return;
    setReplaysLeft(prev => prev - 1);
    speak();
  };

  const handleLevelChange = (lvl: Level) => {
    setLevel(lvl);
    if (selectedTopic) {
      startTopic(selectedTopic, lvl);
    }
  };

  const normalize = (s: string) => {
    return s.toLowerCase()
      .replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/ß/g,'ss')
      .replace(/[.,!?;:]/g,'').trim();
  };

  const levenshtein = (a: string, b: string) => {
    const la = a.length, lb = b.length;
    if (!la) return lb; if (!lb) return la;
    const dp = Array.from({length:la+1},(_,i)=>Array.from({length:lb+1},(_,j)=>i===0?j:j===0?i:0));
    for(let i=1;i<=la;i++) for(let j=1;j<=lb;j++)
      dp[i][j]=a[i-1]===b[j-1]?dp[i-1][j-1]:1+Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]);
    return dp[la][lb];
  };

  const checkAnswer = () => {
    if (isAnswered || !inputValue.trim()) return;
    const q = queue[currentIdx];
    const userWords = inputValue.trim().split(/\s+/).filter(Boolean);
    const corrWords = q.de.split(/\s+/).filter(Boolean);
    const errorDict = q.errors || {};

    let matched = 0;
    const tokens: LevelToken[] = [];
    const errors: LevelError[] = [];

    corrWords.forEach((cw: string) => {
      const cwClean = cw.replace(/[.,!?;:]/g,'');
      const cwNorm  = normalize(cwClean);

      let bestIdx = -1, bestDist = Infinity;
      userWords.forEach((uw: string, ui: number) => {
        const uwNorm = normalize(uw.replace(/[.,!?;:]/g,''));
        const d = levenshtein(cwNorm, uwNorm);
        if (d < bestDist) { bestDist = d; bestIdx = ui; }
      });

      const userWord = bestIdx >= 0 ? userWords[bestIdx] : null;
      const uwClean  = userWord ? userWord.replace(/[.,!?;:]/g,'') : '';
      const uwNorm   = normalize(uwClean);

      const dictKey = Object.keys(errorDict).find(k => normalize(k) === uwNorm);
      const dictEntry = dictKey ? errorDict[dictKey] : null;

      if (!userWord || bestDist > cwClean.length * 0.8) {
        tokens.push({ word: cwClean, type: 'missing', correction: cwClean });
        errors.push({ 
          wrong: nativeLanguage === 'en' ? '(missing)' : '(thiếu)', 
          correct: cwClean, 
          type: 'missing', 
          explain: nativeLanguage === 'en' ? `The word "${cwClean}" is missing.` : `Từ "${cwClean}" bị thiếu.` 
        });
      } else if (bestDist === 0) {
        tokens.push({ word: cwClean, type: 'correct', userWord: uwClean });
        matched++;
      } else if (bestDist <= 2) {
        const explainOriginal = dictEntry?.explain || `"${uwClean}" rất gần với từ gốc "${cwClean}".`;
        const explain = nativeLanguage === 'en' 
          ? (dictEntry ? getExplainTranslation(dictEntry.explain, 'en') : `"${uwClean}" is very close to "${cwClean}".`)
          : explainOriginal;
        tokens.push({ word: cwClean, type: 'close', userWord: uwClean, correction: cwClean, explain });
        errors.push({ wrong: uwClean, correct: cwClean, type: 'close', explain });
      } else {
        const explainOriginal = dictEntry?.explain || `"${uwClean}" nghe chưa đúng "${cwClean}".`;
        const explain = nativeLanguage === 'en'
          ? (dictEntry ? getExplainTranslation(dictEntry.explain, 'en') : `"${uwClean}" is incorrect compared to "${cwClean}".`)
          : explainOriginal;
        tokens.push({ word: cwClean, type: 'wrong', userWord: uwClean, correction: cwClean, explain });
        errors.push({ wrong: uwClean, correct: cwClean, type: 'wrong', explain });
      }
    });

    const score = Math.round((matched / corrWords.length) * 100);
    const isPerfect = errors.length === 0 && score === 100;
    const earnedXp = isPerfect ? 20 : score >= 80 ? 15 : score >= 50 ? 10 : 5;

    setFeedback({ tokens, errors, score, isPerfect, earnedXp });
    setIsAnswered(true);
    setXp(prev => prev + earnedXp);
    setSessionScores(prev => [...prev, score]);
    setSessionXpGained(prev => prev + earnedXp);

    if (isPerfect) setStreak(prev => prev + 1);
    else setStreak(0);

    setShowXpPopup({ amount: earnedXp, perfect: isPerfect });
    setTimeout(() => setShowXpPopup(null), 3000);
  };

  const nextQuestion = () => {
    // If not answered yet, we count it as 0 score for the session average
    if (!isAnswered) {
      setSessionScores(prev => [...prev, 0]);
    }
    
    if (currentIdx + 1 < queue.length) {
      setCurrentIdx(prev => prev + 1);
      resetQuestionState(level);
    } else {
      setShowResults(true);
    }
  };

  const getHintText = () => {
    const q = queue[currentIdx];
    if (showHint === 1) return nativeLanguage === 'en' ? `Number of words: ${q.de.split(' ').length} words` : `Số lượng từ: ${q.de.split(' ').length} từ`;
    if (showHint === 2) {
      return q.de.split(' ').map((w: string) => {
        const clean = w.replace(/[.,!?;:]/g,'');
        return clean ? clean[0] + '_'.repeat(Math.max(0, clean.length - 1)) : '';
      }).join(' ');
    }
    if (showHint === 3) {
      const translatedMeaning = getSentenceTranslation(q.de, q.vi, nativeLanguage, q.en);
      return nativeLanguage === 'en' ? `Exact meaning: "${translatedMeaning}"` : `Dịch nghĩa chính xác: "${translatedMeaning}"`;
    }
    return '';
  };

  // UI STATE: Topic choice
  if (!selectedTopic) {
    return (
      <div className="w-full max-w-[1100px] mx-auto bg-white border-[1.5px] border-slate-300 rounded-2xl overflow-hidden flex flex-col min-h-[700px] shadow-sm">
        {/* Selection Header */}
        <header className="h-[52px] border-b-[1.5px] border-slate-300 flex items-center justify-between px-5 bg-white select-none shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="text-sm font-black text-slate-950 tracking-tight uppercase">Listening Practice</span>
            <span className="text-slate-300 text-sm">/</span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t('selectDictationTopic')}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-300 bg-slate-100/50 text-xs font-bold text-indigo-700">
              <Zap className="w-3.5 h-3.5 fill-current" /> {240 + xp} XP
            </div>
          </div>
        </header>

        {/* Selection Content Center */}
        <div className="flex-1 p-6 lg:p-12 overflow-y-auto flex flex-col gap-10 bg-slate-50/20" style={{ contentVisibility: 'auto' }}>
          
          <div className="text-center max-w-xl mx-auto space-y-4 pt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-200 rounded-full text-indigo-700 text-xs font-bold uppercase tracking-wider">
              <Headphones className="w-3.5 h-3.5" /> {t('dictationBadge')}
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-black text-slate-950 uppercase tracking-tight">
              {t('aiListeningPractice')}
            </h1>
            
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              {t('listeningDesc')}
            </p>
          </div>

          {/* Topic selection tiles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TOPICS.map((topic) => {
              const TopicIcon = topic.icon;
              return (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic.id)}
                  className="group relative bg-white border-[1.5px] border-slate-300 rounded-xl p-6 text-left hover:border-slate-950 transition-all shadow-sm flex flex-col justify-between hover:shadow-md cursor-pointer h-[170px]"
                >
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="w-9 h-9 rounded-lg bg-slate-950 text-white flex items-center justify-center">
                        <TopicIcon className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-[10px] font-black tracking-widest uppercase text-slate-400 group-hover:text-slate-950 transition-colors">
                        Bắt đầu →
                      </span>
                    </div>

                    <h3 className="text-base font-black text-slate-950 uppercase tracking-tight leading-snug">
                      {nativeLanguage === 'en' ? (t((topic.id + 'TopicTitle') as keyof typeof translations['en']) || topic.title) : topic.title}
                    </h3>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                      {nativeLanguage === 'en' ? (t((topic.id + 'TopicViTitle') as keyof typeof translations['en']) || topic.viTitle) : topic.viTitle}
                    </p>
                  </div>
                  
                  <p className="text-xs text-slate-500 line-clamp-2 mt-2 leading-relaxed">
                    {t((topic.id + 'TopicDesc') as keyof typeof translations['en']) || topic.description}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-10 border-t border-slate-200/60 pt-8 text-center">
            <div>
              <p className="text-2xl font-black text-slate-950">{nativeLanguage === 'en' ? '100+ Questions' : '100+ Câu'}</p>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">{nativeLanguage === 'en' ? 'Practice Vault' : 'Kho từ vựng chép'}</p>
            </div>
            <div className="w-px h-8 bg-slate-200 self-center hidden sm:block" />
            <div>
              <p className="text-2xl font-black text-slate-950">{TOPICS.length} {nativeLanguage === 'en' ? 'Topics' : 'Chủ đề'}</p>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">{nativeLanguage === 'en' ? 'Diverse selections' : 'Phân bổ đa dạng'}</p>
            </div>
            <div className="w-px h-8 bg-slate-200 self-center hidden sm:block" />
            <div>
              <p className="text-2xl font-black text-slate-950">{nativeLanguage === 'en' ? 'AI Scored' : 'AI Chấm'}</p>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">{nativeLanguage === 'en' ? 'Instant AI Grading' : 'Nhận phản hồi ngay'}</p>
            </div>
          </div>

        </div>
      </div>
    );
  }

  const currentTopic = TOPICS.find(t => t.id === selectedTopic);
  const progressPercentage = queue.length > 0 ? Math.round(((currentIdx + 1) / queue.length) * 100) : 0;

  // Circular progress compute
  const getStrokeOffset = (scoreValue: number) => {
    const circumference = 125.6; // 2 * Math.PI * 20
    return circumference - (scoreValue / 100) * circumference;
  };

  if (showResults) {
    const avgScore = sessionScores.length > 0 
      ? Math.round(sessionScores.reduce((sum, s) => sum + s, 0) / sessionScores.length)
      : 0;

    return (
      <div className="max-w-2xl mx-auto py-12 space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-500 w-full px-4">
        <div className="text-center space-y-4">
          <div className="relative inline-block">
             <div className="w-24 h-24 bg-indigo-500/10 rounded-full flex items-center justify-center text-4xl mx-auto blur-xl absolute inset-0 animate-pulse" />
             <div className="w-24 h-24 bg-white border-2 border-slate-950 rounded-full flex items-center justify-center text-4xl relative z-10 shadow-lg">
              {avgScore >= 80 ? '🏆' : '⭐'}
             </div>
          </div>
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-950 uppercase">{t('listeningResultsTitle')}</h2>
            <p className="text-sm font-bold text-slate-500 mt-1">{t('listeningEarnedXpMsg').replace('{amount}', String(sessionXpGained))}</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border-[1.5px] border-slate-300 p-8 shadow-sm relative overflow-hidden">
          <div className="flex flex-col items-center text-center space-y-5">
            <h3 className="text-lg font-black text-slate-950 uppercase tracking-wide">
              {avgScore >= 80 ? t('resultsRatingGreat') : avgScore >= 60 ? t('resultsRatingGood') : t('resultsRatingTryMore')}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              {avgScore >= 80 
                ? t('excelFeedback')
                : avgScore >= 60 
                  ? t('goodFeedback')
                  : t('tryMoreFeedback')}
            </p>
            
            <div className="pt-4 flex gap-3 w-full max-w-sm">
              <button 
                onClick={() => {
                  setShowResults(false);
                  setSessionScores([]);
                  setSessionXpGained(0);
                  setCurrentIdx(0);
                  if (selectedTopic) {
                    startTopic(selectedTopic, level);
                  }
                }}
                className="w-full bg-slate-950 text-white font-black py-3.5 rounded-xl border border-slate-950 hover:bg-slate-800 transition-all text-xs tracking-wider uppercase shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" /> {t('startNewRound')}
              </button>
              <button 
                onClick={() => {
                  setSelectedTopic(null);
                  setShowResults(false);
                  setSessionScores([]);
                  setSessionXpGained(0);
                  setCurrentIdx(0);
                }}
                className="w-full bg-white text-slate-950 font-black py-3.5 rounded-xl border border-slate-300 hover:bg-slate-50 transition-all text-xs tracking-wider uppercase shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                {t('selectOtherTopic')}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1100px] mx-auto bg-white border-[1.5px] border-slate-300 rounded-2xl overflow-hidden flex flex-col min-h-[700px]">
      
      {/* Upper floating notification */}
      <AnimatePresence>
        {showXpPopup && (
          <motion.div 
            initial={{ opacity: 0, y: 30, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 right-8 z-[999] bg-slate-950 text-lime-400 px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-2 border border-lime-400/20 font-bold text-xs uppercase tracking-wider"
          >
            {showXpPopup.perfect ? "🎉" : "✧"} +{showXpPopup.amount} XP {showXpPopup.perfect && (nativeLanguage === 'en' ? " · Perfect!" : " · Hoàn hảo!")}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Head section */}
      <header className="h-[52px] border-b-[1.5px] border-slate-300 flex items-center justify-between px-5 bg-white select-none shrink-0">
        <div className="flex items-center gap-2.5">
          <span className="text-sm font-black text-slate-950 tracking-tight uppercase">Listening Dictation</span>
          <span className="text-slate-300 text-sm">/</span>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {nativeLanguage === 'en' ? (t((selectedTopic + 'TopicTitle') as keyof typeof translations['en']) || currentTopic?.title) : currentTopic?.title}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setSelectedTopic(null)}
            className="text-xs font-black text-slate-500 hover:text-slate-950 transition-colors flex items-center gap-1 uppercase"
          >
            <X className="w-3.5 h-3.5" /> {t('exit')}
          </button>
        </div>
      </header>

      {/* Game main view pane */}
      <div className="flex-1 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x-[1.5px] divide-slate-300 overflow-hidden">
        
        {/* LEFT COLUMN: Input form & players */}
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto flex flex-col gap-6" style={{ contentVisibility: 'auto' }}>
          
          {/* Progress row */}
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-bold text-slate-400 min-w-[50px]">
              {currentIdx + 1} / {queue.length > 0 ? queue.length : 1}
            </span>
            <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200" role="progressbar" aria-valuenow={progressPercentage} aria-valuemin={0} aria-valuemax={100}>
              <div 
                className="h-full bg-slate-950 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <span className="text-xs font-black text-slate-950">{progressPercentage}%</span>
          </div>

          {/* Player Widget (Thử thách nghe) */}
          <div className="border-[1.5px] border-slate-300 rounded-xl p-6 relative overflow-hidden bg-white shadow-sm flex flex-col gap-5">
            <div className="absolute top-0 right-0 p-4 opacity-10 font-serif text-[110px] select-none pointer-events-none leading-none">
              “
            </div>
            
            <div className="flex items-center justify-between w-full relative z-10 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-slate-950 rounded-lg flex items-center justify-center text-white">
                  <Volume2 className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-lg uppercase tracking-wider block leading-none mb-0.5">
                    {t('dictationChallenge')}
                  </span>
                </div>
              </div>
              
              <div className="text-xs font-semibold text-slate-500">
                {nativeLanguage === 'en' ? "Replays left: " : "Lượt nghe còn lại: "}<span className={cn(replaysLeft === 0 ? "text-red-500 font-bold" : "text-amber-600 font-bold")}>{replaysLeft}</span>
              </div>
            </div>

            {/* Bouncing waves control core */}
            <div className="flex flex-col items-center gap-6 py-2">
              <div className="flex items-center gap-5 w-full max-w-md">
                <button 
                  onClick={togglePlay}
                  disabled={isAnswered}
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-md focus:outline-none shrink-0 cursor-pointer",
                    isPlaying 
                      ? "bg-red-500 text-white animate-pulse" 
                      : "bg-slate-950 text-white hover:scale-105"
                  )}
                  title={isPlaying ? (nativeLanguage === 'en' ? "Pause playback" : "Tạm dừng phát") : (nativeLanguage === 'en' ? "Play German audio" : "Phát âm thanh câu tiếng Đức")}
                >
                  {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                </button>
                
                {/* Visualizer soundwave */}
                <div className="flex-1 h-10 flex items-center gap-1 border-b border-dashed border-slate-200 pb-1 px-1">
                  {[...Array(22)].map((_, i) => (
                    <div 
                      key={i}
                      className={cn(
                        "flex-1 rounded-full transition-all duration-300",
                        isPlaying ? "bg-slate-950" : "bg-slate-100"
                      )}
                      style={{ 
                        height: `${25 + Math.random() * 70}%`,
                        animationName: isPlaying ? 'wave' : 'none',
                        animationDuration: `${0.4 + Math.random() * 0.4}s`,
                        animationTimingFunction: 'ease-in-out',
                        animationIterationCount: 'infinite',
                        animationDirection: 'alternate',
                        animationDelay: `${i * 0.04}s`
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Speedy tuner & level config */}
              <div className="flex items-center justify-between w-full max-w-md gap-3 mt-1">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={replay}
                    disabled={replaysLeft <= 0 || isAnswered}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-650 border border-slate-200 transition-all font-bold text-xs disabled:opacity-40 select-none cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> {t('listenAgain')}
                  </button>
                  
                  {/* Speed Selection Buttons */}
                  <div className="flex items-center bg-slate-50 p-0.5 rounded-lg border border-slate-200">
                    {(['slow', 'normal', 'fast'] as Speed[]).map((s) => (
                      <button
                        key={s}
                        onClick={() => setSpeed(s)}
                        className={cn(
                          "px-2 py-1 rounded-md text-[10px] font-bold transition-all cursor-pointer",
                          speed === s ? "bg-white text-slate-950 shadow-sm font-black" : "text-slate-400 hover:text-slate-600"
                        )}
                        title={nativeLanguage === 'en' ? `Speed: ${s}` : `Tốc độ: ${s}`}
                      >
                        {s === 'slow' ? `🐢 ${t('speedSlow')}` : s === 'normal' ? `🐇 ${t('speedNormal')}` : `⚡ ${t('speedFast')}`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Level toggle right alignment */}
                <div className="flex items-center bg-slate-50 p-0.5 rounded-lg border border-slate-200">
                  {(['A1', 'A2', 'B1', 'B2'] as Level[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => handleLevelChange(l)}
                      className={cn(
                        "px-2 py-0.5 rounded-[4px] font-mono text-[10px] font-bold transition-all cursor-pointer",
                        level === l 
                          ? "bg-slate-950 text-white font-black" 
                          : "text-slate-400 hover:text-slate-600"
                      )}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
              @keyframes wave {
                from { transform: scaleY(0.3); }
                to { transform: scaleY(1); }
              }
            `}} />
          </div>

          {/* User Input & helper area */}
          <div className="space-y-3">
            <div className="border-[1.5px] border-slate-300 rounded-xl overflow-hidden focus-within:border-slate-950 transition-all bg-white shadow-sm">
              <div className="px-4 pt-3 pb-1 flex justify-between items-center bg-slate-50/50">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">{t('typeYourTrans')}</span>
                <span className="text-[10px] font-bold text-slate-400">
                  {inputValue.length} {nativeLanguage === 'en' ? 'chars' : 'ký tự'}
                </span>
              </div>
              
              <textarea 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isAnswered}
                placeholder={t('textareaPlaceholder')}
                rows={3}
                className="w-full border-none outline-none font-sans text-base text-slate-950 resize-none px-4 py-3 bg-transparent line-height-relaxed min-h-[90px]"
              />

              <div className="px-4 py-2 bg-slate-50 border-t border-slate-200/60 flex items-center justify-between text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1.5 font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                  {t('typedWordForWord')}
                </span>
                {showHint > 0 && <span className="text-amber-600 font-black">{t('activeHintStatus').replace('{showHint}', String(showHint))}</span>}
              </div>
            </div>

            {/* Hint Box Content details */}
            {showHint > 0 && (
              <div className="mt-1 p-3.5 rounded-xl border border-dashed border-amber-300 bg-amber-50/60 text-xs font-medium text-slate-700 animate-in fade-in slide-in-from-top-1.5 duration-200">
                <span className="font-bold text-amber-800">{nativeLanguage === 'en' ? "Spelling Hint:" : "Gợi ý cách chép:"}</span> {getHintText()}
              </div>
            )}
          </div>

          {/* Submitting buttons flow panel */}
          <div className="space-y-3">
            {!isAnswered ? (
              <button 
                onClick={checkAnswer}
                disabled={!inputValue.trim()}
                className="w-full py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-black text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <CheckCircle className="w-4 h-4" />
                {t('checkSpellingResult')}
              </button>
            ) : (
              <button 
                onClick={nextQuestion}
                className="w-full py-3.5 rounded-xl bg-indigo-650 hover:bg-indigo-700 text-white font-black text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/15 cursor-pointer"
              >
                <span>{currentIdx + 1 === queue.length ? (nativeLanguage === 'en' ? 'Back to first sentence' : 'Trở lại câu đầu tiên') : (nativeLanguage === 'en' ? 'Continue with next sentence' : 'Tiếp tục câu tiếp theo')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            <div className="flex gap-2">
              <button 
                onClick={() => setShowHint(prev => Math.min(prev + 1, 3))}
                disabled={isAnswered || showHint >= 3}
                className="flex-1 py-2.5 rounded-xl border-[1.5px] border-slate-300 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-950 font-bold text-xs tracking-normal transition-all disabled:opacity-40"
              >
                {t('requestHint')}
              </button>
              <button 
                onClick={() => setInputValue(queue[currentIdx]?.de || '')}
                disabled={isAnswered || !queue[currentIdx]}
                className="flex-1 py-2.5 rounded-xl border-[1.5px] border-slate-300 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-950 font-bold text-xs tracking-normal transition-all disabled:opacity-40"
              >
                {t('showSolution')}
              </button>
              <button 
                onClick={nextQuestion}
                className="flex-1 py-2.5 rounded-xl border-[1.5px] border-slate-300 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-950 font-bold text-xs tracking-normal transition-all disabled:opacity-40"
              >
                {t('skipWord')}
              </button>
            </div>
          </div>

        </main>

        {/* RIGHT COLUMN: Dictation analysis feedback */}
        <aside className="w-full md:w-[42%] bg-slate-50/50 flex flex-col overflow-y-auto" style={{ contentVisibility: 'auto' }}>
          
          <div className="px-5 py-4 border-b-[1.5px] border-slate-300 flex items-center justify-between shrink-0 bg-white">
            <span className="text-xs font-black text-slate-950 uppercase tracking-widest flex items-center gap-1.5">
              <Bot className="w-4 h-4 text-slate-800" /> {t('analysisFeedbackHead')}
            </span>
          </div>

          {/* STATE: Waiting for input chép */}
          {!feedback && (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8 gap-4 min-h-[350px]">
              <div className="w-12 h-12 rounded-xl border-[1.5px] border-slate-300 flex items-center justify-center text-slate-400 bg-white shadow-sm">
                <Volume2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{t('noResultsYet')}</h4>
                <p className="text-xs text-slate-500 leading-relaxed max-w-[240px] mt-1 mx-auto">
                  {t('listenCarefullyMsg')}
                </p>
              </div>
              <div className="flex flex-col gap-2.5 w-full max-w-[210px] mt-2">
                <div className="flex items-center gap-2.5 px-3 py-2 border border-slate-200 rounded-lg bg-white text-xs text-slate-650 font-bold">
                  <Check className="w-4 h-4 text-slate-400" /> {t('wordByWordMatch')}
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2 border border-slate-200 rounded-lg bg-white text-xs text-slate-650 font-bold">
                  <Check className="w-4 h-4 text-slate-400" /> {t('accuracyPercentageEngine')}
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2 border border-slate-200 rounded-lg bg-white text-xs text-slate-650 font-bold">
                  <Check className="w-4 h-4 text-slate-400" /> {t('umlautCorrectionEngine')}
                </div>
              </div>
            </div>
          )}

          {/* STATE: Result Chép Submitted */}
          {feedback && (
            <div className="p-4 space-y-5 flex-1 animate-in fade-in slide-in-from-right-3 duration-300">
              
              {/* Gauges display grid */}
              <div className="grid grid-cols-3 gap-2.5">
                {/* Accuracy Gauge */}
                <div className="border-[1.5px] border-slate-300 rounded-xl p-3 text-center bg-white shadow-sm flex flex-col items-center min-w-0">
                  <div className="w-12 h-12 relative mb-1.5">
                    <svg viewBox="0 0 48 48" className="w-full h-full -rotate-90">
                      <circle className="stroke-slate-100 fill-none" strokeWidth="3.5" cx="24" cy="24" r="20"/>
                      <circle 
                        className="stroke-slate-900 fill-none transition-all duration-1000" 
                        strokeWidth="3.5" 
                        strokeLinecap="round"
                        cx="24" 
                        cy="24" 
                        r="20" 
                        strokeDasharray="125.6" 
                        strokeDashoffset={getStrokeOffset(feedback.score)}
                      />
                    </svg>
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-black text-slate-950">{feedback.score}</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider truncate">{t('accuracyLabel')}</span>
                </div>

                {/* Replays Score Gauge */}
                <div className="border-[1.5px] border-slate-300 rounded-xl p-3 text-center bg-white shadow-sm flex flex-col items-center min-w-0">
                  <div className="w-12 h-12 relative mb-1.5">
                    <svg viewBox="0 0 48 48" className="w-full h-full -rotate-90">
                      <circle className="stroke-slate-100 fill-none" strokeWidth="3.5" cx="24" cy="24" r="20"/>
                      <circle 
                        className="stroke-slate-700 fill-none transition-all duration-1000" 
                        strokeWidth="3.5" 
                        strokeLinecap="round"
                        cx="24" 
                        cy="24" 
                        r="20" 
                        strokeDasharray="125.6" 
                        strokeDashoffset={getStrokeOffset(Math.round((replaysLeft / (level === 'B2' ? 1 : level === 'B1' ? 2 : 3)) * 100))}
                      />
                    </svg>
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-black text-slate-700">
                      {Math.round((replaysLeft / (level === 'B2' ? 1 : level === 'B1' ? 2 : 3)) * 100)}%
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider truncate">{t('unusedReplaysLabel')}</span>
                </div>

                {/* Perfect / Completion Gauge */}
                <div className="border-[1.5px] border-slate-300 rounded-xl p-3 text-center bg-white shadow-sm flex flex-col items-center min-w-0">
                  <div className="w-12 h-12 relative mb-1.5">
                    <svg viewBox="0 0 48 48" className="w-full h-full -rotate-90">
                      <circle className="stroke-slate-100 fill-none" strokeWidth="3.5" cx="24" cy="24" r="20"/>
                      <circle 
                        className="stroke-slate-400 fill-none transition-all duration-1000" 
                        strokeWidth="3.5" 
                        strokeLinecap="round"
                        cx="24" 
                        cy="24" 
                        r="20" 
                        strokeDasharray="125.6" 
                        strokeDashoffset={getStrokeOffset(Math.max(0, 100 - feedback.errors.length * 20))}
                      />
                    </svg>
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-black text-slate-500">
                      {Math.max(0, 100 - feedback.errors.length * 20)}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider truncate">{t('spellingSkillsLabel')}</span>
                </div>
              </div>

              {/* Comparison Section */}
              <div className="bg-white rounded-xl border-[1.5px] border-slate-300 p-4.5 space-y-3.5 shadow-sm">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5 mb-1">
                  {nativeLanguage === 'en' ? '✎ Transcription Alignment' : '✎ So khớp câu viết'}
                </span>
                
                {inputValue.trim() && (
                  <div className="rounded-lg p-2.5 border-[1.5px] border-slate-200 bg-slate-50 border-l-4 border-l-slate-400">
                    <div className="text-[9px] font-black tracking-wider uppercase text-slate-500 mb-1">{nativeLanguage === 'en' ? 'Your typed transcript' : 'Câu bạn đã gõ'}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {feedback.tokens.map((t, index) => (
                        <span 
                          key={index}
                          className={cn(
                            "text-xs font-bold px-1.5 py-0.5 rounded transition-colors",
                            t.type === 'correct' && "bg-green-50 text-green-700 border border-green-200",
                            t.type === 'close' && "bg-amber-50 text-amber-700 border border-amber-200",
                            t.type === 'wrong' && "bg-red-50 text-red-600 border border-red-200 line-through decoration-red-400 decoration-1.5",
                            t.type === 'missing' && "bg-slate-100 text-slate-400 border border-slate-200"
                          )}
                        >
                          {t.type === 'missing' ? (nativeLanguage === 'en' ? '[ missing ]' : '[ thiếu ]') : t.userWord || t.word}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="rounded-lg p-3 border-[1.5px] border-slate-950 bg-slate-50 border-l-4 border-l-slate-900 group relative">
                  <div className="text-[9px] font-black tracking-wider uppercase text-slate-700 mb-1 flex items-center justify-between">
                    <span>{nativeLanguage === 'en' ? 'Standard German Answer' : 'Đáp án tiếng Đức chuẩn'}</span>
                    <button 
                      onClick={speak}
                      className="text-slate-550 hover:text-slate-950 p-1 rounded hover:bg-slate-200 transition-colors cursor-pointer"
                      title={nativeLanguage === 'en' ? 'Play standard voice query' : 'Phát lại giọng đọc chuẩn'}
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-sm font-black text-slate-900 select-all leading-tight pr-6">
                    {queue[currentIdx]?.de}
                  </p>
                  <p className="mt-2 text-xs text-slate-500 font-bold leading-relaxed border-t border-slate-200/50 pt-1.5">
                    {nativeLanguage === 'en' ? '🇬🇧' : '🇻🇳'} {getSentenceTranslation(queue[currentIdx]?.de || '', queue[currentIdx]?.vi || '', nativeLanguage, queue[currentIdx]?.en)}
                  </p>
                </div>
              </div>

              {/* Error analysis warnings details */}
              {feedback.errors.length > 0 ? (
                <div className="bg-white rounded-xl border-[1.5px] border-slate-300 p-4.5 space-y-3 shadow-sm">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    {nativeLanguage === 'en' ? '✦ Spelling Errors / Mismatched Words' : '✦ Những từ viết sai / chưa khớp'}
                  </span>
                  
                  <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                    {feedback.errors.map((e, index) => (
                      <div key={index} className="rounded-lg p-2.5 border-[1.5px] border-red-100 bg-red-50/50 flex gap-2.5">
                        <AlertCircle className="w-3.5 h-3.5 text-red-500 mt-0.5 shrink-0" />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 text-xs font-semibold">
                            <span className="text-red-650 bg-red-100/50 px-1 rounded line-through truncate max-w-[120px]">{e.wrong}</span>
                            <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
                            <span className="text-green-700 bg-green-100/50 px-1 rounded truncate max-w-[120px]">{e.correct}</span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-1 pl-0.5 leading-relaxed font-medium">
                            {e.explain}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-green-50 border-[1.5px] border-green-200 rounded-xl p-4.5 space-y-1 shadow-sm flex items-start gap-2.5">
                  <span className="text-lg">🎉</span>
                  <div>
                    <div className="text-[10px] font-black text-green-800 uppercase tracking-widest leading-none mb-1">
                      {nativeLanguage === 'en' ? 'Exquisite!' : 'Tuyệt mỹ!'}
                    </div>
                    <p className="text-xs text-green-800 leading-normal font-medium">
                      {nativeLanguage === 'en' 
                        ? 'Your transcription made no spelling mistakes or word omissions. Your German listening skills are top-notch!' 
                        : 'Bản nghe chép của bạn không mắc phải bất kỳ lỗi chính tả hay bỏ sót từ nào. Giác quan tiếng Đức của bạn rất nhạy Bén!'}
                    </p>
                  </div>
                </div>
              )}

              {/* Custom XP rewards feedback check */}
              <div className="bg-indigo-50 border-[1.5px] border-indigo-200 rounded-xl p-4.5 space-y-1 shadow-sm">
                <div className="text-[9px] font-black text-indigo-750 uppercase tracking-widest">
                  {nativeLanguage === 'en' ? '✦ Practice Achievements' : '✦ Thành quả luyện tập'}
                </div>
                <p className="text-xs text-indigo-900 leading-relaxed font-bold">
                  {feedback.isPerfect 
                    ? (nativeLanguage === 'en' ? "Accumulated +20 Grand Prize XP (Perfect!)" : "Tích luỹ +20 XP Độc đắc (Hoàn hảo)") 
                    : (nativeLanguage === 'en' ? `Accumulated +${feedback.earnedXp} XP (${feedback.score}% accuracy)` : `Tích luỹ +${feedback.earnedXp} XP (${feedback.score}% chính xác)`)}
                </p>
                <p className="text-[10.5px] text-indigo-750/80 leading-normal">
                  {nativeLanguage === 'en' 
                    ? 'You can click "Retry" to write again for a perfect score, or click "Continue" to conquer new sentences.' 
                    : 'Bạn có thể bấm "Thử lại" để chép lại đạt điểm tối đa, hoặc bấm nút "Tiếp tục" để chinh phục câu mới.'}
                </p>
              </div>

            </div>
          )}

        </aside>

      </div>
      
    </div>
  );
};
