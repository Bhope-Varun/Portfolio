import { motion } from 'motion/react';
import { Briefcase, Calendar, CheckCircle2, Building, ShieldCheck } from 'lucide-react';
import { experiences } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold text-blue-600 tracking-widest uppercase mb-3">
            Career Timeline
          </h2>
          <p className="text-3xl sm:text-4xl font-sans font-extrabold text-gray-900 tracking-tight">
            Professional Experience & Internships
          </p>
          <div className="h-1 w-12 bg-blue-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 sm:pl-12 pb-12 last:pb-0"
            >
              {/* Vertical line connector */}
              <div className="absolute left-[15px] sm:left-[23px] top-6 bottom-0 w-0.5 bg-gray-100" />

              {/* Company Logo Bullet Indicator */}
              <div className="absolute left-0 top-1 w-[32px] h-[32px] sm:w-[48px] sm:h-[48px] rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm transition-transform hover:scale-105 z-10">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>

              {/* Experience Card */}
              <div className="bg-gray-50/55 p-6 sm:p-8 rounded-2xl border border-gray-100/80 hover:border-blue-100/50 transition-colors shadow-xs">
                
                {/* Meta details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-sans font-extrabold text-xl text-gray-900 leading-tight">
                      {exp.role}
                    </h3>
                    
                    <div className="flex items-center space-x-2 text-gray-600 font-sans text-sm font-semibold mt-1.5">
                      <Building className="w-4 h-4 text-gray-400" />
                      <span>{exp.company}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-blue-600 text-xs font-mono font-bold bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full">
                        Internship
                      </span>
                    </div>
                  </div>

                  {/* Period badge */}
                  <div className="inline-flex items-center space-x-2 bg-white border border-gray-100 text-gray-600 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold self-start sm:self-center shadow-xs">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bulleted list of responsibilities */}
                <ul className="space-y-3.5 mb-8">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-gray-600 leading-relaxed font-sans">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills used during tenure */}
                <div>
                  <h4 className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                    Technologies Leveraged
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skillsUsed.map((skill) => (
                      <span
                        key={skill}
                        className="bg-white border border-gray-100 text-gray-700 px-3 py-1 rounded-lg text-xs font-semibold font-sans hover:text-blue-600 hover:border-blue-100 transition-colors shadow-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
