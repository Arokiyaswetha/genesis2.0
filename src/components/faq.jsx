import { useState } from 'react';

const faqs = [
  {
    question: "Is lunch provided?",
    answer: "Lunch will be provided only for participants from other colleges and the event volunteers."
  },
  {
    question: "What if one of our team members is missing?",
    answer: "All the participants must be present physically for the event."
  },
  {
    question: "Will hardcopy certificates be provided for all participants?",
    answer: "Participants who are physically present and presenting their projects will receive the hardcopy certificates."
  },
  {
    question: "Do we need to bring our laptops or other materials?",
    answer: "Yes, participants are expected to bring their own laptops and necessary accessories for coding or project-based events."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 text-white">
      <h2 className="text-3xl font-bold text-center text-yellow-400 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-blue-500/50 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 bg-blue-800 hover:bg-blue-700 transition flex justify-between items-center"
            >
              <span className="font-medium">{faq.question}</span>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className="px-6 py-4 bg-blue-900 text-blue-100">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
