import React from 'react';
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';

const Home = ({ t }) => {
    return (
        <div>
            <Hero t={t} />

            {/* Short Consultancy Intro Section (from marafado.pt home) */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-dark-gray mb-6">{t.hero.consultancyTitle}</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
                        {t.hero.consultancyDesc}
                    </p>
                </div>
            </section>

            <WhyUs t={t} />
        </div>
    );
};

export default Home;
