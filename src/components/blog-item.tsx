"use client";

import { Blog } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Pill from "./views/pill";
import { motion } from "framer-motion";

interface Props {
  blog: Blog;
}

export default function BlogItem({ blog }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      key={blog._id}
      href={blog.link}
      target="_blank"
      className="cursor-pointer transition-all duration-200 hover:opacity-80 hover:scale-[0.99] active:opacity-100"
    >
      <div className="relative">
        <Image
          className="w-full aspect-video object-cover rounded-t-lg"
          src={blog.thumbnail}
          width={700}
          height={600}
          priority
          alt="This is generated image from lorem picsum"
        />
        <Image
          className="absolute bottom-4 start-4"
          src={blog.publication_logo}
          width={24}
          height={24}
          priority
          alt="This is generated image from lorem picsum"
        />
      </div>
      <div className="bg-color-background-card-dark rounded-b-lg p-4">
        <h5 className="text-lg md:text-xl font-bold text-color-text-primary leading-140 line-clamp-2">
          {blog.title}
        </h5>
        <p className="leading-140 text-color-text-primary mt-2 md:mt-4 line-clamp-4">
          {blog.description}
        </p>
        {blog.tags.length > 0 && (
          <>
            <div className="flex flex-row flex-wrap items-center mt-6 gap-2">
              <Pill text={blog.tags[0]} />
              {blog.tags.length > 1 && (
                <motion.span
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  className="relative hover:scale-[0.98] transition-all duration-200"
                >
                  <Pill text={`+${blog.tags.length - 1}`} />
                  <motion.div
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-0 translate-x-14 bg-white px-2 py-2 rounded-lg w-max"
                    style={{ pointerEvents: "none" }} // Prevent hovering on tooltip
                  >
                    {blog.tags.slice(1).map((tag) => (
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
