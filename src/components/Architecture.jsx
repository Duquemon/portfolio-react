import { useEffect } from 'react';
import AOS from 'aos';

export default function Architecture() {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    return (
        <section id="architecture" className="py-20 px-6 relative">
            <h3 className="text-3xl font-bold mb-12 gradient-text text-center" data-aos="fade-up">
                Arquitectura de Microservicios
            </h3>
            <div className="container mx-auto flex flex-col items-center space-y-12">
                {/* Node 1 */}
                <div className="diagram-node" data-aos="fade-up" data-aos-delay="100">
                    Cliente Web / Móvil
                </div>
                <div className="diagram-line h-12" data-aos="fade-up" data-aos-delay="200"></div>

                {/* Node 2 */}
                <div className="diagram-node" data-aos="fade-up" data-aos-delay="300">
                    API Gateway
                </div>
                <div className="diagram-line h-12" data-aos="fade-up" data-aos-delay="400"></div>

                {/* Node 3 Row */}
                <div className="flex flex-col lg:flex-row lg:space-x-8 items-center">
                    <div className="diagram-node mb-6 lg:mb-0" data-aos="fade-up" data-aos-delay="500">
                        Auth Service
                    </div>
                    <div className="w-8 h-1 bg-[#00ffa3] mb-6 lg:mb-0" data-aos="fade-up" data-aos-delay="600"></div>
                    <div className="diagram-node mb-6 lg:mb-0" data-aos="fade-up" data-aos-delay="700">
                        Order Service
                    </div>
                    <div className="w-8 h-1 bg-[#00ffa3] mb-6 lg:mb-0" data-aos="fade-up" data-aos-delay="800"></div>
                    <div className="diagram-node" data-aos="fade-up" data-aos-delay="900">
                        Payment Service
                    </div>
                </div>

                <div className="diagram-line h-12" data-aos="fade-up" data-aos-delay="1000"></div>

                {/* Node 4 */}
                <div className="diagram-node" data-aos="fade-up" data-aos-delay="1100">
                    Base de Datos Distribuida
                </div>
            </div>
        </section>
    );
}
