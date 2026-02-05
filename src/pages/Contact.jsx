import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';

const Contact = ({ t }) => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Create a file named .env.local in the root of your project and add these keys:
        // VITE_EMAILJS_SERVICE_ID=your_service_id
        // VITE_EMAILJS_TEMPLATE_ID=your_template_id
        // VITE_EMAILJS_PUBLIC_KEY=your_public_key

        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_id_placeholder';
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_id_placeholder';
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_placeholder';

        if (serviceID === 'service_id_placeholder') {
            alert('EmailJS is not configured. Please set up your .env.local file.');
            setLoading(false);
            return;
        }

        emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
                setLoading(false);
            }, (error) => {
                console.error('EmailJS Error:', error);
                alert(`Failed to send message: ${error.text || 'Unknown Error'}. \n\nCheck your console for more details.`);
                setLoading(false);
            });
    };

    // Address for Google Maps Embed
    const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.597380766323!2d-9.1666!3d38.7495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331070773d2d%3A0x6e36d40776b13e0!2sR.%20Hermano%20Neves%2018%2C%201600-477%20Lisboa!5e0!3m2!1sen!2spt!4v1707070000000!5m2!1sen!2spt";


    return (
        <section className="pt-28 pb-20 bg-gray-50">
            <SEO
                title={t.contact.title}
                description={t.contact.title}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-bold text-deep-blue mb-4">{t.contact.title}</h1>
                    <div className="w-24 h-1.5 bg-gold mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-deep-blue/5 rounded-full -mr-16 -mt-16"></div>

                        <h3 className="text-2xl font-bold text-deep-blue mb-8 relative z-10">{t.contact.send}</h3>

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t.contact.name}</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-deep-blue focus:border-transparent outline-none transition-all duration-300"
                                    placeholder={t.contact.name}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t.contact.email}</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-deep-blue focus:border-transparent outline-none transition-all duration-300"
                                    placeholder="email@company.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t.contact.message}</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-deep-blue focus:border-transparent outline-none transition-all resize-none duration-300"
                                    placeholder={t.contact.message}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full bg-deep-blue text-white font-bold py-4 px-8 rounded-xl hover:bg-blue-900 transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-900/20 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {loading ? 'Sending...' : t.contact.send}
                            </button>
                        </form>
                    </div>


                    {/* Contact Info & Map */}
                    <div className="flex flex-col space-y-8">

                        {/* Info Card */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="space-y-8">
                                {/* Phone */}
                                <div className="flex items-start group">
                                    <div className="shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-deep-blue group-hover:bg-deep-blue group-hover:text-white transition-colors duration-300">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div className="ml-5">
                                        <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{t.contact.phoneLabel}</p>
                                        <p className="mt-1 text-lg text-deep-blue font-medium">+351 966 402 900</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start group">
                                    <div className="shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-deep-blue group-hover:bg-deep-blue group-hover:text-white transition-colors duration-300">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="ml-5">
                                        <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{t.contact.emailLabel}</p>
                                        <p className="mt-1 text-lg text-deep-blue font-medium">ines.viegas@marafado.pt</p>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start group">
                                    <div className="shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-deep-blue group-hover:bg-deep-blue group-hover:text-white transition-colors duration-300">
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    </div>
                                    <div className="ml-5">
                                        <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{t.contact.addressLabel}</p>
                                        <p className="mt-1 text-lg text-deep-blue font-medium leading-snug">
                                            {t.contact.address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Card */}
                        <div className="bg-white p-2 rounded-3xl shadow-sm border border-gray-100 h-64 overflow-hidden">
                            <iframe
                                src={mapSrc}
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: '1rem' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps Location"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
