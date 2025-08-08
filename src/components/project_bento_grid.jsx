import React, { Suspense, useState, useEffect } from 'react'

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

import { Code, Link } from 'lucide-react'
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

import JupiterModel from '../components/jupiter_model';
import Loader from '../components/Loading';
const ImageCarousel = ({ images, alt, className, animationType = 'fade', interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Animation styles based on type
    const getAnimationClass = () => {
        switch (animationType) {
            case 'slide':
                return 'transform transition-transform duration-600 ease-in-out';
            case 'fade':
                return 'transition-opacity duration-400 ease-in-out';
            case 'zoom':
                return 'transform transition-all duration-500 ease-in-out';
            case 'flip':
                return 'transform transition-all duration-700 ease-in-out';
            case 'slideUp':
                return 'transform transition-all duration-600 ease-in-out';
            default:
                return 'transition-opacity duration-500 ease-in-out';
        }
    };

    const goToNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    useEffect(() => {
        if (!isAutoPlaying || isTransitioning) return;

        const intervalId = setInterval(() => {
            goToNext();
        }, interval); // Use the custom interval

        return () => clearInterval(intervalId);
    }, [currentIndex, images.length, isAutoPlaying, isTransitioning, interval]);

    // Render different animation types
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
                                    className="w-full h-full object-cover flex-shrink-0 border border-white/10"
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
                                className={`absolute inset-0 w-full h-full object-cover border border-white/10 ${getAnimationClass()} ${index === currentIndex
                                    ? 'opacity-100 scale-100'
                                    : 'opacity-0 scale-110'
                                    }`}
                                src={image}
                                alt={`${alt} - Image ${index + 1}`}
                            />
                        ))}
                    </div>
                );

            case 'flip':
                return (
                    <div className="relative w-full h-full overflow-hidden rounded-lg perspective-1000">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                className={`absolute inset-0 w-full h-full object-cover border border-white/10 ${getAnimationClass()} ${index === currentIndex
                                    ? 'opacity-100 rotateY-0'
                                    : 'opacity-0 rotateY-180'
                                    }`}
                                style={{
                                    transform: index === currentIndex ? 'rotateY(0deg)' : 'rotateY(180deg)',
                                    backfaceVisibility: 'hidden'
                                }}
                                src={image}
                                alt={`${alt} - Image ${index + 1}`}
                            />
                        ))}
                    </div>
                );

            case 'slideUp':
                return (
                    <div className="relative w-full h-full overflow-hidden rounded-lg">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                className={`absolute inset-0 w-full h-full object-cover border border-white/10 ${getAnimationClass()} ${index === currentIndex
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-4'
                                    }`}
                                src={image}
                                alt={`${alt} - Image ${index + 1}`}
                            />
                        ))}
                    </div>
                );

            default: // fade
                return (
                    <div className="relative w-full h-full overflow-hidden rounded-lg">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                className={`absolute inset-0 w-full h-full object-cover border border-white/10 ${getAnimationClass()} ${index === currentIndex ? 'opacity-100' : 'opacity-0'
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

const ProjectBentoGrid = () => {
    const projectImages = {
        featured: [
            Vaultmaster,
            Vaultmaster3,
            Vaultmaster2
        ],
        project2: [
            Tabout2, Tabout
        ],
        project3: [
            Kotinos,
            Kotinos1,
            Kotinos2,
            Kotinos3,
            Kotinos4
        ],
        project4: [
            Mocktern,
            Mocktern2
        ],
        project5: [
            "/api/placeholder/500/300",
            "/api/placeholder/500/300",
            "/api/placeholder/500/300"
        ],
        project6: [
            "/api/placeholder/500/300",
            "/api/placeholder/500/300",
            "/api/placeholder/500/300"
        ]
    };
    return (
        <div>
            
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-12 gap-6 auto-rows-[300px]">

                    {/* Large featured project - spans 2 rows and 6 columns */}
                    <div className="col-span-6 row-span-2 group relative overflow-hidden rounded-xl bg-gray-800/40 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 hover:scale-[1.02]">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-700/10 via-transparent to-gray-800/20"></div>
                        <div className="relative p-6 h-full flex flex-col">
                            <ImageCarousel
                                images={projectImages.featured}
                                alt="Featured Project"
                                className="w-full h-80 mb-4"
                                animationType="fade"
                                interval={2000}
                            />
                            <div className="flex-1">
                                <h3 className="text-2xl inter font-semibold text-white mb-3 group-hover:text-gray-200 transition-colors">
                                    VaultMaster
                                </h3>
                                <p className="text-gray-300 inter text-sm leading-relaxed mb-4">
                                    Full-stack password manager with AES encryption and Password generator.                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-700/30 text-gray-300 border border-gray-600/40">React</span>
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-700/30 text-gray-300 border border-gray-600/40">Node.js</span>
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-700/30 text-gray-300 border border-gray-600/40">MongoDB</span>
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-700/30 text-gray-300 border border-gray-600/40">Supabase</span>
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-700/30 text-gray-300 border border-gray-600/40">Tailwind CSS</span>

                                </div>
                            </div>
                            <div className="flex gap-3 mt-auto">
                                <a className=' flex-1 inter text-center px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-gray-500/25' href='https://vaultmaster.vercel.app' target='_blank'><button className="">
                                    View Live
                                </button></a>
                                <a href='https://github.com/theblag/kotinos' target='_blank'><button className="px-4 inter py-2 border border-gray-500/50 hover:border-gray-400 text-gray-300 hover:text-gray-200 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-gray-600/20">
                                    Code
                                </button></a>
                            </div>
                        </div>
                    </div>

                    {/* Medium project - spans 3 columns */}
                    <div className="col-span-3 row-span-1 tabout group relative overflow-hidden rounded-xl bg-gray-800/40 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 hover:scale-[1.02]">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-700/10 via-transparent to-gray-800/20"></div>
                        <div className="relative p-4 h-full flex flex-col">
                            <ImageCarousel
                                images={projectImages.project2}
                                alt="Project Two"
                                className="w-full h-32 mb-3"
                                animationType="slide"
                                interval={2500}
                            />
                            <div className="flex-1">
                                <h3 className="text-lg inter font-semibold text-white mb-2 group-hover:text-gray-200 transition-colors">
                                    Tabout
                                </h3>
                                <p className="text-gray-300 text-xs leading-relaxed mb-3 inter">
                                    A Chrome extension that helps you stay focused by blocking distracting websites temporarily, using timers.
                                </p>

                                <div className="flex justify-between">
                                    <div className="flex flex-wrap gap-1">
                                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-700/30 text-gray-300 border border-gray-600/40">React</span>
                                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-700/30 text-gray-300 border border-gray-600/40">Vanilla JS</span>

                                    </div>
                                    <div className='flex gap-2'>
                                        <a href='https://github.com/theblag/tabout-website-blocker/blob/main/README.md' target='_blank'>
                                            <button className="justify-center items-center px-3 py-1.5 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white text-xs font-medium rounded-lg transition-all duration-200">
                                                <Link size={12} />
                                            </button></a>
                                        <a href='https://github.com/theblag/tabout-website-blocker' target='_blank'>
                                            <button className="px-3 py-1.5 border border-gray-500/50 hover:border-gray-400 text-gray-300 hover:text-gray-200 text-xs font-medium rounded-lg transition-all duration-200 hover:bg-gray-600/20">
                                                <Code size={12} />
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>




                    {/* Tall project - spans 3 columns and 2 rows */}
                    <div className="col-span-3 row-span-2 group relative overflow-hidden rounded-xl bg-gray-800/40 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 hover:scale-[1.02]">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-700/10 via-transparent to-gray-800/20"></div>
                        <div className="relative p-4 h-full flex flex-col">
                            <ImageCarousel
                                images={projectImages.project3}
                                alt="Project Three"
                                className="w-full h-36 mb-3"
                                animationType="zoom"
                                interval={2870}
                            />                            <div className="flex-1">
                                <h3 className="text-lg inter font-semibold text-white mb-2 group-hover:text-gray-200 transition-colors">
                                    Kotinos
                                </h3>
                                <p className="text-gray-300 inter text-xs leading-relaxed mb-3">
                                    A web app for athletes to elevate their career by showcasing achievements, connecting with people, AI assisted health care and crownfunding.
                                </p>
                                <div className="flex flex-wrap gap-1 mb-3">
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-700/30 text-gray-300 border border-gray-600/40">React</span>
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-700/30 text-gray-300 border border-gray-600/40">Node.js</span>
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-700/30 text-gray-300 border border-gray-600/40">Firebase</span>
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-700/30 text-gray-300 border border-gray-600/40">Tailwind CSS</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 mt-auto">
                                <a href='https://kotinos.vercel.app' className='px-3 inter py-1.5 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-center text-white text-xs font-medium rounded-lg transition-all duration-200' target='_blank'><button className="">
                                    View Live
                                </button></a>
                                <a href='https://github.com/theblag/kotinos' target='_blank' className='px-3 inter py-1.5 border border-gray-500/50 hover:border-gray-400 text-gray-300 hover:text-gray-200 text-xs font-medium rounded-lg text-center transition-all duration-200 hover:bg-gray-600/20'><button className="">
                                    Code
                                </button></a>
                            </div>
                        </div>
                    </div>
                    <div className='w-full col-span-3 '>
                        <Canvas className='relative z-50' camera={{ position: [0, 2, 6], fov: 50 }}>
                            <ambientLight intensity={1.5} />
                            {/* <directionalLight position={[10, 10, 0]} intensity={1} color="#ffffff" /> */}
                            <Suspense fallback={<Loader />}>
                                <JupiterModel scale={2.5} position={[0, 0, 0]} /> {/* <MarsModel scale={2.5} position={[0, 0, 0]} /> */}
                            </Suspense>
                            <OrbitControls enableZoom={false} />

                            {/* <Environment preset="sunset" /> */}
                        </Canvas>
                    </div>



                    {/* Medium project - spans 3 columns */}
                    <div className="col-span-3 row-span-1 echo-notes group relative overflow-hidden rounded-xl bg-gray-800/40 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 hover:scale-[1.02]">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-700/10 via-transparent to-gray-800/20"></div>
                        <div className="relative p-4 h-full flex flex-col">
                            <img className='rounded-lg relative w-full h-fit object-cover z-20 border border-white/10 mb-3' src={Echonotes} alt="Project 5" />
                            <div className="flex-1">
                                <h3 className="text-lg inter font-semibold text-white mb-2 group-hover:text-gray-200 transition-colors">
                                    Echo Notes
                                </h3>
                                <p className="text-gray-300 inter text-xs leading-relaxed mb-3">
                                    A todo list web app, that uses the local storage, and has a simple and clean UI.
                                </p>
                                <div className="flex justify-between">
                                    <div className="flex flex-wrap gap-1">
                                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-700/30 text-gray-300 border border-gray-600/40">HTML</span>
                                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-700/30 text-gray-300 border border-gray-600/40">Tailwind CSS</span>

                                    </div>
                                    <div className='flex gap-2'>
                                        <a href='https://echonotes-seven.vercel.app/' target='_blank'>
                                            <button className="justify-center items-center px-3 py-1.5 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white text-xs font-medium rounded-lg transition-all duration-200">
                                                <Link size={12} />
                                            </button></a>
                                        <a href='https://github.com/theblag/todo-list ' target='_blank'>
                                            <button className="px-3 py-1.5 border border-gray-500/50 hover:border-gray-400 text-gray-300 hover:text-gray-200 text-xs font-medium rounded-lg transition-all duration-200 hover:bg-gray-600/20">
                                                <Code size={12} />
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Final project - spans 3 columns */}
                    <div className="col-span-3 row-span-1 music-player group relative overflow-hidden rounded-xl bg-gray-800/40 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 hover:scale-[1.02]">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-700/10 via-transparent to-gray-800/20"></div>
                        <div className="relative p-4 h-full flex flex-col">
                            <img className='rounded-lg relative w-full h-fit object-cover z-20 border border-white/10 mb-3' src={Mplayer} alt="Project 6" />
                            <div className="flex-1">
                                <h3 className="text-lg inter font-semibold text-white mb-2 group-hover:text-gray-200 transition-colors">
                                    Music Player
                                </h3>
                                <p className="text-gray-300 inter text-xs leading-relaxed mb-3">
                                    A web app that allows you to play music from your local files, with a simple and clean UI.
                                </p>

                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-wrap gap-1">
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-700/30 text-gray-300 border border-gray-600/40">HTML</span>
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-700/30 text-gray-300 border border-gray-600/40">CSS</span>
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-700/30 text-gray-300 border border-gray-600/40">JavaScript</span>

                                </div>
                                <div className='flex gap-2'>
                                    <button className="justify-center items-center px-3 py-1.5 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white text-xs font-medium rounded-lg transition-all duration-200">
                                        <Link size={12} />
                                    </button>
                                    <a href='https://github.com/theblag/MusicPlayer' target='_blank'><button className="px-3 py-1.5 border border-gray-500/50 hover:border-gray-400 text-gray-300 hover:text-gray-200 text-xs font-medium rounded-lg transition-all duration-200 hover:bg-gray-600/20">
                                        <Code size={12} />
                                    </button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Wide project - spans 6 columns */}
                    <div className="col-span-6 row-span-1 group relative overflow-hidden rounded-xl bg-gray-800/40 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 hover:scale-[1.02]">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-700/10 via-transparent to-gray-800/20"></div>
                        <div className="relative p-4 h-full flex flex-col">
                            <ImageCarousel
                                images={projectImages.project4}
                                alt="Project Four"
                                className="w-full h-40 mb-3"
                                animationType="slideUp"
                                interval={3000}
                            />                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gray-200 transition-colors">
                                    Mocktern
                                </h3>
                                <p className="text-gray-300 text-xs leading-relaxed mb-3">
                                    A fake internship and course detector, which combines advanced AI analysis with real community consensus to protect you from scams and highlight real opportunities instantly.
                                </p>
                                <div className="flex flex-wrap gap-1 mb-3">
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-700/30 text-gray-300 border border-gray-600/40">React</span>
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-700/30 text-gray-300 border border-gray-600/40">Firebase</span>
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-700/30 text-gray-300 border border-gray-600/40">Tailwind CSS</span>
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-700/30 text-gray-300 border border-gray-600/40">Gemini API</span>
                                </div>
                            </div>
                            <div className="flex gap-2 mt-auto">
                                <a href='https://mocktern.vercel.app/' target='_blank' className="flex-1 inter px-3 py-1.5 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white text-xs font-medium rounded-lg text-center transition-all duration-200"><button >
                                    View Live
                                </button></a>
                                <a href='https://github.com/theblag/mocktern' target='_blank'><button className="px-3 py-1.5 inter border border-gray-500/50 hover:border-gray-400 text-gray-300 hover:text-gray-200 text-xs font-medium rounded-lg transition-all duration-200 hover:bg-gray-600/20">
                                    Code
                                </button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectBentoGrid
