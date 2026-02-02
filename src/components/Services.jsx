import React from 'react';

const Services = ({ t }) => {
    const serviceCards = [
        {
            title: t.services.consultancy,
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            ),
            bg: "bg-blue-600"
        },
        {
            title: t.services.audit,
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            ),
            bg: "bg-teal-600"
        },
        {
            title: t.services.training,
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
            ),
            bg: "bg-indigo-600"
        },
    ];

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark-gray">{t.services.title}</h2>
                    <div className="mt-2 w-24 h-1 bg-deep-blue mx-auto rounded-full"></div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {serviceCards.map((service, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className={`h-2 ${service.bg}`}></div>
                            <div className="p-8">
                                <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 shadow-sm ${service.bg}`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-4">Mar A Fado Solutions</p>
                                <div className="w-full bg-gray-100 h-px mb-4"></div>
                                <button className="text-deep-blue font-semibold flex items-center group">
                                    Learn more
                                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-dark-gray mb-6">{t.services.standards}</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {t.services.isoList.split(', ').map((iso, idx) => (
                            <span key={idx} className="inline-block px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 font-medium text-sm hover:border-deep-blue hover:text-deep-blue transition-colors cursor-default">
                                {iso}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;
