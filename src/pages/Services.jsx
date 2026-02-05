import React from 'react';
import SEO from '../components/SEO';

const Services = ({ t }) => {
    const categories = [
        {
            key: 'sustainability',
            title: t.services.sustainability.title,
            items: t.services.sustainability.items,
            icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
            bg: 'bg-green-50 text-green-700 border-green-100'
        },
        {
            key: 'managementSystems',
            title: t.services.managementSystems.title,
            items: t.services.managementSystems.items,
            icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
            bg: 'bg-blue-50 text-blue-700 border-blue-100'
        },
        {
            key: 'facilityManagement',
            title: t.services.facilityManagement.title,
            items: t.services.facilityManagement.items,
            icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
            bg: 'bg-indigo-50 text-indigo-700 border-indigo-100'
        },
        {
            key: 'safetyResponsibility',
            title: t.services.safetyResponsibility.title,
            items: t.services.safetyResponsibility.items,
            icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
            bg: 'bg-orange-50 text-orange-700 border-orange-100'
        }
    ];

    return (
        <section className="pt-28 pb-20 bg-gray-50">
            <SEO
                title={t.services.title}
                description={t.services.intro}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-deep-blue mb-4">{t.services.title}</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                        {t.services.intro}
                    </p>
                </div>

                <div className="space-y-24 mb-16">
                    {categories.map((cat, idx) => {
                        const isReverse = idx % 2 !== 0;
                        const imagePath = `${import.meta.env.BASE_URL}assets/service_${cat.key === 'managementSystems' ? 'management' : cat.key === 'facilityManagement' ? 'facility' : cat.key === 'safetyResponsibility' ? 'safety' : 'sustainability'}.png`;

                        return (
                            <div key={cat.key} className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${isReverse ? 'md:flex-row-reverse' : ''}`}>

                                {/* Content Section */}
                                <div className="md:w-1/2">
                                    <div className="flex items-center mb-6">
                                        <div className={`p-4 rounded-xl ${cat.bg} mr-5 shadow-sm`}>
                                            {cat.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-bold text-gray-900 mb-2">{cat.title}</h3>
                                            <div className="w-16 h-1 bg-deep-blue rounded-full"></div>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                                        <ul className="space-y-4">
                                            {cat.items.map((item, i) => (
                                                <li key={i} className="flex items-start text-gray-700 text-lg">
                                                    <svg className="w-6 h-6 text-deep-blue mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                    <span className="leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Image Section */}
                                <div className="md:w-1/2 w-full flex justify-center">
                                    <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-lg border-4 border-white transform hover:scale-[1.02] transition-transform duration-500">
                                        <div className={`relative w-full ${cat.bg.split(' ')[0]} bg-opacity-20`}>
                                            <img
                                                src={imagePath}
                                                alt={cat.title}
                                                className="w-full h-auto object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Services;
