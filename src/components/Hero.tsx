import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Download, Mail, Layers, Sparkles, Terminal, Code2, ArrowUpRight, Camera, Trash2, Edit2, ShieldAlert } from 'lucide-react';
import { personalInfo } from '../data';
import { useAdminMode } from '../hooks/useAdminMode';

export default function Hero() {
  const [imgSrc, setImgSrc] = useState<string>('/bhope_varun.png');
  });
  const [isCustomImg, setIsCustomImg] = useState<boolean>(() => {
    return typeof window !== 'undefined' ? !!localStorage.getItem('profile_avatar_data') : false;
  });
  const [imageErrorCount, setImageErrorCount] = useState<number>(0);
  const [imgFailed, setImgFailed] = useState<boolean>(false);
  const [clickCount, setClickCount] = useState<number>(0);

  const { isAdmin, toggleAdmin } = useAdminMode();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImgError = () => {
    if (isCustomImg) {
      setImgFailed(true);
      return;
    }
    if (imageErrorCount === 0) {
      setImgSrc('/bhope_varun.jpg');
      setImageErrorCount(1);
    } else if (imageErrorCount === 1) {
      setImgSrc('/bhope_varun.jpeg');
      setImageErrorCount(2);
    } else if (imageErrorCount === 2) {
      setImgSrc('/bhope_varun.png');
      setImageErrorCount(3);
    } else {
      setImgFailed(true);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert('Please choose an image smaller than 2MB.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = reader.result as string;
        localStorage.setItem('profile_avatar_data', base64Data);
        setImgSrc(base64Data);
        setIsCustomImg(true);
        setImgFailed(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTriggerUpload = () => {
    fileInputRef.current?.click();
  };

  const handleAvatarClick = () => {
    if (isAdmin) {
      handleTriggerUpload();
    } else {
      // Secret backdoor click counter (4 quick clicks toggles editor privilege)
      setClickCount((prev) => {
        const next = prev + 1;
        if (next >= 4) {
          toggleAdmin();
          alert('Editor privileges granted! You can now upload portfolio pictures dynamically.');
          return 0;
        }
        return next;
      });
      // Timeout to clean up click sequence
      const timeout = setTimeout(() => {
        setClickCount(0);
      }, 2500);
      return () => clearTimeout(timeout);
    }
  };

  const handleResetImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    localStorage.removeItem('profile_avatar_data');
    setImgSrc('/bhope_varun.png');
    setIsCustomImg(false);
    setImageErrorCount(0);
    setImgFailed(false);
  };

  const handleScrollClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-white"
    >
      {/* Floating Admin Mode Indicator */}
      {isAdmin && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-slate-900/95 backdrop-blur-md text-white text-xs px-4 py-2.5 rounded-full border border-slate-800 shadow-xl z-50 flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping mr-1" />
            <span className="font-mono font-bold text-gray-200">Editor Workspace Active</span>
          </div>
          <span className="text-gray-500">|</span>
          <button 
            onClick={toggleAdmin}
            className="text-blue-400 hover:text-blue-300 transition-colors font-sans font-bold flex items-center space-x-1 cursor-pointer"
          >
            <span>Exit & Lock</span>
          </button>
        </div>
      )}

      {/* Decorative ambient background lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-10 animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-sky-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Copy Area */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full text-blue-600 font-mono text-xs font-semibold tracking-wide self-center lg:self-start mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Available for Full-time Roles & Freelancer</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-gray-900 tracking-tight leading-none mb-4"
              id="hero-developer-name"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl font-sans font-medium text-blue-600 mb-6 flex flex-wrap justify-center lg:justify-start items-center gap-2"
              id="hero-developer-title"
            >
              <span>{personalInfo.title}</span>
              <span className="text-gray-300 hidden sm:inline">|</span>
              <span className="text-gray-600 font-normal text-lg sm:text-xl">{personalInfo.subtitle}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-gray-600 font-sans leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8"
              id="hero-developer-bio"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              id="hero-ctas"
            >
              <button
                onClick={() => handleScrollClick('#projects')}
                className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-sans font-semibold rounded-xl shadow-md shadow-blue-200 hover:shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <span>View Projects</span>
                <Layers className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => handleScrollClick('#contact')}
                className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-gray-50 active:scale-[0.98] text-gray-900 font-sans font-semibold rounded-xl border border-gray-200 hover:border-gray-300 shadow-sm transition-all flex items-center justify-center space-x-2"
              >
                <span>Contact Me</span>
                <Mail className="w-4 h-4 text-gray-500" />
              </button>

              <button
                onClick={() => window.print()}
                className="w-full sm:w-auto px-8 py-3.5 bg-blue-50 hover:bg-blue-100 text-blue-700 active:scale-[0.98] font-sans font-semibold rounded-xl transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Download Resume</span>
                <Download className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Micro Badges (Recruiter reassurance) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap justify-center lg:justify-start items-center gap-x-8 gap-y-4 text-gray-500 font-sans text-xs"
            >
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="font-semibold text-gray-700">Open to Relocation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code2 className="w-4 h-4 text-gray-400" />
                <span>React & Node Stack Expert</span>
              </div>
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-gray-400" />
                <span>Robust Java OOP Developer</span>
              </div>
            </motion.div>
          </div>

          {/* Premium Developer CSS Graphic Avatar Container */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-72 h-72 sm:w-85 sm:h-85 md:w-96 md:h-96"
              id="hero-graphic-container"
            >
              {/* Spinning halo effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-300 via-sky-100 to-indigo-200 rounded-3xl opacity-60 blur-xl animate-pulse-slow shrink-0" />
              
              {/* Geometric Frame */}
              <div className="absolute inset-4 bg-white rounded-3xl border border-gray-100 shadow-xl flex flex-col p-6 items-center justify-center relative overflow-hidden group">
                
                {/* Tech grid paper background overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                
                {/* Custom polished avatar or fallback monogram representing Bhope Varun */}
                <div 
                  onClick={handleAvatarClick}
                  className={`w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-white shadow-xl overflow-hidden mb-5 relative group/avatar shrink-0 ${isAdmin ? 'cursor-pointer' : 'cursor-default'}`}
                  title={isAdmin ? "Click to upload your custom profile picture" : "Bhope Varun Group logo"}
                >
                  {!imgFailed ? (
                    <img
                      src={imgSrc}
                      alt="Bhope Varun - Full Stack Developer Portrait"
                      referrerPolicy="no-referrer"
                      onError={handleImgError}
                      className="w-full h-full object-cover transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-700 flex flex-col items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/30 to-transparent mix-blend-color-dodge active:animate-ping" />
                      
                      {/* Subtle vector grid inside avatar */}
                      <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:12px_12px]" />
                      
                      {/* Glowing lettermark */}
                      <div className="font-sans font-extrabold text-white text-5xl sm:text-6xl tracking-tight select-none relative z-10 drop-shadow-md">
                        BV
                      </div>
                    </div>
                  )}

                  {/* Elegant Camera Hover Overlay shown only in Admin/Editor mode */}
                  {isAdmin && (
                    <div className="absolute inset-0 bg-slate-905/65 opacity-0 hover:opacity-100 group-hover/avatar:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center text-white z-20">
                      <Camera className="w-6 h-6 mb-1 text-white" />
                      <span className="font-sans text-[10px] font-bold tracking-wider uppercase text-white/95">Change Photo</span>
                    </div>
                  )}

                  {/* Active Status Ring overlay */}
                  <div className={`absolute bottom-2.5 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full border border-blue-100 shadow-xs z-10 flex items-center space-x-1 duration-150 pointer-events-none ${isAdmin ? 'group-hover/avatar:opacity-0 transition-opacity' : ''}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-[9px] font-bold text-gray-750 tracking-wider uppercase">Active Intern</span>
                  </div>
                </div>

                {/* Hidden File Input */}
                <input 
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                />

                {/* Reset / Customize Controls underneath the avatar - Admin Mode Only */}
                {isAdmin && isCustomImg && (
                  <button 
                    onClick={handleResetImage}
                    className="mb-4 -mt-2 text-[10px] font-mono text-rose-600 hover:text-rose-700 flex items-center space-x-1 px-2.5 py-1 rounded-full bg-rose-50 hover:bg-rose-100/85 border border-rose-100 transition-all shadow-xs z-20 cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Reset to Monogram</span>
                  </button>
                )}

                {/* Developer Bio summary representation inside graphic */}
                <div className="text-center w-full z-10">
                  <h3 className="font-mono text-[11px] font-bold text-blue-600 uppercase tracking-widest mb-1">
                    Software Engineer
                  </h3>
                  <div className="font-sans font-bold text-gray-900 text-lg leading-tight mb-2">
                    Bhope Varun
                  </div>
                  
                  {/* Fake editor tags */}
                  <div className="flex flex-wrap justify-center gap-1.5">
                    <span className="bg-gray-50 border border-gray-100 text-gray-600 px-2 py-0.5 rounded text-[10px] font-mono">
                      java.io
                    </span>
                    <span className="bg-gray-50 border border-gray-100 text-gray-600 px-2 py-0.5 rounded text-[10px] font-mono">
                      react-hooks
                    </span>
                    <span className="bg-gray-50 border border-gray-100 text-gray-600 px-2 py-0.5 rounded text-[10px] font-mono">
                      embedded-iot
                    </span>
                  </div>
                </div>

                {/* Soft decorative bottom stats */}
                <div className="absolute bottom-3 left-6 right-6 flex justify-between items-center text-[10px] font-mono text-gray-400 border-t border-gray-50 pt-2.5">
                  <span>LOC: 12.5k</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span>status_online</span>
                  </div>
                </div>
              </div>

              {/* Little external floating label element */}
              <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur border border-gray-100 p-3 rounded-2xl shadow-lg z-20 flex items-center space-x-2.5 max-w-[210px]">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                  <span className="text-xs font-bold text-emerald-600">95%</span>
                </div>
                <div>
                  <div className="font-sans font-bold text-gray-800 text-xs">Vite Compiles</div>
                  <div className="font-mono text-[9px] text-gray-400">Fast Dev Hotswapping</div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur border border-gray-100 p-3 rounded-2xl shadow-lg z-20 flex items-center space-x-2.5 max-w-[210px]">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="font-sans font-bold text-gray-800 text-xs">Full Stack Intern</div>
                  <div className="font-mono text-[9px] text-gray-400">Prodesk IT </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
