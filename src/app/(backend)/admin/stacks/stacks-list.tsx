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
import * as Toast from "@radix-ui/react-toast";
import { MoreHorizontal } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { deleteStack } from "./actions";

type Params = {
  stacks: StackTypes[];
};

export default function StackList(param: Params) {
  const [openToast, setOpenToast] = useState(false);
  const timerRef = useRef(0);
  const router = useRouter();

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <Toast.ToastProvider>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="hidden w-max-sm sm:table-cell">
              <span className="sr-only">Image</span>
            </TableHead>
            <TableHead className="font-semibold">Name</TableHead>
            <TableHead className="font-semibold">Created At</TableHead>
            <TableHead className="font-semibold">Updated At</TableHead>
            <TableHead className="font-semibold">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {param.stacks.map((stack) => (
            <TableRow key={stack.id}>
              <TableCell className="hidden sm:table-cell">
                <a href={stack.image_url} target="_blank">
                  <Image
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src={stack.image_url}
                    width="64"
                    placeholder="blur"
                    blurDataURL="/images/img_profile.webp"
                    onError={(e) => console.log(e)}
                  />
                </a>
              </TableCell>
              <TableCell>{stack.name}</TableCell>
              <TableCell>
                {stack.created_at.split(" ")[1]},{" "}
                {stack.created_at.split(" ")[0]}
              </TableCell>
              <TableCell>
                {stack.updated_at.split(" ")[1]},{" "}
                {stack.updated_at.split(" ")[0]}
              </TableCell>
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
                        href={`/admin/stacks/form/${stack.id}`}
                      >
                        Edit
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer hover:bg-gray-200 rounded-md"
                      onClick={async () => {
                        const result = await deleteStack(stack.id);
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
          Successfully deleted tag
        </Toast.Title>
        <Toast.Description asChild>Test</Toast.Description>
      </Toast.Root>
      <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
    </Toast.ToastProvider>
  );
}
