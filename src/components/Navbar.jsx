import {useEffect, useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        AOS.init({duration: 1200, once: true});
    }, []);

    const handleMenuToggle = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header className="fixed w-full backdrop-blur-lg bg-black/50 z-50"
            data-aos="fade-down">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <h1 className="text-2xl font-bold gradient-text">
                    {t('name')}
                </h1>
                <nav>
                    <ul className="hidden md:flex space-x-8 text-lg">
                        <li>
                            <a href="#hero" className="nav-link">
                                {t('start')}
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="nav-link">
                                {t('titleAboutMe')}
                            </a>
                        </li>
                        <li>
                            <a href="#experience" className="nav-link">
                                {t('titleExperience')}
                            </a>
                        </li>
                        <li>
                            <a href="#education" className="nav-link">
                                {t('education')}
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="nav-link">
                                {t('skills')}
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="nav-link">
                                {t('contact')}
                            </a>
                        </li>
                    </ul>

                    <button id="menu-btn"
                        onClick={handleMenuToggle}
                        className="md:hidden text-2xl focus:outline-none" >
                        <i className="fas fa-bars"></i>
                    </button>
                </nav>
            </div>

            <div id="mobile-menu" className={`bg-black/70 backdrop-blur-lg md:hidden ${ isMenuOpen ? 'block' : 'hidden' }`} >
                <ul className="flex flex-col p-6 space-y-4 text-lg">
                    <li>
                        <a href="#hero"
                            className="nav-link"
                            onClick={() => setIsMenuOpen(false)} >
                            {t('start')}
                        </a>
                    </li>
                    <li>
                        <a href="#about"
                            className="nav-link"
                            onClick={() => setIsMenuOpen(false)} >
                            {t('titleAboutMe')}
                        </a>
                    </li>
                    <li>
                        <a href="#experience"
                            className="nav-link"
                            onClick={() => setIsMenuOpen(false)} >
                            {t('titleExperience')}
                        </a>
                    </li>
                    <li>
                        <a href="#education"
                            className="nav-link"
                            onClick={() => setIsMenuOpen(false)} >
                            {t('education')}
                        </a>
                    </li>
                    <li>
                        <a href="#skills"
                            className="nav-link"
                            onClick={() => setIsMenuOpen(false)} >
                            {t('skills')}
                        </a>
                    </li>
                    <li>
                        <a href="#contact"
                            className="nav-link"
                            onClick={() => setIsMenuOpen(false)} >
                            {t('contact')}
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
