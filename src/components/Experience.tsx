
import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "SDE Intern",
      company: "Magna Opus Software Services Pvt. Ltd.",
      period: "December 2024 - January 2025",
      description: [
        "Assisted in software development projects, debugging & testing modules.",
        "Worked on database queries & optimizations in MySQL.",
        "Gained exposure to full-stack development workflows."
      ]
    },
    {
      title: "Training Program",
      company: "LinuxSocials",
      period: "June 2024 - July 2024",
      description: [
        "Completed training in Data Structures and Algorithms (DSA).",
        "Practiced problem-solving using C++/Java/Python.",
        "Enhanced logical thinking and competitive programming skills."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-blue mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-portfolio-purple mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="mb-10 timeline-item"
            >
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-portfolio-blue">{exp.title}</h3>
                    <div className="flex items-center text-gray-600 mt-1">
                      <Briefcase size={18} className="mr-2" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500 mt-2 md:mt-0">
                    <Calendar size={18} className="mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
