import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { CheckIcon, Loader2 } from 'lucide-react';

const EmailCollectionForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [zapierWebhookUrl, setZapierWebhookUrl] = useState('https://hooks.zapier.com/hooks/catch/22039706/2l4l22c/');
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
    
    try {
      const response = await fetch(zapierWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors', // Required for cross-origin requests
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
          source: window.location.origin
        })
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

  const handleZapierSetup = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = prompt("Enter your Zapier webhook URL:", zapierWebhookUrl);
    if (url) {
      setZapierWebhookUrl(url);
      localStorage.setItem('filmcore_zapier_webhook_url', url);
      toast({
        title: "Webhook URL saved",
        description: "Your Zapier webhook URL has been saved."
      });
    }
  };

  React.useEffect(() => {
    const savedUrl = localStorage.getItem('filmcore_zapier_webhook_url');
    if (savedUrl) {
      setZapierWebhookUrl(savedUrl);
    } else {
      localStorage.setItem('filmcore_zapier_webhook_url', zapierWebhookUrl);
    }
  }, [zapierWebhookUrl]);

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
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </span>
            ) : isSuccess ? (
              <span className="flex items-center justify-center">
                <CheckIcon className="mr-2 h-4 w-4" />
                Tuned
              </span>
            ) : (
              "Stay Tuned"
            )}
          </div>
        </button>
      </form>
      
      {process.env.NODE_ENV === 'development' && (
        <div className="mt-8 text-center">
          <button 
            onClick={handleZapierSetup}
            className="text-xs underline opacity-50 hover:opacity-100"
          >
            Configure Zapier Webhook
          </button>
        </div>
      )}
    </div>
  );
};

export default EmailCollectionForm;
