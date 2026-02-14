import Time_Mind from "../assets/Time_Mind.jpg";
import {FaExternalLinkAlt, FaGithub}from "react-icons/fa";

const Projects = ({darkMode}) => {
    const projects=[
        {
            id:1,
            title:"Time Management App",
            description:"A web application that helps users manage their time effectively by creating tasks, setting deadlines, and tracking progress.",
            technologies:["AI","React","Node.js"],
            imageUrl:Time_Mind,
            projectUrl:"https://kuppinedibhavani-dev.github.io/AI-Evaluation/",
            GitHub_RepositoryLink:"https://github.com/kuppinedibhavani-dev/AI-Evaluation"
        }
    ]
  return (
    <section
    id="projects"
    style={{
        backgroundColor:darkMode ?"#111827" : "#f9fafb"
    }}
  className="relative py-24">
    <div className="container mx-auto px-4">
        <div className="text-center mb-10"data-aos="fade-up">
            <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
        style={{
            color:darkMode ? "white":"#1f2937"
        }}>
            My <span 
            style={{
                background:"linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip:"text",
                backgroundClip:"text",
                color:"transparent"
            }}>
                Projects
                </span>
                </h2>
                <p
                className="max-w-xl mx-auto"
                style={{
                    color:darkMode ? "#d1d5db" : "#6b7280"
                }}>
                    A showcase of my recent work
                </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2
                lg:grid-cols-3 gap-5 mb-12">
                    {projects.map((project,index)=>(
                        <div 
                        key={project.id}
                        style={{
                            backgroun:darkMode
                            ? "linear-gradient(to right, #1f2937, #111827)"
                            : "linear-gradient(to right, #ffffff, #f9fafb)",
                            borderColor:darkMode ? "#374151" : "#e5e7eb"
                        }}
                        className="group rounded-xl border duration-300
                         hover:border-orange-500/50 
                        transition-all"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}>
                           <div className="h-36 overflow-hidden rounded-t-xl">
                            <img src={project.imageUrl} 
                            alt={project.title} 
                            className="w-full h-full object-cover 
                            group-hover:scale-110 transition-transform duration-500"/>
                            </div>
                            <div className="p-4">
                                <h3 
                                className="text-xl font-bold text-white mb-2"
                                style={{
                                    color:darkMode ? "white" : "#1f2937"
                                }}>
                                    {project.title}
                                    </h3>
                                    <p
                                    className="text-gray-400 text-sm mb-4"
                                    style={{
                                        color:darkMode ? "#d1d5db" : "#6b7280"
                                }}>
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {project.technologies.map((tech,idx)=>(
                                        <span 
                                        key={idx} 
                                        style={{
                                            backgroundColor:darkMode ? "#374151" : "#f3f4f6",
                                            color:darkMode ? "#d1d5db" : "#4b5563"
                                        }}
                                        className="px-3 py-1 text-xs 
                                        bg-slate-700/70 
                                        text-gray-300 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    <a href="https://github.com/kuppinedibhavani-dev/AI-Evaluation" 
                                   style={{
                                        backgroundColor:darkMode ? "#374151" : "#f3f4f6",
                                        color:darkMode ? "white" : "#374151"
                                    }}
                                    className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
                                     data-aos="zoom-in"
                                     data-aos-delay="300"
                                     >
                                        <FaGithub className="text-sm"/>
                                        <span>Code</span>
                                     </a>
                                    {/*Demo*/}
                                    <a href="https://kuppinedibhavani-dev.github.io/AI-Evaluation/" 
                                   style={{
                                        background:"linear-gradient(to-right,#f97316,#f59e0b)",
                                    }}
                                    className="flex-1 bg-linear-to-r
                                    from-orange-600 hover:to-amber-600
                                    text-white py-2 rounded-lg
                                    shadow-md hover:shadow-orange-500/30 transition"
                                     data-aos="zoom-in"
                                     data-aos-delay="400"
                                     >
                                        <FaExternalLinkAlt className="text-sm"/>
                                        <span>Demo</span>
                                     </a>
                                     </div>
                                     </div>
                                     </div>

                                ))}
                        </div>
                        <div className="text-center mt-10">
                            <a 
                            href="#" 
                            style={{
                            background:"linear-gradient(to-right,#f97316,#f59e0b)",
                                    }}
                                    className="inline-flex items-center font-semibold
                                    gap-2 px-7 py-4 text-white
                                     text-sm rounded-full hover:shadow-lg
                                     hover:shadow-orange-500/25 transition-all"
                                     data-aos="zoom-in"
                                     data-aos-delay="400"
                                     >
                                        <FaGithub />
                                        <span>View All Projects</span>
                                        <FaExternalLinkAlt className="text-sm"/>
                                        <span>Demo</span>
                                     </a>
                        </div>
    </div>
    </section>
  )
}

export default Projects