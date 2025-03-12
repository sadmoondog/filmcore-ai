
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { CheckIcon, Loader2 } from 'lucide-react';

const EmailCollectionForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
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
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mt-8 transition-all duration-300">
      <div className="relative">
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
          className="submit-button mt-4 w-full"
          disabled={isSubmitting || isSuccess || !email}
        >
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
        </button>
      </div>
    </form>
  );
};

export default EmailCollectionForm;
