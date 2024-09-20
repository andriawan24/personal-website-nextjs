import Pill from "@/components/views/pill";
import { allProjects } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RecentProjects() {
  const projects = allProjects;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {projects.map((project) => {
        return (
          <Link
            key={project._id}
            target="_blank"
            href={`${process.env.HOST_URL}/projects/${project._id}`}
            className="cursor-pointer transition-all duration-200 hover:opacity-80 hover:scale-[0.99] active:opacity-100"
          >
            <Image
              className="w-full h-48 object-cover rounded-t-lg"
              src={`https://picsum.photos/200/300`}
              width={700}
              height={600}
              loading="lazy"
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
                      <Pill text={`+${project.tags.length - 1}`} />
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
