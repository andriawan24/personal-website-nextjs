import React from "react";
import { getTag } from "../../actions";
import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/admin/Card";
import TagForm from "./tag-form";

type Params = {
  params: {
    id: number;
  };
};

export default async function AdminTagsEdit({ params }: Params) {
  const tag = await getTag(params.id);

  if (!tag.status) {
    throw Error(tag.message);
  }

  if (!tag.data) {
    notFound();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Update Tag</CardTitle>
      </CardHeader>
      <CardContent>
        <TagForm value={tag.data.name} id={tag.data.id} />
      </CardContent>
    </Card>
  );
}
