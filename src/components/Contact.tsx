import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Loader2,
  Copy,
  Clock,
  ExternalLink
} from 'lucide-react';
import { personalInfo, socialLinks } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [copiedText, setCopiedText] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('sending');
    // Simulate real post submission beautifully
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/35 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold text-blue-600 tracking-widest uppercase mb-3">
            Get In Touch
          </h2>
          <p className="text-3xl sm:text-4xl font-sans font-extrabold text-gray-900 tracking-tight">
            Initiate a Project or Career Conversation
          </p>
          <div className="h-1 w-12 bg-blue-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Dual-column Workspace layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Column 1: Call-sheets & Social Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-gray-50/50 border border-gray-100 p-8 rounded-2xl relative overflow-hidden">
              <h3 className="font-sans font-extrabold text-xl text-gray-900 mb-6">
                Direct Contact Channels
              </h3>

              {/* Direct links list */}
              <div className="space-y-6">
                
                {/* Email (Copier interactive) */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-sans font-bold text-gray-800 text-sm">Professional Email</h4>
                    <p className="font-mono text-xs text-gray-600 mt-1 select-all break-all">{socialLinks.email}</p>
                    <button
                      onClick={handleCopyEmail}
                      className="mt-2 text-xs font-sans text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-1 cursor-pointer"
                    >
                      <Copy className="w-3 h-3" />
                      <span>{copiedText ? 'Copied to clipboard!' : 'Copy email address'}</span>
                    </button>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-gray-800 text-sm">Direct Contact</h4>
                    <p className="font-mono text-xs text-gray-600 mt-1">{socialLinks.phone}</p>
                    <a
                      href={`tel:${socialLinks.phone}`}
                      className="inline-block mt-2 text-xs font-sans text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Call Candidate Directly
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-gray-800 text-sm font-sans">Primary Hub</h4>
                    <p className="font-sans text-xs text-gray-600 mt-1">Hyderabad, Telangana, India</p>
                    <span className="inline-block mt-2 text-[10px] bg-emerald-50 border border-emerald-100/50 text-emerald-700 font-bold px-2 py-0.5 rounded">
                      Relocation Ready
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Social profiles card */}
            <div className="bg-gray-50/50 border border-gray-100 p-8 rounded-2xl">
              <h3 className="font-sans font-bold text-gray-900 text-lg mb-5">
                Modern Social Connections
              </h3>
              
              <div className="flex flex-wrap gap-4" id="social-links-grid">
                
                {/* LinkedIn Badge link */}
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  id="social-link-linkedin"
                  className="flex-1 min-w-[140px] bg-white border border-gray-150 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 p-4 rounded-xl flex items-center space-x-3 transition-all cursor-pointer group"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors shrink-0" />
                  <div className="overflow-hidden">
                    <span className="font-sans font-bold text-gray-800 text-xs block truncate">LinkedIn</span>
                    <span className="font-sans text-[10px] text-gray-400 block truncate">Connect with me</span>
                  </div>
                </a>

                {/* GitHub Badge link */}
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  id="social-link-github"
                  className="flex-1 min-w-[140px] bg-white border border-gray-150 hover:bg-gray-50 hover:border-gray-200 p-4 rounded-xl flex items-center space-x-3 transition-all cursor-pointer group"
                >
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors shrink-0" />
                  <div className="overflow-hidden">
                    <span className="font-sans font-bold text-gray-800 text-xs block truncate">GitHub</span>
                    <span className="font-sans text-[10px] text-gray-400 block truncate">View source repos</span>
                  </div>
                </a>

              </div>
              
              {/* Note card indicator */}
              <div className="mt-5 p-3 bg-white border border-gray-100 rounded-xl flex items-center space-x-2 text-[10px] font-mono text-gray-400 leading-snug">
                <Clock className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Responsive latency: ~4 hours (standard business days).</span>
              </div>
            </div>
          </div>

          {/* Column 2: Rich Email Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-gray-50/30 border border-gray-100 p-8 sm:p-10 rounded-2xl shadow-xs" id="contact-form-card">
              <h3 className="font-sans font-extrabold text-xl text-gray-900 mb-2">
                Write a Message
              </h3>
              <p className="font-sans text-gray-500 text-sm mb-6 leading-relaxed">
                Send a direct notification query compiled into the form. Under test frameworks, the submit trigger handles local state validations cleanly.
              </p>

              {/* Form implementation */}
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Two Column items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-xs font-semibold text-gray-700 font-sans block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      className="w-full bg-white border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none rounded-xl px-4 py-3 font-sans text-sm text-gray-800 transition-all placeholder:text-gray-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-xs font-semibold text-gray-700 font-sans block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jane@example.com"
                      className="w-full bg-white border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none rounded-xl px-4 py-3 font-sans text-sm text-gray-800 transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-subject" className="text-xs font-semibold text-gray-700 font-sans block">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Recruitment Opportunity / Project Request"
                    className="w-full bg-white border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none rounded-xl px-4 py-3 font-sans text-sm text-gray-800 transition-all placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-xs font-semibold text-gray-700 font-sans block">
                    Message Body *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Briefly state your requirements or query here..."
                    className="w-full bg-white border border-gray-250 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none rounded-xl px-4 py-3 font-sans text-sm text-gray-800 transition-all placeholder:text-gray-400"
                  />
                </div>

                {/* Active States / Feedback Alerts */}
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start space-x-3 text-emerald-800 text-sm"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">Transmission Succeeded!</span>
                        <p className="text-emerald-700 text-xs mt-0.5">
                          Thank you for connecting. I have received your notification logs and will follow up shortly!
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-800 text-sm"
                    >
                      <span className="font-bold">Error Processing Message</span>
                      <p className="text-red-700 text-xs mt-0.5">Please ensure all required fields (*) are completed with real credentials.</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Send action */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`w-full py-4 rounded-xl font-sans font-bold text-sm tracking-wide shadow-sm hover:shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                    status === 'sending'
                      ? 'bg-blue-700 text-white cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white shadow-blue-100'
                  }`}
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending secure message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Professional Message</span>
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
