
import React, { useState } from 'react';
import { ExternalLink, Github, Code, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Projects = () => {
  const projects = [
    {
      title: "Quiz Management System",
      description: "A role-based web application with separate logins and dashboards for Teachers and Students.",
      details: [
        "Teachers can create quizzes, allow registered students to appear for tests, and view results.",
        "Students can register for quizzes, enroll in courses, and attempt tests.",
        "All actions are restricted to a given timeline to maintain exam integrity."
      ],
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      period: "March 2025 - Present",
      category: "web"
    },
    {
      title: "Banking Management System",
      description: "A secure banking system with account creation, transactions, and fund transfers.",
      details: [
        "Integrated Spring Data JPA and implemented custom @Query methods, optimizing database queries by 25%"
      ],
      technologies: ["Spring Boot", "MySQL", "JPA", "React"],
      period: "January 2025",
      category: "web"
    },
    {
      title: "Portfolio App",
      description: "A personal portfolio mobile application featuring multiple sections for achievements, skills, certifications, and more.",
      details: [
        "Optimized dynamic content rendering in Kotlin by 15% for improved UX.",
        "Implemented MVVM architecture with ViewModel, LiveData, and Repository patterns for better maintenance.",
        "Integrated Firebase Firestore for real-time data storage and retrieval.",
        "Added dynamic image loading and a dark mode toggle for enhanced user experience."
      ],
      technologies: ["Kotlin", "Android SDK", "Firebase Firestore", "MVVM"],
      period: "February 2025",
      category: "mobile"
    },
    {
      title: "Bouquet Buying App",
      description: "A multi-page bouquet e-commerce app, showcasing multiple bouquet categories.",
      details: [
        "Integrated smooth scrolling and optimized image loading, reducing UI lag by 30%.",
        "Enhanced UX with custom radio buttons and a gradient fade effect for product descriptions."
      ],
      technologies: ["Kotlin", "Android SDK"],
      period: "October 2024",
      category: "mobile"
    },
    {
      title: "Maze Solver",
      description: "A web-based maze solver using Prim's algorithm and recursive backtracking.",
      details: [
        "Integrated WASD controls and an auto-solver with 98% accuracy.",
        "Offered three difficulty levels and customizable maze sizes for a tailored user experience."
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      period: "June 2024 - July 2024",
      category: "web"
    }
  ];

  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-blue mb-4">Projects</h2>
          <div className="w-24 h-1 bg-portfolio-purple mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills and experience in various technologies.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full max-w-3xl mx-auto mb-10">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="all" onClick={() => setActiveTab("all")}>All Projects</TabsTrigger>
            <TabsTrigger value="web" onClick={() => setActiveTab("web")}>Web Development</TabsTrigger>
            <TabsTrigger value="mobile" onClick={() => setActiveTab("mobile")}>Mobile Development</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </TabsContent>
          
          <TabsContent value="web" className="space-y-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </TabsContent>
          
          <TabsContent value="mobile" className="space-y-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple text-white">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl md:text-2xl">{project.title}</CardTitle>
            <CardDescription className="text-gray-100 mt-1">{project.description}</CardDescription>
          </div>
          <div className="flex items-center text-sm">
            <Calendar size={14} className="mr-1" />
            <span>{project.period}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-6">
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          {project.details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech, i) => (
            <Badge key={i} variant="secondary" className="bg-gray-100">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="border-t bg-gray-50 pt-4 flex justify-between">
        <div className="text-sm text-gray-500 flex items-center">
          <Code size={16} className="mr-2" />
          <span>Tech Stack: {project.technologies.join(', ')}</span>
        </div>
        
        <div className="flex gap-3">
          <Button variant="ghost" size="sm" className="text-portfolio-blue hover:text-portfolio-purple">
            <Github size={18} className="mr-1" />
            Code
          </Button>
          <Button variant="outline" size="sm" className="text-portfolio-blue hover:border-portfolio-purple hover:text-portfolio-purple">
            <ExternalLink size={18} className="mr-1" />
            Demo
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Projects;
