import React, { useState } from 'react';

const SpaceToggleSwitch = ({is3D,setIs3D}) => {

  const toggle = () => {
    setIs3D(!is3D);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center space-y-8">
        {/* Toggle Switch */}
        <div className="relative">
          <button
            onClick={toggle}
            className={`
              relative w-32 h-16 rounded-full p-1 transition-all duration-500 ease-in-out
              ${is3D 
                ? 'bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 shadow-lg shadow-purple-500/50' 
                : 'bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 shadow-lg shadow-gray-500/30'
              }
              hover:scale-105 active:scale-95 transform
              ring-2 ring-white/20 hover:ring-white/40
              before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r 
              ${is3D 
                ? 'before:from-purple-400/20 before:via-blue-400/20 before:to-cyan-400/20' 
                : 'before:from-gray-400/20 before:via-gray-500/20 before:to-gray-600/20'
              }
              before:animate-pulse before:duration-2000
            `}
          >
            {/* Sliding Circle */}
            <div
              className={`
                absolute top-1 w-14 h-14 rounded-full transition-all duration-500 ease-in-out
                ${is3D 
                  ? 'left-16 bg-gradient-to-br from-white to-cyan-200 shadow-lg shadow-cyan-400/50' 
                  : 'left-1 bg-gradient-to-br from-white to-gray-300 shadow-lg shadow-gray-400/50'
                }
                flex items-center justify-center text-xs font-bold
                border-2 border-white/30
              `}
            >
              {/* Inner glow */}
              <div className={`absolute inset-0 rounded-full ${is3D ? 'bg-gradient-to-br from-cyan-400/20 to-purple-400/20' : 'bg-gradient-to-br from-gray-400/20 to-gray-600/20'}`}></div>
              
              {/* Text */}
              <span className={`relative z-10 ${is3D ? 'text-purple-800' : 'text-gray-800'} font-extrabold tracking-tight`}>
                {is3D ? '3D' : '2D'}
              </span>
              
              {/* Decorative elements */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`
                      absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse
                      ${is3D ? 'opacity-60' : 'opacity-30'}
                    `}
                    style={{
                      left: `${25 + i * 20}%`,
                      top: `${20 + (i % 2) * 60}%`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: `${2 + (i % 2)}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Background Stars */}
            <div className="absolute inset-0 overflow-hidden rounded-full">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`
                    absolute w-1 h-1 bg-white rounded-full animate-pulse
                    ${is3D ? 'opacity-80' : 'opacity-30'}
                  `}
                  style={{
                    left: `${20 + i * 10}%`,
                    top: `${30 + (i % 3) * 20}%`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: `${2 + (i % 3)}s`
                  }}
                ></div>
              ))}
            </div>
          </button>

          {/* Glow Effect */}
          <div
            className={`
              absolute inset-0 rounded-full transition-all duration-500 ease-in-out -z-10
              ${is3D 
                ? 'bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-500/20 blur-xl scale-110' 
                : 'bg-gradient-to-r from-gray-600/20 via-gray-700/20 to-gray-800/20 blur-xl scale-110'
              }
            `}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SpaceToggleSwitch;