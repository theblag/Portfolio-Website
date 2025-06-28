import React, { useState, useEffect, Suspense, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Add this line
import { MapPin } from 'lucide-react';
import '../App.css'
import Space from '../components/space';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import PlanetModel from '../components/earth_model';
import MarsModel from '../components/mars_model';
import JupiterModel from '../components/jupiter_model';
import NeptuneModel from '../components/neptune_model'
import StackIcon from 'tech-stack-icons';
import Profile from '../components/profile'
import ScrollDown from '../components/scroll_down';

import Kotinos from '../assets/kotinos.png'
import Vaultmaster from '../assets/vaultmaster.png'
import Tabout from '../assets/tabout.png'
import Echonotes from '../assets/echonotes.png';
import Mplayer from '../assets/mplayer.png';

const SpacePortfolio = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const projects = [
        {
            title: "Vaultmaster",
            description: "Full-stack password manager with AES encryption and Password generator.",
            tech: ["React", "Node.js", "MongoDB", "Supabase", "Tailwind CSS"],
            link: "https://vaultmaster.vercel.app",
            code: "https://github.com/theblag/vaultmaster",
            image: Vaultmaster
        },
        {
            title: "TabOut - Chrome Extension",
            description: "A Chrome extension that helps you stay focused by blocking distracting websites temporarily, using timers.",
            tech: ["React", "JavaScript", "Tailwind CSS"],
            link: "https://github.com/theblag/tabout-website-blocker",
            code: "https://github.com/theblag/tabout-website-blocker",
            image: Tabout
        },
        {
            title: "Kotinos",
            description: "A web app for athletes to elevate their career by showcasing achievements, connecting with people, AI assisted health care and crownfunding.",
            tech: ["React", "Node.js", "Firebase", "Tailwind CSS"],
            link: "https://kotinos.vercel.app/",
            code: "https://github.com/theblag/kotinos",
            image: Kotinos
        },
        {
            title: "Echo Notes",
            description: "A todo list web app, that uses the local storage, and has a simple and clean UI. One of my first projects.",
            tech: ["React", "Tailwind CSS"],
            link: "https://echonotes-seven.vercel.app/",
            code: "https://github.com/theblag/todo-list",
            image: Echonotes
        },
        {
            title: "Music Player",
            description: "A web app that allows you to play music from your local files, with a simple and clean UI.",
            tech: ["HTML", "CSS", "JavaScript"],
            link: "https://github.com/theblag/MusicPlayer",
            code: "https://github.com/theblag/MusicPlayer",
            image: Mplayer
        }
    ];

    const projectsPerSlide = 1;
    const totalSlides = Math.ceil(projects.length / projectsPerSlide);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };
    const ProjectCard = ({ project, index }) => (
        <div
            className="group w-[80%] mx-auto relative overflow-hidden rounded-xl bg-gradient-to-br from-yellow-100/10 via-orange-100/5 to-yellow-800/10 backdrop-blur-sm border border-yellow-200/20 hover:border-yellow-300/40 transition-all duration-300 hover:scale-105"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/5 via-transparent to-orange-700/10"></div>

            <div className="relative p-6">
                <img className='rounded-lg relative z-20 border border-white/10 mb-2' src={project.image} alt={project.image} />
                <div className="mb-4">
                    <h3 className="text-xl inter font-semibold text-yellow-100 mb-2 group-hover:text-yellow-50 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-300 inter text-sm leading-relaxed">
                        {project.description}
                    </p>
                </div>

                <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                            <span
                                key={techIndex}
                                className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-yellow-200/20 to-orange-200/20 text-yellow-100 border border-yellow-200/30"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={() => window.open(project.link, '_blank','noopener,noreferrer')}
                        className="flex-1 inter px-4 py-2 bg-gradient-to-r from-yellow-600 to-orange-500 hover:from-yellow-500 hover:to-orange-400 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-yellow-500/25"
                    >
                        View Live
                    </button>
                    <a href={project.code} target='_blank' rel="noopener noreferrer"><button className="px-4 inter py-2 border border-yellow-400/50 hover:border-yellow-300 text-yellow-100 hover:text-yellow-50 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-yellow-400/10">
                        Code
                    </button></a>
                </div>
            </div>

            {/* Jupiter-inspired orbital rings */}
            <div className="absolute -top-4 -right-4 w-16 h-16 border border-yellow-200/20 rounded-full"></div>
            <div className="absolute -top-2 -right-2 w-12 h-12 border border-orange-300/30 rounded-full"></div>
        </div>
    );
    const handleGetInTouch = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };



    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Existing scroll animation
        gsap.to(".scroll-down-text", {
            scrollTrigger: {
                trigger: ".scroll-down-text",
                start: "top 85%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            duration: 0.5
        });

        // Earth section animations
        gsap.fromTo(".about-greeting", {
            x: -100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: ".earth",
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo(".about-name", {
            x: -80,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1.2,
            delay: 0.3,
            scrollTrigger: {
                trigger: ".earth",
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo(".about-description", {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.6,
            scrollTrigger: {
                trigger: ".earth",
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo(".about-skills", {
            y: 30,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.9,
            scrollTrigger: {
                trigger: ".earth",
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo(".about-skills", {
            y: 30,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.9,
            scrollTrigger: {
                trigger: ".earth",
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

        // Mars section animations (Tech Stack)
        gsap.fromTo(".tech-title", {
            x: -100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: ".mars",
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo(".tech-subtitle", {
            x: -80,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
            delay: 0.3,
            scrollTrigger: {
                trigger: ".mars",
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo(".frontend-category", {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.6,
            scrollTrigger: {
                trigger: ".frontend-category",
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo(".backend-category", {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.9,
            scrollTrigger: {
                trigger: ".backend-category",
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo(".tools-category", {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 1.2,
            scrollTrigger: {
                trigger: ".tools-category",
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        });


        // Jupiter section animations (Projects)
        gsap.fromTo(".projects-title", {
            scale: 0.8,
            opacity: 0
        }, {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            scrollTrigger: {
                trigger: ".jupiter",
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo(".projects-subtitle", {
            y: 30,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.3,
            scrollTrigger: {
                trigger: ".jupiter",
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo(".projects-carousel", {
            x: 100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1.2,
            delay: 0.6,
            scrollTrigger: {
                trigger: ".jupiter",
                start: "top 60%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo(".project-nav-button-r", {
            scale: 0,
            opacity: 0
        }, {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            delay: 1.0,
            scrollTrigger: {
                trigger: ".jupiter",
                start: "top 60%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo(".project-nav-button-l", {
            scale: 0,
            opacity: 0
        }, {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            delay: 1.0,
            scrollTrigger: {
                trigger: ".jupiter",
                start: "top 60%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo(".project-indicators", {
            y: 20,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: 1.3,
            scrollTrigger: {
                trigger: ".jupiter",
                start: "top 60%",
                toggleActions: "play none none reverse"
            }
        });

        // Neptune section animations (Contact)
        gsap.fromTo(".neptune-title", {
            scale: 0.8,
            opacity: 0
        }, {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            scrollTrigger: {
                trigger: ".neptune",
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo(".neptune-subtitle", {
            y: 30,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.3,
            scrollTrigger: {
                trigger: ".neptune",
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo(".neptune-description", {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.6,
            scrollTrigger: {
                trigger: ".neptune",
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo(".neptune-social", {
            x: -50,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.9,
            scrollTrigger: {
                trigger: ".neptune",
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo(".neptune-status", {
            y: 20,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 1.2,
            scrollTrigger: {
                trigger: ".neptune",
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo(".neptune-cta", {
            scale: 0.9,
            opacity: 0
        }, {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            delay: 1.5,
            scrollTrigger: {
                trigger: ".neptune",
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

    }, [])


    const comp = useRef(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline()
            t1.from('#main-heading', {
                y: -20,
                opacity: 0,
                duration: 1.5,
            }).from('#sub-heading', {
                y: -20,
                opacity: 0,
                duration: 1.5,
            }).from(".scroll-down-text", {
                opacity: 0,
                duration: 0.5,
            })
        }, comp)

        return () => ctx.revert()
    }, [])
    return (
        <div ref={comp} className="relative ">

            <Space />


            <div className="head  h-[80vh] md:h-[70vh] ">
                <h1 id="main-heading" className="text-4xl md:text-6xl mt-64 leading-tight text-white inter text-center w-full">
                    From vision to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pr-0.5">reality</span>,<br /> one line at a time.
                </h1>
                <div className="text-center">
                    <p
                        id="sub-heading"
                        className="text-white/60 text-lg md:text-xl font-light inter mt-6"

                    >
                        Designer & Developer
                    </p>
                </div>
                <div onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })} className="scroll-down-text w-full fixed bottom-8">
                    <ScrollDown />
                </div>
                <Profile />

            </div>

            <div className="earth flex md:h-[100vh]">

                <div className='relative z-50 md:h-[60vh] bg- white mt-8 md:w-[55%] hidden md:block'>
                    <Canvas className='relative z-50' camera={{ position: [0, 2, 6], fov: 50 }}>
                        <ambientLight intensity={5.5} />
                        {/* <directionalLight position={[10, 10, 0]} intensity={1} color="#ffffff" /> */}
                        <PlanetModel scale={2.35} position={[0, 0, 0]} /> {/* <MarsModel scale={2.5} position={[0, 0, 0]} /> */}
                        <OrbitControls enableZoom={false} />

                        {/* <Environment preset="sunset" /> */}
                    </Canvas>
                </div>
                <div className='md:w-[45%]'>
                    <div className="max-w-md ml-4 p-5 rounded ">
                        <div className="space-y-6">
                            {/* Greeting */}
                            <div className="about-greeting space-y-2 inter">
                                <h3 className="text-lg text-gray-400 font-light">Hello, I'm</h3>
                                <h1 className="about-name text-5xl font-bold text-white inter tracking-tight">
                                    Aditya A
                                </h1>
                                <div className="w-full h-0.5 bg-gradient-to-r from-indigo-500 to-transparent"></div>
                            </div>

                            {/* Role */}
                            <div className='flex items-center gap-1 text-gray-500 font-light inter'>
                                <MapPin size={16} />
                                <h2 className="">
                                    Kerala, India
                                </h2>
                            </div>

                            {/* Description */}
                            <p className="about-description text-gray-400 inter leading-6 text-[16px]">
                                I am an 18 year old Computer Science student, studying at IIITK. With a strong foundation in both logic and design, I enjoy building web apps, experimenting with 3D visuals, and pushing the boundaries of what can be done.
                            </p>

                            {/* Skills/Specialties */}
                            <div className="about-skills space-y-3">
                                <h4 className="text-white font-medium">Specialized in:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Full-Stack Development', '3D Web Experiences', 'UI/UX Design'].map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 text-sm bg-gray-800/50 text-gray-300 rounded-full border border-gray-700/50 hover:border-blue-500/50 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="pt-4">
                                <button onClick={handleGetInTouch} className="cursor-pointer px-6 py-3 bg-transparent border border-blue-500/50 hover:border-indigo-700/50 text-white rounded-lg hover:bg-indigo-900/50 hover:text-white transition-all duration-300 font-medium">
                                    Get In Touch
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mars flex md:h-[125vh]">
                <div className='md:w-[45%]'>
                    <div className="md:w-[80%] md:ml-28 md:pr-16 p-5 m-4">
                        <div className="space-y-8">
                            {/* Section Title */}
                            <div className="space-y-3">
                                <h2 className="tech-title text-4xl font-bold inter text-white tracking-tight">
                                    Tech Stack
                                </h2>
                                <p className="tech-subtitle text-gray-400 text-lg inter">
                                    These are the tools and languages, that I'm familiar with
                                </p>
                                <div className="w-full h-0.5 bg-gradient-to-r from-red-500 via-amber-500"></div>
                            </div>

                            {/* Tech Categories */}
                            <div className="space-y-6">
                                {/* Frontend */}
                                <div className="frontend-category space-y-3">
                                    <h3 className="text-xl text-red-400 font-semibold inter">Languages & Frontend</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {[
                                            { name: 'C, C++', icon: 'c++' },         // Use 'cplusplus' or custom icon if needed
                                            { name: 'Python', icon: 'python' },
                                            { name: 'JavaScript', icon: 'js' },
                                            { name: 'Java', icon: 'java' },
                                            { name: 'React', icon: 'react' },
                                            { name: 'HTML', icon: 'html5' },
                                            { name: 'PHP', icon: 'php' },
                                            { name: 'CSS', icon: 'css3' },
                                            { name: 'Tailwind CSS', icon: 'tailwindcss' },
                                            { name: 'Next.js', icon: 'nextjs' }
                                        ].map((tech) => (
                                            <div

                                                key={tech.name}
                                                className="group px-5 hover:bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-full p-3 hover:border-red-400/60 transition-all duration-300"
                                            >

                                                <div className="flex items-center justify-center gap-2">
                                                    <StackIcon name={tech.icon.toLowerCase()} style={{ filter: tech.name == 'Next.js' ? 'invert(1)' : 'invert(0)' }} className=" w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" />
                                                    <span className="text-gray-200 font-medium group-hover:text-red-300 inter">
                                                        {tech.name}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Backend */}
                                <div className="backend-category space-y-3">
                                    <h3 className="text-xl text-orange-400 font-semibold inter">Backend</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {[
                                            { name: 'MongoDB', icon: 'mongodb' },
                                            { name: 'MySQL', icon: 'mysql' },
                                            { name: 'Supabase', icon: 'supabase' },
                                            { name: 'Node.js', icon: 'nodejs' },
                                            { name: 'Express.js', icon: 'expressjs' }
                                        ].map((tech) => (
                                            <div
                                                key={tech.name}
                                                className="group hover:bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border border-orange-500/30 rounded-full p-3 hover:border-orange-400/60  transition-all duration-300"
                                            >
                                                <div className="flex items-center justify-center gap-2">
                                                    <StackIcon name={tech.icon.toLowerCase()} style={{ filter: tech.name == 'Express.js' ? 'invert(1)' : 'invert(0)' }} className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" />

                                                    <span className="text-gray-200 inter font-medium group-hover:text-orange-300">
                                                        {tech.name}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>


                                {/* Tools & Others */}
                                <div className="tools-category space-y-3">
                                    <h3 className="text-xl text-yellow-400 font-semibold inter">Tools & Others</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {/* Blender */}
                                        <div className="group hover:bg-gradient-to-br from-yellow-900/20 to-red-900/20 border border-yellow-500/30 rounded-full p-3 hover:border-yellow-400/60 transition-all duration-300">
                                            <div className="flex items-center justify-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                                                    <path fill="#01579B" d="M34.932,22.478C33.769,21.56,32.206,21.001,30.5,21c-1.706,0.001-3.27,0.56-4.433,1.478 c-1.184,0.935-1.969,2.252-2.059,3.747c-0.091,1.536,0.57,2.965,1.732,4.023C26.925,31.324,28.613,32,30.501,32 c1.887,0,3.574-0.676,4.757-1.753c1.162-1.057,1.824-2.486,1.734-4.023C36.902,24.731,36.116,23.413,34.932,22.478z"></path><path fill="#FF6D00" d="M45.871,25.932c-0.259-1.823-0.891-3.535-1.861-5.095c-0.891-1.433-2.035-2.688-3.397-3.745l0.002-0.002 l-0.037-0.012c-0.028-0.025-0.05-0.054-0.079-0.078L26.249,6.438c-0.86-0.689-2.12-0.552-2.811,0.313 c-0.69,0.862-0.551,2.121,0.313,2.811L29.739,14H10.5C9.125,14,8,15.125,8,16.5S9.125,19,10.5,19h7.154L2.873,31.602 c-1.048,0.898-1.17,2.478-0.271,3.525C3.097,35.704,3.797,36,4.501,36c0.576,0,1.154-0.198,1.626-0.602l8.954-7.675 c-0.022,0.807-0.039,1.538-0.035,1.761C15.046,33,19,42,30.682,42c8.318,0,15.28-5,15.28-13.261 C46.034,27.805,46.003,26.867,45.871,25.932z M39.525,29.153c-0.401,1.087-1.05,2.104-1.935,2.992 c-1.81,1.82-4.343,2.85-7.088,2.854c-2.745,0.005-5.28-1.017-7.091-2.832c-0.885-0.885-1.535-1.901-1.937-2.986 c-0.392-1.065-0.545-2.195-0.444-3.335c0.098-1.116,0.432-2.179,0.971-3.141c0.529-0.946,1.257-1.8,2.154-2.524 c1.76-1.414,3.999-2.179,6.345-2.182c2.346-0.003,4.584,0.756,6.345,2.164c0.897,0.72,1.624,1.571,2.152,2.515 c0.539,0.961,0.874,2.023,0.973,3.138C40.07,26.958,39.918,28.087,39.525,29.153z"></path>
                                                </svg>
                                                <span className="text-gray-200 inter font-medium group-hover:text-yellow-300">
                                                    Blender
                                                </span>
                                            </div>
                                        </div>
                                        {[
                                            { name: 'Git', icon: 'git' },
                                            { name: 'Figma', icon: 'figma' },
                                            { name: 'Canva', icon: 'canva' },
                                            { name: 'Vercel', icon: 'vercel' },
                                            { name: 'Render', icon: 'render' }
                                        ].map((tech) => (
                                            <div
                                                key={tech.name}
                                                className="group hover:bg-gradient-to-br from-yellow-900/20 to-red-900/20 border border-yellow-500/30 rounded-full p-3 hover:border-yellow-400/60 transition-all duration-300"
                                            >
                                                <div className="flex items-center justify-center gap-2">
                                                    <StackIcon name={tech.icon.toLowerCase()} style={{ filter: tech.name == 'Render' || tech.name == 'Vercel' ? 'invert(1)' : 'invert(0)' }} className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" />

                                                    <span className="text-gray-200 inter font-medium group-hover:text-yellow-300">
                                                        {tech.name}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}

                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className='relative z-50 mt-40 md:h-[60vh] md:w-[55%] hidden md:block'>
                    <Canvas className='relative z-50' camera={{ position: [0, 2, 6], fov: 50 }}>
                        <ambientLight intensity={1.5} />
                        {/* <directionalLight position={[10, 10, 0]} intensity={1} color="#ffffff" /> */}
                        <MarsModel scale={2.3} position={[0, 0, 0]} /> {/* <MarsModel scale={2.5} position={[0, 0, 0]} /> */}
                        <OrbitControls enableZoom={false} />

                        {/* <Environment preset="sunset" /> */}
                    </Canvas>
                </div>
            </div>
            <div className="jupiter flex md:h-[125vh]">

                <div className='relative z-50 mt-40 md:h-[60vh] md:w-[45%] hidden md:block'>
                    <Canvas className='relative z-50' camera={{ position: [0, 2, 6], fov: 50 }}>
                        <ambientLight intensity={1.5} />
                        {/* <directionalLight position={[10, 10, 0]} intensity={1} color="#ffffff" /> */}
                        <JupiterModel scale={2.7} position={[0, 0, 0]} /> {/* <MarsModel scale={2.5} position={[0, 0, 0]} /> */}
                        <OrbitControls enableZoom={false} />

                        {/* <Environment preset="sunset" /> */}
                    </Canvas>
                </div>
                <div className="md:w-[50%]">

                    <div className=" text-white p-2 md:p-8">

                        <div className="max-w-6xl mx-auto">

                            <div className="mb-12 px-8">
                                <h1 className="projects-title md:text-5xl text-4xl font-bold mb-4 inter">Projects</h1>
                                <p className="projects-subtitle text-gray-400 text-lg inter">Some of my featured projects</p>
                                <div className="w-full h-0.5 bg-gradient-to-r from-amber-200 via-orange-400 to-transparent mt-4"></div>
                            </div>

                            {/* Projects Carousel */}
                            <div className="relative ">

                                {/* Carousel Container */}
                                <div className="projects-carousel overflow-hidden p-3 rounded-xl">
                                    <div
                                        className="flex transition-transform duration-500 ease-in-out"
                                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                    >
                                        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                            <div key={slideIndex} className="w-full flex-shrink-0">
                                                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 px-4">
                                                    {projects
                                                        .slice(slideIndex * projectsPerSlide, (slideIndex + 1) * projectsPerSlide)
                                                        .map((project, projectIndex) => (
                                                            <ProjectCard
                                                                key={slideIndex * projectsPerSlide + projectIndex}
                                                                project={project}
                                                                index={projectIndex}
                                                            />
                                                        ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Navigation Buttons */}
                                {totalSlides > 1 && (
                                    <div className="project-nav-buttons">
                                        <button
                                            onClick={prevSlide}
                                            className="project-nav-button-l absolute left-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-yellow-600/80 to-orange-500/80 hover:from-yellow-500 hover:to-orange-400 text-white p-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-yellow-500/25 z-10"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>

                                        <button
                                            onClick={nextSlide}
                                            className="project-nav-button-r absolute right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-yellow-600/80 to-orange-500/80 hover:from-yellow-500 hover:to-orange-400 text-white p-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-yellow-500/25 z-10"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Carousel Indicators */}
                            {totalSlides > 1 && (
                                <div className="project-indicators flex justify-center space-x-2 mt-4">
                                    {Array.from({ length: totalSlides }).map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentSlide(index)}
                                            className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentSlide
                                                ? 'bg-gradient-to-r from-yellow-400 to-orange-400'
                                                : 'bg-yellow-200/30 hover:bg-yellow-200/50'
                                                }`}
                                        />
                                    ))}
                                </div>
                            )}


                        </div>
                    </div>
                </div>
            </div>
            <div className="neptune flex md:h-[110vh]">
                <div className="md:w-[45%] md:ml-40 md:mr-32 ml-10 mt-20">
                    <div className="flex-1 max-w-2xl">
                        <div className="mb-12">
                            <p className="neptune-subtitle text-gray-400 inter text-sm mb-2">
                                Impressed?
                            </p>
                            <h1 className="neptune-title text-5xl inter text-white mb-6">
                                Let's Connect
                            </h1>
                            <div className="w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent mb-8"></div>

                            <p className="neptune-description text-gray-300 inter text-md leading-relaxed mb-8">
                                Ready to collaborate on something amazing? I'm always open to discussing new opportunities, creative projects, and innovative ideas. Let's build the future together.
                            </p>
                        </div>

                        {/* Contact Methods */}
                        <div className="neptune-social space-y-6 mb-12">
                            <h3 className="text-white inter text-xl font-medium mb-6">Get in touch:</h3>

                            <div className="flex gap-3 flex-wrap">
                                <a href="https://github.com/theblag" target='_blank'><button className="cursor-pointer">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/ioihllwu.json"
                                        trigger="hover"
                                        colors="primary:#3a3347,secondary:#ebe6ef">
                                    </lord-icon>
                                </button></a>
                                <a href="https://www.linkedin.com/in/aditya-a-664089332/" target="_blank"><button className="cursor-pointer">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/nwqudhei.json"
                                        trigger="morph"
                                        state="morph-alone">
                                    </lord-icon>
                                </button></a>
                                <a href="https://www.instagram.com/adityaarun._.10/" target='_blank'><button className="cursor-pointer">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/wgtaryar.json"
                                        trigger="hover"
                                    ></lord-icon>
                                </button></a>
                                <a href="https://discord.com/users/974604129148231701" target='_blank'><button className="cursor-pointer">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/xlsrclta.json"
                                        trigger="hover"
                                        state="hover-wink"
                                    ></lord-icon>
                                </button></a>

                            </div>
                            <div className="flex items-center gap-2">
                                <lord-icon
                                    src="https://cdn.lordicon.com/uufkkpxl.json"
                                    trigger="hover"
                                    colors="primary:#000000,secondary:#ebe6ef">
                                </lord-icon>
                                <span className="text-gray-400 inter text-sm">adityaarun2006@gmail.com</span>
                            </div>
                        </div>

                        {/* Location & Availability */}
                        <div className="neptune-status space-y-4 mb-12 inter text-sm">
                            <div className="flex items-center text-gray-300">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                <span>📍 Kerala, India</span>
                            </div>
                            <div className="flex items-center text-gray-300">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                <span>🌐 Available for work</span>
                            </div>
                            <div className="flex items-center text-gray-300">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                                <span>⚡ Usually responds within 24 hours</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button className="neptune-cta bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 mb-4 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 font-medium">
                            Download Resume
                        </button>
                    </div>
                </div>
                <div className='relative z-50 mt-40 md:h-[60vh] md:w-[55%] hidden md:block'>
                    <Canvas className='relative z-50' camera={{ position: [0, 2, 6], fov: 50 }}>
                        <ambientLight intensity={1.5} />
                        {/* <directionalLight position={[10, 10, 0]} intensity={1} color="#ffffff" /> */}
                        <NeptuneModel scale={2.5} position={[0, 0, 0]} /> {/* <MarsModel scale={2.5} position={[0, 0, 0]} /> */}
                        <OrbitControls enableZoom={false} />

                        {/* <Environment preset="sunset" /> */}
                    </Canvas>
                </div>
            </div>
        </div>
    );
};

export default SpacePortfolio;