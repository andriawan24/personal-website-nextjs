import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/admin/Card";
import React from "react";
import StackForm from "./stack-form";

export default function AdminTagAdd() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Stacks</CardTitle>
      </CardHeader>
      <CardContent>
        <StackForm />
      </CardContent>
    </Card>
  );
}
