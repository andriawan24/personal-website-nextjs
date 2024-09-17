import SignOutButton from "@/components/admin/sign-out-button";
import { sessionHelper } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const user = await sessionHelper.verifySession();
  if (!user.isAuth) redirect("/admin/login");

  return (
    <div>
      <h1 className="font-bold text-3xl">Welcome {user.user.name}</h1>
      <SignOutButton />
    </div>
  );
}
