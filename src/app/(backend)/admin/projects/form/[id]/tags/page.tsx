import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/admin/Card";
import React from "react";
import { getProjectTags } from "./actions";
import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import AdminSelectProjectTags from "./select-project-tags";

type Params = {
  params: {
    id: number;
  };
};

export default async function AdminProjectTags({ params }: Params) {
  const response = await getProjectTags(params.id);
  if (!response.status) {
    throw Error(response.message);
  }

  const tags = response.data;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Tags</CardTitle>
      </CardHeader>
      <CardContent>
        {tags.map((tag) => (
          <p key={tag.id}>{tag.name}</p>
        ))}
        <AdminSelectProjectTags />
      </CardContent>
    </Card>
  );
}
