import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <motion.div
    whileHover={{scale: 1.02}}
    className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] h-auto w-[300px] lg:w-[500px]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white mb-4">{title}</h1>
        <p className="mt-2 text-gray-300 mb-4 text-[10px] lg:text-[15px]">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;