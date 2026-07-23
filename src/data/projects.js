import project1Img from '../assets/tarjimonPro.png'; // Tarjimon Pro rasmi
import project2Img from '../assets/hemisTestPlatform.png'; // HEMIS Test rasmi

export const projectsData = [
    {
        id: 'tarjimon-pro',
        title: 'Tarjimon Pro',
        subtitle: 'Brauzer Kengaytmasi (Browser Extension)',
        desc: "Veb-sahifalardagi matnlarni tezkor va qulay tarjima qilish uchun mo'ljallangan zamonaviy brauzer kengaytmasi.",
        image: project1Img,
        tags: ['React', 'JavaScript', 'Chrome API', 'CSS3'],
        github: 'none',
        demo: 'https://microsoftedge.microsoft.com/addons/detail/tarjimon-pro/fifmbpgakandnhofknehkklpfaidajfl',
        features: [
            'Tanlangan matnni belgilanganda avtomatik tarjima qilish',
            "Pop-up darchasida so'zlar lug'ati va talaffuz audiosi",
            "Qorong'i(Dark) va yorug' (Light) rejimlar",
            'Tezkor klavishlar (Hotkeys) orqali boshqaruv'
        ],
        installation: [
            'Omborxonani klonlang: `git clone https://github.com/username/tarjimon-pro.git`',
            'Loyiha papkasiga kiring: `cd tarjimon-pro`',
            "Kutubxonalarni o'rnating: `npm install`",
            'Kengaytmani build qiling: `npm run build`',
            'Chrome brauzerida `chrome://extensions` sahifasini oching',
            "'Developer mode' (Dasturchi rejimi)ni yoqing",
            "'Load unpacked' tugmasini bosib, hosil bo'lgan `dist` papkasini tanlang"
        ],
        usage: "Har qanday veb-saytda kerakli matnni belgilang (highlight qiling) va paydo bo'lgan Tarjimon Pro belgisini bosing yoki `Alt + T` tugmalar birikmasidan foydalaning."
    },
    {
        id: 'hemis-test',
        title: 'HEMIS Test Tizimi Nusxasi',
        subtitle: "O'quv Test Platformasi",
        desc: "O'quv platformasidagi test topshirish jarayoni, real vaqt rejimidagi taymer va natijalarni hisoblash funksionaliga ega veb - ilova.",
        image: project2Img,
        tags: ['React', 'JavaScript', 'SASS', 'Vite'],
        github: 'https://github.com/username/hemis-test',
        demo: 'https://gost-testi.netlify.app/',
        features: [
            'Real vaqtdagi teskari taymer (Countdown timer)',
            "Savollar o'rtasida qulay navigatsiya(o'tkazib yuborish, belgilash)",
            'Test yakunlangach, xatolarni chuqur tahlil qilish',
            'HEMIS rasmiy tizimi dizayniga 100% moslashtirilgan interfeys'
        ],
        installation: [
            'Omborxonani klonlang: `git clone https://github.com/username/hemis-test.git`',
            'Papka ichiga kiring: `cd hemis-test`',
            "Kutubxonalarni o'rnating: `npm install`",
            'Loyiha serverini ishga tushiring: `npm run dev`',
            'Brauzerda `http://localhost:5173` manziliga kiring'
        ],
        usage: 'Testni boshlash tugmasini bosing, berilgan vaqt ichida savollarga javob bering va "Testni yakunlash" tugmasi orqali natijangizni tekshiring.'
    }
];