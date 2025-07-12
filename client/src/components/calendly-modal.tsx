import { useEffect } from "react";
import { X, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-zinc-800 rounded-xl p-8 max-w-md w-full border border-gray-700 transform transition-all duration-300 scale-100 opacity-100">
        <div className="flex justify-between items-start mb-6">
          <div className="text-center flex-1">
            <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="text-black text-2xl w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Book Your AI Strategy Call</h3>
            <p className="text-gray-300">Get your personalized implementation roadmap in 30 minutes</p>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="bg-black/50 p-6 rounded-lg mb-6">
          <div className="flex items-center mb-4">
            <CheckCircle className="text-yellow-500 mr-3 w-5 h-5" />
            <span className="text-sm">Identify your biggest AI opportunities</span>
          </div>
          <div className="flex items-center mb-4">
            <CheckCircle className="text-yellow-500 mr-3 w-5 h-5" />
            <span className="text-sm">Get ROI projections for your organization</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="text-yellow-500 mr-3 w-5 h-5" />
            <span className="text-sm">Receive implementation timeline & next steps</span>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 mb-6 text-center">
          <p className="text-black font-semibold mb-2">Select Your Preferred Time</p>
          <a 
            href="https://calendly.com/princekene20/propaaisystems-meeting" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gold-gradient text-black px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-block"
          >
            Open Calendly Booking
          </a>
        </div>

        <Button 
          onClick={onClose}
          variant="outline"
          className="w-full border border-gray-600 text-gray-300 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300"
        >
          Close
        </Button>
      </div>
    </div>
  );
}
