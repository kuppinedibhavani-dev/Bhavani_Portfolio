import React from "react";
import profile from "../assets/profile.jpg";

const About=()=>{
    return(
        <section id="about"
  className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-6xl grid md:grid-cols-2
            gap-12 items-center">
                {/*Left image*/}
                <div className="flex justify-center">
                    <img src={profile}
                    alt="Profile"
                    className="w-72 h-72 object-cover rounded-full border-4 border-orange-400
                    shadow-lg hover:scale-105 transition"/>
                </div>
                {/*Right content*/}
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-orange-400">
                        About Me
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        I'm a passionate developer who enjoys building beautiful and functional web applications.
                        I love working with React, Tailwind CSS, and modern JavaScript technologies.
                        
                    </p>
                    <div className="flex gap-10">
                        <div>
                            <h2 className="text-3xl font-bold text-orange-400">6+</h2>
                            <p className="text-gray-600 dark:text-gray-300">Months of training</p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-orange-400">15+</h2>
                            <p className="text-gray-600 dark:text-gray-300">Projects</p>
                            
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-orange-400">5+</h2>
                            <p className="text-gray-600 dark:text-gray-300">Skills</p>
                        </div>
                    </div>
                    <button className="bg-orange-500 px-6 py-3 rounded-full
                    hover:bg-orange-600 transition">Learn More</button>
                </div>
            </div>
        </section>
    )
}
export default About;