"use client";

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
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { deleteProject } from "./actions";

export default function ProjectList({ project }: { project: ProjectTypes }) {
  const [openToast, setOpenToast] = useState(false);
  const timerRef = useRef(0);
  const router = useRouter();

  return (
    <TableRow key={project.id}>
      <TableCell>{project.title}</TableCell>
      <TableCell>
        <a
          className="text-color-background-dark font-medium opacity-80 hover:opacity-60 hover:underline underline-offset-1 hover:underline-offset-4 transition-all duration-200"
          href={project.demo_link}
          target="_blank"
        >
          {project.demo_link}
        </a>
      </TableCell>
      <TableCell>
        <a
          className="text-color-background-dark font-medium opacity-80 hover:opacity-60 hover:underline underline-offset-0 hover:underline-offset-4 transition-all duration-200"
          href={project.github_link}
          target="_blank"
        >
          {project.github_link}
        </a>
      </TableCell>
      <TableCell>{project.roles}</TableCell>
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
                href={`/admin/projects/form/${project.id}`}
              >
                Edit
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer hover:bg-gray-200 rounded-md"
              onClick={async () => {
                const result = await deleteProject(project.id);
                if (result.status) {
                  setOpenToast(false);
                  window.clearTimeout(timerRef.current);
                  timerRef.current = window.setTimeout(() => {
                    console.log("here");
                    setOpenToast(true);
                    router.refresh();
                  }, 100);
                }
              }}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
