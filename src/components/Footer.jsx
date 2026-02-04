import { Link } from 'react-router-dom';

const Footer = ({ t }) => {
    return (
        <footer className="bg-dark-gray text-white py-6 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center relative">
                    <div className="mb-4 md:mb-0 text-center md:text-left z-10">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="block transform hover:scale-105 transition-transform duration-300 focus:outline-none"
                        >
                            <img src={`${import.meta.env.BASE_URL}assets/logo_footer_final.png`} alt="Mar A Fado" className="h-14 w-auto mx-auto md:mx-0 opacity-90 transition-all duration-500 cursor-pointer" />
                        </button>
                    </div>

                    {/* Center: Contact Us Link (Absolute centered on desktop) */}
                    <div className="mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                        <Link
                            to="/contact"
                            className="text-gray-400 text-lg font-medium tracking-wide border-b border-gray-600 hover:text-white hover:border-white transition-all duration-300 pb-1"
                        >
                            {t.nav.contact}
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4 z-10">
                        <p className="text-gray-500 text-sm">
                            &copy; {new Date().getFullYear()} Mar A Fado. All rights reserved.
                        </p>
                        <a
                            href="https://www.linkedin.com/company/mar-a-fado-sustentabilidade-lda/about/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                        >
                            <span className="sr-only">LinkedIn</span>
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
