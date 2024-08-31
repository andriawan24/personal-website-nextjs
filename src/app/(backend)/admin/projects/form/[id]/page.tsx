import React from "react";
import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/admin/Card";
import { getProject } from "../../actions";
import ProjectForm from "./project-form";

type Params = {
  params: {
    id: number;
  };
};

export default async function AdminTagsEdit({ params }: Params) {
  const project = await getProject(params.id);

  if (!project.status) {
    throw Error(project.message);
  }

  if (!project.data) {
    notFound();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Update Project</CardTitle>
      </CardHeader>
      <CardContent>
        <ProjectForm project={project.data} />
      </CardContent>
    </Card>
  );
}
