"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface Props {
  texts: string[];
}

export default function TextLoop({ texts }: Props): React.ReactElement {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      let next = index + 1;
      if (next === texts.length) {
        next = 0;
      }
      setIndex(next);
    }, 3 * 1000);
  }, [index, setIndex, texts.length]);

  return (
    <div className="relative h-6 md:h-8 inline-block mt-2 md:mt-4">
      <AnimatePresence>
        <motion.h3
          key={index}
          className="absolute text-md md:text-2xl leading-140 font-semibold text-color-text-primary"
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            translateY: {
              type: "spring",
              stiffness: 600,
              damping: 200,
            },
            opacity: {
              duration: 0.1,
            },
          }}
          layout
          variants={{
            enter: (direction) => {
              return {
                translateY: 10,
                opacity: 0,
                height: 0,
              };
            },
            center: {
              translateY: 0,
              opacity: 1,
              height: "auto",
            },
            exit: (direction) => {
              return {
                translateY: -10,
                opacity: 0,
                height: 0,
              };
            },
          }}
        >
          {texts[index]}
        </motion.h3>
      </AnimatePresence>
    </div>
  );
}
