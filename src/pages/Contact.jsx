import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    FaEnvelope,
    FaTelegram,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt,
    FaPaperPlane
} from 'react-icons/fa';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('https://portfolio-backend-3muv.onrender.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            if (res.ok) {
                setSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
            }
        } catch (error) {
            console.error("Xatolik:", error);
        }
    };

    const contactInfo = [
        {
            title: "Email",
            value: "sarvarsafarov379@gmail.com",
            link: "mailto:sarvarsafarov379@gmail.com",
            icon: FaEnvelope,
            color: "text-emerald-400"
        },
        {
            title: "Telegram",
            value: "@devsarvar",
            link: "https://t.me/devsarvar",
            icon: FaTelegram,
            color: "text-sky-400"
        },
        {
            title: "GitHub",
            value: "github.com/devsarvar04",
            link: "https://github.com/devsarvar04",
            icon: FaGithub,
            color: "text-white"
        },
        {
            title: "LinkedIn",
            value: "linkedin.com/in/sarvar safarov",
            link: "https://www.linkedin.com/in/sarvar-safarov-710509381",
            icon: FaLinkedin,
            color: "text-blue-400"
        }
    ];

    return (
        <main className="max-w-4xl mx-auto px-6 py-12 space-y-12 text-neutral-100">

            {/* SARLAVHA */}
            <div className="border-b border-neutral-800 pb-6 space-y-2">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Bog'lanish</h1>
                <p className="text-neutral-400 text-sm sm:text-base">
                    Yangi loyihalar, hamkorlik yoki shunchaki savollaringiz bo'lsa, xabar qoldiring!
                </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8">

                {/* ALOQA MA'LUMOTLARI (2 ustun) */}
                <div className="md:col-span-2 space-y-4">
                    <h2 className="text-xl font-bold text-white mb-4">Aloqa tarmoqlari</h2>

                    {contactInfo.map((info, idx) => {
                        const IconComponent = info.icon;
                        return (
                            <a
                                key={idx}
                                href={info.link}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-4 p-4 bg-neutral-800/40 border border-neutral-800 rounded-xl hover:border-neutral-700 hover:bg-neutral-800/80 transition duration-200 group block"
                            >
                                <div className="p-3 bg-neutral-800 rounded-lg group-hover:scale-105 transition">
                                    <IconComponent className={`text-xl ${info.color}`} />
                                </div>
                                <div>
                                    <p className="text-xs text-neutral-400 font-medium">{info.title}</p>
                                    <p className="text-sm font-semibold text-neutral-200 group-hover:text-emerald-400 transition">
                                        {info.value}
                                    </p>
                                </div>
                            </a>
                        );
                    })}

                    <div className="p-4 bg-neutral-800/20 border border-neutral-800/80 rounded-xl flex items-center gap-3 text-neutral-400 text-sm">
                        <FaMapMarkerAlt className="text-emerald-500 shrink-0 text-lg" />
                        <span>Yakkabog', Qashqadaryo</span>
                    </div>
                </div>

                {/* XABAR YUBORISH FORMASI (3 ustun) */}
                <div className="md:col-span-3 bg-neutral-800/30 border border-neutral-800 p-6 rounded-2xl space-y-6">
                    <h2 className="text-xl font-bold text-white">Xabar yuborish</h2>

                    {submitted ? (
                        <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-sm font-medium text-center space-y-1">
                            <p className="font-bold text-base">Xabaringiz qabul qilindi! 🎉</p>
                            <p className="text-xs text-neutral-400">Tez orada siz bilan bog'lanaman.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                                    Ismingiz
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Ismingizni kiriting"
                                    className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                                    Email manzilingiz
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="namuna@gmail.com"
                                    className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                                    Xabar
                                </label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Loyihangiz yoki taklifingiz haqida yozing..."
                                    className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-semibold rounded-lg transition duration-200 flex items-center justify-center gap-2 text-sm"
                            >
                                <FaPaperPlane className="text-xs" />
                                <span>Xabarni yuborish</span>
                            </button>
                        </form>
                    )}
                </div>

            </div>

            {/* BOSH SAHIFAGA QAYTISH */}
            <div className="border-t border-neutral-800 pt-6">
                <Link to="/" className="text-sm text-neutral-400 hover:text-white transition">
                    ← Bosh sahifaga qaytish
                </Link>
            </div>

        </main>
    );
}