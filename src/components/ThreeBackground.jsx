import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
    const canvasRef = useRef();

    useEffect(() => {
        try {
            const canvas = canvasRef.current;
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(
                75,
                window.innerWidth / window.innerHeight,
                0.1,
                1000
            );
            const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);

            // Geometría de ejemplo (Torus Knot) - reemplaza si quieres otro
            const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
            const material = new THREE.MeshBasicMaterial({ color: 0x0071b3, wireframe: true });
            const knot = new THREE.Mesh(geometry, material);
            scene.add(knot);

            camera.position.z = 40;

            function animate() {
                requestAnimationFrame(animate);
                knot.rotation.x += 0.005;
                knot.rotation.y += 0.01;
                renderer.render(scene, camera);
            }
            animate();

            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        } catch (err) {
            console.warn('WebGL no soportado');
            const canvas = canvasRef.current;
            if (canvas) canvas.style.display = 'none';
            document.body.style.background = 'linear-gradient(135deg,#111,#333)';
        }
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="three-bg"
            className="fixed top-0 left-0 w-full h-full -z-10"
        />
    );
}
