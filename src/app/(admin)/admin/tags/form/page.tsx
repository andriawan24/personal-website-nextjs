import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/admin/Card";
import React from "react";
import TagForm from "./tag-form";

export default function AdminTagAdd() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Tag</CardTitle>
      </CardHeader>
      <CardContent>
        <TagForm />
      </CardContent>
    </Card>
  );
}
