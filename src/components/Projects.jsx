import { PROJECTS } from "../constants";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <div className="border-b border-neutral-800 dark:border-neutral-800 light:border-neutral-300 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        viewport={{
          once: true,
        }}
        className="my-20 text-center text-4xl text-neutral-900 dark:text-neutral-100"
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
              viewport={{
                once: true,
              }}
              className="w-full lg:w-1/4"
            >
              <div className="relative w-full lg:w-60 h-80 overflow-hidden rounded-lg bg-neutral-800 dark:bg-neutral-700 shadow-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute top-0 left-0 w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                />
                <motion.div
                  className="absolute bottom-0 w-full h-1/4 bg-neutral-900 dark:bg-neutral-800 flex items-center justify-center opacity-90 group"
                  initial={{ opacity: 0.9 }}
                  whileHover={{ opacity: 1 }}
                  viewport={{
                    once: true,
                  }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="group-hover:flex hidden transition-all">
                    <a
                      href={project.source_code_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-white font-semibold rounded-lg hover:underline"
                    >
                      View Source Code
                    </a>
                  </div>
                  <p className="text-sm font-semibold text-neutral-400 dark:text-neutral-300 group-hover:hidden">
                    {project.title}
                  </p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              viewport={{
                once: true,
              }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold text-neutral-900 dark:text-neutral-100">
                {project.title}
              </h6>
              <p className="mb-4 text-neutral-700 dark:text-neutral-300">
                {project.description}
              </p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-300 dark:bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 dark:text-purple-300"
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
