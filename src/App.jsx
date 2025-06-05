import React from 'react';
import Navbar from './components/Navbar';
import ThreeBackground from './components/ThreeBackground';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Architecture from './components/Architecture';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
    return (
        <>
            <ThreeBackground />
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Education />
            <Skills />
            <Architecture />
            <Contact />
            <Footer />
        </>
    );
}
