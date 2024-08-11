import Hero from "@/components/HeroLanding";
import RecentProjects from "@/components/RecentProjects";
import TitleWithLink from "@/components/views/TitleWithLink";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <div
        id="recent-projects"
        className="flex flex-col gap-4 px-4 md:px-32 py-4 md:py-12"
      >
        <TitleWithLink
          title="Recent Projects"
          link="/projects"
          titleLink="See All Projects"
        />
        <RecentProjects />
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
        <RecentProjects />
      </div>
    </main>
  );
}
