import React from "react";
import { getStacks } from "./actions";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/admin/Card";
import { Button } from "@/components/admin/Button";
import Link from "next/link";
import StackList from "./stacks-list";

export default async function AdminTagsPage() {
  const stacks = await getStacks();

  if (!stacks.status) {
    throw new Error(stacks.message);
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-row justify-between items-center">
          <CardTitle>Stacks</CardTitle>
          <Link href="/admin/stacks/form">
            <Button variant="default" size="sm">
              <span>Add Stack</span>
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <StackList stacks={stacks.data} />
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
