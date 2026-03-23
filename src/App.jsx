import { Suspense } from 'react';
import Scene3D from './components/Scene3D';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function Loader() {
  return (
    <div className="app-loader">
      <div className="app-loader__spinner">
        <div className="app-loader__ring"></div>
        <span className="app-loader__text">&lt;AR/&gt;</span>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app noise-bg">
      <Suspense fallback={<Loader />}>
        <Scene3D />
      </Suspense>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
