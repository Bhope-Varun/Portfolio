import { motion } from 'motion/react';
import { BookOpen, Cpu, Sparkles, Brain, Code, Terminal, Target } from 'lucide-react';
import { personalInfo } from '../data';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold text-blue-600 tracking-widest uppercase mb-3">
            About Me
          </h2>
          <p className="text-3xl sm:text-4xl font-sans font-extrabold text-gray-900 tracking-tight">
            Engineering the Bridge Between Systems & Modern Web Tech
          </p>
          <div className="h-1 w-12 bg-blue-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Clean story-driven structured layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Main Biography Column */}
          <div className="lg:col-span-2 space-y-6 text-gray-700 font-sans text-base leading-relaxed">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <p>
                I'm <strong className="font-extrabold text-gray-950">Bhope Varun</strong>, a Full Stack Developer and Electronics & Communication Engineering graduate with a strong passion for building modern, user-focused web applications. My journey began in electronics and embedded systems, where I worked on projects involving Arduino, IoT, and automation, and later evolved into software development through hands-on experience with Java, React, JavaScript, Python, and SQL.
              </p>
              <p>
                Currently, I am working as a <strong className="font-extrabold text-indigo-700">Full Stack Developer Intern at Prodesk IT</strong>, where I develop responsive web applications, build interactive user interfaces, and collaborate using modern development tools such as Git and GitHub. I enjoy transforming ideas into practical digital solutions and continuously expanding my knowledge of modern web technologies.
              </p>
              <p>
                My technical background combines software development, problem-solving, and engineering principles, enabling me to approach challenges with both creativity and analytical thinking. I am particularly interested in Full Stack Development, AI-powered applications, and scalable web technologies.
              </p>
              <p>
                Beyond coding, I enjoy learning emerging technologies, working on real-world projects, and continuously improving my skills to build impactful products. I am currently seeking opportunities where I can contribute, learn from experienced professionals, and grow as a software engineer.
              </p>
            </motion.div>
          </div>

          {/* Key Milestones & Focus Badges Sidebar */}
          <div className="space-y-6">
            {/* Card 1: ECE Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              id="about-edu-card"
              className="bg-gray-50/50 border border-gray-100 hover:border-blue-100 p-6 rounded-2xl transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full blur-2xl group-hover:bg-blue-100/50 transition-colors" />
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-115 transition-transform">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-bold text-lg text-gray-900 mb-2">
                Academic Background
              </h3>
              <p className="font-sans font-semibold text-gray-800 text-sm mb-1">
                {personalInfo.education.degree}
              </p>
              <p className="font-sans text-gray-650 text-xs leading-relaxed mb-3">
                {personalInfo.education.focus}
              </p>
              <p className="text-[11px] font-mono text-gray-550 bg-white/80 p-2.5 rounded-lg border border-gray-100">
                {personalInfo.education.achievement}
              </p>
            </motion.div>

            {/* Card 2: Core Focus Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              id="about-tech-focus-card"
              className="bg-gray-50/50 border border-gray-100 hover:border-blue-100 p-6 rounded-2xl transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-full blur-2xl group-hover:bg-emerald-100/50 transition-colors" />
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-115 transition-transform">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-bold text-lg text-gray-900 mb-2">
                Core Specialties
              </h3>
              <p className="font-sans text-gray-650 text-xs leading-relaxed mb-4">
                Delivering high-fidelity interfaces in React, writing pristine Object Oriented code in Java, developing machine learning regressions in Python, and querying robust SQL relational models.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center space-x-1 px-2 py-0.5 bg-emerald-50 border border-emerald-100/50 text-emerald-700 rounded-md text-[10px] font-bold">
                  <Target className="w-3 h-3" />
                  <span>React SPA</span>
                </span>
                <span className="inline-flex items-center space-x-1 px-2 py-0.5 bg-blue-50 border border-blue-100/50 text-blue-700 rounded-md text-[10px] font-bold">
                  <Code className="w-3 h-3" />
                  <span>OOP Java</span>
                </span>
                <span className="inline-flex items-center space-x-1 px-2 py-0.5 bg-purple-50 border border-purple-100/50 text-purple-700 rounded-md text-[10px] font-bold">
                  <Sparkles className="w-3 h-3" />
                  <span>AI Integrations</span>
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Embedded systems / developer stats banner */}
        <motion.div
           initial={{ opacity: 0, y: 15 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.3 }}
           className="mt-16 bg-blue-50/50 border border-blue-100/70 rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-md">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-gray-900 text-lg">
                Are you a recruiter seeking engineering excellence?
              </h4>
              <p className="font-sans text-gray-600 text-sm mt-1">
                My education in signal systems teaches me precision, and my software training teaches me rapid, scalable delivery.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            id="about-cta-hire"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-sans font-semibold rounded-xl transition-all shadow-md shrink-0 block text-center w-full md:w-auto"
          >
            Coordinate an Interview
          </a>
        </motion.div>

      </div>
    </section>
  );
}
