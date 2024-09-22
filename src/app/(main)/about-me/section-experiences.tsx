"use client";

import React from "react";
import { motion } from "framer-motion";
import { allExperiences } from "contentlayer/generated";

export default function SectionExperiences() {
  const experiences = allExperiences
    .filter((skill) => skill.published)
    .sort((a, b) => {
      return b.sequence - a.sequence;
    });

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
        My Experiences
      </h3>
      <div className="flex flex-col gap-2 pt-6 pb-4 md:pb-32">
        {experiences.map((experience) => (
          <div key={experience._id} className="pb-6">
            <div className="flex flex-col justify-between gap-2 md:gap-4">
              <h3 className="text-color-text-primary font-bold text-2xl md:text-3xl leading-140">
                {experience.position} - {experience.company}
              </h3>
              <span className="text-color-text-secondary font-bold leading-140">
                {experience.from} - {experience.to} ({experience.working_type})
              </span>
            </div>
            <div className="flex flex-row gap-2 mt-4">
              <div className="w-0.5 bg-color-text-primary opacity-60 rounded-full mx-6 h-auto" />
              <div>
                <p className="text-base md:text-lg leading-140 text-color-text-secondary">
                  🚀 Key Achievements:
                </p>
                <ul className="list-disc pl-6 flex flex-col gap-2 mt-2">
                  {experience.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="text-base md:text-lg text-color-text-secondary leading-140"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
