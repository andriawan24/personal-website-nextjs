import Breadcrumb from "@/components/breadcrumb";
import { allProjects } from "contentlayer/generated";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import * as motion from "framer-motion/client";
import { Metadata, ResolvingMetadata } from "next";
import { PageConfig } from "@/utils/constants";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slig = params.slug;
  const project = allProjects.find(
    (project) => project._raw.flattenedPath == `projects/${params.slug}`,
  );

  return {
    title: project?.title,
    description: project?.description,
    openGraph: {
      title: project?.title,
      description: project?.description,
      url: "https://andriawan.vercel.app" + project?.url,
      siteName: PageConfig.applicationName,
      type: "website",
    },
  };
}

export default function ProjectDetailDetail({ params }: Props) {
  const project = allProjects.find(
    (project) => project._raw.flattenedPath == `projects/${params.slug}`,
  );

  if (!project) {
    notFound();
  }

  return (
    <main>
      <div className="px-4 min-w-full">
        <Breadcrumb title={project.title} tags={project.tags} />
      </div>
      <div className="mt-8">
        <Image
          src={project.thumbnail}
          alt="Project Image"
          className="h-96 w-full object-cover"
          width={1920}
          height={1080}
        />
      </div>
      <div className="flex flex-col px-4 md:px-32 py-12">
        <motion.div
          className="flex flex-col gap-6 "
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
          <h5 className="text-color-text-primary text-2xl font-bold leading-140">
            About The Project
          </h5>
          <div className="flex flex-col md:flex-row gap-2 md:gap-14">
            <h3 className="w-[250px] text-color-text-secondary font-semibold text-xl">
              Description
            </h3>
            <p className="text-lg md:text-xl font-thin flex-1 text-color-text-primary">
              {project.description}
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-14">
            <h3 className="w-[250px] text-color-text-secondary font-semibold text-xl">
              Development Start
            </h3>
            <p className="text-lg md:text-xl font-thin flex-1 text-color-text-primary">
              {project.development_start}
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-14">
            <h3 className="w-[250px] text-color-text-secondary font-semibold text-xl">
              Roles
            </h3>
            <p className="text-lg md:text-xl font-thin flex-1 text-color-text-primary">
              {project.roles}
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-14 mb-6">
            <h3 className="w-[250px] text-color-text-secondary font-semibold text-xl">
              Links
            </h3>
            <p className="text-lg md:text-xl font-thin flex-1 text-color-text-primary">
              {project.links.map((link, index) => (
                <>
                  <a
                    key={link.title}
                    className="underline underline-offset-4 decoration-1"
                    href={link.link}
                    target="_blank"
                  >
                    {link.title}
                  </a>

                  {index < project.links.length - 1 && <span>,&nbsp;</span>}
                </>
              ))}
            </p>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col gap-6 mt-6"
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
          <h5 className="text-color-text-primary text-2xl font-bold leading-140">
            Tech Stacks
          </h5>
          {project.languages && project.languages.length > 0 && (
            <div>
              <h3 className="text-color-text-secondary text-xl font-semibold leading-140">
                Programming Languages
              </h3>
              <div className="flex flex-row flex-wrap gap-6 mt-2">
                {project.languages.map((language) => (
                  <motion.a
                    key={language._id}
                    layoutId={language._id}
                    href={language.link}
                    target="_blank"
                    whileHover={{
                      scale: 1.1,
                    }}
                    whileTap={{
                      scale: 1,
                    }}
                    className="flex flex-col gap-4 cursor-pointer justify-center items-center p-6 bg-color-background-card-dark rounded-lg"
                  >
                    <Image
                      className="w-14 h-14"
                      src={language.image}
                      width={60}
                      height={60}
                      loading="lazy"
                      alt={language.title}
                    />
                    <h6 className="font-semibold text-lg md:text-xl text-color-text-primary">
                      {language.title}
                    </h6>
                  </motion.a>
                ))}
              </div>
            </div>
          )}
          {project.frameworks.length > 0 && (
            <div>
              <h3 className="text-color-text-secondary text-xl font-semibold leading-140">
                Frameworks and Libraries
              </h3>
              <div className="flex flex-row flex-wrap gap-6 mt-2">
                {project.frameworks.map((framework) => (
                  <motion.a
                    key={framework._id}
                    layoutId={framework._id}
                    href={framework.link}
                    target="_blank"
                    whileHover={{
                      scale: 1.1,
                    }}
                    whileTap={{
                      scale: 1,
                    }}
                    className="flex flex-col gap-4 cursor-pointer justify-center items-center p-6 bg-color-background-card-dark rounded-lg"
                  >
                    <Image
                      className="w-14 h-14"
                      src={framework.image}
                      width={60}
                      height={60}
                      loading="lazy"
                      alt={framework.title}
                    />
                    <h6 className="font-semibold text-lg md:text-xl text-color-text-primary">
                      {framework.title}
                    </h6>
                  </motion.a>
                ))}
              </div>
            </div>
          )}
          {project.databases.length > 0 && (
            <div>
              <h3 className="text-color-text-secondary text-xl font-semibold leading-140">
                Databases
              </h3>
              <div className="flex flex-row flex-wrap gap-6 mt-2">
                {project.databases.map((database) => (
                  <motion.a
                    key={database._id}
                    layoutId={database._id}
                    href={database.link}
                    target="_blank"
                    whileHover={{
                      scale: 1.1,
                    }}
                    whileTap={{
                      scale: 1,
                    }}
                    className="flex flex-col gap-4 cursor-pointer justify-center items-center p-6 bg-color-background-card-dark rounded-lg"
                  >
                    <Image
                      className="w-14 h-14"
                      src={database.image}
                      width={60}
                      height={60}
                      loading="lazy"
                      alt={database.title}
                    />
                    <h6 className="font-semibold text-lg md:text-xl text-color-text-primary">
                      {database.title}
                    </h6>
                  </motion.a>
                ))}
              </div>
            </div>
          )}
        </motion.div>
        {project.overviews.length > 0 && (
          <div>
            <h5 className="text-color-text-primary text-2xl font-bold leading-140 mt-6">
              Application Overview
            </h5>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-6 mt-4">
              <Image
                src="https://picsum.photos/seed/picsum/250/400"
                alt="Project Image"
                className="object-cover rounded-md"
                width={250}
                height={400}
              />
              <Image
                src="https://picsum.photos/seed/picsum/250/400"
                alt="Project Image"
                className="object-cover rounded-md"
                width={250}
                height={400}
              />
              <Image
                src="https://picsum.photos/seed/picsum/250/400"
                alt="Project Image"
                className="object-cover rounded-md"
                width={250}
                height={400}
              />
              <Image
                src="https://picsum.photos/seed/picsum/250/400"
                alt="Project Image"
                className="object-cover rounded-md"
                width={250}
                height={400}
              />
              <Image
                src="https://picsum.photos/seed/picsum/250/400"
                alt="Project Image"
                className="object-cover rounded-md"
                width={250}
                height={400}
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
