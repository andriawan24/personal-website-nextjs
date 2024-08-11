import Breadcrumb from "@/components/Breadcrumb";
import { Strings } from "@/utils/strings";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="px-4 md:px-32">
      <Breadcrumb title="About Me" />
      <div className="flex flex-col md:flex-row gap-12 items-center py-8 md:py-16">
        <Image
          className="rounded-2xl cursor-pointer hover:scale-[0.98] transition-all duration-200 transform md:hover:rotate-3"
          src={"/images/img_profile.webp"}
          height={450}
          width={400}
          alt={Strings.imageProfileAlt}
        />
        <div className="flex flex-col gap-2 md:gap-6">
          <h3 className="text-2xl font-semibold text-color-text-primary leading-140">
            Hello, You can call me Fawwaz
          </h3>
          <p className="text-lg md:text-xl font-medium leading-140 text-color-text-secondary">
            My programming journey started when I was in junior high school. I
            played around with my computer until I decided to enter Vocational
            High School with a Software Engineering major at SMK Negeri 2 Kota
            Bandung and ended up as an software engineering student at
            Universitas Pendidikan Indonesia.
          </p>
          <p className="text-lg md:text-xl font-medium leading-140 text-color-text-secondary">
            I`m currently {new Date().getFullYear() - 2002} years old, and I
            live in Bandung with my lovely parents and younger sister. My daily
            activities are studying, coding, and working during the workday and
            weekends. Sometimes, I play a game or watch my favorite movies when
            I`m bored.
          </p>
        </div>
      </div>
      {/* Section Skills */}
      <h3 className="font-bold text-2xl text-color-text-secondary">
        My Skills
      </h3>
      <div className="grid grid-cols-3 md:flex md:flex-row flex-wrap gap-4 md:gap-6 pt-4 md:pt-6 pb-16">
        <div className="flex flex-col gap-4 hover:-translate-y-1 duration-200 cursor-pointer transition-all justify-center items-center p-6 bg-color-background-card-dark rounded-lg">
          <Image
            className="w-14 h-14"
            src="/images/img_kotlin.png"
            width={60}
            height={60}
            alt={Strings.imageLogoAlt}
          />
          <h6 className="font-semibold text-lg md:text-xl text-color-text-primary">
            Kotlin
          </h6>
        </div>
        <div className="flex flex-col gap-4 hover:-translate-y-1 duration-200 cursor-pointer transition-all justify-center items-center p-6 bg-color-background-card-dark rounded-lg">
          <Image
            className="w-14 h-14"
            src="/images/img_kotlin.png"
            width={60}
            height={60}
            alt={Strings.imageLogoAlt}
          />
          <h6 className="font-semibold text-lg md:text-xl text-color-text-primary">
            Kotlin
          </h6>
        </div>
        <div className="flex flex-col gap-4 hover:-translate-y-1 duration-200 cursor-pointer transition-all justify-center items-center p-6 bg-color-background-card-dark rounded-lg">
          <Image
            className="w-14 h-14"
            src="/images/img_kotlin.png"
            width={60}
            height={60}
            alt={Strings.imageLogoAlt}
          />
          <h6 className="font-semibold text-lg md:text-xl text-color-text-primary">
            Kotlin
          </h6>
        </div>
        <div className="flex flex-col gap-4 hover:scale-[0.98] active:scale-100 hover:-translate-y-1 duration-200 cursor-pointer transition-all justify-center items-center p-6 bg-color-background-card-dark rounded-lg">
          <Image
            className="w-14 h-14"
            src="/images/img_kotlin.png"
            width={60}
            height={60}
            alt={Strings.imageLogoAlt}
          />
          <h6 className="font-semibold text-lg md:text-xl text-color-text-primary">
            Kotlin
          </h6>
        </div>
        <div className="flex flex-col gap-4 hover:-translate-y-1 duration-200 cursor-pointer transition-all justify-center items-center p-6 bg-color-background-card-dark rounded-lg">
          <Image
            className="w-14 h-14"
            src="/images/img_kotlin.png"
            width={60}
            height={60}
            alt={Strings.imageLogoAlt}
          />
          <h6 className="font-semibold text-lg md:text-xl text-color-text-primary">
            Kotlin
          </h6>
        </div>
        <div className="flex flex-col gap-4 hover:-translate-y-1 duration-200 cursor-pointer transition-all justify-center items-center p-6 bg-color-background-card-dark rounded-lg">
          <Image
            className="w-14 h-14"
            src="/images/img_kotlin.png"
            width={60}
            height={60}
            alt={Strings.imageLogoAlt}
          />
          <h6 className="font-semibold text-lg md:text-xl text-color-text-primary">
            Kotlin
          </h6>
        </div>
      </div>
      {/* Section Experiences */}
      <h3 className="font-bold text-2xl text-color-text-secondary">
        My Experiences
      </h3>
      <div className="flex flex-col pt-6 pb-4 md:pb-32">
        <div className="pb-6">
          <div className="flex flex-col justify-between gap-2 md:gap-4">
            <h3 className="text-color-text-primary font-bold text-2xl md:text-3xl leading-140">
              CEO Darurat - Google (Remote)
            </h3>
            <span className="text-color-text-secondary font-bold leading-140">
              2024 - Seterusnya
            </span>
          </div>
          <p className="mt-4 text-base md:text-lg leading-140 text-color-text-secondary">
            🚀 Key Achievements:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-2 mt-2">
            <li className="text-base md:text-lg text-color-text-secondary leading-140">
              Contribute to app development with millions of users accessing
              every day.
            </li>
            <li className="text-base md:text-lg text-color-text-secondary leading-140">
              Understanding how to collaborate and manage versioning in Git
              using GitHub.
            </li>
            <li className="text-base md:text-lg text-color-text-secondary leading-140">
              Contribute to app development with millions of users accessing
              every day.
            </li>
            <li className="text-base md:text-lg text-color-text-secondary leading-140">
              Contribute to app development with millions of users accessing
              every day.
            </li>
            <li className="text-base md:text-lg text-color-text-secondary leading-140">
              Contribute to app development with millions of users accessing
              every day.
            </li>
            <li className="text-base md:text-lg text-color-text-secondary leading-140">
              Contribute to app development with millions of users accessing
              every day.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
