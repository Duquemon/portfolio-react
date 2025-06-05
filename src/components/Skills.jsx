import { useEffect } from 'react';
import AOS from 'aos';

export default function Skills() {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    return (
        <section id="skills" className="bg-gray-900 bg-opacity-50 py-16 px-6" data-aos="fade-up">
            <h3 className="text-3xl font-bold mb-6 gradient-text text-center">Skills Adicionales</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto text-gray-300 text-lg">
                <div><i className="fas fa-code text-xl mr-2"></i>Spring Boot, Hibernate, API REST/SOAP</div>
                <div><i className="fas fa-cloud text-xl mr-2"></i>AWS, Azure, Docker, Kubernetes</div>
                <div><i className="fas fa-database text-xl mr-2"></i>MySQL, PostgreSQL, MongoDB, Cassandra</div>
                <div><i className="fab fa-js text-xl mr-2"></i>Angular, React, TypeScript, JavaScript</div>
                <div><i className="fas fa-tools text-xl mr-2"></i>CI/CD (Jenkins, Azure DevOps), SonarQube</div>
                <div><i className="fas fa-shield-alt text-xl mr-2"></i>Seguridad, DDD, TDD, SOLID</div>
            </div>
        </section>
    );
}
