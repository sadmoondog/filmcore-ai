import React from 'react';

// Define the individual icon components
export const FilmcoreIcon1 = () => (
  <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 48C10.7467 48 0 37.253 0 24H24V48Z" fill="black"/>
    <path d="M0 0C13.2533 0 24 10.747 24 24H0V0Z" fill="black"/>
    <path d="M24 48C37.253 48 48 37.253 48 24H24V48Z" fill="black"/>
    <path d="M48 24C48 10.747 37.253 0 24 0V24H48Z" fill="black"/>
  </svg>
);

export const FilmcoreIcon2 = () => (
  <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 48C10.7467 48 0 37.253 0 24H24V48Z" fill="black"/>
    <path d="M48 24C48 10.747 37.253 0 24 0V24H48Z" fill="black"/>
  </svg>
);

export const FilmcoreIcon3 = () => (
  <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 24H24H48V0C34.747 0 24 10.773 24 24C24 10.773 13.254 0 0 0V24ZM24 24H0C0 37.253 10.747 48 24 48C37.254 48 48 37.253 48 24H24Z" fill="black"/>
  </svg>
);

export const FilmcoreIcon4 = () => (
  <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M48 24C48 10.747 37.253 0 24 0V24H48ZM24 48C24 34.747 13.253 24 0 24V48H24ZM24 48C37.253 48 48 37.253 48 24H24V48ZM0 24C0 10.747 10.747 0 24 0V24H0Z" fill="black"/>
  </svg>
);

export const FilmcoreIcon5 = () => (
  <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 23.973C23.985 10.732 13.244 0 0 0V24H24.027C10.787 24.015 0.055 34.756 0.055 48H24.055V24.027C24.069 37.268 34.81 48 48.055 48V24H24.082C37.323 23.985 48.055 13.244 48.055 0H24.055V23.973H24Z" fill="black"/>
  </svg>
);

export const FilmcoreIcon6 = () => (
  <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0C0 13.253 10.747 24 24 24H48V0C34.75 0 24.006 10.741 24 23.99V0H0ZM24 24C37.254 24 48 34.747 48 48H24V24Z" fill="black"/>
  </svg>
);

export const FilmcoreIcon7 = () => (
  <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 24V0H48C48 13.253 37.253 24 24 24Z" fill="black"/>
    <path d="M48 48H24V24C37.253 24 48 34.773 48 48Z" fill="black"/>
    <path d="M0 48H24V24C10.747 24 0 34.773 0 48Z" fill="black"/>
    <path d="M0 0H24V24C10.747 24 0 13.253 0 0Z" fill="black"/>
  </svg>
);

export const FilmcoreIcon8 = () => (
  <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0L0 24L0 48C13.253 48 24 37.253 24 24L24 48L48 48C48 34.747 37.253 24 24 24C37.253 24 48 13.253 48 0L24 0L24 24C24 10.747 13.253 0 0 0Z" fill="black"/>
  </svg>
);

export const FilmcoreIcon9 = () => (
  <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C24 13.253 34.747 24 48 24V0H24ZM24 0H0V24C13.254 24 24 13.253 24 0ZM24 47.993C24 34.743 13.247 24 0 24V48H24H48V24C34.747 24 24.007 34.743 24 47.993Z" fill="black"/>
  </svg>
);

export const FilmcoreIcon10 = () => (
  <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C10.747 0 0 10.747 0 24H24.055C10.815 24.049 0.055 34.777 0.055 48H24.055V24.01C24.065 37.259 34.805 48 48.055 48V24H24.145C37.385 23.951 48.055 13.223 48.055 0H24.055V0H24Z" fill="black"/>
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

