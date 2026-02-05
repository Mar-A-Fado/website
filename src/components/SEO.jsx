import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, lang = 'pt' }) => {
    const siteTitle = "Mar A Fado - Sustentabilidade";

    return (
        <Helmet>
            <html lang={lang} />
            <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
            <meta name="description" content={description || "Mar A Fado - Consultoria, Auditoria e Formação em Sustentabilidade."} />
            <meta name="keywords" content={keywords || "sustentabilidade, consultoria, ambiente, portugal, mar a fado"} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
            <meta property="og:description" content={description} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
            <meta property="twitter:description" content={description} />
        </Helmet>
    );
};

export default SEO;
