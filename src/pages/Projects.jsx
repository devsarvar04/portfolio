import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

export default function Projects() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12 space-y-8">

            {/* Sarlavha */}
            <div className="border-b border-neutral-800 pb-5 space-y-2">
                <h1 className="text-3xl font-extrabold text-white tracking-tight">Barcha loyihalar</h1>
                <p className="text-neutral-400 text-sm">
                    Men yaratgan va ustida ishlagan barcha veb-loyihalar va ilovalar ro'yxati.
                </p>
            </div>

            {/* Loyihalar ro'yxati (Grid) */}
            <div className="grid md:grid-cols-2 gap-6">
                {projectsData.map((project) => (
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
                                    <span key={idx} className="px-2.5 py-1 text-xs bg-neutral-800/80 text-neutral-300 rounded-md border border-neutral-700/50 backdrop-blur-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="pt-6">
                <Link to="/" className="text-sm text-neutral-400 hover:text-white transition">
                    ← Bosh sahifaga qaytish
                </Link>
            </div>

        </main>
    );
}