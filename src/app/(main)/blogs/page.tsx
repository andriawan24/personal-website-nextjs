import Breadcrumb from "@/components/breadcrumb";
import React from "react";
import BlogList from "./blog-list";
import * as motion from "framer-motion/client";

export default function BlogsPage() {
  return (
    <div className="px-4 md:px-32">
      <Breadcrumb title="Blogs" />
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
        className="flex flex-col gap-12 pt-6 pb-4 md:pb-16"
      >
        <BlogList />
      </motion.div>
    </div>
  );
}
