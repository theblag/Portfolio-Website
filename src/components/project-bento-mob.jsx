import React, { useState, useEffect, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react'
import Kotinos from '../assets/kotinos.png'
import Kotinos1 from '../assets/kotinos1.png'
import Kotinos2 from '../assets/kotinos2.png'
import Kotinos3 from '../assets/kotinos3.png'
import Kotinos4 from '../assets/kotinos4.png'
import Vaultmaster from '../assets/vaultmaster.png'
import Vaultmaster2 from '../assets/vaultmaster2.png'
import Vaultmaster3 from '../assets/vaultmaster3.png'
import Tabout from '../assets/tabout.png'
import Tabout2 from '../assets/tabout2.png'
import Echonotes from '../assets/echonotes.png';
import Mplayer from '../assets/mplayer.png';
import Mocktern from '../assets/mocktern2.png'
import Mocktern2 from '../assets/mocktern1.png'

const ImageCarousel = ({ images, alt, className, animationType = 'fade', interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const getAnimationClass = () => {
        switch (animationType) {
            case 'slide':
                return 'transform transition-transform duration-600 ease-in-out';
            case 'fade':
                return 'transition-opacity duration-400 ease-in-out';
            case 'zoom':
                return 'transform transition-all duration-500 ease-in-out';
            default:
                return 'transition-opacity duration-500 ease-in-out';
        }
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    useEffect(() => {
        if (!isAutoPlaying) return;

        const intervalId = setInterval(() => {
            goToNext();
        }, interval);

        return () => clearInterval(intervalId);
    }, [currentIndex, images.length, isAutoPlaying, interval]);

    const renderAnimatedImage = () => {
        switch (animationType) {
            case 'slide':
                return (
                    <div className="relative w-full h-full overflow-hidden rounded-lg">
                        <div
                            className={`flex w-full h-full ${getAnimationClass()}`}
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    className="w-full h-full object-cover flex-shrink-0"
                                    src={image}
                                    alt={`${alt} - Image ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                );

            case 'zoom':
                return (
                    <div className="relative w-full h-full overflow-hidden rounded-lg">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                className={`absolute inset-0 w-full h-full object-cover ${getAnimationClass()} ${index === currentIndex
                                    ? 'opacity-100 scale-100'
                                    : 'opacity-0 scale-110'
                                    }`}
                                src={image}
                                alt={`${alt} - Image ${index + 1}`}
                            />
                        ))}
                    </div>
                );

            default:
                return (
                    <div className="relative w-full h-full overflow-hidden rounded-lg">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                className={`absolute inset-0 w-full h-full object-cover ${getAnimationClass()} ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                                src={image}
                                alt={`${alt} - Image ${index + 1}`}
                            />
                        ))}
                    </div>
                );
        }
    };

    return (
        <div
            className={`relative group ${className}`}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            {renderAnimatedImage()}
        </div>
    );
};

const MobileProjectGrid = () => {
    const projectImages = {
        vaultmaster: [Vaultmaster, Vaultmaster3, Vaultmaster2],
        kotinos: [Kotinos, Kotinos1, Kotinos2, Kotinos3, Kotinos4],
        mocktern: [Mocktern, Mocktern2],
        tabout: [Tabout2, Tabout],
        echonotes: [Echonotes],
        mplayer: [Mplayer]
    };

    const projects = [
        {
            title: "VaultMaster",
            tech: ["React", "Node.js", "MongoDB", "Supabase"],
            liveLink: "https://vaultmaster.vercel.app",
            codeLink: "https://github.com/theblag/vaultmaster",
            images: projectImages.vaultmaster,
            animationType: "fade"
        },
        {
            title: "Kotinos",
            tech: ["React", "Firebase", "Tailwind CSS"],
            liveLink: "https://kotinos.vercel.app",
            codeLink: "https://github.com/theblag/kotinos",
            images: projectImages.kotinos,
            animationType: "zoom"
        },
        {
            title: "Mocktern",
            tech: ["React", "Gemini API"],
            liveLink: "https://mocktern.vercel.app",
            codeLink: "https://github.com/theblag/mocktern",
            images: projectImages.mocktern,
            animationType: "slide"
        },
        {
            title: "TabOut",
            tech: ["React", "JavaScript"],
            liveLink: "https://github.com/theblag/tabout-website-blocker",
            codeLink: "https://github.com/theblag/tabout-website-blocker",
            images: projectImages.tabout,
            animationType: "slide"
        },
        {
            title: "Echo Notes",
            tech: ["HTML", "CSS", "JS"],
            liveLink: "https://echonotes-seven.vercel.app/",
            codeLink: "https://github.com/theblag/todo-list",
            images: projectImages.echonotes,
            animationType: "fade"
        },
        {
            title: "Music Player",
            tech: ["HTML", "CSS"],
            liveLink: "https://github.com/theblag/MusicPlayer",
            codeLink: "https://github.com/theblag/MusicPlayer",
            images: projectImages.mplayer,
            animationType: "fade"
        }
    ];

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(".jupline", {
            width: "0%"
        }, {
            width: "100%",
            duration: 1.2,
            delay: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".jupline",
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });
    },[])

    return (
        <div className="block md:hidden px-4">
            {/* Header */}
            <div className="mb-6">
                <h1 className="projects-title text-3xl text-white font-bold mb-2 inter">Projects</h1>
                <p className="projects-subtitle text-gray-400 text-sm inter">Featured work</p>
                <div className="jupline w-0 h-0.5 bg-gradient-to-r from-amber-200 via-orange-400 to-transparent mt-3"></div>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-2 gap-3 auto-rows-[minmax(120px,auto)]">
                {/* Featured Project - Large */}
                <div className="col-span-2 row-span-2 group relative overflow-hidden rounded-xl bg-gray-800/40 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300">
                    <ImageCarousel
                        images={projects[0].images}
                        alt={projects[0].title}
                        className="w-full h-full"
                        animationType={projects[0].animationType}
                        interval={2500}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                        <h3 className="text-white font-semibold text-lg inter mb-1">{projects[0].title}</h3>
                        <div className="flex items-center gap-3">
                            <div className="flex flex-wrap gap-1 mb-2">
                                {projects[0].tech.map((tech, i) => (
                                    <span key={i} className="text-xs bg-gray-700/60 text-gray-200 px-2 py-1 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <a href={projects[0].liveLink} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink size={16} className="text-white/80 hover:text-white" />
                                </a>
                                <a href={projects[0].codeLink} target="_blank" rel="noopener noreferrer">
                                    <Github size={16} className="text-white/80 hover:text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Project - Wide */}
                <div className="col-span-2 row-span-1 group relative overflow-hidden rounded-xl bg-gray-800/40 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300">
                    <div className="flex h-full">
                        <div className="w-1/2">
                            <ImageCarousel
                                images={projects[1].images}
                                alt={projects[1].title}
                                className="w-full h-full"
                                animationType={projects[1].animationType}
                                interval={2800}
                            />
                        </div>
                        <div className="w-1/2 p-3 flex flex-col justify-center">
                            <h3 className="text-white font-semibold inter text-sm mb-2">{projects[1].title}</h3>
                            <div className="flex flex-wrap gap-1 mb-2">
                                {projects[1].tech.slice(0, 2).map((tech, i) => (
                                    <span key={i} className="text-xs bg-gray-700/60 text-gray-200 px-2 py-1 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <a href={projects[1].liveLink} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink size={14} className="text-white/80 hover:text-white" />
                                </a>
                                <a href={projects[1].codeLink} target="_blank" rel="noopener noreferrer">
                                    <Github size={14} className="text-white/80 hover:text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Third & Fourth Projects - Square */}
                {projects.slice(3, 5).map((project, index) => (
                    <div key={index + 2} className="col-span-1 row-span-1 group relative overflow-hidden rounded-xl bg-gray-800/40 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300">
                        <ImageCarousel
                            images={project.images}
                            alt={project.title}
                            className="w-full h-full"
                            animationType={project.animationType}
                            interval={3000 + (index * 400)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-2">
                            <h3 className="text-white font-semibold text-xs inter mb-1">{project.title}</h3>
                            <div className="flex gap-2">
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink size={12} className="text-white/80 hover:text-white" />
                                </a>
                                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                                    <Github size={12} className="text-white/80 hover:text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Fifth Project - Wide */}
                <div className="col-span-2 row-span-1 h-40 group relative overflow-hidden rounded-xl bg-gray-800/40 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300">
                    <div className="flex h-[80%]">
                        <div className="w-full absolute z-30 bottom-0 scale-110 left-2 p-3 flex flex-col justify-center">
                            <h3 className="text-white font-semibold inter text-sm ">{projects[2].title}</h3>
                            <div className='flex gap-4 items-center w-full'>
                                <div className="flex gap-1 ">
                                    {projects[2].tech.map((tech, i) => (
                                        <span key={i} className="text-xs bg-gray-700/60 text-gray-200 px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    <a href={projects[2].liveLink} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={14} className="text-white/80 hover:text-white" />
                                    </a>
                                    <a href={projects[2].codeLink} target="_blank" rel="noopener noreferrer">
                                        <Github size={14} className="text-white/80 hover:text-white" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <ImageCarousel
                                images={projects[2].images}
                                alt={projects[2].title}
                                className="w-full h-full"
                                animationType={projects[2].animationType}
                                interval={3500}
                            />
                        </div>
                    </div>
                </div>

                {/* Sixth Project - Square */}
                <div className="col-span-1 row-span-1 group relative overflow-hidden rounded-xl bg-gray-800/40 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300">
                    <ImageCarousel
                        images={projects[5].images}
                        alt={projects[5].title}
                        className="w-full h-full"
                        animationType={projects[5].animationType}
                        interval={4000}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-2">
                        <h3 className="text-white font-semibold text-xs inter mb-1">{projects[5].title}</h3>
                        <div className="flex gap-2">
                            <a href={projects[5].liveLink} target="_blank" rel="noopener noreferrer">
                                <ExternalLink size={12} className="text-white/80 hover:text-white" />
                            </a>
                            <a href={projects[5].codeLink} target="_blank" rel="noopener noreferrer">
                                <Github size={12} className="text-white/80 hover:text-white" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Empty space for balance */}
                <div className="col-span-1 row-span-1"></div>
            </div>
        </div>
    );
};

export default MobileProjectGrid;