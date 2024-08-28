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
import ProjectList from "./project-list";

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
        <ProjectList projects={projects.data} />
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
