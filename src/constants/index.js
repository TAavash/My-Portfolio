import project1 from "../assets/projects/hotel.png";
import project2 from "../assets/projects/taxi.png";
import project3 from "../assets/projects/futsal.png";
import project4 from "../assets/projects/agewell.png";
import project5 from "../assets/projects/portfolio.png";

export const SOCIALLINKS = {
  linkedin: "www.linkedin.com/in/aavash-tamang-131a0a2b5",
  github: "https://github.com/TAavash",
  instagram: "https://www.instagram.com/aavashtamang10/",
};


export const HERO_CONTENT = `I'm a passionate full-stack developer with a profound love for creating
        visually stunning and engaging experiences. My goal is advance and
        create visually appealing designs and projects to captivate the users.`;

export const ABOUT_TEXT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like Html, CSS and React, as well as back-end technologies like Node.js, and MySQL. 
        My journey in software development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. Outside of coding, I enjoy staying active, playing sports, e-games, and exploring new technologies.
        My goal is to create advance and visually appealing designs and projects to captivate the users.`;

export const EXPERIENCES = [
  {
    date: "May 2024 - Aug 2024",
    role: "Full stack Developer",
    company: "PCPS",
    description: [
      "Led a team in developing and maintaining web applications using JavaScript, React.js, Laravel and other related technologies.",
      "Implemented APIs and integrated with MySQL databases. Collaborated with stakeholders to define project requirements and timelines.",
      "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    technologies: ["React.js", "Tailwind.css", "Laravel", "MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "Hotel Booking System",
    image: project1,
    description:
      "Web-based platform that allows users to search, book, and manage hotel rooms of a certain hotel.",
    technologies: ["Java", "MySQL"],

    source_code_link:
      "https://github.com/TAavash/Eclipse-Workspace/tree/main/java_project",
  },
  {
    title: "Taxi Booking System",
    image: project2,
    description:
      "Web-based platform that allows users to search, book, and manage taxi ofor quick and safe trips.",
    technologies: ["Python", "MySQL"],
    source_code_link: "https://github.com/TAavash/Taxi-Booking-System",
  },
  {
    title: "Futsal Booking System",
    image: project3,
    description:
      "A comprehensive futsal booking platform that allows users to book futsals based on real-time availability.",
    technologies: ["React", "Tailwind", "MongoDB", "Node.js"],
    source_code_link: "https://github.com/TAavash/Futsal",
  },
  {
    title: "Age Well",
    image: project4,
    description:
      "A user-friendly mobile app that improves elders' quality of life by encouraging independence, assuring safety, and building meaningful connections. It's key features include health tracking, voice commands, service booking, and social engagement activities.",
    technologies: ["Flutter", "Dart", "Firebase"],
    source_code_link: "https://github.com/TAavash/AgeWell",
  },
  {
    title: "Portfolio Website",
    image: project5,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind"],
    source_code_link: "https://github.com/TAavash/My-Portfolio",
  },
];

export const CONTACT = {
  address: "Lalitpur, Nepal",
  phoneNo: "+977 9812211534",
  email: "aavashlopchan@gmail.com",
};
