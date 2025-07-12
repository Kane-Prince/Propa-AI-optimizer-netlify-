export default function CaseStudies() {
  const mainCaseStudies = [
    {
      company: "Unilever",
      logo: "U",
      logoColor: "bg-blue-600",
      system: "AI Financial Intelligence System",
      challenge: "Manual forecasting led to slow reporting and missed market shifts. We integrated AI-powered forecasting with their SAP ERP system.",
      results: [
        { metric: "50%", label: "Faster Forecast Cycles" },
        { metric: "25%", label: "Improved Accuracy" }
      ],
      quote: "Enabled faster, data-driven decisions and improved board confidence."
    },
    {
      company: "HSBC",
      logo: "H",
      logoColor: "bg-red-600",
      system: "AI Compliance & Risk Shield",
      challenge: "Rising regulatory complexity and costly manual reporting. We deployed AI and NLP for automated compliance monitoring.",
      results: [
        { metric: "30%", label: "Lower Compliance Costs" },
        { metric: "40%", label: "Fewer Errors" }
      ],
      quote: "Enhanced audit readiness and reduced risk of fines."
    }
  ];

  const additionalCaseStudies = [
    {
      company: "American Express",
      logo: "AX",
      logoColor: "bg-blue-500",
      metric: "60% Less Fraud",
      description: "AI expense management system"
    },
    {
      company: "Salesforce",
      logo: "SF",
      logoColor: "bg-blue-400",
      metric: "60% Faster",
      description: "AI onboarding automation"
    },
    {
      company: "UiPath",
      logo: "UI",
      logoColor: "bg-orange-500",
      metric: "80% Fewer Errors",
      description: "RPA in finance operations"
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Fortune 500 Results Speak for Themselves</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how industry leaders transformed their finance operations with our complete AI systems.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {mainCaseStudies.map((study, index) => (
            <div key={index} className="bg-zinc-800 p-8 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${study.logoColor} rounded-lg flex items-center justify-center mr-4`}>
                  <span className="text-white font-bold text-lg">{study.logo}</span>
                </div>
                <h3 className="text-2xl font-bold">{study.company}</h3>
              </div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-500">{study.system}</h4>
              <p className="text-gray-300 mb-6">{study.challenge}</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {study.results.map((result, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl font-bold text-yellow-500">{result.metric}</div>
                    <div className="text-sm text-gray-400">{result.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400 italic">"{study.quote}"</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {additionalCaseStudies.map((study, index) => (
            <div key={index} className="bg-zinc-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className={`w-10 h-10 ${study.logoColor} rounded-lg flex items-center justify-center mr-3`}>
                  <span className="text-white font-bold">{study.logo}</span>
                </div>
                <h3 className="text-lg font-bold">{study.company}</h3>
              </div>
              <div className="text-2xl font-bold text-yellow-500 mb-2">{study.metric}</div>
              <p className="text-sm text-gray-400">{study.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
