import React, { useState, useEffect, Suspense, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin } from 'lucide-react';
import '../App.css'
import Space from '../components/space';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

import PlanetModel from '../components/earth_model';
import MarsModel from '../components/mars_model';
import ProjectText from '../components/project_text'
import ProjectGrid from '../components/project_bento_grid';

import NeptuneModel from '../components/neptune_model'
import Profile from '../components/profile'
import ScrollDown from '../components/scroll_down';
import Frontend from '../components/frontent_techstack';
import Backend from '../components/backend_techstack'
import Tools from '../components/tools_techstack';
import Loader from '../components/Loading';
import ProjectsScene from '../components/projects';
import ProjectMob from '../components/project-bento-mob'

import Toggle from '../components/toggle';

import Kotinos from '../assets/kotinos.png'
import Vaultmaster from '../assets/vaultmaster.png'
import Tabout from '../assets/tabout.png'
import Echonotes from '../assets/echonotes.png';
import Mplayer from '../assets/mplayer.png';
import Mocktern from '../assets/mocktern.png'
import { div } from 'three/tsl';

import SplashCursor from '../components/SplashCursor'
import { memo } from 'react'

// Memoize SplashCursor to prevent re-renders
const MemoizedSplashCursor = memo(SplashCursor)
const SpacePortfolio = () => {

    const [is3D, setIs3D] = useState(false);




    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const isMobile = window.innerWidth < 768;
        gsap.to(".scroll-down-text", {
            scrollTrigger: {
                trigger: ".scroll-down-text",
                start: "top 85%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            duration: 0.5
        });
        gsap.fromTo(".earth .bg-gradient-to-r", {
            width: "0%"
        }, {
            width: "100%",
            duration: 1.2,
            delay: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".earth",
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });
        gsap.fromTo(".mars .bg-gradient-to-r", {
            width: "0%"
        }, {
            width: "100%",
            duration: 1.2,
            delay: 0.6, // After the subtitle
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".mars",
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });
        gsap.fromTo(".projects_line", {
            width: "0%"
        }, {
            width: "80%",
            duration: 1.2,
            delay: 0.6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".projects-title",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
        gsap.fromTo(".neptune .bg-gradient-to-r", {
            width: "0%"
        }, {
            width: "100%",
            duration: 1,
            delay: 0.6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".neptune",
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });
        if (!isMobile) {
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
            const disableTransitions = (selector) => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(el => {
                    el.style.transition = 'none';
                });
            };

            // Re-enable transitions after GSAP animations complete
            const enableTransitions = (selector, delay = 0) => {
                setTimeout(() => {
                    const elements = document.querySelectorAll(selector);
                    elements.forEach(el => {
                        el.style.transition = 'all 0.3s ease';
                    });
                }, delay);
            };

            // Disable transitions before animations
            disableTransitions('[class*="col-span"]');
            disableTransitions('.echo-notes');
            disableTransitions('.music-player');
            disableTransitions('.tabout');

            gsap.fromTo(".projects-title, .projects-subtitle", {
                scale: 0.8,
                opacity: 0,
                y: -30
            }, {
                scale: 1,
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".projects-title",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });

            // Project cards with smoother animations
            gsap.fromTo(".col-span-6.row-span-2", {
                scale: 0.9,
                opacity: 0,
                y: 40
            }, {
                scale: 1,
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".col-span-6.row-span-2",
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                onComplete: () => enableTransitions('.col-span-6.row-span-2', 500)
            });

            gsap.fromTo(".tabout", {
                scale: 0.95,
                opacity: 0,
                y: 30
            }, {
                scale: 1,
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".tabout",
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                onComplete: () => enableTransitions('.tabout', 500)
            });

            gsap.fromTo(".col-span-3.row-span-2", {
                scale: 0.95,
                opacity: 0,
                y: 30
            }, {
                scale: 1,
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.4,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".col-span-3.row-span-2",
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                onComplete: () => enableTransitions('.col-span-3.row-span-2', 500)
            });

            gsap.fromTo(".echo-notes", {
                scale: 0.95,
                opacity: 0,
                y: 30
            }, {
                scale: 1,
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".echo-notes",
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                onComplete: () => enableTransitions('.echo-notes', 500)
            });

            gsap.fromTo(".music-player", {
                scale: 0.95,
                opacity: 0,
                y: 30
            }, {
                scale: 1,
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".music-player",
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                onComplete: () => enableTransitions('.music-player', 500)
            });

            gsap.fromTo(".col-span-6.row-span-1", {
                scale: 0.95,
                opacity: 0,
                y: 30
            }, {
                scale: 1,
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".col-span-6.row-span-1",
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                onComplete: () => enableTransitions('.col-span-6.row-span-1', 500)
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
        }

    }, [])


    const comp = useRef(null);
    useLayoutEffect(() => {

        let ctx = gsap.context(() => {
            const t1 = gsap.timeline()
            const t2 = gsap.timeline()
            t1.from('#main-heading', {
                y: -20,
                opacity: 0,
                duration: 1.5,
            }).from('#sub-heading', {
                y: -20,
                opacity: 0,
                duration: 1.5,
            })
            t2.from(".scroll-down-text", {
                opacity: 0,
                duration: 0.5,
            })
        }, comp)

        return () => ctx.revert()
    }, [])
    return (
        <div ref={comp} className="relative ">
            <MemoizedSplashCursor SPLAT_FORCE={2000}        // Much gentler
                DENSITY_DISSIPATION={8}   // Fades quickly
                VELOCITY_DISSIPATION={5}  // Movement stops faster
                CURL={1}                 // Minimal swirling
                COLOR_UPDATE_SPEED={5} className='relative -z-10' />
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

                {/* <div className="hidden md:block">
                    <Profile />
                </div> */}


            </div>
            <div onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })} className="scroll-down-text w-full md:fixed md:bottom-8 relative bottom-32">
                <ScrollDown />
            </div>
            <div className="earth flex md:h-[100vh]">

                <div className='relative z-50 md:h-[60vh] bg- white mt-8 md:w-[55%] hidden md:block'>
                    <Canvas className='relative z-50' camera={{ position: [0, 2, 6], fov: 50 }}>
                        <ambientLight intensity={5.5} />
                        {/* <directionalLight position={[10, 10, 0]} intensity={1} color="#ffffff" /> */}
                        <Suspense fallback={<Loader />}>
                            <PlanetModel scale={2.35} position={[0, 0, 0]} /> {/* <MarsModel scale={2.5} position={[0, 0, 0]} /> */}
                        </Suspense>
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
                                    {['Full-Stack Development', '3D Web Experiences', 'Machine Learning', 'Data Science'].map((skill) => (
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
                                    <Frontend />



                                </div>

                                {/* Backend */}
                                <div className="backend-category space-y-3">
                                    <h3 className="text-xl text-orange-400 font-semibold inter">Backend</h3>
                                    <Backend />
                                </div>


                                {/* Tools & Others */}
                                <div className="tools-category space-y-3">
                                    <h3 className="text-xl text-yellow-400 font-semibold inter">Tools & Others</h3>

                                    <Tools />




                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className='relative z-50 mt-40 md:h-[60vh] md:w-[55%] hidden md:block'>
                    <Canvas className='relative z-50' camera={{ position: [0, 2, 6], fov: 50 }}>
                        <ambientLight intensity={1.5} />

                        {/* <directionalLight position={[10, 10, 0]} intensity={1} color="#ffffff" /> */}
                        <Suspense fallback={<Loader />}>
                            <MarsModel scale={2.4} position={[0, 0, 0]} /> {/* <MarsModel scale={2.5} position={[0, 0, 0]} /> */}
                        </Suspense>
                        <OrbitControls enableZoom={false} />

                        {/* <Environment preset="sunset" /> */}
                    </Canvas>
                </div>
            </div>

            {/*JUPITER */}
            <div className='hidden z-50 p-5 px-40 md:flex justify-between items-center'>
                <div>
                    {!is3D &&
                        (<div className="">
                            <h1 className="projects-title md:text-5xl text-white text-4xl font-bold mb-4 inter">Projects</h1>
                            <p className="projects-subtitle text-gray-400 text-lg inter">Some of my featured projects</p>
                        </div>
                        )}
                </div>
                <div className='flex items-center gap-6'>
                    <div className="">
                        <h1 className='text-white inter text-lg font-medium tracking-wide'>View Mode</h1>
                        <p className='text-gray-400 inter text-xs font-light'>Switch between layouts</p>
                    </div>
                    <Toggle is3D={is3D} setIs3D={setIs3D} />
                </div>
            </div>
            {!is3D && (
                <div className="w-[80%] hidden md:block mx-40 projects_line h-0.5 bg-gradient-to-r from-amber-200 via-orange-400 to-transparent mt-4"></div>

            )}

            {is3D ? (
                <div className="projects ml-10 hidden md:block md:h-[150vh]">
                    <Canvas
                        className='relative z-50'
                        camera={{
                            fov: 75,
                            position: [0, 0, 5],
                            near: 0.1,
                            far: 1000
                        }}
                    >
                        <Suspense fallback={<Loader />}>
                            <ProjectsScene />
                        </Suspense>



                    </Canvas>

                    {/* Optional instructions overlay */}
                    {/* <div className=" text-white  h-32 bg-white/10 rounde d-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100/30 p-3 rounded-lg">
                    <p className="text-sm inter">Controls:</p><br/>
                    <p className="text-xs inter">WASD - Move around</p>
                    <p className="text-xs inter">Q/E - Move up/down</p>
                </div> */}
                </div>
            ) : (
                <div>
                    <div className='hidden md:block'>
                        <ProjectGrid />
                    </div>
                    <ProjectMob className='md:hidden' />
                </div>
            )}

            <div className="neptune flex md:h-[110vh]">
                <div className="md:w-[45%] md:ml-40 md:mr-32 mr-10 ml-10 mt-20">
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
                        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer"><button className="neptune-cta cursor-pointer bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 mb-4 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 font-medium">
                            View Resume
                        </button></a>
                    </div>
                </div>
                <div className='relative z-50 mt-40 md:h-[60vh] md:w-[55%] hidden md:block'>
                    <Canvas className='relative z-50' camera={{ position: [0, 2, 6], fov: 50 }}>
                        <ambientLight intensity={1.5} />
                        {/* <directionalLight position={[10, 10, 0]} intensity={1} color="#ffffff" /> */}
                        <Suspense fallback={<Loader />}>
                            <NeptuneModel scale={2.5} position={[0, 0, 0]} /> {/* <MarsModel scale={2.5} position={[0, 0, 0]} /> */}
                        </Suspense>
                        <OrbitControls enableZoom={false} />

                        {/* <Environment preset="sunset" /> */}
                    </Canvas>
                </div>
            </div>
        </div>
    );
};

export default SpacePortfolio;