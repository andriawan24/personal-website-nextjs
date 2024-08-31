"use client";

import { Button } from "@/components/admin/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/admin/DropdownMenu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/admin/Table";
import { MoreHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { deleteProject } from "./actions";
import * as Toast from "@radix-ui/react-toast";
import { ThickDividerHorizontalIcon } from "@radix-ui/themes";

export default function ProjectList({
  projects,
}: {
  projects: ProjectTypes[];
}) {
  const [openToast, setOpenToast] = useState(false);
  const timerRef = useRef(0);
  const router = useRouter();

  return (
    <Toast.Provider>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Live Production Link</TableHead>
            <TableHead>Github Link</TableHead>
            <TableHead>Roles</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
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
                    <DropdownMenuLabel>Properties</DropdownMenuLabel>
                    <DropdownMenuItem className="cursor-pointer hover:bg-gray-200 rounded-md">
                      <a
                        className="w-full h-full"
                        href={`/admin/projects/form/${project.id}/tags`}
                      >
                        Project Tags
                      </a>
                    </DropdownMenuItem>
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
          ))}
        </TableBody>
      </Table>

      <Toast.Root
        className="bg-green-700 rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
        open={openToast}
        onOpenChange={setOpenToast}
      >
        <Toast.Title className="[grid-area:_title] mb-[5px] font-medium text-white text-lg">
          Successfully deleted project
        </Toast.Title>
        <Toast.Description asChild>Test</Toast.Description>
      </Toast.Root>
      <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
    </Toast.Provider>
  );
}
