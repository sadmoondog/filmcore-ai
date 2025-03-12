
import React, { useEffect, useState } from 'react';
import EmailCollectionForm from '@/components/EmailCollectionForm';
import FilmcoreIcons from '@/components/FilmcoreIcons';
import AnimatedTitle from '@/components/AnimatedTitle';
import { Mail } from 'lucide-react';

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    
    // Update document title
    document.title = "FILMCORE - For Filmmakers by Filmmakers";
    
    // Animation sequence for elements
    const timeout = setTimeout(() => {
      const taglineEl = document.getElementById('tagline');
      if (taglineEl) taglineEl.classList.add('opacity-100', 'translate-y-0');
    }, 1000);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between px-6 py-12 md:py-16 max-w-7xl mx-auto">
      <header className={`transition-opacity duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <AnimatedTitle 
          text="FILMCORE" 
          className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-center"
          delay={300}
        />
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center py-10 md:py-16">
        <div 
          id="tagline"
          className="text-lg md:text-xl tracking-wide text-center mb-12 md:mb-16 opacity-0 translate-y-4 transition-all duration-1000 ease-out"
        >
          FOR FILMMAKERS BY FILMMAKERS
        </div>
        
        <div className="w-full max-w-5xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
          <FilmcoreIcons />
        </div>
        
        <div className="mt-16 w-full max-w-md mx-auto opacity-0 animate-fade-up" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
          <EmailCollectionForm />
        </div>
      </main>
      
      <footer className="mt-auto pt-8 opacity-0 animate-fade-in" style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}>
        <a 
          href="mailto:HELLO@FILMCORE.AI" 
          className="flex items-center justify-center gap-2 text-filmcore-black hover:text-filmcore-gray transition-colors py-2"
        >
          <Mail size={16} />
          <span className="text-sm md:text-base tracking-wide">HELLO@FILMCORE.AI</span>
        </a>
      </footer>
    </div>
  );
};

export default Index;
