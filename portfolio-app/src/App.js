// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { 
  Mail, Phone, MapPin, Linkedin, Download, 
  ChevronRight, Code, Database, Layout, 
  Terminal, Wrench, GraduationCap, Heart, 
  Menu, X, ExternalLink, Briefcase, User
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll to section
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Update active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'profile', 'experience', 'projects', 'skills', 'education'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && 
            element.offsetTop <= scrollPosition && 
            (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Profile', id: 'profile' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#333333] font-sans selection:bg-[#2a9d8f] selection:text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Import Poppins Font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
          html { scroll-behavior: smooth; }
        `}
      </style>

      {/* Navigation Bar */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollTo('home')}>
              <span className="font-bold text-2xl tracking-tighter text-[#1a2b4c]">
                MK<span className="text-[#2a9d8f]">.</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-sm font-medium transition-colors hover:text-[#2a9d8f] ${
                    activeSection === link.id ? 'text-[#2a9d8f] border-b-2 border-[#2a9d8f]' : 'text-[#333333]'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#1a2b4c] hover:text-[#2a9d8f] focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`block w-full text-left px-3 py-4 text-base font-medium rounded-md transition-colors ${
                    activeSection === link.id ? 'text-[#2a9d8f] bg-[#2a9d8f]/10' : 'text-[#333333] hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#1a2b4c] -z-10" />
        {/* Subtle geometric background accents */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#2a9d8f] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob -z-10" />
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 -z-10" />

        <div className="max-w-6xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 text-white">
            <p className="text-[#2a9d8f] font-medium tracking-wide text-lg">HELLO, I AM</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Mahesh Kumar
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light border-l-4 border-[#2a9d8f] pl-4 py-1">
              Python/Odoo Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light italic">
              "Building Scalable ERP Solutions"
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center md:justify-start">
              <button 
                className="flex items-center justify-center gap-2 bg-[#2a9d8f] hover:bg-[#218276] text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-[#2a9d8f]/30"
                onClick={() => scrollTo('projects')}
              >
                View Projects <ChevronRight size={18} />
              </button>
              <button 
                className="flex items-center justify-center gap-2 bg-transparent border-2 border-white/20 hover:border-white hover:bg-white/10 text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
                onClick={() => alert("CV Download started!")}
              >
                <Download size={18} /> Download CV
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-8 text-sm text-gray-300">
              <a href="mailto:maheshkumarmgmt@gmail.com" className="flex items-center gap-2 hover:text-[#2a9d8f] transition-colors">
                <Mail size={16} /> maheshkumarmgmt@gmail.com
              </a>
              <a href="tel:+918303523929" className="flex items-center gap-2 hover:text-[#2a9d8f] transition-colors">
                <Phone size={16} /> +91 8303523929
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={16} /> Sector-63, Noida (UP)
              </span>
              <a 
                href="https://in.linkedin.com/in/makedecoder"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#2a9d8f] transition-colors"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
          
          {/* Abstract Hero Graphic */}
          <div className="hidden md:block flex-1 relative">
            <div className="w-full max-w-md mx-auto aspect-square relative">
              <div className="absolute inset-0 border-4 border-[#2a9d8f]/30 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 border-4 border-dashed border-[#2a9d8f]/40 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#1a2b4c] border-2 border-[#2a9d8f] rounded-2xl p-8 transform rotate-12 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                   <Code size={100} className="text-[#2a9d8f]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="profile" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-8 md:p-12 transform hover:-translate-y-1 transition-all duration-300 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#e0f2f1] text-[#2a9d8f] rounded-lg">
                <User size={24} />
              </div>
              <h2 className="text-3xl font-bold text-[#1a2b4c]">PROFILE</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Passionate software developer with a strong foundation in Python and the Odoo framework. 
              Dedicated to building scalable ERP solutions and optimizing business processes through innovative technical implementations. 
              Adept at analyzing complex workflows, integrating systems, and delivering high-quality, efficient software tailored to enterprise needs.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12 justify-center md:justify-start">
            <div className="p-3 bg-[#e0f2f1] text-[#2a9d8f] rounded-lg">
              <Briefcase size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4c]">PROFESSIONAL EXPERIENCE</h2>
          </div>

          <div className="relative border-l-2 border-[#2a9d8f]/30 ml-4 md:ml-6 pl-8 py-2">
            <div className="absolute w-4 h-4 bg-[#2a9d8f] rounded-full -left-[9px] top-4 shadow-[0_0_0_4px_rgba(42,157,143,0.2)]" />
            
            <div className="mb-2">
              <h3 className="text-2xl font-bold text-[#1a2b4c]">Software Developer</h3>
              <p className="text-[#2a9d8f] font-semibold text-lg mt-1">02b Technologies Pvt. Ltd.</p>
            </div>
            
            <ul className="mt-6 space-y-4 text-gray-600">
              {[
                "Developed and customized Odoo modules tailored to specific business requirements.",
                "Integrated third-party APIs and services with Odoo applications to extend functionality.",
                "Optimized database queries and improved overall system performance and responsiveness.",
                "Collaborated with cross-functional teams to gather requirements and deliver scalable ERP solutions."
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ChevronRight size={20} className="text-[#2a9d8f] flex-shrink-0 mt-1" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12 justify-center md:justify-start">
            <div className="p-3 bg-[#e0f2f1] text-[#2a9d8f] rounded-lg">
              <Layout size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4c]">KEY PROJECTS</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 overflow-hidden group hover:-translate-y-2 transition-transform duration-300 border border-gray-100 flex flex-col">
              <div className="h-2 bg-[#2a9d8f]" />
              <div className="p-8 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-[#1a2b4c]">Fluent Conveyors LLC</h3>
                  <ExternalLink size={20} className="text-gray-400 group-hover:text-[#2a9d8f] transition-colors" />
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Odoo', 'APIs', 'PostgreSQL'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3 text-sm text-gray-600 mb-6">
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2a9d8f] mt-1.5 flex-shrink-0"/>Implemented complex manufacturing routing and BOMs.</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2a9d8f] mt-1.5 flex-shrink-0"/>Customized sales and inventory management workflows.</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2a9d8f] mt-1.5 flex-shrink-0"/>Developed custom, dynamic reporting dashboards.</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2a9d8f] mt-1.5 flex-shrink-0"/>Automated invoice generation and payment tracking.</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2a9d8f] mt-1.5 flex-shrink-0"/>Integrated the system with external shipping providers.</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2a9d8f] mt-1.5 flex-shrink-0"/>Managed comprehensive user access rights and security rules.</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2a9d8f] mt-1.5 flex-shrink-0"/>Successfully migrated data from legacy systems to Odoo.</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2a9d8f] mt-1.5 flex-shrink-0"/>Created automated testing scripts for reliability.</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2a9d8f] mt-1.5 flex-shrink-0"/>Provided ongoing technical support and bug fixing.</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2a9d8f] mt-1.5 flex-shrink-0"/>Documented system configurations and compiled user manuals.</li>
                </ul>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 overflow-hidden group hover:-translate-y-2 transition-transform duration-300 border border-gray-100 flex flex-col">
              <div className="h-2 bg-[#1a2b4c]" />
              <div className="p-8 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-[#1a2b4c]">Vendor Dashboard</h3>
                  <ExternalLink size={20} className="text-gray-400 group-hover:text-[#1a2b4c] transition-colors" />
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {['OCR', 'Python', 'Odoo'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-[#1a2b4c]/10 text-[#1a2b4c] text-xs font-semibold rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="p-1 bg-[#1a2b4c]/10 rounded mt-0.5"><Code size={14} className="text-[#1a2b4c]" /></div>
                    <span>Implemented advanced <strong>OCR technology</strong> for automated and accurate invoice data extraction.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-1 bg-[#1a2b4c]/10 rounded mt-0.5"><Layout size={14} className="text-[#1a2b4c]" /></div>
                    <span>Developed a centralized, intuitive <strong>dashboard</strong> for comprehensive vendor management.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-1 bg-[#1a2b4c]/10 rounded mt-0.5"><Database size={14} className="text-[#1a2b4c]" /></div>
                    <span>Automated bill creation and multi-level validation workflows, reducing manual entry errors.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-1 bg-[#1a2b4c]/10 rounded mt-0.5"><Terminal size={14} className="text-[#1a2b4c]" /></div>
                    <span>Improved processing time by <strong>40%</strong> through extensive workflow optimization and automation.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12 justify-center md:justify-start">
            <div className="p-3 bg-[#e0f2f1] text-[#2a9d8f] rounded-lg">
              <Wrench size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4c]">TECHNICAL SKILLS</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Skill Category */}
            {[
              { title: 'Odoo Development', icon: <Code size={20} />, skills: ['Odoo 14', 'Odoo 15', 'Odoo 16', 'Odoo.sh'] },
              { title: 'Databases', icon: <Database size={20} />, skills: ['PostgreSQL'] },
              { title: 'Frameworks', icon: <Layout size={20} />, skills: ['Odoo ORM', 'QWeb'] },
              { title: 'Languages', icon: <Terminal size={20} />, skills: ['Python', 'XML'] },
              { title: 'Tools', icon: <Wrench size={20} />, skills: ['Git', 'GitHub', 'Postman', 'Sublime Text'] }
            ].map((category, idx) => (
              <div key={idx} className="bg-[#f8f9fa] rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4 text-[#1a2b4c]">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="px-4 py-2 bg-white text-[#2a9d8f] border border-[#2a9d8f]/20 shadow-sm rounded-full text-sm font-medium hover:bg-[#2a9d8f] hover:text-white transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Interests */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* Education */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#e0f2f1] text-[#2a9d8f] rounded-lg">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-3xl font-bold text-[#1a2b4c]">EDUCATION</h2>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#e0f2f1] rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[#1a2b4c]">B.Tech</h3>
                <p className="text-lg font-medium text-[#2a9d8f] mt-1">Dr. A.P.J. Abdul Kalam Technical University</p>
                
                <div className="mt-6 space-y-2 text-gray-600">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="font-medium">CGPA</span>
                    <span className="font-bold text-[#1a2b4c]">8.2/10</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="font-medium">Duration</span>
                    <span>2019 - 2022</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="font-medium">Location</span>
                    <span>Lucknow, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#e0f2f1] text-[#2a9d8f] rounded-lg">
                <Heart size={24} />
              </div>
              <h2 className="text-3xl font-bold text-[#1a2b4c]">INTERESTS</h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center flex flex-col items-center justify-center gap-3 hover:-translate-y-1 transition-transform cursor-default group">
                <div className="w-16 h-16 bg-[#1a2b4c]/5 rounded-full flex items-center justify-center group-hover:bg-[#1a2b4c] group-hover:text-white transition-colors text-[#1a2b4c]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
                </div>
                <h3 className="font-semibold text-[#1a2b4c]">Playing Cricket</h3>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center flex flex-col items-center justify-center gap-3 hover:-translate-y-1 transition-transform cursor-default group">
                <div className="w-16 h-16 bg-[#2a9d8f]/10 rounded-full flex items-center justify-center group-hover:bg-[#2a9d8f] group-hover:text-white transition-colors text-[#2a9d8f]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                </div>
                <h3 className="font-semibold text-[#1a2b4c]">Tech Learning (YouTube)</h3>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="bg-[#1a2b4c] text-white py-12 mt-12 border-t-4 border-[#2a9d8f]">
        <div className="max-w-6xl mx-auto px-4 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Mahesh Kumar</h2>
            <p className="text-[#2a9d8f] font-medium mb-4">Python/Odoo Developer</p>
            <p className="text-gray-400 text-sm max-w-sm">
              Open to new opportunities and exciting projects. Let's build scalable ERP solutions together.
            </p>
          </div>
          
          <div className="flex flex-col gap-3 text-gray-300">
            <a href="mailto:maheshkumarmgmt@gmail.com" className="flex items-center justify-center md:justify-start gap-3 hover:text-[#2a9d8f] transition-colors bg-white/5 px-4 py-2 rounded-lg">
              <Mail size={18} className="text-[#2a9d8f]" /> maheshkumarmgmt@gmail.com
            </a>
            <a href="tel:+918303523929" className="flex items-center justify-center md:justify-start gap-3 hover:text-[#2a9d8f] transition-colors bg-white/5 px-4 py-2 rounded-lg">
              <Phone size={18} className="text-[#2a9d8f]" /> +91 8303523929
            </a>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Mahesh Kumar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;