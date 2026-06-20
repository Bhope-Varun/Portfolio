import { motion } from 'motion/react';
import { Award, ShieldCheck, CheckCircle, ExternalLink, Library } from 'lucide-react';
import { certifications } from '../data';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold text-blue-600 tracking-widest uppercase mb-3">
            Credentials
          </h2>
          <p className="text-3xl sm:text-4xl font-sans font-extrabold text-gray-900 tracking-tight">
            Verified Certifications & Accreditations
          </p>
          <div className="h-1 w-12 bg-blue-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Certifications Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              id={`cert-card-${index}`}
              className="bg-gray-50/40 border border-gray-100 hover:border-blue-100 p-6 rounded-2xl transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                {/* Decorative background light top corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50/50 rounded-full blur-xl group-hover:bg-blue-100/30 transition-colors pointer-events-none" />

                {/* Badge Icon Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100/60 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <ShieldCheck className="w-5 h-5 text-gray-300 group-hover:text-emerald-500 transition-colors" />
                </div>

                {/* Name */}
                <h3 className="font-sans font-bold text-base text-gray-900 mb-1.5 leading-snug group-hover:text-blue-600 transition-colors">
                  {cert.name}
                </h3>

                {/* Issuer with subtle icon spacer overlay */}
                <div className="flex items-center space-x-1.5 text-gray-500 font-sans text-xs">
                  <Library className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  <span className="font-semibold">{cert.issuer}</span>
                </div>
              </div>

              {/* Action/Time tag footer */}
              <div className="mt-6 pt-4 border-t border-gray-100/60 flex justify-between items-center text-[10px] font-mono text-gray-400">
                <span className="bg-white border border-gray-100 px-2.5 py-1 rounded-md font-semibold text-gray-400">
                  {cert.date ? `Issued: ${cert.date}` : 'Verified Competency'}
                </span>
                
                <span className="flex items-center space-x-1 text-blue-500 font-bold group-hover:underline">
                  <span>Audit Complete</span>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Accreditations summary badge */}
        <div className="mt-16 bg-sky-50/40 border border-sky-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <span className="font-sans leading-relaxed text-center sm:text-left">
              These badges corroborate training milestones across hardware design systems, Java object programming patterns, and data engineering pathways.
            </span>
          </div>
          <p className="font-mono text-[10px] text-gray-400">
            Audit ID: BV-NPTEL-2026
          </p>
        </div>

      </div>
    </section>
  );
}
