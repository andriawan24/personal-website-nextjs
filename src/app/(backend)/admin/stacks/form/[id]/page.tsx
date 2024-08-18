import React from "react";
import { getStack } from "../../actions";
import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/admin/Card";
import StackForm from "./stack-form";

type Params = {
  params: {
    id: number;
  };
};

export default async function AdminTagsEdit({ params }: Params) {
  const stack = await getStack(params.id);

  if (!stack.status) {
    throw Error(stack.message);
  }

  if (!stack.data) {
    notFound();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Update Stack</CardTitle>
      </CardHeader>
      <CardContent>
        <StackForm
          value={stack.data.name}
          image_url={stack.data.image_url}
          id={stack.data.id}
        />
      </CardContent>
    </Card>
  );
}
