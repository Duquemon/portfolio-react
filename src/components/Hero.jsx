import { useEffect, useState } from 'react';
import AOS from 'aos';
import jorgeImg from '../assets/jorge.jpg';
import { useTranslation } from 'react-i18next';

export default function Hero() {
    const phrases = [
        'Senior Software Engineer',
        'Experto en Java',
        'Arquitecto de Microservicios'
    ];
    const { t } = useTranslation();

    const [text, setText] = useState('');
    const [pi, setPi] = useState(0);
    const [ci, setCi] = useState(0);

    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    useEffect(() => {
        let timeout;
        const current = phrases[pi];

        if (ci < current.length) {
            timeout = setTimeout(() => {
                setText((t) => t + current.charAt(ci));
                setCi((c) => c + 1);
            }, 100);
        } else {
            timeout = setTimeout(() => {
                setCi(0);
                setText('');
                setPi((p) => (p + 1) % phrases.length);
            }, 2000);
        }

        return () => clearTimeout(timeout);
    }, [ci, pi, phrases]);

    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col justify-center items-center text-center px-6">
            <img
                src={jorgeImg}
                alt="Foto Jorge"
                className="rounded-full shadow-lg w-48 h-48 mb-6 object-cover"
                data-aos="zoom-in"
            />

            <h2 className="text-4xl md:text-6xl font-bold mb-2 gradient-text" data-aos="fade-down">
                {t('greeting')}
            </h2>
            <p className="text-lg md:text-xl mb-6 typing" id="typewriter" data-aos="fade-up">
                {text}
            </p>
            <div className="space-x-4" data-aos="zoom-in">
                <a
                    href="#experience"
                    className="px-6 py-3 border-2 border-gradient-to-r from-green-400 to-purple-600 font-semibold rounded-full hover:scale-105 transition"
                >
                    Ver Experiencia
                </a>
                <a
                    href="#contact"
                    className="px-6 py-3 bg-gradient-to-r from-green-400 to-purple-600 font-semibold rounded-full hover:scale-105 transition"
                >
                    Contáctame
                </a>
            </div>
        </section>
    );
}
