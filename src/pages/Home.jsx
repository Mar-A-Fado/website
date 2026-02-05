import React from 'react';
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';

import SEO from '../components/SEO';

const Home = ({ t }) => {
    return (
        <div>
            <SEO
                title={t.nav.home}
                description={t.hero.description}
            />
            <Hero t={t} />

            {/* Short Consultancy Intro Section (from marafado.pt home) */}
            {/* Short Consultancy Intro Section (from marafado.pt home) */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                        <div className="md:w-1/2 text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-6 leading-tight">{t.hero.consultancyTitle}</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {t.hero.consultancyDesc}
                            </p>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <div className="w-full h-auto overflow-hidden rounded-2xl shadow-xl bg-white border-4 border-white transform hover:scale-[1.02] transition-transform duration-500">
                                <img
                                    src={`${import.meta.env.BASE_URL}assets/consultancy_meeting.png`}
                                    alt="Consultancy Meeting"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <WhyUs t={t} />
        </div>
    );
};

export default Home;
