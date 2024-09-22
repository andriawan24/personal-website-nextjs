import TitleWithLink from "@/components/views/title-with-link";
import RecentProjects from "./recent-projects";
import HeroLanding from "./hero-landing";
import { Metadata } from "next";
import RecentBlogs from "./recent-blogs";
import * as motion from "framer-motion/client";

export const metadata: Metadata = {
  title: "Home",
};

export default async function HomePage() {
  return (
    <main>
      <HeroLanding />
      <motion.div
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
        id="recent-projects"
        className="flex flex-col gap-4 px-4 md:px-32 py-4 md:py-12"
      >
        <TitleWithLink
          title="Recent Projects"
          link="/projects"
          titleLink="See All Projects"
        />
        <RecentProjects />
      </motion.div>
      <motion.div
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
        id="recent-posts"
        className="flex flex-col gap-4 px-4 md:px-32 py-4 md:py-12"
      >
        <TitleWithLink
          title="Recent Posts"
          link="/blogs"
          titleLink="See All Posts"
        />
        <RecentBlogs />
      </motion.div>
    </main>
  );
}
