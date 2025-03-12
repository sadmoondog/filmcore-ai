
import React, { useEffect, useRef } from 'react';

interface AnimatedTitleProps {
  text: string;
  className?: string;
  delay?: number;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ 
  text, 
  className = "",
  delay = 0 
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;
    
    // Split text into individual characters
    const characters = text.split('');
    title.innerHTML = '';
    
    // Create spans for each character
    characters.forEach((char) => {
      const span = document.createElement('span');
      span.innerText = char === ' ' ? '\u00A0' : char;
      span.className = 'hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-red-600 via-purple-500 to-blue-500 transition-all duration-300';
      title.appendChild(span);
    });

    const handleMouseMove = (e: MouseEvent) => {
      const chars = title.children;
      const titleRect = title.getBoundingClientRect();
      const mouseX = e.clientX - titleRect.left;
      const totalWidth = titleRect.width;
      const progress = mouseX / totalWidth;

      Array.from(chars).forEach((char, index) => {
        const span = char as HTMLSpanElement;
        const charPosition = span.offsetLeft / totalWidth;
        const distance = Math.abs(charPosition - progress);
        
        if (distance < 0.2) {
          span.style.backgroundImage = 'linear-gradient(to right, #f87171, #9333ea, #3b82f6)';
          span.style.backgroundSize = '200% 100%';
          span.style.backgroundPosition = `${(distance * 500)}% center`;
          span.classList.add('text-transparent', 'bg-clip-text');
        } else {
          span.style.backgroundImage = '';
          span.classList.remove('text-transparent', 'bg-clip-text');
        }
      });
    };

    title.addEventListener('mousemove', handleMouseMove);
    
    // Add animation class after delay
    setTimeout(() => {
      title.classList.add('animate-title', 'char-animation');
    }, delay);

    return () => {
      title.removeEventListener('mousemove', handleMouseMove);
    };
  }, [text, delay]);
  
  return (
    <h1 ref={titleRef} className={className}>
      {text}
    </h1>
  );
};

export default AnimatedTitle;
