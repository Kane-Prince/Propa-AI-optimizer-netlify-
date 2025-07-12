import { TrendingUp, Shield, Settings, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AISystemsProps {
  onOpenModal: () => void;
}

export default function AISystems({ onOpenModal }: AISystemsProps) {
  const systems = [
    {
      icon: TrendingUp,
      title: "AI Financial Intelligence System",
      description: "Real-time predictive insights, automated forecasting, and intelligent reconciliation for enterprise finance teams.",
      features: [
        "AI Analytics Engine with real-time dashboards",
        "ML-driven scenario planning & forecasting",
        "Auto-reconciliation with anomaly detection",
        "SAP, Oracle, NetSuite integration"
      ],
      metrics: [
        { value: "50%", label: "Faster Cycles" },
        { value: "30%", label: "Better Accuracy" }
      ]
    },
    {
      icon: Shield,
      title: "AI Compliance & Risk Shield",
      description: "Automated compliance monitoring, fraud detection, and regulatory reporting for risk management.",
      features: [
        "Compliance AI with regulatory monitoring",
        "Real-time fraud detection engine",
        "AI-driven expense management",
        "Automated audit trail generation"
      ],
      metrics: [
        { value: "30%", label: "Lower Costs" },
        { value: "60%", label: "Less Fraud" }
      ]
    },
    {
      icon: Settings,
      title: "AI Operations Automation Suite",
      description: "Automate administrative workflows, centralize data, and optimize resource allocation for finance teams.",
      features: [
        "RPA bots for repetitive processes",
        "AI CRM integration & data centralization",
        "Resource optimization engine",
        "Custom workflow integration layer"
      ],
      metrics: [
        { value: "50%", label: "Cost Reduction" },
        { value: "80%", label: "Fewer Errors" }
      ]
    }
  ];

  return (
    <section id="systems" className="py-16 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Complete AI Systems, Not Standalone Tools</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our integrated AI systems work together to transform your entire finance operation, delivering measurable ROI in 4-12 months.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {systems.map((system, index) => (
            <div key={index} className="bg-zinc-800 p-8 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gold-gradient rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <system.icon className="text-black text-2xl w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-500">{system.title}</h3>
              <p className="text-gray-300 mb-6">{system.description}</p>
              
              <div className="space-y-4 mb-6">
                {system.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <CheckCircle className="text-yellow-500 mr-3 w-5 h-5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-black/50 rounded-lg">
                {system.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl font-bold text-yellow-500">{metric.value}</div>
                    <div className="text-xs text-gray-400">{metric.label}</div>
                  </div>
                ))}
              </div>

              <Button 
                onClick={onOpenModal}
                className="w-full bg-gold-gradient text-black py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Get Implementation Plan
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={onOpenModal}
            className="bg-gold-gradient text-black px-12 py-4 rounded-lg text-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Schedule Your AI Systems Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
