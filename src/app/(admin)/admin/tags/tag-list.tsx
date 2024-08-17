import { Button } from "@/components/admin/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/admin/DropdownMenu";
import { TableCell, TableRow } from "@/components/admin/Table";
import { MoreHorizontal } from "lucide-react";
import React from "react";

type Params = {
  tags: TagsType[];
};

export default function TagList(param: Params) {
  return (
    <>
      {param.tags.map((tag) => (
        <TableRow key={tag.id}>
          <TableCell>{tag.name}</TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button aria-haspopup="true" size="icon" variant="ghost">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem className="cursor-pointer hover:bg-gray-200 rounded-md">
                  <a
                    className="w-full h-full"
                    href={`/admin/tags/form/${tag.id}`}
                  >
                    Edit
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-gray-200 rounded-md">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}
