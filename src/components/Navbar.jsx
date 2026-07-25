import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const activeStyle = ({ isActive }) =>
        isActive
            ? 'text-white font-semibold border-b-2 border-white pb-1 transition-all'
            : 'text-neutral-400 hover:text-white transition-all';

    return (
        <nav className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center">
            <NavLink to="/" className="text-xl font-bold tracking-tight text-white">
                Dev<span className="text-neutral-500">.Sarvar</span>
            </NavLink>
            <div className="flex space-x-6 text-sm font-medium">
                <NavLink to="/" className={activeStyle}>Bosh sahifa</NavLink>
                <NavLink to="/projects" className={activeStyle}>Loyihalar</NavLink>
                <NavLink to="/about" className={activeStyle}>Haqimda</NavLink>
                <NavLink to="/contact" className={activeStyle}>Aloqa</NavLink>
            </div>
        </nav>
    );
}