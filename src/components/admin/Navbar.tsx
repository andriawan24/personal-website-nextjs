"use client";

import { signOut } from "@/actions/auth";
import React from "react";

export default function AdminNavbar() {
  const handleSignOut = () => {
    signOut();
  };

  return (
    <header className="px-14 py-6 bg-slate-950 flex flex-row justify-between items-center">
      <div />
      <button
        onClick={handleSignOut}
        className="text-color-text-primary text-sm font-semibold px-4 py-2 bg-color-background-button-dark rounded-md hover:opacity-80 transition-all duration-200 active:opacity-100 active:transition-none"
      >
        Log out
      </button>
    </header>
  );
}
