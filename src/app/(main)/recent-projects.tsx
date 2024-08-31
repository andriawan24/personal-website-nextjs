import Image from "next/image";
import React from "react";
import Link from "next/link";
import Pill from "@/components/views/pill";

export default async function RecentProjects() {
  const response = await fetch(`${process.env.HOST_URL}/api/projects`);
  if (!response.ok) {
    throw new Error(await response.text());
  }

  const projects = await response.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {projects.data.map((project: ProjectTypes) => {
        return (
          <Link
            key={project.id}
            target="_blank"
            href={`${process.env.HOST_URL}/projects/${project.id}`}
            className="cursor-pointer transition-all duration-200 hover:opacity-80 hover:scale-[0.99] active:opacity-100"
          >
            <Image
              className="w-full h-48 object-cover rounded-t-lg"
              src={`${project.thumbnail_image}`}
              width={700}
              height={600}
              loading="lazy"
              alt="This is generated image from lorem picsum"
            />
            <div className="bg-color-background-card-dark rounded-b-lg p-4">
              <h5 className="text-lg md:text-xl font-bold text-color-text-primary leading-140">
                Pegipegi
              </h5>
              <p className="leading-140 text-color-text-primary mt-2 md:mt-6 line-clamp-4">
                PT Go Online Destinations atau Pegipegi merupakan Online Travel
                Agent (OTA) yang menyediakan layanan perjalanan seperti hotel,
                tiket pesawat, tiket kereta, hotel, dan juga yang lainnya. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Veniam minus
                animi ipsa aperiam tempora incidunt sint, quae modi obcaecati
                voluptatum excepturi commodi id? Incidunt dicta placeat
                architecto ad tenetur corrupti.
              </p>
              <div className="flex flex-row flex-wrap items-center mt-6 gap-2">
                <Pill text="Android" />
                <Pill text="+2" />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
