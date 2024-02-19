"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Global App",
    description: "Creative ",
    image: "/images/projects/global.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Brigadoon01/GlobalApp",
    previewUrl: "https://global-app-six.vercel.app/",
  },
  {
    id: 3,
    title: "Gespur",
    description: "An online shopping website.",
    image: "/images/projects/gespur.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Brigadoon01/Gespur",
    previewUrl: "https://gespur.vercel.app/",
  },
  {
    id: 4,
    title: "Krypta App",
    description: "Crypto Transaction App",
    image: "/images/projects/krypta.png",
    tag: ["All", "Blockchain"],
    gitUrl: "https://github.com/Brigadoon01/Krypta",
    previewUrl: "https://krypta-client.vercel.app",
  },
  {
    id: 5,
    title: "Budget App",
    description: "budget app",
    image: "/images/projects/budget.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Brigadoon01/BudgetApp",
    previewUrl: "https://budget-app-liart-one.vercel.app/",
  },
  {
    id: 6,
    title: "Admin Dashboard",
    description: "An Admin dashBoard",
    image: "/images/projects/admindashboard.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Brigadoon01/AdminPage",
    previewUrl: "https://admin-page-weld-psi.vercel.app/",
  },
];

const Projects = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="project">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Blockchain"
          isSelected={tag === "Blockchain"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Projects