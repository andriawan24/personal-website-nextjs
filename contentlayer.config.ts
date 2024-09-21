import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Project = defineDocumentType(() => ({
  name: "Projects",
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
  name: "Skills",
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
  },
}));

export default makeSource({
  contentDirPath: "./src/data",
  documentTypes: [Project, Skill],
});
