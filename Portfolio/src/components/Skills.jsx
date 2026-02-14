import { motion } from "framer-motion";
import {
  FileCode,
  Braces,
  Cpu,
  Atom,
  Server,
  Database,
  GitBranch,
  Terminal,
  Send
} from "lucide-react";

const skills = [
  { name: "HTML", icon: <FileCode size={40} /> },
  { name: "CSS", icon: <Braces size={40} /> },
  { name: "JavaScript", icon: <Cpu size={40} /> },
  { name: "React", icon: <Atom size={40} /> },
  { name: "Node.js", icon: <Server size={40} /> },
  { name: "Express", icon: <Server size={40} /> },
  { name: "MySQL", icon: <Database size={40} /> },
  { name: "Supabase", icon: <Database size={40} /> },
  { name: "Git", icon: <GitBranch size={40} /> },
  { name: "VS Code", icon: <Terminal size={40} /> },
  { name: "Postman", icon: <Send size={40} /> },
];

export default function Skills() {
  

  return (
    <section id="skills" className="py-16 px-6 text-center">
      
      {/* Toggle Button */}
      <div className="skills-header">
        <h2>My Skills</h2>
        
        <p>Here are the technologies I've worked with</p>
          
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <div className="icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
