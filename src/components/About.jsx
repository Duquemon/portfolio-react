import { useEffect } from 'react';
import AOS from 'aos';
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    return (
        <section id="about" className="container mx-auto py-16 px-6" data-aos="fade-right">
            <h3 className="text-3xl font-bold mb-4 gradient-text text-center">{t('titleAboutMe')}</h3>
            <div className="max-w-3xl mx-auto text-gray-300 leading-relaxed text-lg">
                <p>
                    {t('aboutMe')}
                </p>
                <p className="mt-4">
                    {t('aboutMeDegrees')}
                </p>
            </div>
        </section>
    );
}
