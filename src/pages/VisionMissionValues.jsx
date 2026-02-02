import React from 'react';

const VisionMissionValues = ({ t }) => {
    return (
        <section className="pt-28 pb-20 bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-deep-blue mb-4">{t.vision.title}</h1>
                    <div className="w-24 h-1 bg-deep-blue mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    {/* Vision */}
                    <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-deep-blue">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            </div>
                            <h2 className="text-2xl font-bold text-dark-gray">{t.vision.visionTitle}</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {t.vision.visionText}
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-deep-blue">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h2 className="text-2xl font-bold text-dark-gray">{t.vision.missionTitle}</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {t.vision.missionText}
                        </p>
                    </div>
                </div>

                {/* Values */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-center text-dark-gray mb-12">{t.vision.valuesTitle}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {t.vision.valuesList.map((value, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                                <h3 className="text-lg font-bold text-deep-blue mb-3">{value.label}</h3>
                                <p className="text-gray-600">
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
