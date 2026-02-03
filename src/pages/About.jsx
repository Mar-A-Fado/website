import React from 'react';

const About = ({ t }) => {
    return (
        <section className="pt-28 pb-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Intro */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-deep-blue mb-4">{t.about.title}</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                        {t.about.intro}
                    </p>
                </div>

                {/* History Section */}
                <div className="mb-20">
                    <div className="bg-cream rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/3">
                            {/* Visual element representing the heritage house or history concept */}
                            <div className="w-full h-64 bg-deep-blue/5 rounded-xl flex items-center justify-center border-2 border-dashed border-deep-blue/20">
                                <svg className="w-20 h-20 text-deep-blue/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                            </div>
                        </div>
                        <div className="md:w-2/3">
                            <h2 className="text-3xl font-bold text-dark-gray mb-6">{t.about.historyTitle}</h2>
                            <div className="prose text-gray-700 leading-relaxed text-lg space-y-4">
                                {/* Render newlines if any, or just block of text */}
                                <p>{t.about.historyText}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Founder Section */}
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transform hover:-translate-y-1 transition-transform duration-300">
                    <div className="md:flex">
                        <div className="md:w-1/2 relative h-[400px] md:h-auto">
                            <img className="absolute inset-0 w-full h-full object-cover object-top" src={`${import.meta.env.BASE_URL}assets/assinatura_a.png`} alt={t.about.founderName} />
                        </div>
                        <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center bg-linear-to-br from-white to-gray-50">
                            <div className="uppercase tracking-wide text-sm text-deep-blue font-bold mb-2">{t.about.founderTitle}</div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">{t.about.founderName}</h3>
                            <p className="text-gray-600 leading-relaxed text-lg italic">
                                "{t.about.founderBio}"
                            </p>

                            <div className="mt-8 flex flex-wrap gap-2">
                                {['EMAS', 'ISO 9001', 'ISO 14001', 'FM'].map((badge) => (
                                    <span key={badge} className="px-3 py-1 bg-deep-blue/10 text-deep-blue text-xs font-bold rounded-full">{badge}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
