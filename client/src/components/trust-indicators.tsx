import { Shield, Lock, TrendingUp, Users } from "lucide-react";

export default function TrustIndicators() {
  const indicators = [
    {
      icon: Shield,
      title: "SOC 2 Type II",
      description: "Certified security controls"
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "256-bit AES encryption"
    },
    {
      icon: TrendingUp,
      title: "99.9% Uptime SLA",
      description: "Guaranteed availability"
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Dedicated enterprise support"
    }
  ];

  return (
    <section className="py-16 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Enterprise-Grade Security & Compliance</h2>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {indicators.map((indicator, index) => (
            <div key={index} className="bg-zinc-800 p-6 rounded-xl border border-gray-700">
              <indicator.icon className="text-yellow-500 text-3xl mb-4 w-12 h-12 mx-auto" />
              <h3 className="font-semibold mb-2">{indicator.title}</h3>
              <p className="text-sm text-gray-400">{indicator.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
