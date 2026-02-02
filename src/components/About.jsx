import React from 'react';

const About = ({ t }) => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark-gray">{t.about.title}</h2>
                    <div className="mt-2 w-24 h-1 bg-deep-blue mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

                    <div className="bg-cream/50 p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="w-12 h-12 bg-deep-blue/10 rounded-full flex items-center justify-center mb-6 text-deep-blue">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-deep-blue mb-4">{t.about.mission.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{t.about.mission.desc}</p>
                    </div>


                    <div className="bg-cream/50 p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="w-12 h-12 bg-deep-blue/10 rounded-full flex items-center justify-center mb-6 text-deep-blue">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-deep-blue mb-4">{t.about.vision.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{t.about.vision.desc}</p>
                    </div>


                    <div className="bg-cream/50 p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="w-12 h-12 bg-deep-blue/10 rounded-full flex items-center justify-center mb-6 text-deep-blue">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-deep-blue mb-4">{t.about.values.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{t.about.values.desc}</p>
                    </div>
                </div>


                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 max-w-4xl mx-auto">
                    <div className="md:flex">
                        <div className="md:w-1/2 relative bg-gray-50 h-[300px] md:h-auto">
                            {/* Using CSS background or object-cover image for better control */}
                            <img className="absolute inset-0 w-full h-full object-cover object-top" src="/assets/assinatura_a.png" alt="Inês Filipe Viegas" />
                        </div>
                        <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                            <div className="uppercase tracking-wide text-sm text-deep-blue font-semibold mb-2">{t.about.role}</div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">{t.about.founder}</h3>
                            <p className="mt-2 text-gray-600 leading-relaxed">
                                Specialist in ISO management systems, sustainability reporting (ESRS), and corporate auditing. Dedicated to bridging the gap between complex regulatory requirements and practical operational efficiency.
                            </p>

                            <div className="mt-8">
                                <div className="flex items-center space-x-4">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">ISO 9001</span>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">ISO 14001</span>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">ISO 45001</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
