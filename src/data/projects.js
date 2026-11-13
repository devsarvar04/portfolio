import project1Img from '../assets/tarjimonPro.png'; // Tarjimon Pro rasmi
import project2Img from '../assets/hemisTestPlatform.png'; // HEMIS Test rasmi
import project3Img from '../assets/academiaTalent.png'; // Academia Talent Selection rasmi

export const projectsData = [
    {
        id: 'tarjimon-pro',
        title: 'Tarjimon Pro',
        subtitle: 'Brauzer Kengaytmasi (Browser Extension)',
        desc: "Veb-sahifalardagi matnlarni tezkor va qulay tarjima qilish uchun mo'ljallangan zamonaviy brauzer kengaytmasi.",
        image: project1Img,
        tags: ['React', 'Vite', 'JavaScript', 'Tailwind CSS/SASS'],
        github: 'none',
        demo: 'https://microsoftedge.microsoft.com/addons/detail/tarjimon-pro/fifmbpgakandnhofknehkklpfaidajfl',
        features: [
            'Tanlangan matnni belgilanganda avtomatik tarjima qilish',
            "Yozilgan matnlarni shu joyning o'zida tarjima qilish"
        ],
        installation: [
            'Microsoft Edge brauzeriga kiring',
            "Yuqori o'ng burchakda 'Extension(Расширения)' tugmasini bosing",
            "'Get extensions for Microsoft Edge(Получить расширения для Microsoft Edge)' bo'limiga kiring",
            "'Tarjimon Pro' deb qidiring",
            'Chiqqan extensionni yuklab oling va kengaytma brauzeringizda avtomatik ishlashni boshlaydi',
            '🚫 Git Hub repo uchun ruxsat berilmagan'
        ],
        usage: "Har qanday veb-saytda kerakli matnni belgilang (highlight qiling) va o'zbek tiliga avtomatik tarjima qilinadi, matnlar bilan ishlaganda ham yozgan matningizni tarjima qilish uchun tugma chiqadi hamda xohlagan tilingizga shu zahoti tarjima qiling."
    },
    {
        id: 'hemis-test',
        title: 'HEMIS Test Tizimi Nusxasi',
        subtitle: "O'quv Test Platformasi",
        desc: "O'quv platformasidagi test topshirish jarayoni, real vaqt rejimidagi taymer va natijalarni hisoblash funksionaliga ega veb - ilova.",
        image: project2Img,
        tags: ['React', 'Vite', 'JavaScript', 'Tailwind CSS/SASS', 'Firebase/Firestore', 'LocalStorage'],
        github: 'https://github.com/devsarvar04/hemis-test-copy',
        demo: 'https://gost-testi.netlify.app/',
        features: [
            'Real vaqtdagi teskari taymer (Countdown timer)',
            "Savollar o'rtasida qulay navigatsiya(o'tkazib yuborish, belgilash)",
            'Test yakunlangach, xatolarni chuqur tahlil qilish',
            'HEMIS test tizimi dizayniga moslashtirilgan interfeys',
            'Offline rejimda ham ishlash imkoniyati'
        ],
        installation: [
            'Omborxonani klonlang: `git clone https://github.com/devsarvar04/hemis-test-copy.git`',
            'Papka ichiga kiring: `cd hemis-test`',
            "Kutubxonalarni o'rnating: `npm install`",
            'Loyiha serverini ishga tushiring: `npm run dev`',
            'Brauzerda `http://localhost:5173` manziliga kiring'
        ],
        usage: 'Testni boshlash tugmasini bosing, berilgan vaqt ichida savollarga javob bering va "Testni yakunlash" tugmasi orqali natijangizni tekshiring.'
    },
    {
        id: 'academia-talent',
        title: 'Academia Talent Selection — 2026',
        subtitle: "Tanlov va Qabul Platformasi (Full-Stack)",
        desc: "Academia Xususiy Maktabi tomonidan tashkil etilgan 'Shahrisabz IT & English Talent Selection — 2026' tanlovi ishtirokchilarini onlayn ro'yxatdan o'tkazish, Telegram OTP orqali tasdiqlash, shaxsiy kabinet va admin boshqaruv paneliga ega full-stack veb-platforma.",
        image: project3Img,
        tags: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'Supabase (PostgreSQL)', 'Telegram Bot API'],
        github: 'none',
        demo: 'https://www.academiamaktabi.uz/',
        features: [
            'Telegram Bot orqali real telefon raqamni 5 xonali OTP kod bilan tasdiqlash va parolni tiklash',
            "Maktab o'quvchilari (7–11-sinf) va bitiruvchilar uchun moslashuvchan dinamik ro'yxatdan o'tish formasi",
            "Ishtirokchi shaxsiy kabineti: ariza holatini (Timeline) kuzatish, tashkilotchi xabarlarini o'qish va ma'lumotlarni tahrirlash",
            "Admin Boshqaruv Paneli: jonli statistika, qidiruv, filtrlash va o'quvchi statusini o'zgartirib Telegram orqali xabarnoma yuborish",
            "Ro'yxatdan o'tganlar bazasini veb-saytdan yoki Telegram botdan (.xlsx) Excel formatda yuklab olish"
        ],
        installation: [
            'Rasmiy veb-saytga kiring: `https://www.academiamaktabi.uz`',
            "Bosh sahifadagi 'Ro'yxatdan o'tish' tugmasini bosing va shaxsiy ma'lumotlaringizni kiriting",
            "Telegram botga o'tib, telefon raqamingizni tasdiqlang va 5 xonali kodni oling",
            'Kodni saytga kiritib shaxsiy kabinetingizni faollashtiring',
            '🚫 Real tashkilot loyihasi bo\'lgani sababli GitHub repozitoriy yopiq (Private)'
        ],
        usage: "Sayt orqali ro'yxatdan o'tib, Telegram bot yordamida raqamingizni tasdiqlang. Shaxsiy kabinetga kirib arizangiz qaysi bosqichda ekanligini (Yuborildi, Saralashda, Qabul qilindi) va tashkilotchilar tomonidan yuborilgan xabarlarni kuzatib boring."
    }
];