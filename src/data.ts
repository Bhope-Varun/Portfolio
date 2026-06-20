import { SkillCategory, Experience, Project, Certification, SocialLinks } from './types';

export const personalInfo = {
  name: 'Bhope Varun',
  title: 'Full Stack Developer',
  subtitle: 'Java & React Developer',
  bio: 'Passionate about building modern web applications, solving real-world problems, and creating seamless digital experiences through clean code and innovative technology. Currently gaining industry experience as a Full Stack Developer Intern while continuously expanding my expertise in software development and AI technologies.',
  address: 'Hyderabad, India',
  education: {
    degree: 'B.Tech, Electronics and Communication Engineering',
    focus: 'JB Institute of Engineering and Technology | CGPA: 8.14',
    achievement: 'Acquired foundational systems and engineering training from 2022 to 2026.'
  },
  lastUpdated: 'June 2026'
};

export const socialLinks: SocialLinks = {
  github: 'https://github.com/Bhope-Varun',
  linkedin: 'https://www.linkedin.com/in/b-varun-62684a312/',
  email: 'bvarun2624@gmail.com',
  phone: '+91 86397 18579'
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages & Frontend',
    skills: [
      { name: 'C++', level: 85, icon: 'TerminalIcon' },
      { name: 'Python', level: 88, icon: 'TerminalIcon' },
      { name: 'Java', level: 82, icon: 'CoffeeIcon' },
      { name: 'JavaScript', level: 86, icon: 'CodeIcon' },
      { name: 'React.js', level: 88, icon: 'ReactIcon' },
      { name: 'HTML & CSS', level: 92, icon: 'HtmlIcon' }
    ]
  },
  {
    title: 'Database & Developer Tools',
    skills: [
      { name: 'SQL', level: 80, icon: 'DatabaseIcon' },
      { name: 'Git & GitHub', level: 88, icon: 'GitBranchIcon' },
      { name: 'VS Code', level: 95, icon: 'SquareCodeIcon' },
      { name: 'Vercel', level: 85, icon: 'ZapIcon' },
      { name: 'IntelliJ IDEA', level: 80, icon: 'LayersIcon' },
      { name: 'Anaconda', level: 78, icon: 'TerminalIcon' }
    ]
  },
  {
    title: 'Core Software Concepts',
    skills: [
      { name: 'Responsive Design', level: 92, icon: 'LayoutIcon' },
      { name: 'Component Architecture', level: 90, icon: 'LayersIcon' },
      { name: 'State Management', level: 86, icon: 'DatabaseIcon' },
      { name: 'REST APIs', level: 84, icon: 'ZapIcon' }
    ]
  }
];

export const experiences: Experience[] = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Prodesk IT',
    period: 'May 2026 – Present',
    responsibilities: [
      'Developed responsive web applications using React.js, JavaScript, HTML, and CSS.',
      'Implemented client-side routing and state management for single-page applications.'
    ],
    skillsUsed: ['React.js', 'JavaScript', 'HTML', 'CSS', 'State Management', 'Git', 'GitHub']
  }
];

export const projects: Project[] = [
  {
    id: 'ai-cover-letter',
    title: 'AI Cover Letter Generator',
    category: 'Software Engineering',
    description: 'A web application that generates professional cover letters based on user input, parameters, and career goals.',
    longDescription: 'Developed a high-performance web application designed to synthesize professional cover letters. This helper features a responsive frontend, parses user profile specifications dynamically, and organizes templates cleanly.',
    techStack: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Vercel'],
    highlights: [
      'Developed a web application that generates professional cover letters based on user input.',
      'Implemented resume upload and dynamic content generation features.',
      'Designed a responsive user interface for seamless user experience.',
      'Successfully deployed the application on Vercel.'
    ]
  },
  {
    id: 'kanban-board',
    title: 'Kanban Task Board',
    category: 'Software Engineering',
    description: 'A comprehensive Trello-style task management board featuring drag-and-drop capability and persistent client-side states.',
    longDescription: 'Created a modular, user-friendly task planner. Integrates robust interactive drag handles, status grouping columns, task persistence mechanics, and optimized rendering to support lightweight desktop tracking operations.',
    techStack: ['React.js', 'JavaScript', 'dnd-kit', 'HTML', 'CSS', 'localStorage'],
    highlights: [
      'Built a Trello-style task management board with drag-and-drop functionality.',
      'Implemented task creation, editing, deletion, and status tracking.',
      'Added localStorage integration for persistent data storage.',
      'Developed reusable React components and optimized state management.'
    ]
  },
  {
    id: 'house-prices',
    title: 'House Price Prediction (Python)',
    category: 'Machine Learning',
    description: 'A machine learning regression model built using Python to predict residential real estate market valuations.',
    longDescription: 'Designed a regression analysis machine training workspace. Cleanses real estate datasets, handles categorical data encoding, conducts feature scaling, and compiles model accuracy calculations dynamically.',
    techStack: ['Python', 'Machine Learning', 'Linear Regression', 'Scikit-Learn', 'Feature Scaling'],
    highlights: [
      'Built a machine learning regression model to predict house prices based on multiple features (area, location, number of rooms, etc.).',
      'Performed data preprocessing including handling missing values, feature scaling, and encoding categorical variables.',
      'Implemented algorithms such as Linear Regression and compared with other models for accuracy improvement.'
    ]
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker (Python)',
    category: 'Software Engineering',
    description: 'A robust personal financial manager designed to log income, budget categories, and transactional records in Python.',
    longDescription: 'Created a command utility and localized helper designed to track budgets. Tracks daily financial events, separates logs into standard categories, and warns against budget caps dynamically using object structures.',
    techStack: ['Python', 'JSON Persistence', 'Data Processing', 'OOP Design'],
    highlights: [
      'Implemented object-oriented models to register transactions dynamically.',
      'Maintained persistent budget category ceilings for reliable local audits.',
      'Optimized data loops to fast-track financial analytics metrics.'
    ]
  },
  {
    id: 'cash-flow-dashboard',
    title: 'Cash Flow Dashboard',
    category: 'Software Engineering',
    description: 'A financial visualization dashboard for monitoring revenues, cash outflows, and multi-currency liquidity projections in real-time.',
    longDescription: 'Designed and implemented a modular financial dashboard featuring clean real-time charts, detailed transaction ledgers, cash runway calculators, and dynamic search/filter options. This application integrates customizable transaction states and robust local storage caching for immediate local audits.',
    techStack: ['React.js', 'Chart.js', 'Tailwind CSS', 'TypeScript', 'Context API', 'localStorage'],
    highlights: [
      'Engineered scalable line and polar area charts using custom Chart.js integrations.',
      'Built robust monthly cash inflows and outflows calculation modules.',
      'Designed responsive, mobile-first layouts with smooth motion transitions.'
    ]
  },
  {
    id: 'footstep-power-generation',
    title: 'Footstep Power Generation',
    category: 'IoT & Hardware',
    description: 'An eco-friendly energy system that converts mechanical compression footprint forces into electrical reserves using piezoelectric transducers.',
    longDescription: 'Designed a non-conventional electrical generator leveraging piezoelectric transducers embedded in tiles. Captured and regulated footprint kinetic energy mechanically, rectifying voltage spikes to store clean DC power in rechargeable battery compartments with continuous telemetry monitoring.',
    techStack: ['Piezoelectric Sensors', 'Arduino Uno', 'Bridge Rectifier', 'LCD Telemetry Display', 'Embedded C', 'Battery Grid'],
    highlights: [
      'Engineered a full-bridge rectifier sequence to convert alternating spikes into stable DC currents.',
      'Programmed Arduino telemetry code to dynamically compute microcontrollers power thresholds.',
      'Optimized capacitor filtering systems to prevent high voltage surges from degrading internal battery storage.'
    ]
  },
  {
    id: 'wireless-power-transmission',
    title: 'Wireless Power Transmission',
    category: 'IoT & Hardware',
    description: 'A high-frequency electromagnetic induction array designed to transmit electrical current across short air gaps without physical wire interfaces.',
    longDescription: 'Created a wireless power transfer transmitter and cooperative receiver utilizing magnetic induction. Features a high-frequency power oscillator circuit tuning resonant copper induction coils to energize localized devices in real-time across short air gap gaps safely.',
    techStack: ['Inductive Copper Coils', 'HF Power Oscillator', 'MOSFET Switches', 'Voltage Regulators', 'AC-DC Converter', 'Hardware Prototyping'],
    highlights: [
      'Designed custom primary and secondary magnetic induction coils matched to 13.56 MHz resonant frequency.',
      'Built transistorized switching networks converting low-voltage DC input to high-frequency AC fields.',
      'Tested safe electromagnetic containment, achieving effective wireless power reception at close proximity.'
    ]
  }
];

export const certifications: Certification[] = [
  {
    name: 'Python Certification',
    issuer: 'Stastigma Analytics Pvt Ltd'
  },
  {
    name: 'Java Programming',
    issuer: 'NPTEL'
  },
  {
    name: 'VLSI Design',
    issuer: 'Internshala'
  },
  {
    name: 'Embedded Systems & IoT',
    issuer: 'Jadavpur University'
  }
];
