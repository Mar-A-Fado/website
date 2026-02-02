import React, { useEffect, useRef } from 'react';

const Hero = ({ t }) => {
    const chimneyRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (chimneyRef.current) {
                const scrolled = window.scrollY;
                chimneyRef.current.style.transform = `translateY(${scrolled * 0.2}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToServices = () => {
        const element = document.getElementById('services');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id="home" className="relative bg-cream min-h-screen flex items-center overflow-hidden pt-20">

            <div className="absolute right-0 top-20 md:top-0 w-full md:w-1/2 h-full opacity-10 md:opacity-100 pointer-events-none z-0 flex justify-end items-center">
                <img
                    ref={chimneyRef}
                    src="/assets/chaminehq.png"
                    alt="Chimney"
                    className="h-[80vh] md:h-[90vh] object-contain object-right-bottom translate-x-1/4 md:translate-x-0"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="md:w-3/5 pb-20 md:pb-0">
                    <h1 className="text-4xl md:text-6xl font-bold text-deep-blue mb-6 leading-tight animate-fade-in-up">
                        {t.hero.title}
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed font-light animate-fade-in-up delay-100">
                        {t.hero.subtitle}
                    </p>
                    <div className="animate-fade-in-up delay-200">
                        <button
                            onClick={scrollToServices}
                            className="bg-deep-blue text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all transform hover:-translate-y-1 flex items-center"
                        >
                            {t.hero.cta}
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
