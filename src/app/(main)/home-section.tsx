import React from "react";
import * as motion from "framer-motion/client";
import TitleWithLink from "@/components/views/title-with-link";

interface Props {
  title: string;
  link: string;
  titleLink: string;
  children: React.ReactNode;
}

export default function HomeSection(props: Props): React.ReactElement {
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
      id="recent-projects"
      className="home-section-container"
    >
      <TitleWithLink
        title={props.title}
        link={props.link}
        titleLink={props.titleLink}
      />
      {props.children}
    </motion.div>
  );
}
