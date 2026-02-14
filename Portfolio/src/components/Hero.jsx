import { Github, Linkedin, Mail } from "lucide-react";
import AI_FSD from "../assets/AI_FSD.jpg";
import { TypeAnimation } from "react-type-animation";
import Resume from "../assets/Kuppinedi_Bhavani_Resume.pdf";
import{DownloadIcon}from "lucide-react";

const  Hero=() => {
  return (
    <section className="min-h-screen flex items-center 
    bg-white text-black 
    dark:bg-linear-to-br dark:from-black dark:via-gray-900 dark:to-black 
    dark:text-white transition-all duration-500">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-orange-500">
              Kuppinedi Bhavani
            </span>
          </h1>

          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "Open Source Enthusiast",
              2000,
              "React Developer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-xl md:text-2xl text-orange-400"
          />

          <p className="text-gray-600 dark:text-gray-300 max-w-lg">
            I'm a passionate full stack developer passionate about building
            modern, responsive and user-friendly web applications.
          </p>
          {/*Buttons*/}
          <div className="w-full pt-4 sm:pt-6">
            <div className="flex flex-col sm:flex-row justify-center
            lg:justify-start gap-3 sm:gap-4"
            data-aos="fade-up"
            data-aos-delay="700">
              <a href={Resume} download
              className="w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex items-center
                justify-center  text-white bg-linear-to-r from-orange-500 to-amber-500 border-0
                py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                rounded-full text-base sm:text-lg font-semibold transition-all duration-300
               transform">
                <DownloadIcon className="w-4 h-4 sm:5 sm:w-5 mr-2"/>
                  Download Resume
                </button>
              </a>
              <a href="#contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex items-center
                justify-center bg-linear-to-r from-orange-500 to-amber-500 border-0
                py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                rounded-full text-base sm:text-lg font-semibold transition-all duration-300
                transform">
                  <Mail className="w-4 h-4 sm:w-5 mr-2"/>
                  Contact Me
                  </button>
                </a>
              

            </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 pt-4">
            <Github className="cursor-pointer hover:text-orange-500 transition" />
            <Linkedin className="cursor-pointer hover:text-orange-500 transition" />
            <Mail className="cursor-pointer hover:text-orange-500 transition" />
          </div>

        </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="lg:w-1/2 w-full max:w-md lg:max-w-lg mt-8
        lg:mt-0 flex justify-center" data-aos="fade-left" data-aos-delay="400">
          <div className="relative w-4/5 sm:w-3/4 lg:w-full">
          <div className="relative overflow-hidden">
          <img
            src={AI_FSD}
            alt="Full Stack Developer"
            className="w-72 md:w-96 rounded-2xl shadow-2xl 
            hover:scale-105 transition-transform duration-500"
          />
          </div>
        </div>

      </div>
      </div>
    </section>
  );
}
export default Hero;
