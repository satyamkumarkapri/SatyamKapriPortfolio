import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Testimonial from './components/Testimonial';
import Process from './components/Process';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Achievements />
        <Testimonial />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
