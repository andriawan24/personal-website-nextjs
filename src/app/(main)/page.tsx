import TitleWithLink from "@/components/views/title-with-link";
import RecentProjects from "./recent-projects";
import HeroLanding from "./hero-landing";
import { Metadata } from "next";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Home",
};

export default async function HomePage() {
  const allProjects = getProjects();

  return (
    <main>
      <HeroLanding />
      <div
        id="recent-projects"
        className="flex flex-col gap-4 px-4 md:px-32 py-4 md:py-12"
      >
        <TitleWithLink
          title="Recent Projects"
          link="/projects"
          titleLink="See All Projects"
        />
        <RecentProjects allProjects={allProjects} />
      </div>
      <div
        id="recent-posts"
        className="flex flex-col gap-4 px-4 md:px-32 py-4 md:py-12"
      >
        <TitleWithLink
          title="Recent Posts"
          link="/blogs"
          titleLink="See All Posts"
        />
        <RecentProjects allProjects={allProjects} />
      </div>
    </main>
  );
}
