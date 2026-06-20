import { useState } from 'react';
import { motion } from 'motion/react';
import { Download, FileText, Check, Clock, Eye, Sparkles } from 'lucide-react';
import { personalInfo, socialLinks } from '../data';

export default function ResumeSection() {
  const [downloadState, setDownloadState] = useState<'idle' | 'loading' | 'completed'>('idle');

  const handleDownload = () => {
    setDownloadState('loading');
    setTimeout(() => {
      setDownloadState('completed');
      window.print();
      setTimeout(() => {
        setDownloadState('idle');
      }, 3000);
    }, 1000);
  };

  return (
    <section id="resume" className="py-24 bg-gray-50/50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold text-blue-600 tracking-widest uppercase mb-3">
            Curriculum Vitae
          </h2>
          <p className="text-3xl sm:text-4xl font-sans font-extrabold text-gray-900 tracking-tight">
            Comprehensive Resume & Profile Sheet
          </p>
          <div className="h-1 w-12 bg-blue-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Dual Column Layout: Info and Interactive Card Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          
          {/* Column 1: Marketing / Detail Copy */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <div className="inline-flex items-center space-x-1.5 bg-blue-50 border border-blue-100/70 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold mb-6">
              <Clock className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
              <span>Last Updated: {personalInfo.lastUpdated}</span>
            </div>

            <h3 className="font-sans font-bold text-2xl text-gray-900 mb-4 tracking-tight">
              A highly targeted resume for technical roles
            </h3>

            <p className="font-sans text-gray-600 text-sm leading-relaxed mb-6">
              My structured resume highlights key credentials in full-stack web applications, machine learning regression, and OOP paradigms. Ready for download as an ATS-optimized, single-page presentation layout.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3 text-left">
                <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-emerald-600" />
                </div>
                <span className="font-sans text-sm text-gray-600">
                  ATS-optimized layout with searchable key metrics and skills.
                </span>
              </div>
              
              <div className="flex items-start space-x-3 text-left">
                <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-emerald-600" />
                </div>
                <span className="font-sans text-sm text-gray-600">
                  Detailed summaries of the Prodesk IT internship achievements.
                </span>
              </div>
            </div>

            {/* Interactive download buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleDownload}
                id="resume-btn-download"
                className={`w-full sm:w-auto px-6 py-3.5 rounded-xl font-sans font-bold text-sm tracking-wide shadow-sm hover:shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                  downloadState === 'completed'
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {downloadState === 'idle' && (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download PDF version</span>
                  </>
                )}
                {downloadState === 'loading' && (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Generating Document PDF...</span>
                  </>
                )}
                {downloadState === 'completed' && (
                  <>
                    <Check className="w-4 h-4" />
                    <span>PDF Generated!</span>
                  </>
                )}
              </button>

              <button
                onClick={() => window.print()}
                className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 hover:border-gray-300 rounded-xl font-sans font-bold text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Eye className="w-4 h-4 text-gray-400" />
                <span>Print Copy</span>
              </button>
            </div>
          </div>

          {/* Column 2: Gorgeous Paper Document Sheet Mockup */}
          <div className="lg:col-span-7 flex justify-center">
            <motion.div
              initial={{ transform: 'none' }}
              whileHover={{ scale: 1.01 }}
              className="w-full max-w-[430px] bg-white border border-gray-150 rounded-2xl shadow-lg p-5 sm:p-7 relative overflow-hidden group select-none"
              id="resume-sheet-preview"
            >
              {/* Paper overlay shadows */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500" />
              <div className="absolute top-4 right-4 bg-emerald-50 text-emerald-700 border border-emerald-100 text-[9px] font-mono font-bold px-2 py-0.5 rounded flex items-center space-x-1">
                <Sparkles className="w-3 h-3 animate-pulse" />
                <span>Verified ATS Grade</span>
              </div>

              {/* Mock Document Header */}
              <div className="border-b border-gray-100 pb-4 mb-4 text-center">
                <h4 className="font-sans font-extrabold text-gray-900 text-lg leading-tight uppercase">
                  {personalInfo.name}
                </h4>
                <p className="font-sans text-[11px] font-medium text-blue-600 tracking-wide mt-1">
                  {personalInfo.title} | {personalInfo.subtitle}
                </p>
                <p className="font-mono text-[9px] text-gray-450 mt-1">
                  {socialLinks.email} | {socialLinks.phone} | Hyderabad, India
                </p>
              </div>

              {/* Mock Resume Content Blocks */}
              <div className="space-y-4">
                
                {/* Block 1: Education */}
                <div>
                  <h5 className="font-sans font-bold text-gray-900 text-[10px] uppercase tracking-wider border-b border-gray-50 pb-1 mb-2">
                    Academic Summary
                  </h5>
                  <div className="flex justify-between items-start text-[10px] font-sans">
                    <div>
                      <span className="font-bold text-gray-800">
                        B.Tech, Electronics & Communication Eng.
                      </span>
                      <p className="text-gray-500 mt-0.5">JB Institute of Engineering and Technology</p>
                      <p className="text-[9.5px] font-semibold text-gray-600 mt-0.5">CGPA: 8.14</p>
                    </div>
                    <span className="font-mono text-gray-400 font-semibold self-start text-[9px]">2022 – 2026</span>
                  </div>
                </div>

                {/* Block 2: Professional Experience */}
                <div>
                  <h5 className="font-sans font-bold text-gray-900 text-[10px] uppercase tracking-wider border-b border-gray-50 pb-1 mb-2">
                    Professional Experience
                  </h5>
                  <div className="text-[10px] font-sans">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-bold text-gray-800">Full Stack Developer Intern</span>
                        <span className="text-gray-500"> — Prodesk IT</span>
                      </div>
                      <span className="font-mono text-gray-400 text-[9px] font-semibold">05/2026 – Present</span>
                    </div>
                    <ul className="list-disc pl-3 text-gray-500 mt-1.5 space-y-1 text-[9px] leading-relaxed">
                      <li>Developed responsive web applications using React.js, JavaScript, HTML, and CSS.</li>
                      <li>Implemented client-side routing and state management for single-page applications.</li>
                    </ul>
                  </div>
                </div>

                {/* Block 3: Key Creations */}
                <div>
                  <h5 className="font-sans font-bold text-gray-900 text-[10px] uppercase tracking-wider border-b border-gray-50 pb-1 mb-2">
                    Selected Engineering Projects
                  </h5>
                  <div className="space-y-1.5 text-[9px] font-sans">
                    <div>
                      <span className="font-bold text-gray-700">AI Cover Letter Generator</span>
                      <span className="text-gray-400"> (Generates cover letters, resume upload)</span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-700">Kanban Task Board</span>
                      <span className="text-gray-400"> (Trello-style drag & drop board, localStorage)</span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-700">House Price Prediction</span>
                      <span className="text-gray-400"> (Machine learning regression model, categorical variables)</span>
                    </div>
                  </div>
                </div>

                {/* Block 4: Skills Set Summary */}
                <div>
                  <h5 className="font-sans font-bold text-gray-900 text-[10px] uppercase tracking-wider border-b border-gray-50 pb-1 mb-1.5">
                    Technical Specifications
                  </h5>
                  <p className="text-[9px] font-sans text-gray-600 leading-normal">
                    <span className="font-bold text-gray-800">Languages & Tools: </span>
                    C++, Python, Java, JavaScript, Git & GitHub, VS Code, Anaconda, SQL.
                    <br />
                    <span className="font-bold text-gray-800">Frontend Concepts: </span>
                    React.js, Responsive Design, State Management, REST APIs.
                  </p>
                </div>

              </div>

              {/* Watermark brand layout footer */}
              <div className="border-t border-gray-50 pt-3.5 mt-5 flex justify-between items-center text-[9px] font-mono text-gray-400">
                <span>ATS Quality Checked</span>
                <span>Page 1 of 1</span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
