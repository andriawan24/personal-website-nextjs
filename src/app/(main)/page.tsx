import RecentProjects from "./recent-projects";
import HeroLanding from "./hero-landing";
import { Metadata } from "next";
import RecentBlogs from "./recent-blogs";
import HomeSection from "./home-section";

export const metadata: Metadata = {
  title: "Home",
};

export default async function HomePage() {
  return (
    <main>
      <HeroLanding />
      <HomeSection
        title="Recent Projects"
        titleLink="See all projects"
        link="/projects"
      >
        <RecentProjects />
      </HomeSection>
      <HomeSection title="Recent Posts" titleLink="See all posts" link="/blogs">
        <RecentBlogs />
      </HomeSection>
    </main>
  );
}
