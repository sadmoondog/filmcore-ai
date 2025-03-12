
import React from 'react';

// Define the individual icon components
export const FilmcoreIcon1 = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" fill="black"/>
  </svg>
);

export const FilmcoreIcon2 = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" fill="black"/>
  </svg>
);

export const FilmcoreIcon3 = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 0L100 86.6025H0L50 0Z" fill="black"/>
  </svg>
);

export const FilmcoreIcon4 = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="80" height="80" stroke="black" strokeWidth="20"/>
  </svg>
);

export const FilmcoreIcon5 = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0L100 0L100 100L0 100L0 0Z" fill="black"/>
    <path d="M25 25L75 25L75 75L25 75L25 25Z" fill="white"/>
  </svg>
);

export const FilmcoreIcon6 = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" fill="black"/>
    <path d="M25 0L50 50L25 100L0 100L0 0L25 0Z" fill="white"/>
    <path d="M75 0L100 0L100 100L75 100L50 50L75 0Z" fill="white"/>
  </svg>
);

export const FilmcoreIcon7 = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 0L93.3013 25V75L50 100L6.69873 75V25L50 0Z" fill="black"/>
  </svg>
);

export const FilmcoreIcon8 = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50V100H0V50Z" fill="black"/>
  </svg>
);

export const FilmcoreIcon9 = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 25C0 11.1929 11.1929 0 25 0H75C88.8071 0 100 11.1929 100 25V75C100 88.8071 88.8071 100 75 100H25C11.1929 100 0 88.8071 0 75V25Z" fill="black"/>
    <path d="M25 25C25 25 25 25 25 25H75C75 25 75 25 75 25V75C75 75 75 75 75 75H25C25 75 25 75 25 75V25Z" stroke="white" strokeWidth="10"/>
  </svg>
);

export const FilmcoreIcon10 = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.0001 14.6447L85.3554 75L75.0001 85.3553L14.6447 25L25.0001 14.6447Z" fill="black"/>
    <path d="M85.3554 25L25.0001 85.3553L14.6447 75L75.0001 14.6447L85.3554 25Z" fill="black"/>
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
