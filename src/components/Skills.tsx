import { motion } from 'motion/react';
import { 
  Code2, 
  Terminal, 
  Database, 
  Layers, 
  Zap, 
  Coffee, 
  GitBranch, 
  Github, 
  Monitor, 
  Cpu,
  BadgeAlert
} from 'lucide-react';
import { skillCategories } from '../data';

// Helper to resolve string values to lucide icon components dynamically
const getCategoryIcon = (title: string) => {
  if (title.toLowerCase().includes('frontend')) {
    return <Monitor className="w-5 h-5 text-blue-600" />;
  }
  if (title.toLowerCase().includes('backend')) {
    return <Database className="w-5 h-5 text-indigo-600" />;
  }
  return <Layers className="w-5 h-5 text-emerald-600" />;
};

// Helper to capture specific technologies' colors
const getSkillColorClass = (skillName: string) => {
  const name = skillName.toLowerCase();
  if (name.includes('react')) return 'bg-blue-500';
  if (name.includes('javascript') || name.includes('js')) return 'bg-amber-400';
  if (name.includes('tailwind')) return 'bg-sky-400';
  if (name.includes('java')) return 'bg-red-500';
  if (name.includes('python')) return 'bg-blue-600';
  if (name.includes('sql') || name.includes('database')) return 'bg-teal-500';
  if (name.includes('git')) return 'bg-orange-500';
  return 'bg-blue-600';
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50/50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold text-blue-600 tracking-widest uppercase mb-3">
            Acquired Expertise
          </h2>
          <p className="text-3xl sm:text-4xl font-sans font-extrabold text-gray-900 tracking-tight">
            My Technical Core & Tooling Competencies
          </p>
          <div className="h-1 w-12 bg-blue-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Dynamic Skill Group Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-8 pb-4 border-b border-gray-50">
                <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                  {getCategoryIcon(category.title)}
                </div>
                <h3 className="font-sans font-bold text-xl text-gray-900">
                  {category.title}
                </h3>
              </div>

              {/* Individual Skill Line Items */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center space-x-2 px-4 py-2 w-full sm:w-auto bg-gray-50/70 hover:bg-blue-50/40 border border-gray-100/80 hover:border-blue-100/60 rounded-xl transition-all duration-200 group"
                  >
                    <div className={`w-2 h-2 rounded-full ${getSkillColorClass(skill.name)}`} />
                    <span className="font-sans font-semibold text-gray-700 group-hover:text-gray-900 transition-colors text-sm">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

        {/* Embedded Expertise Summary Tag */}
        <div className="mt-12 text-center bg-white border border-gray-100 max-w-2xl mx-auto p-4 rounded-xl shadow-xs text-xs font-mono text-gray-500 flex items-center justify-center space-x-2">
          <Cpu className="w-4 h-4 text-blue-500 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Familiar with high-speed micro-controller serial integrations & OOP engineering systems.</span>
        </div>

      </div>
    </section>
  );
}
