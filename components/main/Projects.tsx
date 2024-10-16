"use client"
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { MyProjects } from "@/lib/constants";
const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[35px] lg:text-[52px] text-slate-400 font-roboto font-extralight mb-10 ">
        My Projects (3)
      </h1>
      <div className="h-full flex flex-col items-center gap-y-12 mb-20">

        {MyProjects.map((proj, index) => (
          <div className="hover:cursor-pointer" onClick={() => {window.open(proj.link)}} key={index}>
          <ProjectCard
            src={proj.imageSrc}
            title={proj.title}
            description={proj.description}
          />
        </div> 
        ))}

      </div>
    </div>
  );
};

export default Projects;