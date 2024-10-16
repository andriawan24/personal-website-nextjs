import Breadcrumb from "@/components/breadcrumb";
import React from "react";
import * as motion from "framer-motion/client";
import BlogItem from "@/components/blog-item";
import { allBlogs } from "contentlayer/generated";

export default function BlogsPage() {
  const blogs = allBlogs;
  return (
    <div className="px-4 md:px-24">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {blogs.map((blog) => {
            return <BlogItem key={blog._id} blog={blog} />;
          })}
        </div>
      </motion.div>
    </div>
  );
}
