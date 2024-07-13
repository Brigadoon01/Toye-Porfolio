"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import about from "../../../public/about-image.png";
import TabBtn from "./TabBtn";
import {motion} from "framer-motion";
import {fadeIn} from "../../app/utils/variants"



const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Expressjs</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Solidity</li>
        <li>SASS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>
          B.Eng, Metallurgical and Materials Engineering.
          <br />
          Federal University of Technology, Akure (FUTA).
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul>
        <li>
          FrontEnd Developer (June - October, 2023) :
          <br />
          Odeeble.
        </li>
        <li>Software Engineer (September, 2020 - Present) :
          <br />
          Freelance.
        </li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="about" className="text-white h-[100%]">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div 
        variants={fadeIn("down",0.2 )}
        initial="hidden"
        whileInView={"show"}
        >

        <Image src={about} width={500} height={500} className="rounded-lg" />
        </motion.div>
        <motion.div
        variants={fadeIn("left",0.2 )}
        initial="hidden"
        whileInView={"show"}
        className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me </h2>
          <p className="text-base md:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience with
            JavaScript, React, Redux, Node.js, Express, HTML, CSS, Git and other
            important technologies required to solve technical problems. I am a
            quick learner and I am always looking to expand my knowledge and
            skill set. I am a team player and I am excited to work with others
            to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabBtn
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabBtn>
            <TabBtn
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabBtn>{" "}
            <TabBtn
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabBtn>{" "}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}{" "}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
