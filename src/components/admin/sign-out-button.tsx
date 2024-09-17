"use client";

import { signOut } from "@/app/(backend)/admin/actions";
import React from "react";

export default function SignOutButton() {
  return (
    <button
      onClick={async () => {
        await signOut();
      }}
    >
      Sign out
    </button>
  );
}
