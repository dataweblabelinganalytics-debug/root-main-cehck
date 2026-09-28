import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { projects } from '../../data/projects';
import { Reveal } from '@/components/motion/Reveal';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-kendrix-navy text-white pt-16 pb-8 border-t border-kendrix-navy-light">
      <Container>
        <Reveal dir="up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          <div className="flex flex-col gap-6 lg:pr-4">
            <Link to="/" className="inline-block w-fit" aria-label="Kendrix Home">
              <img 
                src="/kendrix-logo.png" 
                alt="Kendrix Logo" 
                className="w-auto h-10 object-contain rounded-md bg-white p-1.5" 
              />
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              Kendrix builds intelligent software, AI solutions, and automation platforms to transform modern businesses.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-bold text-lg">Company</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-slate-300 hover:text-white transition-transform hover:translate-x-1 text-sm w-fit">Home</Link>
              <Link to="/about" className="text-slate-300 hover:text-white transition-transform hover:translate-x-1 text-sm w-fit">About</Link>
              <Link to="/projects" className="text-slate-300 hover:text-white transition-transform hover:translate-x-1 text-sm w-fit">Our Projects</Link>
              <Link to="/contact" className="text-slate-300 hover:text-white transition-transform hover:translate-x-1 text-sm w-fit">Contact Us</Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-bold text-lg">Our Projects</h3>
            <nav className="flex flex-col gap-3">
              {projects.map(project => (
                <Link key={project.slug} to={project.route} className="text-slate-300 hover:text-white transition-transform hover:translate-x-1 text-sm w-fit">
                  {project.shortName}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-bold text-lg">Legal & Contact</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/privacy" className="text-slate-300 hover:text-white transition-transform hover:translate-x-1 text-sm w-fit">Privacy Policy</Link>
              <Link to="/terms" className="text-slate-300 hover:text-white transition-transform hover:translate-x-1 text-sm w-fit">Terms of Service</Link>
              <a href="mailto:hello@kendrix.in" className="text-kendrix-blue-light hover:text-white transition-transform hover:translate-x-1 text-sm w-fit mt-2 font-medium">
                hello@kendrix.in
              </a>
            </nav>
          </div>
          
        </Reveal>

        <div className="pt-8 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} Kendrix. All rights reserved.
          </p>
          <p className="text-sm text-slate-400 flex items-center gap-1">
            Proudly built with <span className="text-red-500 text-base" role="img" aria-label="love">❤️</span> in India <img src="https://flagcdn.com/w20/in.png" alt="Indian flag" className="w-5 h-auto ml-0.5" />
          </p>
        </div>
      </Container>
    </footer>
  );
}
