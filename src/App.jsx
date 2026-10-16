import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

/**
 * App Component
 * Root layout composing independent, reusable components with props data flow.
 */
function App() {
  const studentData = {
    name: 'Deep Chauhan',
    rollNo: '24CS012',
    role: 'Full Stack Web Developer & B.Tech CSE Student',
    tagline: 'Passionate about engineering modular React web architectures, high-performance Node.js APIs, and elegant UI interfaces.',
    themeColor: '#312e81'
  };

  const skillsList = [
    { name: 'React.js', level: 90, category: 'Frontend' },
    { name: 'JavaScript (ES6+)', level: 92, category: 'Language' },
    { name: 'HTML5 & CSS3', level: 95, category: 'Frontend' },
    { name: 'Node.js & Express', level: 88, category: 'Backend' },
    { name: 'MongoDB & Mongoose', level: 85, category: 'Database' },
    { name: 'RESTful API Design', level: 90, category: 'Architecture' },
    { name: 'Git & GitHub', level: 88, category: 'DevOps' },
    { name: 'Vite & Tooling', level: 85, category: 'Build Tools' }
  ];

  const projectsList = [
    {
      id: 1,
      title: 'Task Manager REST API',
      description: 'A modular Express.js backend API featuring request logging, global error handling middleware, and full CRUD operations.',
      techStack: ['Node.js', 'Express.js', 'REST API', 'JavaScript'],
      githubUrl: 'https://github.com/24CS012Deep/Prc4_AWDF'
    },
    {
      id: 2,
      title: 'MongoDB Task Persistence Engine',
      description: 'Mongoose ODM integration with strict schema validation, default timestamps, and MongoDB Atlas database connection.',
      techStack: ['MongoDB', 'Mongoose', 'Express.js', 'Node.js'],
      githubUrl: 'https://github.com/24CS012Deep/Prc5_AWDF'
    },
    {
      id: 3,
      title: 'React Student Portfolio Platform',
      description: 'A modular Vite-powered React single page application with reusable functional components and custom props data flow.',
      techStack: ['React', 'Vite', 'Component Architecture', 'CSS3'],
      githubUrl: 'https://github.com/24CS012Deep/Prc1_AWDF'
    }
  ];

  return (
    <div className="app-container">
      <NavBar />

      <main className="main-content">
        <Header
          name={studentData.name}
          rollNo={studentData.rollNo}
          role={studentData.role}
          tagline={studentData.tagline}
          themeColor={studentData.themeColor}
        />

        <About />

        <Skills skillList={skillsList} />

        <Projects projects={projectsList} />
      </main>

      <Footer
        studentName={studentData.name}
        rollNo={studentData.rollNo}
        email="24cs012@charusat.edu.in"
        githubUrl="https://github.com/24CS012Deep"
      />
    </div>
  );
}

export default App;
