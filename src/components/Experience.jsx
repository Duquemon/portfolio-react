import { useEffect } from 'react';
import AOS from 'aos';

export default function Experience() {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    return (
        <section id="experience" className="bg-gray-900 bg-opacity-50 py-16 px-6" data-aos="fade-up">
            <h3 className="text-3xl font-bold mb-8 gradient-text text-center">Experiencia Profesional</h3>
            <div className="space-y-12 max-w-4xl mx-auto">
                {/* Amaris */}
                <div className="flex flex-col lg:flex-row items-center lg:space-x-8" data-aos="fade-right">
                    <img
                        src="https://via.placeholder.com/600x300"
                        alt="Amaris"
                        className="rounded-xl shadow-lg mb-6 lg:mb-0 lg:w-1/3"
                    />
                    <div className="lg:w-2/3">
                        <h4 className="text-2xl font-semibold mb-2">
                            Software Engineer - (Sep 2023 – Presente)
                        </h4>
                        <ul className="list-disc list-inside text-gray-300">
                            <li>Arquitectura de microservicios con Spring Boot, Java 21 y arquitectura hexagonal.</li>
                            <li>API REST, patrones Facade, Adapter, Observador.</li>
                            <li>CI/CD con Azure DevOps, Docker y Kubernetes.</li>
                            <li>TDD con JUnit, Mockito y Karate.</li>
                            <li>Mensajería con Kafka y DDD.</li>
                        </ul>
                    </div>
                </div>

                {/* Cibernos */}
                <div className="flex flex-col lg:flex-row-reverse items-center lg:space-x-8" data-aos="fade-left">
                    <img
                        src="https://via.placeholder.com/600x300"
                        alt="Cibernos"
                        className="rounded-xl shadow-lg mb-6 lg:mb-0 lg:w-1/3"
                    />
                    <div className="lg:w-2/3">
                        <h4 className="text-2xl font-semibold mb-2">
                            FullStack Developer - (May 2023 – Ago 2023)
                        </h4>
                        <ul className="list-disc list-inside text-gray-300">
                            <li>Java FX, JDK 11 para app escritorio.</li>
                            <li>Microservicios Spring Boot, Java 11.</li>
                            <li>Frontend con React, Hooks y Redux; pruebas con Jest.</li>
                            <li>Scrum y Kanban.</li>
                        </ul>
                    </div>
                </div>

                {/* KDU */}
                <div className="flex flex-col lg:flex-row items-center lg:space-x-8" data-aos="fade-right">
                    <img
                        src="https://via.placeholder.com/600x300"
                        alt="KDU"
                        className="rounded-xl shadow-lg mb-6 lg:mb-0 lg:w-1/3"
                    />
                    <div className="lg:w-2/3">
                        <h4 className="text-2xl font-semibold mb-2">
                            DevOps - (Sep 2022 – Jun 2024)
                        </h4>
                        <ul className="list-disc list-inside text-gray-300">
                            <li>Desarrollo de apps de pago Webpay y OnePay en Spring, Java.</li>
                            <li>APIs REST/SOAP, Jenkins, SonarQube, RabbitMQ.</li>
                            <li>Frontend con Angular y TypeScript.</li>
                        </ul>
                    </div>
                </div>

                {/* DSAC */}
                <div className="flex flex-col lg:flex-row-reverse items-center lg:space-x-8" data-aos="fade-left">
                    <img
                        src="https://via.placeholder.com/600x300"
                        alt="DSAC"
                        className="rounded-xl shadow-lg mb-6 lg:mb-0 lg:w-1/3"
                    />
                    
                    <div className="lg:w-2/3">
                        <h4 className="text-2xl font-semibold mb-2">
                            FullStack Developer - (Nov 2019 – Ago 2022)
                        </h4>
                        <ul className="list-disc list-inside text-gray-300">
                            <li>Sistemas para MINEDUC y Banco Security con Spring Boot, Angular, AWS.</li>
                            <li>TDD, Docker, Kafka, PostgreSQL.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
