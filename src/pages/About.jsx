import React from 'react';

import SEO from '../components/SEO';

const About = ({ t }) => {
    return (
        <section className="pt-28 pb-20 bg-white">
            <SEO
                title={t.about.title}
                description={t.about.intro}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Intro */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-deep-blue mb-4">{t.about.title}</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                        {t.about.intro}
                    </p>
                </div>

                {/* History Section */}
                {/* History Section */}
                {/* History Section */}
                <div className="mb-20">
                    <div className="bg-cream rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 space-y-12">
                        {/* Part 1: Facade Image (Left) + Text (Right) */}
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-1/3">
                                <div className="w-full h-auto overflow-hidden rounded-xl shadow-md bg-white border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                                    <img
                                        src={`${import.meta.env.BASE_URL}assets/history_facade.png`}
                                        alt="Mar A Fado Facade"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                            <div className="md:w-2/3">
                                <h2 className="text-3xl font-bold text-dark-gray mb-6">{t.about.historyTitle}</h2>
                                <div className="prose text-gray-700 leading-relaxed text-lg space-y-4">
                                    {Array.isArray(t.about.historyText) ? (
                                        t.about.historyText.slice(0, 3).map((paragraph, idx) => (
                                            <p key={idx}>{paragraph}</p>
                                        ))
                                    ) : (
                                        <p>{t.about.historyText}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Part 2: Text (Left) + Tile Image (Right) */}
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-2/3 order-2 md:order-1">
                                <div className="prose text-gray-700 leading-relaxed text-lg space-y-4">
                                    {Array.isArray(t.about.historyText) && t.about.historyText.slice(3).map((paragraph, idx) => (
                                        <p key={idx}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                            <div className="md:w-1/3 order-1 md:order-2">
                                <div className="w-full h-auto overflow-hidden rounded-xl shadow-md bg-white border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                                    <img
                                        src={`${import.meta.env.BASE_URL}assets/history_tile.png`}
                                        alt="Mar A Fado Tiles"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Founder Section */}
                <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transform hover:-translate-y-1 transition-transform duration-300">
                    <div className="md:flex">
                        <div className="md:w-5/12 relative bg-gray-50 flex items-center justify-center">
                            <img
                                className="w-full h-auto object-contain object-center md:max-h-[600px]"
                                src={`${import.meta.env.BASE_URL}assets/founder.png`}
                                alt={t.about.founderName}
                            />
                        </div>
                        <div className="p-8 md:p-12 md:w-7/12 flex flex-col justify-center bg-linear-to-br from-white to-gray-50">
                            <div className="uppercase tracking-wide text-sm text-deep-blue font-bold mb-2">{t.about.founderTitle}</div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">{t.about.founderName}</h3>

                            <div className="text-gray-600 leading-relaxed text-lg mb-8 space-y-4">
                                {Array.isArray(t.about.founderBio) ? (
                                    t.about.founderBio.map((paragraph, idx) => (
                                        <p key={idx}>{paragraph}</p>
                                    ))
                                ) : (
                                    <p>{t.about.founderBio}</p>
                                )}
                            </div>

                            {t.about.founderAchievements && (
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
                                    {t.about.founderAchievements.map((achievement, idx) => (
                                        <li key={idx} className="text-sm text-gray-700">
                                            <span className="font-bold text-deep-blue block mb-1 text-base">• {achievement.title}</span>
                                            <span className="block pl-3 border-l-2 border-gray-200 leading-relaxed">{achievement.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            <div className="mt-2 flex flex-wrap gap-2">
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
