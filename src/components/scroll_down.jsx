import React, { useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
const ScrollIndicator = () => {
    const comp = useRef(null);
    // useLayoutEffect(() => {
    //     let ctx = gsap.context(() => {
    //         const t1 = gsap.timeline()
    //         t1.from('#arrow-div', {

    //         })
    //     }, comp)

    //     return () => ctx.revert()
    // }, [])
    useLayoutEffect(() => {
        gsap.fromTo(
            comp.current,
            { opacity: 0.4, y: -7 },
            {
                opacity: 1,
                y: 10,
                repeat: -1,
                yoyo: true,
                duration: 1.2,
                ease: "power1.inOut"
            }
        );
    }, []);

    return (
        <div
            ref={comp}
            className="flex flex-col items-center cursor-pointer z-10">
            <div
                id="arrow-div"
                className="relative flex flex-col gap-1 items-center"

            >
                <div
                    className="text-white/70 text-sm font-light tracking-wider uppercase hover:text-white/90 transition-colors duration-300"
                >
                    Scroll Down
                </div>
                {/* Main arrow */}
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white/70 hover:text-white/90 transition-colors duration-300"
                >
                    <path
                        d="M7 10L12 15L17 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

            </div>

        </div>
    );
};

export default ScrollIndicator;