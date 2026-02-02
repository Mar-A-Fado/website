import React from 'react';

const Policies = ({ t }) => {
    return (
        <section className="pt-28 pb-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-deep-blue mb-4">{t.policies.title}</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                        {t.policies.intro}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Quality */}
                    <div className="bg-linear-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100 shadow-sm">
                        <div className="flex items-center mb-6">
                            <div className="p-3 bg-blue-600 rounded-lg text-white mr-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                            </div>
                            <h2 className="text-xl font-bold text-deep-blue">{t.policies.qualityTitle}</h2>
                        </div>
                        <ul className="space-y-4">
                            {t.policies.qualityItems.map((item, idx) => (
                                <li key={idx} className="flex items-start text-gray-700">
                                    <span className="text-blue-500 mr-2 mt-1">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Environment */}
                    <div className="bg-linear-to-br from-green-50 to-white p-8 rounded-xl border border-green-100 shadow-sm">
                        <div className="flex items-center mb-6">
                            <div className="p-3 bg-teal-600 rounded-lg text-white mr-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h2 className="text-xl font-bold text-deep-blue">{t.policies.environmentTitle}</h2>
                        </div>
                        <ul className="space-y-4">
                            {t.policies.environmentItems.map((item, idx) => (
                                <li key={idx} className="flex items-start text-gray-700">
                                    <span className="text-teal-500 mr-2 mt-1">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Safety */}
                    <div className="bg-linear-to-br from-orange-50 to-white p-8 rounded-xl border border-orange-100 shadow-sm">
                        <div className="flex items-center mb-6">
                            <div className="p-3 bg-red-500 rounded-lg text-white mr-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            </div>
                            <h2 className="text-xl font-bold text-deep-blue">{t.policies.safetyTitle}</h2>
                        </div>
                        <ul className="space-y-4">
                            {t.policies.safetyItems.map((item, idx) => (
                                <li key={idx} className="flex items-start text-gray-700">
                                    <span className="text-red-500 mr-2 mt-1">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Policies;
