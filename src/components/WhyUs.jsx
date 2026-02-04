import React from 'react';

const WhyUs = ({ t }) => {
    return (
        <section className="py-20 bg-deep-blue text-white relative overflow-hidden">

            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.whyUs.title}</h2>
                    <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-light">
                        {t.whyUs.intro}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {t.whyUs.items.map((item, index) => (
                        <div key={index} className="group">
                            <div className="w-48 h-48 mx-auto flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-500">
                                {index === 0 && (
                                    <img src={`${import.meta.env.BASE_URL}assets/mosaic_rebordo.png`} alt="Consultancy" className="w-full h-full object-contain drop-shadow-2xl" />
                                )}
                                {index === 1 && (
                                    <img src={`${import.meta.env.BASE_URL}assets/mosaic_canto.png`} alt="Audit" className="w-full h-full object-contain drop-shadow-2xl" />
                                )}
                                {index === 2 && (
                                    <img src={`${import.meta.env.BASE_URL}assets/mosaic_invertido.png`} alt="Training" className="w-full h-full object-contain drop-shadow-2xl" />
                                )}
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                            <p className="text-blue-100/90 leading-relaxed font-light text-lg">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
