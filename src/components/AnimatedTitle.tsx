
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
      title.appendChild(span);
    });
    
    // Add animation class after a delay
    setTimeout(() => {
      title.classList.add('animate-title', 'char-animation');
    }, delay);
    
  }, [text, delay]);
  
  return (
    <h1 ref={titleRef} className={className}>
      {text}
    </h1>
  );
};

export default AnimatedTitle;
