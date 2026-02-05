import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CookieConsentBanner from './components/CookieConsentBanner';
import Home from './pages/Home';
import About from './pages/About';
import VisionMissionValues from './pages/VisionMissionValues';
import Policies from './pages/Policies';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { translations } from './data/translations';

import usePageTracking from './hooks/usePageTracking';

// ScrollToTop and Analytics helper component
const RouteHandler = () => {
  const { pathname } = useLocation();
  usePageTracking();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [lang, setLang] = useState('pt');
  const t = translations[lang];

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <RouteHandler />
      <div className="font-sans text-gray-900 bg-cream flex flex-col min-h-screen">
        <Navigation lang={lang} setLang={setLang} t={t} />

        <main className="grow">
          <Routes>
            <Route path="/" element={<Home t={t} />} />
            <Route path="/about" element={<About t={t} />} />
            <Route path="/vision" element={<VisionMissionValues t={t} />} />
            <Route path="/policies" element={<Policies t={t} />} />
            <Route path="/services" element={<Services t={t} />} />
            <Route path="/contact" element={<Contact t={t} />} />
          </Routes>
        </main>

        <Footer t={t} />
        <CookieConsentBanner lang={lang} />
      </div>
    </Router>
  );
}

export default App;
