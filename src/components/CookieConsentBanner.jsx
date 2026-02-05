import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookieConsentBanner = ({ lang }) => {
    // Translations for the banner
    const content = {
        pt: {
            text: "Este site utiliza cookies para garantir que obtém a melhor experiência no nosso website.",
            button: "Aceitar",
            decline: "Recusar"
        },
        en: {
            text: "This website uses cookies to ensure you get the best experience on our website.",
            button: "Accept",
            decline: "Decline"
        },
        fr: {
            text: "Ce site web utilise des cookies pour vous garantir la meilleure expérience sur notre site web.",
            button: "Accepter",
            decline: "Refuser"
        }
    };

    const t = content[lang] || content.pt;

    return (
        <CookieConsent
            location="bottom"
            buttonText={t.button}
            declineButtonText={t.decline}
            enableDeclineButton
            cookieName="marafado_consent"
            style={{ background: "#2B373B", alignItems: "center" }}
            buttonStyle={{ color: "#ffffff", fontSize: "14px", fontWeight: "bold", background: "#DAA520", borderRadius: "5px", padding: "10px 20px" }}
            declineButtonStyle={{ color: "#ffffff", fontSize: "12px", background: "transparent", border: "1px solid #ffffff", borderRadius: "5px", padding: "8px 15px" }}
            expires={150}
        >
            <span className="text-sm">
                {t.text}
            </span>
        </CookieConsent>
    );
};

export default CookieConsentBanner;
