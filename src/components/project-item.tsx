"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Pill from "./views/pill";
import { Project } from "contentlayer/generated";

export default function ProjectItem({
  project,
}: {
  project: Project;
}): React.ReactElement {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      key={project._id}
      href={project.url}
      className="cursor-pointer transition-all duration-200 hover:opacity-80 hover:scale-[0.99] active:opacity-100"
    >
      <Image
        className="w-full aspect-video object-cover rounded-t-lg"
        src={project.thumbnail}
        width={700}
        height={600}
        priority
        alt="This is generated image from lorem picsum"
      />
      <div className="bg-color-background-card-dark rounded-b-lg p-4">
        <h5 className="text-lg md:text-xl font-bold text-color-text-primary leading-140">
          {project.title}
        </h5>
        <p className="leading-140 text-color-text-primary mt-2 md:mt-6 line-clamp-4">
          {project.description}
        </p>
        {project.tags.length > 0 && (
          <>
            <div className="flex flex-row flex-wrap items-center mt-6 gap-2">
              <Pill text={project.tags[0]} />
              {project.tags.length > 1 && (
                <motion.span
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  className="relative hover:scale-[0.98] transition-all duration-200"
                >
                  <Pill text={`+${project.tags.length - 1}`} />
                  <motion.div
                    animate={{
                      opacity: isHovered ? 1 : 0,
                    }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-0 translate-x-14 bg-white px-2 py-2 rounded-lg w-max"
                    style={{ pointerEvents: "none" }} // Prevent hovering on tooltip
                  >
                    {project.tags.slice(1).map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </motion.div>
                </motion.span>
              )}
            </div>
          </>
        )}
      </div>
    </Link>
  );
}