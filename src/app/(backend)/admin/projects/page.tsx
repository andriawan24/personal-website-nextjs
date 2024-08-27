import { Button } from "@/components/admin/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/admin/Card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/admin/Table";
import React from "react";
import { getProjects } from "./actions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/admin/DropdownMenu";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";

export default async function AdminProjects() {
  const projects = await getProjects();

  if (!projects.status) {
    throw new Error(projects.message);
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-row justify-between items-center">
          <CardTitle>Projects</CardTitle>
          <Link href="/admin/projects/form">
            <Button variant="default" size="sm">
              <span>Add Project</span>
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
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
            {projects.data.map((project) => (
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
                        // onClick={async () => {
                        //   const result = await deleteTag(tag.id);
                        //   if (result.status) {
                        //     setOpenToast(false);
                        //     window.clearTimeout(timerRef.current);
                        //     timerRef.current = window.setTimeout(() => {
                        //       console.log("here");
                        //       setOpenToast(true);
                        //       router.refresh();
                        //     }, 100);
                        //   }
                        // }}
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
      </CardContent>
      {/* <CardFooter> */}
      {/* <form className="flex items-center w-full justify-between">
          <div className="text-xs text-muted-foreground">
            Showing{" "}
            <strong>
              {Math.min(offset - productsPerPage, totalProducts) + 1}-{offset}
            </strong>{" "}
            of <strong>{totalProducts}</strong> products
          </div>
          <div className="flex">
            <Button
              formAction={prevPage}
              variant="ghost"
              size="sm"
              type="submit"
              disabled={offset === productsPerPage}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Prev
            </Button>
            <Button
              formAction={nextPage}
              variant="ghost"
              size="sm"
              type="submit"
              disabled={offset + productsPerPage > totalProducts}
            >
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form> */}
      {/* </CardFooter> */}
    </Card>
  );
}
