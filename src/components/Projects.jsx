import { PROJECTS } from "../constants";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <div className="relative w-full lg:w-60 h-80 overflow-hidden rounded-lg bg-neutral-800 shadow-md">
                {/* Image with better fit */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute top-0 left-0 w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                />

                {/* Bottom section with hover animation */}
                <motion.div
                  className="absolute bottom-0 w-full h-1/4 bg-neutral-900 flex items-center justify-center opacity-90 group"
                  initial={{ opacity: 0.9 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 , delay: 0.5 }}
                >
                  {/* View Source Code Button on hover */}
                  <div className="group-hover:flex hidden transition-all">
                    <a
                      href={project.source_code_link} // Replace with your source code link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-white font-semibold rounded-lg hover:bg-white hover:text-black"
                    >
                      View Source Code
                    </a>
                  </div>

                  {/* Text as fallback */}
                  <p className="text-sm font-semibold text-neutral-400 group-hover:hidden">
                    {project.title}
                  </p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
