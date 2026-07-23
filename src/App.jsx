import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/projectDetail'; // Sizning faylingiz nomi bilan bir xil
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-900 text-neutral-100 font-sans selection:bg-neutral-800">
        <Navbar />
        <Routes>
          {/* Bosh sahifa */}
          <Route path="/" element={<Home />} />

          {/* Barcha loyihalar sahifasi */}
          <Route path="/projects" element={<Projects />} />

          {/* Har bir loyihaning alohida sahifasi */}
          <Route path="/projects/:id" element={<ProjectDetail />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}