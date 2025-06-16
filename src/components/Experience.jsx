import { useEffect } from 'react';
import AOS from 'aos';
import amarisSvg from '../assets/amaris.svg';
import kduLogo from '../assets/kduPng.png';
import cibernosLogo from '../assets/cibernosLogo.png';
import dsacLogo from '../assets/dsacLogo.png';
import { useTranslation } from 'react-i18next';

export default function Experience() {
    const { t } = useTranslation();
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    return (
        <section id="experience" className="bg-gray-900 bg-opacity-50 py-16 px-6" data-aos="fade-up">
            <h3 className="text-3xl font-bold mb-8 gradient-text text-center">{t('experience')}</h3>
            <div className="space-y-12 max-w-4xl mx-auto">
                {/* Amaris */}
                <div className="flex flex-col lg:flex-row items-center lg:space-x-8" data-aos="fade-right">
                    <img
                        src={amarisSvg}
                        alt="Amaris"
                        className="h-24 rounded-xl shadow-lg mb-6 lg:mb-0 lg:w-1/3"
                    />
                    <div className="lg:w-2/3">
                        <h4 className="text-2xl font-semibold mb-2">
                            {t('titleAmaris')}
                        </h4>
                        <ul className="list-disc list-inside text-gray-300">
                            <li>{t('subAmaris1')}</li>
                            <li>{t('subAmaris2')}</li>
                            <li>{t('subAmaris3')}</li>
                            <li>{t('subAmaris4')}</li>
                            <li>{t('subAmaris5')}</li>
                        </ul>
                    </div>
                </div>

                {/* Cibernos */}
                <div className="flex flex-col lg:flex-row-reverse items-center lg:space-x-8" data-aos="fade-left">
                    <img
                        src={cibernosLogo}
                        alt="Cibernos"
                        className="h-24 rounded-xl shadow-lg mb-6 lg:mb-0 lg:w-1/3"
                    />
                    <div className="lg:w-2/3">
                        <h4 className="text-2xl font-semibold mb-2">
                            {t('titleCibernos')}
                        </h4>
                        <ul className="list-disc list-inside text-gray-300">
                            <li>{t('subCibernos1')}</li>
                            <li>{t('subCibernos2')}</li>
                            <li>{t('subCibernos3')}</li>
                            <li>{t('subCibernos4')}</li>
                        </ul>
                    </div>
                </div>

                {/* KDU */}
                <div className="flex flex-col lg:flex-row items-center lg:space-x-8" data-aos="fade-right">
                    <img
                        src={kduLogo}
                        alt="KDU"
                        className="h-24 rounded-xl shadow-lg mb-6 lg:mb-0 lg:w-1/3"
                    />
                    <div className="lg:w-2/3">
                        <h4 className="text-2xl font-semibold mb-2">
                            {t('titleKDU')}
                        </h4>
                        <ul className="list-disc list-inside text-gray-300">
                            <li>{t('subKdu1')}</li>
                            <li>{t('subKdu2')}</li>
                            <li>{t('subKdu3')}</li>
                        </ul>
                    </div>
                </div>

                {/* DSAC */}
                <div className="flex flex-col lg:flex-row-reverse items-center lg:space-x-8" data-aos="fade-left">
                    <img
                        src={dsacLogo}
                        alt="DSAC"
                        className="h-24 rounded-xl shadow-lg mb-6 lg:mb-0 lg:w-1/3"
                    />
                    
                    <div className="lg:w-2/3">
                        <h4 className="text-2xl font-semibold mb-2">
                            {t('titleDSAC')}
                        </h4>
                        <ul className="list-disc list-inside text-gray-300">
                            <li>{t('subDsac1')}</li>
                            <li>{t('subDsac2')}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
