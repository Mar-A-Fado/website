import { useState } from 'react';

const Navigation = ({ lang, setLang, t }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const switchLang = (l) => {
        setLang(l);
        setLangOpen(false);
    };

    const navLinks = [
        { key: 'home', label: t.nav.home },
        { key: 'about', label: t.nav.about },
        { key: 'services', label: t.nav.services },
        { key: 'contact', label: t.nav.contact },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
                        <img className="h-12 w-auto" src="/assets/logo_ahq.png" alt="Mar A Fado Logo" />
                    </div>


                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.key}
                                onClick={() => scrollToSection(link.key)}
                                className="text-dark-gray hover:text-deep-blue font-medium transition-colors cursor-pointer"
                            >
                                {link.label}
                            </button>
                        ))}


                        <div className="relative">
                            <button
                                onClick={() => setLangOpen(!langOpen)}
                                className="flex items-center text-dark-gray focus:outline-none font-semibold uppercase hover:text-deep-blue transition-colors"
                            >
                                {lang}
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {langOpen && (
                                <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg py-1 border border-gray-100">
                                    {['pt', 'en', 'fr'].map((l) => (
                                        <button
                                            key={l}
                                            onClick={() => switchLang(l)}
                                            className={`block px-4 py-2 text-sm w-full text-left uppercase hover:bg-gray-50 ${l === lang ? 'text-deep-blue font-bold' : 'text-gray-700'}`}
                                        >
                                            {l}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>


                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-dark-gray hover:text-deep-blue focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>


            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <button
                                key={link.key}
                                onClick={() => scrollToSection(link.key)}
                                className="block w-full text-left px-3 py-2 text-base font-medium text-dark-gray hover:text-deep-blue hover:bg-gray-50 rounded-md"
                            >
                                {link.label}
                            </button>
                        ))}
                        <div className="border-t border-gray-100 pt-2 mt-2">
                            <div className="flex justify-around px-4">
                                {['pt', 'en', 'fr'].map((l) => (
                                    <button
                                        key={l}
                                        onClick={() => { switchLang(l); setIsOpen(false); }}
                                        className={`px-3 py-2 text-sm font-bold uppercase ${l === lang ? 'text-deep-blue bg-blue-50 rounded-full' : 'text-gray-500'}`}
                                    >
                                        {l}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
