import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = ({ t }) => {
    const navigate = useNavigate();
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.80;
        }
    }, []);

    return (
        <div className="relative bg-deep-blue min-h-screen flex items-center justify-center overflow-hidden pt-20">

            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-1000"></div>
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src={`${import.meta.env.BASE_URL}assets/sea_video.mp4`} type="video/mp4" />
                    {/* Fallback image if video fails to load or acts as placeholder */}
                    <img src={`${import.meta.env.BASE_URL}assets/hero_bg.jpg`} alt="Background" className="w-full h-full object-cover" />
                </video>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up drop-shadow-lg">
                        {t.hero.title}
                    </h1>
                    <p className="text-xl text-gray-100 mb-10 mx-auto leading-relaxed font-light animate-fade-in-up delay-100 drop-shadow-md">
                        {t.hero.description}
                    </p>
                    <div className="animate-fade-in-up delay-200 flex justify-center">
                        <button
                            onClick={() => navigate('/services')}
                            className="bg-white text-deep-blue font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all transform hover:-translate-y-1 flex items-center"
                        >
                            {t.hero.cta}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
