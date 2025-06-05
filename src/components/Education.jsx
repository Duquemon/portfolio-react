import { useEffect } from 'react';
import AOS from 'aos';

export default function Education() {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    return (
        <section id="education" className="container mx-auto py-16 px-6" data-aos="fade-up">
            <h3 className="text-3xl font-bold mb-6 gradient-text text-center">Educación y Certificaciones</h3>
            <ul className="max-w-3xl mx-auto list-disc list-inside text-gray-300 text-lg">
                <li>Máster en Seguridad de la Información y Ciberseguridad, USACH (2020)</li>
                <li>Ingeniería en Computación e Informática, Universidad Mayor (2012)</li>
                <li>Certificaciones: DevOps Essentials (2021), Scrum Master (2018), Inglés B1 (2013)</li>
            </ul>
        </section>
    );
}
