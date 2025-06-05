import { useEffect } from 'react';
import AOS from 'aos';

export default function Contact() {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    return (
        <section id="contact" className="py-16 px-6 text-center bg-gradient-to-r from-gray-900 to-black" data-aos="fade-up">
            <h3 className="text-3xl font-bold mb-4 gradient-text">Contacto</h3>
            <p className="text-gray-300 mb-4">Madrid, España <br/>
                <i className="fa-solid fa-phone"></i> +34 637 451 438 <br/>
                <i className="fa-regular fa-envelope"></i> jorgef1987@gmail.com</p>
            <div className="space-x-4">
                <a
                    href="mailto:JorgeF1987@gmail.com"
                    className="px-6 py-3 bg-gradient-to-r from-green-400 to-purple-600 font-semibold rounded-full hover:scale-105 transition"
                >
                    Enviar Email
                </a>
                <a
                    href="https://www.linkedin.com/in/jorge-antonio-figueroa-aqueveque-46a73a50/"
                    target="_blank"
                    className="px-6 py-3 border-2 border-gradient-to-r from-green-400 to-purple-600 font-semibold rounded-full hover:scale-105 transition"
                >
                    LinkedIn
                </a>
            </div>
        </section>
    );
}
