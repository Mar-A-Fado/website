import React from 'react';

import SEO from '../components/SEO';

const VisionMissionValues = ({ t }) => {
    return (
        <section className="pt-28 pb-20 bg-gray-50">
            <SEO
                title={t.vision.title}
                description={t.vision.visionText}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-bold text-deep-blue mb-6">{t.vision.title}</h1>
                    <div className="w-24 h-1.5 bg-gold mx-auto rounded-full"></div>
                </div>

                {/* Vision & Mission Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-24">
                    {/* Vision */}
                    <div className="bg-white p-10 md:p-14 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-deep-blue/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
                        <h2 className="text-3xl font-bold text-deep-blue mb-6 relative z-10">{t.vision.visionTitle}</h2>
                        <p className="text-gray-600 leading-relaxed text-lg relative z-10">
                            {t.vision.visionText}
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="bg-deep-blue p-10 md:p-14 rounded-3xl shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16 transition-transform group-hover:scale-150 duration-500"></div>
                        <h2 className="text-3xl font-bold text-white mb-6 relative z-10">{t.vision.missionTitle}</h2>
                        <p className="text-blue-100 leading-relaxed text-lg relative z-10">
                            {t.vision.missionText}
                        </p>
                    </div>
                </div>

                {/* Values Section */}
                <div>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">{t.vision.valuesTitle}</h2>
                        <div className="w-16 h-1 bg-deep-blue mx-auto rounded-full opacity-50"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {t.vision.valuesList.map((value, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-gold hover:border-deep-blue transition-colors duration-300 hover:shadow-md">
                                <h3 className="text-xl font-bold text-deep-blue mb-4">{value.label}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {value.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default VisionMissionValues;
