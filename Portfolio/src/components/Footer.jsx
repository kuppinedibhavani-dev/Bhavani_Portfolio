import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";


const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`mt-20 py-10 transition-all duration-500 ${
        darkMode
          ? "bg-[#0d182e] text-gray-300"
          : "bg-gray-100 text-gray-700"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500">
            Portfolio
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            Passionate developer building modern and responsive web
            applications using React and Tailwind CSS.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-500">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {["home", "about", "skills", "projects", "contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="hover:text-orange-500 transition"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-500">
            Connect With Me
          </h3>
          <div className="flex gap-4">

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/kuppinedibhavani-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-orange-500 text-white"
            >
              <Github size={18} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.linkedin.com/in/bhavani-kuppinedi-09ba14255/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-orange-500 text-white"
            >
              <Linkedin size={18} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="kuppinedibhavani@gmail.com"
              className="p-3 rounded-full bg-orange-500 text-white"
            >
              <Mail size={18} />
            </motion.a>

          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t mt-10 pt-6 text-center text-sm border-gray-300 dark:border-gray-700">
        © {new Date().getFullYear()} Kuppinedi Bhavani. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
