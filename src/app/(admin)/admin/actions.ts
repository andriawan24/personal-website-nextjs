"use server";

import { sessionHelper } from "@/lib/session";

export async function signOut() {
  sessionHelper.deleteSession();
}
