"use client";

import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import React from "react";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-6 absolute top-0 bg-color-background-dark w-full h-full justify-center items-center">
      <div className="text-5xl font-bold text-color-text-primary">
        Page not found
      </div>
      <Button
        onClick={() => {
          router.replace("/");
        }}
        className="text-color-text-primary font-semibold hover:opacity-80 transition-all duration-200"
      >
        Back to Home
      </Button>
    </div>
  );
}
