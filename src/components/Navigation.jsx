import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ lang, setLang, t }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);
    const switchLang = (l) => {
        setLang(l);
        setLangOpen(false);
    };

    const navLinks = [
        { key: '/', label: t.nav.home },
        { key: '/about', label: t.nav.about },
        { key: '/vision', label: t.nav.vision },
        { key: '/policies', label: t.nav.policies },
        { key: '/services', label: t.nav.services },
        { key: '/contact', label: t.nav.contact },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    <Link to="/" className="shrink-0 cursor-pointer">
                        <img className="h-20 w-auto transition-transform duration-300 hover:scale-105" src={`${import.meta.env.BASE_URL}assets/logo_nav_new.png`} alt="Mar A Fado Logo" />
                    </Link>


                    <div className="hidden lg:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.key}
                                to={link.key}
                                className={`text-sm uppercase font-semibold transition-colors duration-200 ${location.pathname === link.key ? 'text-deep-blue' : 'text-gray-600 hover:text-deep-blue'}`}
                            >
                                {link.label}
                            </Link>
                        ))}


                        <div className="relative ml-4">
                            <button
                                onClick={() => setLangOpen(!langOpen)}
                                className="flex items-center text-dark-gray focus:outline-none font-bold uppercase hover:text-deep-blue transition-colors px-3 py-1 border border-gray-200 rounded-md"
                            >
                                {lang}
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {langOpen && (
                                <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg py-1 border border-gray-100 z-50">
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


                    <div className="lg:hidden flex items-center">
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
                <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg h-screen sticky top-20 overflow-y-auto">
                    <div className="px-2 pt-2 pb-20 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.key}
                                to={link.key}
                                onClick={() => setIsOpen(false)}
                                className={`block w-full text-left px-3 py-4 text-base font-semibold border-b border-gray-50 ${location.pathname === link.key ? 'text-deep-blue bg-blue-50/50' : 'text-gray-600 hover:text-deep-blue hover:bg-gray-50'}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-8 pb-4">
                            <div className="flex justify-center space-x-4">
                                {['pt', 'en', 'fr'].map((l) => (
                                    <button
                                        key={l}
                                        onClick={() => { switchLang(l); setIsOpen(false); }}
                                        className={`w-12 h-12 flex items-center justify-center text-sm font-bold uppercase rounded-full border ${l === lang ? 'text-white bg-deep-blue border-deep-blue' : 'text-gray-500 border-gray-200'}`}
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
