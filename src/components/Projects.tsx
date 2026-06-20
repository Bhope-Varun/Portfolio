import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FolderGit2, 
  Cpu, 
  Database, 
  Terminal, 
  ExternalLink, 
  Github, 
  ArrowRight, 
  X, 
  BookmarkCheck, 
  Sparkles,
  Layers,
  Camera,
  Trash2
} from 'lucide-react';
import { Project } from '../types';
import { projects } from '../data';
import { useAdminMode } from '../hooks/useAdminMode';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const { isAdmin } = useAdminMode();
  const [projectImages, setProjectImages] = useState<Record<string, string>>({});
  const projectFileInputRef = useRef<HTMLInputElement>(null);
  const [uploadingProjId, setUploadingProjId] = useState<string | null>(null);

  const triggerProjectImageUpload = (projectId: string) => {
    setUploadingProjId(projectId);
    projectFileInputRef.current?.click();
  };

  const handleProjectFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const projId = uploadingProjId;
    if (file && projId) {
      if (file.size > 2 * 1024 * 1024) {
        alert('Please choose an image smaller than 2MB.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = reader.result as string;
        localStorage.setItem(`project_image_${projId}`, base64Data);
        setProjectImages(prev => ({ ...prev, [projId]: base64Data }));
        setUploadingProjId(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetProjectImage = (projectId: string) => {
    localStorage.removeItem(`project_image_${projectId}`);
    setProjectImages(prev => {
      const copy = { ...prev };
      delete copy[projectId];
      return copy;
    });
  };

  const filters = ['All', 'IoT & Hardware', 'Machine Learning', 'Software Engineering'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  // Helper to obtain aesthetic category icons
  const getProjectCategoryIcon = (category: string) => {
    switch (category) {
      case 'IoT & Hardware':
        return <Cpu className="w-4 h-4 text-emerald-600" />;
      case 'Machine Learning':
        return <Database className="w-4 h-4 text-indigo-600" />;
      default:
        return <Terminal className="w-4 h-4 text-blue-600" />;
    }
  };

  // Helper to get category tag styles
  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'IoT & Hardware':
        return 'bg-emerald-50 border-emerald-100/70 text-emerald-700';
      case 'Machine Learning':
        return 'bg-indigo-50 border-indigo-100/70 text-indigo-700';
      default:
        return 'bg-blue-50 border-blue-100/70 text-blue-700';
    }
  };

  const getProjectCustomImg = (projectId: string) => {
    return typeof window !== 'undefined' ? (projectImages[projectId] || localStorage.getItem(`project_image_${projectId}`)) : null;
  };

  return (
    <section id="projects" className="py-24 bg-gray-50/50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold text-blue-600 tracking-widest uppercase mb-3">
            My Creations
          </h2>
          <p className="text-3xl sm:text-4xl font-sans font-extrabold text-gray-900 tracking-tight">
            Curated Software & Embed Systems Portfolio
          </p>
          <div className="h-1 w-12 bg-blue-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="project-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-sm font-semibold font-sans transition-all cursor-pointer ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-200'
                  : 'bg-white text-gray-600 border border-gray-100 hover:border-gray-200 hover:text-gray-900 shadow-xs'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid Container */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          id="projects-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                id={`project-card-${project.id}`}
                className="bg-white rounded-2xl border border-gray-100 hover:border-blue-100 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group h-full relative"
              >
                {/* Decorative absolute element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-50/20 to-transparent pointer-events-none" />

                <div className="p-8">
                  {/* Category Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border ${getCategoryStyles(project.category)}`}>
                      {getProjectCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </span>
                    <FolderGit2 className="w-5 h-5 text-gray-300 group-hover:text-blue-500 transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="font-sans font-extrabold text-xl text-gray-900 group-hover:text-blue-600 transition-colors mb-3 leading-tight">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="font-sans text-gray-600 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech stack highlights */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-50 border border-gray-100 text-gray-500 px-2 py-1 rounded-md text-[10px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="bg-gray-50 text-gray-400 px-2 py-1 rounded-md text-[10px] font-mono">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-8 pb-8 pt-4 border-t border-gray-50 bg-gray-50/30 flex justify-between items-center mt-auto">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-blue-600 hover:text-blue-700 font-sans text-sm font-semibold flex items-center space-x-1 hover:space-x-2 transition-all cursor-pointer"
                  >
                    <span>Read Architecture Summary</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono text-gray-400 bg-white border border-gray-100 px-2 py-0.5 rounded">
                      GitHub Ready
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Micro-Interaction Details Dialog Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backing shade */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-gray-900/60 backdrop-blur-xs"
              />

              {/* Box frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-white border border-gray-100 w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden relative z-10 p-6 sm:p-8"
              >
                {/* Header controls */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <span className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border mb-2 ${getCategoryStyles(selectedProject.category)}`}>
                      {getProjectCategoryIcon(selectedProject.category)}
                      <span>{selectedProject.category}</span>
                    </span>
                    <h3 className="font-sans font-extrabold text-2xl text-gray-900 leading-tight">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 bg-gray-50 border border-gray-150 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
                    aria-label="Close details"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Content body */}
                <div className="space-y-6">
                  {/* Optional Custom Image Cover shown only if uploaded */}
                  {(() => {
                    const customImg = getProjectCustomImg(selectedProject.id);
                    if (customImg) {
                      return (
                        <div className="w-full h-56 sm:h-64 overflow-hidden rounded-xl border border-gray-150 relative group/modal-cover">
                          <img 
                            src={customImg} 
                            alt={selectedProject.title} 
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                          {isAdmin && (
                            <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover/modal-cover:opacity-100 flex items-center justify-center space-x-2 transition-opacity duration-200 z-10">
                              <button
                                onClick={() => triggerProjectImageUpload(selectedProject.id)}
                                className="px-3 py-1.5 bg-white text-gray-800 rounded-lg text-xs font-semibold font-sans flex items-center space-x-1 hover:bg-gray-100 shadow-sm cursor-pointer"
                              >
                                <Camera className="w-3.5 h-3.5 text-gray-600" />
                                <span>Change Custom Photo</span>
                              </button>
                              <button
                                onClick={() => resetProjectImage(selectedProject.id)}
                                className="px-3 py-1.5 bg-rose-500 text-white rounded-lg text-xs font-semibold font-sans flex items-center space-x-1 hover:bg-rose-600 shadow-sm cursor-pointer"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                                <span>Remove</span>
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    }
                    if (isAdmin) {
                      return (
                        <div className="border-2 border-dashed border-gray-200 hover:border-blue-400 rounded-xl p-6 text-center transition-colors">
                          <p className="text-xs text-gray-500 font-sans mb-3">Add a custom snapshot/photo for this project (visible to you and your visitors)</p>
                          <button
                            onClick={() => triggerProjectImageUpload(selectedProject.id)}
                            className="px-4 py-1.5 bg-blue-50 hover:bg-blue-100/80 text-blue-700 border border-blue-100 rounded-lg text-xs font-bold font-sans flex items-center space-x-1.5 mx-auto cursor-pointer"
                          >
                            <Camera className="w-3.5 h-3.5" />
                            <span>Upload Project Photo</span>
                          </button>
                        </div>
                      );
                    }
                    return null;
                  })()}

                  <div>
                    <h4 className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                      Deep Dive Description
                    </h4>
                    <p className="font-sans text-gray-600 text-sm leading-relaxed">
                      {selectedProject.longDescription || selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                      Core Implementation Merits
                    </h4>
                    <div className="space-y-2.5">
                      {selectedProject.highlights.map((hlt, i) => (
                        <div key={i} className="flex items-start space-x-2 text-sm text-gray-600">
                          <BookmarkCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{hlt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical stacks tags */}
                  <div>
                    <h4 className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                      Complete Specification Set
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-50/50 border border-blue-100/50 text-blue-700 px-3 py-1 rounded-lg text-[11px] font-mono font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 pt-6 border-t border-gray-50 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs font-mono text-gray-400 flex items-center space-x-1">
                    <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                    <span>Highly optimized execution stack</span>
                  </div>
                  <div className="flex items-center space-x-3 w-full sm:w-auto">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="w-full sm:w-auto px-5 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 font-sans text-xs font-bold rounded-lg border border-gray-200 transition-colors"
                    >
                      Close Summary
                    </button>
                    <a
                      href="#"
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-1 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-sans text-xs font-bold rounded-lg shadow-xs"
                    >
                      <Github className="w-3.5 h-3.5 mr-1" />
                      <span>Code Repository</span>
                    </a>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>

      {/* Hidden File Input for Projects snap upload */}
      <input
        type="file"
        ref={projectFileInputRef}
        onChange={handleProjectFileChange}
        accept="image/*"
        className="hidden"
      />
    </section>
  );
}
