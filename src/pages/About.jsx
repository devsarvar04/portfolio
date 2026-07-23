import { Link } from 'react-router-dom';
import profileImg from '../assets/profileImg.png';

// Eng barqaror va kafolatlangan ikonkalarni import qilamiz
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt,
    FaGithub
} from 'react-icons/fa';
import {
    SiSass,
    SiVite,
    // SiTailwindcss
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

export default function About() {
    const skills = [
        { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
        { name: "SASS", icon: SiSass, color: "text-pink-500" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
        { name: "React.js", icon: FaReact, color: "text-sky-400" },
        { name: "Vite", icon: SiVite, color: "text-purple-400" },
        // { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
        { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
        { name: "GitHub", icon: FaGithub, color: "text-white" },
        { name: "REST API", icon: TbApi, color: "text-emerald-400" },
    ];

    return (
        <main className="max-w-4xl mx-auto px-6 py-12 space-y-12 text-neutral-100">

            {/* SARLAVHA */}
            <div className="border-b border-neutral-800 pb-6 space-y-2">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Men haqimda</h1>
                <p className="text-neutral-400 text-sm sm:text-base">
                    Frontend dasturchi hamda zamonaviy veb-interfeyslar yaratuvchisi.
                </p>
            </div>

            {/* MA'LUMOT VA RASM */}
            <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                    <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-800/40 p-2">
                        <img
                            src={profileImg}
                            alt="Profile"
                            className="w-full aspect-square object-cover rounded-xl"
                        />
                    </div>
                </div>

                <div className="md:col-span-2 space-y-4 text-neutral-300 leading-relaxed">
                    <h2 className="text-2xl font-bold text-white">Salom, men Frontend Dasturchiman 👋</h2>
                    <p>
                        Men zamonaviy, tezkor va foydalanuvchilar uchun qulay bo'lgan frontend veb-ilovalarni yaratishga ishtiyoqi baland dasturchiman. Kod yozishda toza arxitektura, responsive dizayn va yuqori unumdorlikka alohida e'tibor qarataman.
                    </p>
                    <p>
                        Veb-dasturlashdan tashqari, real muammolarga amaliy yechim beruvchi startaplar va brauzer kengaytmalari ustida ham ishlayman. Doimiy ravishda yangi texnologiyalarni o'rganish va o'z ko'nikmalarimni oshirish ustida izlanaman.
                    </p>
                </div>
            </div>

            {/* TEXNIK KO'NIKMALAR (IKONKALAR BILAN) */}
            <div className="space-y-4 border-t border-neutral-800 pt-8">
                <h3 className="text-xl font-bold text-white">Texnik ko'nikmalar</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {skills.map((skill, idx) => {
                        const IconComponent = skill.icon;
                        return (
                            <div
                                key={idx}
                                className="flex items-center gap-3 px-3.5 py-2.5 bg-neutral-800/40 text-neutral-200 rounded-xl text-sm font-medium border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/80 transition duration-200"
                            >
                                {IconComponent && <IconComponent className={`text-xl ${skill.color} shrink-0`} />}
                                <span className="truncate">{skill.name}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* TUGMALAR */}
            <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                <Link to="/" className="text-sm text-neutral-400 hover:text-white transition">
                    ← Bosh sahifaga qaytish
                </Link>
                <Link
                    to="/projects"
                    className="px-5 py-2.5 bg-emerald-500 text-neutral-950 font-semibold rounded-lg hover:bg-emerald-400 transition text-sm"
                >
                    Loyihalarni ko'rish →
                </Link>
            </div>

        </main>
    );
}