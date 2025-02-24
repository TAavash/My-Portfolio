import { HERO_CONTENT } from "../constants";
import profilePicture from "../assets/aavash.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-800 pb-4 lg:mb-35 light:border-neutral-300">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              viewport={{
                once: true,
              }}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl dark:text-neutral-300 light:text-neutral-900"
            >
              Aavash Tamang
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-red-300 via-slate-500 to-purple-500 
                bg-clip-text text-3xl tracking-tight text-transparent light:from-blue-500 light:via-green-500 light:to-yellow-500"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter dark:text-neutral-300 light:text-neutral-700"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="w-[500px] rounded-2xl"
              src={profilePicture}
              alt="Aavash Tamang"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
