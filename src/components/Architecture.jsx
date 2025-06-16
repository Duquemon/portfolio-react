import { useEffect } from 'react';
import AOS from 'aos';

export default function Architecture() {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    return (
        <section id="architecture" className="py-24 px-6 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
            <h3 className="text-4xl font-extrabold text-center mb-16 gradient-text" data-aos="zoom-in">
                Arquitectura de Microservicios Moderna
            </h3>

            <div className="container mx-auto flex flex-col items-center space-y-12">
                <div className="relative z-10 text-center" data-aos="fade-up">
                    <div className="rounded-xl border border-green-400 px-6 py-4 bg-black bg-opacity-40 backdrop-blur-sm shadow-xl">
                        <span className="text-lg font-semibold tracking-wide">🌐 Cliente Web / Móvil</span>
                    </div>
                    <div className="h-8 w-1 bg-green-400 mx-auto mt-2 animate-pulse"></div>
                </div>

                <div className="relative z-10 text-center" data-aos="fade-up" data-aos-delay="100">
                    <div className="rounded-xl border border-purple-500 px-6 py-4 bg-black bg-opacity-40 backdrop-blur-sm shadow-xl">
                        <span className="text-lg font-semibold tracking-wide">🛡️ API Gateway</span>
                    </div>
                    <div className="h-8 w-1 bg-purple-500 mx-auto mt-2 animate-pulse"></div>
                </div>

                <div className="flex flex-wrap justify-center gap-6" data-aos="fade-up" data-aos-delay="200">
                    {[
                        { label: '🔐 Auth Service', color: 'border-yellow-400' },
                        { label: '📦 Order Service', color: 'border-pink-400' },
                        { label: '💳 Payment Service', color: 'border-blue-400' },
                        { label: '📊 Analytics Service', color: 'border-cyan-400' }
                    ].map((service, i) => (
                        <div
                            key={i}
                            className={`rounded-xl ${service.color} border px-6 py-4 bg-black bg-opacity-30 shadow-lg hover:scale-105 transition transform duration-300`}
                        >
                            <span className="text-lg font-medium">{service.label}</span>
                        </div>
                    ))}
                </div>

                <div className="relative z-10 text-center mt-10" data-aos="fade-up" data-aos-delay="300">
                    <div className="h-8 w-1 bg-cyan-400 mx-auto mb-2 animate-pulse"></div>
                    <div className="rounded-xl border border-cyan-400 px-6 py-4 bg-black bg-opacity-40 backdrop-blur-sm shadow-xl">
                        <span className="text-lg font-semibold tracking-wide">🧬 Base de Datos Distribuida</span>
                    </div>
                </div>
            </div>

            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-green-400 via-transparent to-transparent opacity-30 pointer-events-none animate-pulse"></div>
        </section>
    );
}
