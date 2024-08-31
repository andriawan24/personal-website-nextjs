import Breadcrumb from "@/components/breadcrumb";
import { Strings } from "@/utils/strings";
import Image from "next/image";
import React from "react";

export default function ProjectDetailDetail({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main>
      <div className="px-4 min-w-full">
        <Breadcrumb
          title="Detail Projects"
          tags={["Android Development", "Kotlin", "Java", "Mobile Development"]}
        />
      </div>
      <div className="mt-8">
        <Image
          src="https://picsum.photos/seed/picsum/1920/1080"
          alt="Project Image"
          className="h-80 w-full object-cover"
          width={1920}
          height={1080}
        />
      </div>
      <div className="flex flex-col gap-6 px-4 md:px-32 py-12">
        <h5 className="text-color-text-primary text-2xl font-bold leading-140">
          About The Project
        </h5>
        <div className="flex flex-col md:flex-row gap-2 md:gap-14">
          <h3 className="w-[250px] text-color-text-secondary font-semibold text-xl">
            Description
          </h3>
          <p className="text-lg md:text-xl font-thin flex-1 text-color-text-primary">
            BISA AI Academy is my first project. The app`s main feature is
            providing material learning and quizzes about Artificial
            Intelligence and basic programming. It has other features: job
            opportunities, events, competitions, AI simulations, and in-app
            payment.
            <br />
            <br />
            It was immensely struggling to work on this project, remembering
            that this was my first ever project. I am learning to build
            applications by doing, which was my biggest challenge. The app was
            created with Java and migrated to Kotlin using MVVM Architecture.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-14">
          <h3 className="w-[250px] text-color-text-secondary font-semibold text-xl">
            Development Start
          </h3>
          <p className="text-lg md:text-xl font-thin flex-1 text-color-text-primary">
            November 2019
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-14">
          <h3 className="w-[250px] text-color-text-secondary font-semibold text-xl">
            Development Start
          </h3>
          <p className="text-lg md:text-xl font-thin flex-1 text-color-text-primary">
            Android Application Engineer, Lead Mobile Application Engineer
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-14 mb-6">
          <h3 className="w-[250px] text-color-text-secondary font-semibold text-xl">
            Links
          </h3>
          <p className="text-lg md:text-xl font-thin flex-1 text-color-text-primary">
            <a className="underline underline-offset-4 decoration-1" href="">
              Github
            </a>
            ,&nbsp;
            <a className="underline underline-offset-4 decoration-1" href="">
              Playstore
            </a>
          </p>
        </div>
        <h5 className="text-color-text-primary text-2xl font-bold leading-140">
          Tech Stacks
        </h5>
        <div>
          <h3 className="text-color-text-secondary text-xl font-semibold leading-140">
            Languages
          </h3>
          <div className="flex flex-row flex-wrap gap-6 mt-2">
            <div className="flex flex-col gap-4 justify-center items-center px-6 py-4 bg-color-background-card-dark rounded-lg">
              <Image
                className="w-10 h-10"
                src="/images/img_kotlin.png"
                width={60}
                height={60}
                alt={Strings.imageLogoAlt}
              />
              <h6 className="font-semibold text-xl text-color-text-primary">
                Kotlin
              </h6>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center px-6 py-4 bg-color-background-card-dark rounded-lg">
              <Image
                className="w-10 h-10"
                src="/images/img_kotlin.png"
                width={60}
                height={60}
                alt={Strings.imageLogoAlt}
              />
              <h6 className="font-semibold text-xl text-color-text-primary">
                Kotlin
              </h6>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center px-6 py-4 bg-color-background-card-dark rounded-lg">
              <Image
                className="w-10 h-10"
                src="/images/img_kotlin.png"
                width={60}
                height={60}
                alt={Strings.imageLogoAlt}
              />
              <h6 className="font-semibold text-xl text-color-text-primary">
                Kotlin
              </h6>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-color-text-secondary text-xl font-semibold leading-140">
            Frameworks
          </h3>
          <div className="flex flex-row flex-wrap gap-6 mt-2">
            <div className="flex flex-col gap-4 justify-center items-center px-6 py-4 bg-color-background-card-dark rounded-lg">
              <Image
                className="w-10 h-10"
                src="/images/img_kotlin.png"
                width={60}
                height={60}
                alt={Strings.imageLogoAlt}
              />
              <h6 className="font-semibold text-xl text-color-text-primary">
                Android Native
              </h6>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center px-6 py-4 bg-color-background-card-dark rounded-lg">
              <Image
                className="w-10 h-10"
                src="/images/img_kotlin.png"
                width={60}
                height={60}
                alt={Strings.imageLogoAlt}
              />
              <h6 className="font-semibold text-xl text-color-text-primary">
                Kotlin
              </h6>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center px-6 py-4 bg-color-background-card-dark rounded-lg">
              <Image
                className="w-10 h-10"
                src="/images/img_kotlin.png"
                width={60}
                height={60}
                alt={Strings.imageLogoAlt}
              />
              <h6 className="font-semibold text-xl text-color-text-primary">
                Kotlin
              </h6>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-color-text-secondary text-xl font-semibold leading-140">
            Databases
          </h3>
          <div className="flex flex-row flex-wrap gap-6 mt-2">
            <div className="flex flex-col gap-4 justify-center items-center px-6 py-4 bg-color-background-card-dark rounded-lg">
              <Image
                className="w-10 h-10"
                src="/images/img_kotlin.png"
                width={60}
                height={60}
                alt={Strings.imageLogoAlt}
              />
              <h6 className="font-semibold text-xl text-color-text-primary">
                Android Native
              </h6>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center px-6 py-4 bg-color-background-card-dark rounded-lg">
              <Image
                className="w-10 h-10"
                src="/images/img_kotlin.png"
                width={60}
                height={60}
                alt={Strings.imageLogoAlt}
              />
              <h6 className="font-semibold text-xl text-color-text-primary">
                Kotlin
              </h6>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center px-6 py-4 bg-color-background-card-dark rounded-lg">
              <Image
                className="w-10 h-10"
                src="/images/img_kotlin.png"
                width={60}
                height={60}
                alt={Strings.imageLogoAlt}
              />
              <h6 className="font-semibold text-xl text-color-text-primary">
                Kotlin
              </h6>
            </div>
          </div>
        </div>
        <h5 className="text-color-text-primary text-2xl font-bold leading-140 mt-6">
          Application Overview
        </h5>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-6">
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
    </main>
  );
}
