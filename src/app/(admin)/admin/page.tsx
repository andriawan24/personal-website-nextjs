import { sessionHelper } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const user = await sessionHelper.verifySession();
  if (!user.isAuth) redirect("/admin/login");

  return (
    <div>
      <h1>Welcome {user.user.name}</h1>
    </div>
  );
}
