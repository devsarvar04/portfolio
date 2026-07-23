import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects'; // Loyihalarni import qilamiz
import profileImg from '../assets/profileImg.png'; 

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mainSkills = ["HTML5 / CSS3", "SASS", "JavaScript (ES6+)", "React.js", "Vite", "Git / GitHub", "REST API"];

  return (
    <main className="relative max-w-4xl mx-auto px-6 py-12 space-y-20">
      
      {/* HERO SECTION (O'zgarmadi) */}
      <section className="space-y-6">
        <div className="flex items-center gap-5 pb-2">
          <img 
            src={profileImg} 
            alt="Mening rasmim" 
            className="w-20 h-20 rounded-full object-cover border-4 border-neutral-800 shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setIsModalOpen(true)}
          />
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium bg-neutral-800 text-emerald-400 rounded-full border border-neutral-700/50">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Yangi loyihalar uchun ochiqman
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">Salom, men Frontend Dasturchiman.</h1>
        <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">Foydalanuvchilar uchun qulay, tezkor va zamonaviy veb-interfeyslar hamda amaliy yechimlar yarataman.</p>
        <div className="flex gap-4 pt-2">
          <Link to="/projects" className="px-5 py-2.5 bg-white text-neutral-900 rounded-lg font-medium text-sm hover:bg-neutral-200 transition">Loyihalarni ko'rish →</Link>
          <Link to="/contact" className="px-5 py-2.5 bg-neutral-800 text-white rounded-lg font-medium text-sm hover:bg-neutral-700 border border-neutral-700 transition">Bog'lanish</Link>
        </div>
      </section>

      {/* TANLANGAN LOYIHALAR BO'LIMI - LINK ULANGI */}
      <section className="space-y-6">
        <div className="flex justify-between items-end border-b border-neutral-800 pb-3">
          <h2 className="text-xl font-bold text-white">Loyihalar</h2>
          <Link to="/projects" className="text-sm text-neutral-400 hover:text-white transition">Barchasi →</Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            // Loyiha kartochkasi Link orqali mos sahifaga yo'naltiradi
            <Link 
              key={project.id} 
              to={`/projects/${project.id}`}
              className="relative aspect-[4/3] group rounded-xl border border-neutral-800 overflow-hidden cursor-pointer shadow-lg hover:border-emerald-500/50 transition-all duration-300 block"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 z-0"
              />
              <div className="relative z-10 w-full h-full p-6 flex flex-col justify-end items-start space-y-3 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-lg font-semibold text-white tracking-tight">{project.title}</h3>
                <p className="text-neutral-300 text-sm leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-2.5 py-1 text-xs bg-neutral-800/80 text-neutral-300 rounded-md border border-neutral-700/50 backdrop-blur-sm">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ASOSIY STAK VA FOOTER (O'zgarmadi) */}
      <section className="space-y-6">
        <div className="flex justify-between items-end border-b border-neutral-800 pb-3">
          <h2 className="text-xl font-bold text-white">Texnologiyalar</h2>
          <Link to="/about" className="text-sm text-neutral-400 hover:text-white transition">Batafsil haqimda →</Link>
        </div>
        <div className="flex flex-wrap gap-3">
          {mainSkills.map((skill, index) => (
            <span key={index} className="px-3.5 py-1.5 bg-neutral-800/60 text-neutral-300 text-sm rounded-lg border border-neutral-700/50">{skill}</span>
          ))}
        </div>
      </section>

      <footer className="pt-10 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Barcha huquqlar himoyalangan.</p>
        <div className="flex space-x-5">
          <a href="https://github.com/devsarvar04" target="_blank" rel="noreferrer" className="hover:text-white transition">GitHub</a>
          <a href="https://www.linkedin.com/in/sarvar-safarov-710509381" target="_blank" rel="noreferrer" className="hover:text-white transition">LinkedIn</a>
          <a href="https://t.me/devsarvar" target="_blank" rel="noreferrer" className="hover:text-white transition">Telegram</a>
        </div>
      </footer>

      {/* MODAL (O'zgarmadi) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in" onClick={() => setIsModalOpen(false)}>
          <button className="fixed top-6 right-6 text-white/70 hover:text-white text-3xl font-light transition" onClick={() => setIsModalOpen(false)}>&times;</button>
          <img src={profileImg} alt="Kattalashtirilgan rasm" className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl border-4 border-neutral-700 object-cover animate-zoom-in" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

    </main>
  );
}