import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Billboard, Html } from '@react-three/drei';
import * as THREE from 'three';

import JupiterModel from '../components/jupiter_model';
import ProjectText from '../components/project_text'

import Kotinos from '../assets/kotinos.png'
import Vaultmaster from '../assets/vaultmaster.png'
import Tabout from '../assets/tabout.png'
import Echonotes from '../assets/echonotes.png';
import Mplayer from '../assets/mplayer.png';
import Mocktern from '../assets/mocktern.png'
import MedSense1 from '../assets/medsense1.png'
import MedSense2 from '../assets/medsense2.png'

const projects = [
    {
        title: "Vaultmaster",
        description: "Full-stack password manager with AES encryption and Password generator.",
        tech: ["React", "Node.js", "MongoDB", "Supabase", "Tailwind CSS"],
        link: "https://vaultmaster.vercel.app",
        code: "https://github.com/theblag/vaultmaster",
        image: Vaultmaster,
        position: [-10, 0, -20]
    },
    {
        title: "Kotinos",
        description: "A web app for athletes to elevate their career by showcasing achievements, connecting with people, AI assisted health care and crownfunding.",
        tech: ["React", "Node.js", "Firebase", "Tailwind CSS"],
        link: "https://kotinos.vercel.app/",
        code: "https://github.com/theblag/kotinos",
        image: Kotinos,
        position: [14, 0, -60]
    },
    {
        title: "Mocktern",
        description: "A fake internship and course detector, which combines advanced AI analysis with real community consensus to protect you from scams and highlight real opportunities instantly.",
        tech: ["React", "Firebase", "Tailwind CSS", "Gemini API",],
        link: "https://mocktern.vercel.app",
        code: "https://github.com/theblag/mocktern",
        image: Mocktern,
        position: [-14, 0, -40]
    },
    {
        title: "TabOut - Chrome Extension",
        description: "A Chrome extension that helps you stay focused by blocking distracting websites temporarily, using timers.",
        tech: ["React", "JavaScript", "Tailwind CSS"],
        link: "https://github.com/theblag/tabout-website-blocker",
        code: "https://github.com/theblag/tabout-website-blocker",
        image: Tabout,
        position: [12, 0, -20]
    },

    {
        title: "Echo Notes",
        description: "A todo list web app, that uses the local storage, and has a simple and clean UI. One of my first projects.",
        tech: ["React", "Tailwind CSS"],
        link: "https://echonotes-seven.vercel.app/",
        code: "https://github.com/theblag/todo-list",
        image: Echonotes,
        position: [-14, 0, -62]
    },
    {
        title: "MedSense",
        description: "An AI powered web app, that uses OCR and Langchain to detect medical mis-info.",
        tech: ["ReactJS", "Python", "Gemini API"],
        link: "https://github.com/theblag/SDG-MedSense",
        code: "https://sdg-med-sense.vercel.app/",
        image: MedSense2,
        position: [14, 0, -40]
    }
];

function CameraController() {
    const { camera } = useThree();
    const keys = useRef({});
    const speed = 0.2;

    useEffect(() => {
        const handleKeyDown = (e) => {
            keys.current[e.key.toLowerCase()] = true;
        };
        const handleKeyUp = (e) => {
            keys.current[e.key.toLowerCase()] = false;
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    useFrame(() => {
        if (keys.current['w']) {
            camera.position.z -= speed;
        }
        if (keys.current['s']) {
            camera.position.z += speed;
        }
        if (keys.current['a']) {
            camera.position.x -= speed;
        }
        if (keys.current['d']) {
            camera.position.x += speed;
        }
        if (keys.current['q']) {
            camera.position.y += speed;
        }
        if (keys.current['e']) {
            camera.position.y -= speed;
        }
    });

    return null;
}

function ProjectBillboard({ title, description, tech, link, code, image, position }) {
    const billboardRef = useRef();
    const [animationOffsets] = useState({
        y: Math.random() * Math.PI * 2,
        x: Math.random() * Math.PI * 2,
        rotation: Math.random() * Math.PI * 2,
        scale: Math.random() * Math.PI * 2
    });

    useFrame((state) => {
        if (billboardRef.current) {
            const time = state.clock.getElapsedTime();
            
            billboardRef.current.position.y = position[1] + Math.sin(time * 0.6 + animationOffsets.y) * 0.8;//y
            
            billboardRef.current.position.x = position[0] + Math.sin(time * 0.4 + animationOffsets.x) * 0.3;//x
            
            
            
            const scale = 1 + Math.sin(time * 0.5 + animationOffsets.scale) * 0.05;//breathing effect
            billboardRef.current.scale.setScalar(scale);
        }
    });
    return (
        <Billboard ref={billboardRef} position={position} follow>
            <Html
                center
                position={[-2, 0, 0]}
                distanceFactor={8}
                transform
                sprite
                occlude="blending"
                zIndexRange={[100, 0]}
            >
                <div
                    className="group w-[50%] mx-auto relative overflow-hidden rounded-xl bg-gray-800/90 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 hover:scale-105"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-700/10 via-transparent to-gray-800/20"></div>

                    <div className="relative p-6">
                        <img className='rounded-lg relative w-200 z-20 border border-white/10 mb-2' src={image} alt={title} />
                        <div className="mb-4">
                            <h3 className="text-xl inter font-semibold text-white mb-2 group-hover:text-gray-200 transition-colors">
                                {title}
                            </h3>
                            <p className="text-gray-300 inter text-sm leading-relaxed">
                                {description}
                            </p>
                        </div>

                        <div className="mb-6">
                            <div className="flex flex-wrap gap-2">
                                {tech.map((techItem, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-gray-700/30 text-gray-300 border border-gray-600/40"
                                    >
                                        {techItem}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
                                className="flex-1 inter px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-gray-500/25"
                            >
                                View Live
                            </button>
                            <a href={code} target='_blank' rel="noopener noreferrer">
                                <button className="px-4 inter py-2 border border-gray-500/50 hover:border-gray-400 text-gray-300 hover:text-gray-200 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-gray-600/20">
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Decorative orbital rings */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 border border-gray-600/20 rounded-full"></div>
                    <div className="absolute -top-2 -right-2 w-12 h-12 border border-gray-500/30 rounded-full"></div>
                </div>
            </Html>
        </Billboard>
    );
}

function Stars() {
    const starsRef = useRef();
    const [starData] = useState(() => {
        const stars = [];

        const starTypes = [
            { count: 200, sizeRange: [0.3, 0.8], opacityRange: [0.3, 0.6] },
            { count: 100, sizeRange: [0.8, 1.5], opacityRange: [0.5, 0.8] },
            { count: 50, sizeRange: [1.2, 2.0], opacityRange: [0.7, 1.0] },
            { count: 20, sizeRange: [1.8, 3.0], opacityRange: [0.8, 1.0] }
        ];

        starTypes.forEach((type, typeIndex) => {
            for (let i = 0; i < type.count; i++) {
                stars.push({
                    position: [
                        (Math.random() - 0.5) * 400,
                        (Math.random() - 0.5) * 200,
                        (Math.random() - 0.5) * 300
                    ],
                    size: Math.random() * (type.sizeRange[1] - type.sizeRange[0]) + type.sizeRange[0],
                    opacity: Math.random() * (type.opacityRange[1] - type.opacityRange[0]) + type.opacityRange[0],
                    twinkleSpeed: 0.5 + Math.random() * 2,
                    twinkleOffset: Math.random() * Math.PI * 2,
                    layer: typeIndex
                });
            }
        });

        return stars;
    });

    useFrame((state) => {
        if (starsRef.current) {
            starsRef.current.rotation.x += 0.0001;
            starsRef.current.rotation.y += 0.0001;

            const time = state.clock.getElapsedTime();
            const colors = starsRef.current.geometry.attributes.color.array;
            const sizes = starsRef.current.geometry.attributes.size.array;

            starData.forEach((star, i) => {
                const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.3 + 0.7;
                const finalOpacity = star.opacity * twinkle;

                colors[i * 3] = finalOpacity;
                colors[i * 3 + 1] = finalOpacity;
                colors[i * 3 + 2] = finalOpacity;

                sizes[i] = star.size * (0.8 + twinkle * 0.4);
            });

            starsRef.current.geometry.attributes.color.needsUpdate = true;
            starsRef.current.geometry.attributes.size.needsUpdate = true;
        }
    });

    const positions = new Float32Array(starData.length * 3);
    const colors = new Float32Array(starData.length * 3);
    const sizes = new Float32Array(starData.length);

    starData.forEach((star, i) => {
        positions[i * 3] = star.position[0];
        positions[i * 3 + 1] = star.position[1];
        positions[i * 3 + 2] = star.position[2];

        colors[i * 3] = star.opacity;
        colors[i * 3 + 1] = star.opacity;
        colors[i * 3 + 2] = star.opacity;

        sizes[i] = star.size;
    });

    return (
        <points ref={starsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={starData.length}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={starData.length}
                    array={colors}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-size"
                    count={starData.length}
                    array={sizes}
                    itemSize={1}
                />
            </bufferGeometry>
            <pointsMaterial
                color="white"
                sizeAttenuation={false}
                transparent
                vertexColors
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

// Add this new component after ProjectBillboard
function ControlsBillboard({ position }) {
    const controlsRef = useRef();
    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        controlsRef.current.position.y = Math.sin(time * 0.3) * 0.1;
    })

    return (
        <Billboard ref={controlsRef} position={position} follow>
            <Html
                center
                position={[-0.15, 0, 0]}
                distanceFactor={8}
                transform
                sprite
                occlude="blending"
                zIndexRange={[100, 0]}
            >
                <div className=" text-white flex items-center justify-center flex-col w-24 h-20 bg-white/10 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100/30 p-1">
                    <p className="text-[6px] inter mb-1 text-center">Welcome to 3D Mode. Navigate using your keyboard!</p>
                    <p className="text-[6px] mb-1">Controls:</p>
                    <p className="text-[5px] ">W A S D - Move around</p>
                    <p className="text-[5px] ">Q / E - Move up / down</p>
                </div>
            </Html>
        </Billboard>
    );
}

// Update your export to include the new component
export { CameraController, ProjectBillboard, Stars, ControlsBillboard };

// Main component to use inside your existing Canvas
export default function ProjectsScene() {
    
    return (
        <>
            {/* Enhanced lighting */}
            <ambientLight intensity={1} />

            {/* Stars */}
            <Stars />

            {/* Camera controller */}
            <CameraController />

            <ProjectText scale={1.5} position={[-0.2, 1, 2]} />

            {/* Controls billboard positioned below the text */}
            <ControlsBillboard position={[0, 0, 0]} />

            {/* Project billboards */}
            {projects.map((proj, i) => (
                <ProjectBillboard
                    key={i}
                    title={proj.title}
                    description={proj.description}
                    tech={proj.tech}
                    link={proj.link}
                    code={proj.code}
                    image={proj.image}
                    position={proj.position}
                />
            ))}

            <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
            <pointLight position={[-10, -10, -10]} intensity={0.8} color="#4fc3f7" />
            <pointLight position={[0, 15, 5]} intensity={1.0} color="#ffffff" />
            <pointLight position={[0, 2, 3]} intensity={12.0} color="#ffffff" />
        </>
    );
}