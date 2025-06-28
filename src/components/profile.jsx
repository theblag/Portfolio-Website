import React from 'react'

import ProfilePic from '../assets/profile-pic.png';
import { MapPin } from 'lucide-react'

// Replace your current icon with this component
function ProfileIcon() {
    return (
        <div className="fixed top-6 right-6 group z-50">
            {/* Your existing icon */}
            <div className="relative w-16 h-16 rounded-full p-[3px] bg-gradient-to-r from-purple-500 to-cyan-500 bg-[length:200%_200%] animate-gradient cursor-pointer">
                {/* Inner container */}
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                    <img src={ProfilePic} alt="Profile" className=" rounded-full" />
                </div>
            </div>

            {/* Tooltip container */}
            <div className="absolute top-full right-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {/* Arrow pointing up */}
                <div className="absolute -top-2 right-6 w-4 h-4 bg-gray-900/95 border-l border-t border-gray-700/50 rotate-45"></div>

                {/* Content */}
                <div className="space-y-2">
                    <h3 className="text-white font-semibold text-lg">Aditya A</h3>
                    <p className="text-gray-300 text-sm">Full Stack Developer</p>
                    <p className="text-gray-400 text-xs flex items-center">
                        <span className="mr-1"><MapPin width={15} /></span>
                        Kerala, India
                    </p>
                    <div className="pt-2 border-t border-gray-700/50">
                        <p className="text-gray-400 text-xs">Available for new projects</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileIcon;
