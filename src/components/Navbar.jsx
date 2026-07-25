import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    // 'sticky top-0' sahifa kontentini to'sib qo'ymaydi va tepada yopishib turadi
    <nav className="sticky top-0 z-50 bg-gray-900 text-white shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link 
            to="/" 
            onClick={closeMenu} 
            className="text-xl font-bold text-emerald-400 tracking-wide"
          >
            Sarvar.dev
          </Link>

          {/* Desktop Menu (Kompyuterlar uchun) */}
          <div className="hidden md:flex items-center space-x-8 font-medium">
            <Link to="/" className="hover:text-emerald-400 transition-colors">
              Bosh sahifa
            </Link>
            <Link to="/about" className="hover:text-emerald-400 transition-colors">
              Haqimda
            </Link>
            <Link to="/projects" className="hover:text-emerald-400 transition-colors">
              Loyihalar
            </Link>
            <Link to="/contact" className="hover:text-emerald-400 transition-colors">
              Aloqa
            </Link>
          </div>

          {/* Mobile Burger Button (Telefonlar uchun) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                // Yopish (X) ikonkalari
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Burger (☰) ikonkalari
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {/* 'absolute top-full' tufayli bu menyu sahifa kontentini surib tashlamasdan, ustidan qalqib chiqadi */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 border-t border-gray-800 shadow-2xl py-4 px-6 flex flex-col space-y-4 z-50">
          <Link
            to="/"
            onClick={closeMenu}
            className="hover:text-emerald-400 text-lg font-medium transition-colors py-1"
          >
            Bosh sahifa
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className="hover:text-emerald-400 text-lg font-medium transition-colors py-1"
          >
            Haqimda
          </Link>
          <Link
            to="/projects"
            onClick={closeMenu}
            className="hover:text-emerald-400 text-lg font-medium transition-colors py-1"
          >
            Loyihalar
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="hover:text-emerald-400 text-lg font-medium transition-colors py-1"
          >
            Aloqa
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;