import Footer from './components/Footer';
import Header from './components/Header';
import { useCinematic } from './lib/useCinematic';
import About from './sections/About';
import CallToAction from './sections/CallToAction';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import Platforms from './sections/Platforms';
import Process from './sections/Process';
import Services from './sections/Services';
import WhyChoose from './sections/WhyChoose';

export default function App() {
  useCinematic();
  return (
    <>
      <div className="progress" aria-hidden="true" />
      <a href="#main" className="skip">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Platforms />
        <Process />
        <WhyChoose />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
