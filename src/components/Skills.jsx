import { useEffect } from 'react';
import AOS from 'aos';
import { useTranslation } from 'react-i18next';

export default function Skills() {
    const { t } = useTranslation();
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    return (
        <section id="skills" className="bg-gray-900 bg-opacity-50 py-16 px-6" data-aos="fade-up">
            <h3 className="text-3xl font-bold mb-6 gradient-text text-center">{t('titleSkills')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto text-gray-300 text-lg">
                <div><i className="fas fa-code text-xl mr-2"></i>{t('subSkills1')}</div>
                <div><i className="fas fa-cloud text-xl mr-2"></i>{t('subSkills2')}</div>
                <div><i className="fas fa-database text-xl mr-2"></i>{t('subSkills3')}</div>
                <div><i className="fab fa-js text-xl mr-2"></i>{t('subSkills4')}</div>
                <div><i className="fas fa-tools text-xl mr-2"></i>{t('subSkills5')}</div>
                <div><i className="fas fa-shield-alt text-xl mr-2"></i>{t('subSkills6')}</div>
            </div>
        </section>
    );
}
