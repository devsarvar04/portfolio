import project1Img from '../assets/tarjimonPro.png'; // Tarjimon Pro rasmi
import project2Img from '../assets/hemisTestPlatform.png'; // HEMIS Test rasmi

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
    }
];