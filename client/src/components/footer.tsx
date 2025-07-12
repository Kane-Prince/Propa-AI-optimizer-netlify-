import { Bot } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-gold-gradient rounded-lg flex items-center justify-center">
            <Bot className="text-black w-5 h-5" />
          </div>
          <span className="text-lg font-bold text-gold-gradient">PROPA AI SYSTEMS</span>
        </div>
        <p className="text-gray-400 text-sm">
          © 2024 Propa AI Systems. Finance. Automated. Enterprise-grade AI solutions for Fortune 500 companies.
        </p>
      </div>
    </footer>
  );
}
