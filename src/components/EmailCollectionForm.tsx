
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { CheckIcon, Loader2 } from 'lucide-react';

const EmailCollectionForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [googleFormUrl, setGoogleFormUrl] = useState('');
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    if (!googleFormUrl) {
      toast({
        title: "Setup required",
        description: "Please set your Google Form URL in the form settings.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Extract the form ID and input ID from the Google Form URL
      // This is a simplified example - actual implementation will depend on your Google Form structure
      const formData = new FormData();
      formData.append('emailAddress', email); // Replace with your actual form field name
      
      // Submit to Google Form
      const response = await fetch(googleFormUrl, {
        method: 'POST',
        mode: 'no-cors', // Google Forms requires this
        body: formData
      });
      
      // Success state
      setIsSuccess(true);
      toast({
        title: "Thank you!",
        description: "We'll keep you updated on our launch.",
      });
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setEmail('');
        setIsSuccess(false);
      }, 2000);
      
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // For testing/setup - would be replaced with actual admin interface
  const handleGoogleFormSetup = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = prompt("Enter your Google Form submission URL:", googleFormUrl);
    if (url) {
      setGoogleFormUrl(url);
      localStorage.setItem('filmcore_google_form_url', url);
      toast({
        title: "Form URL saved",
        description: "Your Google Form URL has been saved."
      });
    }
  };

  // Load saved URL on component mount
  React.useEffect(() => {
    const savedUrl = localStorage.getItem('filmcore_google_form_url');
    if (savedUrl) {
      setGoogleFormUrl(savedUrl);
    }
  }, []);

  return (
    <div className="w-full max-w-md mx-auto mt-8 transition-all duration-300">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="email-input"
          disabled={isSubmitting || isSuccess}
        />
        
        <button 
          type="submit" 
          className={`submit-button mt-4 w-full relative overflow-hidden group transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${!email || isSubmitting || isSuccess ? 'opacity-70' : 'animate-pulse-subtle'}`}
          disabled={isSubmitting || isSuccess || !email}
        >
          {/* Button background animation */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Button content */}
          <div className="relative z-10">
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </span>
            ) : isSuccess ? (
              <span className="flex items-center justify-center">
                <CheckIcon className="mr-2 h-4 w-4" />
                Subscribed
              </span>
            ) : (
              "Stay Updated"
            )}
          </div>
        </button>
      </form>
      
      {/* Admin configuration - only shown in development mode */}
      {process.env.NODE_ENV === 'development' && (
        <div className="mt-8 text-center">
          <button 
            onClick={handleGoogleFormSetup}
            className="text-xs underline opacity-50 hover:opacity-100"
          >
            Configure Google Form URL
          </button>
        </div>
      )}
    </div>
  );
};

export default EmailCollectionForm;
