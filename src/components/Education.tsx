
import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Education = () => {
  const education = [
    {
      institution: "Lovely Professional University",
      degree: "B.Tech - CSE (Hons.) Full Stack Software Development",
      period: "Since August 2022",
      location: "Punjab, India",
      grade: "CGPA: 8.62"
    },
    {
      institution: "Apeejay School",
      degree: "Intermediate",
      period: "April 2020 - March 2022",
      location: "Jalandhar, Punjab, India",
      grade: "Percentage: 87.6%"
    },
    {
      institution: "Apeejay School",
      degree: "Matriculation",
      period: "April 2018 - March 2020",
      location: "Jalandhar, Punjab, India",
      grade: "Percentage: 91.6%"
    }
  ];

  const certifications = [
    {
      name: "The Bits and Bytes of Computer Networking",
      issuer: "Coursera",
      date: "April 2024"
    },
    {
      name: "Prompt Engineering for ChatGPT",
      issuer: "Coursera",
      date: "February 2024"
    },
    {
      name: "Become a Full-Stack Web Developer",
      issuer: "LinkedIn Learning",
      date: "February 2023"
    },
    {
      name: "CyberShikshaa Fundamentals",
      issuer: "Quick Heal Academy, Microsoft & DSCI",
      date: "February 2023"
    },
    {
      name: "Python (Basic)",
      issuer: "HackerRank",
      date: "November 2022"
    }
  ];

  const achievements = [
    {
      description: "Solved 300+ problems on LeetCode, GFG and CodingNinjas",
      date: "Till December 2024"
    },
    {
      description: "Awarded a Gold Badge for C language on HackerRank",
      date: "July 2023"
    },
    {
      description: "Achieved a Silver Badge for Python on HackerRank",
      date: "December 2022"
    }
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-blue mb-4">Education & Achievements</h2>
          <div className="w-24 h-1 bg-portfolio-purple mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-portfolio-blue">
              <GraduationCap size={24} /> 
              Education
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="text-lg font-semibold text-portfolio-blue">{edu.institution}</h4>
                    <p className="text-gray-700 font-medium mt-1">{edu.degree}</p>
                    
                    <div className="flex flex-col sm:flex-row sm:justify-between mt-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2 sm:mt-0">
                        <Award size={16} />
                        <span>{edu.grade}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-500 text-sm mt-2">{edu.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-portfolio-blue">
                <Award size={24} />
                Certifications
              </h3>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <ul className="space-y-4">
                  {certifications.map((cert, index) => (
                    <li key={index}>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-gray-800">{cert.name}</p>
                          <p className="text-gray-600 text-sm">{cert.issuer}</p>
                        </div>
                        <span className="text-gray-500 text-sm">{cert.date}</span>
                      </div>
                      {index < certifications.length - 1 && <Separator className="mt-4" />}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-portfolio-blue">
                <Award size={24} />
                Achievements
              </h3>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <li key={index}>
                      <div className="flex justify-between items-start">
                        <p className="font-medium text-gray-800">{achievement.description}</p>
                        <span className="text-gray-500 text-sm">{achievement.date}</span>
                      </div>
                      {index < achievements.length - 1 && <Separator className="mt-4" />}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
