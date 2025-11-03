import { FaSearch, FaComments, FaGraduationCap } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      icon: <FaSearch className="text-primary text-4xl" />,
      title: "Browse Skills",
      desc: "Explore thousands of skills and find the perfect one that matches your learning goals."
    },
    {
      id: 2,
      icon: <FaComments className="text-primary text-4xl" />,
      title: "Connect Easily",
      desc: "Chat directly with skill providers to discuss lessons, pricing, and schedules."
    },
    {
      id: 3,
      icon: <FaGraduationCap className="text-primary text-4xl" />,
      title: "Learn & Grow",
      desc: "Start your lessons and level up your skills with guidance from experts."
    }
  ];

  return (
    <section className="py-16 bg-white rounded-2xl" id="how-it-works">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-600 mb-12">
          Get started in just three simple steps and begin your learning journey today.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map(step => (
            <div
              key={step.id}
              className="bg-[#E1D0B3] rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition"
            >
              <div className="bg-primary/10 p-5 rounded-full mb-4 flex items-center justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
