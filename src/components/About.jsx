import { useEffect } from 'react';
import AOS from 'aos';

export default function About() {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    return (
        <section id="about" className="container mx-auto py-16 px-6" data-aos="fade-right">
            <h3 className="text-3xl font-bold mb-4 gradient-text text-center">Sobre mí</h3>
            <div className="max-w-3xl mx-auto text-gray-300 leading-relaxed text-lg">
                <p>
                    Senior Software Engineer con más de 12 años de experiencia en Banca, Gobierno y Seguros. Enfocado
                    en código de calidad, patrones de diseño y buenas prácticas, he liderado proyectos desde cero,
                    mejorado aplicaciones existentes y creado nuevas funcionalidades.
                </p>
                <p className="mt-4">
                    Graduado de Ingeniería en Computación e Informática y Máster en Seguridad de la Información y
                    Ciberseguridad.
                </p>
            </div>
        </section>
    );
}
