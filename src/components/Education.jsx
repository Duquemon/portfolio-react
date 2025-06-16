import { useEffect } from 'react';
import AOS from 'aos';
import { useTranslation } from 'react-i18next';

export default function Education() {
    const { t } = useTranslation();
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    return (
        <section id="education" className="container mx-auto py-16 px-6" data-aos="fade-up">
            <h3 className="text-3xl font-bold mb-6 gradient-text text-center">{t('titleEducation')}</h3>
            <ul className="max-w-3xl mx-auto list-disc list-inside text-gray-300 text-lg">
                <li>{t('educationMaster')}</li>
                <li>{t('educationTituleDegree')}</li>
                <li>{t('educationCertification')}</li>
            </ul>
        </section>
    );
}
