import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How secure is our financial data during AI implementation?",
      answer: "We maintain enterprise-grade security with SOC 2 Type II compliance, end-to-end encryption, and zero-trust architecture. Your data never leaves your secure environment during processing, and we provide complete audit trails for compliance requirements."
    },
    {
      question: "How complex is integration with our existing ERP systems?",
      answer: "Our systems are designed for seamless integration with SAP, Oracle, NetSuite, and other major ERP platforms. We use API-first architecture and provide dedicated integration specialists to ensure minimal disruption to your current operations."
    },
    {
      question: "What if the ROI projections don't materialize?",
      answer: "We provide performance guarantees and ROI assurance based on clearly defined KPIs. Our implementations include regular performance reviews and optimization cycles. If projected benefits aren't achieved within the agreed timeframe, we provide additional optimization at no cost."
    },
    {
      question: "How long does implementation typically take?",
      answer: "Implementation timelines vary by system complexity and organizational readiness. Typically, our AI Financial Intelligence System takes 8-12 weeks, Compliance & Risk Shield takes 6-10 weeks, and Operations Automation Suite takes 4-8 weeks. We provide detailed project timelines during consultation."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300">Common concerns about AI implementation in enterprise finance.</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-zinc-800 border border-gray-700 rounded-xl p-6 hover:border-yellow-500/50 transition-colors duration-300">
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center"
              >
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <ChevronDown className={`text-yellow-500 transform transition-transform duration-300 w-6 h-6 ${openFAQ === index ? 'rotate-180' : ''}`} />
              </button>
              {openFAQ === index && (
                <div className="mt-4 text-gray-300">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
