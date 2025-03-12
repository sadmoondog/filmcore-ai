
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
      span.className = 'relative inline-block transition-all duration-300';
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
        
        if (distance < 0.1) { // Reduced from 0.2 to 0.1 for smaller beam
          // Create gray-yellow gradient projector light effect
          span.style.textShadow = `
            0 0 10px rgba(142, 145, 150, 0.8),
            0 0 20px rgba(254, 247, 205, 0.8),
            0 0 30px rgba(254, 247, 205, 0.6)
          `;
          span.style.color = '#403E43'; // Keep letters visible with a dark gray color
        } else {
          span.style.textShadow = '';
          span.style.color = '';
        }
      });
    };

    title.addEventListener('mousemove', handleMouseMove);
    
    // Reset effect when mouse leaves
    title.addEventListener('mouseleave', () => {
      Array.from(title.children).forEach((char) => {
        const span = char as HTMLSpanElement;
        span.style.textShadow = '';
        span.style.color = '';
      });
    });
    
    // Add animation class after delay
    setTimeout(() => {
      title.classList.add('animate-title', 'char-animation');
    }, delay);

    return () => {
      title.removeEventListener('mousemove', handleMouseMove);
      title.removeEventListener('mouseleave', () => {});
    };
  }, [text, delay]);
  
  return (
    <h1 ref={titleRef} className={`${className} relative cursor-default`}>
      {text}
    </h1>
  );
};

export default AnimatedTitle;
