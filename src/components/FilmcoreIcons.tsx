
import React from 'react';

// Define the individual icon components with their themed colors
export const FilmcoreIcon1 = () => (
  <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 48C10.7467 48 0 37.253 0 24H24V48Z" fill="currentColor"/>
    <path d="M0 0C13.2533 0 24 10.747 24 24H0V0Z" fill="currentColor"/>
    <path d="M24 48C37.253 48 48 37.253 48 24H24V48Z" fill="currentColor"/>
    <path d="M48 24C48 10.747 37.253 0 24 0V24H48Z" fill="currentColor"/>
  </svg>
);

export const FilmcoreIcon2 = () => (
  <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 48C10.7467 48 0 37.253 0 24H24V48Z" fill="currentColor"/>
    <path d="M48 24C48 10.747 37.253 0 24 0V24H48Z" fill="currentColor"/>
  </svg>
);

export const FilmcoreIcon3 = () => (
  <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 24H24H48V0C34.747 0 24 10.773 24 24C24 10.773 13.254 0 0 0V24ZM24 24H0C0 37.253 10.747 48 24 48C37.254 48 48 37.253 48 24H24Z" fill="currentColor"/>
  </svg>
);

export const FilmcoreIcon4 = () => (
  <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M48 24C48 10.747 37.253 0 24 0V24H48ZM24 48C24 34.747 13.253 24 0 24V48H24ZM24 48C37.253 48 48 37.253 48 24H24V48ZM0 24C0 10.747 10.747 0 24 0V24H0Z" fill="currentColor"/>
  </svg>
);

export const FilmcoreIcon5 = () => (
  <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 23.973C23.985 10.732 13.244 0 0 0V24H24.027C10.787 24.015 0.055 34.756 0.055 48H24.055V24.027C24.069 37.268 34.81 48 48.055 48V24H24.082C37.323 23.985 48.055 13.244 48.055 0H24.055V23.973H24Z" fill="currentColor"/>
  </svg>
);

export const FilmcoreIcon6 = () => (
  <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0C0 13.253 10.747 24 24 24H48V0C34.75 0 24.006 10.741 24 23.99V0H0ZM24 24C37.254 24 48 34.747 48 48H24V24Z" fill="currentColor"/>
  </svg>
);

export const FilmcoreIcon7 = () => (
  <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 24V0H48C48 13.253 37.253 24 24 24Z" fill="currentColor"/>
    <path d="M48 48H24V24C37.253 24 48 34.773 48 48Z" fill="currentColor"/>
    <path d="M0 48H24V24C10.747 24 0 34.773 0 48Z" fill="currentColor"/>
    <path d="M0 0H24V24C10.747 24 0 13.253 0 0Z" fill="currentColor"/>
  </svg>
);

export const FilmcoreIcon8 = () => (
  <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0L0 24L0 48C13.253 48 24 37.253 24 24L24 48L48 48C48 34.747 37.253 24 24 24C37.253 24 48 13.253 48 0L24 0L24 24C24 10.747 13.253 0 0 0Z" fill="currentColor"/>
  </svg>
);

export const FilmcoreIcon9 = () => (
  <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C24 13.253 34.747 24 48 24V0H24ZM24 0H0V24C13.254 24 24 13.253 24 0ZM24 47.993C24 34.743 13.247 24 0 24V48H24H48V24C34.747 24 24.007 34.743 24 47.993Z" fill="currentColor"/>
  </svg>
);

export const FilmcoreIcon10 = () => (
  <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C10.747 0 0 10.747 0 24H24.055C10.815 24.049 0.055 34.777 0.055 48H24.055V24.01C24.065 37.259 34.805 48 48.055 48V24H24.145C37.385 23.951 48.055 13.223 48.055 0H24.055V0H24Z" fill="currentColor"/>
  </svg>
);

// Icons grid component
const FilmcoreIcons = () => {
  // Array of icon components with their themed colors and descriptions
  const iconData = [
    { Icon: FilmcoreIcon1, theme: 'fire', colors: 'from-red-600 via-orange-500 to-yellow-400' },
    { Icon: FilmcoreIcon2, theme: 'vent', colors: 'from-sky-500 via-cyan-400 to-blue-500' },
    { Icon: FilmcoreIcon3, theme: 'tulipan', colors: 'from-pink-500 via-purple-400 to-fuchsia-500' },
    { Icon: FilmcoreIcon4, theme: 'cloud', colors: 'from-sky-300 via-blue-100 to-gray-100' },
    { Icon: FilmcoreIcon5, theme: 'vortex', colors: 'from-indigo-600 via-purple-500 to-pink-500' },
    { Icon: FilmcoreIcon6, theme: 'boomerang', colors: 'from-amber-500 via-yellow-400 to-orange-600' },
    { Icon: FilmcoreIcon7, theme: 'hourglass', colors: 'from-amber-200 via-yellow-300 to-orange-200' },
    { Icon: FilmcoreIcon8, theme: 'moon', colors: 'from-indigo-900 via-purple-800 to-indigo-400' },
    { Icon: FilmcoreIcon9, theme: 'curtains', colors: 'from-rose-200 via-pink-200 to-purple-200' },
    { Icon: FilmcoreIcon10, theme: 'tie', colors: 'from-gray-900 via-slate-800 to-gray-700' },
  ];

  return (
    <div className="icon-grid">
      {iconData.map(({ Icon, theme, colors }, index) => (
        <div 
          key={index} 
          className="icon-item group animate-pulse-slow"
          style={{ 
            animationDelay: `${index * 0.2}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        >
          <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-110">
            <div 
              className={`absolute inset-0 bg-gradient-to-br ${colors} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-xl -z-10`}
            ></div>
            <div className={`relative transition-all duration-300 text-black group-hover:text-white`}>
              <Icon />
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-medium capitalize">
              {theme}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilmcoreIcons;
