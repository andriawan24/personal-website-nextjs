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
      transition={{ duration: 0.3 }}
    >
      <h3 className="about-section-title">My Experiences</h3>
      <div className="experiences-container">
        {experiences.map((experience) => (
          <div key={experience._id} className="pb-6">
            <div className="experiences-header">
              <h3 className="title">
                {experience.position} - {experience.company}
              </h3>
              <span className="subtitle">
                {experience.from} - {experience.to} ({experience.working_type})
              </span>
            </div>
            <div className="experiences-content">
              <div className="divider" />
              <div>
                <p className="text">🚀 Key Achievements:</p>
                <ul className="list">
                  {experience.achievements.map((achievement) => (
                    <li key={achievement} className="text">
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
