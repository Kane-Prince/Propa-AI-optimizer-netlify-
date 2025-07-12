import { Button } from "@/components/ui/button";

interface FinalCTAProps {
  onOpenModal: () => void;
}

export default function FinalCTA({ onOpenModal }: FinalCTAProps) {
  return (
    <section className="py-16 bg-dark-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Finance Operations?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Join Fortune 500 companies already using our AI systems to gain competitive advantage. Get your personalized implementation roadmap in a 30-minute consultation.
        </p>
        
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=400" 
          alt="Modern office environment with financial technology" 
          className="rounded-xl shadow-2xl w-full h-64 object-cover mb-8" 
        />
        
        <Button 
          onClick={onOpenModal}
          className="bg-gold-gradient text-black px-12 py-4 rounded-lg text-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Book Your Strategy Call Now
        </Button>
        <p className="text-sm text-gray-400 mt-4">
          No commitment required • 30-minute consultation • Immediate implementation roadmap
        </p>
      </div>
    </section>
  );
}
