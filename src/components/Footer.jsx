import React from 'react';

const Footer = ({ t }) => {
    return (
        <footer className="bg-dark-gray text-white py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <img src={`${import.meta.env.BASE_URL}assets/logo_ahq.png`} alt="Mar A Fado" className="h-10 w-auto mb-4 mx-auto md:mx-0 opacity-90 grayscale hover:grayscale-0 transition-all duration-500" />
                        <p className="text-gray-400 text-sm max-w-xs">
                            {t.hero.subtitle}
                        </p>
                    </div>

                    <div className="flex space-x-6 mb-8 md:mb-0">

                        <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                    </div>

                    <div className="text-center md:text-right">
                        <p className="text-gray-500 text-sm">
                            &copy; {new Date().getFullYear()} Mar A Fado. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
