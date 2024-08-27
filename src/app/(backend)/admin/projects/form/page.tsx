import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/admin/Card";
import React from "react";
import TagForm from "./project-form";

export default function AdminProject() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Project</CardTitle>
      </CardHeader>
      <CardContent>
        <TagForm />
      </CardContent>
    </Card>
  );
}
