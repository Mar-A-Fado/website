import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { translations } from './data/translations';

function App() {
  const [lang, setLang] = useState('pt');

  const t = translations[lang];

  return (
    <div className="font-sans text-gray-900 bg-cream">
      <Navigation lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <WhyUs t={t} />
      <About t={t} />
      <Services t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  );
}

export default App;
