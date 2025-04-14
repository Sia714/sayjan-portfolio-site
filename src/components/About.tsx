
import React from 'react';
import { 
  Award, BookOpen, Code, Cpu, Database, Server, 
  FileCode, Smartphone, Terminal, Zap
} from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-blue mb-4">About Me</h2>
          <div className="w-24 h-1 bg-portfolio-purple mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700">
              I am a passionate Software Developer with expertise in Full Stack Development. 
              Currently pursuing a B.Tech in Computer Science with honors in Full Stack Software 
              Development at Lovely Professional University, I combine strong theoretical 
              knowledge with practical implementation skills.
            </p>
            
            <p className="text-gray-700">
              My journey in technology is driven by problem-solving and creating efficient, 
              scalable solutions. I've worked with various technologies across the development 
              stack and have experience from internships and personal projects.
            </p>
            
            <p className="text-gray-700">
              When I'm not coding, I enjoy solving algorithmic problems on platforms like LeetCode, 
              where I've solved over 300 problems, continually sharpening my problem-solving abilities.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-2">
                <Cpu className="text-portfolio-purple" size={20} />
                <span>Problem Solver</span>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="text-portfolio-purple" size={20} />
                <span>Coder</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCode className="text-portfolio-purple" size={20} />
                <span>Full Stack Developer</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="text-portfolio-purple" size={20} />
                <span>Mobile Developer</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-gray-50 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-portfolio-purple" size={24} />
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>C/C++</li>
                <li>JavaScript</li>
                <li>Java</li>
                <li>Python</li>
                <li>Kotlin</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-lg bg-gray-50 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Server className="text-portfolio-purple" size={24} />
                <h3 className="text-xl font-semibold">Frameworks</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>React</li>
                <li>Bootstrap</li>
                <li>Spring Boot</li>
                <li>Tailwind CSS</li>
                <li>REST APIs</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-lg bg-gray-50 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-portfolio-purple" size={24} />
                <h3 className="text-xl font-semibold">Tools</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>SQL / MySQL</li>
                <li>MongoDB</li>
                <li>GitHub</li>
                <li>Android Studio</li>
                <li>Firebase</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-lg bg-gray-50 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="text-portfolio-purple" size={24} />
                <h3 className="text-xl font-semibold">Soft Skills</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>Problem Solving</li>
                <li>Teamwork</li>
                <li>Project Management</li>
                <li>Adaptability</li>
                <li>Communication</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
