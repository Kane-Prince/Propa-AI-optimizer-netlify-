import { Clock, AlertTriangle, Users } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: Clock,
      title: "Delayed Decision Making",
      description: "Manual forecasting and reconciliation processes create 2-week delays in critical financial insights, causing missed opportunities and reactive decision-making.",
      color: "text-red-400"
    },
    {
      icon: AlertTriangle,
      title: "Compliance & Risk Exposure",
      description: "Manual compliance monitoring and expense management expose your organization to regulatory fines, fraud losses, and audit failures that damage reputation.",
      color: "text-red-400"
    },
    {
      icon: Users,
      title: "Team Burnout & Scaling Issues",
      description: "Finance teams spend 60% of time on repetitive tasks instead of strategic analysis, limiting growth potential and causing high-value talent to leave.",
      color: "text-red-400"
    }
  ];

  return (
    <section className="py-16 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Your Finance Team Is Drowning in Manual Work</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            While your competitors leverage AI systems for competitive advantage, your team struggles with outdated processes that limit growth and increase risk.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-zinc-800 p-8 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-colors duration-300">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
                <problem.icon className={`${problem.color} text-2xl w-8 h-8`} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-red-400">{problem.title}</h3>
              <p className="text-gray-300">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
