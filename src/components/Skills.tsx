
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "JavaScript", "Java", "Python", "Kotlin"]
    },
    {
      title: "Frontend",
      skills: ["HTML/CSS", "React", "Bootstrap", "Tailwind CSS"]
    },
    {
      title: "Backend",
      skills: ["Spring Boot", "JPA", "JDBC", "Hibernate", "REST APIs", "Node.js", "Express.js"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB", "Firebase Firestore"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Android Studio", "Git/Github", "Maven"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem-Solving", "Team Collaboration", "Project Management", "Adaptability"]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-blue mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-portfolio-purple mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A comprehensive set of technical and soft skills that I've developed throughout my academic and professional journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-semibold mb-4 text-portfolio-blue">{category.title}</h3>
              <Separator className="mb-4" />
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="bg-gray-100 hover:bg-portfolio-purple/20 text-gray-800 py-1.5"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
