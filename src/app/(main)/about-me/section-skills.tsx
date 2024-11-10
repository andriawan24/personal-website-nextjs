"use client";

import { allSkills, Skill } from "contentlayer/generated";
import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function SkillCard({ skill }: { skill: Skill }): ReactElement {
  return (
    <motion.a
      layoutId={skill._id}
      href={skill.link}
      target="_blank"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
      className="flex flex-col gap-4 cursor-pointer justify-center items-center p-6 bg-color-background-card-dark rounded-lg"
    >
      <Image
        className="w-14 h-14"
        src={skill.image}
        width={60}
        height={60}
        loading="lazy"
        alt={skill.image_alt}
      />
      <h6 className="font-semibold text-lg md:text-xl text-color-text-primary">
        {skill.title}
      </h6>
    </motion.a>
  );
}

export default function SectionSkills() {
  const skills = allSkills
    .filter((skill) => skill.published)
    .sort((a, b) => a.position - b.position);
  return (
    <motion.div
      variants={{
        hidden: { y: 200, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
      }}
    >
      <h3 className="font-bold text-2xl text-color-text-secondary">
        My Toolkits
      </h3>
      <div className="grid grid-cols-3 md:flex md:flex-row flex-wrap gap-4 md:gap-6 pt-4 md:pt-6 pb-16">
        {skills.map((skill) => (
          <SkillCard key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}
