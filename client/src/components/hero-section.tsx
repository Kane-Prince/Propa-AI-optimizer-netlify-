import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

interface HeroSectionProps {
  onOpenModal: () => void;
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  const scrollToSystems = () => {
    document.getElementById('systems')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-24 pb-16 bg-dark-gradient min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Stop Building
              <span className="text-gold-gradient"> AI Tools.</span><br />
              Start Building <span className="text-gold-gradient">AI Systems.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Fortune 500 CFOs trust our complete AI systems to cut forecast cycles by 50%, reduce compliance costs by 30%, and eliminate 80% of manual errors. Get measurable ROI in 4-12 months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={onOpenModal}
                className="bg-gold-gradient text-black px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Your AI Strategy Call
              </Button>
              <Button 
                onClick={scrollToSystems}
                variant="outline"
                className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300"
              >
                See Our Systems
              </Button>
            </div>
            <div className="mt-8 flex items-center text-sm text-gray-400">
              <Shield className="text-yellow-500 mr-2 w-5 h-5" />
              <span>Enterprise-grade security • SOC 2 Compliant • 99.9% Uptime SLA</span>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Executive team in meeting discussing financial strategy" 
              className="rounded-xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gold-gradient opacity-10 rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
