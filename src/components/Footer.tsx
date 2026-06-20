import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo, socialLinks } from '../data';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-white border-t border-gray-100 py-12" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo & Slogan */}
          <div className="text-center md:text-left">
            <span className="font-sans font-bold text-gray-900 tracking-tight text-lg">
              {personalInfo.name}
            </span>
            <p className="font-sans text-gray-500 text-xs mt-1">
              Full Stack Java & React Developer • ECE Graduate
            </p>
          </div>

          {/* Social connections short row */}
          <div className="flex items-center space-x-4">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-gray-50 hover:bg-blue-50 hover:text-blue-600 text-gray-400 hover:scale-105 border border-gray-100 transition-all cursor-pointer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-400 hover:text-gray-900 hover:scale-105 border border-gray-100 transition-all cursor-pointer"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              aria-label="Email"
              className="p-2.5 rounded-xl bg-gray-50 hover:bg-blue-50 hover:text-blue-600 text-gray-400 hover:scale-105 border border-gray-100 transition-all cursor-pointer"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Trigger up button */}
          <div>
            <button
              onClick={handleScrollToTop}
              className="inline-flex items-center space-x-1.5 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-gray-900 border border-gray-100/80 rounded-xl text-xs font-mono font-bold transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Divider and absolute copyright tags */}
        <div className="mt-8 pt-8 border-t border-gray-50 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans text-gray-400">
          <p>
            Copyright © 2026 {personalInfo.name}. All rights reserved.
          </p>
          <p className="mt-2 sm:mt-0 font-mono text-[10px] text-gray-400">
            Built with React + Vite + Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
