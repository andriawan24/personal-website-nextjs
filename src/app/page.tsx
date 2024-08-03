import Hero from "@/components/HeroLanding";
import RecentProjects from "@/components/RecentProjects";
import TitleWithLink from "@/components/views/TitleWithLink";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className='flex flex-col gap-4 px-32 py-12'>
        <TitleWithLink title="Recent Projects" link="/projects" titleLink="See All Projects" />
        <RecentProjects />
      </div>
      <div className='flex flex-col gap-4 px-32 py-12'>
        <TitleWithLink title="Recent Posts" link="/blogs" titleLink="See All Posts" />
        <RecentProjects />
      </div>
    </main>
  );
}
