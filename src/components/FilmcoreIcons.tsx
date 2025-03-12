
import React from 'react';

// Define the individual icon components
export const FilmcoreIcon1 = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0C0 55.228 44.772 100 100 100V0H0Z" fill="black"/>
  </svg>
);

export const FilmcoreIcon2 = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 0C100 55.228 55.228 100 0 100V0H100Z" fill="black"/>
  </svg>
);

export const FilmcoreIcon3 = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 100C0 44.772 44.772 0 100 0V100H0Z" fill="black"/>
  </svg>
);

export const FilmcoreIcon4 = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 100C100 44.772 55.228 0 0 0V100H100Z" fill="black"/>
  </svg>
);

export const FilmcoreIcon5 = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0L100 0L100 100L0 100L0 0Z" fill="none"/>
    <path d="M0 0L50 0L50 50L0 50L0 0Z" fill="black"/>
    <path d="M50 50L100 50L100 100L50 100L50 50Z" fill="black"/>
  </svg>
);

export const FilmcoreIcon6 = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0L100 0L100 100L0 100L0 0Z" fill="none"/>
    <path d="M50 0L100 0L100 50L50 50L50 0Z" fill="black"/>
    <path d="M0 50L50 50L50 100L0 100L0 50Z" fill="black"/>
  </svg>
);

export const FilmcoreIcon7 = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0L100 0L100 100L0 100L0 0Z" fill="none"/>
    <circle cx="50" cy="50" r="50" fill="black"/>
    <circle cx="50" cy="50" r="25" fill="white"/>
  </svg>
);

export const FilmcoreIcon8 = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0L0 100L50 50L0 0Z" fill="black"/>
    <path d="M100 0L100 100L50 50L100 0Z" fill="black"/>
  </svg>
);

export const FilmcoreIcon9 = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" fill="none"/>
    <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="20"/>
    <path d="M25 25L75 75M75 25L25 75" stroke="black" strokeWidth="20" strokeLinecap="round"/>
  </svg>
);

export const FilmcoreIcon10 = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 0C100 55.228 55.228 100 0 100H100V0Z" fill="black"/>
  </svg>
);

// Icons grid component
const FilmcoreIcons = () => {
  const icons = [
    FilmcoreIcon1,
    FilmcoreIcon2,
    FilmcoreIcon3,
    FilmcoreIcon4,
    FilmcoreIcon5,
    FilmcoreIcon6,
    FilmcoreIcon7,
    FilmcoreIcon8,
    FilmcoreIcon9,
    FilmcoreIcon10,
  ];

  return (
    <div className="icon-grid">
      {icons.map((Icon, index) => (
        <div 
          key={index} 
          className="icon-item animate-pulse-slow"
          style={{ 
            animationDelay: `${index * 0.2}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        >
          <Icon />
        </div>
      ))}
    </div>
  );
};

export default FilmcoreIcons;
