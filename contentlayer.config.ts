import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "./projects/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: {
        type: "string",
      },
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (project) => `/projects/${project._raw.flattenedPath}`,
    },
  },
}));

export const Skill = defineDocumentType(() => ({
  name: "Skill",
  filePathPattern: "./skills/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
      required: true,
    },
    image_alt: {
      type: "string",
      required: true,
    },
    published: {
      type: "boolean",
      required: true,
      default: false,
    },
    tooltip: {
      type: "string",
      required: true,
    },
    link: {
      type: "string",
      required: true,
    },
  },
}));

export const Experience = defineDocumentType(() => ({
  name: "Experience",
  filePathPattern: "./experiences/**/*.mdx", // Assuming you're using .md or .mdx files
  fields: {
    position: { type: "string", required: true },
    company: { type: "string", required: true },
    working_type: { type: "string", required: true },
    location: { type: "string", required: true },
    from: { type: "string", required: true },
    to: { type: "string", required: true },
    achievements: { type: "list", of: { type: "string" }, required: true },
    published: { type: "boolean", required: true },
    sequence: { type: "number", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "./src/data",
  documentTypes: [Project, Skill, Experience],
});
