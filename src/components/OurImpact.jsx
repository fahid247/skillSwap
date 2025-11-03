import React from "react";
import { FaUsers, FaChalkboardTeacher, FaBookOpen, FaGlobe } from "react-icons/fa";

export default function OurImpact() {
  const stats = [
    {
      icon: <FaUsers className="text-5xl text-primary mb-4" />,
      value: "10K+",
      label: "Active Learners",
    },
    {
      icon: <FaChalkboardTeacher className="text-5xl text-primary mb-4" />,
      value: "500+",
      label: "Skill Providers",
    },
    {
      icon: <FaBookOpen className="text-5xl text-primary mb-4" />,
      value: "120+",
      label: "Skill Categories",
    },
    {
      icon: <FaGlobe className="text-5xl text-primary mb-4" />,
      value: "25+",
      label: "Countries Reached",
    },
  ];

  return (
    <section className="py-16 bg-white rounded-2xl text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#E1D0B3] p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              {stat.icon}
              <h3 className="text-4xl font-bold text-primary">{stat.value}</h3>
              <p className="mt-2 text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
