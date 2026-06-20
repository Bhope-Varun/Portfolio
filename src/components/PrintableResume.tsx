import React from 'react';

export default function PrintableResume() {
  return (
    <div 
      id="printable-resume-container" 
      className="hidden print:block w-full max-w-4xl mx-auto bg-white text-black p-0 font-serif leading-relaxed text-[10.5pt]"
    >
      {/* Resume Name & Contact Header */}
      <div className="text-center border-b-2 border-black pb-2 mb-4">
        <h1 className="text-2xl font-extrabold tracking-wide uppercase font-sans mb-1 text-black">
          BHOPE VARUN
        </h1>
        <p className="font-mono text-xs tracking-tight text-gray-850">
          bvarun2624@gmail.com | +91 8639718579 | Hyderabad | 
          <span className="ml-1 select-all font-sans font-semibold text-blue-900 underline">www.linkedin.com/in/b-varun-62684a312</span>
        </p>
      </div>

      {/* OBJECTIVE Section */}
      <div className="mb-4">
        <h2 className="text-[10pt] font-extrabold tracking-wider uppercase font-sans border-b border-black pb-0.5 mb-1.5 text-black">
          OBJECTIVE
        </h2>
        <p className="text-gray-850 text-justify">
          Passionate about building modern web applications, solving real-world problems, and creating seamless digital experiences through clean code and innovative technology. Currently gaining industry experience as a Full Stack Developer Intern while continuously expanding my expertise in software development and AI technologies.
        </p>
      </div>

      {/* EDUCATION Section */}
      <div className="mb-4">
        <h2 className="text-[10pt] font-extrabold tracking-wider uppercase font-sans border-b border-black pb-0.5 mb-1.5 text-black">
          EDUCATION
        </h2>
        <div className="flex justify-between items-baseline mb-0.5">
          <h3 className="font-bold text-[10pt] font-sans text-black">
            B.Tech, Electronics and Communication Engineering
          </h3>
          <span className="font-bold text-xs tracking-wide font-sans text-right self-end min-w-[85px]">
            2022 – 2026
          </span>
        </div>
        <p className="text-gray-800">
          JB Institute of Engineering and Technology | <span className="font-semibold">CGPA: 8.14</span>
        </p>
      </div>

      {/* TECHNICAL SKILLS Section */}
      <div className="mb-4">
        <h2 className="text-[10pt] font-extrabold tracking-wider uppercase font-sans border-b border-black pb-0.5 mb-1.5 text-black">
          TECHNICAL SKILLS
        </h2>
        <ul className="space-y-0.5 text-gray-850">
          <li>
            <strong className="font-bold font-sans">Languages:</strong> C++, Python, Java, JavaScript
          </li>
          <li>
            <strong className="font-bold font-sans">Frontend:</strong> React.js, HTML, CSS
          </li>
          <li>
            <strong className="font-bold font-sans">Database:</strong> SQL
          </li>
          <li>
            <strong className="font-bold font-sans">Tools:</strong> Git, GitHub, VS Code, Vercel, IntelliJ IDEA, Anaconda
          </li>
          <li>
            <strong className="font-bold font-sans">Concepts:</strong> Responsive Design, Component-Based Architecture, State Management, REST APIs
          </li>
        </ul>
      </div>

      {/* EXPERIENCE Section */}
      <div className="mb-4">
        <h2 className="text-[10pt] font-extrabold tracking-wider uppercase font-sans border-b border-black pb-0.5 mb-1.5 text-black">
          EXPERIENCE
        </h2>
        <div className="mb-1">
          <div className="flex justify-between items-baseline mb-0.5">
            <h3 className="font-bold text-[10pt] text-black">
              Full Stack Developer Intern – Prodesk IT
            </h3>
            <span className="font-bold text-xs tracking-wide font-sans text-right min-w-[125px]">
              May 2026 – Present
            </span>
          </div>
          <ul className="list-disc pl-5 space-y-0.5 text-gray-850">
            <li>Developed responsive web applications using React.js, JavaScript, HTML, and CSS.</li>
            <li>Implemented client-side routing and state management for single-page applications.</li>
          </ul>
        </div>
      </div>

      {/* PROJECTS Section */}
      <div className="mb-4">
        <h2 className="text-[10pt] font-extrabold tracking-wider uppercase font-sans border-b border-black pb-0.5 mb-1.5 text-black">
          PROJECTS
        </h2>
        
        {/* Project 1 */}
        <div className="mb-2.5">
          <div className="flex justify-between items-baseline mb-0.5">
            <h3 className="font-bold text-black font-sans text-[10.5pt]">
              AI Cover Letter Generator
            </h3>
            <span className="font-mono text-[8.5pt] font-bold text-gray-805">
              React.js, JavaScript, HTML, CSS
            </span>
          </div>
          <ul className="list-disc pl-5 space-y-0.5 text-gray-850">
            <li>Developed a web application that generates professional cover letters based on user input.</li>
            <li>Implemented resume upload and dynamic content generation features.</li>
            <li>Designed a responsive user interface for seamless user experience.</li>
            <li>Deployed the application on Vercel.</li>
          </ul>
        </div>

        {/* Project 2 */}
        <div className="mb-2.5">
          <div className="flex justify-between items-baseline mb-0.5">
            <h3 className="font-bold text-black font-sans text-[10.5pt]">
              Kanban Task Board
            </h3>
            <span className="font-mono text-[8.5pt] font-bold text-gray-805">
              React.js, JavaScript, dnd-kit, HTML, CSS
            </span>
          </div>
          <ul className="list-disc pl-5 space-y-0.5 text-gray-850">
            <li>Built a Trello-style task management board with drag-and-drop functionality.</li>
            <li>Implemented task creation, editing, deletion, and status tracking.</li>
            <li>Added localStorage integration for persistent data storage.</li>
            <li>Developed reusable React components and optimized state management.</li>
          </ul>
        </div>

        {/* Project 3 */}
        <div className="mb-2.5">
          <div className="flex justify-between items-baseline mb-0.5">
            <h3 className="font-bold text-black font-sans text-[10.5pt]">
              House Price Prediction
            </h3>
            <span className="font-mono text-[8.5pt] font-bold text-gray-805">
              Python, Scikit-Learn, Linear Regression
            </span>
          </div>
          <ul className="list-disc pl-5 space-y-0.5 text-gray-850">
            <li>Built a machine learning regression model to predict house prices based on multiple features (area, location, number of rooms, etc.).</li>
            <li>Performed data preprocessing including handling missing values, feature scaling, and encoding categorical variables.</li>
            <li>Implemented algorithms such as Linear Regression and compared with other models for accuracy improvement.</li>
          </ul>
        </div>
      </div>

      {/* CERTIFICATIONS Section */}
      <div className="mb-4">
        <h2 className="text-[10pt] font-extrabold tracking-wider uppercase font-sans border-b border-black pb-0.5 mb-1.5 text-black">
          CERTIFICATIONS
        </h2>
        <ul className="list-disc pl-5 space-y-0.5 text-gray-850">
          <li>Python – Stastigma Analytics pvt ltd</li>
          <li>Java – NPTEL</li>
          <li>VLSI – Internshala</li>
          <li>IoT – Jadavpur University</li>
        </ul>
      </div>

      {/* PERSONAL SKILLS Section */}
      <div className="mb-2">
        <h2 className="text-[10pt] font-extrabold tracking-wider uppercase font-sans border-b border-black pb-0.5 mb-1.5 text-black">
          PERSONAL SKILLS
        </h2>
        <ul className="list-disc pl-5 space-y-0.5 text-gray-850">
          <li><span className="font-bold font-sans">Leadership:</span> Active member of college team/club activities.</li>
          <li><span className="font-bold font-sans">Team Collaboration:</span> Worked in group-based academic and project teams.</li>
        </ul>
      </div>
    </div>
  );
}
