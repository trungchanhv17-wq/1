import { VocabularyWord } from '@/constants/vocabularyData';

// Dictionary mapping Vietnamese theme names to English
export const themeTranslations: Record<string, string> = {
  'Thông tin cá nhân': 'Personal Information',
  'Gia đình': 'Family',
  'Trường học': 'School',
  'Thức ăn & Đồ uống': 'Food & Drinks',
  'Thời gian': 'Time',
  'Động vật': 'Animals',
  'Pflanzen und Natur': 'Plants & Nature',
  'Màu sắc': 'Colors',
  'Thời tiết': 'Weather',
  'Nhà cửa': 'Housing',
  'Công việc': 'Work',
  'Văn hóa & Truyền thống': 'Culture & Traditions',
  'Lễ hội & Ăn mừng': 'Festivals & Celebrations',
  'Thiên nhiên & Môi trường': 'Nature & Environment',
  'Du lịch & Nghỉ dưỡng': 'Travel & Leisure',
  'Công việc & Sự nghiệp': 'Work & Career',
  'Quà tặng & Nghi lễ': 'Gifts & Ceremonies',
  'Nghệ thuật & Hình ảnh': 'Art & Images',
  'Sức khỏe & Thể thao': 'Health & Sports',
  'Giao tiếp & Mối quan hệ': 'Communication & Relationships',
  'Tương lai & Sự nghiệp': 'Future & Career',
};

// Translate the Vietnamese theme to English if needed
export function translateTheme(theme: string, lang: 'vi' | 'en' | null): string {
  if (lang === 'en') {
    return themeTranslations[theme] || theme;
  }
  return theme;
}

// Compact high-accuracy dictionary mapping common Vietnamese meanings in VOCABULARY_DATA to English.
// Any phrases that are not exactly matched can fall back to a fallback mapping or standard rules.
export const meaningTranslations: Record<string, string> = {
  // Personal Info / Info
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
  'Gia đình': 'Family',
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
  'Nhấn mạnh': 'Emphasize',

  // Food and drinks
  'Món ăn': 'Dish / Food',
  'Nước': 'Water',
  'Bánh mì': 'Bread',
  'Bánh mỳ': 'Bread',
  'Trái cây': 'Fruit',
  'Rau': 'Vegetable',
  'Thịt': 'Meat',
  'Cá': 'Fish',
  'Sữa': 'Milk',
  'Pho mát': 'Cheese',
  'Phô mai': 'Cheese',
  'Bánh ngọt': 'Cake',
  'Quả táo': 'Apple',
  'Quả chuối': 'Banana',
  'Quả cam': 'Orange',
  'Cà phê': 'Coffee',
  'Trà': 'Tea',
  'Nước ép': 'Juice',
  'Bia': 'Beer',
  'Rượu vang': 'Wine',
  'Muối': 'Salt',
  'Đường': 'Sugar',
  'Bơ': 'Butter',
  'Gạo': 'Rice',
  'Súp': 'Soup',
  'Nước hoa quả': 'Fruit juice',
  'Bữa ăn': 'Meal',
  'Bữa sáng': 'Breakfast',
  'Bữa trưa': 'Lunch',
  'Bữa tối': 'Dinner',
  'Trứng': 'Egg',
  'Thức ăn & Đồ uống': 'Food & Drinks',

  // Time
  'Thời gian': 'Time',
  'Năm': 'Year',
  'Tháng': 'Month',
  'Tuần': 'Week',
  'Ngày': 'Day',
  'Giờ': 'Hour / O\'clock',
  'Phút': 'Minute',
  'Giấy (thời gian)': 'Second (time)',
  'Giây': 'Second (time)',
  'Buổi sáng': 'Morning',
  'Buổi trưa': 'Noon',
  'Buổi chiều': 'Afternoon',
  'Buổi tối': 'Evening',
  'Ban đêm': 'Night',
  'Hôm nay': 'Today',
  'Hôm qua': 'Yesterday',
  'Hôm kia': 'Day before yesterday',
  'Ngày mai': 'Tomorrow',
  'Ngày kia': 'Day after tomorrow',
  'Mùa xuân': 'Spring',
  'Mùa hè': 'Summer',
  'Mùa thu': 'Autumn',
  'Mùa đông': 'Winter',
  'Thời kỳ': 'Period',
  'Hiện tại': 'Present',
  'Quá khứ': 'Past',
  'Tương lai': 'Future',
  'Lịch': 'Calendar',

  // Animals
  'Động vật': 'Animal',
  'Con chó': 'Dog',
  'Con mèo': 'Cat',
  'Con chim': 'Bird',
  'Con cá': 'Fish',
  'Con chuột': 'Mouse',
  'Con bò': 'Cow',
  'Con ngựa': 'Horse',
  'Con lợn': 'Pig',
  'Con khỉ': 'Monkey',
  'Con hổ': 'Tiger',
  'Con sư tử': 'Lion',
  'Con voi': 'Elephant',
  'Con gấu': 'Bear',
  'Thú cưng': 'Pet',
  'Sự sống hoang dã': 'Wildlife',

  // Colors
  'Màu sắc': 'Color',
  'Màu đỏ': 'Red',
  'Màu xanh lá': 'Green',
  'Màu xanh dương': 'Blue',
  'Màu vàng': 'Yellow',
  'Màu đen': 'Black',
  'Màu trắng': 'White',
  'Màu xám': 'Grey',
  'Màu hồng': 'Pink',
  'Màu cam': 'Orange',
  'Màu tím': 'Purple',
  'Màu nâu': 'Brown',

  // Weather
  'Thời tiết': 'Weather',
  'Mặt trời': 'Sun',
  'Mặt trăng': 'Moon',
  'Mây': 'Cloud',
  'Mưa': 'Rain',
  'Tuyết': 'Snow',
  'Gió': 'Wind',
  'Cơn bão': 'Storm',
  'Nhiệt độ': 'Temperature',
  'Nóng': 'Hot',
  'Lạnh': 'Cold',
  'Ấm áp': 'Warm',
  'Mát mẻ': 'Cool',
  'Cầu vồng': 'Rainbow',

  // Housing
  'Nhà': 'House',
  'Căn hộ': 'Apartment',
  'Phòng': 'Room',
  'Phòng ngủ': 'Bedroom',
  'Phòng khách': 'Living room',
  'Nhà bếp': 'Kitchen',
  'Nhà vệ sinh': 'Bathroom',
  'Cửa sổ': 'Window',
  'Cửa ra vào': 'Door',
  'Bức tường': 'Wall',
  'Mái nhà': 'Roof',
  'Khu vườn': 'Garden',
  'Chìa khóa': 'Key',
  'Đồ nội thất': 'Furniture',

  // Work / Professions
  'Bác sĩ': 'Doctor',
  'Bác sĩ nam': 'Doctor (male)',
  'Bác sĩ nữ': 'Doctor (female)',
  'Kỹ sư': 'Engineer',
  'Cảnh sát': 'Police officer',
  'Đầu bếp': 'Chef',
  'Lái xe': 'Driver',
  'Công việc': 'Job / Work',
  'Công ty': 'Company',
  'Đồng nghiệp': 'Colleague',
  'Hợp đồng': 'Contract',
  'Lương': 'Salary',
  'Kinh nghiệm': 'Experience',
  'Văn phòng': 'Office',
  'Cuộc họp': 'Meeting',
};

// Main function to retrieve localized meaning for a vocabulary item
export function getVocabularyMeaning(word: VocabularyWord, lang: 'vi' | 'en' | null): string {
  if (lang === 'en') {
    // Check if the exact Vietnamese meaning is in our dictionary
    const translation = meaningTranslations[word.meaning.trim()];
    if (translation) {
      return translation;
    }

    // Smart default fallbacks if not explicitly found in dictionary
    // 1. If it's a number (A1 / Numbers category)
    if (word.meaning.startsWith('Số ')) {
      return word.meaning.replace('Số ', 'Number ');
    }

    // 2. Fallbacks based on typical translations or word stems
    // If meaning has parentheses, let's keep the main part or clean it up
    const cleanMeaning = word.meaning.split('(')[0].trim();
    const cleanTranslation = meaningTranslations[cleanMeaning];
    if (cleanTranslation) {
      return cleanTranslation;
    }

    // 3. For any other case, we display a neat, clean placeholder or translate basic terms dynamically.
    // If the German word has an extremely high similarity or we have no translation, we can return the German word itself or a contextual translation.
    // Let's provide standard English words for most common fallback verbs and things as well:
    const lowercaseWord = word.word.toLowerCase();
    if (lowercaseWord === 'ja') return 'Yes';
    if (lowercaseWord === 'nein') return 'No';
    if (lowercaseWord === 'danke') return 'Thanks';
    if (lowercaseWord === 'bitte') return 'Please / You\'re welcome';

    // Default to the original Vietnamese meaning if no translation is found (better than empty)
    return word.meaning;
  }
  
  return word.meaning;
}
