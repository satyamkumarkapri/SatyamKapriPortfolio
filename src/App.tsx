import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Expertise from './components/Expertise';
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
        <Projects />
        <Services />
        <Testimonial />
        <Expertise />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
