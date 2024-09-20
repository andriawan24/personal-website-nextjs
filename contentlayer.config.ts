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
}));

export default makeSource({
  contentDirPath: "./src/data",
  documentTypes: [Project],
});
