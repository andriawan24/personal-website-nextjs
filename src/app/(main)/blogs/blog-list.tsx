import Pill from "@/components/views/pill";
import { allBlogs } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogList() {
  const blogs = allBlogs;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {blogs.map((blog) => {
        return (
          <Link
            key={blog._id}
            href={blog.link}
            target="_blank"
            className="cursor-pointer transition-all duration-200 hover:opacity-80 hover:scale-[0.99] active:opacity-100"
          >
            <div className="relative">
              <Image
                className="w-full h-48 object-cover rounded-t-lg"
                src={blog.thumbnail}
                width={700}
                height={600}
                priority
                alt="This is generated image from lorem picsum"
              />
              <Image
                className="absolute bottom-4 start-4"
                src={blog.publication_logo}
                width={41}
                height={41}
                priority
                alt="This is generated image from lorem picsum"
              />
            </div>
            <div className="bg-color-background-card-dark rounded-b-lg p-4">
              <h5 className="text-lg md:text-xl font-bold text-color-text-primary leading-140 line-clamp-1">
                {blog.title}
              </h5>
              <p className="leading-140 text-color-text-primary mt-2 md:mt-6 line-clamp-4">
                {blog.description}
              </p>
              {blog.tags.length > 0 && (
                <>
                  <div className="flex flex-row flex-wrap items-center mt-6 gap-2">
                    <Pill text={blog.tags[0]} />
                    {blog.tags.length > 1 && (
                      <Pill text={`+${blog.tags.length - 1}`} />
                    )}
                  </div>
                </>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
