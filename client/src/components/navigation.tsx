import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  onOpenModal: () => void;
}

export default function Navigation({ onOpenModal }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gold-gradient rounded-lg flex items-center justify-center">
              <Bot className="text-black text-lg" />
            </div>
            <span className="text-xl font-bold text-gold-gradient">PROPA AI</span>
          </div>
          <Button 
            onClick={onOpenModal}
            className="bg-gold-gradient text-black px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Book Strategy Call
          </Button>
        </div>
      </div>
    </nav>
  );
}
