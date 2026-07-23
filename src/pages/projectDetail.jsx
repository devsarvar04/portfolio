import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

function ActionButton({ href, defaultText, isPrimary = false }) {
  const isDisabled = !href || href === 'none';

  if (isDisabled) {
    return (
      <div className="group relative px-4 py-2 bg-neutral-800/40 text-neutral-500 rounded-lg text-sm font-medium border border-neutral-800/80 cursor-not-allowed select-none min-w-[150px] text-center transition duration-200">
        <span className="block group-hover:hidden">
          {defaultText}
        </span>
        <span className="hidden group-hover:block text-red-400 font-semibold">
          Ruxsat berilmagan
        </span>
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={
        isPrimary
          ? "px-4 py-2 bg-emerald-500 text-neutral-950 rounded-lg text-sm font-semibold hover:bg-emerald-400 transition min-w-[150px] text-center"
          : "px-4 py-2 bg-neutral-800 text-white rounded-lg text-sm font-medium hover:bg-neutral-700 border border-neutral-700 transition min-w-[150px] text-center"
      }
    >
      {defaultText}
    </a>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((item) => item.id === id);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-white">Loyiha topilmadi</h2>
        <Link to="/projects" className="text-emerald-400 hover:underline">← Loyihalarga qaytish</Link>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      <div className="space-y-4">
        <Link to="/projects" className="inline-flex items-center text-sm text-neutral-400 hover:text-white transition">
          ← Barcha loyihalarga qaytish
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{project.title}</h1>
            <p className="text-neutral-400 text-sm mt-1">{project.subtitle}</p>
          </div>
          <div className="flex gap-3">
            <ActionButton href={project.github} defaultText="GitHub Repo" />
            <ActionButton href={project.demo} defaultText="Live Demo ↗" isPrimary={true} />
          </div>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden border border-neutral-800 max-h-96">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </div>

      <div className="space-y-3">
        <h3 className="text-xs uppercase font-mono tracking-wider text-neutral-500">Ishlatilgan texnologiyalar</h3>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="px-3 py-1 text-xs bg-neutral-800 text-neutral-200 rounded-md border border-neutral-700/50">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-10 border-t border-neutral-800 pt-8">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">Loyiha haqida</h2>
          <p className="text-neutral-300 leading-relaxed">{project.desc}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">Asosiy imkoniyatlar</h2>
          <ul className="list-disc list-inside space-y-2 text-neutral-300">
            {project.features?.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">O'rnatish yo'riqnomasi</h2>
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-5 space-y-3 font-mono text-sm">
            {project.installation?.map((step, idx) => (
              <p key={idx} className="text-neutral-300 flex gap-3">
                <span className="text-emerald-400">{idx + 1}.</span>
                <span>{step}</span>
              </p>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">Foydalanish</h2>
          <div className="p-4 bg-neutral-800/40 border border-neutral-800 rounded-lg text-neutral-300 text-sm leading-relaxed">
            {project.usage}
          </div>
        </section>
      </div>
    </main>
  );
}